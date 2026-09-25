import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { FounderPortrait } from './FounderPortrait';

interface HeroProps {
  onBookCall: () => void;
  onExploreServices: () => void;
  onViewDashboard?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookCall,
  onExploreServices,
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E2E8F0] bg-gradient-to-b from-[#FDFCFA] via-[#FDFCFA] to-[#F8F9FA]"
    >
      {/* Subtle luxury ambient gold glow in background */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A2E40]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Aesthetic & Wellness Practice Niche Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/15 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Aesthetic &amp; Wellness Practice Bookkeeping</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A2E40] tracking-tight leading-[1.12]">
              Know Your Numbers.{' '}
              <br />
              <span className="text-[#D4AF37] relative inline-block">
                Grow With Confidence.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#D4AF37]/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading with Consistent Umbrella Positioning */}
            <p className="text-lg sm:text-xl text-[#4A5568] leading-relaxed max-w-2xl font-normal">
              Specialized bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
            </p>

            {/* Strategic Segments Mention */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#64748B]">
              <span className="font-semibold text-[#1A2E40]">Specialized in:</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E2E8F0]">MedSpas &amp; Injectors</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E2E8F0]">Aesthetic Clinics</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E2E8F0]">IV Hydration &amp; Wellness</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E2E8F0]">Medical Weight-Loss</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-book-clarity-call-btn"
                onClick={onBookCall}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-[#1A2E40] bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] active:scale-[0.99] transition-all duration-200 shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200 shrink-0">
                  <Calendar className="w-4 h-4" />
                </span>
                <span>Book a Financial Clarity Call</span>
                <ArrowRight className="w-4 h-4 text-[#1A2E40] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-[#1A2E40] bg-transparent border-2 border-[#1A2E40] hover:bg-[#1A2E40] hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>

          {/* Right Column: Monique Reid's Portrait with Luxury Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px]">
              {/* Decorative Geometric Gold Ring Behind */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 via-[#1A2E40]/10 to-[#D4AF37]/20 -rotate-2 blur-xs pointer-events-none" />

              {/* Portrait Container with Original Background and Chair Preserved */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F0EDE6] border-2 border-[#D4AF37]/50 shadow-xl group">
                {/* Subtle top badge */}
                <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A2E40]/90 backdrop-blur-sm text-white text-xs font-medium border border-[#D4AF37]/40 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Monique Reid · Founder</span>
                </div>

                {/* Approved Layered Portrait */}
                <FounderPortrait variant="hero" />

                {/* Bottom floating badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                      Core Standard
                    </p>
                    <p className="text-sm font-bold text-[#1A2E40]">
                      Clean books. Clearer numbers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
