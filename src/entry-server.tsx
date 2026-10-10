import { renderToString } from 'react-dom/server';
import App from './App';
import { PAGE_META, SITE_ORIGIN, PAGE_PATHS } from './router';
import { blogPosts } from './data/blogPosts';
import { cleanupTiers } from './data/cleanupPricing';
import { BROWARD_CITIES, SOUTH_FLORIDA_AREAS } from './constants/serviceArea';

/** Re-exported so the prerender step can check index.html's business data uses the same phone and email. */
export { CONTACT_EMAIL, CONTACT_PHONE_TEL } from './constants/booking';

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
  modifiedTime?: string;
  /** Share image for link previews; pages without one keep the site-wide og-image.png. */
  image?: { url: string; alt: string };
}

/** An article's Unsplash cover, cropped to the 1200x630 size link previews expect. */
const shareImage = (cover: string): string | undefined =>
  cover.startsWith('https://images.unsplash.com/') ? `${cover.split('?')[0]}?auto=format&fit=crop&w=1200&h=630&q=80` : undefined;

/** Breadcrumb names for pages below the home page. */
const CRUMB: Partial<Record<keyof typeof PAGE_PATHS, string>> = {
  services: 'Services',
  pricing: 'Pricing',
  about: 'About',
  faq: 'FAQ',
  contact: 'Contact',
  terms: 'Terms of Service',
  privacy: 'Privacy Policy',
  booked: 'Call Booked',
  blog: 'Blog',
  dashboard: 'Example Dashboard',
  calculator: 'Treatment Profit Calculator',
  'south-florida': 'South Florida',
  'fort-lauderdale': 'Fort Lauderdale',
  'quickbooks-cleanup': 'QuickBooks Cleanup',
  'iv-hydration': 'IV Hydration Bookkeeping',
  'medical-weight-loss': 'Medical Weight Loss Bookkeeping',
  'monthly-bookkeeping': 'Monthly Bookkeeping',
  'quickbooks-setup': 'QuickBooks Setup',
  'financial-reporting': 'Financial Reporting',
};

/** Service structured data for the service and practice-type pages. */
const SERVICE_LD: Partial<Record<keyof typeof PAGE_PATHS, { '@id'?: string; name: string; serviceType: string }>> = {
  // Same @id as the cleanup Service in index.html, so the two describe one service, not two.
  'quickbooks-cleanup': { '@id': `${SITE_ORIGIN}/#service-cleanup`, name: 'QuickBooks Cleanup for Med Spas', serviceType: 'QuickBooks Cleanup and Catch-Up Bookkeeping' },
  'iv-hydration': { name: 'IV Hydration Bookkeeping', serviceType: 'IV Hydration Bookkeeping' },
  'medical-weight-loss': { name: 'Medical Weight Loss and GLP-1 Clinic Bookkeeping', serviceType: 'Medical Weight Loss Bookkeeping' },
  // Same @id as the monthly Service in index.html (which carries the plan offers), so both describe one service.
  'monthly-bookkeeping': { '@id': `${SITE_ORIGIN}/#service-monthly`, name: 'Monthly Bookkeeping for Med Spas', serviceType: 'MedSpa Bookkeeping' },
  'quickbooks-setup': { name: 'QuickBooks Setup for Med Spas', serviceType: 'QuickBooks Setup and Chart of Accounts' },
  'financial-reporting': { name: 'Financial Reporting for Med Spas', serviceType: 'Financial Reporting' },
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
  const modified = post ? post.updatedDate ?? post.publishedDate : undefined;
  const coverUrl = post ? shareImage(post.coverImage) : undefined;
  if (post) {
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedDate,
        dateModified: modified,
        mainEntityOfPage: canonical,
        url: canonical,
        image: post.coverImage || `${SITE_ORIGIN}/og-image.png`,
        articleSection: post.category,
        keywords: post.tags.join(', '),
        inLanguage: 'en-US',
        author: { '@type': 'Person', '@id': `${SITE_ORIGIN}/#person`, name: 'Monique Reid', url: `${SITE_ORIGIN}/about` },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_ORIGIN}/#organization`,
          name: 'Monique Reid Bookkeeping',
          logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/mr-logo-512.png` },
        },
      },
      breadcrumb([home, { name: 'Blog', url: `${SITE_ORIGIN}/blog` }, { name: post.title, url: canonical }]),
    );
  } else if (key === 'south-florida') {
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Med Spa Bookkeeping in South Florida',
        serviceType: 'MedSpa Bookkeeping',
        url: canonical,
        description: meta.description,
        provider: { '@id': `${SITE_ORIGIN}/#organization` },
        areaServed: [
          ...SOUTH_FLORIDA_AREAS.flatMap((a) => a.cities).map((name) => ({ '@type': 'City', name: `${name}, FL` })),
          ...SOUTH_FLORIDA_AREAS.map((a) => ({ '@type': 'AdministrativeArea', name: `${a.county}, FL` })),
        ],
      },
      breadcrumb([home, { name: CRUMB[key]!, url: canonical }]),
    );
  } else if (key === 'fort-lauderdale') {
    // Service-area business: the work is remote, so no address, geo or opening hours.
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Med Spa Bookkeeping in Fort Lauderdale',
        serviceType: 'MedSpa Bookkeeping',
        url: canonical,
        description: meta.description,
        provider: { '@id': `${SITE_ORIGIN}/#organization` },
        areaServed: [
          ...BROWARD_CITIES.map((name) => ({ '@type': 'City', name: `${name}, FL` })),
          { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
        ],
      },
      breadcrumb([home, { name: CRUMB[key]!, url: canonical }]),
    );
  } else if (key && SERVICE_LD[key]) {
    const offers = key === 'quickbooks-cleanup'
      ? cleanupTiers
          .filter((t) => /^\$[\d,]+$/.test(t.price))
          .map((t) => ({ '@type': 'Offer', name: `Cleanup: ${t.label}`, price: t.price.replace(/[$,]/g, ''), priceCurrency: 'USD' }))
      : undefined;
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        ...SERVICE_LD[key],
        url: canonical,
        description: meta.description,
        provider: { '@id': `${SITE_ORIGIN}/#organization` },
        areaServed: [{ '@type': 'State', name: 'Florida' }, { '@type': 'Country', name: 'United States' }],
        ...(offers ? { offers } : {}),
      },
      breadcrumb([home, { name: CRUMB[key]!, url: canonical }]),
    );
  } else if (key === 'about') {
    jsonLd.push(
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: canonical,
        name: meta.title,
        mainEntity: { '@id': `${SITE_ORIGIN}/#person` },
      },
      breadcrumb([home, { name: CRUMB[key]!, url: canonical }]),
    );
  } else if (key === 'home') {
    jsonLd.push(breadcrumb([home]));
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
    modifiedTime: modified,
    image: post && coverUrl ? { url: coverUrl, alt: post.title } : undefined,
  };
}

export const allPaths = (): string[] => [
  ...Object.values(PAGE_PATHS),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];
