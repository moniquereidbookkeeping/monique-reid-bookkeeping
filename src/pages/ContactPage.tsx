import React from 'react';
import type { PageProps } from '../routes';
import { ContactSection } from '../components/ContactSection';

/** Book a Clarity Call (/contact). */
export default function ContactPage({ onNavigate }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            On Zoom · No Obligation
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Book Your Free 20-Minute Clarity Call
          </h1>
        </div>
      </div>

      <ContactSection onNavigate={onNavigate} />
    </>
  );
}
