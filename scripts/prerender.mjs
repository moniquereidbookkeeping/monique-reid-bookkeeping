// Turns the single-page app into one real HTML file per page, so search engines, AI tools and
// link previews can read each page without running JavaScript. Runs after the normal build.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, '.ssr');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const { renderRoute, allPaths, CONTACT_EMAIL, CONTACT_PHONE_TEL } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');

// The business structured data in index.html is static JSON, so it cannot read src/constants/booking.ts.
// Stop the build if its phone or email drifts from the ones shown on the Contact and Fort Lauderdale pages:
// Google compares these with the Google Business Profile listing.
{
  const digits = (s) => String(s ?? '').replace(/\D/g, '');
  const graph = [...template.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap((m) => JSON.parse(m[1])['@graph'] ?? []);
  const org = graph.find((n) => n['@id']?.endsWith('/#organization'));
  const checks = [
    ['telephone', digits(org?.telephone), digits(CONTACT_PHONE_TEL)],
    ['contactPoint.telephone', digits(org?.contactPoint?.telephone), digits(CONTACT_PHONE_TEL)],
    ['email', org?.email, CONTACT_EMAIL],
    ['contactPoint.email', org?.contactPoint?.email, CONTACT_EMAIL],
  ];
  for (const [field, found, expected] of checks) {
    if (found !== expected) throw new Error(`index.html business data ${field} is "${found}", expected "${expected}" (src/constants/booking.ts)`);
  }
}

/** Replaces one tag in the page template, and fails the build if the tag is missing, so a page can never
 *  silently keep the site-wide default (as og:description once did when its tag spanned several lines). */
function swap(html, pattern, replacement, what) {
  if (!pattern.test(html)) throw new Error(`index.html: could not find ${what} to replace`);
  return html.replace(pattern, replacement);
}

function build(path, outFile) {
  const r = renderRoute(path);
  let html = template;
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`, '<title>');
  html = swap(html, /(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`, 'meta description');
  html = swap(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${r.canonical}$2`, 'canonical');
  html = swap(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${r.canonical}$2`, 'og:url');
  html = swap(html, /(<meta property="og:type" content=")[^"]*(")/, `$1${r.ogType}$2`, 'og:type');
  html = swap(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`, 'og:title');
  html = swap(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`, 'og:description');
  html = swap(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`, 'twitter:title');
  html = swap(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`, 'twitter:description');
  html = swap(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${r.noindex ? 'noindex, nofollow' : 'index, follow'}" />`, 'meta robots');
  if (r.image) {
    html = swap(html, /(<meta property="og:image" content=")[^"]*(")/, `$1${esc(r.image.url)}$2`, 'og:image');
    html = swap(html, /(<meta property="og:image:alt" content=")[^"]*(")/, `$1${esc(r.image.alt)}$2`, 'og:image:alt');
    html = swap(html, /(<meta name="twitter:image" content=")[^"]*(")/, `$1${esc(r.image.url)}$2`, 'twitter:image');
  }
  // Page-specific structured data (breadcrumbs, article details) goes in the static HTML so every crawler sees it.
  const extraHead = [
    r.publishedTime ? `<meta property="article:published_time" content="${r.publishedTime}" />` : '',
    r.modifiedTime ? `<meta property="article:modified_time" content="${r.modifiedTime}" />` : '',
    ...r.jsonLd.map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`),
  ].filter(Boolean).join('\n    ');
  if (extraHead) html = html.replace('</head>', `    ${extraHead}\n  </head>`);
  if (!html.includes('<div id="root"></div>')) throw new Error('index.html has no empty root to fill');
  html = html.replace('<div id="root"></div>', `<div id="root">${r.html}</div>`);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
}

// Each page is written as a flat file (dist/about.html, dist/blog/<slug>.html). Cloudflare Pages serves
// those at /about with a plain 200. A folder with index.html (dist/about/index.html) would instead be
// served only at /about/, and /about (our canonical and sitemap address) would 308-redirect first.
const paths = allPaths();
for (const p of paths) {
  build(p, p === '/' ? join(dist, 'index.html') : join(dist, `${p.slice(1)}.html`));
}
// Real "not found" page: Cloudflare Pages serves 404.html with a 404 status for unknown addresses.
build('/404', join(dist, '404.html'));

rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerender: ${paths.length} pages + 404.html`);
