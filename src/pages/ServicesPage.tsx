import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { PageView } from '../types';
import { pathFor } from '../router';
import type { PageProps } from '../routes';
import { BuiltForPractices } from '../components/BuiltForPractices';
import { RelatedArticles } from '../components/RelatedArticles';
import { ServicesSection } from '../components/ServicesSection';

/** Services hub (/services). */
export default function ServicesPage({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Focused Support for Growing Practices
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Med Spa Bookkeeping Services Built Around Your Practice
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            Bookkeeping for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related self-pay healthcare businesses.
          </p>
        </div>
      </div>

      {/* Hub: each service with its own page gets a direct link, so this page points to them instead of competing */}
      <section aria-labelledby="service-pages-heading" className="py-12 lg:py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="service-pages-heading" className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            Service pages
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              ['monthly-bookkeeping', 'Monthly Bookkeeping', 'Reconciliations, payouts, memberships and provider pay, closed every month.'],
              ['quickbooks-cleanup', 'QuickBooks Cleanup & Catch-Up', 'Months or years of books brought up to date at a fixed fee.'],
              ['quickbooks-setup', 'QuickBooks Setup', 'A QuickBooks Online file and chart of accounts built for a med spa.'],
              ['financial-reporting', 'Financial Reporting', 'Revenue by treatment, margins, provider pay and cash flow in plain language.'],
              ['iv-hydration', 'IV Hydration Bookkeeping', 'Supply costs, memberships and nurse pay for IV clinics and drip bars.'],
              ['medical-weight-loss', 'Medical Weight Loss Bookkeeping', 'Medication cost, program fees and provider pay for GLP-1 clinics.'],
            ] as Array<[PageView, string, string]>).map(([page, title, body]) => (
              <li key={page}>
                <a
                  href={pathFor(page)}
                  onClick={(e) => { e.preventDefault(); onNavigate(page); }}
                  className="group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] p-5 hover:border-[#D4AF37] transition-colors"
                >
                  <span className="text-lg font-serif font-bold text-[#1A2E40] group-hover:text-[#8A6A00]">{title}</span>
                  <span className="mt-1.5 text-base text-[#4A5568] leading-relaxed flex-1">{body}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1A2E40]">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesSection onBookCall={onBookCall} onNavigate={onNavigate} />

      <RelatedArticles
        heading="Guides to how the work is done"
        slugs={['medspa-membership-revenue-quickbooks', 'reconcile-boulevard-vagaro-quickbooks', 'track-neurotoxin-filler-costs-quickbooks', 'medspa-provider-commission-bookkeeping', 'medspa-chart-of-accounts-quickbooks']}
        onReadPost={onReadPost}
      />

      {/* Pointer to the separate pricing page */}
      <section className="py-12 bg-[#F4F6F8] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">Ready to see what it costs?</h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">Monthly plans start at $497 and cleanup projects start at $597. Full details are on the pricing page.</p>
          <a href="/pricing"
            onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A2E40] hover:bg-[#253E52] text-white! font-bold text-base transition-all shadow-md cursor-pointer"
          >
            <span>View Pricing</span>
          </a>
        </div>
      </section>
      <BuiltForPractices onBookCall={onBookCall} onNavigate={onNavigate} />
    </>
  );
}
