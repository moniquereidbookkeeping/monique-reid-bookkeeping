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
    title: 'MedSpa Bookkeeper | Monique Reid Bookkeeping',
    description:
      'Specialized QuickBooks bookkeeping for MedSpas, aesthetic clinics and IV hydration practices. Clean books and clear P&Ls from a certified ProAdvisor.',
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
    title: 'MedSpa Bookkeeping Services & Pricing | Monique Reid Bookkeeping',
    description:
      'Monthly bookkeeping, QuickBooks cleanup and financial reporting for MedSpas, aesthetic clinics, IV hydration and wellness practices. Flat-rate plans from $497/mo.',
  },
  dashboard: {
    title: 'MedSpa Financial Dashboard Example | Monique Reid Bookkeeping',
    description:
      'See how properly categorized books separate treatment COGS, provider compensation and net operating surplus for an aesthetic practice.',
  },
  about: {
    title: 'About Monique Reid | QuickBooks ProAdvisor for MedSpas',
    description:
      'Meet Monique Reid, a QuickBooks ProAdvisor focused on bookkeeping and financial reporting for MedSpas, aesthetic clinics and wellness practices nationwide.',
  },
  calculator: {
    title: 'Treatment Margin Calculator for MedSpas | Monique Reid Bookkeeping',
    description:
      'Model unit economics for neurotoxins, fillers, IV drips and laser sessions with real provider compensation and financing fees.',
  },
  contact: {
    title: 'Book a Free 20-Minute Clarity Call | Monique Reid Bookkeeping',
    description:
      'Book a complimentary 20-minute call to talk through your practice books and the clearest path to organized financial records.',
  },
  terms: {
    title: 'Terms of Service | Monique Reid Bookkeeping',
    description: 'Terms of service for Monique Reid Bookkeeping.',
  },
  privacy: {
    title: 'Privacy Policy | Monique Reid Bookkeeping',
    description: 'How Monique Reid Bookkeeping collects, uses and protects your information.',
  },
  blog: {
    title: 'MedSpa Bookkeeping Blog | Monique Reid Bookkeeping',
    description:
      'Practical QuickBooks and bookkeeping guides for MedSpas, aesthetic clinics, IV hydration centers and wellness practices.',
  },
};
