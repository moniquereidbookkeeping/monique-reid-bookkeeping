import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageView } from '../types';

export const NotFoundPage: React.FC<{ onNavigate: (p: PageView) => void }> = ({ onNavigate }) => (
  <section className="py-24 bg-[#FDFCFA]">
    <div className="max-w-xl mx-auto px-4 text-center space-y-5">
      <p className="text-xs font-bold uppercase tracking-widest text-[#8A6A00]">Page not found</p>
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40]">We could not find that page.</h1>
      <p className="text-base text-[#4A5568] leading-relaxed">
        The address may be mistyped or the page may have moved. Here are the most useful places to start.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={() => onNavigate('home')}
          className="px-6 py-3 rounded-xl bg-[#1A2E40] text-[#D4AF37] font-bold text-sm cursor-pointer inline-flex items-center gap-2"
        >
          Go to the home page <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl border-2 border-[#1A2E40] text-[#1A2E40] font-bold text-sm cursor-pointer"
        >
          Book a free call
        </button>
      </div>
    </div>
  </section>
);
