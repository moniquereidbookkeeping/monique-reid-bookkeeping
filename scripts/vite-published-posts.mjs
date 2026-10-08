// Vite plugin: builds only published articles into the site.
//
// src/data/blogPosts.ts holds every article, including scheduled ones, and filters them by BUILD_DATE when it
// runs. Left alone, the whole array (full text of every scheduled article) would ship in the public JavaScript
// bundle before its publish date. This plugin evaluates the file at build time and replaces the array with only
// the published articles, so scheduled text never reaches the browser or the prerendered pages early.
//
// The source file itself is not changed: .github/scripts/generate-article.mjs still appends to the array, and
// scripts/generate-sitemap.mjs still reads it.
import { build } from 'esbuild';
import { resolve } from 'path';

const ARRAY_START = 'const allBlogPosts: BlogPost[] = [';

/** @param {string} buildDate @returns {import('vite').Plugin} */
export function publishedPostsOnly(buildDate) {
  const file = resolve('src/data/blogPosts.ts');
  return {
    name: 'published-posts-only',
    enforce: 'pre',
    async transform(code, id) {
      if (resolve(id.split('?')[0]) !== file) return null;
      const start = code.indexOf(ARRAY_START);
      // Same rule the article generator uses to find the end of the array: the `];` before the helpers.
      const end = code.lastIndexOf('];', code.indexOf('export const getBlogPostBySlug'));
      if (start === -1 || end === -1 || end < start) {
        this.error('published-posts-only: could not find the allBlogPosts array in src/data/blogPosts.ts');
      }
      // Run the real module once, with the same build date, and keep what it publishes.
      const out = await build({
        entryPoints: [file],
        bundle: true,
        write: false,
        format: 'esm',
        platform: 'node',
        logLevel: 'silent',
        define: { __BUILD_DATE__: JSON.stringify(buildDate) },
      });
      const mod = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
      const published = mod.blogPosts;
      if (!Array.isArray(published)) this.error('published-posts-only: blogPosts did not evaluate to an array');
      return {
        code: code.slice(0, start) + `const allBlogPosts: BlogPost[] = ${JSON.stringify(published, null, 1)}` + code.slice(end + 1),
        map: null,
      };
    },
  };
}
