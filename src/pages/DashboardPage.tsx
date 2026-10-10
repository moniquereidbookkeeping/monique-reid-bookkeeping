import React from 'react';
import { pathFor } from '../router';
import type { PageProps } from '../routes';
import { FinancialDashboard } from '../components/FinancialDashboard';

/** Example P&L dashboard (/dashboard). */
export default function DashboardPage({ onNavigate, onBookCall }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Interactive Example
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Example Med Spa P&amp;L Dashboard: See Where Revenue Goes
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            An interactive example of a med spa&apos;s monthly numbers. See how organized books separate treatment costs, provider pay and operating expenses, and show what is left. All figures are examples.{' '}
            <a href={pathFor('financial-reporting')} onClick={(e) => { e.preventDefault(); onNavigate('financial-reporting'); }} className="text-white! font-semibold underline! decoration-[#D4AF37]! underline-offset-4">
              How financial reporting works
            </a>
          </p>
        </div>
      </div>

      <FinancialDashboard
        onExploreServices={() => onNavigate('services')}
        onBookCall={onBookCall}
      />
    </>
  );
}
