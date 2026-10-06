// Builds public/sitemap.xml from the site's pages and every blog post slug.
// Runs automatically before `npm run build`, so new auto-published articles are listed.
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://moniquereidbookkeeping.com';

const src = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
const posts = [...src.matchAll(/["']?slug["']?:\s*["']([^"']+)["'][\s\S]*?["']?publishedDate["']?:\s*["'](\d{4}-\d{2}-\d{2})["']/g)]
  .map((m) => ({ slug: m[1], date: m[2] }));

// Only blog posts carry a <lastmod>: their publish date is real. Stamping every page with the build date
// on each deploy tells search engines everything changed when it did not, so they learn to ignore it.
// (Google ignores <changefreq> and <priority>, so they are left out.)
const newest = posts.map((p) => p.date).sort().pop();
const pages = [
  { path: '/' },
  { path: '/services' },
  { path: '/pricing' },
  { path: '/about' },
  { path: '/faq' },
  { path: '/contact' },
  { path: '/blog', lastmod: newest },
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date })),
  { path: '/calculator' },
  { path: '/dashboard' },
  { path: '/terms' },
  { path: '/privacy' },
];

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages
    .map(
      (p) =>
        `  <url>\n    <loc>${ORIGIN}${p.path}</loc>\n` +
        (p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>\n` : '') +
        '  </url>',
    )
    .join('\n') +
  '\n</urlset>\n';

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml: ${pages.length} URLs (${posts.length} blog posts)`);
