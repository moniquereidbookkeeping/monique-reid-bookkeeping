import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';

interface AboutDetailsProps {
  onNavigate: (page: PageView) => void;
}

/** How the work runs, from owner-confirmed facts in docs/niche-pain-points.md. About page only, so it adds what the home page does not repeat. */
const HOW_SHE_WORKS = [
  { title: 'Fully remote', body: 'Calls on Zoom, plus phone and email. There is no office to visit, so nothing takes you out of a clinic day beyond the call itself.' },
  { title: 'QuickBooks Online only', body: 'Every client file is in QuickBooks Online, so the setup, the monthly close and the reports all follow one consistent method.' },
  { title: 'Reports by the 15th', body: 'Your monthly Profit & Loss and Balance Sheet arrive by the 15th of the following month.' },
  { title: 'Replies within 1–2 business days', body: 'Questions by email get an answer within one to two business days.' },
  { title: 'Alongside your CPA', body: 'Monique keeps the books and hands your CPA an organized year-end package. Your CPA stays responsible for tax advice, planning and returns.' },
  { title: 'Financial records only', body: 'The work uses financial reports, statements and payout reports. Patient records and clinical notes are never needed.' },
];

const CREDENTIALS = [
  'Certified Intuit ProAdvisor',
  'QuickBooks ProAdvisor Gold Tier',
  'QuickBooks Workforce Certified',
  'QuickBooks Online Level 2 Certified',
  'Intuit Solutions Provider',
  'Bachelor of Business Administration',
];

const PAGES: [PageView, string][] = [
  ['monthly-bookkeeping', 'Monthly bookkeeping'],
  ['quickbooks-cleanup', 'QuickBooks cleanup'],
  ['iv-hydration', 'IV hydration bookkeeping'],
  ['medical-weight-loss', 'Medical weight loss bookkeeping'],
  ['fort-lauderdale', 'Fort Lauderdale practices'],
  ['south-florida', 'South Florida practices'],
];

export const AboutDetails: React.FC<AboutDetailsProps> = ({ onNavigate }) => (
  <section aria-labelledby="how-monique-works" className="py-14 lg:py-20 bg-[#FAF8F5] border-b border-[#E2E8F0]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-6">
        <h2 id="how-monique-works" className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40] leading-tight">
          How Monique works
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HOW_SHE_WORKS.map((item) => (
            <li key={item.title} className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
              <p className="flex items-center gap-2 text-base font-bold text-[#1A2E40]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                {item.title}
              </p>
              <p className="mt-1.5 text-base text-[#4A5568] leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#1A2E40]">Credentials and education</h2>
          <ul className="space-y-2">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-2 text-base text-[#4A5568]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#1A2E40]">Where to go next</h2>
          <ul className="space-y-2">
            {PAGES.map(([page, label]) => (
              <li key={page}>
                <a
                  href={pathFor(page)}
                  onClick={(e) => { e.preventDefault(); onNavigate(page); }}
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]"
                >
                  {label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
