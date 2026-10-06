import React, { useEffect, useState } from 'react';
import { getConsent, setConsent, loadAnalytics } from '../lib/analytics';
import { PageView } from '../types';

export const OPEN_COOKIE_SETTINGS = 'mr-open-cookie-settings';

export const CookieBanner: React.FC<{ onNavigate: (p: PageView) => void }> = ({ onNavigate }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    loadAnalytics();
    setOpen(getConsent() === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  if (!open) return null;

  const choose = (v: 'accepted' | 'declined') => {
    setConsent(v);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Privacy choices"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-md z-50 rounded-2xl bg-[#1A2E40] text-white p-5 shadow-2xl border border-[#D4AF37]/30"
    >
      <p className="text-sm leading-relaxed text-[#E2E8F0]">
        Optional analytics (Google Analytics and Microsoft Clarity, which includes anonymous session recordings) help show how visitors use this site. Nothing is collected unless you accept.{' '}
        <a
          href="/privacy"
          onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}
          className="underline underline-offset-4 text-[#D4AF37]"
        >
          Privacy Policy
        </a>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="flex-1 px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#1A2E40] text-sm font-bold hover:bg-[#c29f2f] transition-colors cursor-pointer"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose('declined')}
          className="flex-1 px-4 py-2.5 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  );
};
