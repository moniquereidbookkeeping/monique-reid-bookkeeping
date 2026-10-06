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
    const url = SITE_ORIGIN + (path === '/' ? '' : path);
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
            />

            {/* The problem, in the owner's words */}
            <WhySpecializedSection onBookCall={handleBookCall} />

            {/* How working together works */}
            <HowItWorks onBookCall={handleBookCall} />

            {/* Compact services summary (full detail lives on the Services page) */}
            <ServicesSummary onNavigate={handleNavigate} />

            {/* Free 60-second Health Check: the main lead magnet */}
            <PracticeAudit onBookCall={handleBookCall} />

            {/* Pricing (one place only) */}
            <PricingSection onBookCall={handleBookCall} />

            {/* Dashboard teaser */}
            <section className="py-12 bg-[#FDFCFA] border-b border-[#E2E8F0]">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40]">
                  See what clean books can tell you
                </h2>
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                  Explore an interactive example of how a MedSpa's revenue, treatment costs and provider pay look once they are categorized correctly.
                </p>
                <button
                  onClick={() => handleNavigate('dashboard')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1A2E40] text-[#1A2E40] font-bold text-sm hover:bg-[#1A2E40] hover:text-white transition-colors cursor-pointer"
                >
                  Open the example dashboard
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            <AboutSection onBookCall={handleBookCall} />

            <FAQSection onBookCall={handleBookCall} featuredLimit={6} showCta={false} />

            {/* Final call-to-action */}
            <section className="py-20 bg-[#1A2E40] text-white border-t border-[#D4AF37]/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
              <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  Let's Get Started
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
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
                    <span>Book Your Free Clarity Call</span>
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
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Focused Support for Growing Practices
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Bookkeeping Built Around Your Practice
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Specialized bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
                </p>
              </div>
            </div>

            <ServicesSection onBookCall={handleBookCall} />
            <PricingSection onBookCall={handleBookCall} />
            <BuiltForPractices onBookCall={handleBookCall} />
            <FAQSection onBookCall={handleBookCall} />
          </>
        )}

        {currentPage === 'dashboard' && (
          <>
            <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Executive Visibility &amp; Analytics
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Interactive Practice Numbers &amp; Benchmarks
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Explore how properly categorized aesthetic and wellness books isolate treatment COGS, provider compensation, and net operating surplus.
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
                  Specialized bookkeeping for MedSpa, aesthetic clinic, and wellness practice founders nationwide.
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
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Complimentary Practice Resources
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Treatment Margin &amp; Contribution Calculator
                </h1>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
                  Model unit economics for neurotoxins, dermal fillers, IV drips, and laser sessions with actual provider compensation and financing fees.
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
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Direct Practice Consultation
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Schedule Your Financial Clarity Call
                </h1>
              </div>
            </div>

            <ContactSection onNavigate={handleNavigate} />
          </>
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
