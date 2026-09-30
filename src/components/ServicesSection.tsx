import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Wrench,
  Clock,
  TrendingUp,
  Layers,
  Info,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onBookCall: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookCall }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services = [
    {
      id: 'cleanup',
      num: '01',
      phase: 'Repair',
      title: 'QuickBooks Cleanup & Catch-Up',
      tagline: 'Get caught up. Clean up the past. Move forward with confidence.',
      lead: 'Best for practices that are months or longer behind on bookkeeping, have unresolved reconciliations, duplicate transactions, uncategorized expenses, or simply no longer trust the numbers in QuickBooks.',
      icon: Wrench,
      highlight: 'We review and organize your historical bookkeeping so you can move forward with cleaner, reconciled financial records.',
      deliverables: [
        'Multi-month bank and credit-card reconciliations',
        'Review and correction of uncategorized or misclassified transactions',
        'POS and merchant payout reconciliation',
        'Review and restructuring of your Chart of Accounts',
        'Separation of business, owner, and intercompany activity',
        'Year-end financial package for your CPA or tax professional',
      ],
      startingPrice: 'Custom flat-rate project',
      noticeTitle: 'Project Scoping',
      notice: 'Pricing is based on the number of months requiring cleanup, transaction volume, number of financial accounts, platforms involved, and overall condition of the books.',
      ctaLabel: 'Request a Cleanup Assessment',
      featured: false,
    },
    {
      id: 'monthly',
      num: '02',
      phase: 'Monthly',
      title: 'Specialized Monthly Bookkeeping',
      tagline: 'More than categorized transactions. Bookkeeping built around how your practice gets paid.',
      lead: 'Best for growing and established aesthetic and wellness practices — including MedSpas, IV hydration centers, medical weight-loss practices, and wellness clinics — that need consistent monthly bookkeeping with visibility into POS payouts, memberships, packages, patient financing, inventory costs, and provider compensation.',
      icon: Clock,
      highlight: 'We reconcile the financial activity flowing through your practice and organize it in QuickBooks so you can better understand where your money is coming from, where it\'s going, and how the business is performing.',
      deliverables: [
        'Monthly bank, credit-card, and POS payout reconciliations',
        'Patient-financing transaction and fee tracking (Cherry, CareCredit, PatientFi)',
        'Membership and prepaid-package tracking, as applicable',
        'Treatment, supply, and inventory-cost categorization',
        'Monthly Profit & Loss Statement and Balance Sheet',
        'Plain-language monthly financial summary + year-end CPA package',
      ],
      startingPrice: 'Starting at $497/month',
      noticeTitle: 'Complexity-Based Pricing',
      notice: 'Your fee is determined by transaction volume, number of accounts, POS and payment platforms, patient financing, memberships and packages, inventory complexity, and provider compensation requirements.',
      ctaLabel: 'Get Your Monthly Bookkeeping Plan',
      featured: true,
    },
    {
      id: 'setup',
      num: '03',
      phase: 'Build',
      title: 'QuickBooks Setup & Chart of Accounts',
      tagline: 'Start with a financial foundation built around your practice.',
      lead: 'Best for new practice owners, growing businesses opening another location, or established practices that have outgrown a generic QuickBooks setup.',
      icon: Layers,
      highlight: 'A thoughtfully structured Chart of Accounts makes it easier to understand where revenue comes from and where practice costs are going.',
      deliverables: [
        'QuickBooks Online company setup or restructuring',
        'Customized Chart of Accounts with revenue categories aligned to your service lines',
        'Bank, credit-card, and merchant account connections',
        'POS and payment workflow mapping (Boulevard, Vagaro, Jane, Mindbody, Square, Stripe)',
        'Owner equity account structure and opening-balance review',
        'Initial reconciliation framework',
      ],
      startingPrice: 'One-time flat-rate project',
      noticeTitle: 'Project Scope',
      notice: 'Pricing is determined by the complexity of your practice, number of accounts and systems, and whether we\'re building a new file or restructuring an existing one.',
      ctaLabel: 'Build Your QuickBooks Foundation',
      featured: false,
    },
    {
      id: 'reporting',
      num: '04',
      phase: 'Insights',
      title: 'Financial Reporting & Practice Insights',
      tagline: 'Your books should help you understand your business — not just record what already happened.',
      lead: 'Best for established practice owners who want greater visibility beyond basic bookkeeping reports. Clean books are the foundation — the next step is turning those records into financial information you can actually use.',
      icon: TrendingUp,
      highlight: 'We organize your reporting so you can identify revenue patterns, understand major expenses, and see how your practice is changing over time.',
      deliverables: [
        'Monthly Profit & Loss and Balance Sheet',
        'Month-over-month and quarter-over-quarter comparisons',
        'Revenue visibility by service category, where source data supports it',
        'Treatment, inventory, and provider compensation visibility',
        'Plain-language financial commentary',
        'Year-end financial reporting package for your CPA',
      ],
      startingPrice: 'Included with qualifying monthly plans',
      noticeTitle: 'Add-On or Standalone',
      notice: 'Included with qualifying monthly bookkeeping engagements or scoped separately based on reporting complexity.',
      ctaLabel: 'See What\'s Behind Your Numbers',
      featured: false,
    },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.id === activeTab);

  const featuredService = filteredServices.find(s => s.featured);
  const otherServices = filteredServices.filter(s => !s.featured);

  return (
    <section id="services-section" className="py-16 lg:py-24 bg-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>What's Included</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Specialized Bookkeeping for the Way Your Practice Actually Operates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            From QuickBooks cleanup and setup to ongoing bookkeeping and financial reporting — all built around the financial workflows of aesthetic and wellness practices.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cleanup', label: '01 Cleanup' },
              { id: 'monthly', label: '02 Monthly' },
              { id: 'setup', label: '03 Setup' },
              { id: 'reporting', label: '04 Reporting' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-sm'
                    : 'bg-white text-[#57534E] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Layout */}
        <div className="space-y-6 max-w-6xl mx-auto">

          {/* Featured Card — Monthly Bookkeeping (full width, navy) */}
          {featuredService && (
            <div
              id={`service-card-${featuredService.id}`}
              className="relative rounded-2xl bg-[#1A2E40] border border-[#D4AF37]/30 shadow-xl overflow-hidden"
            >
              {/* Gold ambient glow */}
              <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-8 -top-8 w-56 h-56 bg-[#D4AF37]/8 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Header + Lead */}
                <div className="lg:col-span-5 p-7 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                      {featuredService.num}. {featuredService.phase.toUpperCase()}
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Core Service
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-3">
                    {featuredService.title}
                  </h3>
                  <p className="text-sm text-[#E2E8F0]/80 leading-relaxed mb-4">
                    {featuredService.tagline}
                  </p>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {featuredService.lead}
                  </p>

                  {/* Price + CTA */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold font-serif text-white">Starting at $497</span>
                      <span className="text-sm text-[#CBD5E1]">/month</span>
                    </div>
                    <button
                      onClick={onBookCall}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_16px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60 group cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Get Your Monthly Bookkeeping Plan</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right: Deliverables + Notice */}
                <div className="lg:col-span-7 p-7 sm:p-8 lg:p-10 flex flex-col">
                  {/* Highlight box */}
                  <div className="p-4 rounded-xl bg-white/8 border border-[#D4AF37]/25 mb-6">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      What This Solves
                    </p>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {featuredService.highlight}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]/80 mb-3">
                    What's Included
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {featuredService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#E2E8F0] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Notice */}
                  <div className="p-3.5 rounded-xl bg-white/6 border border-white/10 flex items-start gap-2.5 text-xs text-[#CBD5E1] leading-relaxed">
                    <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">{featuredService.noticeTitle}</span>
                      {featuredService.notice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other 3 Cards in a Grid */}
          {otherServices.length > 0 && (
            <div className={`grid gap-6 ${otherServices.length === 1 ? 'grid-cols-1' : otherServices.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {otherServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    id={`service-card-${svc.id}`}
                    className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#D4AF37]/60 shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col group"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                        {svc.num}. {svc.phase.toUpperCase()}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#FDFCFA] border border-[#E2E8F0] flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors shrink-0">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#1A2E40] mb-2 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#1A2E40]/80 mb-2 leading-snug">
                      {svc.tagline}
                    </p>
                    <p className="text-xs text-[#57534E] leading-relaxed mb-4 flex-shrink-0">
                      {svc.lead}
                    </p>

                    {/* Highlight */}
                    <div className="mb-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/30">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] mb-1 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        What This Solves
                      </p>
                      <p className="text-xs text-[#1A2E40] font-medium leading-relaxed">
                        {svc.highlight}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="pt-3 border-t border-[#E2E8F0] mb-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A2E40]">
                        What's Included
                      </p>
                    </div>
                    <ul className="space-y-2 flex-1 mb-5">
                      {svc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[9px]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Notice */}
                    {svc.notice && (
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#57534E] mb-4 flex items-start gap-2 leading-relaxed">
                        <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          {svc.noticeTitle && (
                            <span className="font-bold text-[#1A2E40] block text-xs mb-0.5">{svc.noticeTitle}</span>
                          )}
                          <span className="text-[#78716C]">{svc.notice}</span>
                        </div>
                      </div>
                    )}

                    {/* Card Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                      <button
                        onClick={onBookCall}
                        className="text-xs font-bold text-[#1A2E40] group-hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{svc.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-semibold text-[#D4AF37] text-right">
                        {svc.startingPrice}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Technology Stack Section */}
        <section
          id="practice-software-pos-integration"
          aria-labelledby="pos-integration-heading"
          className="mt-16 bg-[#1A2E40] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-[#D4AF37]/30"
        >
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  PRACTICE SOFTWARE &amp; POS INTEGRATION
                </span>
                <h3 id="pos-integration-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                  Built Around the Systems Your Practice Uses
                </h3>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl leading-relaxed font-light">
                  You don't need to change your booking or payment platform. We reconcile settlements, processing fees, patient financing transactions, tips, and package sales from your practice software straight into QuickBooks Online.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]/70 mb-2">Practice Management</p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Practice management platforms">
                      {['Boulevard', 'Vagaro', 'Jane App', 'Mindbody', 'Zenoti'].map((tech) => (
                        <span key={tech} role="listitem" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/18 text-xs font-medium text-white border border-white/25 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]/70 mb-2">Payments &amp; Patient Financing</p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Payment and financing platforms">
                      {['Stripe', 'Square', 'Cherry Financing', 'CareCredit', 'PatientFi'].map((tech) => (
                        <span key={tech} role="listitem" className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/30 transition-colors">
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
                  <span>Book Your 15-Min Financial Clarity Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-[#E2E8F0]/70 mt-2.5 text-center lg:text-right font-light">
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
