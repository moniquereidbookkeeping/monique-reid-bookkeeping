import { renderToString } from 'react-dom/server';
import App from './App';
import { PAGE_META, SITE_ORIGIN, PAGE_PATHS } from './router';
import { blogPosts } from './data/blogPosts';

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  canonical: string;
  noindex: boolean;
  html: string;
  ogType: 'website' | 'article';
}

/** Renders one page to HTML for the static build, with its own title and description. */
export function renderRoute(path: string): PrerenderRoute {
  const post = blogPosts.find((p) => `/blog/${p.slug}` === path);
  const entry = Object.entries(PAGE_PATHS).find(([, p]) => p === path);
  const key = entry ? (entry[0] as keyof typeof PAGE_PATHS) : undefined;
  const meta = post
    ? { title: post.metaTitle, description: post.metaDescription }
    : key
      ? PAGE_META[key]!
      : PAGE_META.notfound!;
  const html = renderToString(<App initialPath={path} />);
  const isNoindex = key === 'booked' || (!post && !key);
  return {
    path,
    title: meta.title,
    description: meta.description,
    canonical: SITE_ORIGIN + (path === '/' ? '' : path),
    noindex: isNoindex,
    html,
    ogType: post ? 'article' : 'website',
  };
}

export const allPaths = (): string[] => [
  ...Object.values(PAGE_PATHS),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];
