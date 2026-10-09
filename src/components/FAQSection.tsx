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
  showCta?: boolean;
  onViewAll?: () => void;
  /** Hide the section heading when a page title already sits above it. */
  hideHeading?: boolean;
  /** FAQPage structured data belongs on one page only (the FAQ page), not on every page that shows a few questions. */
  includeSchema?: boolean;
}

interface FAQItem {
  id: string;
  category: 'getting-started' | 'quickbooks-systems' | 'cleanup-catchup' | 'financial-operations' | 'pain-points';
  categoryLabel: string;
  question: string;
  answer: string;
  takeaways: string[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookCall, featuredLimit, showCta = true, onViewAll, hideHeading = false, includeSchema = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(!featuredLimit);
  // Only one open accordion at a time; first item open by default
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'quickbooks-systems', label: 'QuickBooks & Systems' },
    { id: 'cleanup-catchup', label: 'Cleanup & Catch-Up' },
    { id: 'financial-operations', label: 'Financial Operations' },
    { id: 'pain-points', label: 'Sound Familiar?' },
  ];
  const ORDER = ['getting-started', 'quickbooks-systems', 'cleanup-catchup', 'financial-operations', 'pain-points'];

  const rawFaqs: FAQItem[] = [
    {
      id: 'faq-p1',
      category: 'pain-points',
      categoryLabel: 'SOUND FAMILIAR?',
      question: 'My Boulevard or Square deposit never matches my gross sales. I have no idea where the money went.',
      answer:
        'This is one of the most common frustrations practice owners describe — and it can be fixed.\n\nPlatforms such as Boulevard, Vagaro, Square, Mindbody, and Mangomint often pay out net of processing fees and refunds, depending on your settings and processor, rather than your total sales. Card tips are usually included in the payout and owed to staff. If your books only record what deposited, that missing money disappears — and you lose visibility into real costs.\n\nPlatform reports are reconciled against your actual bank deposits line by line. Every fee and adjustment gets its own category, so you can see where the gap came from and what running your payment processing actually costs your practice.',
      takeaways: [
        'Platform net deposits compared against gross sales reports',
        'Processing fees, refunds, and adjustments tracked separately',
        'Gaps between sales and deposits explained',
      ],
    },
    {
      id: 'faq-p2',
      category: 'pain-points',
      categoryLabel: 'SOUND FAMILIAR?',
      question: 'I offer Cherry or CareCredit and my CPA said I\'m recording patient financing wrong. I don\'t know how to fix it.',
      answer:
        'You are not alone — patient financing is one of the easier areas to get wrong in aesthetic and wellness bookkeeping.\n\nHere is an example with illustrative numbers: a patient finances a $1,200 treatment through Cherry or CareCredit. The financing company deposits $1,080 into your bank after deducting their merchant fee. If your books record $1,080 as the revenue, you have understated income and hidden a real cost of doing business.\n\nThe full patient-charged amount is recorded as revenue, and the financing merchant fee is categorized separately as an operating expense. Your reports then reflect what patients actually paid and what it cost you to offer financing — which is information you need to understand your real margins.',
      takeaways: [
        'Full patient charge recorded as revenue, not just the deposited amount',
        'Cherry, CareCredit, and PatientFi fees tracked as separate operating costs',
        'Financing economics visible in your monthly reports',
      ],
    },
    {
      id: 'faq-p3',
      category: 'pain-points',
      categoryLabel: 'SOUND FAMILIAR?',
      question: 'I can\'t tell if my practice is actually profitable. The bank account looks okay sometimes, but something never adds up.',
      answer:
        'That feeling — where the schedule looks full but the money feels tight — is almost always a sign that cash flow and profitability are disconnected in your books.\n\nA busy treatment calendar does not automatically mean profit. Prepaid packages and memberships bring in cash upfront but the services still have to be delivered. Neurotoxin and filler costs are not always matched to the revenue they generate. Cherry fees quietly reduce your margins. Provider commissions fluctuate. Without organized books, all of this is invisible.\n\nWhen your QuickBooks is set up correctly for your practice, your monthly Profit and Loss statement shows what you actually earned after every real cost came out — not just what landed in the bank. That is the number that tells you whether the practice is healthy.',
      takeaways: [
        'Profitability separated from cash flow so you see the real picture',
        'Treatment costs, product costs, and provider pay matched to the revenue they produced',
        'A monthly P&L that actually reflects how your practice is performing',
      ],
    },
    {
      id: 'faq-p4',
      category: 'pain-points',
      categoryLabel: 'SOUND FAMILIAR?',
      question: 'I already have a bookkeeper, but the reports I get don\'t tell me anything useful. I can\'t see which services are worth keeping.',
      answer:
        'A generalist bookkeeper can reconcile your accounts and keep your books from falling apart — but if they do not understand how aesthetic and wellness practices operate, the reports they produce will not help you make decisions.\n\nIf your revenue from injectables, skincare, IV drips, memberships, medical weight-loss programs, and treatment packages is all collapsed into one income line, you will never know which services are driving profitability and which ones are draining it.\n\nYour QuickBooks chart of accounts is restructured around your actual service lines and cost structure, so your financial reports show you where the revenue is coming from, what it cost to produce it, and where the real margin is in your practice.',
      takeaways: [
        'Revenue tracked by service category or treatment type',
        'Product, supply, and provider costs matched to the services they support',
        'Reports you can actually read and use — not just file away',
      ],
    },
    {
      id: 'faq-p5',
      category: 'pain-points',
      categoryLabel: 'SOUND FAMILIAR?',
      question: 'Every tax season is a disaster. My CPA says my books are a mess and the bill is higher because of it.',
      answer:
        'When your books arrive at your CPA\'s desk in rough shape, they have to spend their billable time reconstructing what should have been organized throughout the year. That adds to your tax prep invoice, delays your filing, and increases the chance that deductible expenses get missed because documentation was never gathered.\n\nThe goal is to hand your CPA clean, reconciled QuickBooks records, organized the way they need them. Every account reconciled. Every transaction categorized. Supporting documentation noted. Questions flagged and answered before they have to ask.\n\nYour CPA does the tax strategy and filing. Monique Reid Bookkeeping handles the year-round record-keeping that makes it possible to do that efficiently.',
      takeaways: [
        'Month-by-month records your CPA can use without reconstruction',
        'Expenses documented and categorized throughout the year',
        'Records your CPA can work from with fewer questions',
      ],
    },
    {
      id: 'faq-1',
      category: 'getting-started',
      categoryLabel: 'GETTING STARTED',
      question: 'What types of aesthetic and wellness practices do you serve?',
      answer:
        'Monique Reid Bookkeeping provides specialized bookkeeping support for MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, and related businesses.\n\nThe bookkeeping approach is customized to your services, payment platforms, provider-compensation structure, inventory, memberships, treatment packages, and number of locations.',
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
        'Monthly bookkeeping may include bank and credit-card reconciliations, transaction categorization, merchant-deposit reconciliation, review of outstanding items, and preparation of your Profit and Loss and Balance Sheet reports.\n\nDepending on your service plan, monthly bookkeeping may also include tracking inventory and treatment costs, memberships, packages, provider payments, financing activity, or revenue by service category.',
      takeaways: [
        'Monthly reconciliation and transaction review',
        'Profit and Loss and Balance Sheet reports',
        'Services tailored to your practice’s size and complexity',
      ],
    },
    {
      id: 'faq-3',
      category: 'quickbooks-systems',
      categoryLabel: 'QUICKBOOKS & SYSTEMS',
      question: 'Why does my aesthetic or wellness practice need a customized QuickBooks setup?',
      answer:
        'Generic QuickBooks categories often make it difficult to understand where your practice is earning—or losing—money. Injectables, skincare inventory, treatment supplies, merchant fees, provider compensation, memberships, and equipment expenses may all require separate tracking.\n\nYour Chart of Accounts is customized around your services and financial structure, helping you produce clearer reports and better understand revenue, costs, and profitability across your practice.',
      takeaways: [
        'Organized tracking for products, supplies, and operating expenses',
        'Clearer visibility into gross profit by service or treatment category',
        'Financial reports structured around your practice’s operations',
      ],
    },
    {
      id: 'faq-4',
      category: 'quickbooks-systems',
      categoryLabel: 'QUICKBOOKS & SYSTEMS',
      question: 'How do you reconcile software such as Boulevard, Vagaro, Jane, Mangomint, Square, or Stripe with QuickBooks?',
      answer:
        'Practice-management and payment platforms frequently combine service revenue, product sales, client tips, memberships, processing fees, refunds, and other activity into a single bank deposit.\n\nPlatform reports, merchant statements, and bank deposits are compared to properly record the underlying activity in QuickBooks. Depending on your systems and workflow, clearing accounts or summarized entries may also be used to make monthly reconciliation more accurate and manageable.',
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
      question: 'My books are many months behind or disorganized. What does the cleanup process involve?',
      answer:
        'The process begins with a Diagnostic File Review of your QuickBooks account, bank and credit-card activity, merchant statements, loans, and available supporting records.\n\nNext, the affected periods are worked through to reconcile accounts, review transaction classifications, identify duplicates or missing activity, and document items requiring your input. At completion, you receive updated financial reports and a list of any remaining questions or adjustments to review with your CPA.',
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
        'Yes. This is common, particularly during startup, expansion, equipment purchases, or staffing transitions.\n\nThe available documentation is reviewed and personal and business activity is separated in QuickBooks. Transactions are categorized based on the information you provide and the accounting treatment established with your CPA. Business expenses paid personally and personal expenses paid from business accounts are also identified for proper review.',
      takeaways: [
        'Separates personal and business activity',
        'Identifies transactions requiring clarification or documentation',
        'Creates cleaner records for management and tax preparation',
      ],
    },
    {
      id: 'faq-7',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'How do you record sales tax for treatments, products, memberships, and packages?',
      answer:
        'Sales-tax requirements vary by state, location, and the type of product or service being sold. Your CPA, attorney, or sales-tax advisor should determine which transactions are taxable and which rates apply to your practice.\n\nOnce those requirements are established, QuickBooks is organized to separate sales-tax activity from operating revenue, amounts recorded through your payment or practice-management platforms are reconciled, and clear reports are prepared for you or your tax professional.',
      takeaways: [
        'Separate tracking for sales tax and operating revenue',
        'Reconciliation of sales-tax activity from connected platforms',
        'Clear reports for filing by you or your tax professional',
      ],
    },
    {
      id: 'faq-8',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'How do you track payments to employees, independent contractors, and Medical Directors?',
      answer:
        'Dedicated accounts are created for payroll, contractor payments, provider commissions, bonuses, and Medical Director fees based on the classifications and compensation structure established by you and your professional advisors.\n\nThose payments are then reconciled to the available payroll reports, contractor records, bank activity, and QuickBooks. Your CPA, payroll professional, or employment attorney should determine the appropriate worker classification and reporting requirements.',
      takeaways: [
        'Separate tracking for payroll, contractors, commissions, and Medical Director fees',
        'Reconciliation of payroll and provider-payment activity',
        'Organized records for payroll and year-end reporting',
      ],
    },
    {
      id: 'faq-9',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'How should gift cards, treatment packages, and memberships be tracked?',
      answer:
        'Gift cards, prepaid treatment packages, and memberships can create timing differences between when cash is received and when services are provided.\n\nThese transactions are organized in QuickBooks based on your accounting method, platform reports, redemption activity, and the accounting policies established with your CPA. This can provide clearer visibility into cash received, outstanding obligations, redemptions, and recognized revenue.',
      takeaways: [
        'Separate tracking for gift cards, packages, and memberships',
        'Improved visibility into unused balances and redemptions',
        'Accounting treatment coordinated with your CPA when needed',
      ],
    },
    {
      id: 'faq-9a',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'How do you record manufacturer rebates and rewards programs?',
      answer:
        'Manufacturer rebates, practice rewards, and reimbursements for patient loyalty discounts often arrive as deposits, credits, or replacement product with no clear label. When they are booked as sales, income and margins look better than they are.\n\nYour program statements are reviewed and this money is recorded against the product cost it relates to, so your margins on injectables and other products reflect what you actually paid. The exact treatment depends on the program terms and your accounting method, and it is coordinated with your CPA.',
      takeaways: [
        'Rebates recorded against product cost, not as extra sales',
        'Program statements kept with the entries',
        'Treatment coordinated with your CPA',
      ],
    },
    {
      id: 'faq-9b',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'I own the practice personally and also have a management company. Can my books handle that?',
      answer:
        'Many practices run more than one entity, such as a practice entity and a separate management or holding company. When the money moving between them and the owner is not tracked clearly, owner pay, personal spending, and transfers get mixed together.\n\nEach entity can be kept in its own set of books, with owner pay and transfers recorded consistently so your CPA can follow them. How the entities should be structured is a decision for your attorney and CPA, not something Monique Reid Bookkeeping advises on. Multi-entity work is quoted individually.',
      takeaways: [
        'Separate books for each entity',
        'Owner pay and transfers recorded consistently',
        'Structure decisions stay with your attorney and CPA',
      ],
    },
    {
      id: 'faq-9c',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'Will my books be ready if I need a loan, want to sell, or open a second location?',
      answer:
        'Lenders, buyers, and landlords usually ask for clean financial statements, and they are hard to produce on short notice when the books are behind.\n\nWith reconciled books and monthly reports, the numbers are ready when the question comes. Monique Reid Bookkeeping cannot promise any lender or buyer will approve or agree to anything, since they make their own decisions, but readable statements put you in a stronger position for the conversation.',
      takeaways: [
        'Monthly reconciled books and readable reports',
        'Statements ready when a lender or buyer asks',
        'No promise of approval or sale terms',
      ],
    },
    {
      id: 'faq-10',
      category: 'financial-operations',
      categoryLabel: 'FINANCIAL OPERATIONS',
      question: 'Do you replace my CPA, or do you collaborate with them?',
      answer:
        'Monique Reid Bookkeeping collaborates with your CPA or tax professional rather than replacing them.\n\nThe ongoing bookkeeping process may include account reconciliations, transaction categorization, merchant activity, inventory and cost tracking, provider payments, and monthly financial reports.\n\nYour CPA or tax professional remains responsible for services such as tax advice, tax planning, tax-return preparation, and other work included in your engagement with them. When authorized, organized records can be provided and bookkeeping-related questions answered during the year-end process.',
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
        'Work typically begins with access to your QuickBooks Online file and the financial records relevant to your engagement. These may include bank and credit-card statements, merchant-processing reports, loan documents, payroll summaries, and reports from your practice-management software.\n\nAfter the initial review, you receive a clear list of any additional records or questions needed to begin the cleanup or monthly bookkeeping process.',
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
        'Monthly bookkeeping plans start at $497 per month, and cleanup projects start at $597. Your price depends on the condition of your books, monthly transaction volume, number of bank and credit-card accounts, practice-management platforms, locations, and the level of reporting you need.\n\nAfter a complimentary Financial Clarity Call and initial review, you will receive a clearly defined scope and customized proposal before work begins.',
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
        'Bookkeeping uses financial records only: transaction summaries, payment-platform reports, and accounting documents. Patient medical records and clinical notes are not needed and should not be shared.\n\nOnly the information reasonably needed to complete the agreed bookkeeping services is requested, and appropriate access is coordinated with the practice.',
      takeaways: [
        'Financial records only. No clinical or patient records.',
        'Only relevant records are requested',
        'Access requirements are discussed during onboarding',
      ],
    },
  ];

  // Show questions grouped in a logical order; "Sound Familiar?" stays in its own tab.
  const faqs: FAQItem[] = [...rawFaqs].sort((a, b) => ORDER.indexOf(a.category) - ORDER.indexOf(b.category));

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
      mainEntity: (featuredLimit && !showAll ? faqs.slice(0, featuredLimit) : faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer.replace(/\n\n/g, '<br><br>'),
        },
      })),
    };
  }, [faqs, featuredLimit, showAll]);

  const visibleFaqs = useMemo(() => {
    if (featuredLimit && !showAll && !searchQuery.trim() && selectedCategory === 'all') {
      return filteredFaqs.slice(0, featuredLimit);
    }
    return filteredFaqs;
  }, [filteredFaqs, featuredLimit, showAll, searchQuery, selectedCategory]);

  return (
    <section
      id="medspa-bookkeeping-faq"
      className="py-14 lg:py-20 bg-[#FDFCFA] border-t border-b border-[#E2E8F0] relative overflow-hidden"
    >
      {/* Schema.org FAQPage Structured Data */}
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Background subtle ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          {/* The page title sits above when hideHeading is set; keep a heading level between it and the questions. */}
          {hideHeading && <h2 className="sr-only">Frequently asked questions</h2>}
          {!hideHeading && (
            <>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1A2E40] text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Questions, clear answers</span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">
                Common Questions From Practice Owners
              </h2>
            </>
          )}

          <p className="text-lg text-[#4A5568] leading-relaxed">
            Search or browse by topic. The "Sound Familiar?" tab covers the most common frustrations practice owners describe.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A6578]">
              <Search className="w-4 h-4 text-[#5A6578]" />
            </div>
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bookkeeping questions…"
              aria-label="Search bookkeeping questions"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-base text-[#1A2E40] placeholder-[#6B7280] shadow-xs outline-none transition-all"
            />
            {searchQuery && (
              <button
                id="faq-clear-search-btn"
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A0AEC0] hover:text-[#57534E]"
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
                  onClick={() => { setSelectedCategory(cat.id); setOpenId(null); }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A2E40] text-white shadow-sm font-semibold'
                      : 'bg-white text-[#57534E] border border-[#E2E8F0] hover:border-[#D4AF37]/50 hover:text-[#1A2E40]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-sm px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#1A2E40] font-bold'
                        : 'bg-[#F2EFE9] text-[#5A6578]'
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
              <p className="text-base text-[#5A6578] max-w-md mx-auto">
                No questions match "{searchQuery}". Try a different keyword or reset your filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setOpenId(null);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAF8F5] border border-[#E2E8F0] text-sm font-semibold text-[#1A2E40] hover:bg-[#F2EFE9] cursor-pointer"
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
                        <span className="inline-block text-sm font-semibold text-[#7A6200] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
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
                            : 'bg-[#FAF8F5] text-[#5A6578]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Always in the page (closed answers are hidden), so search engines can read every answer
                        and the FAQPage structured data matches what is on the page. */}
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      hidden={!isOpen}
                      className="px-5 sm:px-6 pb-6 pt-1 text-[#57534E] border-t border-[#F2EFE9] space-y-4 text-base leading-relaxed animate-in fade-in duration-150"
                    >
                      <div className="space-y-3 text-[#4A5568] whitespace-pre-line">
                        {faq.answer}
                      </div>

                      {faq.takeaways && faq.takeaways.length > 0 && (
                        <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] space-y-2.5">
                          <p className="text-sm font-bold uppercase tracking-wider text-[#1A2E40] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                            KEY TAKEAWAYS FOR MEDSPA AND AESTHETIC PRACTICES
                          </p>
                          <ul className="space-y-1.5">
                            {faq.takeaways.map((takeaway, tIdx) => (
                              <li
                                key={tIdx}
                                className="flex items-start gap-2 text-base text-[#4A5568]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                <span>{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Show All / Show Less Controls for Homepage Flow */}
              {featuredLimit && !searchQuery.trim() && selectedCategory === 'all' && (
                <div className="text-center pt-3">
                  {!showAll && onViewAll ? (
                    // Goes to the full FAQ page, so it is a real link.
                    <a
                      href="/faq"
                      onClick={(e) => { e.preventDefault(); onViewAll(); }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#D4AF37]/50 text-[#1A2E40]! hover:bg-[#FAF8F5] text-base font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <span>View All {faqs.length} Frequently Asked Questions</span>
                      <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
                    </a>
                  ) : !showAll ? (
                    <button
                      type="button"
                      onClick={() => setShowAll(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#D4AF37]/50 text-[#1A2E40] hover:bg-[#FAF8F5] text-base font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <span>View All {faqs.length} Frequently Asked Questions</span>
                      <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowAll(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-[#5A6578] hover:text-[#1A2E40] transition-colors cursor-pointer"
                    >
                      <span>Show Fewer Questions</span>
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom Callout Banner */}
        {showCta && (
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A2E40] to-[#122230] text-white border border-[#D4AF37]/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              FINANCIAL CLARITY STARTS HERE
            </span>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Have a specific question about your books?
            </h4>
            <p className="text-sm sm:text-base text-[#E2E8F0] max-w-xl font-light leading-relaxed">
              Every MedSpa, aesthetic clinic, and wellness practice has unique financial needs. Book a complimentary 20-minute Financial Clarity Call to discuss your QuickBooks setup, historical cleanup, monthly bookkeeping, or financial reporting needs.
            </p>
          </div>

          <a href="/contact"
            id="faq-bottom-book-call-btn"
            onClick={(e) => { e.preventDefault(); onBookCall(); }}
            className="shrink-0 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-sm transition-all shadow-md hover:shadow-lg border border-[#FFF5DE]/60 flex items-center justify-center gap-2 group active:scale-[0.99] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1A2E40]" />
            <span>Book Your Free 20-Min Clarity Call</span>
            <ArrowRight className="w-4 h-4 text-[#1A2E40] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
        )}
      </div>
    </section>
  );
};
