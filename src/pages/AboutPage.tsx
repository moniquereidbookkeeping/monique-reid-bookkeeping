import React from 'react';
import { pathFor } from '../router';
import type { PageProps } from '../routes';
import { AboutDetails } from '../components/AboutDetails';
import { AboutSection } from '../components/AboutSection';

/** About Monique (/about). */
export default function AboutPage({ onNavigate, onBookCall }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Meet Monique Reid
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            Specialized bookkeeping for MedSpa, aesthetic clinic, and wellness practice founders, based in{' '}
            <a href={pathFor('fort-lauderdale')} onClick={(e) => { e.preventDefault(); onNavigate('fort-lauderdale'); }} className="text-white! font-semibold underline! decoration-[#D4AF37]! underline-offset-4">
              Fort Lauderdale
            </a>{' '}
            and serving practices nationwide.
          </p>
        </div>
      </div>

      <AboutSection onBookCall={onBookCall} />
      <AboutDetails onNavigate={onNavigate} />
    </>
  );
}
