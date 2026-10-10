import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { BOOKING_URL } from '../constants/booking';

interface CalendlyBookingCardProps {
  onOpenPrivacy?: () => void;
}

type CalendlyWindow = Window & {
  Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
};

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
/** If the calendar has not reported in by then, show the direct link prominently. */
const SLOW_AFTER_MS = 8000;

export const CalendlyBookingCard: React.FC<CalendlyBookingCardProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);

  // This component is the only thing that starts the calendar. The container below deliberately has no
  // "calendly-inline-widget" class and no data-url: Calendly's script scans the page for that class when it
  // loads and starts its own copy, which gave two calendars (with data-url) or a crash (without it).
  useEffect(() => {
    const w = window as CalendlyWindow;
    let cancelled = false;
    let pendingScript: HTMLScriptElement | null = null;

    const initWidget = () => {
      const el = containerRef.current;
      if (cancelled || !w.Calendly || !el) return;
      el.innerHTML = '';
      w.Calendly.initInlineWidget({ url: BOOKING_URL, parentElement: el });
    };

    // Calendly's embed talks to this page; any of its messages means the calendar is up.
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const data = e.data as { event?: string } | null;
      if (data && typeof data.event === 'string' && data.event.startsWith('calendly.')) setReady(true);
    };
    window.addEventListener('message', onMessage);

    if (w.Calendly) {
      initWidget();
    } else {
      pendingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement | null;
      if (!pendingScript) {
        pendingScript = document.createElement('script');
        pendingScript.src = SCRIPT_SRC;
        pendingScript.async = true;
        document.body.appendChild(pendingScript);
      }
      pendingScript.addEventListener('load', initWidget);
    }

    const timer = window.setTimeout(() => setSlow(true), SLOW_AFTER_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener('message', onMessage);
      pendingScript?.removeEventListener('load', initWidget);
    };
  }, []);

  const showFallback = slow && !ready;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#1A2E40]">
          <Calendar className="w-4 h-4 text-[#8A6A00]" />
          <span>Select an available day and time on the calendar below</span>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the booking calendar in a new tab"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#CBD5E1] text-sm font-bold text-[#1A2E40] transition-all shadow-xs group"
        >
          <span>Open calendar in a new tab</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#8A6A00]" />
        </a>
      </div>

      {showFallback && (
        <div role="status" className="mb-3 rounded-xl border border-[#D4AF37]/50 bg-[#FAF8F5] p-4 text-center">
          <p className="text-sm text-[#1A2E40] font-semibold">The calendar is taking a while to load.</p>
          <p className="text-sm text-[#4A5568] mt-1">
            Some browsers and private windows block the embedded calendar. You can book on the same calendar here:
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2E40] text-[#D4AF37] text-sm font-bold"
          >
            Book Your Free 20-Min Clarity Call
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      <div className="relative w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden min-h-[700px]">
        <div
          ref={containerRef}
          className="w-full"
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        />
      </div>

      <div className="mt-3 text-center text-sm text-[#64748B]">
        <span>Powered by Calendly</span>
      </div>
    </div>
  );
};
