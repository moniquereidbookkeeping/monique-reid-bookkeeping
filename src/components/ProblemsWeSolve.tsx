import React from 'react';
import { AlertCircle, CreditCard, DollarSign, FileWarning, Layers, Sparkles, Users } from 'lucide-react';

interface ProblemsWeSolveProps {
  onBookCall: () => void;
}

export const ProblemsWeSolve: React.FC<ProblemsWeSolveProps> = () => {
  const problems = [
    {
      icon: CreditCard,
      title: 'Disorganized POS & Merchant Deposits',
      description:
        'Booking and POS platforms batch-deposit net amounts that mask merchant processing fees and patient financing withholdings (Cherry, CareCredit), making bank feeds difficult to reconcile.',
    },
    {
      icon: Layers,
      title: 'Toxin & Supply COGS Mixed into Overhead',
      description:
        'Injectables, peptides, IV supplies, and retail skincare purchases frequently get lumped into general clinic expenses rather than properly categorized as Cost of Goods Sold.',
    },
    {
      icon: Users,
      title: 'Complex Provider Pay, Tips & Commissions',
      description:
        'Tracking injector commission percentages, 1099 contractor payouts, gratuities, and medical director stipends without messy clearing accounts or payroll confusion.',
    },
    {
      icon: DollarSign,
      title: 'Unearned Revenue from Packages & Memberships',
      description:
        'Large upfront package sales, membership dues, and gift certificates need organized tracking so practice owners understand both cash flow and ongoing service obligations.',
    },
    {
      icon: FileWarning,
      title: 'QuickBooks Behind or Cluttered with Duplicates',
      description:
        'Automated sync tools often flood QuickBooks Online with thousands of uncategorized line items, duplicates, and unmatched transfers that generic bookkeepers struggle to untangle.',
    },
    {
      icon: Sparkles,
      title: 'No Clear View of Treatment Margins',
      description:
        'Practice owners often see top-line revenue grow without knowing which specific modalities—injectables, lasers, weight-loss protocols, or skincare—are truly driving operating profit.',
    },
  ];

  return (
    <section
      id="problems-we-solve-section"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-2.5">
            <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Common Financial Headaches We Resolve</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
            Problems We Solve for Practice Owners
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
            Aesthetic and wellness practices have unique clinical and operational workflows. Generic bookkeeping methods often fail to capture the nuances of clinical inventory, multi-tier provider compensation, and specialized software integrations.
          </p>
        </div>

        {/* Problems Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] hover:border-[#D4AF37]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] flex items-center justify-center mb-4 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A2E40] mb-2 leading-snug">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {prob.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
