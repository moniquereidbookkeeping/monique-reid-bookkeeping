import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Calendar, ArrowRight, Star, Zap, Shield } from 'lucide-react';

interface PricingSectionProps {
  onBookCall: () => void;
}

const plans = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Boutique or single-provider practice',
    volumeHint: 'Up to ~$25K/mo in practice transactions',
    icon: Shield,
    monthlyPrice: 497,
    annualPrice: 447,
    popular: false,
    color: 'border-[#E2E8F0]',
    badge: null,
    features: [
      'Monthly bank & credit card reconciliations',
      'Systematic transaction categorization',
      'Monthly Profit & Loss statement',
      'Monthly Balance Sheet',
      'Plain-English executive summary',
      'Uncleared item review & follow-up',
      'Year-end CPA handoff package',
      'Email support',
    ],
    notIncluded: [
      'Revenue segmentation by modality',
      'Period-over-period KPI reporting',
      'Patient financing reconciliation',
      'Treatment COGS tracking',
    ],
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Established practice ready for deeper visibility',
    volumeHint: '$25K–$75K/mo in practice transactions',
    icon: Zap,
    monthlyPrice: 797,
    annualPrice: 717,
    popular: true,
    color: 'border-[#D4AF37]',
    badge: 'Most Popular',
    features: [
      'Everything in Foundation',
      'Multi-modality revenue segmentation',
      'Period-over-period KPI reporting (MoM / QoQ)',
      'Cash flow visibility & trend analysis',
      'POS & booking platform reconciliation',
      'Merchant & financing fee isolation (Stripe, Square)',
      'Monthly bookkeeper strategy call',
      'Priority email & phone support',
    ],
    notIncluded: [
      'Treatment COGS tracking',
      'Patient financing reconciliation (Cherry, CareCredit)',
      'Provider commission clearing',
    ],
    cta: 'Get Started',
  },
  {
    id: 'fullspectrum',
    name: 'Full-Spectrum',
    tagline: 'Multi-provider or multi-modality practice',
    volumeHint: '$75K+/mo or multi-provider practices',
    icon: Star,
    monthlyPrice: 1197,
    annualPrice: 1077,
    popular: false,
    color: 'border-[#1A2E40]',
    badge: null,
    features: [
      'Everything in Growth',
      'Treatment COGS tracking (neurotoxins, fillers, IVs)',
      'Retail & clinical inventory cost tracking',
      'Patient financing reconciliation (Cherry, CareCredit, PatientFi)',
      'Unearned revenue liability tracking (packages, gift cards)',
      'Provider commission & 1099 contractor payout clearing',
      'Multi-location performance tracking',
      'Medical weight-loss (GLP-1) revenue stream tracking',
    ],
    notIncluded: [],
    cta: 'Get Started',
  },
];

const trustItems = [
  'No long-term contracts',
  'Cancel with 30 days’ notice',
  'Certified QBO ProAdvisor',
  'HIPAA-aware workflows',
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookCall }) => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const annualSavings = (plan: typeof plans[0]) =>
    (plan.monthlyPrice - plan.annualPrice) * 12;

  return (
    <section id="pricing-section" className="py-16 lg:py-24 bg-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparent Flat-Rate Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Simple, Predictable Monthly Retainers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
            No hourly surprises. No hidden fees. Flat-rate bookkeeping built around your practice's actual complexity — not a generic small-business template.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#F1F5F9] rounded-xl p-1 border border-[#E2E8F0]">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                billing === 'monthly'
                  ? 'bg-white text-[#1A2E40] shadow-sm border border-[#E2E8F0]'
                  : 'text-[#64748B] hover:text-[#1A2E40]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                billing === 'annual'
                  ? 'bg-white text-[#1A2E40] shadow-sm border border-[#E2E8F0]'
                  : 'text-[#64748B] hover:text-[#1A2E40]'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 ${plan.color} ${
                  plan.popular
                    ? 'bg-[#1A2E40] text-white shadow-2xl scale-[1.02] z-10'
                    : 'bg-white shadow-sm hover:shadow-md'
                } transition-all duration-300 flex flex-col`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] text-[#1A2E40] text-xs font-bold shadow-md border border-[#FFF5DE]/60 whitespace-nowrap">
                      <Star className="w-3 h-3 fill-[#1A2E40]" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      plan.popular ? 'bg-white/10' : 'bg-[#FAF8F5] border border-[#E2E8F0]'
                    }`}>
                      <Icon className={`w-5 h-5 ${plan.popular ? 'text-[#D4AF37]' : 'text-[#1A2E40]'}`} />
                    </div>
                    <h3 className={`text-xl font-serif font-bold mb-1 ${plan.popular ? 'text-white' : 'text-[#1A2E40]'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${plan.popular ? 'text-[#E2E8F0]' : 'text-[#64748B]'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10" style={{ borderColor: plan.popular ? 'rgba(255,255,255,0.12)' : '#E2E8F0' }}>
                    <div className="flex items-end gap-1.5">
                      <span className={`text-4xl sm:text-5xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-[#1A2E40]'}`}>
                        ${price.toLocaleString()}
                      </span>
                      <span className={`text-sm mb-2 ${plan.popular ? 'text-[#CBD5E1]' : 'text-[#94A3B8]'}`}>
                        /mo
                      </span>
                    </div>
                    {billing === 'annual' && (
                      <p className="text-xs mt-1.5 text-emerald-400 font-semibold">
                        Save ${annualSavings(plan).toLocaleString()}/year
                      </p>
                    )}
                    {billing === 'monthly' && (
                      <p className={`text-[11px] mt-1.5 ${plan.popular ? 'text-[#CBD5E1]' : 'text-[#94A3B8]'}`}>
                        Switch to annual &amp; save ${annualSavings(plan).toLocaleString()}/yr
                      </p>
                    )}
                    <p className={`text-[11px] mt-2 font-semibold px-2 py-0.5 rounded-md inline-block ${
                      plan.popular
                        ? 'bg-white/10 text-[#E2E8F0]'
                        : 'bg-[#FAF8F5] border border-[#E2E8F0] text-[#64748B]'
                    }`}>
                      {plan.volumeHint}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? 'text-[#D4AF37]' : 'text-emerald-500'
                        }`} />
                        <span className={plan.popular ? 'text-[#E2E8F0]' : 'text-[#4A5568]'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={`not-${i}`} className="flex items-start gap-2.5 text-xs leading-relaxed opacity-40">
                        <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                          <span className={`w-3 h-px ${plan.popular ? 'bg-white' : 'bg-[#94A3B8]'}`} />
                        </span>
                        <span className={plan.popular ? 'text-[#CBD5E1]' : 'text-[#94A3B8]'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={onBookCall}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] cursor-pointer group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.5)] border border-[#FFF5DE]/60'
                        : 'bg-[#1A2E40] hover:bg-[#1A2E40]/90 text-white shadow-sm'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-[#1A2E40]/10 text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37]'
                        : 'bg-white/10 text-white group-hover:bg-[#D4AF37] group-hover:text-[#1A2E40]'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                    </span>
                    <span>Book a Clarity Call</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Custom Pricing Note */}
        <p className="mt-6 text-center text-xs text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          All retainers are tailored to your practice&apos;s transaction volume, connected accounts, and POS complexity. High-volume or multi-entity practices receive a custom quote following a complimentary 20-minute review.
        </p>
      </div>
    </section>
  );
};
