import React from 'react';
import { ShieldCheck, Stethoscope, Syringe, HeartPulse, Scale, Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface BuiltForPracticesProps {
  onBookCall: () => void;
}

export const BuiltForPractices: React.FC<BuiltForPracticesProps> = ({ onBookCall }) => {
  const practiceTypes = [
    { title: 'MedSpas', desc: 'Full-service med spas offering injectables, energy devices, facials, and retail skincare', icon: Syringe },
    { title: 'Aesthetic Clinics', desc: 'Cosmetic-focused clinics led by MDs, NPs, PAs, and RNs delivering advanced aesthetic treatments', icon: Sparkles },
    { title: 'IV Hydration & Wellness Practices', desc: 'Concierge infusion lounges, mobile drip services, and integrated wellness studios', icon: HeartPulse },
    { title: 'Medical Weight-Loss Practices', desc: 'GLP-1 prescription clinics, metabolic health programs, and peptide therapy providers', icon: Scale },
    { title: 'Related Self-Pay Healthcare', desc: 'Hormone replacement therapy, functional medicine, regenerative aesthetics, and concierge care', icon: Stethoscope },
  ];

  return (
    <section
      id="practice-focus-section"
      className="py-16 lg:py-24 bg-[#1A2E40] text-white relative overflow-hidden"
    >
      {/* Background ambient gold accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
              <Stethoscope className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Built For Growing Practices</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Financial organization that grows with your practice.
            </h2>

            <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl font-light">
              Whether you are launching your first solo treatment suite or operating a multi-provider
              aesthetic and wellness clinic with medical directors and clinical staff, I keep the financial side
              of your business organized, dependable, and understandable.
            </p>

            {/* Practice Types Pills Grid */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">
                Who We Serve:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {practiceTypes.map((pt, idx) => {
                  const Icon = pt.icon;
                  const isLast = idx === practiceTypes.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl bg-white/5 transition-all flex items-start gap-3 ${
                        isLast
                          ? 'sm:col-span-2 border border-[#D4AF37]/40 hover:border-[#D4AF37]/70 bg-[#D4AF37]/5'
                          : 'border border-white/10 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{pt.title}</p>
                        <p className="text-xs text-[#E2E8F0]/80 mt-0.5">{pt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Standards Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#122332] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 shadow-2xl relative">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>The Standard of Care</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
                What You Get Every Month
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: 'Books Kept Current & Reconciled',
                    desc: 'Bank accounts, credit cards, and merchant payout feeds reconciled systematically each month to resolve discrepancies promptly.',
                  },
                  {
                    title: 'Revenue & COGS Categorized Consistently',
                    desc: 'Injectables, clinical supplies, wellness therapies, and prepaid memberships separated cleanly so service-line margins are transparent.',
                  },
                  {
                    title: 'Monthly Reporting In Plain Language',
                    desc: 'Clear visual reports, executive takeaways, and plain-language summaries you can use immediately to guide practice decisions.',
                  },
                  {
                    title: 'Proactive Follow-Up on Uncleared Items',
                    desc: 'Unmatched deposits, 1099 contractor payments, or missing receipts flagged proactively so tax preparation is smooth and organized.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#1A2E40] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-[#E2E8F0]/80 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#E2E8F0]">Ready for clarity?</p>
                  <p className="text-sm font-bold text-[#D4AF37]">Complimentary 20-Min Call</p>
                </div>
                <button
                  onClick={onBookCall}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-xs transition-all shadow-[0_2px_10px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] border border-[#FFF5DE]/50 active:scale-[0.98] group cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#1A2E40]" />
                  <span>Book on Calendly</span>
                  <ArrowRight className="w-3 h-3 text-[#1A2E40] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
