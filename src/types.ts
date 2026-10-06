export type PageView = 'home' | 'services' | 'dashboard' | 'about' | 'calculator' | 'contact' | 'terms' | 'privacy' | 'booked' | 'blog' | 'faq' | 'pricing' | 'blog-post' | 'notfound';

export interface BlogSection {
  type: 'intro' | 'heading' | 'paragraph' | 'list' | 'callout' | 'tip' | 'cta-inline';
  heading?: string;
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedDate: string;
  readingTime: number;
  coverImage: string;
  coverAlt: string;
  featured?: boolean;
  content: BlogSection[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  lead: string;
  iconName: string;
  deliverables: string[];
  notice?: string;
  category: 'cleanup' | 'monthly' | 'reporting' | 'focus';
}

export interface PracticeMetric {
  month: string;
  grossRevenue: number;
  injectablesRevenue: number;
  laserRevenue: number;
  skincareRevenue: number;
  membershipRevenue: number;
  cogs: number;
  providerPayroll: number;
  operatingExpenses: number;
  netProfit: number;
  netMargin: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  practiceName: string;
  practiceType: string;
  currentSoftware: string;
  monthlyRevenue: string;
  primaryNeed: string;
  notes: string;
}
