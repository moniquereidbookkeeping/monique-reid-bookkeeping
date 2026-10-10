import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Search, FileCheck2, Calendar, Video, ClipboardList } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';
import { cleanupTiers } from '../data/cleanupPricing';
import { RelatedArticles } from './RelatedArticles';
import { PAYOUT_PLATFORMS } from '../constants/platforms';

interface QuickBooksCleanupPageProps {
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
}

const SIGNS = [
  'Your Profit & Loss shows a large "Uncategorized Income" or "Uncategorized Expense" line',
  'The bank balance in QuickBooks does not match the bank',
  'Accounts have not been reconciled in more than a couple of months',
  'Boulevard, Vagaro or Square deposits are posted as one lump sum, with no fees separated',
  'Cherry or CareCredit payouts are recorded as income at the amount that landed in the bank',
  'Memberships and prepaid packages are all booked as income the month they are paid',
  'Your CPA sends back a list of corrections every year, and the tax-prep bill reflects it',
];

const FIXES = [
  {
    title: 'POS and payment payouts',
    body: `${PAYOUT_PLATFORMS} often pay out net of processing fees and refunds, depending on your settings and processor. Card tips are usually included in the payout and owed to staff. Each payout is matched to its report, so revenue is recorded at the gross amount and processing fees are their own expense.`,
  },
  {
    title: 'Patient financing',
    body: "Depending on the program, Cherry, CareCredit and PatientFi may fund less than the treatment price and pay out on the lender's own schedule. The full sale and the financing fee are recorded separately, so revenue is not understated and the fee is visible.",
  },
  {
    title: 'Memberships, packages and gift cards',
    body: 'Prepaid amounts are tracked as a liability until the treatment is delivered, with the approach agreed with your CPA, so a strong sales month does not overstate income.',
  },
  {
    title: 'Product cost and retail',
    body: 'Neurotoxin, filler, skincare and other supplies are moved out of general expenses into cost of goods sold, so you can see real margin by service line.',
  },
  {
    title: 'Owner, personal and intercompany activity',
    body: 'Personal spending, owner draws and transfers with a management company are separated and documented for your CPA.',
  },
  {
    title: 'Chart of accounts',
    body: 'A generic list of accounts is rebuilt around how a med spa earns and spends, so your reports answer real questions.',
  },
];

const STEPS = [
  { icon: Video, title: 'Free 20-minute Zoom call', body: 'Talk through where the books stand and what you need them for: taxes, a loan, a sale or just clarity.' },
  { icon: Search, title: 'Diagnostic review', body: 'A look at your QuickBooks file, bank and card activity and payout reports to confirm how far behind the books are.' },
  { icon: ClipboardList, title: 'Fixed-fee proposal', body: 'A clear scope and a fixed price. No hourly billing, and no surprises once the scope is agreed.' },
  { icon: FileCheck2, title: 'Month-by-month cleanup', body: 'Accounts are reconciled and transactions corrected period by period, with a running list of questions only you can answer.' },
  { icon: CheckCircle2, title: 'Handover', body: 'Reconciled accounts, a corrected Profit & Loss and Balance Sheet, and notes for your CPA on anything that needs their decision.' },
];

const NEEDED = [
  'Access to your QuickBooks Online file',
  'Bank, credit card and loan statements for the months in scope',
  'Payout reports from your booking or payment software',
  'Patient financing statements (Cherry, CareCredit, PatientFi)',
  'Payroll summaries, and any notes from your previous bookkeeper or CPA',
];

const linkClass = 'font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]';

export const QuickBooksCleanupPage: React.FC<QuickBooksCleanupPageProps> = ({ onNavigate, onBookCall, onReadPost }) => {
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
            Fixed-Fee Cleanup &amp; Catch-Up Bookkeeping
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            QuickBooks Cleanup for Med Spas
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">
            Months behind, or books that never looked right? Get reconciled, CPA-ready QuickBooks for your med spa,
            aesthetic clinic or wellness practice, at a fixed price.
          </p>
        </div>
      </div>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-base sm:text-lg text-[#4A5568] leading-relaxed">
          <p>
            <strong className="text-[#1A2E40]">Catch-up bookkeeping</strong> is for books that have not been touched:
            bank feeds unreviewed and months of transactions waiting to be categorized.{' '}
            <strong className="text-[#1A2E40]">Cleanup</strong> is for books that were kept, but kept wrong: sales counted
            twice from the booking software and the bank feed, financing payouts booked as income, or everything sitting
            in "Miscellaneous". Most medical spa files need some of both.
          </p>
          <p>
            Either way, the goal is the same: books your CPA can file from without a list of corrections, and reports you
            can read to see how the practice is really doing. Monique Reid Bookkeeping is based in Fort Lauderdale and
            cleans up QuickBooks for practices across {link('south-florida', 'South Florida')}, the rest of Florida and
            nationwide.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            Signs your books need a cleanup
          </h2>
          <ul className="mt-8 space-y-3">
            {SIGNS.map((s) => (
              <li key={s} className="flex items-start gap-3 text-base sm:text-lg text-[#4A5568] leading-relaxed">
                <AlertTriangle className="w-5 h-5 text-[#8A6A00] shrink-0 mt-1" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
              What a med spa cleanup fixes
            </h2>
            <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">
              A generic cleanup gets the bank balance to match. A med spa cleanup also gets your revenue, product cost and
              provider pay right.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FIXES.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white border border-[#E2E8F0] p-6">
                <h3 className="text-xl font-serif font-bold text-[#1A2E40]">{f.title}</h3>
                <p className="mt-2 text-base text-[#4A5568] leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
              Cleanup pricing: a fixed fee, set by how far behind you are
            </h2>
            <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">
              Every cleanup starts with a complimentary review to confirm scope. The price is fixed once scope is agreed.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cleanupTiers.map((tier) => (
              <div key={tier.label} className={`rounded-xl border p-5 flex flex-col ${tier.badge ? 'border-[#D4AF37] bg-[#FAF8F5]' : 'border-[#E2E8F0] bg-[#FDFCFA]'}`}>
                <div className="min-h-[3.5rem]">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#4A5568]">{tier.label}</p>
                  {tier.badge && <span className="mt-1.5 inline-block text-sm font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#1A2E40] text-[#D4AF37]">{tier.badge}</span>}
                </div>
                <p className="mt-2 text-3xl font-serif font-bold text-[#1A2E40]">{tier.price}</p>
                <p className="mt-2 text-base text-[#4A5568] leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-base text-[#4A5568]">
            Once the backlog is cleared, {link('monthly-bookkeeping', 'monthly bookkeeping')} keeps the books current. Compare all{' '}
            {link('pricing', 'plans and pricing')}.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            How the cleanup works
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
            How long a cleanup takes depends on how many months are in scope, how many accounts there are, and how quickly
            statements and payout reports are available. The timeline is confirmed after the review.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">
            What you will need to share
          </h2>
          <ul className="space-y-3">
            {NEEDED.map((n) => (
              <li key={n} className="flex items-start gap-3 text-base sm:text-lg text-[#4A5568] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-1" aria-hidden="true" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Missing a few statements is normal. You will get a clear list of anything still needed after the review. More
            questions? Read the {link('faq', 'bookkeeping FAQ')}.
          </p>
          <div className="pt-2 text-center">
            <a href="/contact"
              onClick={(e) => { e.preventDefault(); onBookCall(); }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-base transition-all shadow-[0_4px_14px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Your Free 20-Min Clarity Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <RelatedArticles
        heading="Guides to the problems a cleanup fixes"
        slugs={['reconcile-boulevard-vagaro-quickbooks', 'medspa-membership-revenue-quickbooks', 'record-cherry-carecredit-financing-quickbooks', 'track-neurotoxin-filler-costs-quickbooks']}
        onReadPost={onReadPost}
      />
    </>
  );
};
