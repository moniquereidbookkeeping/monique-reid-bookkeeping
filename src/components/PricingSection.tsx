import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  Calendar,
  ArrowRight,
  Clock,
  Layers,
  Info,
  TrendingUp,
  CreditCard,
  Users,
  Package,
  MapPin,
  Building2,
  Receipt,
  ShieldCheck,
} from 'lucide-react';

interface PricingSectionProps {
  onBookCall: () => void;
}

const monthlyPlans = [
  {
    id: 'entry',
    name: 'Entry',
    revenueRange: 'Under $25K / month',
    tagline: 'Solo providers and single-location practices with one POS and a straightforward payment setup.',
    startingAt: '$497',
    period: '/month',
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
    cta: 'Book Your Free Clarity Call',
  },
  {
    id: 'growth',
    name: 'Growth',
    revenueRange: '$25K – $75K / month',
    tagline: 'Multi-provider MedSpas with memberships, patient financing, and multiple payment systems.',
    startingAt: '$797',
    period: '/month',
    icon: Sparkles,
    featured: true,
    badge: 'Most Popular' as string | null,
    features: [
      'Everything in Entry',
      'Multiple POS & payment systems',
      'Memberships & prepaid packages',
      'Patient financing (Cherry, CareCredit, PatientFi)',
      'Provider compensation reconciliation',
      'Month-over-month revenue reporting',
    ],
    complexityNote: 'Best for MedSpas with 2–4 providers running Boulevard, Cherry, or CareCredit.',
    cta: 'Book Your Free Clarity Call',
  },
  {
    id: 'full-spectrum',
    name: 'Full-Spectrum',
    revenueRange: '$75K+ / month',
    tagline: 'Multi-location or high-volume practices with inventory, COGS tracking, and complex workflows.',
    startingAt: '$1,197',
    period: '/month',
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
    cta: 'Book Your Free Clarity Call',
  },
];

const complexityFactors = [
  {
    icon: CreditCard,
    label: 'Bank & Credit Accounts',
    detail: 'Bank accounts, credit cards, and merchant accounts',
  },
  {
    icon: Building2,
    label: 'POS Platforms',
    detail: 'Boulevard, Vagaro, Jane App, Mindbody, Square, Zenoti',
  },
  {
    icon: Receipt,
    label: 'Payment Processors',
    detail: 'Stripe, PayPal, multiple merchant accounts & payout schedules',
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
    detail: 'W-2 employees, 1099 contractors, commission-based providers',
  },
  {
    icon: MapPin,
    label: 'Number of Locations',
    detail: 'Each location requires separate reconciliations',
  },
  {
    icon: Layers,
    label: 'Inventory & COGS',
    detail: 'Injectables, skincare products, supplies, treatment costs',
  },
];

const trustItems = [
  { icon: ShieldCheck, text: 'No long-term contracts' },
  { icon: ShieldCheck, text: 'Cancel with 30 days notice' },
  { icon: ShieldCheck, text: 'Intuit Certified QBO ProAdvisor' },
  { icon: ShieldCheck, text: 'HIPAA-aware workflows' },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookCall }) => {
  return (
    <section id="pricing-section" className="py-20 lg:py-28 bg-[#F4F6F8] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent, Complexity-Based Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A2E40] leading-tight mb-5">
            Your Fee Reflects Your Practice's Complexity
          </h2>
          <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed">
            A solo provider with Square doesn't have the same bookkeeping needs as a multi-provider MedSpa
            running Boulevard, Cherry, memberships, and provider compensation.
            That's why our fees match the financial complexity of <em>your</em> practice.
          </p>
        </div>

        {/* Transparency Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/30">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-base text-white leading-relaxed">
              <span className="font-bold text-[#D4AF37]">Most bookkeeping firms hide their prices until after a discovery call.</span>{' '}
              We publish ours — with revenue brackets, included services, and honest scope notes — so you can evaluate us
              on your own terms before we ever speak.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7 max-w-5xl mx-auto mb-14">
          {monthlyPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-[#1A2E40] border-2 border-[#D4AF37] shadow-[0_8px_32px_rgba(212,175,55,0.25)]'
                    : 'bg-white border-2 border-[#E2E8F0] shadow-sm hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-b-xl bg-[#D4AF37] text-[#1A2E40] text-xs font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`p-7 flex flex-col flex-1 ${plan.featured ? 'pt-10' : ''}`}>
                  {/* Plan name + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      plan.featured
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                        : 'bg-[#1A2E40]/8 text-[#1A2E40]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-widest ${
                        plan.featured ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
                      }`}>
                        {plan.name}
                      </p>
                      <p className={`text-xs font-semibold mt-0.5 ${
                        plan.featured ? 'text-white/70' : 'text-[#57534E]'
                      }`}>
                        {plan.revenueRange}
                      </p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    plan.featured ? 'text-white/80' : 'text-[#57534E]'
                  }`}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className={`mb-6 pb-6 border-b ${
                    plan.featured ? 'border-white/15' : 'border-[#E2E8F0]'
                  }`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                      plan.featured ? 'text-white/50' : 'text-[#94A3B8]'
                    }`}>
                      Starting at
                    </p>
                    <div className="flex items-end gap-2">
                      <span className={`text-5xl font-bold font-serif leading-none ${
                        plan.featured ? 'text-white' : 'text-[#1A2E40]'
                      }`}>
                        {plan.startingAt}
                      </span>
                      <span className={`text-sm mb-1 font-medium ${
                        plan.featured ? 'text-white/60' : 'text-[#94A3B8]'
                      }`}>{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    plan.featured ? 'text-white/40' : 'text-[#1A2E40]/40'
                  }`}>
                    What's Included
                  </p>
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.featured ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
                        }`} />
                        <span className={`text-sm leading-snug ${
                          plan.featured ? 'text-white/90' : 'text-[#374151]'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best For Note */}
                  <div className={`flex items-start gap-2.5 text-sm leading-relaxed mb-6 p-4 rounded-xl ${
                    plan.featured
                      ? 'bg-white/8 border border-white/12 text-white/70'
                      : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#57534E]'
                  }`}>
                    <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{plan.complexityNote}</span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={onBookCall}
                    className={`w-full flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] cursor-pointer group mt-auto ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] shadow-[0_4px_20px_rgba(212,175,55,0.4)]'
                        : 'bg-[#1A2E40] hover:bg-[#253E52] text-white shadow-md'
                    }`}
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Determines Your Fee */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-sm">
            {/* Header */}
            <div className="bg-[#1A2E40] px-7 sm:px-10 py-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Complexity-Based Pricing
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug mb-3">
                What Determines Your Monthly Fee
              </h3>
              <p className="text-base text-white/70 leading-relaxed max-w-2xl">
                More systems, platforms, and revenue types mean more reconciliation work — and a higher rate.
                Here's exactly what we assess when quoting your plan:
              </p>
            </div>
            {/* Factors Grid */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
              {complexityFactors.map((factor) => {
                const FIcon = factor.icon;
                return (
                  <div key={factor.label} className="p-6 flex flex-col gap-3 hover:bg-[#F8FAFC] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#1A2E40]/8 flex items-center justify-center shrink-0">
                      <FIcon className="w-4.5 h-4.5 text-[#1A2E40]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A2E40] leading-snug mb-1">{factor.label}</p>
                      <p className="text-sm text-[#64748B] leading-relaxed">{factor.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/25 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
              Not Sure Which Plan Fits?
            </p>
            <p className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug mb-3">
              Start with a Free 15-Minute Clarity Call
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              You don't need to diagnose your own bookkeeping problems first. We'll talk through your systems,
              identify where things are breaking down, and tell you exactly what we'd recommend — no pressure.
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-base transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] border border-[#FFF5DE]/60 shrink-0 cursor-pointer group"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Free Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Trust Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => {
            const TIcon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2 text-sm text-[#374151] font-medium">
                <TIcon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          No obligation. We'll determine whether we're a good fit before recommending a service.
        </p>
      </div>
    </section>
  );
};
