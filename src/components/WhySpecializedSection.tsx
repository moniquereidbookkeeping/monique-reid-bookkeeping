import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, Calendar } from 'lucide-react';

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
      'We reconcile platform activity against bank deposits and separately account for processing fees, refunds, tips, and adjustments—giving you cleaner QuickBooks records and a clearer picture of practice revenue.',
  },
  {
    number: '02',
    title: 'Patient Financing Fees Hidden Inside Deposits',
    problem:
      `When patients use Cherry, CareCredit, or PatientFi, the amount deposited into your bank is lower than the original transaction because merchant fees are deducted first. If those amounts aren't separated, it's hard to understand the true economics of each sale.`,
    help:
      'We identify and categorize applicable financing costs separately from the related revenue—so your reports reflect what patients paid and what it cost you to accept that payment.',
  },
  {
    number: '03',
    title: 'Prepaid Packages and Memberships Are a Liability Until Services Are Delivered',
    problem:
      `When a client pays upfront for a package or membership, that money isn't fully earned yet—it's deferred revenue until the service is actually provided. Without consistent tracking, your reports can show cash you've collected as income you haven't earned, which distorts your monthly picture and can create problems at tax time.`,
    help:
      'We help structure your QuickBooks records so collected payments, earned revenue, and outstanding balances are tracked separately and consistently—so your monthly reports reflect what you\'ve actually earned, not just what came in.',
  },
  {
    number: '04',
    title: 'Treatment Costs and Inventory Buried in Generic Expenses',
    problem:
      `Neurotoxin, filler, skincare retail, IV supplies, and weight-loss medications are direct costs tied to specific services—not generic overhead. When they're lumped into broad expense categories, you lose visibility into what each service line actually costs to deliver, making it nearly impossible to know which treatments are worth your chair time.`,
    help:
      'We separate product and supply costs from operating overhead and categorize treatment-related expenses so your service-line costs stay visible alongside your service-line revenue—making it easier to see where your margins actually are.',
  },
];

export const WhySpecializedSection: React.FC<WhySpecializedSectionProps> = ({ onBookCall }) => {
  return (
    <section className="py-10 lg:py-14 bg-[#F8F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Why It Matters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-wrap-balance">
            You Know What Came In. Do You Know What You Actually Made?
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed max-w-2xl">
            You're booking treatments, running memberships, and selling packages — and the revenue looks real. But at the end of the month, you're still not sure which services are actually making money, where the cash is going, or whether what's on paper reflects what your practice truly earned. Getting those answers requires books built around how your practice actually operates.
          </p>
        </div>

        {/* Four Problem Cards */}
        <div className="space-y-6">
          {problems.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm"
            >
              {/* Number tab */}
              <div className="lg:col-span-1 flex items-center justify-center bg-[#1A2E40] px-3 py-4 lg:py-0">
                <span className="font-serif font-bold text-xl text-[#D4AF37]">{item.number}</span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3 flex items-center bg-[#1A2E40]/5 px-5 py-4 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                <h3 className="font-serif font-bold text-base text-[#1A2E40] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Problem */}
              <div className="lg:col-span-4 bg-white px-5 py-4 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-1.5">The Problem</p>
                <p className="text-sm text-[#57534E] leading-relaxed">{item.problem}</p>
              </div>

              {/* How We Help */}
              <div className="lg:col-span-4 bg-white px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 mb-1.5">How We Help</p>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-[#57534E] leading-relaxed">{item.help}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/20">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">The Result</p>
            <p className="text-lg font-serif font-bold text-white leading-snug">
              Finally Know Whether Your Practice Is Actually Profitable
            </p>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              When your books are structured around how your practice actually operates—not just what hit the bank account—your monthly reports tell you which services are earning, where costs are running high, and whether the revenue you're seeing is money you've actually made.
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-[#1A2E40] bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] transition-all duration-200 shadow-[0_4px_16px_rgba(212,175,55,0.3)] shrink-0 cursor-pointer group"
          >
            <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200">
              <Calendar className="w-3.5 h-3.5" />
            </span>
            <span>Book Your 20-Min Financial Clarity Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
