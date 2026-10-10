import React from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';
import { pathFor } from '../router';
import { RelatedArticles } from './RelatedArticles';

/** Text with inline links written as [label](page), e.g. "a [QuickBooks cleanup](quickbooks-cleanup) first". */
type RichText = string;

export interface ServiceDetailContent {
  eyebrow: string;
  h1: string;
  heroLine: string;
  intro: RichText[];
  /** Who the service is for. */
  forTitle: string;
  forItems: string[];
  includedTitle: string;
  includedIntro?: RichText;
  included: Array<{ title: string; body: RichText }>;
  /** A section specific to the topic (med spa details, account structure, KPIs). */
  detail: { title: string; intro?: RichText; items: Array<{ title: string; body: RichText }>; note?: RichText };
  stepsTitle: string;
  steps: Array<{ title: string; body: RichText }>;
  stepsNote?: RichText;
  costTitle: string;
  cost: RichText[];
  related: { heading: string; slugs: string[] };
}

const linkClass =
  'font-semibold text-[#1A2E40]! underline! decoration-[#D4AF37]! underline-offset-4 hover:text-[#8A6A00]!';

interface ServiceDetailPageProps {
  content: ServiceDetailContent;
  onNavigate: (page: PageView) => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ content: c, onNavigate, onBookCall, onReadPost }) => {
  const rich = (text: RichText) =>
    text.split(/(\[[^\]]+\]\([a-z-]+\))/g).map((part, i) => {
      const m = part.match(/^\[([^\]]+)\]\(([a-z-]+)\)$/);
      if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
      const page = m[2] as PageView;
      return (
        <a key={i} href={pathFor(page)} onClick={(e) => { e.preventDefault(); onNavigate(page); }} className={linkClass}>
          {m[1]}
        </a>
      );
    });

  const bookButton = (
    <a href="/contact"
      onClick={(e) => { e.preventDefault(); onBookCall(); }}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-base transition-all shadow-[0_4px_14px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60 cursor-pointer"
    >
      <Calendar className="w-4 h-4" />
      Book Your Free 20-Min Clarity Call
      <ArrowRight className="w-4 h-4" />
    </a>
  );

  return (
    <>
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">{c.eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">{c.h1}</h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light">{c.heroLine}</p>
        </div>
      </div>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-base sm:text-lg text-[#4A5568] leading-relaxed">
          {c.intro.map((p, i) => <p key={i}>{rich(p)}</p>)}
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">{c.forTitle}</h2>
          <ul className="mt-8 space-y-3">
            {c.forItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-[#4A5568] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-1" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight">{c.includedTitle}</h2>
            {c.includedIntro && <p className="mt-3 text-lg text-[#4A5568] leading-relaxed">{rich(c.includedIntro)}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.included.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white border border-[#E2E8F0] p-6">
                <h3 className="text-xl font-serif font-bold text-[#1A2E40]">{f.title}</h3>
                <p className="mt-2 text-base text-[#4A5568] leading-relaxed">{rich(f.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">{c.detail.title}</h2>
          {c.detail.intro && <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">{rich(c.detail.intro)}</p>}
          <dl className="mt-8 space-y-6">
            {c.detail.items.map((d) => (
              <div key={d.title}>
                <dt className="text-lg font-serif font-bold text-[#1A2E40]">{d.title}</dt>
                <dd className="mt-1 text-base text-[#4A5568] leading-relaxed">{rich(d.body)}</dd>
              </div>
            ))}
          </dl>
          {c.detail.note && <p className="mt-8 text-base text-[#4A5568] leading-relaxed">{rich(c.detail.note)}</p>}
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-[#FDFCFA] border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">{c.stepsTitle}</h2>
          <ol className="mt-8 space-y-5">
            {c.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A2E40] text-[#D4AF37] flex items-center justify-center shrink-0 font-bold" aria-hidden="true">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#1A2E40]">{s.title}</h3>
                  <p className="mt-1 text-base text-[#4A5568] leading-relaxed">{rich(s.body)}</p>
                </div>
              </li>
            ))}
          </ol>
          {c.stepsNote && <p className="mt-8 text-base text-[#4A5568] leading-relaxed">{rich(c.stepsNote)}</p>}
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A2E40] leading-tight text-center">{c.costTitle}</h2>
          {c.cost.map((p, i) => (
            <p key={i} className="text-base sm:text-lg text-[#4A5568] leading-relaxed">{rich(p)}</p>
          ))}
          <div className="pt-2 text-center">{bookButton}</div>
        </div>
      </section>

      <RelatedArticles heading={c.related.heading} slugs={c.related.slugs} onReadPost={onReadPost} />
    </>
  );
};

export const MONTHLY_BOOKKEEPING: ServiceDetailContent = {
  eyebrow: 'Ongoing QuickBooks Online Bookkeeping',
  h1: 'Monthly Bookkeeping for Med Spas',
  heroLine:
    'A dependable monthly close for med spas, medical spas, aesthetic clinics and wellness practices, with reports by the 15th of the following month. Plans from $497/mo.',
  intro: [
    'Monthly bookkeeping keeps your QuickBooks Online file current: every bank, credit card and financing account reconciled, every transaction categorized, and a Profit & Loss and Balance Sheet you can rely on each month. For a med spa it also means getting right the parts a generalist bookkeeper tends to miss: payouts from booking software, prepaid packages and memberships, treatment product cost and provider pay.',
    'Monique Reid Bookkeeping works only in QuickBooks Online and only with self-pay healthcare practices: med spas, aesthetic clinics, IV hydration and wellness practices, and medical weight-loss clinics. The practice is based in Fort Lauderdale and works with clients in [South Florida](south-florida), across Florida and nationwide.',
    'If your books are months behind, a [QuickBooks cleanup](quickbooks-cleanup) comes first. Monthly bookkeeping then keeps them current, so the backlog does not build up again.',
  ],
  forTitle: 'Who monthly bookkeeping is for',
  forItems: [
    'Owners who want current books every month instead of a scramble before tax season',
    'Practices whose books are caught up (or have just been cleaned up) and need to stay that way',
    'Med spas running memberships, prepaid packages or patient financing alongside regular treatments',
    'Practices with several booking or payment platforms, accounts or locations to keep in step',
    'Owners whose current reports do not show which services are actually worth keeping',
  ],
  includedTitle: 'What happens every month',
  includedIntro:
    'The core of every plan. What is included beyond this depends on your plan and the complexity of your practice.',
  included: [
    {
      title: 'Account reconciliations',
      body: 'Every operating bank account, credit card and active financing account is reconciled to its statement, so the balances in QuickBooks match the bank.',
    },
    {
      title: 'Categorization and recurring expenses',
      body: 'Transactions are categorized to a chart of accounts built for aesthetic practices, and recurring expenses are checked so items aren\'t missed or double-counted.',
    },
    {
      title: 'Booking and payment payouts',
      body: 'Deposits from Boulevard, Vagaro, Square, Stripe and similar platforms often combine services, retail, tips, refunds and fees in one amount. Platform reports, merchant statements and deposits are compared so revenue and fees are recorded separately.',
    },
    {
      title: 'Open items followed up',
      body: 'Uncleared items, outstanding checks and anything that needs an answer from you are listed and followed up, instead of piling up in a suspense account.',
    },
    {
      title: 'Monthly statements',
      body: 'A Profit & Loss and a Balance Sheet for every month, delivered by the 15th of the following month, with a plain-English summary of notable trends and changes on plans that include it.',
    },
    {
      title: 'Year-end package for your CPA',
      body: 'An organized year-end package for your CPA or tax professional, who stays responsible for tax advice, planning and returns.',
    },
  ],
  detail: {
    title: 'What makes med spa books different',
    intro:
      'A general bookkeeper can get the bank balance to match. Monthly bookkeeping for a med spa also has to handle how aesthetic practices actually earn and spend:',
    items: [
      {
        title: 'Memberships, packages and gift cards',
        body: 'Each month, new package and membership sales are added to what the practice still owes in treatments, and delivered treatments move out of it into income. The method is agreed with your CPA, so a big promotion month does not look like a big profit month.',
      },
      {
        title: 'Patient financing',
        body: 'When a Cherry, CareCredit or PatientFi payout arrives each month, it is matched to the treatments it paid for. The sale is recorded at its full price and the financing fee as its own cost, so the deposit does not understate what you earned.',
      },
      {
        title: 'Treatment product cost',
        body: 'Neurotoxin, filler, skincare and other supplies are recorded as cost of the treatments they support rather than general expenses, so margin by service line is visible.',
      },
      {
        title: 'Provider pay',
        body: 'Commissions, injector percentages and 1099 contractor payouts are reconciled, so provider cost is matched to the revenue it produced.',
      },
      {
        title: 'Sales tax',
        body: 'Sales tax is kept separate from operating revenue. Which treatments, products and packages are taxable is decided by your CPA or sales-tax advisor.',
      },
    ],
    note: 'Want reports beyond the monthly statements, such as revenue by treatment, margins and cash flow? See [financial reporting for med spas](financial-reporting).',
  },
  stepsTitle: 'How a month works',
  steps: [
    {
      title: 'Access and records',
      body: 'Work runs from your QuickBooks Online file, bank and card feeds, and the reports from your booking and payment software.',
    },
    {
      title: 'Reconcile and categorize',
      body: 'Accounts are reconciled, transactions categorized, and payouts matched to the platform reports behind them.',
    },
    {
      title: 'Your questions list',
      body: 'Anything only you can answer, such as an unfamiliar charge, a transfer or a refund, comes to you as one short list.',
    },
    {
      title: 'Monthly reports',
      body: 'Your Profit & Loss and Balance Sheet for the month, delivered by the 15th of the following month, plus the summary on plans that include it.',
    },
    {
      title: 'Year-end handover',
      body: 'At year end, an organized package goes to your CPA, and bookkeeping questions are answered when you authorize it.',
    },
  ],
  stepsNote:
    'Getting started typically needs QuickBooks Online access, bank and credit card statements, merchant-processing reports, payroll summaries and reports from your practice-management software. After a first review, you get a clear list of anything else needed.',
  costTitle: 'What monthly bookkeeping costs',
  cost: [
    'Monthly plans start at $497/mo. Your price depends on monthly transaction volume, the number of bank and credit card accounts, the booking and payment platforms you use, the number of locations, and how much reporting you need.',
    'Plans are Essential for solo practitioners and new clinics with a straightforward account structure, Growth for practices running memberships, patient financing or several platforms, and Full-Spectrum for high-volume or multi-location practices. Compare them on the [pricing page](pricing). After a free Financial Clarity Call and a first review, you receive a defined scope and proposal before work begins.',
  ],
  related: {
    heading: 'Guides to the monthly work',
    slugs: [
      'medspa-month-end-close-checklist-quickbooks',
      'reconcile-boulevard-vagaro-quickbooks',
      'medspa-membership-revenue-quickbooks',
      'record-cherry-carecredit-financing-quickbooks',
      'medspa-provider-commission-bookkeeping',
    ],
  },
};

export const QUICKBOOKS_SETUP: ServiceDetailContent = {
  eyebrow: 'QuickBooks Online Setup & Chart of Accounts',
  h1: 'QuickBooks Setup for Med Spas',
  heroLine:
    'A QuickBooks Online setup built around how a med spa earns and spends, for new practices and for practices that have outgrown a generic setup.',
  intro: [
    "QuickBooks Online's default setup is made for a generic small business. A med spa needs more than that. Injectables, laser, memberships and retail skincare earn in different ways, and neurotoxin, filler and medical consumables are costs of delivering treatments, not general overhead. When QuickBooks is set up for that from the start, your reports show what each part of the practice actually earns.",
    'This setup is for practitioners launching a new med spa, aesthetic clinic, wellness suite or medical weight-loss clinic, and for established practices that have outgrown an off-the-shelf setup. It is done by a Certified Intuit ProAdvisor who works only with self-pay healthcare practices.',
    'Setup builds the structure going forward. If your existing file already has months of miscategorized history, that is a [QuickBooks cleanup](quickbooks-cleanup), which includes restructuring the chart of accounts as part of correcting the past.',
  ],
  forTitle: 'When a QuickBooks setup makes sense',
  forItems: [
    'You are opening a med spa, aesthetic clinic, wellness suite, IV hydration or medical weight-loss practice',
    'Your QuickBooks file still uses default categories, so treatments, products and supplies all land in a few generic lines',
    'You have added a service line, a location or a booking platform and the books did not change with it',
    'Your reports cannot show revenue or cost by treatment type',
    'Your CPA has asked for books organized in a way the current file cannot produce',
  ],
  includedTitle: 'What the setup includes',
  included: [
    {
      title: 'Company file and permissions',
      body: 'Your QuickBooks Online company file, preferences and user permissions configured for the owner, the clinic manager and anyone else who needs access.',
    },
    {
      title: 'A chart of accounts for aesthetic practices',
      body: 'Accounts organized across clinical treatments, medical consumables, operating overhead and administrative costs, so revenue and the costs behind it line up.',
    },
    {
      title: 'Bank, card and merchant feeds',
      body: 'Bank, credit card and merchant gateway feeds connected and validated, with categorization rules for the transactions that repeat every month.',
    },
    {
      title: 'Booking and POS mapping',
      body: 'Boulevard, Vagaro, Jane App, Mindbody, Square or Stripe mapped to QuickBooks, so payouts can be reconciled cleanly each month.',
    },
    {
      title: 'Products and services list',
      body: 'A product and service item catalog with sales-tax mapping based on your guidance and the rules that apply. Your CPA or sales-tax advisor decides what is taxable.',
    },
    {
      title: 'Opening balances and walkthrough',
      body: "Owner contributions, capital funding and fixed-asset schedules recorded, then a walkthrough of the finished file for the owner or clinic manager.",
    },
  ],
  detail: {
    title: 'How a med spa chart of accounts is organized',
    intro:
      'The chart of accounts is the list of categories every transaction is sorted into. It decides what your reports can tell you. A setup for a med spa typically separates these groups:',
    items: [
      {
        title: 'Revenue by service line',
        body: 'Separate income accounts for the services you offer, such as injectables, laser, IV hydration, wellness infusions, medical weight-loss, retail skincare and memberships, so one income line does not hide which services drive the practice.',
      },
      {
        title: 'Cost of treatments',
        body: 'Neurotoxin, filler and specialty medical consumables recorded as the cost of the treatments they are used in, with retail product cost kept apart from back-bar supplies.',
      },
      {
        title: 'Provider compensation',
        body: 'Commissions, injector percentages and contractor payouts in their own accounts, so provider cost can be compared with the revenue it produced.',
      },
      {
        title: 'Prepaid packages, gift cards and memberships',
        body: 'Liability accounts for amounts paid before treatments are delivered, set up with the approach your CPA agrees.',
      },
      {
        title: 'Processing and financing fees',
        body: 'Merchant processing fees and patient financing fees (Cherry, CareCredit, PatientFi) as their own expenses, so revenue can be recorded at the full sale amount.',
      },
      {
        title: 'Operating overhead',
        body: 'Rent, staff, marketing, software and administrative costs grouped so overhead can be tracked as a share of revenue over time.',
      },
    ],
    note: 'The exact accounts depend on your services and how you want to see the business. They are agreed with you, and anything with tax consequences is coordinated with your CPA.',
  },
  stepsTitle: 'How the setup works',
  steps: [
    {
      title: 'Free 20-minute Zoom call',
      body: 'Talk through your services, locations, booking and payment platforms, and what you need your reports to show.',
    },
    {
      title: 'Scope and proposal',
      body: 'A defined scope for the setup and a proposal before any work begins.',
    },
    {
      title: 'Build',
      body: 'The company file, chart of accounts, item catalog and opening balances are set up around your practice.',
    },
    {
      title: 'Connect and validate',
      body: 'Bank, card and merchant feeds are connected and checked, and your booking and payment platforms are mapped for reconciliation.',
    },
    {
      title: 'Walkthrough',
      body: 'A walkthrough of the finished file for you or your clinic manager, so you know where everything lives.',
    },
  ],
  stepsNote:
    'After setup, [monthly bookkeeping](monthly-bookkeeping) keeps the file current inside the structure you just built.',
  costTitle: 'What a QuickBooks setup costs',
  cost: [
    'A QuickBooks setup is priced as a project, based on your services, accounts, platforms and locations. The scope and price are confirmed after a free Financial Clarity Call, before work begins.',
    'Monthly bookkeeping plans start at $497 per month if you want the books kept up after setup. See the [pricing page](pricing) for monthly plans and cleanup pricing.',
  ],
  related: {
    heading: 'Guides to setting up med spa books',
    slugs: [
      'medspa-chart-of-accounts-quickbooks',
      'track-neurotoxin-filler-costs-quickbooks',
      'reconcile-boulevard-vagaro-quickbooks',
      'medspa-membership-revenue-quickbooks',
    ],
  },
};

export const FINANCIAL_REPORTING: ServiceDetailContent = {
  eyebrow: 'Reports Built for Practice Owners',
  h1: 'Financial Reporting for Med Spas',
  heroLine:
    'Plain-language monthly reports on the numbers that drive a med spa: revenue by treatment, treatment costs, provider pay, margins and cash flow.',
  intro: [
    'Many practice owners get a Profit & Loss that answers the tax question and little else. Financial reporting for a med spa should answer the owner\'s questions: which treatments make money, what product and provider pay really cost, where the cash went, and whether a busy month was also a profitable one.',
    'A full treatment calendar does not automatically mean profit. Prepaid packages and memberships bring in cash before the treatments are delivered. Neurotoxin and filler costs are not always matched to the revenue they produced. Patient financing fees quietly reduce margins, and provider commissions move with the schedule. Reporting built on organized books makes all of that visible.',
    'Reports are designed for med spa, aesthetic and wellness practice owners, not only for tax preparation. They are always paired with [monthly bookkeeping](monthly-bookkeeping), because a report is only as reliable as the books underneath it.',
  ],
  forTitle: 'Who financial reporting is for',
  forItems: [
    'Owners who cannot tell from their current reports which services are worth keeping',
    'Practices where the bank balance looks fine but something never adds up',
    'Owners planning a hire, a new provider, an equipment lease or a second location',
    'Practices whose revenue all sits in one income line, so treatment margins are invisible',
    'Owners who want to compare this month and quarter with the last, in plain English',
  ],
  includedTitle: 'What the reports show',
  included: [
    {
      title: 'Revenue by treatment type',
      body: 'Collections split by service line: injectables, laser, IV hydration, wellness infusions, medical weight-loss, retail skincare and memberships.',
    },
    {
      title: 'Treatment and service-line margins',
      body: 'What each service line earns after the product and supplies it uses, where cost records and inventory data allow.',
    },
    {
      title: 'Period comparisons',
      body: 'Month-over-month and quarter-over-quarter trends, so a change shows up while there is still time to act on it.',
    },
    {
      title: 'Balance Sheet',
      body: 'A monthly Balance Sheet with clear visibility into assets, liabilities, including treatments still owed on prepaid packages, and retained earnings.',
    },
    {
      title: 'Cash flow',
      body: 'Cash-flow reporting you can use when planning hiring, provider compensation, equipment leases and expansion.',
    },
    {
      title: 'Plain-language summary',
      body: 'A short summary of notable changes, overhead ratios and areas to watch, written for an owner rather than an accountant.',
    },
  ],
  detail: {
    title: 'The numbers that matter most',
    intro:
      'Five figures sit at the center of med spa reporting. Each is shown in the [example dashboard](dashboard) with sample figures:',
    items: [
      {
        title: 'Gross collections',
        body: 'Everything the practice collected for treatments, products and memberships, recorded at the full amount before processing and financing fees come out.',
      },
      {
        title: 'Treatment cost of goods sold',
        body: 'The direct clinical supplies used to deliver treatments, such as neurotoxin, filler and consumables, kept apart from retail product and general overhead.',
      },
      {
        title: 'Provider compensation',
        body: 'Commissions, injector percentages and provider pay, compared with the revenue they produced.',
      },
      {
        title: 'Operating expenses and overhead',
        body: 'Rent, staff, marketing, software and everything else it takes to keep the doors open, tracked as a share of collections over time.',
      },
      {
        title: 'Operating surplus',
        body: 'What is left after treatment cost, provider pay and overhead. This is the number that shows whether the practice is healthy, not the bank balance.',
      },
    ],
    note:
      'Three things distort these numbers most often in med spas: recording only the net deposit from card and financing payouts, mixing retail inventory with clinical supplies, and booking prepaid packages as income when they are paid. Reporting starts by getting those right. To estimate what a single treatment contributes after product cost, provider commission and payment fees, try the [treatment profit calculator](calculator).',
  },
  stepsTitle: 'How reporting works',
  steps: [
    {
      title: 'Books organized for reporting',
      body: 'Revenue and costs are recorded by service line in a chart of accounts built for your practice. If the books are behind, a [cleanup](quickbooks-cleanup) comes first.',
    },
    {
      title: 'Your platforms and data',
      body: 'Reports are built around your booking and payment platforms and the data they make available.',
    },
    {
      title: 'Monthly close',
      body: 'Accounts are reconciled and the month is closed through [monthly bookkeeping](monthly-bookkeeping), so the reports sit on checked numbers.',
    },
    {
      title: 'Monthly reports and summary',
      body: 'Reports for each month are delivered by the 15th of the following month, with comparisons against earlier periods.',
    },
  ],
  stepsNote:
    'Reports organize your bookkeeping records. They are not tax advice, valuation opinions or audits; your CPA remains responsible for tax work, and figures shown on this site are examples, not benchmarks for your practice.',
  costTitle: 'What financial reporting costs',
  cost: [
    'Financial reporting starts with the Growth plan at $797/month and is always paired with ongoing monthly bookkeeping. Growth includes month-over-month revenue reporting. Revenue by service category and plain-language financial commentary are part of the Full-Spectrum plan at $1,197/month. What each report can show also depends on your platforms and the data available.',
    'See the [pricing page](pricing) for plans. After a free Financial Clarity Call and a first review, you receive a defined scope and proposal before work begins.',
  ],
  related: {
    heading: 'Guides to reading your numbers',
    slugs: [
      'is-my-medspa-profitable-quickbooks-reports',
      'track-neurotoxin-filler-costs-quickbooks',
      'medspa-membership-revenue-quickbooks',
      'medspa-provider-commission-bookkeeping',
    ],
  },
};
