import React from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';
import { RelatedArticles } from './RelatedArticles';

/** One practice type (IV hydration, medical weight loss) with what its books need to get right. */
export interface PracticeTypeContent {
  eyebrow: string;
  h1: string;
  subtitle: string;
  intro: string[];
  needsHeading: string;
  needs: { title: string; body: string }[];
  accountsHeading: string;
  accountsIntro: string;
  accounts: { group: string; items: string[] }[];
  note: string;
  /** Article slugs to suggest, in order; only published ones are shown. */
  related: string[];
}

export const IV_HYDRATION: PracticeTypeContent = {
  eyebrow: 'IV Hydration & Wellness · Florida & Nationwide',
  h1: 'IV Hydration Bookkeeping',
  subtitle:
    'QuickBooks bookkeeping for IV hydration clinics, drip bars and mobile IV services, from a Certified Intuit ProAdvisor.',
  intro: [
    'IV hydration has its own financial pattern. Every drip uses fluids, vitamins and supplies, memberships are paid before visits happen, mobile visits cost more to deliver than in-clinic ones, and nurses may be employees or contractors. A general small-business setup in QuickBooks hides all of that inside one revenue line and one expense pile.',
    'Monique Reid Bookkeeping is based in Fort Lauderdale and works with IV hydration and wellness practices across Florida and nationwide, so you can see which drips, memberships and services actually make money.',
  ],
  needsHeading: 'What IV hydration books need to get right',
  needs: [
    {
      title: 'Supply cost by drip',
      body: 'IV fluids, vitamins and additives, catheters and tubing are cost of goods sold, not general expenses. Tracked against each drip type, they show which menu items carry their weight.',
    },
    {
      title: 'Mobile and in-clinic revenue',
      body: 'Mobile visits carry travel time and mileage that in-clinic drips do not. Separate income and cost lines show whether mobile service is worth what it takes.',
    },
    {
      title: 'Memberships and drip packages',
      body: 'Monthly memberships and prepaid bundles are recorded as a liability until the drip is given. How unused visits are handled follows your member agreement and the approach agreed with your CPA.',
    },
    {
      title: 'High-value infusions',
      body: 'When NAD+ or other premium infusions become a meaningful part of revenue, they get their own income and cost lines so their margin is visible on its own.',
    },
    {
      title: 'Nurse pay',
      body: 'Employed nurses run through payroll; contract nurses are paid as vendors with 1099 tracking switched on from day one. Classification itself is a decision for your CPA or attorney.',
    },
    {
      title: 'Booking and payment platforms',
      body: 'Square, Mindbody, Stripe and booking links pay out net of fees. Revenue is recorded at the gross amount, with fees as their own expense, and every payout is matched to the bank.',
    },
  ],
  accountsHeading: 'A starting chart of accounts',
  accountsIntro: 'Adjusted to your menu and your CPA\'s preferences, a typical IV hydration setup separates:',
  accounts: [
    { group: 'Income', items: ['In-clinic IV services', 'Mobile IV services', 'Memberships (as earned)', 'Injections and add-ons', 'Retail'] },
    { group: 'Cost of goods sold', items: ['IV fluids and supplies', 'Vitamins and additives', 'Medications given under protocol'] },
    { group: 'Expenses', items: ['Nurse payroll', 'Contract nursing', 'Medical director fees', 'Mobile service costs', 'Payment processing fees'] },
  ],
  // Only guides whose main subject answers a question this page raises (docs/niche-pain-points.md #4, #10, #2, #3 and #8).
  related: [
    'iv-hydration-cost-per-drip-nurse-pay-quickbooks', // supply cost per drip, mobile visit costs, nurse pay
    'medspa-membership-revenue-quickbooks', // memberships and drip packages paid in advance
    'medspa-tips-refunds-chargebacks-quickbooks', // Square and Stripe payouts net of fees and refunds (scheduled)
  ],
  note: 'Opening or in your first year? Setting this up before the first patient costs far less than correcting a year of mixed-up entries later.',
};

export const MEDICAL_WEIGHT_LOSS: PracticeTypeContent = {
  eyebrow: 'Medical Weight Loss & GLP-1 Programs · Florida & Nationwide',
  h1: 'Medical Weight Loss & GLP-1 Clinic Bookkeeping',
  subtitle:
    'QuickBooks bookkeeping for medical weight loss practices and GLP-1 programs, whether standalone or added to a med spa or wellness clinic.',
  intro: [
    'A medical weight loss program sells several different things at once: consultations, monthly program fees, medication, add-on injections and sometimes supplements. Each one earns differently and costs differently. When they all land in a single revenue line, you cannot tell what medication is costing you or whether the program fee covers the clinical time behind it.',
    'Monique Reid Bookkeeping is based in Fort Lauderdale and sets up and maintains QuickBooks for weight loss and GLP-1 clinics across Florida and nationwide.',
  ],
  needsHeading: 'What weight loss and GLP-1 books need to get right',
  needs: [
    {
      title: 'Separate what you sell',
      body: 'Consultation fees, monthly program fees, medication, add-on injections such as B12, and supplements each get their own income line, so the Profit & Loss shows where revenue really comes from.',
    },
    {
      title: 'Medication cost as cost of goods sold',
      body: 'Pharmacy invoices for semaglutide, tirzepatide or other medication, including shipping and cold-chain handling, are product cost. If you hold stock, they are recorded as inventory first and moved to cost when dispensed.',
    },
    {
      title: 'Monthly programs paid in advance',
      body: 'Program fees billed at the start of the month are recorded as a liability and recognized as the month\'s care is delivered, with the approach agreed with your CPA.',
    },
    {
      title: 'Subscription billing payouts',
      body: 'Stripe and EMR billing tools deposit net of fees and refunds. Revenue is recorded at the gross amount, fees as an expense, and each deposit is matched to the bank.',
    },
    {
      title: 'Medical director and provider pay',
      body: 'Medical director fees and provider pay are shown as their own lines, whether through payroll or as 1099 contractors, instead of being buried in miscellaneous expenses.',
    },
    {
      title: 'Medication margin, bundled or not',
      body: 'Whether medication is priced separately or bundled into one monthly price, the books are set up to show what share of revenue medication consumes, so you can adjust pricing when supplier costs change.',
    },
  ],
  accountsHeading: 'A starting chart of accounts',
  accountsIntro: 'Adjusted to your program and your CPA\'s preferences, a typical weight loss setup separates:',
  accounts: [
    { group: 'Income', items: ['Consultations', 'Program fees (as earned)', 'Medication', 'Injections and add-ons', 'Supplements and retail'] },
    { group: 'Cost of goods sold', items: ['GLP-1 medication', 'Other medications and injectables', 'Pharmacy shipping and cold-chain'] },
    { group: 'Expenses', items: ['Medical director fees', 'Provider payroll', 'Contract providers', 'Billing platform and processing fees'] },
  ],
  // Only guides whose main subject answers a question this page raises (docs/niche-pain-points.md #4, #10, #2, #3 and #8).
  related: [
    'glp1-medication-cost-medical-director-pay-quickbooks', // medication cost and margin, medical director and provider pay
    'medspa-membership-revenue-quickbooks', // monthly program fees paid in advance
    'medspa-tips-refunds-chargebacks-quickbooks', // Stripe and billing-platform payouts net of fees and refunds (scheduled)
  ],
  note: 'Medication sourcing and pricing in this field change often. Books that show medication margin clearly let you respond to those changes with numbers, not guesses.',
};

const linkClass = 'font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]';

interface PracticeTypePageProps {
  content: PracticeTypeContent;
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
}

export const PracticeTypePage: React.FC<PracticeTypePageProps> = ({ content, onNavigate, onBookCall, onReadPost }) => {
  const link = (page: PageView, label: string) => (
    <a href={pathFor(page)} onClick={(e) => { e.preventDefault(); onNavigate(page); }} className={linkClass}>
      {label}
    </a>
  );

  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">{content.eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">{content.h1}</h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">{content.subtitle}</p>
        </div>
      </div>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-base sm:text-lg text-[#4A5568] leading-relaxed">
          {content.intro.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center max-w-3xl mx-auto mb-10">
            {content.needsHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.needs.map((n) => (
              <div key={n.title} className="rounded-2xl bg-[#FDFCFA] border border-[#E2E8F0] p-6">
                <h3 className="text-xl font-serif font-bold text-[#1A2E40]">{n.title}</h3>
                <p className="mt-2 text-base text-[#4A5568] leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#57534E] text-center">
            General information only, not tax or legal advice. Your CPA confirms how these rules apply to your practice.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">{content.accountsHeading}</h2>
            <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">{content.accountsIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.accounts.map((a) => (
              <div key={a.group} className="rounded-2xl bg-white border border-[#E2E8F0] p-6">
                <h3 className="text-lg font-serif font-bold text-[#1A2E40]">{a.group}</h3>
                <ul className="mt-3 space-y-2">
                  {a.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-[#4A5568]">
                      <CheckCircle2 className="w-4 h-4 text-[#8A6A00] shrink-0 mt-1" aria-hidden="true" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-[#4A5568] leading-relaxed text-center max-w-3xl mx-auto">{content.note}</p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">How to get started</h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Books already behind? Start with a fixed-fee {link('quickbooks-cleanup', 'QuickBooks cleanup')}. Already current?
            See {link('monthly-bookkeeping', 'monthly bookkeeping')} and {link('pricing', 'pricing')}, from $497 a month.
            In Fort Lauderdale? Read about {link('fort-lauderdale', 'bookkeeping for Fort Lauderdale med spas')}, or {link('south-florida', 'across South Florida')}.
          </p>
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

      <RelatedArticles heading="Related guides" slugs={content.related} onReadPost={onReadPost} />
    </>
  );
};
