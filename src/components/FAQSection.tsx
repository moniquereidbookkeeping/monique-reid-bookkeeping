import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';

interface FAQSectionProps {
  onBookCall: () => void;
  featuredLimit?: number;
}

interface FAQItem {
  id: string;
  category: 'getting-started' | 'quickbooks-systems' | 'cleanup-catchup' | 'financial-operations';
  categoryLabel: string;
  question: string;
  answer: string;
  takeaways: string[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookCall, featuredLimit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(!featuredLimit);
  // Only one open accordion at a time; first item open by default
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'quickbooks-systems', label: 'QuickBooks & Practice Systems' },
    { id: 'cleanup-catchup', label: 'Cleanup & Catch-Up' },
    { id: 'financial-operations', label: 'Practice Financial Operations' },
  ];

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'getting-started',
      categoryLabel: 'GETTING STARTED',
      question: 'What types of aesthetic and wellness practices do you serve?',
      answer:
        'We provide specialized bookkeeping support for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related businesses.\n\nOur bookkeeping approach is customized to your services, payment platforms, provider-compensation structure, inventory, memberships, treatment packages, and number of locations.',
      takeaways: [
        'Specialized support for aesthetic and wellness businesses',
        'Bookkeeping customized to your practice’s operations',
        'Support for single-location and growing multi-location practices',
      ],
    },
    {
      id: 'faq-2',
      category: 'getting-started',
      categoryLabel: 'GETTING STARTED',
      question: 'What is included in monthly bookkeeping?',
      answer:
        'Monthly bookkeeping may include bank and credit-card reconciliations, transaction categorization, merchant-deposit reconciliation, review of outstanding items, and preparation of your Profit and Loss and Balance Sheet reports.\n\nDepending on your service plan, we may also track inventory and treatment costs, memberships, packages, provider payments, financing activity, or revenue by service category.',
      takeaways: [
        'Monthly reconciliation and transaction review',
        'Profit and Loss and Balance Sheet reports',
        'Services tailored to your practice’s size and complexity',
      ],
    },
    {
      id: 'faq-3',
      category: 'quickbooks-systems',
      categoryLabel: 'QUICKBOOKS & PRACTICE SYSTEMS',
      question: 'Why does my aesthetic or wellness practice need a customized QuickBooks setup?',
      answer:
        'Generic QuickBooks categories often make it difficult to understand where your practice is earning—or losing—money. Injectables, skincare inventory, treatment supplies, merchant fees, provider compensation, memberships, and equipment expenses may all require separate tracking.\n\nWe customize your Chart of Accounts around your services and financial structure, helping you produce clearer reports and better understand revenue, costs, and profitability across your practice.',
      takeaways: [
        'Organized tracking for products, supplies, and operating expenses',
        'Clearer visibility into gross profit by service or treatment category',
        'Financial reports structured around your practice’s operations',
      ],
    },
    {
      id: 'faq-4',
      category: 'quickbooks-systems',
      categoryLabel: 'QUICKBOOKS & PRACTICE SYSTEMS',
      question: 'How do you reconcile software such as Boulevard, Vagaro, Jane, Mangomint, Square, or Stripe with QuickBooks?',
      answer:
        'Practice-management and payment platforms frequently combine service revenue, product sales, client tips, memberships, processing fees, refunds, and other activity into a single bank deposit.\n\nWe compare platform reports, merchant statements, and bank deposits to properly record the underlying activity in QuickBooks. Depending on your systems and workflow, we may also use clearing accounts or summarized entries to make monthly reconciliation more accurate and manageable.',
      takeaways: [
        'Reconciliation of platform activity to bank deposits',
        'Separate tracking of merchant fees, tips, refunds, and revenue',
        'A workflow customized to the systems your practice uses',
      ],
    },
    {
      id: 'faq-5',
      category: 'cleanup-catchup',
      categoryLabel: 'CLEANUP & CATCH-UP',
      question: 'My books are 6 to 24 months behind or disorganized. What does the cleanup process involve?',
      answer:
        'We begin with a Diagnostic File Review of your QuickBooks account, bank and credit-card activity, merchant statements, loans, and available supporting records.\n\nWe then work through the affected periods to reconcile accounts, review transaction classifications, identify duplicates or missing activity, and document items requiring your input. At completion, you receive updated financial reports and a list of any remaining questions or adjustments to review with your CPA.',
      takeaways: [
        'Diagnostic review before the cleanup begins',
        'Month-by-month reconciliation of relevant accounts',
        'Updated financial reports prepared for management and CPA review',
      ],
    },
    {
      id: 'faq-6',
      category: 'cleanup-catchup',
      categoryLabel: 'CLEANUP & CATCH-UP',
      question: 'I mixed personal and business transactions. Can my books still be cleaned up?',
      answer:
        'Yes. This is common, particularly during startup, expansion, equipment purchases, or staffing transitions.\n\nWe review the available documentation and separate personal and business activity in QuickBooks. Transactions are categorized based on the information you provide and the accounting treatment established with your CPA. We may also identify business expenses paid personally and personal expenses paid from business accounts for proper review.',
      takeaways: [
        'Separates personal and business activity',
        'Identifies transactions requiring clarification or documentation',
        'Creates cleaner records for management and tax preparation',
      ],
    },
    {
      id: 'faq-7',
      category: 'financial-operations',
      categoryLabel: 'PRACTICE FINANCIAL OPERATIONS',
      question: 'How do you record sales tax for treatments, products, memberships, and packages?',
      answer:
        'Sales-tax requirements vary by state, location, and the type of product or service being sold. Your CPA, attorney, or sales-tax advisor should determine which transactions are taxable and which rates apply to your practice.\n\nOnce those requirements are established, we organize QuickBooks to separate sales-tax activity from operating revenue, reconcile amounts recorded through your payment or practice-management platforms, and prepare clear reports for you or your tax professional.',
      takeaways: [
        'Separate tracking for sales tax and operating revenue',
        'Reconciliation of sales-tax activity from connected platforms',
        'Clear reports for filing by you or your tax professional',
      ],
    },
    {
      id: 'faq-8',
      category: 'financial-operations',
      categoryLabel: 'PRACTICE FINANCIAL OPERATIONS',
      question: 'How do you track payments to employees, independent contractors, and Medical Directors?',
      answer:
        'We create dedicated accounts for payroll, contractor payments, provider commissions, bonuses, and Medical Director fees based on the classifications and compensation structure established by you and your professional advisors.\n\nWe then reconcile those payments to the available payroll reports, contractor records, bank activity, and QuickBooks. Your CPA, payroll professional, or employment attorney should determine the appropriate worker classification and reporting requirements.',
      takeaways: [
        'Separate tracking for payroll, contractors, commissions, and Medical Director fees',
        'Reconciliation of payroll and provider-payment activity',
        'Organized records for payroll and year-end reporting',
      ],
    },
    {
      id: 'faq-9',
      category: 'financial-operations',
      categoryLabel: 'PRACTICE FINANCIAL OPERATIONS',
      question: 'How should gift cards, treatment packages, and memberships be tracked?',
      answer:
        'Gift cards, prepaid treatment packages, and memberships can create timing differences between when cash is received and when services are provided.\n\nWe help organize these transactions in QuickBooks based on your accounting method, platform reports, redemption activity, and the accounting policies established with your CPA. This can provide clearer visibility into cash received, outstanding obligations, redemptions, and recognized revenue.',
      takeaways: [
        'Separate tracking for gift cards, packages, and memberships',
        'Improved visibility into unused balances and redemptions',
        'Accounting treatment coordinated with your CPA when needed',
      ],
    },
    {
      id: 'faq-10',
      category: 'financial-operations',
      categoryLabel: 'PRACTICE FINANCIAL OPERATIONS',
      question: 'Do you replace my CPA, or do you collaborate with them?',
      answer:
        'We collaborate with your CPA or tax professional rather than replace them.\n\nMonique Reid Bookkeeping manages the ongoing bookkeeping process, which may include account reconciliations, transaction categorization, merchant activity, inventory and cost tracking, provider payments, and monthly financial reports.\n\nYour CPA or tax professional remains responsible for services such as tax advice, tax planning, tax-return preparation, and other work included in your engagement with them. When authorized, we can provide organized records and respond to bookkeeping-related questions during the year-end process.',
      takeaways: [
        'Ongoing bookkeeping coordinated with your existing CPA',
        'Organized financial reports and supporting records',
        'A clearer year-end handoff for tax preparation',
      ],
    },
    {
      id: 'faq-11',
      category: 'getting-started',
      categoryLabel: 'GETTING STARTED',
      question: 'What do you need from me to get started?',
      answer:
        'We typically begin with access to your QuickBooks Online file and the financial records relevant to your engagement. These may include bank and credit-card statements, merchant-processing reports, loan documents, payroll summaries, and reports from your practice-management software.\n\nAfter the initial review, we provide a clear list of any additional records or questions needed to begin the cleanup or monthly bookkeeping process.',
      takeaways: [
        'A straightforward onboarding process',
        'A customized records checklist',
        'Clear communication about missing information',
      ],
    },
    {
      id: 'faq-12',
      category: 'getting-started',
      categoryLabel: 'GETTING STARTED',
      question: 'How much do your bookkeeping services cost?',
      answer:
        'Pricing depends on the condition of your books, monthly transaction volume, number of bank and credit-card accounts, practice-management platforms, locations, and the level of reporting you need.\n\nAfter a complimentary Financial Clarity Call and initial review, you will receive a clearly defined scope and customized proposal before work begins.',
      takeaways: [
        'Customized pricing based on your bookkeeping needs',
        'A clearly defined scope before work begins',
        'Pricing aligned with the complexity of your practice',
      ],
    },
    {
      id: 'faq-13',
      category: 'getting-started',
      categoryLabel: 'GETTING STARTED',
      question: 'Do you need access to patient medical records?',
      answer:
        'Our bookkeeping work generally focuses on financial records, transaction summaries, payment-platform reports, and accounting documents—not clinical treatment notes or unnecessary patient medical information.\n\nWe request only the information reasonably needed to complete the agreed bookkeeping services and coordinate appropriate access with the practice.',
      takeaways: [
        'Financial information is prioritized over clinical information',
        'Only relevant records are requested',
        'Access requirements are discussed during onboarding',
      ],
    },
  ];

  const toggleItem = (id: string) => {
    // Only one open accordion at a time
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inQuestion = faq.question.toLowerCase().includes(q);
      const inAnswer = faq.answer.toLowerCase().includes(q);
      const inTakeaways = faq.takeaways.some((t) => t.toLowerCase().includes(q));

      return inQuestion || inAnswer || inTakeaways;
    });
  }, [selectedCategory, searchQuery, faqs]);

  // Valid Schema.org FAQPage structured data for visibly displayed questions & answers
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer.replace(/\n\n/g, '<br><br>'),
        },
      })),
    };
  }, [faqs]);

  const visibleFaqs = useMemo(() => {
    if (featuredLimit && !showAll && !searchQuery.trim() && selectedCategory === 'all') {
      return filteredFaqs.slice(0, featuredLimit);
    }
    return filteredFaqs;
  }, [filteredFaqs, featuredLimit, showAll, searchQuery, selectedCategory]);

  return (
    <section
      id="medspa-bookkeeping-faq"
      className="py-16 lg:py-24 bg-[#FDFCFA] border-t border-b border-[#E2E8F0] relative overflow-hidden"
    >
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background subtle ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs font-bold uppercase tracking-widest text-[#997A15]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            BOOKKEEPING QUESTIONS, CLEAR ANSWERS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A2E40] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#4A5568] font-light leading-relaxed">
            Explore answers to common questions about specialized QuickBooks bookkeeping, historical cleanups, monthly financial reporting, practice-management platforms, provider payments, memberships, and more for aesthetic and wellness practices.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#718096]">
              <Search className="w-4 h-4 text-[#718096]" />
            </div>
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bookkeeping questions…"
              aria-label="Search bookkeeping questions"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#1A2E40] placeholder-[#A0AEC0] shadow-xs outline-none transition-all"
            />
            {searchQuery && (
              <button
                id="faq-clear-search-btn"
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A0AEC0] hover:text-[#4A5568]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? faqs.length
                  : faqs.filter((f) => f.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  id={`faq-tab-${cat.id}`}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A2E40] text-white shadow-sm font-semibold'
                      : 'bg-white text-[#4A5568] border border-[#E2E8F0] hover:border-[#D4AF37]/50 hover:text-[#1A2E40]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#1A2E40] font-bold'
                        : 'bg-[#F2EFE9] text-[#718096]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] text-center space-y-3 shadow-xs">
              <HelpCircle className="w-8 h-8 text-[#A0AEC0] mx-auto" />
              <p className="font-serif font-bold text-lg text-[#1A2E40]">
                No matching questions found
              </p>
              <p className="text-sm text-[#718096] max-w-md mx-auto">
                We couldn't find any questions matching "{searchQuery}". Try a different keyword or reset your filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAF8F5] border border-[#E2E8F0] text-xs font-semibold text-[#1A2E40] hover:bg-[#F2EFE9] cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {visibleFaqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    id={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#D4AF37]/60 shadow-md ring-1 ring-[#D4AF37]/20'
                        : 'bg-white border-[#E2E8F0] hover:border-[#D4AF37]/40 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <div className="space-y-1.5 pr-2">
                        <span className="inline-block text-[11px] font-semibold text-[#997A15] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {faq.categoryLabel}
                        </span>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-[#1A2E40] leading-snug">
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-[#1A2E40] text-[#D4AF37] rotate-180'
                            : 'bg-[#FAF8F5] text-[#718096]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        className="px-5 sm:px-6 pb-6 pt-1 text-[#4A5568] border-t border-[#F2EFE9] space-y-4 text-sm sm:text-base leading-relaxed animate-in fade-in duration-150"
                      >
                        <div className="space-y-3 font-light text-[#2D3748] whitespace-pre-line">
                          {faq.answer}
                        </div>

                        {faq.takeaways && faq.takeaways.length > 0 && (
                          <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] space-y-2.5">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#1A2E40] flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                              KEY TAKEAWAYS FOR AESTHETIC &amp; WELLNESS PRACTICES
                            </p>
                            <ul className="space-y-1.5">
                              {faq.takeaways.map((takeaway, tIdx) => (
                                <li
                                  key={tIdx}
                                  className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5568]"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                  <span>{takeaway}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Show All / Show Less Controls for Homepage Flow */}
              {featuredLimit && !searchQuery.trim() && selectedCategory === 'all' && (
                <div className="text-center pt-3">
                  {!showAll ? (
                    <button
                      type="button"
                      onClick={() => setShowAll(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#D4AF37]/50 text-[#1A2E40] hover:bg-[#FAF8F5] text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <span>View All 13 Frequently Asked Questions</span>
                      <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowAll(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#718096] hover:text-[#1A2E40] transition-colors cursor-pointer"
                    >
                      <span>Show Featured Questions (5)</span>
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A2E40] to-[#122230] text-white border border-[#D4AF37]/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              FINANCIAL CLARITY STARTS HERE
            </span>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Have a specific question about your books?
            </h4>
            <p className="text-xs sm:text-sm text-[#E2E8F0] max-w-xl font-light leading-relaxed">
              Every aesthetic and wellness practice has unique financial needs. Book a complimentary 20-minute Financial Clarity Call to discuss your QuickBooks setup, historical cleanup, monthly bookkeeping, or financial reporting needs.
            </p>
          </div>

          <button
            id="faq-bottom-book-call-btn"
            type="button"
            onClick={onBookCall}
            className="shrink-0 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-md hover:shadow-lg border border-[#FFF5DE]/60 flex items-center justify-center gap-2 group active:scale-[0.99] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1A2E40]" />
            <span>Book My Financial Clarity Call</span>
            <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
