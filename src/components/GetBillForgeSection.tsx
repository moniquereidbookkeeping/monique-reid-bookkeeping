import React from 'react';
import { ExternalLink, FileText, CheckCircle2, Receipt, ArrowRight, Shield } from 'lucide-react';

export const GetBillForgeSection: React.FC = () => {
  return (
    <section id="getbillforge-section" className="py-16 lg:py-20 bg-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1A2E40] to-[#122230] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-[#D4AF37]/30 relative overflow-hidden">
          {/* Subtle gold decorative ring */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Receipt className="w-3.5 h-3.5" />
                Also from Monique Reid
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                Practical tools for small-business owners.
              </h2>

              <p className="text-base text-[#E2E8F0] leading-relaxed max-w-xl font-light">
                Smart financial and operational systems for MedSpas, aesthetic clinics, IV hydration &amp; wellness practices, medical weight-loss practices, and related businesses.
              </p>

              <div className="pt-2">
                <a
                  href="https://getbillforge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.28)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)] border border-[#FFF5DE]/60 group active:scale-[0.99]"
                >
                  <span>Explore GetBillForge</span>
                  <ExternalLink className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Kit Cards */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { title: 'Smart Invoice Template Kit', status: 'Ready to use', desc: 'Customizable branded billing templates' },
                { title: 'Service Billing & Retainers', status: 'Optimized', desc: 'Pre-built recurring workflows' },
                { title: 'Organized Records Framework', status: 'Instant Download', desc: 'Audit-ready expense filing systems' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-between hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-[#E2E8F0]/70">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
