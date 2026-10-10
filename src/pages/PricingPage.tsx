import React from 'react';
import type { PageProps } from '../routes';
import { PricingSection } from '../components/PricingSection';

/** Plans and pricing (/pricing). */
export default function PricingPage({ onNavigate, onBookCall }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Plans &amp; Pricing
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Med Spa Bookkeeping Plans &amp; Pricing
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            Fixed monthly plans and fixed-fee cleanup projects, with a free 20-minute Clarity Call to find the right fit.
          </p>
        </div>
      </div>

      <PricingSection onBookCall={onBookCall} onViewCleanup={() => onNavigate('quickbooks-cleanup')} />

      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">Questions about pricing?</h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">Read answers about what affects your fee, how cleanup works, and what happens on the free Clarity Call.</p>
          <a
            href="/faq"
            onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A2E40] hover:bg-[#253E52] text-white! font-bold text-base transition-all shadow-md cursor-pointer"
          >
            <span>Read the FAQ</span>
          </a>
        </div>
      </section>
    </>
  );
}
