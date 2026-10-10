import React from 'react';
import { Wrench, Clock, TrendingUp, HeartPulse, Layers, LineChart, ArrowRight } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';

interface ServicesSummaryProps {
  onNavigate: (page: PageView) => void;
}

const services = [
  { icon: Wrench, title: 'QuickBooks Cleanup & Catch-Up', body: 'Bring months or years of messy books up to date and CPA-ready.', price: 'From $597', page: 'quickbooks-cleanup' as PageView },
  { icon: Clock, title: 'Monthly Bookkeeping', body: 'Reconciliations, P&L and Balance Sheet, every month.', price: 'From $497/mo', page: 'monthly-bookkeeping' as PageView },
  { icon: TrendingUp, title: 'Financial Reporting & KPIs', body: 'Monthly reports on revenue trends, margins and cash flow, by plan.', price: 'From $797/mo', page: 'financial-reporting' as PageView },
  { icon: HeartPulse, title: 'Practice-Specific Bookkeeping', body: 'Memberships, packages, financing and provider pay handled correctly.', price: 'In monthly plans' },
  { icon: Layers, title: 'QuickBooks Setup & Chart of Accounts', body: 'A setup built for aesthetic and wellness practices from day one.', price: 'Project-based', page: 'quickbooks-setup' as PageView },
  { icon: LineChart, title: 'Historical Records & Reporting', body: 'Multi-year records organized for lenders, buyers or CPAs.', price: 'Project-based' },
];

export const ServicesSummary: React.FC<ServicesSummaryProps> = ({ onNavigate }) => (
  <section id="services-summary" className="py-14 lg:py-20 bg-white border-b border-[#E2E8F0]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Services</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
          Six services built around how your practice runs
        </h2>
        <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">
          Built for med spas, medical spas and wellness practices. You keep your booking and payment software. Everything ties out to QuickBooks.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="rounded-2xl bg-[#FDFCFA] border border-[#E2E8F0] p-6 flex flex-col">
              <Icon className="w-6 h-6 text-[#8A6A00]" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-serif font-bold text-[#1A2E40]">
                {'page' in s && s.page ? (
                  <a href={pathFor(s.page)} onClick={(e) => { e.preventDefault(); onNavigate(s.page!); }}
                    className="hover:text-[#8A6A00] underline decoration-[#D4AF37]/60 underline-offset-4">
                    {s.title}
                  </a>
                ) : s.title}
              </h3>
              <p className="mt-2 text-base text-[#4A5568] leading-relaxed flex-1">{s.body}</p>
              <p className="mt-3 text-sm font-bold text-[#8A6A00]">{s.price}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/services"
          onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
          className="inline-flex items-center gap-2 text-base font-bold text-[#1A2E40] hover:text-[#8A6A00] underline underline-offset-4"
        >
          See every deliverable and cleanup price
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
