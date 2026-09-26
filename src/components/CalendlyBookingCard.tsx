import React from 'react';
import { ExternalLink, Calendar, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { BOOKING_URL } from '../constants/booking';

interface CalendlyBookingCardProps {
  onOpenPrivacy?: () => void;
}

export const CalendlyBookingCard: React.FC<CalendlyBookingCardProps> = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Top Bar with Direct Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#1A2E40]">
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span>Select an available day and time on the calendar below</span>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open 20-minute consultation directly on Calendly in a new tab"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#CBD5E1] text-xs font-bold text-[#1A2E40] hover:text-[#D4AF37] transition-all shadow-xs group"
        >
          <span>Open directly on Calendly</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Static Booking Card — replaces live Calendly iframe */}
      <div className="relative w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px]">

          {/* Left: What to Expect */}
          <div className="bg-[#1A2E40] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-white/10 mb-4">
                  <Clock className="w-3 h-3" />
                  Complimentary · 20 Minutes
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight">
                  Financial Clarity Call
                </h3>
                <p className="mt-2 text-sm text-[#E2E8F0]/80 font-light leading-relaxed">
                  A focused 20-minute Zoom to review your practice's bookkeeping situation and discuss a clear path forward.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Review your current bookkeeping setup and pain points",
                  "Identify immediate opportunities for cleanup or clarity",
                  "Discuss a clear scope and next steps — no pressure",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#1A2E40] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span className="text-sm text-[#E2E8F0] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#E2E8F0]/70">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Strictly confidential · No obligation · Zoom or phone</span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6 bg-[#FDFCFA]">
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-[#D4AF37]" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif font-bold text-xl text-[#1A2E40]">
                Book Your 20-Minute Call
              </h4>
              <p className="text-sm text-[#57534E] font-light leading-relaxed max-w-xs mx-auto">
                Choose a time that works for you directly on Calendly. Booking takes under a minute.
              </p>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full max-w-xs px-6 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)] border border-[#FFF5DE]/60 group"
            >
              <Calendar className="w-4 h-4 text-[#1A2E40]" />
              <span>Open Calendly to Book</span>
              <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="space-y-1.5 text-xs text-[#78716C]">
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Zoom or phone — your preference</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Instant confirmation sent to your email</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>No booking fee · No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-[#78716C]">
        <span>Booking managed by Calendly · Secure SSL encrypted</span>
      </div>
    </div>
  );
};
