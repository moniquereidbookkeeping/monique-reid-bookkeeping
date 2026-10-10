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
  /** Home page version: plans and call to action only, with a link to the full pricing page. */
  onViewPricing?: () => void;
  /** Full pricing page: link the cleanup band to the cleanup page. */
  onViewCleanup?: () => void;
}

import { cleanupTiers } from '../data/cleanupPricing';

const monthlyPlans = [
  {
    id: 'entry',
    name: 'Essential',
    revenueRange: 'Revenue under $25K/mo',
    tagline: 'Solo providers and single-location practices with one POS and a straightforward payment setup.',
    startingAt: '$497',
    period: '/month',
    icon: Clock,
    featured: false,
    badge: null as string | null,
    features: [
      'Bank & credit card reconciliations',
      'POS & merchant payout reconciliation',
      'Transaction categorization',
      'Monthly Profit & Loss Statement',
      'Monthly Balance Sheet',
      'Year-end CPA reporting package',
    ],
    complexityNote: 'Best for solo providers or boutique practices with one to three bank and card accounts and a single POS platform.',
    cta: 'Book Your Free 20-Min Clarity Call',
  },
  {
    id: 'growth',
    name: 'Growth',
    revenueRange: 'Revenue $25K–$75K/mo',
    tagline: 'Multi-provider aesthetic and wellness practices with memberships, patient financing, and multiple payment systems.',
    startingAt: '$797',
    period: '/month',
    icon: Sparkles,
    featured: true,
    badge: 'Recommended' as string | null,
    features: [
      'Everything in Essential',
      'Multiple POS & payment systems',
      'Memberships & prepaid packages',
      'Patient financing (Cherry, CareCredit, PatientFi)',
      'Provider compensation reconciliation',
      'Month-over-month revenue reporting',
    ],
    complexityNote: 'Best for MedSpas with 2–4 providers running Boulevard, Cherry, or CareCredit.',
    cta: 'Book Your Free 20-Min Clarity Call',
  },
  {
    id: 'full-spectrum',
    name: 'Full-Spectrum',
    revenueRange: 'Revenue $75K+/mo',
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
    cta: 'Book Your Free 20-Min Clarity Call',
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
    detail: 'Prepaid treatment packages and recurring membership revenue',
  },
  {
    icon: Users,
    label: 'Provider Compensation',
    detail: 'W-2 employees, 1099 contractors, and commission-based providers',
  },
  {
    icon: MapPin,
    label: 'Number of Locations',
    detail: 'Each location requires its own set of reconciliations',
  },
  {
    icon: Layers,
    label: 'Inventory & COGS',
    detail: 'Injectables, skincare products, supplies, and treatment costs',
  },
];


export const PricingSection: React.FC<PricingSectionProps> = ({ onBookCall, onViewPricing, onViewCleanup }) => {
  const compact = !!onViewPricing;
  return (
    <section id="pricing-section" className="py-10 lg:py-16 bg-[#F4F6F8] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight mb-4">
            Pricing Based on Your Practice's Size and Systems
          </h2>
          <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
            A solo provider with Square doesn't have the same bookkeeping needs as a multi-provider MedSpa
            running Boulevard, Cherry, memberships, and provider compensation. Your plan depends on your
            monthly revenue and on how many accounts, payment systems and locations you have.
          </p>
        </div>

        <p className="text-center text-sm font-bold uppercase tracking-widest text-[#8A6A00] mb-6">Monthly bookkeeping plans</p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto mb-16">
          {monthlyPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.featured
                    ? 'bg-[#1A2E40] border-2 border-[#D4AF37] shadow-[0_8px_40px_rgba(212,175,55,0.3)]'
                    : 'bg-white border-2 border-[#E2E8F0] shadow-md hover:border-[#D4AF37]/60'
                }`}
              >
                {/* Top accent bar for non-featured */}
                {!plan.featured && (
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37]" />
                )}

                {/* Badge for featured */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-b-xl bg-[#D4AF37] text-[#1A2E40] text-sm font-bold uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`p-5 flex flex-col flex-1 ${plan.featured ? 'pt-9' : 'pt-5'}`}>

                  {/* Plan name + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      plan.featured
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                        : 'bg-[#1A2E40]/8 text-[#1A2E40]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-widest ${plan.featured ? 'text-[#D4AF37]' : 'text-[#8A6A00]'}`}>
                        {plan.name}
                      </p>
                      {/* Revenue range badge */}
                      <span className={`inline-flex items-center gap-1 mt-1 px-3 py-1 rounded-full text-sm font-bold ${
                        plan.featured
                          ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                          : 'bg-[#1A2E40] text-[#D4AF37]'
                      }`}>
                        <TrendingUp className="w-3.5 h-3.5" />
                        {plan.revenueRange}
                      </span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className={`text-sm leading-relaxed mb-5 ${
                    plan.featured ? 'text-white/80' : 'text-[#374151]'
                  }`}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className={`mb-5 pb-5 border-b ${
                    plan.featured ? 'border-white/15' : 'border-[#E2E8F0]'
                  }`}>
                    <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                      plan.featured ? 'text-white/50' : 'text-[#5A6578]'
                    }`}>
                      Starting At
                    </p>
                    <div className="flex items-end gap-2">
                      <span className={`text-4xl font-bold font-serif leading-none ${
                        plan.featured ? 'text-white' : 'text-[#1A2E40]'
                      }`}>
                        {plan.startingAt}
                      </span>
                      <span className={`text-base mb-1.5 font-semibold ${
                        plan.featured ? 'text-white/60' : 'text-[#5A6578]'
                      }`}>{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${
                    plan.featured ? 'text-[#D4AF37]' : 'text-[#1A2E40]/70'
                  }`}>
                    What's Included
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#D4AF37]" />
                        <span className={`text-sm leading-snug ${
                          plan.featured ? 'text-white/90' : 'text-[#1A2E40]'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best For Note */}
                  <div className={`flex items-start gap-2.5 text-sm leading-relaxed mb-5 p-3 rounded-xl ${
                    plan.featured
                      ? 'bg-white/8 border border-white/12 text-white/75'
                      : 'bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-[#374151]'
                  }`}>
                    <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{plan.complexityNote}</span>
                  </div>

                  {/* CTA */}
                  <a href="/contact"
                    onClick={(e) => { e.preventDefault(); onBookCall(); }}
                    className={`w-full flex items-center justify-center gap-2 py-4 px-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all active:scale-[0.98] cursor-pointer group mt-auto ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! shadow-[0_4px_20px_rgba(212,175,55,0.45)]'
                        : 'bg-[#1A2E40] hover:bg-[#253E52] text-white! shadow-md'
                    }`}
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {compact && (
          <div className="text-center mb-12">
            <a href="/pricing" onClick={(e) => { e.preventDefault(); onViewPricing(); }} className="inline-flex items-center gap-2 text-base font-bold text-[#1A2E40]! hover:text-[#8A6A00]! transition-colors cursor-pointer group">
              <span>See full pricing, including cleanup projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}

        {/* Cleanup pricing band */}
        {!compact && (
        <div className="mb-16 max-w-6xl mx-auto rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00]">Cleanup pricing</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40] leading-tight">Fixed fee, set by how far behind your books are</h3>
            <p className="mt-2 text-base text-[#4A5568] leading-relaxed">Every cleanup starts with a free first review to confirm scope. The price is fixed once scope is agreed, with no hourly surprises.</p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <p className="mt-5 text-center text-base text-[#4A5568]">
            Once the backlog is cleared, monthly bookkeeping keeps your books current.
            {onViewCleanup && (
              <>
                {' '}
                <a href="/quickbooks-cleanup" onClick={(e) => { e.preventDefault(); onViewCleanup(); }}
                  className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]">
                  How a QuickBooks cleanup works
                </a>
              </>
            )}
          </p>
        </div>


        )}

        {/* What affects your plan */}
        {!compact && (
        <div className="max-w-6xl mx-auto mb-12 rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00] mb-3">What affects your plan</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {complexityFactors.map((factor) => (
              <span key={factor.label} className="px-3.5 py-1.5 rounded-full bg-[#F4F6F8] border border-[#E2E8F0] text-sm font-semibold text-[#1A2E40]">
                {factor.label}
              </span>
            ))}
          </div>
          <p className="mt-3 text-base text-[#4A5568]">More accounts, systems and revenue types mean more reconciliation work, which is why they move you into a higher-priced tier.</p>
        </div>

        )}

        {/* Bottom CTA Banner */}
        <div className="max-w-6xl mx-auto rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/30 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xl">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
              Not Sure Which Plan Fits?
            </p>
            <p className="text-lg sm:text-xl font-serif font-bold text-white leading-snug mb-2">
              Start with a Free 20-Minute Financial Clarity Call
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              You don't need to diagnose your own bookkeeping problems first. The 20-minute Zoom call walks through your
              systems, identifies where things are breaking down, and covers exactly what is recommended — no pressure, no obligation.
            </p>
          </div>
          <a href="/contact"
            onClick={(e) => { e.preventDefault(); onBookCall(); }}
            className="inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-base transition-all shadow-[0_4px_24px_rgba(212,175,55,0.4)] border border-[#FFF5DE]/60 shrink-0 cursor-pointer group whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Free 20-Min Clarity Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
