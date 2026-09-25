import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Wrench, 
  Clock, 
  TrendingUp, 
  HeartHandshake,
  Layers,
  LineChart,
  Info,
  CheckCircle2
} from 'lucide-react';
import { BOOKING_URL } from '../constants/booking';

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
      tagline: 'Multi-month and multi-year reconstruction to bring disorganized books up to date.',
      lead: 'Designed for MedSpas, aesthetic clinics, and wellness practices whose books are months or years behind, filled with uncategorized expenses, duplicate sync entries, or unresolved suspense accounts.',
      icon: Wrench,
      highlight: 'Transforms historical bookkeeping backlogs into clean, reconciled financial records your CPA can work from efficiently.',
      deliverables: [
        'Multi-month or multi-year bank, credit card, and financing account reconciliations',
        'Comprehensive transaction review, vendor verification, and recategorization',
        'Identification and resolution of duplicate, missing, and uncategorized entries',
        'Specialized Chart of Accounts restructuring tailored to aesthetic and wellness modalities',
        'Merchant and POS payout reconciliation for Boulevard, Vagaro, Stripe, Square, and connected gateways',
        'Clear separation and documentation of owner, personal, and intercompany transactions',
      ],
      noticeTitle: 'Project Scoping & Pricing',
      notice: 'Cleanup projects are individually scoped based on historical timeframe, monthly transaction volume, number of connected accounts, payment platform complexity, and existing ledger condition. A complimentary preliminary review determines the exact scope and quote.',
    },
    {
      id: 'monthly',
      num: '02',
      phase: 'Maintain',
      title: 'Monthly Bookkeeping',
      tagline: 'Dependable, recurring monthly close process keeping your practice books current and audit-ready.',
      lead: 'Consistent monthly management of all operating accounts, providing practice owners with reliable financial visibility to make confident operational decisions.',
      icon: Clock,
      highlight: 'A structured monthly close routine delivering clear statements and proactive review of uncleared items.',
      deliverables: [
        'Monthly reconciliations across all operating bank, credit card, and active financing accounts',
        'Systematic transaction categorization and recurring expense verification',
        'Ongoing review of uncleared items, outstanding checks, and items requiring practice follow-up',
        'Preparation of monthly Balance Sheet and Profit & Loss statements',
        'Executive Financial Summary delivered in plain English highlighting notable trends and key variances',
        'Organized year-end financial handoff package prepared for your CPA or tax professional',
      ],
      noticeTitle: 'Customized Retainer',
      notice: 'Monthly bookkeeping retainers are tailored to your practice’s transaction volume, active bank/credit accounts, POS integrations, and reporting depth.',
    },
    {
      id: 'reporting',
      num: '03',
      phase: 'Grow',
      title: 'Financial Reporting & KPIs',
      tagline: 'Executive reporting and plain-language metric analysis designed for practice growth and profitability.',
      lead: 'Transforms raw accounting entries into actionable business intelligence, helping owners understand true treatment margins, revenue concentrations, and cash flow dynamics.',
      icon: TrendingUp,
      highlight: 'Reports designed for healthcare and aesthetic practice owners, not just compliance accountants.',
      deliverables: [
        'Treatment and service-line margin analysis where clinical cost records and inventory data permit',
        'Monthly Balance Sheet reporting providing transparent visibility into assets, liabilities, and retained earnings',
        'Period-over-period performance comparisons, including Month-over-Month and Quarter-over-Quarter trends',
        'Revenue segmentation by modality (injectables, laser, IV hydration, wellness infusions, medical weight-loss, retail skincare, and memberships)',
        'Plain-language executive summary outlining notable changes, overhead ratios, and actionable focus areas',
        'Cash-flow visibility to support strategic decisions around hiring, provider compensation, equipment leases, and suite expansion',
      ],
      noticeTitle: 'Reporting Integration',
      notice: 'Available as an enhanced advisory layer paired with ongoing monthly bookkeeping engagements, structured around your practice’s management platforms and data availability.',
    },
    {
      id: 'focus',
      num: '04',
      phase: 'Specialized',
      title: 'Aesthetic & Wellness Practice Specialization',
      tagline: 'Bookkeeping methodologies built specifically for the clinical and operational realities of self-pay healthcare.',
      lead: 'Bridges the critical operational gap between clinical scheduling software, inventory carrying costs, tiered provider pay structures, and QuickBooks Online.',
      icon: HeartHandshake,
      highlight: 'Industry-specific workflows that reflect clinical inventory, patient financing, and recurring membership models.',
      deliverables: [
        'Treatment COGS tracking for neurotoxins, dermal fillers, and specialty medical consumables where applicable',
        'Retail skincare and clinical inventory cost tracking and valuation schedules',
        'Systematic unearned revenue liability tracking for prepaid packages, gift cards, and VIP memberships',
        'Provider commission, injector percentage, and 1099 contractor payout clearing reconciliations',
        'Patient financing platform reconciliation (Cherry, CareCredit, PatientFi) isolating merchant discount fees',
        'Dedicated tracking for IV hydration, vitamin shot bars, and medical weight-loss (GLP-1/peptides) revenue streams',
        'Multi-location and provider-level performance tracking for expanding practices',
      ],
      noticeTitle: 'Professional Coordination',
      notice: 'Specialized regulatory, medical director compensation legalities, and corporate entity compliance are coordinated with your licensed legal and CPA advisors.',
    },
    {
      id: 'setup',
      num: '05',
      phase: 'Build',
      title: 'QuickBooks Setup & Chart of Accounts',
      tagline: 'Establish a tailored financial architecture for newly launching or restructured practices.',
      lead: 'Designed for practitioners launching a new aesthetic clinic, wellness suite, or medical weight-loss clinic, or established practices outgrowing a generic off-the-shelf setup.',
      icon: Layers,
      highlight: 'An aesthetic-native Chart of Accounts configured to capture revenue modalities and clinical costs from Day One.',
      deliverables: [
        'Complete QuickBooks Online company file setup, preferences, and permissions configuration',
        'Specialized Chart of Accounts organized across clinical treatments, medical consumables, operating overhead, and administrative tiers',
        'Direct bank, credit card, and merchant gateway feed integration and rules setup',
        'Practice-management and POS mapping (Boulevard, Vagaro, Jane, Mindbody, Square, Stripe) to support clean reconciliation',
        'Product and service item catalog setup with accurate tax mapping based on client guidance and applicable rules',
        'Owner initial equity contributions, capital funding, and fixed-asset scheduling',
      ],
      noticeTitle: 'Setup Deliverable',
      notice: 'Includes an initial architecture build, feed validation, and an administrative walkthrough for the practice owner or clinic manager.',
    },
    {
      id: 'scale',
      num: '06',
      phase: 'Scale',
      title: 'Historical Financial Records & Reporting',
      tagline: 'Multi-year financial reconstruction and normalization for lending, succession, or practice expansion.',
      lead: 'Designed for established aesthetic and wellness practices preparing for bank financing, partnership buy-ins, clinical expansion, or practice valuation review.',
      icon: LineChart,
      highlight: 'Standardized multi-year financial schedules that provide lenders, CPAs, or advisors with an organized historical record.',
      deliverables: [
        'Multi-year financial record reconstruction, standardization, and normalization based on available records',
        'Historical multi-period Profit & Loss and Balance Sheet standardization for clear multi-year comparative analysis',
        'Organization and scheduling of non-recurring, discretionary, and owner transactions for review by qualified CPAs or transaction advisors',
        'Structured financial packages assembled to support financing applications and lender underwriting inquiries',
        'Historical trend modeling across revenue growth, clinical supply cost ratios, and operational overhead',
        'Clear documentation: Monique Reid Bookkeeping provides bookkeeping organization and does not render formal valuation opinions, audit opinions, or tax filings',
      ],
      noticeTitle: 'Engagement Scope',
      notice: 'Scoped as a project engagement based on the number of historical fiscal years, document completeness, entity structure, and level of reconstruction required.',
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <section id="services-section" className="py-16 lg:py-24 bg-[#FDFCFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-xs font-semibold tracking-wider text-[#1A2E40] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Specialized Scope of Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Bookkeeping &amp; Financial Operations Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
            From thorough QuickBooks cleanups and routine monthly closes to specialized Chart of Accounts design and multi-year historical reconstruction—our six services are built around the clinical workflows of aesthetic and wellness practices.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services (6)' },
              { id: 'cleanup', label: '01. Repair' },
              { id: 'monthly', label: '02. Maintain' },
              { id: 'reporting', label: '03. Grow' },
              { id: 'focus', label: '04. Specialized' },
              { id: 'setup', label: '05. Build' },
              { id: 'scale', label: '06. Scale' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1A2E40] text-[#D4AF37] shadow-sm'
                    : 'bg-white text-[#4A5568] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (All 6 Distinct Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                id={`service-card-${svc.id}`}
                className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#D4AF37]/60 shadow-xs hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div className="flex flex-col flex-1">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                      {svc.num}. {svc.phase.toUpperCase()}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FDFCFA] border border-[#E2E8F0] flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#1A2E40] mb-2 leading-snug md:min-h-[3.25rem] flex items-start">
                    {svc.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-semibold text-[#1A2E40]/85 mb-2.5 md:min-h-[2.25rem] flex items-start leading-snug">
                    {svc.tagline}
                  </p>

                  {/* Lead / Description */}
                  <p className="text-xs text-[#4A5568] leading-relaxed mb-4 md:min-h-[4.25rem] flex items-start">
                    {svc.lead}
                  </p>

                  {/* Key Benefit Box */}
                  <div className="mb-5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/35 md:min-h-[4.75rem] flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>Key Strategic Value</span>
                    </p>
                    <p className="text-xs text-[#1A2E40] font-semibold leading-relaxed">
                      {svc.highlight}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="pt-4 border-t border-[#E2E8F0] mb-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1A2E40]">
                      Substantive Deliverables:
                    </p>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4A5568] leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  {/* Notice footnote */}
                  {svc.notice && (
                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#4A5568] mb-5 md:min-h-[5.25rem] flex items-start gap-2.5 leading-relaxed">
                      <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        {svc.noticeTitle && (
                          <span className="font-bold text-[#1A2E40] block text-xs tracking-wide">
                            {svc.noticeTitle}
                          </span>
                        )}
                        <span className="text-[#64748B] leading-relaxed block">{svc.notice}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                    <button
                      onClick={onBookCall}
                      className="text-xs font-bold text-[#1A2E40] group-hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[11px] text-[#94A3B8]">
                      Certified QBO ProAdvisor
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RESTORED TECHNOLOGY AND BOTTLENECK SECTION (Per Screenshots & Specifications) */}
        <section
          id="practice-software-pos-integration"
          aria-labelledby="pos-integration-heading"
          className="mt-16 bg-[#1A2E40] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-[#D4AF37]/30"
        >
          {/* Subtle gold ambient glow */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Top Technology Reconciliation Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  PRACTICE SOFTWARE &amp; POS INTEGRATION
                </span>
                <h3 id="pos-integration-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                  We Reconcile Your Aesthetic &amp; Wellness Technology Stack
                </h3>
                <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl leading-relaxed font-light">
                  You don't need to change your booking or POS system. Monique’s bookkeeping process is designed to reconcile settlements, provider tips, merchant processing fees, patient financing transactions, and package sales from your booking platform straight into QuickBooks Online.
                </p>

                {/* The Technology Integration Grid */}
                <div
                  className="flex flex-wrap gap-2.5 pt-2"
                  role="list"
                  aria-label="Supported aesthetic and wellness practice software"
                >
                  {[
                    'Boulevard',
                    'Vagaro',
                    'Jane App',
                    'Mindbody',
                    'Zenoti',
                    'Stripe',
                    'Square',
                    'Cherry Financing',
                    'CareCredit',
                    'PatientFi',
                  ].map((tech) => (
                    <span
                      key={tech}
                      role="listitem"
                      className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-medium text-white border border-white/15 transition-colors shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Schedule 20-Min Clarity Call CTA Card (Restored from Screenshot 2) */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <button
                  onClick={onBookCall}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.5)] border border-[#FFF5DE]/60 flex items-center justify-center gap-3 active:scale-[0.99] group cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center text-[#1A2E40] group-hover:bg-[#1A2E40] group-hover:text-[#D4AF37] transition-colors duration-200 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <span>Schedule 20–Min Clarity Call</span>
                  <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-[#E2E8F0]/80 mt-2.5 text-center lg:text-right font-light">
                  20–minute private consultation via Calendly
                </p>
              </div>
            </div>

            {/* Core Bottlenecks Box (Restored from Screenshots 3, 4 & 5 with Defensible Wording) */}
            <div className="bg-[#FDFCFA] text-[#4A5568] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E2E8F0] shadow-md space-y-6">
              {/* Heading */}
              <div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1A2E40] tracking-tight">
                  Stop letting your software break your books.
                </h4>
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mt-2.5 font-normal">
                  Most standard bookkeepers turn on an automated POS sync tool and walk away. Without customized reconciliation, this can fill QuickBooks with un-reconciled transactions, create duplicate entries, obscure merchant processing deductions, and produce misleading financial reports that distort your true cash flow metrics.
                </p>
              </div>

              {/* Three Core Bottlenecks */}
              <div className="pt-3 border-t border-[#E2E8F0] space-y-5">
                <h5 className="text-base sm:text-lg font-bold text-[#1A2E40]">
                  The Three Core Bottlenecks We Fix For Your Practice:
                </h5>

                <ul className="space-y-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" aria-hidden="true" />
                    <div>
                      <strong className="text-[#1A2E40] font-bold">1. Package, Gift Card &amp; Membership Liability Tracking:</strong>{' '}
                      When you sell high-value treatment packages, gift cards, or prepaid memberships, recording full payments immediately as earned income can distort monthly profitability and cash visibility. We track unearned balances systematically as liabilities and record earned revenue as services are completed, aligned with your practice accounting policies and CPA guidance.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" aria-hidden="true" />
                    <div>
                      <strong className="text-[#1A2E40] font-bold">2. Merchant &amp; Financing Fee Splits:</strong>{' '}
                      Platforms like Stripe, Square, Cherry Financing, CareCredit, and PatientFi withhold merchant and processing fees before depositing funds into your bank account. We cleanly isolate those deductions as merchant expense, helping ensure your gross collections and operational metrics reconcile accurately to your bank feeds.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" aria-hidden="true" />
                    <div>
                      <strong className="text-[#1A2E40] font-bold">3. Provider Payout &amp; Tip Isolation:</strong>{' '}
                      We build clean clearing workflows to separate injector tips and provider commissions from your practice’s core service revenue. This keeps your overhead transparent and your payroll and 1099 records organized.
                    </div>
                  </li>
                </ul>
              </div>

              {/* In Summary Callout */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/35">
                  <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                    <strong className="text-[#1A2E40] font-bold">In Summary:</strong>{' '}
                    You don't need to change the booking platform, POS, or patient financing software you love. We step in to clean up the backend data flow, reconcile your software reporting against your bank feeds, and deliver clear, reliable financial statements every month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
