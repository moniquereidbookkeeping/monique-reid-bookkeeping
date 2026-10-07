/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { PageView } from './types';
import { PAGE_META, SITE_ORIGIN, parsePath, pathFor } from './router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FinancialDashboard } from './components/FinancialDashboard';
import { ServicesSection } from './components/ServicesSection';
import { BuiltForPractices } from './components/BuiltForPractices';
import { CookieBanner } from './components/CookieBanner';
import { trackPageView, trackEvent } from './lib/analytics';
import { BookedPage } from './components/BookedPage';
import { PracticeAudit } from './components/PracticeAudit';
import { HowItWorks } from './components/HowItWorks';
import { ServicesSummary } from './components/ServicesSummary';
import { NotFoundPage } from './components/NotFoundPage';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ProfitCalculator } from './components/ProfitCalculator';
import { ContactSection } from './components/ContactSection';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { BlogListPage } from './components/BlogListPage';
import { BlogPostPage } from './components/BlogPostPage';
import { PricingSection } from './components/PricingSection';
import { WhySpecializedSection } from './components/WhySpecializedSection';
import { Footer } from './components/Footer';
import { SouthFloridaPage } from './components/SouthFloridaPage';
import { RelatedArticles } from './components/RelatedArticles';
import { QuickBooksCleanupPage } from './components/QuickBooksCleanupPage';
import { PracticeTypePage, IV_HYDRATION, MEDICAL_WEIGHT_LOSS } from './components/PracticeTypePage';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function App({ initialPath }: { initialPath?: string } = {}) {
  const initial = parsePath(initialPath ?? window.location.pathname);
  const [currentPage, setCurrentPage] = useState<PageView>(initial.page);
  const [currentBlogSlug, setCurrentBlogSlug] = useState<string>(initial.slug);

  // Keep the URL and the visible page in sync (back/forward buttons, shared links).
  useEffect(() => {
    const onPop = () => {
      const { page, slug } = parsePath(window.location.pathname);
      setCurrentPage(page);
      setCurrentBlogSlug(slug);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Per-page canonical URL, title and description (blog posts set their own title/description).
  useEffect(() => {
    const path = pathFor(currentPage, currentBlogSlug);
    const url = SITE_ORIGIN + path;
    const setTag = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
    setTag('meta[property="og:url"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m; }, 'content', url);
    setTag('meta[name="robots"]', () => Object.assign(document.createElement('meta'), { name: 'robots' }), 'content', currentPage === 'booked' || currentPage === 'notfound' ? 'noindex, nofollow' : 'index, follow');
    const meta = PAGE_META[currentPage];
    trackPageView();
    if (currentPage === 'booked') trackEvent('booking_confirmed');
    if (meta) {
      document.title = meta.title;
      setTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', meta.description);
    }
  }, [currentPage, currentBlogSlug]);

  const go = (page: PageView, slug = '') => {
    const path = pathFor(page, slug);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPage(page);
    setCurrentBlogSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calendly (free plan) cannot redirect after booking, but its embedded widget tells this page
  // when a booking is scheduled, so we show our own confirmation page.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const data = e.data as { event?: string } | null;
      if (data && data.event === 'calendly.event_scheduled') go('booked');
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (page: PageView) => go(page);

  const handleBookCall = () => go('contact');

  const readPost = (slug: string) => go('blog-post', slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-[#57534E]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1A2E40] focus:text-[#D4AF37] focus:font-bold focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-[#D4AF37]"
      >
        Skip to main content
      </a>

      {/* Sticky Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookCall={handleBookCall}
      />

      {/* Main Page Content Body */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onBookCall={handleBookCall}
              onExploreServices={() => handleNavigate('services')}
              onViewDashboard={() => handleNavigate('dashboard')}
              onNavigate={handleNavigate}
            />

            {/* The problem, in the owner's words */}
            <WhySpecializedSection onBookCall={handleBookCall} />

            {/* How working together works */}
            <HowItWorks onBookCall={handleBookCall} />

            {/* Compact services summary (full detail lives on the Services page) */}
            <ServicesSummary onNavigate={handleNavigate} />

            {/* Free 60-second Health Check: the main lead magnet */}
            <PracticeAudit onBookCall={handleBookCall} />

            <PricingSection onBookCall={handleBookCall} onViewPricing={() => handleNavigate('pricing')} />

            {/* Dashboard teaser */}
            <section className="py-12 bg-[#FDFCFA] border-b border-[#E2E8F0]">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40]">
                  See what clean books can tell you
                </h2>
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                  Explore an interactive example of how a MedSpa's revenue, treatment costs and provider pay look once they are categorized correctly.
                </p>
                <a
                  href="/dashboard"
                  onClick={(e) => { e.preventDefault(); handleNavigate('dashboard'); }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1A2E40] text-[#1A2E40]! font-bold text-sm hover:bg-[#1A2E40] hover:text-white! transition-colors cursor-pointer"
                >
                  Open the example dashboard
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            <AboutSection onBookCall={handleBookCall} />

            <RelatedArticles
              heading="Latest guides for practice owners"
              intro="Practical QuickBooks guides for MedSpas, aesthetic clinics and wellness practices."
              onReadPost={readPost}
            />

            <FAQSection onBookCall={handleBookCall} featuredLimit={6} showCta={false} includeSchema={false} onViewAll={() => handleNavigate('faq')} />

            {/* Final call-to-action */}
            <section className="py-20 bg-[#1A2E40] text-white border-t border-[#D4AF37]/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
              <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  Let's Get Started
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                  Let's talk about your practice.
                </h2>
                <p className="text-base sm:text-lg text-[#E2E8F0] max-w-2xl mx-auto font-light leading-relaxed">
                  Book a complimentary 20-minute Financial Clarity Call on Zoom and share what is happening with your books. You will get clear options and a path to organized financial records.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleBookCall}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 flex items-center justify-center gap-3 group active:scale-[0.99] cursor-pointer"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] shrink-0">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <span>Book Your Free 20-Min Clarity Call</span>
                    <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'services' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Focused Support for Growing Practices
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Med Spa Bookkeeping Services Built Around Your Practice
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Specialized bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
                </p>
              </div>
            </div>

            <ServicesSection onBookCall={handleBookCall} onNavigate={handleNavigate} />

            <RelatedArticles
              heading="Guides to how the work is done"
              slugs={['medspa-membership-revenue-quickbooks', 'reconcile-boulevard-vagaro-quickbooks', 'track-neurotoxin-filler-costs-quickbooks', 'medspa-provider-commission-bookkeeping', 'medspa-chart-of-accounts-quickbooks']}
              onReadPost={readPost}
            />

            {/* Pointer to the separate pricing page */}
            <section className="py-12 bg-[#F4F6F8] border-b border-[#E2E8F0]">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">Ready to see what it costs?</h2>
                <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">Monthly plans start at $497 and cleanup projects start at $597. Full details are on the pricing page.</p>
                <button
                  onClick={() => handleNavigate('pricing')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A2E40] hover:bg-[#253E52] text-white font-bold text-base transition-all shadow-md cursor-pointer"
                >
                  <span>View Pricing</span>
                </button>
              </div>
            </section>
            <BuiltForPractices onBookCall={handleBookCall} onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'dashboard' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Interactive Example
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Med Spa Financial Reporting: See Where Your Revenue Goes
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Med spa financial reporting in practice: the monthly reports and KPIs clients receive, shown with an example. See how organized books separate treatment costs, provider pay and operating expenses, and show what is left. All figures are examples.
                </p>
              </div>
            </div>

            <FinancialDashboard
              onExploreServices={() => handleNavigate('services')}
              onBookCall={handleBookCall}
            />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Meet Monique Reid
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Specialized bookkeeping for MedSpa, aesthetic clinic, and wellness practice founders, based in Fort Lauderdale and serving practices nationwide.
                </p>
              </div>
            </div>

            <AboutSection onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'calculator' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Free Practice Tool
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Treatment Profit Calculator
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Estimate what a single treatment contributes after product cost, provider pay and payment fees.
                </p>
              </div>
            </div>

            <ProfitCalculator onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Free 20-Minute Zoom Call
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Book Your Free Clarity Call
                </h1>
              </div>
            </div>

            <ContactSection onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'pricing' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Plans &amp; Pricing
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Med Spa Bookkeeping Plans &amp; Pricing
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Flat monthly plans and fixed-fee cleanup projects, with a free call to find the right fit.
                </p>
              </div>
            </div>

            <PricingSection onBookCall={handleBookCall} onViewCleanup={() => handleNavigate('quickbooks-cleanup')} />

            <section className="py-12 bg-white border-b border-[#E2E8F0]">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">Questions about pricing?</h2>
                <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">Read answers about what affects your fee, how cleanup works, and what happens on the free call.</p>
                <a
                  href="/faq"
                  onClick={(e) => { e.preventDefault(); handleNavigate('faq'); }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A2E40] hover:bg-[#253E52] text-white! font-bold text-base transition-all shadow-md cursor-pointer"
                >
                  <span>Read the FAQ</span>
                </a>
              </div>
            </section>
          </>
        )}

        {currentPage === 'faq' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Questions &amp; Answers
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Bookkeeping FAQ for Aesthetic &amp; Wellness Practices
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Clear answers about cleanup, monthly bookkeeping, pricing, patient financing and memberships.
                </p>
              </div>
            </div>

            <FAQSection onBookCall={handleBookCall} hideHeading />
          </>
        )}

        {currentPage === 'south-florida' && (
          <SouthFloridaPage onNavigate={handleNavigate} onBookCall={handleBookCall} onReadPost={readPost} />
        )}

        {currentPage === 'quickbooks-cleanup' && (
          <QuickBooksCleanupPage onNavigate={handleNavigate} onBookCall={handleBookCall} onReadPost={readPost} />
        )}

        {currentPage === 'iv-hydration' && (
          <PracticeTypePage content={IV_HYDRATION} onNavigate={handleNavigate} onBookCall={handleBookCall} onReadPost={readPost} />
        )}

        {currentPage === 'medical-weight-loss' && (
          <PracticeTypePage content={MEDICAL_WEIGHT_LOSS} onNavigate={handleNavigate} onBookCall={handleBookCall} onReadPost={readPost} />
        )}

        {currentPage === 'blog' && (
          <BlogListPage
            onReadPost={(slug) => go('blog-post', slug)}
            onBookCall={handleBookCall}
          />
        )}

        {currentPage === 'blog-post' && (
          <BlogPostPage
            slug={currentBlogSlug}
            onBack={() => handleNavigate('blog')}
            onBookCall={handleBookCall}
            onReadPost={(slug) => go('blog-post', slug)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'notfound' && <NotFoundPage onNavigate={handleNavigate} />}

        {currentPage === 'booked' && <BookedPage onNavigate={handleNavigate} />}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} onBookCall={handleBookCall} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage onNavigate={handleNavigate} onBookCall={handleBookCall} />
        )}
      </main>

      <CookieBanner onNavigate={handleNavigate} />

      {/* Global Footer (Without obsolete logo modal) */}
      <Footer
        onNavigate={handleNavigate}
        onBookCall={handleBookCall}
      />
    </div>
  );
}
