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
    publishedDate: '2026-10-07',
    readingTime: 6,
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
    publishedDate: '2026-10-14',
    readingTime: 5,
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
    publishedDate: '2026-10-21',
    readingTime: 5,
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
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
};
