import React from 'react';
import type { PageProps } from '../routes';
import { ProfitCalculator } from '../components/ProfitCalculator';

/** Treatment profit calculator (/calculator). */
export default function CalculatorPage({ onBookCall }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Free Practice Tool
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Treatment Profit Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            Estimate what a single treatment contributes after product cost, provider pay and payment fees.
          </p>
        </div>
      </div>

      <ProfitCalculator onBookCall={onBookCall} />
    </>
  );
}
