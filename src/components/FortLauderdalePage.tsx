import React from 'react';
import { Calendar, ArrowRight, MapPin, Phone, Mail, Video, Search, ClipboardList, Wrench, FileCheck2, FileText } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../constants/booking';
import { RelatedArticles } from './RelatedArticles';

interface FortLauderdalePageProps {
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
}

/** Owner-confirmed service area (October 2026). The work is fully remote; there is no office to visit. */
export const FORT_LAUDERDALE_AREAS = ['Fort Lauderdale', 'Wilton Manors', 'Oakland Park', 'Plantation', 'Davie'];

const STEPS: Array<{ icon: typeof Video; title: string; body: string }> = [
  { icon: Video, title: 'A free 20-minute call on Zoom', body: 'Talk through where your books stand and what you need them for. No office visit, and no time out of a clinic day beyond the call itself.' },
  { icon: Search, title: 'A first review', body: 'With access to your QuickBooks Online file and recent statements, the books are reviewed to see how current and how accurate they are.' },
  { icon: ClipboardList, title: 'A defined scope and proposal', body: 'You receive a clear scope and price before any work begins.' },
  { icon: Wrench, title: 'Catch up or set up, if needed', body: 'Books that are behind get a fixed-fee cleanup first. A new practice gets QuickBooks set up for a med spa from the start.' },
  { icon: FileCheck2, title: 'Monthly close', body: 'Accounts reconciled, payouts matched and transactions categorized every month, with your reports delivered by the 15th of the following month.' },
  { icon: FileText, title: 'Year-end handover', body: 'An organized year-end package for your CPA, who stays responsible for your tax work.' },
];

const SHARE = [
  'Access to your QuickBooks Online file',
  'Bank and credit card statements',
  'Payout and sales reports from your booking and payment software',
  'Payroll summaries and any loan documents',
];

const linkClass = 'font-semibold text-[#1A2E40]! underline! decoration-[#D4AF37]! underline-offset-4 hover:text-[#8A6A00]!';

export const FortLauderdalePage: React.FC<FortLauderdalePageProps> = ({ onNavigate, onBookCall, onReadPost }) => {
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
            Fort Lauderdale · Fully Remote
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Med Spa Bookkeeper for Fort Lauderdale Practices
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            QuickBooks bookkeeping for med spas and aesthetic clinics in Fort Lauderdale and nearby Broward cities, done
            entirely over Zoom, QuickBooks Online, phone and email. There is no office to visit.
          </p>
        </div>
      </div>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-base sm:text-lg text-[#4A5568] leading-relaxed">
          <p>
            Monique Reid Bookkeeping is based in Fort Lauderdale and works with the city&apos;s med spas, medical spas and
            aesthetic clinics as a fully remote bookkeeper. There is no storefront and no in-person meeting built into the
            service. The first conversation, any cleanup or setup, and every month of bookkeeping happen online.
          </p>
          <p>
            Remote works for a med spa because the books already live online. Your booking software, card processor and
            bank all report electronically, and QuickBooks Online is where they are brought together and reconciled. You
            keep the software you already use. What you gain is a bookkeeper who works only with med spas and other
            self-pay healthcare practices, reachable by Zoom, phone or email.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            How working together runs, start to finish
          </h2>
          <ol className="mt-8 space-y-5">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A2E40] text-[#D4AF37] flex items-center justify-center shrink-0" aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1A2E40]">{i + 1}. {s.title}</h3>
                    <p className="mt-1 text-base text-[#4A5568] leading-relaxed">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 text-base text-[#4A5568] leading-relaxed">
            Details on each step: {link('quickbooks-cleanup', 'QuickBooks cleanup')} (from $597),{' '}
            {link('quickbooks-setup', 'QuickBooks setup')}, {link('monthly-bookkeeping', 'monthly bookkeeping')} (from
            $497/mo) and {link('financial-reporting', 'financial reporting')}. Compare everything on the{' '}
            {link('pricing', 'pricing page')}.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            What you share instead of a box of paperwork
          </h2>
          <ul className="space-y-3">
            {SHARE.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-[#4A5568] leading-relaxed">
                <FileCheck2 className="w-5 h-5 text-[#15803D] shrink-0 mt-1" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-[#4A5568] leading-relaxed">
            After the first review you get one clear list of anything else needed. During the month, questions that only
            you can answer, such as an unfamiliar charge or a transfer, come to you as a single short list rather than a
            string of interruptions. The work focuses on financial records, not clinical notes or patient medical information.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            Service area
          </h2>
          <div className="mt-8 rounded-2xl bg-[#FDFCFA] border border-[#E2E8F0] p-6 sm:p-8">
            <p className="flex items-center gap-2 text-lg font-serif font-bold text-[#1A2E40]">
              <MapPin className="w-5 h-5 text-[#8A6A00]" aria-hidden="true" />
              Fort Lauderdale and nearby
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {FORT_LAUDERDALE_AREAS.map((c) => (
                <li key={c} className="px-2.5 py-1 rounded-md bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-sm font-medium text-[#1A2E40]">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base text-[#4A5568] leading-relaxed">
              This is a service area, not an office location: the work is remote, so med spas anywhere in greater
              Broward County are a good fit, as are practices across Florida and nationwide. Elsewhere in the region?
              See {link('south-florida', 'med spa bookkeeping across South Florida')}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#1A2E40] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Talk it through
          </h2>
          <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto">
            Book the free 20-minute Zoom call, or call or email first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="inline-flex items-center gap-2 text-white! font-semibold underline! decoration-[#D4AF37]! underline-offset-4 hover:text-[#D4AF37]!">
              <Phone className="w-4 h-4" aria-hidden="true" />
              {CONTACT_PHONE}
            </a>
            <span className="hidden sm:inline text-white/30" aria-hidden="true">·</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-white! font-semibold underline! decoration-[#D4AF37]! underline-offset-4 hover:text-[#D4AF37]!">
              <Mail className="w-4 h-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
          <a href="/contact"
            onClick={(e) => { e.preventDefault(); onBookCall(); }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-base transition-all shadow-[0_4px_14px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Book Your Free 20-Min Clarity Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <RelatedArticles
        heading="Guides for Fort Lauderdale practice owners"
        slugs={['reconcile-boulevard-vagaro-quickbooks', 'medspa-membership-revenue-quickbooks', 'record-cherry-carecredit-affirm-financing-quickbooks', 'track-neurotoxin-filler-costs-quickbooks']}
        onReadPost={onReadPost}
      />
    </>
  );
};
