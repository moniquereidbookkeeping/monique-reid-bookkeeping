import React from 'react';
import { ShieldCheck, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { FounderPortrait } from './FounderPortrait';

interface AboutSectionProps {
  onBookCall: () => void;
  showPortrait?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookCall, showPortrait = true }) => {
  return (
    <section id="about-section" className="py-14 lg:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 to-[#1A2E40]/20 rotate-1 blur-xs pointer-events-none" />

              {showPortrait && (
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F9F7F4] to-[#E5DDD0] border-2 border-[#D4AF37]/60 shadow-xl group">
                <FounderPortrait variant="about" />

                <div className="p-4 bg-white border-t border-[#E2E8F0] text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00] mb-1">
                    Specialized Bookkeeping
                  </p>
                  <h3 className="font-serif font-bold text-xl text-[#1A2E40]">
                    Monique Reid
                  </h3>
                  <p className="text-sm font-semibold text-[#4A5568] mt-0.5">
                    Clean books. Clearer decisions.
                  </p>
                </div>
              </div>
              )}

              {/* Intuit Certified ProAdvisor Credentials Badges */}
              <div className={`${showPortrait ? 'mt-4 ' : ''}p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-md`}>
                <div className="mb-4 pb-2.5 border-b border-[#E2E8F0] text-center">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#1A2E40]">
                    Credentials
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 items-center justify-items-center">
                  {/* Badge 1: Gold Tier */}
                  <div className="w-full aspect-square max-w-[100px] flex items-center justify-center transition-transform duration-200 hover:scale-105">
                    <img
                      src="/assets/badges/gold-badge.svg"
                      alt="Intuit Certified QuickBooks ProAdvisor"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>

                  {/* Badge 2: Level 2 */}
                  <div className="w-full aspect-square max-w-[100px] flex items-center justify-center transition-transform duration-200 hover:scale-105">
                    <img
                      src="/assets/badges/level2-badge.svg"
                      alt="QuickBooks Online Level 2 Certified"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>

                  {/* Badge 3: Payroll */}
                  <div className="w-full aspect-square max-w-[100px] flex items-center justify-center transition-transform duration-200 hover:scale-105">
                    <img
                      src="/assets/badges/payroll-badge.svg"
                      alt="QuickBooks Payroll Certified"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Credential labels */}
                <div className="mt-3 pt-3 border-t border-[#E2E8F0] space-y-1">
                  <p className="text-sm text-[#4A5568] text-center leading-snug">Intuit Certified QuickBooks ProAdvisor</p>
                  <p className="text-sm text-[#4A5568] text-center leading-snug">QuickBooks Online Level 2</p>
                  <p className="text-sm text-[#4A5568] text-center leading-snug">QuickBooks Payroll Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Practice Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
              Clean Books. Clearer Numbers.{' '}
              <span className="text-[#A67C00] block mt-1">More Confident Decisions.</span>
            </h2>

            <div className="space-y-4 text-lg text-[#4A5568] leading-relaxed">
              <p>
                Hi, I'm Monique Reid, an Intuit Certified QuickBooks ProAdvisor with a Bachelor of Business Administration. I built this practice specifically to serve MedSpas, aesthetic clinics, IV hydration and wellness businesses, medical weight-loss practices, and related self-pay healthcare businesses.
              </p>
              <p>
                I chose to focus on this industry because its books are harder than most generalist bookkeepers are set up for. The financial workflows here are genuinely more complex — POS and merchant payouts, patient financing through Cherry and CareCredit, prepaid packages, membership liabilities, treatment costs, and multiple payment platforms — and a generic small-business approach often handles them poorly. I built my QuickBooks approach around how these practices actually operate, not around a generic small-business model.
              </p>
              <p>
                My focus is on getting your QuickBooks records structured correctly, reconciled consistently, and organized in a way that produces reports you can actually use — so your CPA isn't cleaning up behind you at tax time, and you're not left guessing whether your practice is profitable.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center gap-2 text-base font-bold text-[#1A2E40] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>No Confusing Jargon</span>
                </div>
                <p className="text-sm text-[#4A5568]">
                  Monthly summaries in plain language — where your cash went, what it cost, and what changed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center gap-2 text-base font-bold text-[#1A2E40] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ready for Tax Season</span>
                </div>
                <p className="text-sm text-[#4A5568]">
                  Your CPA gets clean, reconciled records, so tax preparation starts from accurate books.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center gap-2 text-base font-bold text-[#1A2E40] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>You're Not Alone in This</span>
                </div>
                <p className="text-sm text-[#4A5568]">
                  Many practice owners come to bookkeeping help frustrated, behind, or unsure. This practice is built for exactly that.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-base transition-all shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 group active:scale-[0.99] cursor-pointer"
              >
                <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </span>
                <span>Book Your 20-Min Financial Clarity Call</span>
                <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-sm text-[#4A5568] flex items-center justify-center sm:justify-start gap-1">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Confidential Practice Review</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
