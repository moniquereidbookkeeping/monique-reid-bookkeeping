// ============================================================
//  Monique Reid Bookkeeping — Lead Capture Worker
//  Cloudflare Pages Function: POST /api/lead
//
//  Replaces Google Apps Script entirely.
//  Handles: Gemini expert brief · Resend emails · Sheets logging
//
//  Env vars (set in Cloudflare Pages → Settings → Environment Variables,
//  stored as encrypted secrets):
//    GEMINI_API_KEY       — Google AI Studio key
//    RESEND_API_KEY       — from resend.com
//    GOOGLE_SA_KEY        — service account JSON (full text, single line)
//    SPREADSHEET_ID       — ID of the Google Sheet that receives leads
//    TURNSTILE_SECRET_KEY — optional; when set, every request must pass Cloudflare Turnstile
//    GEMINI_MODEL         — optional; defaults to the model set in _lib/security.ts
// ============================================================

import { OFFERINGS_TEXT, breaksOfferRules } from '../_lib/offerings';
import { callGemini, DEFAULT_GEMINI_MODEL, allowedOrigin, clean, cleanName, corsHeaders, isEmail, json, rateLimited, readJsonBody, verifyTurnstile } from '../_lib/security';

export interface Env {
  GEMINI_API_KEY: string;
  RESEND_API_KEY: string;
  GOOGLE_SA_KEY: string;
  SPREADSHEET_ID: string;
  TURNSTILE_SECRET_KEY?: string;
  GEMINI_MODEL?: string;
}

const FROM_EMAIL   = 'monique@moniquereidbookkeeping.com';
const FROM_NAME    = 'Monique Reid';
const NOTIFY_EMAIL = 'moniquethebookkeeper@gmail.com';
const CALENDLY     = 'https://calendly.com/moniquethebookkeeper/20min';
const SHEET_NAME   = 'Leads';

export const onRequestOptions: PagesFunction = async (ctx) => {
  const origin = allowedOrigin(ctx.request);
  return new Response(null, { status: origin ? 204 : 403, headers: corsHeaders(origin) });
};

// ─────────────────────────────────────────────
//  Main handler
// ─────────────────────────────────────────────
export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  // Only our own pages may call this endpoint.
  const origin = allowedOrigin(ctx.request);
  if (!origin) return json({ error: 'Forbidden' }, 403, null);
  if (rateLimited(ctx.request, 'lead', 5)) return json({ error: 'Too many requests' }, 429, origin);

  try {
    const data = await readJsonBody(ctx.request);
    if (!data) return json({ error: 'Invalid request' }, 400, origin);

    if (!(await verifyTurnstile(ctx.env.TURNSTILE_SECRET_KEY, data.turnstileToken, ctx.request))) {
      return json({ error: 'Verification failed' }, 403, origin);
    }

    const name           = cleanName(data.name);
    const email          = typeof data.email === 'string' ? data.email.trim() : '';
    const pos            = clean(data.pos, 60);
    const status         = clean(data.status, 120);
    const packages       = clean(data.packages, 200);
    const accounts       = clean(data.accounts, 40);
    const revenue        = clean(data.revenue, 60);
    const timeInBusiness = clean(data.timeInBusiness, 60);
    const challenge      = clean(data.challenge, 600);

    if (!name || !email) {
      return json({ error: 'Missing name or email' }, 400, origin);
    }
    if (!isEmail(email)) {
      return json({ error: 'Invalid email' }, 400, origin);
    }

    // Run Gemini + tier detection in parallel
    const tier = detectTier(pos, packages, accounts, revenue);
    const cleanup = getCleanupRec(status);
    const briefResult = await generateExpertBrief(
      ctx.env, pos, status, packages, accounts, revenue, timeInBusiness, challenge, tier, cleanup,
    );
    const expert = briefResult.brief;
    if (expert) expert.recommendedPackage = enforcePackage(expert.recommendedPackage, tier, cleanup);
    const autoNote = getAutoNote(status);

    // The plan emailed to the prospect is built here on the server. Nothing the
    // browser sends can become email content.
    const aiSteps = safeSteps(expert?.steps);
    const steps = aiSteps ?? getFallbackSteps(status, pos);
    const aiError = aiSteps === null;

    // Emails — fire both, don't block on sheet
    const emailPromises = [
      sendNotifyEmail(ctx.env, { name, email, pos, status, packages, accounts,
        revenue, timeInBusiness, challenge, tier, cleanup, autoNote, aiError, expert, aiFailure: briefResult.reason || (aiError ? 'AI steps did not pass the price/timeline check, so the template plan was sent' : '') }),
      sendThankYouEmail(ctx.env, { name, email, pos, status, steps, aiError }),
    ];

    // Sheet append — fire & forget (don't fail the response if sheet is slow)
    const sheetPromise = appendToSheet(ctx.env, {
      name, email, pos, status, packages, accounts, revenue, timeInBusiness,
      challenge, autoNote, tier, cleanup, expert,
    }).catch(err => console.error('Sheet append failed:', err));

    await Promise.all([...emailPromises, sheetPromise]);

    return json({ success: true }, 200, origin);

  } catch (err) {
    console.error('Lead handler error:', err);
    return json({ success: false, error: 'Something went wrong' }, 500, origin);
  }
};

// ─────────────────────────────────────────────
//  Plan steps: validation + template fallback
// ─────────────────────────────────────────────
function safeSteps(raw: unknown): { title: string; body: string }[] | null {
  if (!Array.isArray(raw) || raw.length !== 3) return null;
  const out = raw.map((s) => ({
    title: clean((s as { title?: unknown })?.title, 80),
    body: clean((s as { body?: unknown })?.body, 160),
  }));
  if (!out.every((s) => s.title && s.body)) return null;
  // Reject anything that quotes an unknown price or promises a timeline.
  return out.some((s) => breaksOfferRules(s.title + ' ' + s.body)) ? null : out;
}

/** The package line must name exactly the tier our system matched. If the AI got it wrong, use our own sentence. */
function enforcePackage(text: unknown, tier: Tier, cleanup: Cleanup): string {
  const own = `Recommend the ${tier.name} plan (${tier.price}). ` +
    (cleanup.needed ? `A one-time engagement comes first: ${cleanup.tier} (${cleanup.price}).` : 'No cleanup is needed first.');
  const t = typeof text === 'string' ? text : '';
  if (!t || breaksOfferRules(t) || !t.includes(tier.price.replace('/mo', ''))) return own;
  const other = ['$497', '$797', '$1,197'].filter((x) => x !== tier.price.replace('/mo', ''));
  if (other.some((x) => t.includes(x))) return own;
  if (!cleanup.needed && /clean-?up/i.test(t)) return own;
  return t;
}

function getFallbackSteps(status: string, pos: string): { title: string; body: string }[] {
  const s = status.toLowerCase();
  const p = pos || 'your platform';
  if (s.includes('cleanup') || s.includes('4 to 12')) {
    return [
      { title: 'Historical Transaction Cleanup', body: `Categorize and reconcile all ${p} transactions month by month to rebuild accurate records from the ground up.` },
      { title: 'Correct Chart of Accounts', body: 'Rebuild your chart of accounts to properly separate clinical supplies, payroll, retail, and operating costs.' },
      { title: 'Tax-Ready File Delivery', body: 'Deliver a clean, fully reconciled QuickBooks file with P&L and Balance Sheet ready for your CPA.' },
    ];
  }
  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) {
    return [
      { title: 'Reconcile Payouts & Fees', body: `Reconcile ${p} batch deposits with merchant processing deductions so net banking activity and gross collections are clearly tracked.` },
      { title: 'Clean Chart of Accounts', body: 'Separate clinical supply COGS from general operating expenses for clearer service-line margin visibility.' },
      { title: 'Monthly Close Routine', body: 'Reconcile your accounts systematically each month with an organized Balance Sheet and Profit & Loss.' },
    ];
  }
  if (s.includes('new') || s.includes('not') || s.includes('set up')) {
    return [
      { title: 'QuickBooks Company File Setup', body: 'Configure your QBO account with the right settings, fiscal year, and industry classification from day one.' },
      { title: 'Chart of Accounts Build', body: 'Build a chart of accounts designed for aesthetic practices — service revenue, clinical supplies, retail, and payroll all properly separated.' },
      { title: `Connect ${p} to QuickBooks`, body: `Set up your ${p} reconciliation workflow so every deposit matches your bank statement automatically from the start.` },
    ];
  }
  return [
    { title: 'Service-Line P&L Report', body: `Break down ${p} revenue by treatment category so you can see exactly which services drive your margins.` },
    { title: 'Membership Revenue Tracking', body: 'Separate recurring membership income from retail and one-time services for cleaner, more accurate financial reporting.' },
    { title: 'Monthly Financial Review', body: 'Deliver a monthly P&L dashboard with your key metrics: revenue, COGS, payroll ratio, and net income — every month without fail.' },
  ];
}

// ─────────────────────────────────────────────
//  Tier detection
// ─────────────────────────────────────────────
interface Tier { name: string; price: string; flag: string; priority: string }

function detectTier(pos: string, packages: string, accounts: string, revenue: string): Tier {
  // Mirrors the plans on the website: Entry up to 3 accounts / under ~$25K a month,
  // Growth up to 6 accounts / ~$25K-$75K or memberships, financing, multiple systems,
  // Full-Spectrum 7+ accounts / $75K+ or multi-location.
  const pkg = packages.toLowerCase();
  const p = pos.toLowerCase();
  const rev = revenue.toLowerCase();
  const acct = parseInt(accounts, 10) || 0; // lower bound of "1 - 2", "3 - 4", "5 - 7", "8+"

  const underTen = rev.includes('under');
  const over75 = rev.includes('75,000+');
  const over30 = rev.startsWith('$30,000');
  const sellsMemberships = /member|package|cherry|carecredit|patientfi/.test(pkg);

  let level = 0; // 0 Entry, 1 Growth, 2 Full-Spectrum
  if (over75 || acct >= 8) level = 2;
  else if (over30 || acct >= 5) level = 1;
  // Memberships, packages or financing point to Growth, unless the practice is tiny.
  if (sellsMemberships && (!underTen || acct >= 3)) level = Math.max(level, 1);
  if (p.includes('multiple') || p.includes('multi')) level = Math.max(level, 1);

  if (level === 2) return { name: 'Full-Spectrum', price: '$1,197/mo', flag: '🔴', priority: 'HIGH-VALUE' };
  if (level === 1) return { name: 'Growth', price: '$797/mo', flag: '🟡', priority: 'STRONG FIT' };
  return { name: 'Entry', price: '$497/mo', flag: '🟢', priority: 'MAINTENANCE' };
}

// ─────────────────────────────────────────────
//  Cleanup recommendation
// ─────────────────────────────────────────────
interface Cleanup { needed: boolean; label: string; tier: string; price: string; note: string }

function getCleanupRec(status: string): Cleanup {
  const s = status.toLowerCase();
  if (s.includes('cleanup') || s.includes('4 to 12')) {
    return { needed: true, label: '🔴 CLEANUP REQUIRED', tier: '4–12 Months Behind → Full Cleanup',
      price: '$1,297 (4–6 months)  ·  $1,997 (7–12 months)',
      note: 'Full cleanup engagement needed BEFORE starting monthly bookkeeping.' };
  }
  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) {
    return { needed: true, label: '🟡 LIGHT CATCH-UP', tier: '1–3 Months Behind → Light Catch-Up',
      price: '$597 (fixed fee)',
      note: 'Quick catch-up — confirm scope and timeline on the call after reviewing their books. Move to monthly immediately after.' };
  }
  if (s.includes('new') || s.includes('not') || s.includes('set up')) {
    return { needed: false, label: '🔵 NEW SETUP NEEDED', tier: 'No QuickBooks Yet / Not Set Up',
      price: 'QBO Setup — project-based pricing',
      note: 'Recommend the QBO Setup service first. No cleanup needed.' };
  }
  return { needed: false, label: '✅ NO CLEANUP NEEDED', tier: 'Books Are Current',
    price: 'N/A — ready for Monthly Bookkeeping',
    note: 'Books are current. Can start monthly bookkeeping immediately.' };
}

function getAutoNote(status: string): string {
  const s = status.toLowerCase();
  if (s.includes('cleanup') || s.includes('4 to 12')) return '🚨 Full cleanup required — priority outreach';
  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) return '🔄 Light catchup needed — catchup + monthly package';
  if (s.includes('current') || s.includes('ongoing')) return '✅ Books current — maintenance + reporting plan';
  if (s.includes('new') || s.includes('not') || s.includes('set up')) return '🆕 New setup — QBO onboarding package';
  return '📋 Review needed';
}

// ─────────────────────────────────────────────
//  Gemini — private expert brief for Monique
// ─────────────────────────────────────────────
interface ExpertBrief {
  diagnosis: string;
  steps: { title: string; body: string }[];
  questions: string[];
  recommendedPackage: string;
}

async function generateExpertBrief(
  env: Env, pos: string, status: string, packages: string,
  accounts: string, revenue: string, timeInBusiness: string, challenge: string, tier: Tier, cleanup: Cleanup,
): Promise<{ brief: ExpertBrief | null; reason: string }> {
  if (!env.GEMINI_API_KEY) return { brief: null, reason: 'GEMINI_API_KEY is not set in Cloudflare' };

  const prompt =
    'You are the expert AI advisor for Monique Reid, a Certified QuickBooks ProAdvisor specializing exclusively in MedSpas, aesthetic clinics, and wellness practices. A prospect just submitted a bookkeeping health-check. Write Monique\'s private pre-call brief.\n\n' +
    'PROSPECT PROFILE:\n' +
    '- POS / Software: ' + (pos || 'not specified') + '\n' +
    '- QuickBooks Status: ' + (status || 'not specified') + '\n' +
    '- Revenue Model: ' + (packages || 'not specified') + '\n' +
    '- Bank/Card/Financing Accounts: ' + (accounts || 'not specified') + '\n' +
    '- Monthly Revenue: ' + (revenue || 'not specified') + '\n' +
    '- Practice Age: ' + (timeInBusiness || 'not specified') + '\n' +
    '- Biggest Challenge Stated: ' + (challenge || 'not specified') + '\n\n' +
    'Everything you write must follow this catalog and these rules:\n' + OFFERINGS_TEXT + '\n\n' +
    'Write four sections:\n\n' +
    'DIAGNOSIS: 2-3 sentences. Name the core bookkeeping problem or opportunity for THIS exact practice. Address their stated challenge directly. Reference their platform and QB status. Use real terminology (e.g. "net-payout reconciliation," "deferred revenue from prepaid packages," "1099 vs W-2 misclassification," "service-line margin tracking").\n\n' +
    'SOLUTION PLAN: 3 steps. Each step: title (3-6 words) + body (ONE short sentence, 15 words maximum, describing the OUTCOME for the client, not how it is done: no account names, workflows or setup mechanics; those belong on the call). Reference ' + (pos || 'their platform') + ' by name at least once. Use QuickBooks terminology throughout. Address their stated revenue level and challenge.\n\n' +
    'DISCOVERY CALL QUESTIONS: 4 sharp questions Monique should ask — specific to this platform, revenue model, practice age, and stated challenge. Not generic — make them sound like a specialist who already knows their world.\n\n' +
    'RECOMMENDED PACKAGE: One sentence. Our system has already matched this prospect to the ' + tier.name + ' tier (' + tier.price + '). Recommend exactly that tier, do not name any other tier or price, and say why it fits. Our system\'s cleanup assessment for this prospect is: ' + cleanup.label + ' (' + cleanup.note + '). Your package sentence must agree with that assessment: mention a one-time cleanup only if it says one is needed, and never promise how long anything will take.\n\n' +
    'Return ONLY valid JSON, no markdown wrapper:\n' +
    '{"diagnosis":"string","steps":[{"title":"string","body":"string"},{"title":"string","body":"string"},{"title":"string","body":"string"}],"questions":["string","string","string","string"],"recommendedPackage":"string"}';

  try {
    const res = await callGemini(
      env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL,
      env.GEMINI_API_KEY,
      prompt,
      { temperature: 0.7, maxOutputTokens: 4096, responseMimeType: 'application/json' },
    );
    const json = await res.json().catch(() => ({})) as {
      candidates?: { finishReason?: string; content?: { parts?: { text?: string }[] } }[];
      error?: { message?: string };
    };
    if (!res.ok) {
      const msg = (json.error?.message ?? '').replace(/(AIza|AQ\.)[\w.-]+/g, '[key]').slice(0, 160);
      console.error('Gemini expert brief HTTP error:', res.status, msg);
      return { brief: null, reason: `Gemini returned HTTP ${res.status}${msg ? ': ' + msg : ''}` };
    }
    const cand = json.candidates?.[0];
    const text = cand?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';
    if (!text) return { brief: null, reason: `Gemini returned no text (finish reason: ${cand?.finishReason ?? 'none'})` };
    try {
      return { brief: JSON.parse(text.trim()) as ExpertBrief, reason: '' };
    } catch {
      return { brief: null, reason: `Gemini output was not valid JSON (finish reason: ${cand?.finishReason ?? 'unknown'})` };
    }
  } catch (err) {
    console.error('Gemini expert brief error:', err);
    return { brief: null, reason: 'Could not reach Gemini' };
  }
}

// ─────────────────────────────────────────────
//  Email helpers (same copy as AppScript)
// ─────────────────────────────────────────────
function getStatusParagraph(status: string, pos: string): string {
  const s = status.toLowerCase();
  const platform = pos || 'your platform';
  if (s.includes('cleanup') || s.includes('4 to 12')) {
    return `A full cleanup is exactly where I specialize. Once I see your books, I'll give you a clear scope and timeline.`;
  }
  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) {
    return `Being a few months behind is common and very fixable. I'll give you a clear timeline once I see your books.`;
  }
  if (s.includes('current') || s.includes('ongoing')) {
    return `Current books put you ahead of most practices. The next step is reports that actually guide your decisions.`;
  }
  if (s.includes('new') || s.includes('not') || s.includes('set up')) {
    return `Setting up QuickBooks correctly from day one saves you from costly cleanup later.`;
  }
  return `Based on what you shared, here is a short plan for your practice.`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPSLine(status: string): string {
  const s = status.toLowerCase();
  if (s.includes('cleanup') || s.includes('4 to 12')) {
    return `P.S. — The longer a backlog sits, the harder it gets. On our call I'll give you a clear scope and an end date for getting caught up.`;
  }
  if (s.includes('1 to 3') || s.includes('slightly') || s.includes('behind')) {
    return `P.S. — A 1–3 month catchup is one of the quickest fixes in bookkeeping. It's usually quick work, and I'll give you a clear timeline on our call.`;
  }
  if (s.includes('current') || s.includes('ongoing')) {
    return `P.S. — Being current is a great foundation. The next level is having reports that actually tell you which services drive your margins — so every business decision is backed by real numbers, not guesswork.`;
  }
  if (s.includes('new') || s.includes('not') || s.includes('set up')) {
    return `P.S. — Getting it right from day one is always cheaper than cleaning it up later. I've seen new practices spend $3,000+ on cleanup that a proper setup at the start would have prevented entirely.`;
  }
  return `P.S. — If you have a specific question before we meet, just reply to this email. I read every one.`;
}

function formatStepsBlock(steps: { title: string; body: string }[]): string {
  if (!steps.length) return '';
  let block = 'Here is the 3-step plan I put together specifically for your practice:\n\n';
  steps.forEach((s, i) => {
    block += `STEP ${i + 1}: ${s.title.toUpperCase()}\n${s.body}\n\n`;
  });
  return block;
}

// ─────────────────────────────────────────────
//  Resend email sender
// ─────────────────────────────────────────────
async function sendViaResend(env: Env, opts: {
  to: string; subject: string; text: string;
  from?: string; fromName?: string; replyTo?: string;
}): Promise<void> {
  const from = `${opts.fromName ?? FROM_NAME} <${opts.from ?? FROM_EMAIL}>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [opts.to],
      subject: opts.subject,
      text: opts.text,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Resend ${res.status}: ${txt}`);
  }
}

// ─────────────────────────────────────────────
//  Notification email → Monique
// ─────────────────────────────────────────────
async function sendNotifyEmail(env: Env, d: {
  name: string; email: string; pos: string; status: string; packages: string;
  accounts: string; revenue: string; timeInBusiness: string; challenge: string;
  tier: Tier; cleanup: Cleanup; autoNote: string; aiError: boolean;
  expert: ExpertBrief | null; aiFailure: string;
}): Promise<void> {
  const cleanupBlock =
    '\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '🧹 CLEANUP / SETUP RECOMMENDATION\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    d.cleanup.label             + '\n' +
    'Tier:  ' + d.cleanup.tier  + '\n' +
    'Price: ' + d.cleanup.price + '\n' +
    'Note:  ' + d.cleanup.note  + '\n';

  const aiNote = d.aiError
    ? '\n⚠️  AI DIAGNOSTIC FAILED — template steps were sent to client.\n'
    : '\n✅  AI-generated plan was included in the thank-you email.\n';

  let expertBlock = '';
  if (d.expert) {
    expertBlock =
      '\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      '🤖 AI EXPERT BRIEF — FOR YOUR EYES ONLY\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      '📋 DIAGNOSIS\n' + (d.expert.diagnosis ?? '') + '\n\n' +
      '📌 SOLUTION PLAN\n' +
      (d.expert.steps ?? []).map((s, i) => `Step ${i + 1}: ${s.title}\n${s.body}`).join('\n\n') + '\n\n' +
      '💬 DISCOVERY CALL QUESTIONS\n' +
      (d.expert.questions ?? []).map(q => '• ' + q).join('\n') + '\n\n' +
      '💼 RECOMMENDED PACKAGE\n' + (d.expert.recommendedPackage ?? '') + '\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
  } else {
    expertBlock = '\n[AI expert brief unavailable — ' + (d.aiFailure || 'reason unknown') + ']';
  }

  await sendViaResend(env, {
    to: NOTIFY_EMAIL,
    from: FROM_EMAIL,
    fromName: 'MR Bookkeeping Leads',
    subject: `${d.tier.flag} New Lead [${d.tier.priority}]: ${d.name} (${d.pos || 'unknown platform'})`,
    text:
      'New lead from the website diagnostic.\n\n' +
      'Name:             ' + d.name           + '\n' +
      'Email:            ' + d.email          + '\n' +
      'Platform:         ' + d.pos            + '\n' +
      'QB Status:        ' + d.status         + '\n' +
      'Packages:         ' + d.packages       + '\n' +
      'Accounts:         ' + d.accounts       + '\n' +
      'Monthly Revenue:  ' + d.revenue        + '\n' +
      'Time in Business: ' + d.timeInBusiness + '\n' +
      'Biggest Challenge: ' + d.challenge     + '\n\n' +
      'Tier Match: ' + d.tier.name + ' — ' + d.tier.price + '\n' +
      'Auto Note:  ' + d.autoNote + '\n' +
      cleanupBlock +
      aiNote +
      expertBlock + '\n\n' +
      'Reply: ' + d.email + '\n' +
      'Book:  ' + CALENDLY,
  });
}

// ─────────────────────────────────────────────
//  Thank-you email → prospect
// ─────────────────────────────────────────────
async function sendThankYouEmail(env: Env, d: {
  name: string; email: string; pos: string; status: string;
  steps: { title: string; body: string }[]; aiError: boolean;
}): Promise<void> {
  const firstName = (d.name.split(' ')[0] || d.name).slice(0, 30);
  const subjectLine = d.pos
    ? `Your ${d.pos} bookkeeping plan, ${firstName}`
    : `Your MedSpa bookkeeping plan, ${firstName}`;

  const body =
    `Hi ${firstName},\n\n` +
    getStatusParagraph(d.status, d.pos) + '\n\n' +
    formatStepsBlock(d.steps) +
    `I'd love to walk through this with you — 20 minutes, no sales pitch, just a clear picture of where your books stand and exactly what it takes to get them right.\n\n` +
    '──────────────────────────────\n' +
    '→ Book your free 20-minute call:\n' +
    CALENDLY + '\n' +
    '──────────────────────────────\n\n' +
    `— Monique Reid\n` +
    `Certified QuickBooks ProAdvisor\n` +
    `MedSpa, Aesthetic & Wellness Practices\n` +
    `Monique Reid Bookkeeping | ${FROM_EMAIL}`;

  await sendViaResend(env, {
    to: d.email,
    from: FROM_EMAIL,
    fromName: FROM_NAME,
    replyTo: FROM_EMAIL,
    subject: subjectLine,
    text: body,
  });
}

// ─────────────────────────────────────────────
//  Google Sheets append via service account JWT
// ─────────────────────────────────────────────
async function appendToSheet(env: Env, d: {
  name: string; email: string; pos: string; status: string; packages: string;
  accounts: string; revenue: string; timeInBusiness: string; challenge: string;
  autoNote: string; tier: Tier; cleanup: Cleanup; expert: ExpertBrief | null;
}): Promise<void> {
  if (!env.GOOGLE_SA_KEY || !env.SPREADSHEET_ID) {
    console.warn('Sheet logging skipped — GOOGLE_SA_KEY or SPREADSHEET_ID not set');
    return;
  }

  const accessToken = await getGoogleAccessToken(env.GOOGLE_SA_KEY);
  const now = new Date().toISOString();

  const row = [
    now,
    d.name,
    d.email,
    d.pos,
    d.status,
    d.packages,
    d.accounts,
    d.revenue,
    d.timeInBusiness,
    d.challenge,
    d.autoNote,
    d.tier.name,
    d.tier.price,
    d.expert?.diagnosis ?? '',
    d.expert?.steps?.[0] ? `${d.expert.steps[0].title}: ${d.expert.steps[0].body}` : '',
    d.expert?.steps?.[1] ? `${d.expert.steps[1].title}: ${d.expert.steps[1].body}` : '',
    d.expert?.steps?.[2] ? `${d.expert.steps[2].title}: ${d.expert.steps[2].body}` : '',
    d.expert?.questions?.[0] ?? '',
    d.expert?.questions?.[1] ?? '',
    d.expert?.questions?.[2] ?? '',
    d.expert?.questions?.[3] ?? '',
    d.expert?.recommendedPackage ?? '',
    '❌ Not Yet',
  ];

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${env.SPREADSHEET_ID}/values/` +
    `${encodeURIComponent(SHEET_NAME)}!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [row] }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Sheets API ${res.status}: ${txt}`);
  }
}

// ─────────────────────────────────────────────
//  Google Service Account JWT
// ─────────────────────────────────────────────
async function getGoogleAccessToken(saKeyJson: string): Promise<string> {
  const sa = JSON.parse(saKeyJson) as {
    client_email: string;
    private_key: string;
  };
  const now = Math.floor(Date.now() / 1000);

  const headerB64  = toBase64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claimB64   = toBase64url(JSON.stringify({
    iss:   sa.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud:   'https://oauth2.googleapis.com/token',
    exp:   now + 3600,
    iat:   now,
  }));

  const sigInput = `${headerB64}.${claimB64}`;

  const pemBody = sa.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s/g, '');

  const binaryKey = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey.buffer as ArrayBuffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const sigBytes = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(sigInput),
  );

  const jwt = `${sigInput}.${arrayBufferToBase64url(sigBytes)}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json() as { access_token?: string; error?: string };
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
