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
  /** Extra structured data for this page only (the site-wide business data lives in index.html). */
  jsonLd: object[];
  publishedTime?: string;
}

/** Breadcrumb names for pages below the home page. */
const CRUMB: Partial<Record<keyof typeof PAGE_PATHS, string>> = {
  services: 'Services',
  pricing: 'Pricing',
  about: 'About',
  faq: 'FAQ',
  contact: 'Contact',
  blog: 'Blog',
  dashboard: 'Example Dashboard',
  calculator: 'Treatment Profit Calculator',
  'south-florida': 'South Florida',
};

const breadcrumb = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
});

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
  const canonical = SITE_ORIGIN + path;
  const home = { name: 'Home', url: `${SITE_ORIGIN}/` };

  const jsonLd: object[] = [];
  if (post) {
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        mainEntityOfPage: canonical,
        url: canonical,
        image: post.coverImage || `${SITE_ORIGIN}/og-image.png`,
        articleSection: post.category,
        keywords: post.tags.join(', '),
        inLanguage: 'en-US',
        author: { '@id': `${SITE_ORIGIN}/#person` },
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      },
      breadcrumb([home, { name: 'Blog', url: `${SITE_ORIGIN}/blog` }, { name: post.title, url: canonical }]),
    );
  } else if (key === 'south-florida') {
    const cities = ['Fort Lauderdale', 'Miami', 'Boca Raton', 'West Palm Beach', 'Hollywood', 'Coral Springs', 'Delray Beach', 'Coral Gables'];
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'MedSpa Bookkeeping in Fort Lauderdale & South Florida',
        serviceType: 'MedSpa Bookkeeping',
        url: canonical,
        description: meta.description,
        provider: { '@id': `${SITE_ORIGIN}/#organization` },
        areaServed: [
          ...cities.map((name) => ({ '@type': 'City', name: `${name}, FL` })),
          ...['Broward County', 'Miami-Dade County', 'Palm Beach County'].map((name) => ({ '@type': 'AdministrativeArea', name: `${name}, FL` })),
        ],
      },
      breadcrumb([home, { name: CRUMB[key]!, url: canonical }]),
    );
  } else if (key && CRUMB[key]) {
    jsonLd.push(breadcrumb([home, { name: CRUMB[key]!, url: canonical }]));
  }

  return {
    path,
    title: meta.title,
    description: meta.description,
    canonical,
    noindex: isNoindex,
    html,
    ogType: post ? 'article' : 'website',
    jsonLd,
    publishedTime: post?.publishedDate,
  };
}

export const allPaths = (): string[] => [
  ...Object.values(PAGE_PATHS),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];
