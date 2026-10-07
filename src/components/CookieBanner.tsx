import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { getConsent, setConsent, loadAnalytics } from '../lib/analytics';
import { PageView } from '../types';

export const OPEN_COOKIE_SETTINGS = 'mr-open-cookie-settings';

/** The two cookie categories. Keep this wording in step with section 8 of the Privacy Policy. */
const CATEGORIES = [
  {
    id: 'necessary',
    title: 'Strictly Necessary Cookies',
    description:
      "These cookies are required for the site to work and can't be switched off. They're typically set in response to something you do, like setting your cookie preferences. They don't store anything that identifies you personally.",
  },
  {
    id: 'analytics',
    title: 'Analytics Cookies',
    description:
      "These help us understand how visitors use the site so we can improve it. Google Analytics gives us aggregate traffic numbers — which pages get visited, where visitors come from. Microsoft Clarity records individual visit sessions, including clicks and scrolling, so we can see how people actually move through the site; it automatically hides anything typed into form fields. If you turn these off, we won't be able to see how the site is being used or where it needs work.",
  },
] as const;

type View = 'closed' | 'banner' | 'settings';

const primaryBtn =
  'px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#1A2E40] text-sm font-bold hover:bg-[#E5C765] transition-colors cursor-pointer';
const secondaryBtn =
  'px-5 py-2.5 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer';

export const CookieBanner: React.FC<{ onNavigate: (p: PageView) => void }> = ({ onNavigate }) => {
  const [view, setView] = useState<View>('closed');
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Decide what to show only after hydration, so the prerendered HTML and the first client render match.
  useEffect(() => {
    loadAnalytics();
    setView(getConsent() === null ? 'banner' : 'closed');
    const openSettings = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setAnalyticsOn(getConsent() === 'accepted');
      setExpanded(null);
      setView('settings');
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, openSettings);
  }, []);

  // While the banner shows, reserve its height at the bottom of the page so the footer stays reachable.
  useEffect(() => {
    if (view !== 'banner' || !bannerRef.current) return;
    const el = bannerRef.current;
    const prev = document.body.style.paddingBottom;
    const fit = () => { document.body.style.paddingBottom = `${el.offsetHeight}px`; };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => { ro.disconnect(); document.body.style.paddingBottom = prev; };
  }, [view]);

  // Settings panel: move focus into it, keep Tab inside it, close on Escape, and stop the page behind from scrolling.
  useEffect(() => {
    if (view !== 'settings') return;
    headingRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); closeSettings(); return; }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>('button, a[href]');
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; };
  }); // re-bind each render so closeSettings sees current state

  const save = (allowAnalytics: boolean) => {
    setConsent(allowAnalytics ? 'accepted' : 'declined');
    setView('closed');
    returnFocus.current?.focus?.();
  };

  const openSettings = () => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setAnalyticsOn(getConsent() === 'accepted');
    setExpanded(null);
    setView('settings');
  };

  // Closing without saving: back to the banner if no choice has been made yet, otherwise just close.
  function closeSettings() {
    setView(getConsent() === null ? 'banner' : 'closed');
    returnFocus.current?.focus?.();
  }

  const privacyLink = (
    <a
      href="/privacy"
      onClick={(e) => { e.preventDefault(); setView(getConsent() === null ? 'banner' : 'closed'); onNavigate('privacy'); }}
      className="font-semibold text-[#D4AF37]! underline! decoration-[#D4AF37]/60! underline-offset-4 hover:text-white!"
    >
      Privacy Policy
    </a>
  );

  if (view === 'closed') return null;

  if (view === 'banner') {
    return (
      <div
        ref={bannerRef}
        role="region"
        aria-label="Cookie consent"
        className="fixed bottom-0 inset-x-0 z-50 bg-[#1A2E40] text-white border-t border-[#D4AF37]/40 shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <p className="flex-1 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
            We use cookies to keep this site working and, if you allow it, to understand how visitors use it.
            You can change your choice any time.{' '}
            <button
              type="button"
              onClick={openSettings}
              className="font-semibold text-[#D4AF37] underline decoration-[#D4AF37]/60 underline-offset-4 hover:text-white cursor-pointer"
            >
              Cookie Settings
            </button>
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-3 shrink-0">
            <button type="button" onClick={() => save(false)} className={secondaryBtn}>Reject All</button>
            <button type="button" onClick={() => save(true)} className={primaryBtn}>Accept All</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/55 p-0 sm:p-6" onClick={closeSettings}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-xl max-h-[92vh] sm:max-h-[85vh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-[#1A2E40] text-white border border-[#D4AF37]/30 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-white/10">
          <h2 id="cookie-settings-title" ref={headingRef} tabIndex={-1} className="text-xl font-serif font-bold text-white outline-none">
            Cookie Settings
          </h2>
          <button type="button" onClick={closeSettings} aria-label="Close cookie settings" className="p-1.5 rounded-lg text-[#E2E8F0] hover:text-white hover:bg-white/10 cursor-pointer">
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
          <p className="text-sm leading-relaxed text-[#E2E8F0]">
            Cookies are small files a website saves in your browser. Some are needed for this site to work. Others,
            only if you allow them, help us see how visitors use the site so we can improve it. Choose which kinds to
            allow below. Your choice is saved in this browser, and you can change it any time using Cookie Settings at
            the bottom of any page. The booking calendar on the Contact page is run by Calendly, which sets its own
            cookies and offers its own choices. More detail is in our {privacyLink}.
          </p>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">Manage consent preferences</h3>
            <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
              {CATEGORIES.map((cat) => {
                const isOpen = expanded === cat.id;
                const panelId = `cookie-cat-${cat.id}`;
                return (
                  <li key={cat.id} className="py-3">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setExpanded(isOpen ? null : cat.id)}
                        className="flex-1 flex items-center gap-2 text-left text-base font-semibold text-white cursor-pointer"
                      >
                        <ChevronDown className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        {cat.title}
                      </button>
                      {cat.id === 'necessary' ? (
                        <span className="text-sm font-bold text-[#D4AF37] whitespace-nowrap">Always Active</span>
                      ) : (
                        <button
                          type="button"
                          role="switch"
                          aria-checked={analyticsOn}
                          aria-label={cat.title}
                          onClick={() => setAnalyticsOn((v) => !v)}
                          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${analyticsOn ? 'bg-[#D4AF37]' : 'bg-white/25'}`}
                        >
                          <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${analyticsOn ? 'translate-x-5' : 'translate-x-0.5'}`} />
                        </button>
                      )}
                    </div>
                    <p id={panelId} hidden={!isOpen} className="mt-2 pl-6 text-sm leading-relaxed text-[#E2E8F0]">
                      {cat.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-5 sm:px-6 py-4 border-t border-white/10">
          <button type="button" onClick={() => save(false)} className={secondaryBtn}>Reject All</button>
          <button type="button" onClick={() => save(analyticsOn)} className={primaryBtn}>Confirm My Choices</button>
        </div>
      </div>
    </div>
  );
};
