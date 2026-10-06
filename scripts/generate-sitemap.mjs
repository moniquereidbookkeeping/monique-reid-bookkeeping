// Builds public/sitemap.xml from the site's pages and every blog post slug.
// Runs automatically before `npm run build`, so new auto-published articles are listed.
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://moniquereidbookkeeping.com';
const today = new Date().toISOString().slice(0, 10);

const src = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
const posts = [...src.matchAll(/["']?slug["']?:\s*["']([^"']+)["'][\s\S]*?["']?publishedDate["']?:\s*["'](\d{4}-\d{2}-\d{2})["']/g)]
  .map((m) => ({ slug: m[1], date: m[2] }));

const pages = [
  { path: '/', freq: 'monthly', priority: '1.0' },
  { path: '/services', freq: 'monthly', priority: '0.8' },
  { path: '/about', freq: 'monthly', priority: '0.7' },
  { path: '/contact', freq: 'monthly', priority: '0.7' },
  { path: '/pricing', freq: 'monthly', priority: '0.8' },
  { path: '/faq', freq: 'monthly', priority: '0.8' },
  { path: '/dashboard', freq: 'monthly', priority: '0.6' },
  { path: '/calculator', freq: 'monthly', priority: '0.6' },
  { path: '/blog', freq: 'weekly', priority: '0.8' },
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, freq: 'monthly', priority: '0.7', lastmod: p.date })),
  { path: '/terms', freq: 'yearly', priority: '0.3' },
  { path: '/privacy', freq: 'yearly', priority: '0.3' },
];

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages
    .map(
      (p) =>
        `  <url>\n    <loc>${ORIGIN}${p.path === '/' ? '' : p.path}${p.path === '/' ? '/' : ''}</loc>\n` +
        `    <lastmod>${p.lastmod ?? today}</lastmod>\n    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
    )
    .join('\n') +
  '\n</urlset>\n';

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml: ${pages.length} URLs (${posts.length} blog posts)`);
