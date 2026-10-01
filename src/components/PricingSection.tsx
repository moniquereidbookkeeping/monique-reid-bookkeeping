import React from 'react';
import { CheckCircle2, Sparkles, Calendar, ArrowRight, Clock, Wrench, Layers, Info, TrendingUp } from 'lucide-react';

interface PricingSectionProps {
  onBookCall: () => void;
}

const monthlyPlans = [
  {
    id: 'entry',
    name: 'Entry',
    tagline: 'Solo providers and single-location practices with a straightforward payment setup.',
    startingAt: '$497',
    period: '/month',
    label: 'Starting at',
    icon: Clock,
    featured: false,
    badge: null,
    features: [
      'Bank & credit-card reconciliations',
      'POS & merchant payout reconciliation',
      'Transaction categorization',
      'Monthly Profit & Loss Statement',
      'Monthly Balance Sheet',
      'Year-end CPA reporting package',
    ],
    complexityNote: 'Best for solo providers or boutique practices with one bank account and Square or a single POS.',
    cta: 'Book Your 15-Min Financial Clarity Call',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Multi-provider practices with memberships, patient financing, and multiple payment systems.',
    startingAt: '$797',
    period: '/month',
    label: 'Starting at',
    icon: Sparkles,
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Entry',
      'Multiple POS & payment systems',
      'Memberships & prepaid packages',
      'Patient financing reconciliation',
      'Provider compensation reconciliation',
      'Month-over-month reporting',
    ],
    complexityNote: 'Best for MedSpas and aesthetic clinics with 2–4 providers, Boulevard, Cherry, or CareCredit.',
    cta: 'Book Your 15-Min Financial Clarity Call',
  },
  {
    id: 'full-spectrum',
    name: 'Full-Spectrum',
    tagline: 'Multi-location or high-volume practices with inventory, COGS tracking, and complex workflows.',
    startingAt: '$1,197',
    period: '/month',
    label: 'Starting at',
    icon: TrendingUp,
    featured: false,
    badge: null,
    features: [
      'Everything in Growth',
      'Multiple locations',
      'Inventory & treatment-cost tracking',
      'High transaction volume',
      'Revenue by service category',
      'Plain-language financial commentary',
    ],
    complexityNote: 'Best for established MedSpas doing $75K+/month with complex multi-system workflows.',
    cta: 'Book Your 15-Min Financial Clarity Call',
  },
];

const projectPlans = [
  {
    id: 'cleanup',
    name: 'QuickBooks Cleanup & Catch-Up',
    description: 'Your cleanup quote is based on months requiring cleanup, transaction volume, number of accounts, reconciliation status, POS platforms, and condition of the existing file.',
    pricing: 'Custom Project Pricing',
    icon: Wrench,
    cta: 'Request a Cleanup Assessment',
  },
  {
    id: 'setup',
    name: 'QuickBooks Setup & Restructuring',
    description: 'For new practices or established businesses that need a better financial structure from the beginning. Scoped based on practice complexity and number of systems.',
    pricing: 'One-Time Project Pricing',
    icon: Layers,
    cta: 'Request a Setup Consultation',
  },
  {
    id: 'reporting',
    name: 'Financial Reporting & Practice Insights',
    description: 'Included with qualifying monthly bookkeeping engagements. Also available as a standalone add-on — month-over-month comparisons, revenue visibility by service category, plain-language financial commentary, and year-end CPA reporting package.',
    pricing: 'Included or Add-On',
    icon: TrendingUp,
    cta: 'Ask About Reporting Options',
  },
];

const trustItems = [
  'No long-term contracts',
  'Cancel with 30 days notice',
  'Intuit Certified QBO ProAdvisor',
  'HIPAA-aware workflows',
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookCall }) => {
  return (
    <section id="pricing-section" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparent, Complexity-Based Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Your Fee Reflects Your Practice's Complexity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            A solo aesthetic provider with one bank account and Square doesn't have the same bookkeeping requirements as a multi-provider MedSpa using Boulevard, Cherry, memberships, inventory, and provider compensation. That's why our pricing is based on the financial complexity of your practice.
          </p>
        </div>

        {/* Monthly Plans — 3 tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto mb-10">
          {monthlyPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#1A2E40] border-2 border-[#D4AF37]/50 shadow-xl text-white'
                    : 'bg-white border-2 border-[#E2E8F0] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] text-[#1A2E40] text-xs font-bold shadow-md border border-[#FFF5DE]/60 whitespace-nowrap">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-5 pt-1">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                      plan.featured ? 'bg-white/10' : 'bg-[#FAF8F5] border border-[#E2E8F0]'
                    }`}>
                      <Icon className={`w-4.5 h-4.5 ${plan.featured ? 'text-[#D4AF37]' : 'text-[#1A2E40]'}`} />
                    </div>
                    <h3 className={`text-lg font-serif font-bold mb-1 ${plan.featured ? 'text-white' : 'text-[#1A2E40]'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${plan.featured ? 'text-[#E2E8F0]' : 'text-[#64748B]'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`mb-5 pb-5 border-b ${plan.featured ? 'border-white/15' : 'border-[#E2E8F0]'}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${plan.featured ? 'text-[#D4AF37]/80' : 'text-[#94A3B8]'}`}>
                      {plan.label}
                    </p>
                    <div className="flex items-end gap-1.5">
                      <span className={`text-3xl font-bold font-serif ${plan.featured ? 'text-white' : 'text-[#1A2E40]'}`}>
                        {plan.startingAt}
                      </span>
                      <span className={`text-xs mb-1 ${plan.featured ? 'text-[#CBD5E1]' : 'text-[#94A3B8]'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-2 leading-relaxed ${plan.featured ? 'text-[#CBD5E1]' : 'text-[#94A3B8]'}`}>
                      {plan.complexityNote}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-5">
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-3 ${plan.featured ? 'text-[#D4AF37]/80' : 'text-[#1A2E40]/60'}`}>
                      Includes
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D4AF37]" />
                          <span className={plan.featured ? 'text-[#E2E8F0]' : 'text-[#57534E]'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={onBookCall}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-all active:scale-[0.98] cursor-pointer group ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] shadow-[0_4px_16px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60'
                        : 'bg-[#1A2E40] hover:bg-[#1A2E40]/90 text-white shadow-sm'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Pricing */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E2E8F0]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#57534E]/70 px-3">One-Time Projects &amp; Add-Ons</p>
            <div className="h-px flex-1 bg-[#E2E8F0]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projectPlans.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#D4AF37]/50 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-serif font-bold text-[#1A2E40] leading-snug">{project.name}</h4>
                      <span className="text-[11px] font-semibold text-[#D4AF37] whitespace-nowrap shrink-0 mt-0.5">{project.pricing}</span>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed mb-4">{project.description}</p>
                    <button
                      onClick={onBookCall}
                      className="text-xs font-bold text-[#1A2E40] group-hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{project.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Not Sure CTA */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/25 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-[#D4AF37]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Not Sure What Your Practice Needs?</p>
            </div>
            <p className="text-lg font-serif font-bold text-white leading-snug mb-2">
              Start with a 15-Minute Financial Clarity Call
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              You don't need to diagnose your own bookkeeping problems first. We'll discuss how your practice handles bookkeeping, the systems you're using, where you're experiencing problems, and whether cleanup, ongoing bookkeeping, or QuickBooks restructuring makes sense.
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] border border-[#FFF5DE]/60 shrink-0 cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your 15-Min Clarity Call</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Trust Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          No obligation. We'll determine whether we're a good fit before recommending a service.
        </p>
      </div>
    </section>
  );
};
