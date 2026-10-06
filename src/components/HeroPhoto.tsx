// HeroPhoto.tsx — Added: 2026-10-04
// "Meet Monique" section with professional headshot

import React from 'react';

const HeroPhoto: React.FC = () => {
  return (
    <section className="bg-[#1A2E40] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Photo — black bg preserved, subtle gold frame glow */}
          <div className="flex-shrink-0 relative">
            {/* Outer gold ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#D4AF37]/60 via-[#D4AF37]/20 to-[#D4AF37]/60 blur-sm" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[280px] sm:w-[320px] lg:w-[360px]">
              <img
                src="/monique-headshot.jpg"
                alt="Monique Reid, Founder & Lead Bookkeeper"
                className="w-full h-auto object-cover block"
                style={{ backgroundColor: '#000' }}
              />
            </div>
            {/* Decorative gold dot */}
            <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#D4AF37]" />
            </div>
          </div>

          {/* Bio copy */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Eyebrow */}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              Meet Your Bookkeeper
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight mb-5">
              Monique Reid
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30 mb-6 mx-auto lg:mx-0 rounded-full" />

            <p className="text-[#CBD5E1] text-base leading-relaxed mb-4">
              Founder &amp; Lead Bookkeeper at Monique Reid Bookkeeping, specializing in
              MedSpa and aesthetic practice finances. With a deep background in healthcare
              revenue cycles, Monique brings clarity and confidence to practices navigating
              complex billing, multi-location tracking, and growth.
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
              Based in South Florida, she serves clients nationwide — delivering clean books,
              actionable reports, and peace of mind so you can focus on your patients.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C765] text-[#1A2E40] text-sm font-bold px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-[#D4AF37]/20"
            >
              Book a Discovery Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPhoto;
