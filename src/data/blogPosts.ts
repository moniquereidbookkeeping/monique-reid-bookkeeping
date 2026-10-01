import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-001',
    slug: 'quickbooks-cleanup-for-medspas',
    title: 'QuickBooks Cleanup for MedSpas: What to Expect, What It Costs, and When You Actually Need It',
    metaTitle: 'QuickBooks Cleanup for MedSpas | Monique Reid Bookkeeping',
    metaDescription:
      'Is your MedSpa QuickBooks behind on reconciliations? Learn what cleanup bookkeeping involves, how long it takes, and what it costs for aesthetic and wellness practices.',
    excerpt:
      'Behind on QuickBooks? You are not alone. Most aesthetic practice owners do not realize how far behind they are until tax season hits. Here is exactly what cleanup bookkeeping involves and how to know if you need it.',
    category: 'QuickBooks & Cleanup',
    tags: ['QuickBooks', 'Cleanup', 'MedSpa', 'Catch-Up Bookkeeping', 'Aesthetic Practice'],
    publishedDate: '2026-10-01',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Financial records and QuickBooks accounting on a desk',
    featured: true,
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
        text: 'Most aesthetic practices actually need both: the books have been partially touched but incorrectly handled. The goal of a proper cleanup is a set of financials your CPA can use to file taxes without corrections and that you can actually read to understand how your practice is performing.',
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
          'Membership dues and prepaid treatment packages — under accrual accounting principles, a monthly membership fee is a liability (deferred revenue) when collected. It only becomes income when the corresponding service is delivered. Mishandling this overstates your income.',
          'Retail product sales — skincare, neurotoxin supplies, and retail COGS must be separated from service revenue so your margin by category is visible.',
          'Gratuities — tips collected through your POS flow through your bank account but are not your income. They need to pass through to staff correctly.',
        ],
      },
      {
        type: 'heading',
        heading: 'How Long Does a MedSpa QuickBooks Cleanup Take?',
      },
      {
        type: 'paragraph',
        text: 'Timeline depends on how many months are behind and the complexity of your practice setup. As a general guide:',
      },
      {
        type: 'list',
        items: [
          '1 to 3 months behind: typically 1 to 2 weeks to complete correctly',
          '4 to 6 months behind: typically 2 to 4 weeks',
          '7 to 12 months behind: typically 4 to 6 weeks',
          'More than 12 months: project-scoped on a case-by-case basis',
        ],
      },
      {
        type: 'paragraph',
        text: 'Speed also depends on how quickly you can provide access to your POS payout reports, bank statements, and any prior-year accountant files. A cleanup moves at the pace of the documentation available.',
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
    coverAlt: 'Payment terminal and POS system in a modern clinic',
    content: [
      {
        type: 'intro',
        text: 'If you use Boulevard or Vagaro to book appointments and collect payments, you already know the system works beautifully for scheduling and client management. What most practice owners do not realize is that the deposit hitting your business checking account from these platforms is not your revenue — it is your revenue minus merchant processing fees, minus any chargebacks or refunds, possibly minus tips that will be paid out to staff. Recording that deposit directly as income in QuickBooks is one of the most common and consequential mistakes aesthetic practice owners make.',
      },
      {
        type: 'heading',
        heading: 'Why the Bank Deposit Is Not Your Revenue',
      },
      {
        type: 'paragraph',
        text: 'Both Boulevard and Vagaro batch your daily transactions and send a single ACH deposit to your bank account, typically one to three business days after the transactions occur. By the time that deposit lands in your account, the platform has already deducted its processing fees — typically 2.6% to 3.5% per card transaction depending on your plan and card type. It may also have applied refunds issued during that period.',
      },
      {
        type: 'paragraph',
        text: 'When you record that net deposit as income, two things go wrong: your revenue is understated (you are only reporting the net, not what patients actually paid), and your merchant processing fees become invisible in your books. Those fees are a real operating cost. For a practice doing $80,000 a month in card volume, a 2.9% processing rate is $2,320 per month in fees — $27,840 per year. That is a significant line item that should appear on your Profit & Loss.',
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
          'Download your payout report from Boulevard or Vagaro — this shows gross sales, processing fees, refunds, and the net deposit for each payout cycle',
          'In QuickBooks, record an income entry for the gross sales amount against your Service Revenue account (or your specific revenue accounts by service type)',
          'Record the processing fee as a separate expense — typically to a "Merchant Processing Fees" or "Payment Processing Fees" account under Operating Expenses',
          'Record any refunds as a deduction from revenue in the period they were issued',
          'Reconcile the net deposit that arrives in your bank account against your bank feed',
        ],
      },
      {
        type: 'callout',
        heading: 'Boulevard-Specific Notes',
        text: 'Boulevard provides a Payout Report under Reports → Payouts. Each report shows the payout period, gross sales, Boulevard fees, refunds, and net transferred. If you have multiple locations, each location will have its own payout. Always download the payout report, not the sales summary — the sales summary shows when transactions were collected, not when they were paid out, which creates timing differences in reconciliation.',
      },
      {
        type: 'heading',
        heading: 'Handling Tips Through Boulevard and Vagaro',
      },
      {
        type: 'paragraph',
        text: 'Tips collected through your POS system pass through your bank account but belong to your staff members. They should not appear as income on your P&L, and they should not appear as a labor expense either — they are a liability you collect and pay out. The correct treatment is to record tips received as a current liability (a "Tips Payable" account on your Balance Sheet) and then clear that liability when you pay tips to staff through payroll or direct payment.',
      },
      {
        type: 'paragraph',
        text: 'Many practices skip this step and either ignore tips entirely or run them through as income and then as an expense, which creates an unnecessary tax and payroll reporting issue.',
      },
      {
        type: 'heading',
        heading: 'What About Vagaro Marketplace vs. Direct Payments?',
      },
      {
        type: 'paragraph',
        text: 'If you use Vagaro and some of your bookings come through the Vagaro Marketplace (where clients discover and book you through the Vagaro consumer app), the processing fees for those transactions may differ from your direct booking processing fees. Vagaro charges a higher marketplace fee than for your own branded booking link or in-app payments. Pull the Payout Detail report in Vagaro to see the fee breakdown by transaction type — this matters if you want accurate cost-per-booking data.',
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
        text: 'In QuickBooks, run a Profit & Loss for last month and look at your Total Income line. Then look at your bank statement deposits from Boulevard or Vagaro for that same month. If the income number in QuickBooks is the same as what was deposited, your books are recording net deposits as revenue. The income number in QuickBooks should be higher than what was deposited — the difference being your processing fees.',
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
    title: 'MedSpa Membership Revenue in QuickBooks: Why Most Practices Account for It Wrong',
    metaTitle: 'MedSpa Membership Revenue in QuickBooks | Correct Accounting',
    metaDescription:
      'Monthly membership dues are not revenue until the service is delivered. Learn how to correctly account for MedSpa and aesthetic clinic membership revenue in QuickBooks Online.',
    excerpt:
      'Collecting a monthly membership fee and posting it straight to income is the most common MedSpa accounting error — and it overstates your revenue every single month. Here is the correct approach.',
    category: 'Revenue & Memberships',
    tags: ['Memberships', 'Deferred Revenue', 'QuickBooks', 'Revenue Recognition', 'MedSpa', 'Packages'],
    publishedDate: '2026-10-07',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'MedSpa treatment room and wellness clinic interior',
    content: [
      {
        type: 'intro',
        text: 'Membership programs have become one of the most powerful growth tools for MedSpas and aesthetic clinics — predictable recurring revenue, improved patient retention, and a steady cash flow that does not depend entirely on appointment volume. But almost every practice that runs memberships accounts for them incorrectly in QuickBooks. The result is financial statements that overstate income, a Balance Sheet that does not reflect outstanding obligations to members, and potential problems at tax time. Here is what is actually happening and how to fix it.',
      },
      {
        type: 'heading',
        heading: 'The Problem: Recording Membership Dues as Income When Collected',
      },
      {
        type: 'paragraph',
        text: 'Here is the scenario: your practice has 60 members paying $199 per month for a membership that includes one Botox treatment and 15% off additional services. On the first of the month, $11,940 hits your bank account. You open QuickBooks, match the deposit, and post it to Service Revenue. It looks like $11,940 in income. The problem is that this is not income yet.',
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
          'Tax timing issues — depending on your tax accounting method, recognizing income before it is earned can create tax liability in a period before you have the cash to cover it',
          'No visibility into utilization — if you do not track when members redeem their treatments, you cannot measure how many members are actually using their memberships (a critical performance metric)',
        ],
      },
      {
        type: 'heading',
        heading: 'The Correct Approach: Deferred Revenue',
      },
      {
        type: 'paragraph',
        text: 'The correct method is a two-step process. When you collect membership dues, you post the amount to a Deferred Revenue account (a current liability on your Balance Sheet). When a member visits and receives their included service, you move the corresponding amount from Deferred Revenue to Service Revenue on your P&L. This is called revenue recognition — you recognize income in the period the service is earned, not when the cash is received.',
      },
      {
        type: 'callout',
        heading: 'In QuickBooks Online: Setting Up Deferred Revenue',
        text: 'Go to Accounting → Chart of Accounts → New. Under Account Type, select "Other Current Liabilities." Under Detail Type, select "Deferred Revenue." Name it "Membership Deferred Revenue" or "Prepaid Membership Dues." When you collect monthly dues, create an invoice or sales receipt that posts to this liability account. When a member redeems their service, create a journal entry or a credit memo that reduces the liability and increases your Service Revenue account by the corresponding amount.',
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
        text: 'When a patient finances a treatment package through Cherry or CareCredit, the treatment is typically delivered at the time of the procedure — which means revenue is earned immediately. The financing provider pays you (net of their discount/merchant fee) on their schedule. The common error here is posting income when the financing company pays you rather than when the service was delivered. If a patient receives a $2,000 treatment package in October and Cherry sends you payment in November, the income belongs in October under accrual accounting.',
      },
      {
        type: 'heading',
        heading: 'A Note on Cash vs. Accrual Accounting',
      },
      {
        type: 'paragraph',
        text: 'Everything above reflects accrual accounting, which is the correct method for any practice with memberships, packages, or significant inventory. Cash accounting — recording income when received and expenses when paid — is simpler but produces misleading financial statements for a membership-based practice. If your CPA has your practice on cash accounting, discuss with them whether accrual is appropriate given your revenue model. The IRS generally requires accrual accounting for businesses with average annual gross receipts over $27 million, but many smaller practices benefit from accrual accounting long before that threshold.',
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
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
};
