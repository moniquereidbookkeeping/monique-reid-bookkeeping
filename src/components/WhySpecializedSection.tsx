import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

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
    title: 'Packages & Memberships That Require Careful Tracking',
    problem:
      `When a client pays for a package or membership upfront, that money isn't all earned yet—services still have to be delivered. Without consistent tracking, your monthly reports may not clearly show what's been collected, what's been earned, and what's still outstanding.`,
    help:
      'Based on your accounting method and, where appropriate, guidance from your CPA, we help structure your QuickBooks records so prepaid balances, earned revenue, and related transactions are tracked consistently as services are provided.',
  },
];

export const WhySpecializedSection: React.FC<WhySpecializedSectionProps> = ({ onBookCall }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Why It Matters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight text-wrap-balance">
            Your Practice Has Financial Complexity Most Bookkeepers Aren't Built For
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
            Between POS payouts, processing fees, provider tips, patient financing, memberships, prepaid packages, and treatment costs&#8212;simply categorizing transactions from a bank feed may not give you the financial clarity you need to understand how your practice is actually performing.
          </p>
        </div>

        {/* Three Problem Cards */}
        <div className="space-y-6">
          {problems.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm"
            >
              {/* Number tab */}
              <div className="lg:col-span-1 flex items-center justify-center bg-[#1A2E40] px-4 py-5 lg:py-0">
                <span className="font-serif font-bold text-2xl text-[#D4AF37]">{item.number}</span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3 flex items-center bg-[#1A2E40]/5 px-6 py-5 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                <h3 className="font-serif font-bold text-lg text-[#1A2E40] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Problem */}
              <div className="lg:col-span-4 bg-white px-6 py-5 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">The Problem</p>
                <p className="text-sm text-[#57534E] leading-relaxed">{item.problem}</p>
              </div>

              {/* How We Help */}
              <div className="lg:col-span-4 bg-white px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1A2E40]/50 mb-2">How We Help</p>
                <div className="flex gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#57534E] leading-relaxed">{item.help}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/20">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">The Result</p>
            <p className="text-xl font-serif font-bold text-white leading-snug">
              Books That Help You Understand Your Practice
            </p>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              The goal isn't simply to make QuickBooks reconcile. It's to give you organized financial records that show where revenue is coming from, where money is going, and how your practice is performing.
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#1A2E40] bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] transition-all duration-200 shadow-[0_4px_16px_rgba(212,175,55,0.3)] shrink-0 cursor-pointer"
          >
            <span>📅 Book Your 15-Min Financial Clarity Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
