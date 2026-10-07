import React from 'react';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

interface WhySpecializedSectionProps {
  onBookCall: () => void;
}

const problems = [
  {
    number: '01',
    title: "POS Payouts That Don't Match Gross Sales",
    problem:
      'Platforms like Boulevard, Vagaro, Square, and Mindbody deposit net amounts after processing fees, refunds, tips, and other adjustments. When only the deposited amount is recorded, your books may not clearly reflect gross sales—or the fees and liabilities tied to those transactions.',
    help:
      'Platform activity is reconciled against bank deposits, with processing fees, refunds, tips, and adjustments accounted for separately, giving you cleaner QuickBooks records and a clearer picture of practice revenue.',
  },
  {
    number: '02',
    title: 'Patient Financing Fees Hidden Inside Deposits',
    problem:
      `When patients use Cherry, CareCredit, or PatientFi, the amount deposited into your bank is lower than the original transaction because merchant fees are deducted first. If those amounts aren't separated, it's hard to understand the true economics of each sale.`,
    help:
      'Applicable financing costs are identified and categorized separately from the related revenue, so your reports reflect what patients paid and what it cost you to accept that payment.',
  },
  {
    number: '03',
    title: 'Prepaid Packages and Memberships Are Deferred Revenue',
    problem:
      `When a client pays upfront for a package or membership, that money is not fully earned until the service is delivered. Without consistent tracking, your reports can show cash you have collected as income you have not yet earned, which distorts your monthly picture. How it is treated for tax depends on your accounting method, so this is coordinated with your CPA.`,
    help:
      'Your QuickBooks records are structured so collected payments, earned revenue, and outstanding balances are tracked separately and consistently—so your monthly reports reflect what you\'ve actually earned, not just what came in.',
  },
  {
    number: '04',
    title: 'Treatment Costs and Inventory Buried in Generic Expenses',
    problem:
      `Neurotoxin, filler, skincare retail, IV supplies, and weight-loss medications are direct costs tied to specific services—not generic overhead. When they're lumped into broad expense categories, you lose visibility into what each service line actually costs to deliver, making it nearly impossible to know which treatments are worth your chair time.`,
    help:
      'Product and supply costs are separated from operating overhead, and treatment-related expenses are categorized so your service-line costs stay visible alongside your service-line revenue—making it easier to see where your margins actually are.',
  },
  {
    number: '05',
    title: "Books That Can't Support a Loan, a Sale or a New Location",
    problem:
      `Lenders, buyers and landlords ask for clean financial statements. When the books are behind or categorized loosely, owners scramble to produce numbers that someone else has to trust, often at the moment the opportunity is open.`,
    help:
      'Monthly reconciled books and readable financial statements are ready when the question comes. They give you a solid footing for the conversation, though lenders and buyers make their own decisions.',
  },
];

export const WhySpecializedSection: React.FC<WhySpecializedSectionProps> = ({ onBookCall }) => {
  return (
    <section className="py-14 lg:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Why it matters</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
            You Know What Came In. Do You Know What You Actually Made?
          </h2>
          <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">
            You are booking treatments, running memberships and selling packages, and the revenue looks real. But at the end of the month, it is hard to tell which services make money, where the cash went, or whether your reports show what the practice truly earned. Answering those questions takes books built around how your practice operates.
          </p>
        </div>

        {/* Four Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item) => (
            <div key={item.number} className={`${item.number === '05' ? 'md:col-span-2 ' : ''}rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] shadow-sm p-6 flex flex-col`}>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-10 h-10 rounded-full bg-[#1A2E40] text-[#D4AF37] font-serif font-bold text-base flex items-center justify-center">
                  {item.number}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1A2E40] leading-snug">{item.title}</h3>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00]">The problem</p>
                <p className="mt-1.5 text-base text-[#4A5568] leading-relaxed">{item.problem}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                <p className="text-sm font-bold uppercase tracking-widest text-[#15803D]">The solution</p>
                <div className="mt-1.5 flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-base text-[#4A5568] leading-relaxed">{item.help}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">The result</p>
            <p className="mt-2 text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              Finally Know Whether Your Practice Is Actually Profitable
            </p>
            <p className="mt-2 text-base text-white/80 leading-relaxed">
              When your books follow how your practice operates, not just what hit the bank account, your monthly reports show which services earn, where costs run high, and whether the revenue you see is money you have actually made.
            </p>
          </div>
          <a href="/contact"
            onClick={(e) => { e.preventDefault(); onBookCall(); }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-[#1A2E40]! bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] shrink-0 cursor-pointer group"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>Book Your Free 20-Min Clarity Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
