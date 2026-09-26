import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, Globe } from 'lucide-react';
import { BOOKING_URL } from '../constants/booking';

interface CalendlyBookingCardProps {
  onOpenPrivacy?: () => void;
}

// Static calendar data — shows current month with representative available slots
// Clicking any available date or CTA opens real Calendly in a new tab
const MONTH_LABEL = 'October 2026';
const WEEKS = [
  [null, null, null, null, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];
// Simulate available weekdays (Mon–Fri, not weekends, not past)
const AVAILABLE = new Set([6, 7, 8, 9, 13, 14, 15, 16, 20, 21, 22, 23, 27, 28, 29, 30]);

export const CalendlyBookingCard: React.FC<CalendlyBookingCardProps> = ({ onOpenPrivacy }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const openCalendly = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#1A2E40]">
          <Clock className="w-4 h-4 text-[#D4AF37]" />
          <span>Select an available day and time on the calendar below</span>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#CBD5E1] text-xs font-bold text-[#1A2E40] hover:text-[#D4AF37] transition-all shadow-xs"
        >
          Open directly on Calendly
          <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>

      {/* Main card — static Calendly UI replica */}
      <div className="relative w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden">
        {/* Calendly "Powered by" corner badge */}
        <div className="absolute top-0 right-0 z-10 pointer-events-none">
          <div
            className="w-20 h-20 overflow-hidden"
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                top: 14,
                right: -22,
                width: 90,
                background: '#1A1A2E',
                color: '#fff',
                fontSize: 7,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textAlign: 'center',
                padding: '3px 0',
                transform: 'rotate(45deg)',
                lineHeight: '1.4',
              }}
            >
              POWERED BY<br />Calendly
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Event info */}
          <div className="p-7 sm:p-9 border-b md:border-b-0 md:border-r border-[#E2E8F0] flex flex-col gap-5">
            <div>
              <p className="text-sm font-semibold text-[#57534E]">Monique Reid</p>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A2E40] mt-0.5 leading-snug">
                20-Minute Financial Clarity Call
              </h3>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-[#57534E]">
                <Clock className="w-4 h-4 text-[#57534E] shrink-0" />
                <span>20 min</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#57534E]">
                <Video className="w-4 h-4 text-[#57534E] shrink-0 mt-0.5" />
                <span>Web conferencing details provided upon confirmation.</span>
              </div>
            </div>

            <div className="text-sm text-[#57534E] leading-relaxed">
              <p className="font-bold text-[#1A2E40]">Get clarity on your practice's finances.</p>
              <p className="mt-1 font-light">
                In 20 minutes, I'll discuss your bookkeeping, reporting, and financial needs so you can better understand your numbers and your next best step.{' '}
                <span className="font-bold text-[#1A2E40]">No pressure. Just clarity.</span>
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center gap-4">
              <button
                type="button"
                onClick={openCalendly}
                className="text-xs text-[#D4AF37] hover:underline font-medium cursor-pointer"
              >
                Cookie settings
              </button>
              <button
                type="button"
                onClick={() => { if (onOpenPrivacy) onOpenPrivacy(); }}
                className="text-xs text-[#D4AF37] hover:underline font-medium cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Right: Static calendar */}
          <div className="p-7 sm:p-9">
            <h4 className="font-bold text-lg text-[#1A2E40] mb-5">Select a Date &amp; Time</h4>

            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={openCalendly}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F2EFE9] text-[#57534E] transition-colors cursor-pointer"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold text-[#1A2E40]">{MONTH_LABEL}</span>
              <button
                type="button"
                onClick={openCalendly}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F2EFE9] text-[#57534E] transition-colors cursor-pointer"
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Day of week headers */}
            <div className="grid grid-cols-7 mb-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="text-center text-[10px] font-semibold text-[#78716C] py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="space-y-0.5">
              {WEEKS.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7">
                  {week.map((day, di) => {
                    if (!day) return <div key={di} />;
                    const isAvail = AVAILABLE.has(day);
                    const isHovered = hovered === day;
                    return (
                      <div key={di} className="flex items-center justify-center py-0.5">
                        <button
                          type="button"
                          onClick={isAvail ? openCalendly : undefined}
                          onMouseEnter={() => isAvail && setHovered(day)}
                          onMouseLeave={() => setHovered(null)}
                          className={`w-9 h-9 rounded-full text-sm font-medium transition-all flex items-center justify-center
                            ${isAvail
                              ? isHovered
                                ? 'bg-[#D4AF37] text-[#1A2E40] cursor-pointer font-bold scale-105'
                                : 'bg-[#D4AF37]/15 text-[#1A2E40] hover:bg-[#D4AF37] hover:text-[#1A2E40] cursor-pointer font-semibold border border-[#D4AF37]/40'
                              : 'text-[#C4B9B0] cursor-default'
                            }`}
                          aria-label={isAvail ? `Book on ${MONTH_LABEL} ${day}` : undefined}
                          disabled={!isAvail}
                        >
                          {day}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Timezone */}
            <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
              <p className="text-xs font-semibold text-[#57534E] mb-1.5 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                Time zone
              </p>
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#1A2E40] transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Eastern Time – US &amp; Canada</span>
                <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-[#78716C]">
        <span>Powered by Calendly · Secure SSL encrypted calendar booking</span>
      </div>
    </div>
  );
};
