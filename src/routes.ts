import type { ComponentType } from 'react';
import type { PageView } from './types';

/** What App passes to every page. */
export interface PageProps {
  /** The article's slug on /blog/<slug>; empty on every other page. */
  slug: string;
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
}

export type PageComponents = Record<PageView, ComponentType<PageProps>>;

/**
 * The file in src/pages/ that draws each page. Each page is its own file so the browser bundle can be split
 * per page: a visitor downloads the code for the page they open, not for all of them.
 *
 * The prerender (src/entry-server.tsx) loads these files up front, because renderToString cannot wait for a
 * page to load. The browser (src/main.tsx) loads each one only when it is shown. Both build their page table
 * from this list and the same src/pages/ folder (pageTable below), so the two can never point at different code.
 */
export const PAGE_MODULE: Record<PageView, string> = {
  home: 'HomePage',
  services: 'ServicesPage',
  dashboard: 'DashboardPage',
  about: 'AboutPage',
  calculator: 'CalculatorPage',
  contact: 'ContactPage',
  terms: 'TermsPage',
  privacy: 'PrivacyPage',
  booked: 'BookedPage',
  blog: 'BlogPage',
  faq: 'FaqPage',
  pricing: 'PricingPage',
  'south-florida': 'SouthFloridaPage',
  'fort-lauderdale': 'FortLauderdalePage',
  'quickbooks-cleanup': 'QuickBooksCleanupPage',
  'iv-hydration': 'IvHydrationPage',
  'medical-weight-loss': 'MedicalWeightLossPage',
  'monthly-bookkeeping': 'MonthlyBookkeepingPage',
  'quickbooks-setup': 'QuickBooksSetupPage',
  'financial-reporting': 'FinancialReportingPage',
  'blog-post': 'BlogPostPage',
  notfound: 'NotFoundPage',
};

/** Source path of a page file as Vite's import.meta.glob('./pages/*.tsx') and its build manifest name it. */
export const pageFile = (page: PageView) => `./pages/${PAGE_MODULE[page]}.tsx`;

/**
 * Builds the page table from an import.meta.glob('./pages/*.tsx') result, turning each module into a component
 * with `toComponent`. Fails loudly if a page in PAGE_MODULE has no file.
 */
export function pageTable<M>(modules: Record<string, M>, toComponent: (module: M) => ComponentType<PageProps>): PageComponents {
  const table = {} as PageComponents;
  for (const page of Object.keys(PAGE_MODULE) as PageView[]) {
    const module = modules[pageFile(page)];
    if (!module) throw new Error(`No page file ${pageFile(page)} for "${page}"`);
    table[page] = toComponent(module);
  }
  return table;
}
