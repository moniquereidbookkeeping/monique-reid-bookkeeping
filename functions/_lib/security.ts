// Shared request-safety helpers for the Pages Functions (/api/lead, /api/diagnostic).
// This file exports no onRequest handlers, so Cloudflare Pages does not turn it into a route.

/** Google retired gemini-2.0-flash on 1 June 2026. Override with the GEMINI_MODEL variable if this one changes. */
export const DEFAULT_GEMINI_MODEL = 'gemini-3.6-flash';

const ALLOWED_ORIGINS = new Set([
  'https://moniquereidbookkeeping.com',
  'https://www.moniquereidbookkeeping.com',
  'https://mr-bookkeeping.pages.dev',
  'https://monique-reid-bookkeeping.pages.dev',
  'http://localhost:3000',
]);

/** Pages preview deployments look like https://<hash-or-branch>.<project>.pages.dev */
const PREVIEW_ORIGIN = /^https:\/\/[a-z0-9-]+\.(mr-bookkeeping|monique-reid-bookkeeping)\.pages\.dev$/;

function originOf(request: Request): string {
  const origin = request.headers.get('Origin');
  if (origin) return origin;
  const referer = request.headers.get('Referer');
  if (!referer) return '';
  try {
    return new URL(referer).origin;
  } catch {
    return '';
  }
}

/** Returns the caller's origin if it is one of ours, otherwise null. */
export function allowedOrigin(request: Request): string | null {
  const origin = originOf(request);
  if (!origin) return null;
  return ALLOWED_ORIGINS.has(origin) || PREVIEW_ORIGIN.test(origin) ? origin : null;
}

export function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

export function json(body: unknown, status: number, origin: string | null): Response {
  return Response.json(body, { status, headers: corsHeaders(origin) });
}

/** Reads a JSON object body, refusing anything larger than maxBytes. */
export async function readJsonBody(
  request: Request,
  maxBytes = 16_384,
): Promise<Record<string, unknown> | null> {
  const declared = Number(request.headers.get('Content-Length') ?? '0');
  if (declared > maxBytes) return null;
  const text = await request.text();
  if (text.length > maxBytes) return null;
  try {
    const data = JSON.parse(text);
    return data && typeof data === 'object' && !Array.isArray(data)
      ? (data as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

/** Strips control characters and URLs, collapses whitespace and caps the length. */
export function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\b(?:https?:\/\/|www\.)\S+/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

/** A person's name: letters, spaces, hyphens, apostrophes and periods only. */
export function cleanName(value: unknown, max = 60): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[^\p{L}\p{M}\s'’.-]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

export function isEmail(value: string): boolean {
  return (
    value.length <= 254 &&
    /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]{2,}$/.test(value)
  );
}

// ── Best-effort rate limit ─────────────────────────────────────────────
// Lives in one Worker instance's memory, so it only slows down simple abuse.
// A Cloudflare rate-limiting rule on /api/* is the real control.
const hits = new Map<string, number[]>();

export function rateLimited(request: Request, bucket: string, limit: number, windowMs = 60_000): boolean {
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return recent.length > limit;
}

// ── Cloudflare Turnstile (optional until TURNSTILE_SECRET_KEY is set) ──
export async function verifyTurnstile(
  secret: string | undefined,
  token: unknown,
  request: Request,
): Promise<boolean> {
  if (!secret) return true; // not configured yet: skip
  if (typeof token !== 'string' || !token || token.length > 2048) return false;
  try {
    const body = new FormData();
    body.append('secret', secret);
    body.append('response', token);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) body.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export const FALLBACK_GEMINI_MODEL = 'gemini-3.5-flash-lite';

/**
 * Calls Gemini and keeps going if Google is busy.
 *  - low "thinking" effort so replies come back in a few seconds
 *    (retried without it if Google rejects the setting with HTTP 400)
 *  - if the model is overloaded (429/500/503/504): one quick retry, then a backup model
 */
export async function callGemini(
  model: string,
  apiKey: string,
  prompt: string,
  generationConfig: Record<string, unknown>,
): Promise<Response> {
  const attempt = async (m: string): Promise<Response> => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`;
    const send = (cfg: Record<string, unknown>) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: cfg }),
      });
    const res = await send({ ...generationConfig, thinkingConfig: { thinkingLevel: 'low' } });
    return res.status === 400 ? send(generationConfig) : res;
  };
  const busy = (r: Response) => [429, 500, 503, 504].includes(r.status);

  let res = await attempt(model);
  if (!busy(res)) return res;
  await new Promise((r) => setTimeout(r, 600));
  res = await attempt(model);
  if (!busy(res) || model === FALLBACK_GEMINI_MODEL) return res;
  return attempt(FALLBACK_GEMINI_MODEL);
}
