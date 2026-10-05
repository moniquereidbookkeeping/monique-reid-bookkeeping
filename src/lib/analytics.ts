/**
 * Privacy-first analytics. Nothing loads until the visitor clicks Accept in the cookie banner.
 * Google Analytics 4 measures traffic and goals; Microsoft Clarity (optional) shows anonymous
 * session replays with form fields masked.
 */
export const GA_ID = 'G-5YJE6T34BE';
/** Paste the Clarity Project ID here to switch Clarity on. Leave empty to keep it off. */
export const CLARITY_ID = 'yszjql4cbo';

const KEY = 'mr-cookie-consent';
export type Consent = 'accepted' | 'declined' | null;

type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void };

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(v: 'accepted' | 'declined') {
  try { localStorage.setItem(KEY, v); } catch { /* storage blocked: choice lasts for this page view only */ }
  if (v === 'accepted') loadAnalytics();
}

let loaded = false;

export function loadAnalytics() {
  if (loaded || getConsent() !== 'accepted') return;
  loaded = true;
  const w = window as W;

  if (GA_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () { (w.dataLayer as unknown[]).push(arguments); };
    w.gtag('js', new Date());
    // The site is a single-page app, so page views are sent by trackPageView below.
    w.gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true });
    trackPageView();
  }

  if (CLARITY_ID) {
    const c = document.createElement('script');
    c.async = true;
    c.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(c);
  }
}

export function trackPageView() {
  const w = window as W;
  if (!w.gtag || getConsent() !== 'accepted') return;
  w.gtag('event', 'page_view', {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Sends a named goal event. Never put names, emails or form answers in params. */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  const w = window as W;
  if (!w.gtag || getConsent() !== 'accepted') return;
  w.gtag('event', name, params);
}
