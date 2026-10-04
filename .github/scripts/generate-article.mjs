/**
 * Monique Reid Bookkeeping — Auto Blog Article Generator
 * Calls Gemini API to write a new MedSpa bookkeeping article,
 * then appends it to src/data/blogPosts.ts
 *
 * Required env vars:
 *   GEMINI_API_KEY   — Google AI Studio free-tier key
 *   TOPIC_HINT       — (optional) override the topic
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_POSTS_PATH = join(__dirname, '../../src/data/blogPosts.ts');

// ── Topic pool ──────────────────────────────────────────────────────────────
// Pick a topic not already covered. The script reads existing slugs to avoid
// repeating a topic.
const TOPIC_POOL = [
  {
    slug: 'medspa-payroll-bookkeeping-quickbooks',
    title: 'MedSpa Payroll & Provider Compensation: How to Set It Up Correctly in QuickBooks',
    category: 'Payroll & Compensation',
    hint: 'Cover 1099 vs W2 providers, commission-based pay, QuickBooks payroll setup for MedSpas, tip tracking through Boulevard/Vagaro, and common payroll mistakes that cause IRS issues.',
  },
  {
    slug: 'chart-of-accounts-medspa-aesthetic-practice',
    title: 'The Right Chart of Accounts for a MedSpa or Aesthetic Practice (With Examples)',
    category: 'QuickBooks & Cleanup',
    hint: 'Explain why generic QuickBooks chart of accounts fails MedSpas. Give a recommended COA structure with specific accounts for injectables, laser, retail, memberships, clinical supplies, and provider payroll. Include real account names.',
  },
  {
    slug: 'boulevard-payout-reconciliation-guide',
    title: 'How to Reconcile Boulevard Payouts in QuickBooks (Step-by-Step)',
    category: 'Platform Reconciliation',
    hint: 'Detail the exact process: batch reports, net deposits vs gross collections, processing fees as COGS vs operating expense, how to handle partial-week batches, and what Boulevard\'s payout report actually means.',
  },
  {
    slug: 'medspa-tax-deductions-cpa-checklist',
    title: 'MedSpa Tax Deductions: What Your CPA Needs and What Practices Miss Every Year',
    category: 'Tax & CPA Prep',
    hint: 'Cover common missed deductions (equipment depreciation, clinical supplies, continuing education), why clean QuickBooks = lower CPA bill, Section 179, and what a tax-ready file looks like for an aesthetic practice.',
  },
  {
    slug: 'deferred-revenue-medspa-packages-memberships',
    title: 'Deferred Revenue in MedSpas: Why Your Memberships & Packages Are Overstating Income',
    category: 'Revenue Recognition',
    hint: 'Deep dive into how prepaid packages and monthly memberships should be accounted for under accrual accounting. Include journal entry examples for QuickBooks, why cash-basis MedSpas get surprises at tax time, and redemption tracking.',
  },
  {
    slug: 'cost-of-goods-sold-medspa-injectables',
    title: 'How to Track Cost of Goods Sold for Injectables, Fillers, and Retail Products',
    category: 'COGS & Inventory',
    hint: 'Explain COGS vs operating expenses for a MedSpa. Cover Botox/Dysport unit costing, filler by syringe cost, skincare retail margin calculation, how to set this up in QuickBooks without a full inventory system.',
  },
  {
    slug: 'cherry-carecredit-financing-bookkeeping',
    title: 'Cherry, CareCredit & PatientFi in QuickBooks: The Right Way to Record Patient Financing',
    category: 'Platform Reconciliation',
    hint: 'Explain the net-funding vs gross revenue issue with patient financing. How to record the discount fee, why some practices accidentally double-count income, correct QuickBooks journal entries for each provider.',
  },
  {
    slug: 'monthly-close-process-medspa-bookkeeping',
    title: 'The Monthly Close Process Every MedSpa Should Follow (But Most Skip)',
    category: 'Monthly Bookkeeping',
    hint: 'Lay out a step-by-step monthly close: bank reconciliation, POS payout reconciliation, credit card reconciliation, P&L review, balance sheet check, CPA-ready reports. Include a checklist table.',
  },
  {
    slug: 'vagaro-quickbooks-integration-bookkeeping',
    title: 'Vagaro + QuickBooks Integration: What It Actually Does and What You Still Have to Fix',
    category: 'Platform Reconciliation',
    hint: 'Cover Vagaro\'s QuickBooks sync: what it syncs, what it gets wrong (double-counting, tip misclassification, net vs gross), how to supplement the integration with manual reconciliation, and common Vagaro reporting errors.',
  },
  {
    slug: 'glp1-weight-loss-practice-financial-tracking',
    title: 'Financial Tracking for GLP-1 & Medical Weight Loss Programs: The Bookkeeping Setup',
    category: 'Specialty Programs',
    hint: 'Address the unique bookkeeping needs of practices adding Semaglutide/Tirzepatide programs: subscription vs per-injection billing, compound pharmacy cost tracking, how to separate this revenue line, lab fee pass-throughs.',
  },
  {
    slug: 'opening-medspa-bookkeeping-setup-checklist',
    title: 'Opening a MedSpa: Your Pre-Launch Bookkeeping & QuickBooks Setup Checklist',
    category: 'New Practice Setup',
    hint: 'A practical guide for new MedSpa owners: QBO account setup, entity type implications, opening balance sheet, connecting your POS, setting up bank rules, what to do before you see your first patient.',
  },
  {
    slug: 'medspa-profit-margins-benchmarks-2025',
    title: 'MedSpa Profit Margins: What the Numbers Should Look Like and What to Do When They Don\'t',
    category: 'Financial Performance',
    hint: 'Share realistic benchmarks: gross margin by service line, payroll as % of revenue, COGS targets, owner take-home expectations. Explain how to use QuickBooks P&L to identify where margin is leaking.',
  },
];

// ── Cover images (royalty-free Unsplash, varied aesthetics) ─────────────────
const COVER_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80', alt: 'Financial records and accounting spreadsheets on a clean desk' },
  { url: 'https://images.unsplash.com/photo-1565372531080-49e2cbb3e862?auto=format&fit=crop&w=1400&q=80', alt: 'MedSpa treatment room with modern aesthetic lighting' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80', alt: 'Business analytics dashboard on laptop screen' },
  { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80', alt: 'Professional bookkeeper reviewing financial documents' },
  { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80', alt: 'Modern medical spa reception and business operations' },
  { url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80', alt: 'Accounting calculator and financial reports' },
  { url: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80', alt: 'QuickBooks and financial management on a tablet' },
];

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('ERROR: GEMINI_API_KEY environment variable is not set');
    process.exit(1);
  }

  // Read existing posts to find next ID and avoid duplicate slugs
  const existingContent = readFileSync(BLOG_POSTS_PATH, 'utf8');
  const existingSlugs = [...existingContent.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  const existingIds = [...existingContent.matchAll(/id:\s*'post-(\d+)'/g)].map((m) => parseInt(m[1], 10));
  const nextNum = (Math.max(0, ...existingIds) + 1).toString().padStart(3, '0');
  const nextId = `post-${nextNum}`;

  // Pick topic
  const topicHint = process.env.TOPIC_HINT?.trim();
  let topic;

  if (topicHint) {
    topic = {
      slug: slugify(topicHint),
      title: topicHint,
      category: 'QuickBooks & Bookkeeping',
      hint: `Write about: ${topicHint}`,
    };
  } else {
    const available = TOPIC_POOL.filter((t) => !existingSlugs.includes(t.slug));
    if (available.length === 0) {
      console.log('All topics from the pool have been published. Add more topics to the pool.');
      process.exit(0);
    }
    // Pick pseudo-randomly based on the day of year for determinism across parallel runs
    const dayOfYear = Math.floor((Date.now() / 86400000) % available.length);
    topic = available[dayOfYear % available.length];
  }

  console.log(`Generating article: "${topic.title}"`);

  const prompt = buildPrompt(topic);
  const article = await callGemini(apiKey, prompt);

  if (!article || !article.content || article.content.length < 4) {
    console.error('Generated article is too short or invalid:', JSON.stringify(article, null, 2));
    process.exit(1);
  }

  const today = new Date().toISOString().split('T')[0];
  const coverImg = COVER_IMAGES[Math.floor(Math.random() * COVER_IMAGES.length)];

  const newPost = {
    id: nextId,
    slug: topic.slug,
    title: article.title || topic.title,
    metaTitle: article.metaTitle || `${topic.title} | Monique Reid Bookkeeping`,
    metaDescription: article.metaDescription || '',
    excerpt: article.excerpt || '',
    category: topic.category,
    tags: article.tags || ['QuickBooks', 'MedSpa', 'Bookkeeping'],
    publishedDate: today,
    readingTime: article.readingTime || 6,
    coverImage: coverImg.url,
    coverAlt: coverImg.alt,
    featured: false,
    content: article.content,
  };

  // Append to blogPosts.ts — insert before the closing `];`
  const newPostTs = JSON.stringify(newPost, null, 2)
    .replace(/"([^"]+)":/g, '$1:')         // remove quotes from keys
    .replace(/"/g, "'")                     // double → single quotes
    .replace(/\\'/g, "\\'");                // preserve escaped single quotes

  const updatedContent = existingContent.replace(
    /(\];\s*)$/,
    `,\n  ${newPostTs}\n];\n`,
  );

  writeFileSync(BLOG_POSTS_PATH, updatedContent, 'utf8');
  console.log(`✅ Article "${newPost.title}" written as ${nextId} (${today})`);
}

// ── Gemini call ──────────────────────────────────────────────────────────────
async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-3.6-flash'}:generateContent`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.65,
        maxOutputTokens: 4000,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  try {
    const parsed = JSON.parse(text.trim());
    return parsed;
  } catch {
    // Try to extract JSON from the response
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error(`Could not parse JSON from Gemini response: ${text.slice(0, 300)}`);
  }
}

// ── Prompt ───────────────────────────────────────────────────────────────────
function buildPrompt(topic) {
  return `You are Monique Reid, a Certified QuickBooks ProAdvisor who specializes exclusively in MedSpa, aesthetic, and wellness practices. Write a complete, SEO-optimized blog article for your bookkeeping practice website.

ARTICLE TOPIC: ${topic.title}
WRITING DIRECTION: ${topic.hint}

REQUIREMENTS:
- Voice: Direct, expert, no-nonsense. Write like a specialist, not a generalist. Use real QuickBooks terminology, real platform names (Boulevard, Vagaro, Jane App, Mindbody, Zenoti, etc.), and real numbers/benchmarks where possible.
- Length: 900–1,400 words of body content (not counting title/meta fields)
- Target reader: MedSpa owner or aesthetic practice manager who handles their own books or just hired a bookkeeper
- SEO: Naturally include the topic's main keyword phrase in the intro and at least one subheading. No keyword stuffing.
- Tone: Like you're writing an email to a client, not a textbook. Practical, specific, occasionally direct about common mistakes.

OUTPUT FORMAT: Return ONLY a JSON object matching this exact TypeScript interface (no markdown, no wrapper text):

{
  "title": "string — the H1, compelling, specific, include a keyword",
  "metaTitle": "string — 55-65 chars, for browser tab and Google",
  "metaDescription": "string — 150-160 chars, compelling summary for search snippet",
  "excerpt": "string — 2 sentences shown on the blog list card, no spoilers",
  "readingTime": number (in minutes, integer),
  "tags": ["string", "string", "string", "string", "string"],
  "content": [
    {"type": "intro", "text": "Opening paragraph — hook the reader, name the problem, promise the solution"},
    {"type": "heading", "heading": "First H2 subheading"},
    {"type": "paragraph", "text": "..."},
    {"type": "list", "items": ["item 1", "item 2", "item 3", "item 4"]},
    {"type": "heading", "heading": "Second H2 subheading"},
    {"type": "paragraph", "text": "..."},
    {"type": "callout", "text": "A key takeaway, warning, or expert tip in a callout box"},
    {"type": "heading", "heading": "Third H2 subheading"},
    {"type": "paragraph", "text": "..."},
    {"type": "tip", "text": "A practical actionable tip"},
    {"type": "heading", "heading": "Fourth H2 subheading (optional)"},
    {"type": "paragraph", "text": "..."},
    {"type": "cta-inline", "text": "Closing CTA encouraging a discovery call — mention the free 20-minute call with Monique"}
  ]
}

Valid content section types: "intro", "heading", "paragraph", "list", "callout", "tip", "cta-inline"
- "heading": must have "heading" key
- "list": must have "items" key (array of strings)
- all others: must have "text" key

Write the full article now. Return ONLY the JSON object.`;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
