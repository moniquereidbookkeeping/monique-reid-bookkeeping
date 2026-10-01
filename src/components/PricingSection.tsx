import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  Calendar,
  ArrowRight,
  Clock,
  Info,
  TrendingUp,
  CreditCard,
  Users,
  Package,
  MapPin,
  Building2,
  Receipt,
} from 'lucide-react';

interface PricingSectionProps {
  onBookCall: () => void;
}

const monthlyPlans = [
  {
    id: 'entry',
    name: 'Entry',
    revenueRange: 'Under $25K / month',
    tagline: 'Solo providers and single-location practices with a straightforward payment setup.',
    startingAt: '$497',
    period: '/month',
    label: 'Starting at',
    icon: Clock,
    featured: false,
    badge: null as string | null,
    features: [
      'Bank & credit-card reconciliations',
      'POS & merchant payout reconciliation',
      'Transaction categorization',
      'Monthly Profit & Loss Statement',
      'Monthly Balance Sheet',
      'Year-end CPA reporting package',
    ],
    complexityNote: 'Best for solo providers or boutique practices with one bank account and a single POS platform.',
    cta: 'Book Your 15-Min Financial Clarity Call',
  },
  {
    id: 'growth',
    name: 'Growth',
    revenueRange: '$25K – $75K / month',
    tagline: 'Multi-provider practices with memberships, patient financing, and multiple payment systems.',
    startingAt: '$797',
    period: '/month',
    label: 'Starting at',
    icon: Sparkles,
    featured: true,
    badge: 'Most Popular' as string | null,
    features: [
      'Everything in Entry',
      'Multiple POS & payment systems',
      'Memberships & prepaid packages',
      'Patient financing reconciliation (Cherry, CareCredit, PatientFi)',
      'Provider compensation reconciliation',
      'Month-over-month revenue reporting',
    ],
    complexityNote: 'Best for MedSpas and aesthetic clinics with 2–4 providers, Boulevard, Cherry, or CareCredit.',
    cta: 'Book Your 15-Min Financial Clarity Call',
  },
  {
    id: 'full-spectrum',
    name: 'Full-Spectrum',
    revenueRange: '$75K+ / month',
    tagline: 'Multi-location or high-volume practices with inventory, COGS tracking, and complex workflows.',
    startingAt: '$1,197',
    period: '/month',
    label: 'Starting at',
    icon: TrendingUp,
    featured: false,
    badge: null as string | null,
    features: [
      'Everything in Growth',
      'Multiple locations',
      'Inventory & treatment-cost tracking',
      'High transaction volume handling',
      'Revenue by service category',
      'Plain-language financial commentary',
    ],
    complexityNote: 'Best for established practices doing $75K+/month with complex multi-system workflows.',
    cta: 'Book Your 15-Min Financial Clarity Call',
  },
];


const complexityFactors = [
  {
    icon: CreditCard,
    label: 'Bank & Credit Accounts',
    detail: 'Number of bank accounts, credit cards, and merchant accounts',
  },
  {
    icon: Building2,
    label: 'POS Platforms',
    detail: 'Boulevard, Vagaro, Jane App, Mindbody, Square, Zenoti',
  },
  {
    icon: Receipt,
    label: 'Payment Processors',
    detail: 'Stripe, PayPal, multiple merchant accounts and payout schedules',
  },
  {
    icon: Users,
    label: 'Patient Financing',
    detail: 'Cherry, CareCredit, PatientFi, and similar programs',
  },
  {
    icon: Package,
    label: 'Memberships & Packages',
    detail: 'Prepaid treatment packages, recurring membership revenue',
  },
  {
    icon: Users,
    label: 'Provider Compensation',
    detail: 'W-2 employees, 1099 contractors, and commission-based providers',
  },
  {
    icon: MapPin,
    label: 'Number of Locations',
    detail: 'Multi-location practices require separate reconciliations',
  },
  {
    icon: Layers,
    label: 'Inventory & COGS',
    detail: 'Injectables, skincare products, supplies, and treatment costs',
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparent, Complexity-Based Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Your Fee Reflects Your Practice's Complexity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            A solo aesthetic provider with one bank account and Square doesn't have the same bookkeeping
            requirements as a multi-provider MedSpa running Boulevard, Cherry, memberships, inventory,
            and provider compensation. That's why our fees are based on the financial complexity of your practice.
          </p>
        </div>

        {/* Transparency Banner */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1A2E40] leading-relaxed">
              <span className="font-bold">Most aesthetic and wellness bookkeeping firms won't show prices until after a discovery call.</span>{' '}
              We publish ours — with revenue brackets, included services, and honest scope notes — so you can evaluate us on your own terms before we ever speak.
            </p>
          </div>
        </div>

        {/* Monthly Plans — 3 equal tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto mb-10">
          {monthlyPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-l-4 border border-[#E2E8F0] flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg ${
                  plan.featured
                    ? 'bg-[#FDFAF4] border-l-[#D4AF37] shadow-sm'
                    : 'bg-white border-l-[#D4AF37]/50 hover:border-l-[#D4AF37]'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#1A2E40] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + Revenue Range */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      plan.featured
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37]'
                        : 'bg-[#1A2E40]/6 text-[#1A2E40]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {plan.name}
                    </span>
                  </div>

                  {/* Revenue Range Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold mb-3 self-start ${
                    plan.featured
                      ? 'bg-[#D4AF37]/15 text-[#1A2E40]'
                      : 'bg-[#1A2E40]/6 text-[#1A2E40]/70'
                  }`}>
                    <TrendingUp className="w-2.5 h-2.5 shrink-0" />
                    <span>{plan.revenueRange}</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-[#94A3B8] italic leading-relaxed mb-5">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-[#E2E8F0]">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1">
                      {plan.label}
                    </p>
                    <div className="flex items-end gap-1.5">
                      <span className="text-3xl font-bold font-serif text-[#1A2E40]">
                        {plan.startingAt}
                      </span>
                      <span className="text-xs mb-1 text-[#94A3B8]">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A2E40]/40 mb-3">
                    Includes
                  </p>
                  <ul className="space-y-2 flex-1 mb-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Complexity Note */}
                  <div className={`flex items-start gap-2 text-[11px] leading-relaxed mb-5 p-3 rounded-xl border ${
                    plan.featured
                      ? 'bg-[#D4AF37]/8 border-[#D4AF37]/20 text-[#57534E]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]'
                  }`}>
                    <Info className="w-3.5 h-3.5 text-[#D4AF37]/60 shrink-0 mt-0.5" />
                    <span>{plan.complexityNote}</span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={onBookCall}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-all active:scale-[0.98] cursor-pointer group mt-auto ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] shadow-[0_4px_16px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60'
                        : 'bg-[#1A2E40] hover:bg-[#253E52] text-white shadow-sm'
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

        {/* How Your Fee Is Determined */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                  <Info className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Complexity-Based Pricing
                </p>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A2E40] leading-snug">
                What Determines Your Monthly Fee
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed mt-2 max-w-2xl">
                Your monthly fee is determined by the number and type of financial systems your practice uses.
                More systems, platforms, and revenue types mean more reconciliation work — and a higher starting rate.
                Here's what we assess before quoting your plan:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
              {complexityFactors.map((factor) => {
                const FIcon = factor.icon;
                return (
                  <div key={factor.label} className="p-5 flex flex-col gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#1A2E40]/5 flex items-center justify-center shrink-0">
                      <FIcon className="w-3.5 h-3.5 text-[#1A2E40]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1A2E40] leading-snug mb-0.5">{factor.label}</p>
                      <p className="text-[11px] text-[#94A3B8] leading-relaxed">{factor.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Not Sure CTA */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/25 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-[#D4AF37]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Not Sure What Your Practice Needs?
              </p>
            </div>
            <p className="text-lg font-serif font-bold text-white leading-snug mb-2">
              Start with a 15-Minute Financial Clarity Call
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              You don't need to diagnose your own bookkeeping problems first. We'll discuss how your
              practice handles bookkeeping, the systems you're using, where you're experiencing friction,
              and whether cleanup, ongoing bookkeeping, or QuickBooks restructuring makes sense.
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
