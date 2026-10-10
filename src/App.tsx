/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, startTransition, useEffect, useState } from 'react';
import { PageView } from './types';
import { PAGE_META, SITE_ORIGIN, parsePath, pathFor } from './router';
import type { PageComponents } from './routes';
import { Navbar } from './components/Navbar';
import { CookieBanner } from './components/CookieBanner';
import { trackPageView, trackEvent } from './lib/analytics';
import { Footer } from './components/Footer';

/** `pages` draws each page: loaded up front for the prerender, on demand in the browser (see src/routes.ts). */
export default function App({ initialPath, pages }: { initialPath?: string; pages: PageComponents }) {
  const initial = parsePath(initialPath ?? window.location.pathname);
  const [currentPage, setCurrentPage] = useState<PageView>(initial.page);
  const [currentBlogSlug, setCurrentBlogSlug] = useState<string>(initial.slug);

  // Keep the URL and the visible page in sync (back/forward buttons, shared links).
  useEffect(() => {
    const onPop = () => {
      const { page, slug } = parsePath(window.location.pathname);
      startTransition(() => {
        setCurrentPage(page);
        setCurrentBlogSlug(slug);
      });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Per-page canonical URL, title and description (blog posts set their own title/description).
  useEffect(() => {
    const path = pathFor(currentPage, currentBlogSlug);
    const url = SITE_ORIGIN + path;
    const setTag = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
    setTag('meta[property="og:url"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m; }, 'content', url);
    setTag('meta[name="robots"]', () => Object.assign(document.createElement('meta'), { name: 'robots' }), 'content', currentPage === 'booked' || currentPage === 'notfound' ? 'noindex, nofollow' : 'index, follow');
    const meta = PAGE_META[currentPage];
    trackPageView();
    if (currentPage === 'booked') trackEvent('booking_confirmed');
    if (meta) {
      document.title = meta.title;
      setTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', meta.description);
    }
  }, [currentPage, currentBlogSlug]);

  const go = (page: PageView, slug = '') => {
    const path = pathFor(page, slug);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    // A transition keeps the current page on screen while the next page's code downloads, instead of a blank gap.
    startTransition(() => {
      setCurrentPage(page);
      setCurrentBlogSlug(slug);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calendly (free plan) cannot redirect after booking, but its embedded widget tells this page
  // when a booking is scheduled, so we show our own confirmation page.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const data = e.data as { event?: string } | null;
      if (data && data.event === 'calendly.event_scheduled') go('booked');
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (page: PageView) => go(page);

  const handleBookCall = () => go('contact');

  const readPost = (slug: string) => go('blog-post', slug);

  const Page = pages[currentPage];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-[#57534E]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1A2E40] focus:text-[#D4AF37] focus:font-bold focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-[#D4AF37]"
      >
        Skip to main content
      </a>

      {/* Sticky Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookCall={handleBookCall}
      />

      {/* Main Page Content Body */}
      <main id="main-content" className="flex-1">
        {/* Same boundary on the server and in the browser, so hydration sees the same tree. In the browser the
            page's code may still be loading: React keeps the prerendered HTML on screen until it arrives. */}
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Page slug={currentBlogSlug} onNavigate={handleNavigate} onBookCall={handleBookCall} onReadPost={readPost} />
        </Suspense>
      </main>

      <CookieBanner onNavigate={handleNavigate} />

      {/* Global Footer (Without obsolete logo modal) */}
      <Footer
        onNavigate={handleNavigate}
        onBookCall={handleBookCall}
      />
    </div>
  );
}
