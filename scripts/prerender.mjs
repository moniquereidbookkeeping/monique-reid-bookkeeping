// Turns the single-page app into one real HTML file per page, so search engines, AI tools and
// link previews can read each page without running JavaScript. Runs after the normal build.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, '.ssr');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const { renderRoute, allPaths } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');

function build(path, outFile) {
  const r = renderRoute(path);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${r.canonical}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${r.canonical}$2`);
  html = html.replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${r.ogType}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`);
  html = html.replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${r.noindex ? 'noindex, nofollow' : 'index, follow'}" />`);
  // Page-specific structured data (breadcrumbs, article details) goes in the static HTML so every crawler sees it.
  const extraHead = [
    r.publishedTime ? `<meta property="article:published_time" content="${r.publishedTime}" />` : '',
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
