// Archived blog posts. NOT shown on the site.
// To bring one back: copy it into the array in blogPosts.ts after re-checking its facts and date.
import { BlogPost } from '../types';

export const archivedBlogPosts: BlogPost[] = [
  {
    id: 'post-004',
    slug: 'iv-hydration-business-bookkeeping',
    title: 'IV Hydration Business Bookkeeping: What Makes It Different From Other Healthcare Practices',
    metaTitle: 'IV Hydration Business Bookkeeping | QuickBooks for IV Drip Practices',
    metaDescription:
      'IV hydration practices have unique bookkeeping challenges: consumable supply COGS, mobile service revenue, and membership reconciliation. Learn how to handle them correctly in QuickBooks.',
    excerpt:
      'IV hydration is one of the fastest-growing segments in self-pay healthcare — and one of the most uniquely complex to book correctly. Consumable supplies, membership drip packages, mobile service revenue, and nurse contractor payments all create bookkeeping patterns you will not find in a standard small-business QuickBooks setup.',
    category: 'IV Hydration & Wellness',
    tags: ['IV Hydration', 'QuickBooks', 'Wellness Practice', 'COGS', 'Mobile Services'],
    publishedDate: '2026-10-01',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'IV drip treatment in a modern wellness clinic',
    content: [
      {
        type: 'intro',
        text: 'When a new IV hydration practice reaches out to us, they usually have one of two setups: either they have been running QuickBooks like a general retail business (badly) or they have handed everything to a general bookkeeper who has no idea what a Myers Cocktail is. IV hydration has its own financial fingerprint — high consumable COGS, tight margins on individual drips, mobile revenue that behaves differently from in-clinic revenue, and membership programs that require deferred revenue treatment. Here is what correct bookkeeping looks like for your IV hydration or wellness infusion practice.',
      },
      {
        type: 'heading',
        heading: 'The Core Difference: COGS Is Everything in IV Hydration',
      },
      {
        type: 'paragraph',
        text: 'In a traditional MedSpa, COGS might represent 15–25% of revenue — injectables, skincare supplies, laser consumables. In an IV hydration practice, COGS is much heavier as a percentage of revenue, often 30–45% depending on your drip menu. The primary COGS components are IV bags and saline solution, vitamins and additives (glutathione, NAD+, amino acids, B-complex), IV catheters and needles, tubing sets, alcohol swabs and supplies, and any medication (anti-nausea, pain relief) administered under a physician protocol.',
      },
      {
        type: 'paragraph',
        text: 'Getting these costs correctly tracked against revenue by service type — Basic Hydration, Myers Cocktail, NAD+ Drip, Immunity Boost — gives you the margin clarity to know which drips are worth keeping on the menu and which are eating your profit. QuickBooks should have a separate Cost of Goods Sold account for IV supplies, distinct from general operating expenses like rent and staffing.',
      },
      {
        type: 'heading',
        heading: 'Mobile IV Services: A Separate Revenue Stream',
      },
      {
        type: 'paragraph',
        text: 'Many IV hydration practices offer mobile services — sending a nurse to a client\'s home, hotel, or event. Mobile revenue needs to be tracked separately from in-clinic revenue for two reasons. First, the cost structure is different: mobile services carry travel time costs and potentially fuel or mileage reimbursement, which reduces the net margin versus an in-clinic drip. Second, sales tax treatment for mobile services may differ by jurisdiction depending on where the service is "delivered."',
      },
      {
        type: 'list',
        items: [
          'Create a separate Income account for "Mobile IV Services" versus "In-Clinic IV Services"',
          'Track mileage or travel fees as an Operating Expense under "Mobile Service Costs"',
          'If nurses are 1099 contractors, ensure their payments are in a Contractor Services expense account, not payroll',
          'For events and group bookings, record the full event fee as a single sales receipt or invoice against the event date',
        ],
      },
      {
        type: 'heading',
        heading: 'IV Hydration Memberships and Package Credits',
      },
      {
        type: 'paragraph',
        text: 'Membership programs in IV hydration — "Hydration Club" monthly subscriptions, pre-purchased drip bundles — follow the same deferred revenue rules as MedSpa memberships. When a member pays their monthly fee, that amount is a liability (Deferred Revenue) until the drip is administered. If a member\'s monthly drip is not redeemed, the revenue recognition timing depends on your membership contract terms — most practices recognize the revenue at month-end regardless of redemption, but this should be explicitly stated in your member agreement and consistently applied in your books.',
      },
      {
        type: 'callout',
        heading: 'NAD+ and High-Value Infusion Tracking',
        text: 'NAD+ therapy typically runs $300–$800 per session — a much higher price point than a standard hydration drip. If NAD+ represents more than 15% of your revenue, it warrants its own revenue line in QuickBooks. This lets you see NAD+ gross margin specifically, which usually runs tighter than standard drips due to the higher cost of the NAD+ itself. We typically set up a dedicated Income sub-account for high-value infusions in practices where NAD+ is a significant service line.',
      },
      {
        type: 'heading',
        heading: 'Nurse Contractor vs. Employee: The Payroll Distinction',
      },
      {
        type: 'paragraph',
        text: 'Most IV hydration practices use registered nurses or LPNs — either as employees or as 1099 independent contractors. The classification matters enormously for bookkeeping. Employees go through payroll: you withhold taxes, pay employer FICA, and report on W-2s. Contractors receive payment directly, no withholding, and get a 1099-NEC at year-end. Misclassifying employees as contractors is one of the most common and costly mistakes we correct in IV hydration practice cleanups — the IRS and state labor boards take it seriously.',
      },
      {
        type: 'paragraph',
        text: 'In QuickBooks, true contractor payments should go through the Vendors section, not payroll, and you should be tracking contractor totals so that anyone paid over $600 in a calendar year gets a 1099-NEC. QuickBooks Online has a 1099 tracking feature under the Contractor section — it should be turned on from day one.',
      },
      {
        type: 'heading',
        heading: 'Booking Platforms: Mindbody, Square, and Direct',
      },
      {
        type: 'paragraph',
        text: 'IV hydration practices commonly use Square, Mindbody, or their own booking link (often Acuity or Calendly with Stripe). Each platform batches and nets payments differently, and each requires the same gross-up reconciliation as Boulevard or Vagaro in a MedSpa. Record gross collections as income, fees as expenses, and reconcile the net deposit to your bank statement. Never record the net deposit as your revenue — you will understate income and make your processing costs invisible.',
      },
      {
        type: 'tip',
        heading: 'Starting Point for New Practices',
        text: 'If you are launching or in your first year, set up your QuickBooks chart of accounts correctly before you process a single transaction. The cleanup cost of correcting 12 months of mislabeled IV supply costs versus proper service-line revenue tracking is significant. Getting the structure right at the start is always the better investment.',
      },
    ],
  },

  {
    id: 'post-005',
    slug: 'medical-weight-loss-practice-bookkeeping',
    title: 'Medical Weight Loss Practice Bookkeeping: GLP-1 Revenue, Supplies, and Dispensing Fees in QuickBooks',
    metaTitle: 'Medical Weight Loss Practice Bookkeeping | GLP-1 QuickBooks Accounting',
    metaDescription:
      'Running a GLP-1 or medical weight loss practice? Learn how to correctly account for semaglutide dispensing fees, compounded medication COGS, and subscription program revenue in QuickBooks.',
    excerpt:
      'The GLP-1 and medical weight loss space has exploded — and the bookkeeping needs that come with it are unlike anything in a standard healthcare or MedSpa practice. Compounded semaglutide, tirzepatide dispensing fees, subscription billing, and physician oversight costs all need to be handled correctly in QuickBooks from day one.',
    category: 'Medical Weight Loss',
    tags: ['Medical Weight Loss', 'GLP-1', 'Semaglutide', 'QuickBooks', 'Compounding Pharmacy'],
    publishedDate: '2026-10-01',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Medical consultation and wellness clinic setting',
    content: [
      {
        type: 'intro',
        text: 'If you launched a medical weight loss program in the last two years — whether as a standalone practice or as an add-on to an existing MedSpa or wellness clinic — you are navigating a financial model that most bookkeepers have never encountered. GLP-1 medications like semaglutide and tirzepatide have created a new category of self-pay healthcare revenue with compounding pharmacy relationships, per-vial COGS, physician oversight fees, subscription billing, and regulatory considerations that all affect how your books need to be structured.',
      },
      {
        type: 'heading',
        heading: 'The Revenue Model: What You Are Actually Selling',
      },
      {
        type: 'paragraph',
        text: 'Most medical weight loss practices offer some combination of: an initial consultation fee, a monthly subscription or program fee that includes physician oversight and medication management, compounded semaglutide or tirzepatide dispensed directly or shipped from a compounding pharmacy, optional add-ons (B12 injections, MIC lipotropic injections, body composition assessments), and retail supplements.',
      },
      {
        type: 'paragraph',
        text: 'Each of these is a different type of revenue with different COGS and different recognition timing. A $299 monthly subscription that includes physician oversight, a check-in call, and dose titration guidance is a service fee earned over the month. A $199 vial of compounded semaglutide dispensed at pickup is a product sale with inventory cost. Treating both as the same "Revenue" line in QuickBooks obscures your actual margins.',
      },
      {
        type: 'heading',
        heading: 'Compounded Semaglutide COGS: How to Track It Correctly',
      },
      {
        type: 'paragraph',
        text: 'If you are sourcing compounded semaglutide or tirzepatide from a 503A or 503B compounding pharmacy, your per-unit cost is the cost of the vial or pen from the pharmacy. This is Cost of Goods Sold — not an operating expense. The distinction matters because COGS reduces your gross profit directly, while operating expenses reduce your net profit. Separating them gives you gross margin visibility: what percentage of your medication revenue stays after covering the medication itself.',
      },
      {
        type: 'list',
        items: [
          'Set up a dedicated COGS account: "Compounded Medication — GLP-1 Supplies"',
          'When you receive a shipment from the compounding pharmacy, record the invoice as COGS, not as a general expense',
          'If you maintain a medication inventory, the compounding pharmacy invoices go to an Inventory Asset account first, then move to COGS when dispensed',
          'Track by medication type if you carry both semaglutide and tirzepatide — their cost and margin profiles differ',
          'Shipping and cold-chain handling fees from the pharmacy should be included in COGS, not in operating expenses',
        ],
      },
      {
        type: 'heading',
        heading: 'Subscription Revenue and Monthly Program Fees',
      },
      {
        type: 'paragraph',
        text: 'Monthly subscription fees for medical weight loss programs should be treated as deferred revenue when billed in advance, recognized as earned over the subscription period. If a patient pays a $349 monthly program fee on the 1st and the month\'s services (physician oversight, dose management, access to your clinical team) are delivered throughout the month, you recognize the $349 as income over that month — not when it is collected.',
      },
      {
        type: 'paragraph',
        text: 'For practices using subscription billing platforms (Stripe, ChargeOver, or a weight loss EMR with built-in billing), the monthly charge will process and deposit net of processing fees. Apply the same gross-up reconciliation used for any other payment processor: record gross subscription revenue, record the processing fee as an expense, reconcile to the net deposit.',
      },
      {
        type: 'callout',
        heading: 'Physician Oversight Costs',
        text: 'If your medical weight loss practice operates under a physician medical director who provides oversight, prescribing authority, and protocol development, the cost of that relationship is an operating expense — typically under "Professional Services" or "Medical Director Fees." If the medical director is on payroll, it flows through payroll. If they are a contracted physician, they are a 1099 contractor and must be tracked for year-end reporting. Either way, this cost should be visible as a line item on your P&L, not buried in miscellaneous expenses.',
      },
      {
        type: 'heading',
        heading: 'Dispensing Fees vs. Medication Revenue',
      },
      {
        type: 'paragraph',
        text: 'Some medical weight loss practices charge a separate dispensing fee (the cost of the vial or pen) and a separate program/subscription fee. Others bundle everything into a single monthly price. The bundled approach is simpler administratively but harder to analyze — you cannot see what percentage of revenue is being consumed by medication COGS. Unbundled pricing, where the medication cost and the program oversight are separate line items, gives you much clearer financial visibility and makes it easier to adjust pricing as compounding pharmacy costs fluctuate.',
      },
      {
        type: 'heading',
        heading: 'The Regulatory Consideration That Affects Your Books',
      },
      {
        type: 'paragraph',
        text: 'The FDA has been actively managing the GLP-1 compounding landscape — shortage designations, 503B requirements, and the ongoing tension between compounding pharmacies and brand-name manufacturers affect both supply availability and the regulatory legality of the business model. This is not directly a bookkeeping issue, but it creates business risk that affects how your practice should be structured financially. We recommend ensuring your subscription agreement has clear terms around what happens to pre-paid fees if your medication supply is interrupted, and that your books reflect any refund liabilities accurately.',
      },
      {
        type: 'tip',
        heading: 'Add-On Revenue Tracking',
        text: 'B12 injections, lipotropic (MIC) injections, and body composition assessments are common add-ons in medical weight loss programs. Each has its own supply cost and should be tracked as a separate revenue and COGS line. A practice doing 50 B12 injections per week at $25 each is generating $65,000 per year in a single add-on — that revenue and its $0.50–$1.50 per unit supply cost deserve their own visibility in your financials.',
      },
      {
        type: 'paragraph',
        text: 'Medical weight loss is evolving faster than most niches we serve — pricing models, pharmacy relationships, and regulatory requirements are all in motion. Getting your QuickBooks foundation right now means you can adapt your business model without also having to rebuild your financial records from scratch when things change.',
      },
    ],
  },
  {
    id: 'post-001',
    slug: 'quickbooks-cleanup-for-medspas',
    title: 'QuickBooks Cleanup for MedSpas: What to Expect, What It Costs, and When You Actually Need It',
    metaTitle: 'QuickBooks Cleanup for MedSpas | Monique Reid Bookkeeping',
    metaDescription:
      'Is your MedSpa QuickBooks behind on reconciliations? Learn what cleanup bookkeeping involves, how long it takes, and what it costs for aesthetic and wellness practices.',
    excerpt:
      'Behind on QuickBooks? You are not alone. Many aesthetic practice owners do not realize how far behind they are until tax season hits. Here is exactly what cleanup bookkeeping involves and how to know if you need it.',
    category: 'QuickBooks & Cleanup',
    tags: ['QuickBooks', 'Cleanup', 'MedSpa', 'Catch-Up Bookkeeping', 'Aesthetic Practice'],
    publishedDate: '2026-10-01',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of a messy ledger page becoming a clean, reconciled one',
    content: [
      {
        type: 'intro',
        text: 'You opened your MedSpa to treat patients — not to wrestle with QuickBooks. But six months pass, then a year, and now your books are a mess: unreconciled bank accounts, Boulevard deposits lumped as one giant number, Cherry financing payouts sitting uncategorized, and a chart of accounts your accountant describes as "creative." Sound familiar? You need a QuickBooks cleanup. Here is exactly what that means, what it involves, and how to know when your practice needs one.',
      },
      {
        type: 'heading',
        heading: 'What Is QuickBooks Cleanup (and Catch-Up) Bookkeeping?',
      },
      {
        type: 'paragraph',
        text: 'Cleanup bookkeeping and catch-up bookkeeping are often used interchangeably, but they describe slightly different problems. Catch-up bookkeeping means your books have simply not been touched — transactions sit uncategorized, bank feeds have not been reviewed, and months of data are in their raw, unprocessed state. Cleanup bookkeeping means your books have been worked but worked incorrectly — sales are double-counted from both your POS system and your bank feed, membership dues are posted as revenue when collected rather than earned, or your entire chart of accounts is a single category called "Miscellaneous Income."',
      },
      {
        type: 'paragraph',
        text: 'Many aesthetic practices need both: the books have been partially touched but incorrectly handled. The goal of a proper cleanup is a set of financials your CPA can use to file taxes without corrections and that you can actually read to understand how your practice is performing.',
      },
      {
        type: 'heading',
        heading: 'The Specific Challenges That Make MedSpa Bookkeeping Harder to Clean Up',
      },
      {
        type: 'paragraph',
        text: 'A standard bookkeeper can handle a retail or consulting business with relatively generic methods. MedSpas, aesthetic clinics, and IV hydration practices have a set of financial complexities that require specialized knowledge to clean up correctly:',
      },
      {
        type: 'list',
        items: [
          'Boulevard, Vagaro, and Zenoti batch deposits — your POS system pays out net of processing fees, so the deposit in your bank account is never the same as your gross collections. Cleanup must reconcile each batch to the payout report, gross up the revenue, and separate the merchant fees.',
          'Cherry, CareCredit, and PatientFi financing — patient financing providers have their own remittance schedules and discount rates. Many practices post these as revenue when the payout arrives, missing the discount cost entirely.',
          'Membership dues and prepaid treatment packages — under accrual accounting, a monthly membership fee is generally treated as a liability (deferred revenue) when collected and becomes income as the corresponding service is delivered. Mishandling this overstates your income in the month you collect.',
          'Retail product sales — skincare, neurotoxin supplies, and retail COGS must be separated from service revenue so your margin by category is visible.',
          'Gratuities — tips collected through your POS flow through your bank account but are not your income. They need to pass through to staff correctly.',
        ],
      },
      {
        type: 'heading',
        heading: 'What Does a MedSpa QuickBooks Cleanup Cost, and How Long Does It Take?',
      },
      {
        type: 'paragraph',
        text: 'Cleanup is priced as a fixed fee based on how far behind the books are, so there are no hourly surprises. As a starting point: 1 to 3 months behind starts at $597, 4 to 6 months behind at $1,297, and 7 to 12 months behind at $1,997. Books that are more than 2 years behind, or that involve more than one business entity, are quoted individually after a free review.',
      },
      {
        type: 'paragraph',
        text: 'How long a cleanup takes depends on how many months are behind, the number of bank, card and financing accounts, and how quickly your POS payout reports, bank statements and prior accountant files are available. Timing is confirmed after the free review of your books, because a cleanup moves at the pace of the documentation.',
      },
      {
        type: 'callout',
        heading: 'What You Will Receive at the End of a Cleanup',
        text: 'Reconciled bank and credit card accounts for every month in scope. A corrected chart of accounts aligned to MedSpa-specific categories. Accurate Profit & Loss showing gross collections, COGS, provider compensation, and operating expenses separately. A clean Balance Sheet. And a set of books your CPA can actually use at tax time without spending hours fixing errors.',
      },
      {
        type: 'heading',
        heading: 'Signs Your MedSpa QuickBooks Needs a Cleanup',
      },
      {
        type: 'list',
        items: [
          'Your P&L shows one large "Uncategorized Income" or "Uncategorized Asset" line',
          'Your accountant sends back a list of adjusting entries every year',
          'Your bank balance in QuickBooks does not match your actual bank balance',
          'You cannot tell from your books which service line is most profitable',
          'You have not reconciled your accounts in more than 60 days',
          'Cherry and CareCredit payouts are posted as a single deposit with no fee separation',
          'Membership dues are all posted as income in the month collected',
        ],
      },
      {
        type: 'heading',
        heading: 'What Happens After the Cleanup Is Done?',
      },
      {
        type: 'paragraph',
        text: 'The cleanup gets you to zero — a set of accurate, current books. But clean books need ongoing maintenance to stay clean. Once the cleanup is complete, a monthly bookkeeping engagement ensures your records stay reconciled, your reporting stays current, and next tax season is straightforward rather than stressful. Think of cleanup as the renovation and monthly bookkeeping as the maintenance contract.',
      },
      {
        type: 'paragraph',
        text: 'If you are reading this and recognizing your own practice in the scenarios above, the right first step is a short conversation to scope what your specific situation requires. Every cleanup is different — the variables are the months behind, the number of bank and card accounts, the POS platforms you use, and whether QuickBooks itself is set up correctly in the first place.',
      },
    ],
  },
  {
    id: 'post-002',
    slug: 'reconcile-boulevard-vagaro-quickbooks',
    title: 'Reconciling Boulevard and Vagaro Deposits in QuickBooks: The Right Way for Aesthetic Practices',
    metaTitle: 'Reconcile Boulevard & Vagaro in QuickBooks | MedSpa Bookkeeping',
    metaDescription:
      'Boulevard and Vagaro pay out in batches, not per-service. Learn how to correctly reconcile POS deposits in QuickBooks for your MedSpa or aesthetic clinic so your books reflect true gross revenue.',
    excerpt:
      'If you are recording the deposit that hits your bank account as your revenue, your books are understating your true income and hiding your processing costs. Here is how Boulevard and Vagaro reconciliation should actually work in QuickBooks.',
    category: 'POS & Reconciliation',
    tags: ['Boulevard', 'Vagaro', 'QuickBooks', 'Reconciliation', 'MedSpa', 'POS Deposits'],
    publishedDate: '2026-10-01',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of a card terminal and a payout split into sales, fees and tips',
    content: [
      {
        type: 'intro',
        text: 'If you use Boulevard or Vagaro to book appointments and collect payments, you already know the system works beautifully for scheduling and client management. What most practice owners do not realize is that the deposit hitting your business checking account from these platforms is not your revenue — it is your revenue minus merchant processing fees, minus any chargebacks or refunds, possibly minus tips that will be paid out to staff. Recording that deposit directly as income in QuickBooks is a common and costly mistake for aesthetic practice owners.',
      },
      {
        type: 'heading',
        heading: 'Why the Bank Deposit Is Not Your Revenue',
      },
      {
        type: 'paragraph',
        text: 'Platforms like Boulevard and Vagaro batch your transactions and send a deposit to your bank account on a payout schedule that depends on your processor and settings, usually a day or more after the transactions occur. By the time that deposit lands in your account, the platform has already deducted its processing fees. Card processing fees commonly fall somewhere around 2.5% to 3.5% per transaction depending on your plan and card type, so check your own rate. It may also have applied refunds issued during that period.',
      },
      {
        type: 'paragraph',
        text: 'When you record that net deposit as income, two things go wrong: your revenue is understated (you are only reporting the net, not what patients actually paid), and your merchant processing fees become invisible in your books. Those fees are a real operating cost. For a practice doing $80,000 a month in card volume, a 2.9% processing rate (an example, not your rate) is $2,320 per month in fees — $27,840 per year. That is a significant line item that should appear on your Profit & Loss.',
      },
      {
        type: 'heading',
        heading: 'The Correct Method: Gross Up and Separate',
      },
      {
        type: 'paragraph',
        text: 'The correct approach has three components. First, your revenue entries should reflect gross collections — what patients paid before any platform deductions. Second, the processing fees should be recorded as a separate expense. Third, the bank deposit (the net amount) ties everything together in reconciliation.',
      },
      {
        type: 'list',
        items: [
          'Download the payout or deposit report from your platform. It should show gross sales, processing fees, refunds, and the net deposit for each payout',
          'In QuickBooks, record an income entry for the gross sales amount against your Service Revenue account (or your specific revenue accounts by service type)',
          'Record the processing fee as a separate expense — typically to a "Merchant Processing Fees" or "Payment Processing Fees" account under Operating Expenses',
          'Record any refunds as a deduction from revenue in the period they were issued',
          'Reconcile the net deposit that arrives in your bank account against your bank feed',
        ],
      },
      {
        type: 'callout',
        heading: 'Use the payout report, not the sales summary',
        text: 'Whatever platform you use, work from its payout or deposit report rather than the sales summary. The sales summary shows when transactions were collected, not when they were paid out, which creates timing differences in reconciliation. If you have more than one location, expect separate payouts for each. Report names and menu locations differ by platform and change over time, so check your platform for the current names.',
      },
      {
        type: 'heading',
        heading: 'Handling Tips Through Boulevard and Vagaro',
      },
      {
        type: 'paragraph',
        text: 'Tips collected through your POS system pass through your bank account but belong to your staff members. They should not appear as income on your P&L, and they should not appear as a labor expense either — they are a liability you collect and pay out. A common treatment is to record tips received as a current liability (a "Tips Payable" account on your Balance Sheet) and then clear that liability when you pay tips to staff through payroll or direct payment. How tips are paid out and reported depends on how your staff are classified, so confirm the details with your CPA or payroll provider.',
      },
      {
        type: 'paragraph',
        text: 'Many practices skip this step and either ignore tips entirely or run them through as income and then as an expense, which can create avoidable tax and payroll reporting problems.',
      },
      {
        type: 'heading',
        heading: 'What About Vagaro Marketplace vs. Direct Payments?',
      },
      {
        type: 'paragraph',
        text: 'If some of your bookings come through a marketplace feature on your platform (where clients discover and book you through the platform consumer app), the fees on those bookings may differ from fees on clients who book you directly. Check your fee statements or payout detail to see the breakdown by transaction type. This matters if you want accurate cost-per-booking data.',
      },
      {
        type: 'heading',
        heading: 'Setting Up QuickBooks for Correct POS Reconciliation',
      },
      {
        type: 'paragraph',
        text: 'If you are starting from scratch or correcting a messy setup, the chart of accounts for a MedSpa should have at minimum: separate revenue accounts for Services and Retail Products, a Merchant Processing Fees expense account, a Tips Payable liability account, and a cleared account (sometimes called a Clearing Account or Undeposited Funds) that holds your POS collections until the batch deposit posts.',
      },
      {
        type: 'paragraph',
        text: 'The undeposited funds approach mirrors what actually happens — you earn revenue at the point of service, it sits in a clearing account representing "money collected but not yet in the bank," and then when the batch deposit arrives, it clears the undeposited funds account and matches the bank deposit. This is cleaner than recording income only when the deposit arrives, because the timing difference can cause month-end discrepancies.',
      },
      {
        type: 'tip',
        heading: 'Quick Check',
        text: 'In QuickBooks, run a Profit & Loss for last month and look at your Total Income line. Then look at your bank statement deposits from Boulevard or Vagaro for that same month. If the income number in QuickBooks is the same as what was deposited, your books are recording net deposits as revenue. The income number in QuickBooks should generally be higher than what was deposited. The difference is mostly your processing fees, and may also include refunds and tips.',
      },
      {
        type: 'paragraph',
        text: 'Getting POS reconciliation right is foundational work. Everything else in your books — service-line profitability, provider performance, tax filing — depends on this being done correctly. If you inherited a QuickBooks file where this has been handled incorrectly, a cleanup is the only way to correct the historical record and get to reliable numbers.',
      },
    ],
  },
  {
    id: 'post-003',
    slug: 'medspa-membership-revenue-quickbooks',
    title: 'MedSpa Membership Revenue in QuickBooks: Why So Many Practices Get It Wrong',
    metaTitle: 'MedSpa Membership Revenue in QuickBooks | Correct Accounting',
    metaDescription:
      'Monthly membership dues are not revenue until the service is delivered. Learn how to correctly account for MedSpa and aesthetic clinic membership revenue in QuickBooks Online.',
    excerpt:
      'Collecting a monthly membership fee and posting it straight to income is a common MedSpa accounting error, and it can overstate your revenue every month. Here is the correct approach.',
    category: 'Revenue & Memberships',
    tags: ['Memberships', 'Deferred Revenue', 'QuickBooks', 'Revenue Recognition', 'MedSpa', 'Packages'],
    publishedDate: '2026-10-05',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of a calendar and recurring membership payments',
    content: [
      {
        type: 'intro',
        text: 'Membership programs have become one of the most powerful growth tools for MedSpas and aesthetic clinics — predictable recurring revenue, improved patient retention, and a steady cash flow that does not depend entirely on appointment volume. But many practices that run memberships account for them incorrectly in QuickBooks. The result is financial statements that overstate income, a Balance Sheet that does not reflect outstanding obligations to members, and potential problems at tax time. Here is what is actually happening and how to fix it.',
      },
      {
        type: 'heading',
        heading: 'The Problem: Recording Membership Dues as Income When Collected',
      },
      {
        type: 'paragraph',
        text: 'Here is the scenario: your practice has 60 members paying $199 per month for a membership that includes one neurotoxin treatment and 15% off additional services. On the first of the month, $11,940 hits your bank account. You open QuickBooks, match the deposit, and post it to Service Revenue. It looks like $11,940 in income. The problem is that this is not income yet.',
      },
      {
        type: 'paragraph',
        text: 'What you have actually received is a payment for a service you have not yet delivered. Until each of those 60 members comes in and receives their monthly treatment, you owe them that service. In accounting terms, collected but unearned revenue is a liability — specifically, deferred revenue. It belongs on your Balance Sheet under Current Liabilities, not on your Profit & Loss as earned income.',
      },
      {
        type: 'heading',
        heading: 'Why This Matters More Than It Might Seem',
      },
      {
        type: 'list',
        items: [
          'Overstated income — your P&L shows more income than you have actually earned, making your practice appear more profitable than it is in any given month',
          'Understated liabilities — your Balance Sheet does not reflect what you owe members, so if you ever sell the practice or seek financing, your financial picture is misleading',
          'Tax questions — how and when membership income is taxed depends on your tax accounting method, so ask your CPA how your memberships should be handled',
          'No visibility into utilization — if you do not track when members redeem their treatments, you cannot measure how many members are actually using their memberships (a critical performance metric)',
        ],
      },
      {
        type: 'heading',
        heading: 'The Correct Approach: Deferred Revenue',
      },
      {
        type: 'paragraph',
        text: 'The correct method is a two-step process. When you collect membership dues, you post the amount to a Deferred Revenue account (a current liability on your Balance Sheet). When a member visits and receives their included service, you move the corresponding amount from Deferred Revenue to Service Revenue on your P&L. This is called revenue recognition — you recognize income in the period the service is earned, not when the cash is received. If unused membership benefits expire, how and when that balance is recognized depends on your membership terms and your CPA’s guidance.',
      },
      {
        type: 'callout',
        heading: 'In QuickBooks Online: Setting Up Deferred Revenue',
        text: 'In your Chart of Accounts, add a new account and choose a current liability type (such as Other Current Liabilities). Name it "Membership Deferred Revenue" or "Prepaid Membership Dues." Your CPA can confirm the right setup for your file. When you collect monthly dues, create an invoice or sales receipt that posts to this liability account. When a member redeems their service, create a journal entry or a credit memo that reduces the liability and increases your Service Revenue account by the corresponding amount.',
      },
      {
        type: 'heading',
        heading: 'What About Prepaid Treatment Packages?',
      },
      {
        type: 'paragraph',
        text: 'The same principle applies to prepaid treatment packages — a patient who pays $1,500 for a package of six laser sessions has not yet received all six sessions. The full $1,500 should not post to income when collected. The correct treatment is to post the full payment to Deferred Revenue, then move $250 (one-sixth of the package price) to Service Revenue each time the patient completes a session.',
      },
      {
        type: 'paragraph',
        text: 'In practice, many practices track sessions in their POS system (Boulevard, Vagaro, and Jane App all have package tracking features) and use end-of-month POS reports to calculate how many sessions were redeemed and how much deferred revenue to recognize that month.',
      },
      {
        type: 'heading',
        heading: 'What About Patient Financing Through Cherry or CareCredit?',
      },
      {
        type: 'paragraph',
        text: 'When a patient finances a single treatment through Cherry or CareCredit, the service is delivered at the time of the procedure, so the revenue is earned then. The financing provider pays you (net of their discount or merchant fee) on their own schedule. The common error is posting income when the financing company pays you rather than when the service was delivered. If a patient receives a $2,000 treatment in October and Cherry sends you payment in November, the income belongs in October under accrual accounting, and the financing fee is recorded as a separate cost. If the patient finances a multi-session package, the earlier deferred revenue rules still apply to the sessions not yet delivered.',
      },
      {
        type: 'heading',
        heading: 'A Note on Cash vs. Accrual Accounting',
      },
      {
        type: 'paragraph',
        text: 'Everything above reflects accrual accounting, which gives a more accurate picture of performance for a practice with memberships and prepaid packages. Cash accounting, which records income when received and expenses when paid, is simpler but can make a membership-based practice look better or worse than it really is in a given month. Your tax accounting method and the way you view your books for management can be different, and small businesses are often allowed to use cash for taxes. Talk with your CPA about which method applies to your tax return and whether your management reports should be on an accrual basis.',
      },
      {
        type: 'tip',
        heading: 'Practical Starting Point',
        text: 'Run a report in your POS system that shows your outstanding package balances — the total of treatments sold but not yet redeemed. That number represents your approximate Deferred Revenue balance and should appear on your Balance Sheet. If it does not, your books are likely recognizing all membership and package income upfront.',
      },
      {
        type: 'paragraph',
        text: 'Correcting membership accounting is one of the highest-value improvements a MedSpa can make to its books. It takes some initial setup and a consistent month-end process, but the result is a financial picture you can actually trust — which is the whole point of keeping books in the first place.',
      },
    ],
  },
  {
    id: 'post-004',
    slug: 'track-neurotoxin-filler-costs-quickbooks',
    title: 'How to Track Neurotoxin and Filler Costs in QuickBooks (and See Your Real Margins)',
    metaTitle: 'Track Neurotoxin & Filler Costs in QuickBooks | MedSpa Bookkeeping',
    metaDescription:
      'Injectable costs buried in one Supplies account hide your true margins. Learn three ways to track neurotoxin and filler costs in QuickBooks for a MedSpa or aesthetic clinic.',
    excerpt:
      'If every neurotoxin and filler purchase lands in one Supplies account, you cannot see what each treatment really earns. Here are three practical ways to track injectable costs in QuickBooks and a simple month-end routine.',
    category: 'Costs & Inventory',
    tags: ['COGS', 'Inventory', 'Neurotoxin', 'Fillers', 'QuickBooks', 'MedSpa', 'Margins'],
    publishedDate: '2026-10-05',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of a vial, syringe and a cost versus revenue bar chart',
    content: [
      {
        type: 'intro',
        text: 'For many MedSpas, injectables are one of the largest direct costs in the business. Yet in a lot of QuickBooks files, every neurotoxin and filler order sits in one expense account called "Supplies," next to paper towels and gloves. The practice looks busy, the bank balance looks fine, and nobody can say what a unit of product really costs or which treatments earn the best margin. Here is how to separate those costs and what to track each month.',
      },
      {
        type: 'heading',
        heading: 'Why Treatment Costs Do Not Belong in "Supplies"',
      },
      {
        type: 'paragraph',
        text: 'Product that is used in a treatment is a direct cost of delivering that service. Gloves, gauze and cleaning products are overhead. When both sit in the same account, your Profit & Loss cannot show gross profit, which is the money left from a service after the product used to deliver it. Without gross profit by category, decisions about pricing, packages and which services to promote are guesses.',
      },
      {
        type: 'heading',
        heading: 'Three Ways to Track Injectable Costs',
      },
      {
        type: 'list',
        items: [
          'Expense when purchased — the simplest method. Product orders go straight to an expense account. The weakness is timing: a large order in one month makes that month look unprofitable and the next month look unusually strong.',
          'Inventory on hand with a monthly count — purchases go to an Inventory Asset account on your Balance Sheet. Each month you count what is on the shelf and move the cost of product used into Cost of Goods Sold. This evens out the swings and is a practical middle ground for many single-location practices.',
          'Item-by-item (perpetual) tracking — each vial or syringe is tracked in QuickBooks or in your practice-management software and costs move as treatments are recorded. It is the most precise and the most work. Inventory tracking inside QuickBooks Online is included in the Plus and Advanced plans, but not in Simple Start or Essentials, so check your plan on Intuit’s current pricing page.',
        ],
      },
      {
        type: 'callout',
        heading: 'Which method should you choose?',
        text: 'Match the method to your volume and your systems. A new practice with a few injectors may be fine with the monthly count. A multi-location practice with high volume usually benefits from item-level tracking. How inventory is treated on your tax return can differ from how you view it for management reports, so confirm the approach with your CPA before you change anything.',
      },
      {
        type: 'heading',
        heading: 'Set Up the Accounts',
      },
      {
        type: 'list',
        items: [
          'Inventory Asset — Injectables (a current asset on the Balance Sheet, if you track inventory on hand)',
          'Cost of Goods Sold — Neurotoxin',
          'Cost of Goods Sold — Fillers',
          'Cost of Goods Sold — Retail Skincare, and IV or wellness supplies if you offer them',
          'Product Waste and Expired Product (so you can see what is lost, separate from product used)',
          'Medical Supplies — Overhead (gloves, gauze, disinfectants and other items not tied to one treatment)',
        ],
      },
      {
        type: 'heading',
        heading: 'Know Your Cost Per Unit',
      },
      {
        type: 'paragraph',
        text: 'Neurotoxin is typically bought in vials that contain a set number of units, and fillers by the syringe. Divide the price you paid by the units or syringes you received to get your cost per unit. That number is the starting point for every margin calculation.',
      },
      {
        type: 'tip',
        heading: 'Example only (not typical pricing)',
        text: 'Say a 100-unit vial costs $600, so each unit costs $6. A patient receives 40 units, charged at $13 per unit. Revenue is $520. Product cost is $240. Gross profit is $280, which is a gross margin of about 54%. Use your own purchase prices and your own fees. The point is that you can only see this number if the product cost is tracked separately.',
      },
      {
        type: 'heading',
        heading: 'Do Not Forget Waste, Expiry and Credits',
      },
      {
        type: 'paragraph',
        text: 'Opened product has a limited shelf life, so some product will be wasted, expire or be used for training. Those are real costs. Track them in their own account so you can see how much product is lost and whether ordering or scheduling needs to change. If you receive manufacturer rebates, loyalty-program credits or supplier credits, they usually reduce your product cost rather than count as sales income. Record them according to the terms of the program and your CPA’s guidance.',
      },
      {
        type: 'heading',
        heading: 'Keep Patient Information Out of Your Books',
      },
      {
        type: 'paragraph',
        text: 'Bookkeeping needs totals and product counts, not patient names or clinical notes. Record product use by date, product and quantity, and avoid putting patient names or treatment details in QuickBooks memos, attachments or reports. For questions about the privacy rules that apply to your practice, ask your attorney or compliance advisor.',
      },
      {
        type: 'heading',
        heading: 'A Simple Month-End Routine',
      },
      {
        type: 'list',
        items: [
          'Enter every product purchase to the correct account, not to Supplies',
          'Count the vials and syringes on hand at month end',
          'Compare the count to what your books show and record the difference as Cost of Goods Sold',
          'Record any waste or expired product separately',
          'Review gross profit by category on your Profit & Loss and compare it to last month',
        ],
      },
      {
        type: 'tip',
        heading: 'Quick Check',
        text: 'Run last month’s Profit & Loss. If you see a large "Supplies" line and no Cost of Goods Sold section, your product costs are almost certainly not separated, and your margins cannot be read from your books.',
      },
      {
        type: 'paragraph',
        text: 'Separating treatment costs is one of the most useful changes a MedSpa can make to its books. It takes some setup and a steady month-end routine, but it turns the Profit & Loss from a record of spending into a tool for pricing and planning. If your product costs have been buried in general expenses for a while, a cleanup can restate past months so your history is comparable.',
      },
    ],
  },
  {
    id: 'post-005',
    slug: 'record-cherry-carecredit-affirm-financing-quickbooks',
    title: 'How to Record Cherry, CareCredit and Affirm Financing Payouts in QuickBooks',
    metaTitle: 'Record Cherry, CareCredit & Affirm in QuickBooks | MedSpa Bookkeeping',
    metaDescription:
      'Patient financing payouts arrive net of fees. Learn how a MedSpa should record Cherry, CareCredit and Affirm payments in QuickBooks so revenue and fees both show correctly.',
    excerpt:
      'When a patient finances a treatment, the payout that reaches your bank is smaller than the treatment price. Here is how to record financing payouts in QuickBooks so revenue and fees both appear correctly.',
    category: 'POS & Reconciliation',
    tags: ['Patient Financing', 'Cherry', 'CareCredit', 'Affirm', 'QuickBooks', 'MedSpa', 'Reconciliation'],
    publishedDate: '2026-10-05',
    readingTime: 5,
    coverImage: '',
    coverAlt: 'Illustration of a card terminal and a payout split into sales, fees and tips',
    content: [
      {
        type: 'intro',
        text: 'Patient financing helps more treatments get booked, but it often leaves a gap in the books. A patient finances a $2,000 treatment, and a smaller amount reaches your bank account a few days later. If that smaller deposit is recorded as the sale, revenue is understated and the financing fee never appears anywhere.',
      },
      {
        type: 'heading',
        heading: 'What Actually Happens When a Patient Finances',
      },
      {
        type: 'paragraph',
        text: 'With most patient financing programs, including Cherry, CareCredit and Affirm, the patient finances the treatment with the lender, and the lender pays the practice. The practice generally receives the treatment price minus a fee. The fee rate depends on the program and on your agreement with the lender, so check your own statements rather than assuming a number.',
      },
      {
        type: 'callout',
        heading: 'The Core Idea',
        text: 'Revenue is the full price of the treatment. The financing fee is a cost of getting paid. The bank deposit is only the difference between the two.',
      },
      {
        type: 'heading',
        heading: 'A Simple Example',
      },
      {
        type: 'paragraph',
        text: 'A patient finances a $2,000 treatment and the lender keeps a 6% fee, which is $120. Your deposit is $1,880. The correct entry records $2,000 of service revenue, $120 of financing fees as an expense, and $1,880 received in the bank. The 6% here is only an illustration. Use the rate on your own payout reports.',
      },
      {
        type: 'heading',
        heading: 'How to Record It in QuickBooks',
      },
      {
        type: 'list',
        items: [
          'Record the sale at the full treatment price when the service is delivered, through your sales receipt or invoice.',
          'Create a separate expense account for patient financing fees so the cost is visible on its own line.',
          'When the payout arrives, match it to the lender’s payout report, not just to the bank line.',
          'Record the fee for each payout, so that sale, fee and deposit add up exactly.',
          'Keep each lender separate. Cherry, CareCredit and Affirm have different payout schedules, so combining them hides which program costs what.',
        ],
      },
      {
        type: 'heading',
        heading: 'Common Mistakes',
      },
      {
        type: 'list',
        items: [
          'Recording the net deposit as revenue, which understates income and hides the fee.',
          'Posting the fee to a general account such as Bank Charges, where it gets lost among small items.',
          'Not matching payouts to individual treatments, so a missing or short payout goes unnoticed.',
          'Treating a financed sale as a patient receivable you are still waiting to collect, when the lender is the one paying you.',
        ],
      },
      {
        type: 'heading',
        heading: 'Why the Fee Is Worth Tracking',
      },
      {
        type: 'paragraph',
        text: 'Financing fees can add up across a busy month. Seeing them as their own line lets you compare what financing costs against the extra treatments it helps close. That is a business decision you cannot make if the fees are buried in other expenses.',
      },
      {
        type: 'tip',
        heading: 'Quick Check',
        text: 'Pick one financed treatment from last month. Find the sale, the lender payout and the fee in QuickBooks. If you cannot find all three, the financing entries need to be reviewed.',
      },
      {
        type: 'paragraph',
        text: 'Details vary by lender and by how your practice management software syncs sales, so confirm the specifics for your setup. For how fees and treatment of financed sales affect your taxes, ask your CPA.',
      },
    ],
  },
];
