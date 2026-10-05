import React from 'react';
import { Wrench, Clock, TrendingUp, HeartPulse, Layers, LineChart, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface ServicesSummaryProps {
  onNavigate: (page: PageView) => void;
}

const services = [
  { icon: Wrench, title: 'QuickBooks Cleanup & Catch-Up', body: 'Bring months or years of messy books up to date and CPA-ready.', price: 'From $597' },
  { icon: Clock, title: 'Monthly Bookkeeping', body: 'Reconciliations, P&L and Balance Sheet, every month.', price: 'From $497/mo' },
  { icon: TrendingUp, title: 'Financial Reporting & KPIs', body: 'Plain-English reports on margins, revenue mix and cash flow.', price: 'From $797/mo' },
  { icon: HeartPulse, title: 'Practice-Specific Bookkeeping', body: 'Memberships, packages, financing and provider pay handled correctly.', price: 'From $1,197/mo' },
  { icon: Layers, title: 'QuickBooks Setup & Chart of Accounts', body: 'A setup built for aesthetic and wellness practices from day one.', price: 'Project-based' },
  { icon: LineChart, title: 'Historical Records & Reporting', body: 'Multi-year records organized for lenders, buyers or CPAs.', price: 'Project-based' },
];

export const ServicesSummary: React.FC<ServicesSummaryProps> = ({ onNavigate }) => (
  <section id="services-summary" className="py-14 lg:py-20 bg-[#FDFCFA] border-b border-[#E2E8F0]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#8A6A00]">What I do</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
          Six services built around how your practice runs
        </h2>
        <p className="mt-3 text-base text-[#4A5568] leading-relaxed">
          You keep your booking and payment software. I make sure it ties out to QuickBooks.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="rounded-2xl bg-white border border-[#E2E8F0] p-5 flex flex-col">
              <Icon className="w-6 h-6 text-[#8A6A00]" aria-hidden="true" />
              <h3 className="mt-3 text-base font-serif font-bold text-[#1A2E40]">{s.title}</h3>
              <p className="mt-1.5 text-sm text-[#4A5568] leading-relaxed flex-1">{s.body}</p>
              <p className="mt-3 text-xs font-bold text-[#8A6A00]">{s.price}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/services"
          onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#1A2E40] hover:text-[#8A6A00] underline underline-offset-4"
        >
          See every deliverable and cleanup price
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
