// Scheduled Worker: deletes Health Check lead rows older than 24 months from the
// "Leads" Google Sheet, honoring the Privacy Policy's retention promise (see the
// Launch Compliance Audit, finding S11 — "Health Check submissions are kept in our
// lead records for up to 24 months, then deleted").
//
// This reuses the SAME Google service account already used by the main site's
// functions/api/lead.ts to append rows in the first place — that key already has
// full read/write access to the spreadsheet (scope: .../auth/spreadsheets), so no
// new Google Cloud setup is needed. Just copy the two secret values from the Pages
// project into this Worker (see ../README.md for exact steps).
//
// Runs weekly on a schedule. The deployed Worker has no public URL (workers_dev = false in
// wrangler.toml), so the fetch handler below is only reachable when running it locally with
// `wrangler dev` — see "Run it right now" in ../README.md.

export interface Env {
  GOOGLE_SA_KEY: string;
  SPREADSHEET_ID: string;
}

const SHEET_NAME = 'Leads';
const RETENTION_MONTHS = 24;
// Column A is the ISO timestamp `appendToSheet()` writes first, in functions/api/lead.ts.
const TIMESTAMP_COLUMN = 'A';

export default {
  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(
      purgeOldLeads(env).then(
        (n) => console.log(`[lead-retention-purge] deleted ${n} row(s) older than ${RETENTION_MONTHS} months`),
        (err) => console.error('[lead-retention-purge] failed:', err),
      ),
    );
  },

  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(
        'This Worker purges Leads sheet rows older than 24 months. ' +
          'It runs weekly on its own schedule. POST here to run it immediately.',
        { status: 405 },
      );
    }
    try {
      const deleted = await purgeOldLeads(env);
      return new Response(JSON.stringify({ ok: true, deleted }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: String(err) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};

async function purgeOldLeads(env: Env): Promise<number> {
  if (!env.GOOGLE_SA_KEY || !env.SPREADSHEET_ID) {
    throw new Error('GOOGLE_SA_KEY or SPREADSHEET_ID not set — see README.md');
  }

  const accessToken = await getGoogleAccessToken(env.GOOGLE_SA_KEY);
  const sheetId = await getSheetGid(env.SPREADSHEET_ID, SHEET_NAME, accessToken);

  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - RETENTION_MONTHS);

  const timestamps = await getColumn(env.SPREADSHEET_ID, SHEET_NAME, TIMESTAMP_COLUMN, accessToken);

  // 0-based row indexes (as the Sheets API counts them) whose timestamp parses
  // as a real date older than the cutoff. A row that doesn't parse as a date
  // (e.g. a header row, or a blank trailing row) is left alone rather than
  // guessed at — better to under-delete than to ever delete the wrong row.
  const staleRowIndexes: number[] = [];
  timestamps.forEach((cell, i) => {
    const d = new Date(cell);
    if (!isNaN(d.getTime()) && d < cutoff) staleRowIndexes.push(i);
  });

  if (staleRowIndexes.length === 0) return 0;

  // Delete from the bottom up in one batch so earlier row indexes never shift
  // out from under a later delete in the same request.
  const requests = staleRowIndexes
    .sort((a, b) => b - a)
    .map((rowIndex) => ({
      deleteDimension: {
        range: { sheetId, dimension: 'ROWS', startIndex: rowIndex, endIndex: rowIndex + 1 },
      },
    }));

  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${env.SPREADSHEET_ID}:batchUpdate`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ requests }),
  });
  if (!res.ok) {
    throw new Error(`Sheets batchUpdate ${res.status}: ${await res.text().catch(() => '')}`);
  }

  return staleRowIndexes.length;
}

async function getSheetGid(spreadsheetId: string, sheetName: string, accessToken: string): Promise<number> {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`Sheets metadata ${res.status}: ${await res.text().catch(() => '')}`);
  const data = (await res.json()) as { sheets: { properties: { sheetId: number; title: string } }[] };
  const sheet = data.sheets.find((s) => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet tab "${sheetName}" not found in spreadsheet ${spreadsheetId}`);
  return sheet.properties.sheetId;
}

async function getColumn(
  spreadsheetId: string,
  sheetName: string,
  column: string,
  accessToken: string,
): Promise<string[]> {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/` +
      `${encodeURIComponent(sheetName)}!${column}:${column}`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  if (!res.ok) throw new Error(`Sheets values.get ${res.status}: ${await res.text().catch(() => '')}`);
  const data = (await res.json()) as { values?: string[][] };
  return (data.values ?? []).map((row) => row[0] ?? '');
}

// ── Google Service Account JWT ──
// Identical logic to getGoogleAccessToken() in functions/api/lead.ts — kept as a
// separate copy here because this Worker is a separate deployable unit from the
// Pages Functions project and can't import across that boundary.
async function getGoogleAccessToken(saKeyJson: string): Promise<string> {
  const sa = JSON.parse(saKeyJson) as { client_email: string; private_key: string };
  const now = Math.floor(Date.now() / 1000);

  const headerB64 = toBase64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claimB64 = toBase64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    }),
  );

  const sigInput = `${headerB64}.${claimB64}`;

  const pemBody = sa.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s/g, '');

  const binaryKey = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey.buffer as ArrayBuffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const sigBytes = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(sigInput));

  const jwt = `${sigInput}.${arrayBufferToBase64url(sigBytes)}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const tokenData = (await tokenRes.json()) as { access_token?: string; error?: string };
  if (!tokenData.access_token) {
    throw new Error(`Google token error: ${JSON.stringify(tokenData)}`);
  }
  return tokenData.access_token;
}

function toBase64url(str: string): string {
  return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function arrayBufferToBase64url(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let str = '';
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
