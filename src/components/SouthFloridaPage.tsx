import React from 'react';
import { Calendar, ArrowRight, MapPin, Video, FileCheck2, Receipt, Users, Building2 } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';
import { RelatedArticles } from './RelatedArticles';
import { SOUTH_FLORIDA_AREAS } from '../constants/serviceArea';

interface SouthFloridaPageProps {
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
}

const FLORIDA_ITEMS = [
  {
    icon: Receipt,
    title: 'Sales tax on retail products',
    body: 'Skincare and other retail products are generally subject to Florida sales tax, and a county surtax may also apply, depending on where the sale happens. Your CPA confirms the rate. Sales tax collected through your booking software is kept separate from revenue and reconciled, so your filing figures are easy to pull.',
  },
  {
    icon: Users,
    title: 'Payroll and reemployment tax',
    body: 'Employees and 1099 providers are recorded separately, so Florida reemployment tax, payroll costs and contractor payments are clear in QuickBooks and ready for your payroll provider and CPA.',
  },
  {
    icon: FileCheck2,
    title: 'Year-end and annual report readiness',
    body: 'Florida has no state personal income tax, but your federal return, any Florida corporate income tax that applies to your entity, and your annual Sunbiz report all go more smoothly with reconciled books and a clean year-end package for your CPA.',
  },
  {
    icon: Building2,
    title: 'Multi-location and management companies',
    body: 'Practices with a second location, or a management company alongside the clinical entity, get books that keep each one separate while still showing the full picture.',
  },
];

const linkClass = 'font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]';

export const SouthFloridaPage: React.FC<SouthFloridaPageProps> = ({ onNavigate, onBookCall, onReadPost }) => {
  const link = (page: PageView, label: string) => (
    <a href={pathFor(page)} onClick={(e) => { e.preventDefault(); onNavigate(page); }} className={linkClass}>
      {label}
    </a>
  );

  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Broward · Miami-Dade · Palm Beach
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Med Spa Bookkeeping in South Florida
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            A Fort Lauderdale-based QuickBooks bookkeeper and Certified Intuit ProAdvisor for med spas, medical spas, aesthetic clinics, IV hydration and wellness practices.
          </p>
        </div>
      </div>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-base sm:text-lg text-[#4A5568] leading-relaxed">
          <p>
            Monique Reid Bookkeeping is based in {link('fort-lauderdale', 'Fort Lauderdale')} and works with med spas, medical spas and other aesthetic and wellness practices across
            Broward, Miami-Dade and Palm Beach counties, as well as practices nationwide. If your Boulevard, Vagaro or
            Square deposits never match your gross sales, your memberships and packages are booked as income the day
            they are paid, or your CPA keeps asking for the same corrections, the books can be fixed and then kept
            clean every month.
          </p>
          <p>
            The work is done in QuickBooks and on Zoom, so there's no office visit and no time out of a clinic day
            beyond the call itself. You get reconciled accounts, a Profit &amp; Loss that separates injectables, treatments, retail and
            memberships, and reports you can use. See the full list of {link('services', 'bookkeeping services')}, how a {link('quickbooks-cleanup', 'QuickBooks cleanup')} works,
            or compare {link('pricing', 'monthly plans and cleanup pricing')}.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
              Florida details your books should handle
            </h2>
            <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">
              Tax rules and filings are decided with your CPA. Your books just need to make them easy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FLORIDA_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-[#FDFCFA] border border-[#E2E8F0] p-6">
                  <Icon className="w-6 h-6 text-[#8A6A00]" aria-hidden="true" />
                  <h3 className="mt-3 text-xl font-serif font-bold text-[#1A2E40]">{item.title}</h3>
                  <p className="mt-2 text-base text-[#4A5568] leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-[#57534E] text-center">
            General information only, not tax advice. Your CPA confirms how these rules apply to your practice.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
              Areas served in South Florida
            </h2>
            <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">
              Med spas elsewhere in Florida, from Tampa and Orlando to Jacksonville, and practices nationwide are welcome too. Everything works the same way, wherever you are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SOUTH_FLORIDA_AREAS.map((a) => (
              <div key={a.county} className="rounded-2xl bg-white border border-[#E2E8F0] p-6">
                <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-[#1A2E40]">
                  <MapPin className="w-5 h-5 text-[#8A6A00]" aria-hidden="true" />
                  {a.county}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {a.cities.map((c) => (
                    <li key={c} className="px-2.5 py-1 rounded-md bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-sm font-medium text-[#1A2E40]">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            How it works
          </h2>
          <ol className="space-y-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
            <li className="flex gap-3">
              <Video className="w-6 h-6 text-[#8A6A00] shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong className="text-[#1A2E40]">A free 20-minute Zoom call</strong> to look at where your books stand today.</span>
            </li>
            <li className="flex gap-3">
              <FileCheck2 className="w-6 h-6 text-[#8A6A00] shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong className="text-[#1A2E40]">A clear plan and a fixed price</strong>: monthly plans from $497 and cleanup projects from $597.</span>
            </li>
            <li className="flex gap-3">
              <Calendar className="w-6 h-6 text-[#8A6A00] shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong className="text-[#1A2E40]">Clean books every month</strong>, reconciled to your booking, payment and financing software.</span>
            </li>
          </ol>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Have questions first? Read the {link('faq', 'bookkeeping FAQ')} or learn more {link('about', 'about Monique')}.
          </p>
          <div className="pt-2 text-center">
            <a href="/contact"
              onClick={(e) => { e.preventDefault(); onBookCall(); }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-base transition-all shadow-[0_4px_14px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60 cursor-pointer"
            >
              Book Your Free 20-Min Clarity Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <RelatedArticles
        heading="Guides for South Florida practice owners"
        slugs={['reconcile-boulevard-vagaro-quickbooks', 'medspa-membership-revenue-quickbooks', 'record-cherry-carecredit-financing-quickbooks', 'track-neurotoxin-filler-costs-quickbooks']}
        onReadPost={onReadPost}
      />
    </>
  );
};
