import React, { useEffect, useRef } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { BOOKING_URL } from '../constants/booking';

interface CalendlyBookingCardProps {
  onOpenPrivacy?: () => void;
}

export const CalendlyBookingCard: React.FC<CalendlyBookingCardProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      if ((window as any).Calendly && containerRef.current) {
        // Clear container to prevent duplicate iframes on re-renders
        containerRef.current.innerHTML = '';
        (window as any).Calendly.initInlineWidget({
          url: BOOKING_URL,
          parentElement: containerRef.current,
        });
      }
    };

    if ((window as any).Calendly) {
      initWidget();
    } else {
      const existingScript = document.querySelector(
        'script[src*="calendly.com/assets/external/widget.js"]'
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.addEventListener('load', initWidget);
      } else {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = initWidget;
        document.body.appendChild(script);
      }
    }
  }, []);

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

      {/* Main Card holding Calendly Inline Widget */}
      <div className="relative w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden min-h-[700px]">
        {/* Calendly inline widget container */}
        <div
          ref={containerRef}
          className="calendly-inline-widget w-full"
          data-url={BOOKING_URL}
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        >
          {/* Fallback accessible iframe rendered while script loads */}
          <iframe
            src={BOOKING_URL}
            width="100%"
            height="700"
            title="Schedule 20-Minute Financial Clarity Call with Monique Reid"
            className="w-full h-[700px] border-0 rounded-2xl"
          />
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-[#64748B]">
        <span>Powered by Calendly · Secure SSL encrypted calendar booking</span>
      </div>
    </div>
  );
};
