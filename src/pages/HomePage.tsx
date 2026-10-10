import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import type { PageProps } from '../routes';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { PracticeAudit } from '../components/PracticeAudit';
import { PricingSection } from '../components/PricingSection';
import { RelatedArticles } from '../components/RelatedArticles';
import { ServicesSummary } from '../components/ServicesSummary';
import { WhySpecializedSection } from '../components/WhySpecializedSection';

/** Home page (/). */
export default function HomePage({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return (
    <>
      <Hero
        onBookCall={onBookCall}
        onExploreServices={() => onNavigate('services')}
        onViewDashboard={() => onNavigate('dashboard')}
        onNavigate={onNavigate}
      />

      {/* The problem, in the owner's words */}
      <WhySpecializedSection onBookCall={onBookCall} />

      {/* How working together works */}
      <HowItWorks onBookCall={onBookCall} />

      {/* Compact services summary (full detail lives on the Services page) */}
      <ServicesSummary onNavigate={onNavigate} />

      {/* Free 7-question Health Check: the main lead magnet */}
      <PracticeAudit onBookCall={onBookCall} />

      <PricingSection onBookCall={onBookCall} onViewPricing={() => onNavigate('pricing')} />

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
            onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1A2E40] text-[#1A2E40]! font-bold text-sm hover:bg-[#1A2E40] hover:text-white! transition-colors cursor-pointer"
          >
            Open the example dashboard
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <AboutSection onBookCall={onBookCall} onViewAbout={() => onNavigate('about')} />

      <RelatedArticles
        heading="Latest guides for practice owners"
        intro="Practical QuickBooks guides for MedSpas, aesthetic clinics and wellness practices."
        onReadPost={onReadPost}
      />

      <FAQSection onBookCall={onBookCall} featuredLimit={3} showCta={false} includeSchema={false} onViewAll={() => onNavigate('faq')} />

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
            Book a free 20-minute Clarity Call on Zoom and share what is happening with your books. You will get clear options and a path to organized financial records.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact"
              onClick={(e) => { e.preventDefault(); onBookCall(); }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 flex items-center justify-center gap-3 group active:scale-[0.99] cursor-pointer"
            >
              <span className="w-7 h-7 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] shrink-0">
                <Calendar className="w-4 h-4" />
              </span>
              <span>Book Your Free 20-Min Clarity Call</span>
              <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
