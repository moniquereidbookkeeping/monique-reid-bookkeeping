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
// repeating a topic. Do not add a topic a live article already answers (for example a second
// chart-of-accounts or month-end-close guide): two pages chasing the same search compete with each other.
// docs/keyword-map.md lists which page owns which search term; check it before adding a topic.
const TOPIC_POOL = [
  {
    slug: 'medspa-tax-deductions-cpa-checklist',
    title: 'MedSpa Tax Deductions: What Your CPA Needs and What Practices Miss Every Year',
    category: 'Tax & CPA Prep',
    hint: 'Cover common missed deductions (equipment depreciation, clinical supplies, continuing education), why clean QuickBooks = lower CPA bill, Section 179, and what a tax-ready file looks like for an aesthetic practice.',
  },
  {
    slug: 'opening-medspa-bookkeeping-setup-checklist',
    title: 'Opening a MedSpa: Your Pre-Launch Bookkeeping & QuickBooks Setup Checklist',
    category: 'New Practice Setup',
    hint: 'A practical guide for new MedSpa owners: QBO account setup, entity type implications, opening balance sheet, connecting your POS, setting up bank rules, what to do before you see your first patient.',
  },
  {
    slug: 'medspa-profit-margins-benchmarks',
    title: 'MedSpa Profit Margins: Which Numbers to Track in QuickBooks and What to Do When They Slip',
    category: 'Financial Performance',
    hint: 'Explain which margins to calculate (gross margin by service line, provider pay as a share of revenue, product cost as a share of revenue) and how to read them in the QuickBooks P&L to find where margin is leaking. Do not quote industry benchmark percentages.',
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
  // Keys may be quoted ("slug": "...") or bare (slug: '...'); match both.
  const existingSlugs = [...existingContent.matchAll(/["']?slug["']?:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const existingIds = [...existingContent.matchAll(/["']?id["']?:\s*["']post-(\d+)["']/g)].map((m) => parseInt(m[1], 10));
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
  // Schedule the draft for the first free Tuesday after today (one article per Tuesday). It stays hidden on the
  // site until that date, so merging the pull request early is safe.
  const takenDates = new Set([...existingContent.matchAll(/["']?publishedDate["']?:\s*["'](\d{4}-\d{2}-\d{2})["']/g)].map((m) => m[1]));
  const slot = new Date(`${today}T00:00:00Z`);
  do slot.setUTCDate(slot.getUTCDate() + 1); while (slot.getUTCDay() !== 2);
  while (takenDates.has(slot.toISOString().slice(0, 10))) slot.setUTCDate(slot.getUTCDate() + 7);
  const publishDate = slot.toISOString().slice(0, 10);
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
    publishedDate: publishDate,
    readingTime: article.readingTime || 6,
    coverImage: coverImg.url,
    coverAlt: coverImg.alt,
    featured: false,
    content: article.content,
  };

  // Append to the blogPosts array: insert before the `];` that closes it (helper functions follow it in the
  // file, so the end of the file is not the end of the array). JSON keeps apostrophes in the text safe.
  const arrayEnd = existingContent.lastIndexOf('];', existingContent.indexOf('export const getBlogPostBySlug'));
  if (arrayEnd === -1 || !existingContent.includes('export const getBlogPostBySlug')) {
    console.error('ERROR: could not find the end of the blogPosts array in src/data/blogPosts.ts');
    process.exit(1);
  }
  const newPostTs = JSON.stringify(newPost, null, 2).replace(/\n/g, '\n  ');
  const updatedContent = `${existingContent.slice(0, arrayEnd)}  ${newPostTs},\n${existingContent.slice(arrayEnd)}`;

  writeFileSync(BLOG_POSTS_PATH, updatedContent, 'utf8');
  console.log(`✅ Article "${newPost.title}" written as ${nextId}, scheduled for ${publishDate}`);
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
  return `You are Monique Reid, an Intuit Certified QuickBooks ProAdvisor who specializes exclusively in MedSpa, aesthetic, and wellness practices. Write a complete, SEO-optimized blog article for your bookkeeping practice website.

ARTICLE TOPIC: ${topic.title}
WRITING DIRECTION: ${topic.hint}

REQUIREMENTS:
- Voice: Direct, expert, no-nonsense. Write like a specialist, not a generalist. Use real QuickBooks terminology, real platform names (Boulevard, Vagaro, Jane App, Mindbody, Zenoti, etc.). Never invent statistics, benchmarks, dollar figures or study results: use only clearly labelled illustrative examples ("for example, if a practice...").
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
