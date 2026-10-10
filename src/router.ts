import { PageView } from './types';

/** Real URL for each page, so pages and blog posts can be linked, shared and indexed. */
export const PAGE_PATHS: Record<Exclude<PageView, 'blog-post' | 'notfound'>, string> = {
  home: '/',
  services: '/services',
  dashboard: '/dashboard',
  about: '/about',
  calculator: '/calculator',
  contact: '/contact',
  terms: '/terms',
  privacy: '/privacy',
  booked: '/booked',
  blog: '/blog',
  faq: '/faq',
  pricing: '/pricing',
  'south-florida': '/medspa-bookkeeping-south-florida',
  'fort-lauderdale': '/fort-lauderdale-med-spa-bookkeeping',
  'quickbooks-cleanup': '/quickbooks-cleanup',
  'iv-hydration': '/iv-hydration-bookkeeping',
  'medical-weight-loss': '/medical-weight-loss-bookkeeping',
  'monthly-bookkeeping': '/monthly-bookkeeping',
  'quickbooks-setup': '/quickbooks-setup-medspa',
  'financial-reporting': '/medspa-financial-reporting',
};

export const SITE_ORIGIN = 'https://moniquereidbookkeeping.com';

export function pathFor(page: PageView, slug = ''): string {
  if (page === 'blog-post') return slug ? `/blog/${slug}` : '/blog';
  if (page === 'notfound') return '/404';
  return PAGE_PATHS[page];
}

export function parsePath(pathname: string): { page: PageView; slug: string } {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean.startsWith('/blog/')) {
    const slug = decodeURIComponent(clean.slice('/blog/'.length));
    if (slug && !slug.includes('/')) return { page: 'blog-post', slug };
  }
  const hit = (Object.keys(PAGE_PATHS) as Array<keyof typeof PAGE_PATHS>).find(
    (p) => PAGE_PATHS[p] === clean,
  );
  return { page: hit ?? 'notfound', slug: '' };
}

/** Titles/descriptions for non-home pages. Blog posts set their own. */
export const PAGE_META: Partial<Record<PageView, { title: string; description: string }>> = {
  home: {
    title: 'Med Spa Bookkeeping & QuickBooks | Monique Reid Bookkeeping',
    description:
      'QuickBooks bookkeeping for med spas, medical spas, aesthetic clinics and IV hydration practices. Clean books and clear P&Ls from a Certified Intuit ProAdvisor.',
  },
  notfound: {
    title: 'Page Not Found | Monique Reid Bookkeeping',
    description: 'This page could not be found.',
  },
  booked: {
    title: 'You\'re Booked | Monique Reid Bookkeeping',
    description: 'Your free 20-minute Financial Clarity Call is confirmed.',
  },
  services: {
    title: 'Med Spa Bookkeeping Services | Monique Reid Bookkeeping',
    description:
      'Every service for med spas, medical spas and wellness practices in one place: monthly bookkeeping, QuickBooks cleanup and setup, reporting and more.',
  },
  dashboard: {
    title: 'Example Med Spa P&L Dashboard | Monique Reid Bookkeeping',
    description:
      'An interactive example of a med spa P&L: revenue by service, treatment costs, provider pay and what is left. All figures are examples, not benchmarks.',
  },
  'monthly-bookkeeping': {
    title: 'Monthly Bookkeeping for Med Spas | Monique Reid',
    description:
      'Monthly QuickBooks bookkeeping for med spas and aesthetic clinics: reconciliations, POS payouts, memberships, provider pay and clear monthly reports.',
  },
  'quickbooks-setup': {
    title: 'QuickBooks Setup for Med Spas | Monique Reid Bookkeeping',
    description:
      'QuickBooks Online setup for new and growing med spas: a chart of accounts built for treatments and clinical costs, bank feeds, POS mapping and a walkthrough.',
  },
  'financial-reporting': {
    title: 'Financial Reporting for Med Spas | Monique Reid',
    description:
      'Monthly financial reporting for med spas: revenue by treatment, treatment costs, provider pay, margins and cash flow in plain language, with an example.',
  },
  about: {
    title: 'Monique Reid | Certified Intuit ProAdvisor for Med Spas',
    description:
      'Meet Monique Reid, a Certified Intuit ProAdvisor in Fort Lauderdale, Florida, who keeps the QuickBooks books for med spas and wellness practices.',
  },
  calculator: {
    title: 'Treatment Profit Calculator | Monique Reid Bookkeeping',
    description:
      'Estimate what a single MedSpa treatment contributes after product cost, provider commission and payment fees, then see monthly and annual totals.',
  },
  contact: {
    title: 'Free 20-Minute Clarity Call | Monique Reid Bookkeeping',
    description:
      'Book a free 20-minute call to talk through your practice books and the clearest path to organized financial records.',
  },
  pricing: {
    title: 'Med Spa Bookkeeping Pricing & Monthly Plans | Monique Reid',
    description:
      'Fixed monthly bookkeeping plans from $497 and fixed-fee QuickBooks cleanup from $597 for MedSpas, aesthetic clinics, IV hydration and wellness practices.',
  },
  'south-florida': {
    title: 'Med Spa Bookkeeping in South Florida | Monique Reid',
    description:
      'QuickBooks bookkeeping for med spas and aesthetic clinics across Broward, Miami-Dade and Palm Beach counties from a Certified Intuit ProAdvisor.',
  },
  'fort-lauderdale': {
    title: 'Med Spa Bookkeeper in Fort Lauderdale | Monique Reid',
    description:
      'Remote QuickBooks bookkeeping for med spas in Fort Lauderdale, Wilton Manors, Oakland Park, Plantation and Davie. Zoom calls, monthly reports, no office visit.',
  },
  'quickbooks-cleanup': {
    title: 'QuickBooks Cleanup for Med Spas | Fort Lauderdale & Florida',
    description:
      'Fixed-fee QuickBooks cleanup and catch-up bookkeeping for med spas and aesthetic practices in Fort Lauderdale, Florida and nationwide. From $597.',
  },
  'iv-hydration': {
    title: 'IV Hydration Bookkeeping in Florida | Monique Reid',
    description:
      'QuickBooks bookkeeping for IV hydration clinics, drip bars and mobile IV services in Florida and nationwide: supply costs, memberships and nurse pay.',
  },
  'medical-weight-loss': {
    title: 'Medical Weight Loss & GLP-1 Clinic Bookkeeping | Florida',
    description:
      'QuickBooks bookkeeping for medical weight loss and GLP-1 clinics in Florida and nationwide: medication cost, program fees and provider pay.',
  },
  faq: {
    title: 'MedSpa Bookkeeping FAQ | Monique Reid Bookkeeping',
    description:
      'Answers on QuickBooks cleanup, monthly bookkeeping, pricing, patient financing and memberships for MedSpas and aesthetic practices.',
  },
  terms: {
    title: 'Terms of Service | Monique Reid Bookkeeping',
    description: 'Terms of service for Monique Reid Bookkeeping: website use, scope of services, fees, confidentiality and limits of responsibility.',
  },
  privacy: {
    title: 'Privacy Policy | Monique Reid Bookkeeping',
    description: 'How Monique Reid Bookkeeping collects, uses and protects your information, including cookies, analytics, scheduling and Health Check data.',
  },
  blog: {
    title: 'MedSpa Bookkeeping Blog | Monique Reid Bookkeeping',
    description:
      'Practical QuickBooks and bookkeeping guides for MedSpas, aesthetic clinics, IV hydration centers and wellness practices.',
  },
};
