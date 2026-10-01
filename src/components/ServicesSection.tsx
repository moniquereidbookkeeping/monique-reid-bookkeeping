import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Wrench,
  Clock,
  Layers,
  Info,
  CheckCircle2,
  BarChart2,
} from 'lucide-react';

interface ServicesSectionProps {
  onBookCall: () => void;
}

const niches = [
  'MedSpas',
  'Aesthetic Clinics',
  'IV Hydration & Wellness Practices',
  'Medical Weight-Loss Practices',
  'Related Self-Pay Healthcare',
];

const services = [
  {
    id: 'cleanup',
    num: '01',
    phase: 'Repair',
    icon: Wrench,
    badge: null as string | null,
    title: 'QuickBooks Cleanup & Catch-Up',
    tagline: 'Get caught up. Clean up the past. Start fresh.',
    bestFor:
      'Practices that are months or years behind, have unreconciled accounts, transactions that no longer add up, or books they cannot trust before filing with a CPA.',
    deliverables: [
      'Multi-month bank and credit-card reconciliations',
      'Review and correction of uncategorized or misclassified transactions',
      'POS and merchant payout reconciliation',
      'Chart of Accounts review and restructuring',
      'Separation of business, owner-draw, and intercompany activity',
      'Year-end financial package for your CPA or tax professional',
    ],
    price: 'Custom flat-rate project',
    priceNote:
      'Scoped by months requiring cleanup, transaction volume, number of accounts, platforms involved, and overall condition of the file.',
    cta: 'Request a Cleanup Assessment',
  },
  {
    id: 'monthly',
    num: '02',
    phase: 'Maintain',
    icon: Clock,
    badge: 'Most Requested' as string | null,
    title: 'Specialized Monthly Bookkeeping',
    tagline: 'More than categorized transactions — built for how your practice earns.',
    bestFor:
      'Growing and established practices that need consistent monthly bookkeeping with real visibility into POS settlements, patient financing, memberships, inventory costs, and provider compensation.',
    deliverables: [
      'Monthly bank, credit-card, and POS payout reconciliations',
      'Patient financing tracking (Cherry, CareCredit, PatientFi)',
      'Membership and prepaid-package reconciliation',
      'Treatment, supply, and inventory-cost categorization',
      'Provider compensation reconciliation, as applicable',
      'Monthly P&L Statement and Balance Sheet',
      'Month-over-month comparisons and revenue by service category',
      'Plain-language financial summary + year-end CPA package',
    ],
    price: '',
    priceNote:
      'Complexity-based. Determined by transaction volume, accounts, POS platforms, memberships, and provider structure.',
    cta: 'Get Your Monthly Plan',
  },
  {
    id: 'reporting',
    num: '03',
    phase: 'Report',
    icon: BarChart2,
    badge: null as string | null,
    title: 'Financial Reporting & KPIs',
    tagline: 'Know which services are earning and where your margins actually are.',
    bestFor:
      'Practices on monthly bookkeeping that want practice-specific KPI tracking and P&L visibility by service line — not just one combined number at month-end.',
    deliverables: [
      'Practice P&L segmented by service line or revenue category',
      'Month-over-month trend reporting',
      'KPIs: revenue per treatment, cost per service, provider productivity',
      'Gross margin by treatment category',
      'Cash flow summary and bank position',
      'Plain-language financial narrative each reporting period',
    ],
    price: 'Add-on to Monthly Bookkeeping',
    priceNote:
      'Available as an enhancement to Specialized Monthly Bookkeeping plans. Scope by service lines and reporting depth.',
    cta: 'Add Reporting to My Plan',
  },
  {
    id: 'setup',
    num: '04',
    phase: 'Build',
    icon: Layers,
    badge: null as string | null,
    title: 'QuickBooks Setup & Restructuring',
    tagline: 'A financial foundation that reflects how your practice earns and spends.',
    bestFor:
      'New practices setting up QuickBooks for the first time, established practices opening a second location, or any practice that has outgrown a generic bookkeeping structure.',
    deliverables: [
      'QuickBooks Online company setup or full restructuring',
      'Chart of Accounts customized to your service lines and revenue streams',
      'Bank, credit-card, and merchant account connections',
      'POS and payment workflow mapping (Boulevard, Vagaro, Jane, Mindbody, Square)',
      'Owner equity account structure and opening-balance review',
      'Initial reconciliation framework and workflow documentation',
    ],
    price: 'One-time flat-rate project',
    priceNote:
      'Scoped by practice complexity, number of systems, and whether we are building new or restructuring an existing file.',
    cta: 'Build Your Foundation',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookCall }) => {
  return (
    <section id="services-section" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Specialized Bookkeeping Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight mb-3">
            Built for the Financial Reality of MedSpa and Aesthetic Practices
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            We understand how practices that run on Boulevard, use Cherry or CareCredit for patient financing,
            track inventory and treatment costs, and split revenue across providers actually get paid.
            Generic bookkeeping misses all of it.
          </p>

          {/* Niche Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {niches.map((n) => (
              <span
                key={n}
                className="px-3 py-1.5 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-sm font-semibold text-[#1A2E40]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Service Cards — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isMonthly = svc.id === 'monthly';
            return (
              <div
                key={svc.id}
                id={`service-card-${svc.id}`}
                className={`relative rounded-2xl border-l-4 border border-[#E2E8F0] flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg ${
                  isMonthly
                    ? 'bg-[#FDFAF4] border-l-[#D4AF37] shadow-sm'
                    : 'bg-white border-l-[#D4AF37]/50 shadow-xs hover:border-l-[#D4AF37]'
                }`}
              >
                {/* Badge */}
                {svc.badge && (
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#1A2E40] text-xs font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      {svc.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Phase indicator */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isMonthly
                          ? 'bg-[#D4AF37]/15 text-[#D4AF37]'
                          : 'bg-[#1A2E40]/6 text-[#1A2E40]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                      {svc.num} · {svc.phase}
                    </span>
                  </div>

                  {/* Title + Tagline */}
                  <h3 className="text-2xl font-serif font-bold text-[#1A2E40] leading-snug mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-base text-[#94A3B8] italic leading-relaxed mb-5">
                    {svc.tagline}
                  </p>

                  {/* Best for */}
                  <div
                    className={`p-4 rounded-xl mb-5 border text-base text-[#57534E] leading-relaxed ${
                      isMonthly
                        ? 'bg-[#D4AF37]/8 border-[#D4AF37]/25'
                        : 'bg-[#F8FAFC] border-[#E2E8F0]'
                    }`}
                  >
                    <span className="font-bold text-[#1A2E40]">Best when: </span>
                    {svc.bestFor}
                  </div>

                  {/* Deliverables */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1A2E40]/40 mb-3">
                    Scope of Work
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-5">
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base text-[#57534E] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Scope note */}
                  <div className="flex items-start gap-2 text-base text-[#57534E] leading-relaxed mb-5">
                    <Info className="w-4 h-4 text-[#D4AF37]/50 shrink-0 mt-0.5" />
                    <span>{svc.priceNote}</span>
                  </div>

                  {/* Bottom: price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0] mt-auto gap-3">
                    {svc.price && <span className="text-base font-bold text-[#1A2E40] font-serif leading-snug">{svc.price}</span>}
                    <button
                      onClick={onBookCall}
                      className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors group cursor-pointer shrink-0 ${
                        isMonthly
                          ? 'text-[#D4AF37] hover:text-[#C8A02A]'
                          : 'text-[#1A2E40] hover:text-[#D4AF37]'
                      }`}
                    >
                      <span>{svc.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Integration */}
        <section
          id="practice-software-pos-integration"
          aria-labelledby="pos-integration-heading"
          className="mt-10 bg-[#1A2E40] text-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden border border-[#D4AF37]/30"
        >
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Practice Software &amp; POS Integration
                </span>
                <h3
                  id="pos-integration-heading"
                  className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-white leading-tight"
                >
                  Built Around the Systems Your Practice Uses
                </h3>
                <p className="text-sm text-[#E2E8F0] max-w-2xl leading-relaxed font-light">
                  You don't need to change your booking or payment platform. We reconcile settlements,
                  processing fees, patient financing transactions, tips, and package sales from your
                  practice software straight into QuickBooks Online.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]/70 mb-2">
                      Practice Management
                    </p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Practice management platforms">
                      {['Boulevard', 'Vagaro', 'Jane App', 'Mindbody', 'Zenoti'].map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/18 text-sm font-medium text-white border border-white/25 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]/70 mb-2">
                      Payments &amp; Patient Financing
                    </p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Payment and financing platforms">
                      {['Stripe', 'Square', 'Cherry Financing', 'CareCredit', 'PatientFi'].map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-sm font-medium text-[#D4AF37] border border-[#D4AF37]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <button
                  onClick={onBookCall}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.5)] border border-[#FFF5DE]/60 flex items-center justify-center gap-3 active:scale-[0.99] group cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors shrink-0">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <span>Book Your 20-Min Financial Clarity Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-[#E2E8F0]/70 mt-2.5 text-center lg:text-right font-light">
                  No obligation. We'll determine fit before recommending a service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
