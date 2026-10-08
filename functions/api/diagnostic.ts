// ============================================================
//  Monique Reid Bookkeeping — AI Diagnostic Function
//  Cloudflare Pages Function: POST /api/diagnostic
//  Calls Gemini API to generate unique 3-step plans
// ============================================================

import { OFFERINGS_TEXT, breaksOfferRules } from '../_lib/offerings';
import { callGemini, DEFAULT_GEMINI_MODEL, allowedOrigin, clean, corsHeaders, json, rateLimited, readJsonBody } from '../_lib/security';

export interface Env {
  GEMINI_API_KEY: string;
  GEMINI_MODEL?: string; // optional; see DEFAULT_GEMINI_MODEL
}

interface DiagnosticRequest {
  status: string;
  pos: string;
  packages: string;
  accounts: string;
}

interface Step {
  title: string;
  body: string;
}

// Handle CORS preflight (our own pages only)
export const onRequestOptions: PagesFunction = async (context) => {
  const origin = allowedOrigin(context.request);
  return new Response(null, { status: origin ? 204 : 403, headers: corsHeaders(origin) });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const origin = allowedOrigin(context.request);
  if (!origin) return json({ error: 'Forbidden' }, 403, null);
  if (rateLimited(context.request, 'diagnostic', 8)) {
    return json({ error: 'Too many requests' }, 429, origin);
  }

  try {
    const body = await readJsonBody(context.request);
    if (!body) return json({ error: 'Invalid request' }, 400, origin);

    // Short, single-line values only: these go into an AI prompt.
    const status = clean(body.status, 120);
    const pos = clean(body.pos, 60);
    const packages = clean(body.packages, 200);
    const accounts = clean(body.accounts, 40);

    if (!status || !pos) {
      return json({ error: 'Missing required fields' }, 400, origin);
    }

    const apiKey = context.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured');
      return json({ error: 'API not configured' }, 500, origin);
    }

    const prompt = buildPrompt(status, pos, packages, accounts);

    const geminiRes = await callGemini(
      context.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL,
      apiKey,
      prompt,
      { temperature: 0.75, maxOutputTokens: 4096, responseMimeType: 'application/json' },
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => '');
      console.error('Gemini API error:', geminiRes.status, errText);
      return json({ error: 'AI service unavailable', reason: `gemini-http-${geminiRes.status}` }, 502, origin);
    }

    const geminiData = await geminiRes.json() as {
      candidates?: { finishReason?: string; content?: { parts?: { text?: string }[] } }[];
    };

    // Newer Gemini models can return several parts; join them all.
    const cand = geminiData.candidates?.[0];
    const rawText = cand?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';

    // Parse the JSON array out of the response
    const steps = parseSteps(rawText);
    if (steps && steps.some((s) => breaksOfferRules(s.title + ' ' + s.body))) {
      console.error('AI steps rejected by offer rules');
      return json({ error: 'Unexpected AI response format', reason: 'offer-rules' }, 500, origin);
    }
    if (!steps) {
      console.error('Failed to parse steps from Gemini response:', cand?.finishReason, rawText);
      return json({ error: 'Unexpected AI response format', reason: `finish:${cand?.finishReason ?? 'none'} len:${rawText.length}` }, 500, origin);
    }

    return json({ steps }, 200, origin);

  } catch (err) {
    console.error('Diagnostic function error:', err);
    return json({ error: 'Internal error' }, 500, origin);
  }
};

// ─── Helpers ────────────────────────────────────────────────

function buildPrompt(status: string, pos: string, packages: string, accounts: string): string {
  return `You are Monique Reid, a Certified Intuit ProAdvisor who specializes exclusively in MedSpa, aesthetic, and wellness practices. You have just received a bookkeeping health check submission from a practice owner.

PRACTICE PROFILE:
- QuickBooks Status: ${status}
- Point-of-Sale / Practice Management Platform: ${pos}
- Revenue Model: ${packages}
- Number of Bank, Card & Financing Accounts: ${accounts}

Write a personalized 3-step action plan for this exact practice. Rules:
1. Each step must reference the client's specific platform (${pos}) by name at least once across the three steps.
2. Steps must directly address the QB status situation described above (${status}).
3. Where the revenue model is relevant (${packages}), name it specifically — e.g. "membership dues," "Cherry/CareCredit financing splits," "package redemption liabilities."
4. The account count (${accounts}) should inform step complexity — more accounts = more reconciliation detail.
5. Write in Monique's voice: direct, expert, confident. No fluff. No generic advice.
6. Use real bookkeeping terminology: reconciliation, chart of accounts, P&L, journal entry, clearing account, deferred revenue, etc.
7. Each step title is 4–8 words. Each body is ONE short sentence, 15 words maximum. Describe the OUTCOME the practice gets, not how it is done: no account names, no step-by-step workflows, no setup mechanics, no chart-of-accounts details.
8. Never name a plan tier (Essential, Growth, Full-Spectrum) or a price; the plan is chosen on the call. Describe only work that Monique actually offers (catalog below). Do not quote prices and do not promise how long anything takes.

CATALOG AND RULES:
${OFFERINGS_TEXT}

Return ONLY a JSON array with exactly 3 objects, no markdown, no wrapper text:
[{"title":"...","body":"..."},{"title":"...","body":"..."},{"title":"...","body":"..."}]`;
}

function parseSteps(raw: string): Step[] | null {
  try {
    // Try direct parse first (when responseMimeType = application/json works)
    const direct = JSON.parse(raw.trim());
    if (isValidSteps(direct)) return tidy(direct);
  } catch { /* fall through */ }

  // Extract array from anywhere in the string
  const match = raw.match(/\[[\s\S]*?\]/);
  if (!match) return null;

  try {
    const parsed = JSON.parse(match[0]);
    if (isValidSteps(parsed)) return tidy(parsed);
  } catch { /* fall through */ }

  return null;
}

function tidy(steps: Step[]): Step[] {
  return steps.map((s) => ({ title: clean(s.title, 80), body: clean(s.body, 160) }));
}

function isValidSteps(val: unknown): val is Step[] {
  return (
    Array.isArray(val) &&
    val.length === 3 &&
    val.every(
      (s) =>
        typeof s === 'object' &&
        s !== null &&
        typeof (s as Step).title === 'string' &&
        typeof (s as Step).body === 'string',
    )
  );
}
