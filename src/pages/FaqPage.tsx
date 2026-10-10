import React from 'react';
import type { PageProps } from '../routes';
import { FAQSection } from '../components/FAQSection';

/** Full FAQ (/faq). */
export default function FaqPage({ onBookCall }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Questions &amp; Answers
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Bookkeeping FAQ for Aesthetic &amp; Wellness Practices
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            Clear answers about cleanup, monthly bookkeeping, pricing, patient financing and memberships.
          </p>
        </div>
      </div>

      <FAQSection onBookCall={onBookCall} hideHeading />
    </>
  );
}
