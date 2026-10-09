// Single place that describes what Monique Reid Bookkeeping actually sells.
// The AI prompts read this text, and the checks below reject AI output that
// quotes prices or promises timelines that are not on the website.
//
// KEEP IN SYNC with src/components/ServicesSection.tsx and PricingSection.tsx.

export const MONTHLY_PRICES = { Essential: '$497', Growth: '$797', 'Full-Spectrum': '$1,197' } as const;

/** Every dollar amount that appears on the public site. */
const ALLOWED_AMOUNTS = new Set(['$497', '$797', '$1,197', '$597', '$1,297', '$1,997']);

export const OFFERINGS_TEXT = `
SERVICES AND PRICING (this is the complete, official list. Use only this).

Monthly Bookkeeping (fixed monthly plans, QuickBooks Online):
- Essential, $497/mo: solo providers and single-location practices under about $25K/month with a straightforward setup; up to 3 accounts; bank and credit-card reconciliations, POS and merchant payout reconciliation, categorization, monthly P&L and Balance Sheet, year-end CPA package.
- Growth, $797/mo: practices about $25K to $75K/month, or with memberships, prepaid packages, patient financing (Cherry, CareCredit, PatientFi), multiple POS or payment systems; up to 6 accounts; adds membership and package tracking, financing reconciliation, provider compensation reconciliation, month-over-month revenue reporting, executive financial summary.
- Full-Spectrum, $1,197/mo: practices $75K+/month, multi-location or 7+ accounts; adds multi-location tracking, inventory and treatment-cost (COGS) tracking, provider payout reconciliation, revenue by service category, plain-language commentary, priority response.

QuickBooks Cleanup and Catch-Up (one-time, fixed price once scope is agreed, free preliminary review):
- 1-3 months behind: $597. 4-6 months behind: $1,297. 7-12 months behind: $1,997. 13+ months or multi-entity: custom quote.

Other services: Financial Reporting and KPIs (from $797/mo, paired with monthly bookkeeping); Aesthetic and Wellness specialization (treatment COGS, unearned revenue for packages, gift cards and memberships, provider commission and 1099 payout clearing, financing fee reconciliation, IV hydration and GLP-1 revenue tracking); QuickBooks Setup and Chart of Accounts (project-based pricing); Historical Financial Records and Reporting (project-based pricing).

Platforms commonly reconciled from their reports (no integration claims): Boulevard, Vagaro, Jane App, Mindbody, Zenoti, Square, Mangomint, Stripe. Patient financing commonly reconciled: Cherry, CareCredit, PatientFi, Affirm.

HARD RULES FOR ANYTHING YOU WRITE:
- Only name services, plans, features and platforms from the list above. Never invent a service, discount, package or price, and never claim a direct software integration with any platform — Monique reconciles from their reports.
- Only quote a price if it appears above, and never a different price for the same plan.
- Never promise how long anything will take (no "within 30 days", "2-3 weeks", "fast", "guaranteed"). A clear timeline is given on the call after reviewing their books.
- Monique does not file taxes, give tax or legal advice, or give audit or valuation opinions, and is not a CPA or enrolled agent.
- Never mention HIPAA, patient data, patient records or patient health information — this is bookkeeping on financial records only.
- Never use "tax-ready", "deductions", "always", "never miss", "without fail", or promise savings.
`.trim();

/** True when AI text breaks the rules above (unknown price, timeline promise, guarantee, or an off-limits claim). */
export function breaksOfferRules(text: string): boolean {
  const amounts = text.match(/\$\s?\d[\d,]*(?:\.\d+)?\s?[kK]?/g) ?? [];
  if (amounts.some((a) => !ALLOWED_AMOUNTS.has(a.replace(/\s/g, '')))) return true;
  // Timeline promises. "months" alone is allowed because plans describe how far behind a practice is.
  if (/\b(?:within|inside|in|under|in just|in about|in only)\s+(?:about\s+|just\s+|only\s+)?\d+\s*(?:(?:-|–|to)\s*\d+\s*)?(?:business\s+)?(?:days?|weeks?)\b/i.test(text)) return true;
  if (/\bwithin\s+(?:about\s+)?\d+\s*(?:(?:-|–|to)\s*\d+\s*)?months?\b/i.test(text)) return true;
  if (/\bguarantee[ds]?\b/i.test(text)) return true;
  // Content-rule guardrails (docs/niche-pain-points.md): no HIPAA/patient-data implication,
  // no claimed CPA/EA credential, no tax-prep framing, no absolute promises.
  if (/\bHIPAA\b/i.test(text)) return true;
  if (/\bpatients?\s+(data|information|records?|health)\b/i.test(text)) return true;
  // Only block CPA/enrolled-agent mentions that claim it as Monique's own credential.
  // A plain mention ("hand your CPA a clean package", "CPA-Ready") is fine and expected.
  if (/\b(?:i am|i'm|we are|we're|monique(?: reid)?(?: bookkeeping)?\s+is)\s+(?:a |an )?(?:licensed |certified )?(?:cpa|enrolled agent)\b/i.test(text)) return true;
  if (/\b(?:licensed|certified)\s+(?:cpa|enrolled agent)\b/i.test(text)) return true;
  if (/\bcpa\s+firm\b/i.test(text)) return true;
  if (/\btax[\s-]?ready\b/i.test(text)) return true;
  if (/\bdeductions?\b/i.test(text)) return true;
  if (/\b(always|never miss(es)?|without fail)\b/i.test(text)) return true;
  if (/\bsavings?\b/i.test(text)) return true;
  return false;
}
