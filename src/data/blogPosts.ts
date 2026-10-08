import { BlogPost } from '../types';
import { BUILD_DATE } from '../buildDate';

/** Every article, including scheduled ones. Only `blogPosts` (below) is shown on the site. */
const allBlogPosts: BlogPost[] = [
  {
    "id": "post-006",
    "slug": "medspa-chart-of-accounts-quickbooks",
    "title": "A MedSpa Chart of Accounts for QuickBooks: What to Set Up and Why",
    "metaTitle": "MedSpa Chart of Accounts for QuickBooks | MedSpa Bookkeeping",
    "metaDescription": "A generic chart of accounts hides what a MedSpa earns. How to set up income, cost of goods sold and expense accounts in QuickBooks for an aesthetic practice.",
    "excerpt": "A default QuickBooks chart of accounts was not built for injectables, memberships or patient financing. Here is how to organize income, direct costs and expenses so your reports answer real questions.",
    "category": "QuickBooks & Cleanup",
    "tags": [
      "Chart of Accounts",
      "QuickBooks",
      "MedSpa",
      "Setup",
      "Reporting"
    ],
    "publishedDate": "2026-10-20",
    "readingTime": 5,
    "coverImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    "coverAlt": "Documents and a pen on a desk, representing an organized set of books",
    "content": [
      {
        "type": "intro",
        "text": "The chart of accounts is the list of categories every transaction in QuickBooks is sorted into. When it is too generic, your Profit & Loss cannot tell you which services earn money, what treatments cost, or where fees are going."
      },
      {
        "type": "heading",
        "heading": "Why the Default List Falls Short"
      },
      {
        "type": "paragraph",
        "text": "A new QuickBooks file starts with a general-purpose list. It usually has one income account and a handful of broad expense accounts. A MedSpa has several service lines, product sales, memberships, packages, gift cards and financing, and a general list gives all of them one place to land."
      },
      {
        "type": "heading",
        "heading": "Income: Separate What You Sell"
      },
      {
        "type": "list",
        "items": [
          "Injectables (neurotoxin and filler services)",
          "Laser and skin treatments",
          "Wellness and IV services, if offered",
          "Retail product sales",
          "Membership revenue",
          "Package and gift card revenue, recorded when earned"
        ]
      },
      {
        "type": "paragraph",
        "text": "Keeping service lines apart is what lets you compare them later. The right level of detail depends on your practice, so start with the lines you actually manage separately."
      },
      {
        "type": "heading",
        "heading": "Cost of Goods Sold: Direct Costs of Treatments"
      },
      {
        "type": "list",
        "items": [
          "Neurotoxin and filler product",
          "Other treatment-specific products",
          "Retail product cost",
          "Direct supplies that are used up in a treatment"
        ]
      },
      {
        "type": "paragraph",
        "text": "These are costs that exist because a treatment was performed. Showing them above gross profit lets you see margin by service. Costs like rent and software belong in operating expenses, not here."
      },
      {
        "type": "heading",
        "heading": "Expenses: Group by What You Can Control"
      },
      {
        "type": "list",
        "items": [
          "Payroll and provider compensation",
          "Merchant processing fees",
          "Patient financing fees",
          "Marketing and advertising",
          "Rent and utilities",
          "Software and subscriptions",
          "Professional fees",
          "Insurance"
        ]
      },
      {
        "type": "paragraph",
        "text": "Processing and financing fees deserve their own accounts. They are easy to miss when they sit inside a general bank charges line."
      },
      {
        "type": "heading",
        "heading": "Balance Sheet Accounts People Forget"
      },
      {
        "type": "list",
        "items": [
          "A liability account for unredeemed memberships, packages and gift cards",
          "A clearing account for payouts that are in transit",
          "A separate account for each loan or credit card",
          "Equipment, so large purchases are not expensed by mistake"
        ]
      },
      {
        "type": "callout",
        "heading": "Keep It Usable",
        "text": "More accounts are not always better. The goal is a list short enough to keep consistent every month and detailed enough to answer the questions you ask about your practice."
      },
      {
        "type": "tip",
        "heading": "Quick Check",
        "text": "Open your Profit & Loss. If one or two accounts hold most of your numbers, or you cannot find product cost, processing fees or financing fees, the chart of accounts needs work."
      },
      {
        "type": "paragraph",
        "text": "Changing the chart of accounts also means moving past transactions to the right places. If your file has been in use for a while, ask your bookkeeper or CPA before reorganizing it."
      }
    ]
  },
  {
    "id": "post-007",
    "slug": "is-my-medspa-profitable-quickbooks-reports",
    "title": "Is Your MedSpa Actually Profitable? The QuickBooks Reports That Show You",
    "metaTitle": "Is My MedSpa Profitable? | QuickBooks Reports",
    "metaDescription": "Revenue is not profit. The QuickBooks reports a MedSpa owner should read each month to see real profitability, and what to check before trusting the numbers.",
    "excerpt": "Strong bookings do not guarantee profit. Here are the reports a MedSpa owner can use to see how much the practice really keeps, and what has to be true of the books first.",
    "category": "Costs & Inventory",
    "tags": [
      "Profitability",
      "Profit & Loss",
      "QuickBooks",
      "MedSpa",
      "Reporting"
    ],
    "publishedDate": "2026-10-27",
    "readingTime": 5,
    "coverImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    "coverAlt": "A laptop showing charts and financial reports",
    "content": [
      {
        "type": "intro",
        "text": "A full schedule and a growing revenue line feel like success, but they do not answer the owner’s main question: how much does the practice keep? QuickBooks can show that, as long as the books underneath are reliable."
      },
      {
        "type": "heading",
        "heading": "Start With the Books, Not the Report"
      },
      {
        "type": "paragraph",
        "text": "A report is only as accurate as the entries behind it. Before reading any report, confirm that bank and card accounts are reconciled, deposits are matched to sales, and product costs are not sitting in one general expense account. If those are off, the report can look healthy when the practice is not."
      },
      {
        "type": "heading",
        "heading": "Four Reports Worth Reading Each Month"
      },
      {
        "type": "list",
        "items": [
          "Profit & Loss: revenue, direct costs and expenses for the month, with gross profit and net profit",
          "Profit & Loss by month: a side-by-side view that shows trends and unusual months",
          "Balance Sheet: what the practice owns and owes, including cash and unredeemed memberships or packages",
          "Accounts for deposits and clearing: a quick look at whether money in transit is stacking up"
        ]
      },
      {
        "type": "heading",
        "heading": "Three Numbers to Look For"
      },
      {
        "type": "list",
        "items": [
          "Gross profit: revenue minus the direct costs of delivering treatments",
          "Net profit: what is left after all expenses",
          "Net profit as a percentage of revenue, so months of different size can be compared"
        ]
      },
      {
        "type": "paragraph",
        "text": "Healthy ranges differ by practice type and market, so compare your numbers to your own history first."
      },
      {
        "type": "heading",
        "heading": "Common Reasons the Numbers Mislead"
      },
      {
        "type": "list",
        "items": [
          "Net deposits recorded as revenue, which understates income and hides fees",
          "Product costs expensed when bought, so one large order distorts a month",
          "Membership or package payments recorded as income before the service is delivered",
          "Owner draws or personal expenses mixed in with business expenses"
        ]
      },
      {
        "type": "callout",
        "heading": "Revenue Is Not Profit",
        "text": "Bookings and deposits describe activity. Profit describes what remains after the cost of delivering the work and running the business."
      },
      {
        "type": "tip",
        "heading": "Quick Check",
        "text": "Compare your Profit & Loss to your bank balance trend over the same months. If the report shows steady profit but cash keeps shrinking, something is being recorded incorrectly or taken out of the business."
      },
      {
        "type": "paragraph",
        "text": "If the reports do not match what you see in the practice, the usual fix is in the books, not the report. A review of reconciliations and categories is the best first step."
      }
    ]
  },
  {
    "id": "post-008",
    "slug": "what-your-cpa-needs-from-medspa-books",
    "title": "What Your CPA Needs From Your MedSpa Books at Tax Time",
    "metaTitle": "What a CPA Needs From MedSpa Books | MedSpa Bookkeeping",
    "metaDescription": "Tax time is smoother when the books are ready. See what a CPA typically needs from a MedSpa or aesthetic practice and how to prepare QuickBooks before they ask.",
    "excerpt": "Tax season is stressful when the books are not ready. Here is what a CPA typically asks for from a MedSpa and how to prepare your QuickBooks file ahead of time.",
    "category": "QuickBooks & Cleanup",
    "tags": [
      "Tax Time",
      "CPA",
      "QuickBooks",
      "MedSpa",
      "Year-End"
    ],
    "publishedDate": "2027-01-05",
    "readingTime": 5,
    "coverImage": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80",
    "coverAlt": "A desk with a calculator and paperwork, representing year-end tax preparation",
    "content": [
      {
        "type": "intro",
        "text": "A CPA can only prepare an accurate return from accurate books. When the books arrive late or unreconciled, the result is delays, extra fees and avoidable corrections. A few steps taken before year-end make the process much easier."
      },
      {
        "type": "heading",
        "heading": "What a CPA Typically Asks For"
      },
      {
        "type": "list",
        "items": [
          "Profit & Loss and Balance Sheet for the full year",
          "Reconciled bank and credit card accounts for every month",
          "A list of loans, equipment purchases and owner contributions or draws",
          "Payroll reports and contractor payments",
          "Records supporting large or unusual transactions"
        ]
      },
      {
        "type": "paragraph",
        "text": "Requests differ by CPA and by business structure, so ask what your CPA wants and by when."
      },
      {
        "type": "heading",
        "heading": "Clean-Up Steps Before Year-End"
      },
      {
        "type": "list",
        "items": [
          "Reconcile every account through the last day of the year",
          "Check that deposits are matched to sales and fees are recorded separately",
          "Review uncategorized or unclear transactions and assign them",
          "Separate personal spending from business spending",
          "Review unredeemed memberships, packages and gift cards"
        ]
      },
      {
        "type": "heading",
        "heading": "Items Worth Raising With the CPA"
      },
      {
        "type": "list",
        "items": [
          "How memberships, packages and gift cards should be treated for tax purposes",
          "Treatment of equipment and larger purchases",
          "How provider compensation and any contractors are handled",
          "Whether your accounting method still fits the business"
        ]
      },
      {
        "type": "paragraph",
        "text": "Tax treatment depends on your situation and the current rules, so these are questions for your CPA rather than something to assume."
      },
      {
        "type": "callout",
        "heading": "Why Timing Matters",
        "text": "Fixing the books in January is easier than fixing them in the middle of tax preparation. Month-end reconciliation spreads that work across the year."
      },
      {
        "type": "tip",
        "heading": "Quick Check",
        "text": "Can you produce a reconciled Profit & Loss for every month of this year today? If not, start with the oldest unreconciled month and work forward."
      },
      {
        "type": "paragraph",
        "text": "If the file is already behind, a cleanup before the CPA starts can save time and avoid corrections later."
      }
    ]
  },
  {
    "id": "post-009",
    "slug": "medspa-month-end-close-checklist-quickbooks",
    "title": "A MedSpa Month-End Close Checklist for QuickBooks",
    "metaTitle": "MedSpa Month-End Close Checklist | QuickBooks Bookkeeping",
    "metaDescription": "A month-end routine keeps a MedSpa’s QuickBooks accurate all year. Use this checklist to reconcile accounts, match deposits, review costs and check reports.",
    "excerpt": "Books that are only touched at tax time are rarely accurate. This month-end checklist shows what to review in QuickBooks each month so problems are caught while they are small.",
    "category": "QuickBooks & Cleanup",
    "tags": [
      "Month-End Close",
      "Checklist",
      "QuickBooks",
      "MedSpa",
      "Reconciliation"
    ],
    "publishedDate": "2026-11-10",
    "readingTime": 5,
    "coverImage": "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1400&q=80",
    "coverAlt": "A laptop and notebook on a desk, representing a month-end routine",
    "content": [
      {
        "type": "intro",
        "text": "Most bookkeeping problems start small and grow quietly. A missed deposit, a miscategorized purchase or an unreconciled card is easy to fix in the month it happens. Six months later it is a cleanup project. A consistent month-end routine is the simplest way to prevent that."
      },
      {
        "type": "heading",
        "heading": "What a Month-End Close Is"
      },
      {
        "type": "paragraph",
        "text": "A close is a repeatable set of checks done after the month ends so that the numbers for that month can be trusted. It does not need to be complicated, but it needs to happen every month, in the same order."
      },
      {
        "type": "heading",
        "heading": "The Checklist"
      },
      {
        "type": "list",
        "items": [
          "Reconcile every bank account and credit card to the statement for the month",
          "Match payment-processor and financing payouts to the sales they cover, and record the fees",
          "Review uncategorized transactions and assign each to the right account",
          "Check that product purchases went to the correct accounts and not to a general Supplies account",
          "Record any adjustment for product on hand, if you use the monthly count method",
          "Review memberships, packages and gift cards sold and used during the month",
          "Confirm payroll and any provider compensation were recorded",
          "Separate any personal spending from business spending",
          "Review the Profit & Loss and compare it to the prior month"
        ]
      },
      {
        "type": "heading",
        "heading": "Reading the Result"
      },
      {
        "type": "paragraph",
        "text": "After the checklist, look at the Profit & Loss for anything that does not fit. A large jump in one expense, revenue that moved far more than bookings did, or an account that is unusually empty each deserve a second look. The cause is often an entry in the wrong place, not a real change in the business."
      },
      {
        "type": "callout",
        "heading": "Consistency Beats Perfection",
        "text": "A simple close done every month is worth more than a thorough one done twice a year. Choose a date, such as the 10th, and treat it as fixed."
      },
      {
        "type": "heading",
        "heading": "Who Should Do It"
      },
      {
        "type": "paragraph",
        "text": "Some owners do their own close, and some hand it to a bookkeeper. Either works as long as it is done on a schedule, with the same steps, and someone checks the result. If the owner is also the person entering the data, an outside review can catch things that are easy to overlook."
      },
      {
        "type": "tip",
        "heading": "Quick Check",
        "text": "Is last month reconciled and reviewed? If not, start there before looking at this month. Each unreconciled month makes the next one harder."
      },
      {
        "type": "paragraph",
        "text": "Exact steps vary with your accounting method, software and practice size, so adjust the checklist to fit your setup."
      }
    ]
  },
  {
      "id": "post-010",
      "slug": "medspa-manufacturer-rebates-rewards-quickbooks",
      "title": "How to Record Manufacturer Rebates and Rewards Programs in QuickBooks",
      "metaTitle": "MedSpa Rebates in QuickBooks | MedSpa Bookkeeping",
      "metaDescription": "Manufacturer loyalty and rebate programs can distort a MedSpa's income and product cost. Learn how to record rebates, rewards and reimbursements in QuickBooks.",
      "excerpt": "Rebate checks and rewards reimbursements from product manufacturers are easy to book as income, or to miss entirely. Here is how to keep product cost, margins and your reports accurate.",
      "category": "Costs & Inventory",
      "tags": [
          "Rebates",
          "Manufacturer Programs",
          "Product Cost",
          "QuickBooks",
          "MedSpa"
      ],
      "publishedDate": "2026-11-17",
      "readingTime": 5,
    "featured": false,
      "coverImage": "https://images.unsplash.com/photo-1625225233840-695456021cde?auto=format&fit=crop&w=1400&q=80",
      "coverAlt": "A calculator beside a pen on printed financial papers, representing rebates and product cost",
      "content": [
          {
              "type": "intro",
              "text": "Many MedSpas take part in manufacturer programs: volume rebates, practice rewards, and patient loyalty programs where the manufacturer funds the reward. The value is real, but it often arrives as a deposit, a credit, or free replacement product with no clear label. If it is recorded in the wrong place, your income and product cost both look wrong, and neither tells you what a treatment really earns."
          },
          {
              "type": "heading",
              "heading": "Why These Payments Get Recorded Wrong"
          },
          {
              "type": "paragraph",
              "text": "A rebate check or a program deposit looks like any other deposit, and a credit or replacement vial may not show up in the bank at all. Without a clear rule, the money is usually booked as sales, left in an uncategorized account, or missed entirely. Each choice changes your reports in a different way, and the effect is hard to see until someone compares product purchases to what the practice actually paid."
          },
          {
              "type": "heading",
              "heading": "Common Types of Manufacturer Money"
          },
          {
              "type": "list",
              "items": [
                  "Volume or purchase rebates paid back after you buy a certain amount of product",
                  "Practice rewards or points earned for your purchases",
                  "Reimbursements for rewards a patient redeemed through a manufacturer loyalty program, which some programs pay as product credits or replacement product instead of cash",
                  "Promotional pricing or free product tied to a purchase"
              ]
          },
          {
              "type": "paragraph",
              "text": "Programs differ, and how a practice is paid back is usually set in the terms you accept when you enroll, which are not always public. Ask your manufacturer representative who funds the reward and what the practice receives, and read your program statements before deciding how to record anything."
          },
          {
              "type": "heading",
              "heading": "A Common Approach in QuickBooks"
          },
          {
              "type": "paragraph",
              "text": "Money a vendor gives back because you bought its product is generally treated as a reduction of what that product cost you, not as new sales. Record it so that your product cost, and the margin on injectables, reflects the net amount you really paid."
          },
          {
              "type": "list",
              "items": [
                  "Record the full treatment price as revenue when the service is performed",
                  "Record a manufacturer-funded discount or reimbursement against the matching product cost, not as extra income",
                  "Record a rebate check as a reduction of product cost in the period it relates to",
                  "Track any rewards balance you are owed separately until it is paid or used",
                  "If you are reimbursed in product instead of cash, track the units so replacement product is not counted twice or left at full cost","Keep the program statement with the entry so the amount can be explained later"
              ]
          },
          {
              "type": "callout",
              "heading": "Why It Matters",
              "text": "If rebates are booked as income, your revenue and margins look better than they are. If they are ignored, you may be paying tax on a cost that was partly refunded. Either way, the numbers you use to price treatments are off."
          },
          {
              "type": "heading",
              "heading": "A Simple Monthly Habit"
          },
          {
              "type": "list",
              "items": [
                  "Open the manufacturer program statement for the month",
                  "Match each payment or credit to the product purchases it relates to",
                  "Record the amount or credit against product cost, not sales",
                  "Note any balance still owed to you",
                  "Confirm the result in your Profit & Loss against the prior month"
              ]
          },
          {
              "type": "tip",
              "heading": "Quick Check",
              "text": "Look at your last three manufacturer deposits. Are they in sales, in an uncategorized account, or against product cost? If you cannot tell, that is the place to start."
          },
          {
              "type": "paragraph",
              "text": "How a rebate is treated for tax can depend on your accounting method and the terms of the program, so confirm the approach with your CPA. This article is general information, not tax or accounting advice for your practice."
          }
      ]
  },
  {
    id: 'post-011',
    slug: 'reconcile-boulevard-vagaro-quickbooks',
    title: 'Reconciling Boulevard and Vagaro Deposits in QuickBooks: The Right Way for Aesthetic Practices',
    metaTitle: 'Boulevard & Vagaro QuickBooks Reconciliation for Med Spas',
    metaDescription:
      'Boulevard and Vagaro pay out in batches, net of fees. How to reconcile those deposits in QuickBooks so a med spa records true gross revenue and visible fees.',
    excerpt:
      'If you are recording the deposit that hits your bank account as your revenue, your books are understating your true income and hiding your processing costs. Here is how Boulevard and Vagaro reconciliation should actually work in QuickBooks.',
    category: 'POS & Reconciliation',
    tags: ['Boulevard', 'Vagaro', 'QuickBooks', 'Reconciliation', 'MedSpa', 'POS Deposits'],
    publishedDate: '2026-10-06',
    featured: true,
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
        text: 'Platforms like Boulevard and Vagaro batch your transactions and send a deposit to your bank account on a payout schedule that depends on your processor and settings, usually a day or more after the transactions occur. By the time that deposit lands in your account, the platform has already deducted its processing fees. Card processing fees vary by plan and card type, so check the rate on your own statements. It may also have applied refunds issued during that period.',
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
        text: 'Tips collected through your POS system pass through your bank account but belong to your staff members. They are not your income: they are money you collect on behalf of your staff and pay out. A common treatment is to record tips received as a current liability (a "Tips Payable" account on your Balance Sheet) and then clear that liability when you pay tips to staff through payroll or direct payment. How tips are paid out and reported depends on how your staff are classified, so confirm the details with your CPA or payroll provider.',
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
        text: 'If you are starting from scratch or correcting a messy setup, the chart of accounts for a MedSpa should have at minimum: separate revenue accounts for Services and Retail Products, a Merchant Processing Fees expense account, a Tips Payable liability account, and a clearing account (in QuickBooks Online, Payments to deposit, formerly called Undeposited Funds) that holds your POS collections until the batch deposit posts.',
      },
      {
        type: 'paragraph',
        text: 'The undeposited funds approach mirrors what actually happens — you earn revenue at the point of service, it sits in a clearing account representing "money collected but not yet in the bank," and then when the batch deposit arrives, it clears that account and matches the bank deposit. This is cleaner than recording income only when the deposit arrives, because the timing difference can cause month-end discrepancies.',
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
    id: 'post-012',
    slug: 'medspa-membership-revenue-quickbooks',
    title: 'MedSpa Membership and Package Revenue in QuickBooks: Why So Many Practices Get It Wrong',
    metaTitle: 'Med Spa Membership & Package Bookkeeping in QuickBooks',
    metaDescription:
      'Membership dues and prepaid packages are not revenue until the treatment is delivered. How a med spa should record them in QuickBooks Online.',
    excerpt:
      'Collecting a monthly membership fee and posting it straight to income is a common MedSpa accounting error, and it can overstate your revenue every month. Here is the correct approach.',
    category: 'Revenue & Memberships',
    tags: ['Memberships', 'Deferred Revenue', 'QuickBooks', 'Revenue Recognition', 'MedSpa', 'Packages'],
    publishedDate: '2026-10-06',
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
        text: 'For example, say your practice has 60 members paying $199 per month for a membership that includes one neurotoxin treatment and 15% off additional services. On the first of the month, $11,940 hits your bank account. You open QuickBooks, match the deposit, and post it to Service Revenue. It looks like $11,940 in income. The problem is that this is not income yet.',
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
        text: 'The same principle applies to prepaid treatment packages — for example, a patient who pays $1,500 for a package of six laser sessions has not yet received all six sessions. The full $1,500 should not post to income when collected. The correct treatment is to post the full payment to Deferred Revenue, then move $250 (one-sixth of the package price) to Service Revenue each time the patient completes a session.',
      },
      {
        type: 'paragraph',
        text: 'In practice, many practices track sessions in their POS system (booking platforms such as Boulevard, Vagaro and Jane can track package sessions) and use end-of-month POS reports to calculate how many sessions were redeemed and how much deferred revenue to recognize that month.',
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
    id: 'post-013',
    slug: 'track-neurotoxin-filler-costs-quickbooks',
    title: 'How to Track Neurotoxin and Filler Costs in QuickBooks (and See Your Real Margins)',
    metaTitle: 'Med Spa Inventory Bookkeeping: Neurotoxin & Filler Costs',
    metaDescription:
      'Botox, other neurotoxin and filler costs buried in one Supplies account hide your margins. Three ways a med spa can track injectable inventory in QuickBooks.',
    excerpt:
      'If every neurotoxin and filler purchase lands in one Supplies account, you cannot see what each treatment really earns. Here are three practical ways to track injectable costs in QuickBooks and a simple month-end routine.',
    category: 'Costs & Inventory',
    tags: ['COGS', 'Inventory', 'Neurotoxin', 'Fillers', 'QuickBooks', 'MedSpa', 'Margins'],
    publishedDate: '2026-10-06',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of a vial, syringe and a cost versus revenue bar chart',
    content: [
      {
        type: 'intro',
        text: 'For many MedSpas, injectables are one of the largest direct costs in the business. Yet in a lot of QuickBooks files, every neurotoxin (Botox, Dysport and similar) and filler order sits in one expense account called "Supplies," next to paper towels and gloves. The practice looks busy, the bank balance looks fine, and nobody can say what a unit of product really costs or which treatments earn the best margin. Here is how to separate those costs and what to track each month.',
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
    id: 'post-014',
    slug: 'record-cherry-carecredit-affirm-financing-quickbooks',
    title: 'How to Record Cherry, CareCredit and Affirm Financing Payouts in QuickBooks',
    metaTitle: 'Cherry & CareCredit Payouts in QuickBooks for Med Spas',
    metaDescription:
      'Patient financing payouts arrive net of fees. How a med spa should record and reconcile Cherry, CareCredit and Affirm payouts in QuickBooks.',
    excerpt:
      'When a patient finances a treatment, the payout that reaches your bank is smaller than the treatment price. Here is how to record financing payouts in QuickBooks so revenue and fees both appear correctly.',
    category: 'POS & Reconciliation',
    tags: ['Patient Financing', 'Cherry', 'CareCredit', 'Affirm', 'QuickBooks', 'MedSpa', 'Reconciliation'],
    publishedDate: '2026-10-13',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?auto=format&fit=crop&w=1400&q=80',
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
  {
    "id": "post-015",
    "slug": "medspa-provider-commission-bookkeeping",
    "title": "Med Spa Provider Commission Bookkeeping: How to Record Injector Pay in QuickBooks",
    "metaTitle": "Med Spa Provider Commission Bookkeeping in QuickBooks",
    "metaDescription": "How a med spa should record injector and provider commissions in QuickBooks: employees and 1099 providers, monthly accruals, tips and medical director fees.",
    "excerpt": "Commission pay is often calculated in the booking software and lands in QuickBooks as one lump payroll line. Here is how to record provider pay so each month shows what your treatments really cost to deliver.",
    "category": "Costs & Inventory",
    "tags": [
      "Provider Pay",
      "Commissions",
      "Payroll",
      "1099",
      "QuickBooks",
      "MedSpa"
    ],
    "publishedDate": "2026-11-03",
    "readingTime": 6,
    "coverImage": "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=1400&q=80",
    "coverAlt": "A person counting cash, representing provider commission pay calculated from treatment revenue",
    "content": [
      {
        "type": "intro",
        "text": "Provider pay is one of the largest costs in many med spas, and commission plans make it one of the hardest to read. The commission is calculated in the booking software, paid through payroll or as a contractor payment, and lands in QuickBooks as a single \"Payroll\" or \"Contract Labor\" line. The Profit & Loss can then say what you spent, but not what each treatment cost to deliver or whether your commission rates fit your prices."
      },
      {
        "type": "heading",
        "heading": "Start With How Each Provider Is Paid"
      },
      {
        "type": "paragraph",
        "text": "Whether a provider is an employee or an independent contractor is a legal and tax decision for your CPA, payroll provider or employment attorney. Bookkeeping does not decide it. Its job is to record each arrangement correctly once it is set, because each one is recorded differently."
      },
      {
        "type": "list",
        "items": [
          "Employees (W-2): commission is paid through payroll, with tax withholding and employer payroll taxes. Record commission as its own payroll expense, separate from hourly or salary pay, so you can see each part.",
          "Independent contractors (1099): payments go through Vendors, not payroll, with no withholding. Turn on 1099 tracking in QuickBooks Online and map contractor payments to the right category so year-end forms are accurate. The reporting threshold changed for payments made from 2026, so confirm the current amount with your CPA.",
          "Medical director: record the fee on its own line, whether it is paid through payroll or to a contractor. It is an oversight cost, not a per-treatment cost.",
          "Space or booth renters: if a provider rents space and keeps their own revenue, the rent they pay you is income, not a commission you owe."
        ]
      },
      {
        "type": "heading",
        "heading": "Accounts to Set Up"
      },
      {
        "type": "list",
        "items": [
          "Provider Commissions, Employees",
          "Provider Commissions, Contractors",
          "Provider Base Pay (hourly or salary)",
          "Employer Payroll Taxes",
          "Medical Director Fees",
          "Commissions Payable (a current liability for commission earned but not yet paid)",
          "Tips Payable (a current liability for tips collected for staff)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Many practices place provider commissions in Cost of Goods Sold (sometimes labelled Cost of Services), next to product cost, so gross profit reflects the full direct cost of a treatment. Others keep them in operating expenses. Choose one approach with your CPA and use it every month, so one month can be compared with the next."
      },
      {
        "type": "heading",
        "heading": "Record Commission in the Month It Is Earned"
      },
      {
        "type": "paragraph",
        "text": "Commission is usually calculated after a pay period ends and paid in the next payroll. If it is only recorded when it is paid, each month carries the previous month's commission, and a busy month looks more profitable than it was. In books kept on the accrual basis, the commission earned during the month is recorded at month end as an expense and as Commissions Payable, and the liability is cleared when payroll runs. Ask your CPA which basis your tax return and your monthly reports use."
      },
      {
        "type": "tip",
        "heading": "Example Only",
        "text": "A provider earns a 30% commission on $20,000 of March treatments, paid as $6,000 with the April 5 payroll. On accrual books, March shows $6,000 of commission expense and a $6,000 Commissions Payable balance at March 31. The April payroll clears it. Use your own rates and pay dates."
      },
      {
        "type": "heading",
        "heading": "Tie the Commission Report to Payroll Every Month"
      },
      {
        "type": "list",
        "items": [
          "Export the provider commission or payroll report from Boulevard, Vagaro, Zenoti or your booking platform for the period.",
          "Check that the sales it is based on agree with the revenue recorded in QuickBooks for the same period. Commission plans differ on whether discounts, refunds or product cost come off first.",
          "Compare the report with the payroll register and contractor payments for that period.",
          "Look into any difference: refunds after payout, manual adjustments or bonuses entered outside the platform.",
          "Record the month-end accrual for commission earned but not yet paid."
        ]
      },
      {
        "type": "heading",
        "heading": "Keep Tips Separate From Commission"
      },
      {
        "type": "paragraph",
        "text": "Tips collected through your booking platform belong to the provider. They are not commission and they are not your income. Record them as a liability when collected and clear that liability when they are paid out through payroll or to a contractor. Mixing tips into commission or into revenue makes both numbers wrong."
      },
      {
        "type": "heading",
        "heading": "What to Review Each Month"
      },
      {
        "type": "list",
        "items": [
          "Provider pay as a share of service revenue, in total and by provider if your platform reports it",
          "Whether that share is changing as prices, discounts or the service mix change",
          "The Commissions Payable and Tips Payable balances, which should return close to zero after each payroll",
          "Medical director fees and contractor totals, so year-end 1099 reporting holds no surprises"
        ]
      },
      {
        "type": "callout",
        "heading": "Quick Check",
        "text": "Open last month's Profit & Loss. If provider commission is not its own line, or if it does not roughly match what your booking platform says was earned that month, provider pay needs to be separated and tied to the commission report."
      },
      {
        "type": "paragraph",
        "text": "This article is general information, not tax, payroll or legal advice. Worker classification, payroll taxes and 1099 requirements depend on your situation, so confirm them with your CPA, payroll provider or employment attorney."
      }
    ]
  },
  {
    id: 'post-016',
    slug: 'medspa-tips-refunds-chargebacks-quickbooks',
    title: 'Tips, Refunds, No-Show Fees and Chargebacks: Where Each Belongs in Med Spa QuickBooks',
    metaTitle: 'Med Spa Tips, Refunds and Chargebacks in QuickBooks',
    metaDescription: 'Where card tips, refunds, no-show fees and chargebacks belong in med spa QuickBooks, so payouts reconcile and revenue is not overstated or understated.',
    excerpt: 'Four small items hide inside almost every booking-software payout. Here is where tips, refunds, no-show fees and chargebacks belong in QuickBooks so your deposits reconcile and your revenue is right.',
    category: 'POS & Reconciliation',
    tags: ['Tips', 'Refunds', 'Chargebacks', 'Payouts', 'QuickBooks', 'MedSpa'],
    publishedDate: '2026-11-24',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1545402138-0c105c73cb4d?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of a payment terminal and payout report',
    content: [
      { type: 'intro', text: 'A payout from your booking or payment software is rarely just treatment revenue. One deposit can include services, retail, card tips, sales tax, refunds, no-show fees and, now and then, a chargeback, all netted against processing fees. If that deposit is posted to QuickBooks as one sales figure, the books are wrong in more than one direction at once. This guide covers where each of those four smaller items belongs, and how they fit into a monthly payout reconciliation.' },
      { type: 'heading', heading: 'Why these four items break your reconciliation' },
      { type: 'paragraph', text: 'Platforms such as Boulevard, Vagaro, Square and Stripe pay out net. They take processing fees, subtract refunds and disputed charges, and add tips your staff earned, then send what is left. When the bank deposit is recorded as income, three problems appear together: revenue is understated by the fees, overstated by the tips, and blurred by refunds and chargebacks that never show up as their own lines. The deposit may still match the bank, but the Profit & Loss no longer describes the business.' },
      { type: 'paragraph', text: `The fix is to record each payout from the platform's own payout or settlement report, not from the bank line alone. The report shows what made up the deposit. Each component then goes to its own account, and the parts add up to the amount that reached the bank.` },
      { type: 'heading', heading: 'Tips: money that belongs to your staff' },
      { type: 'paragraph', text: 'A tip added to a card payment is not practice revenue. The practice collects it on behalf of the provider and owes it to them. If tips are left inside sales, revenue looks higher than it is, and the payroll cost of paying them out looks like an expense the practice took on.' },
      {
        type: 'list',
        items: [
          'Record the treatment or product sale at its price, without the tip.',
          'Record the tip portion to a liability account, for example Tips Payable.',
          'When tips are paid to staff, usually through payroll, the payout clears that liability instead of creating a new expense.',
          'At month end, the Tips Payable balance should equal tips collected but not yet paid out. If it keeps growing, something is not being cleared.',
        ],
      },
      { type: 'paragraph', text: 'How tips are reported on paychecks, and the payroll taxes that apply, are set by your payroll provider and CPA. The bookkeeping job is to keep tip money out of revenue and show clearly what is still owed.' },
      { type: 'heading', heading: 'Refunds: a reduction of revenue, not an expense' },
      { type: 'paragraph', text: 'When you refund a client, the original sale is being partly or fully undone. Record the refund against income, ideally in a separate account under income such as Refunds and Returns, so you can see both gross sales and how much was given back. Posting refunds as an expense hides them among operating costs and makes both revenue and expenses look larger than they really are.' },
      {
        type: 'list',
        items: [
          'Retail product refunds: if the product comes back unopened and can be resold, its cost goes back into inventory.',
          'Refunds of prepaid packages or memberships: if unused treatments were being held as a liability until delivered, the refund reduces that liability, not current income, because the unused part was never counted as income.',
          'Partial refunds and courtesy credits: record the amount actually refunded, and keep the reason in the memo so the pattern is visible later.',
        ],
      },
      { type: 'heading', heading: 'No-show and late-cancellation fees' },
      { type: 'paragraph', text: 'A fee you charge and keep for a missed or late-cancelled appointment is income, but it is not treatment revenue. Give it its own income account, such as Cancellation and No-Show Fees, so it does not inflate the numbers you use to judge how your services perform. If your policy turns the fee into a credit toward a future visit instead, treat it like any other prepayment: a liability until the client uses it, then income when the treatment is delivered.' },
      { type: 'paragraph', text: 'Whether these fees are subject to sales tax is a question for your CPA or sales-tax advisor. Once they decide, the books can record the fee and any tax separately.' },
      { type: 'heading', heading: 'Chargebacks: disputed until decided' },
      { type: 'paragraph', text: 'When a client disputes a card charge, the processor usually takes the disputed amount out of a payout and may add a dispute fee. At that point the outcome is not known yet, so the amount should not be written off as lost revenue straight away.' },
      {
        type: 'list',
        items: [
          'Record the withdrawn amount to a clearing account, for example Chargebacks in Dispute.',
          'Record any dispute fee as a merchant or processing fee expense.',
          'If the dispute is decided in your favor and the money comes back, the returned amount clears the clearing account.',
          'If it is decided against you, move the amount from the clearing account to your refunds or chargebacks account under income.',
        ],
      },
      { type: 'paragraph', text: 'The evidence for a dispute, such as consent forms or appointment details, stays with the practice and the processor. The books only need the amount, the dates and the outcome.' },
      { type: 'heading', heading: 'Putting it together each month' },
      { type: 'paragraph', text: 'For each payout, the platform report is broken into its parts: service revenue, retail sales, sales tax collected, tips payable, refunds, no-show fees, chargebacks and processing fees. Those parts are recorded so that they add up to the deposit the bank received. When every payout in the month is recorded this way, the bank account reconciles, revenue is shown at its true gross amount, and each smaller item has a balance you can check.' },
      { type: 'tip', text: 'Pick one recent payout and trace it end to end. If you can match every dollar of the deposit to a line in your platform report, and see each line in the right QuickBooks account, the rest of the month usually follows the same pattern.' },
      {
        type: 'cta-inline',
        heading: 'Payouts reconciled every month',
        text: 'Monthly bookkeeping matches each payout to its platform report, so tips, refunds, fees and chargebacks each land in the right place.',
        link: { page: 'monthly-bookkeeping', label: 'How monthly bookkeeping for med spas works' },
      },
      { type: 'paragraph', text: 'This article is general information, not tax, payroll or legal advice. Tip reporting, payroll taxes and sales-tax treatment depend on your situation, so confirm them with your CPA and payroll provider.' },
    ],
  },
  {
    id: 'post-017',
    slug: 'medspa-lender-ready-financials',
    title: 'Lender-Ready Financials for a Med Spa: What Lenders and Buyers Ask For',
    metaTitle: 'Lender-Ready Med Spa Financials: What to Prepare',
    metaDescription: 'What lenders, landlords and buyers commonly ask a med spa for, and how to get your QuickBooks books ready before a loan, a second location or a sale.',
    excerpt: 'A loan, a second location, a partner buy-in or a sale all start with the same question: can you show the numbers? Here is what is commonly requested, and what makes med spa financials credible.',
    category: 'QuickBooks & Cleanup',
    tags: ['Lending', 'Financial Statements', 'Balance Sheet', 'Buyers', 'QuickBooks', 'MedSpa'],
    publishedDate: '2026-12-01',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1762831063004-bbd3ea38ba3a?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of organized financial records',
    content: [
      { type: 'intro', text: `Equipment financing, a loan for a second location, a new lease, a partner buy-in or a sale of the practice all lead to the same request: send your financial statements. When the books are current and reconciled, that request takes a few minutes. When they are behind, it can delay the conversation while the numbers are rebuilt. This guide covers what lenders and buyers commonly ask for, and what makes a med spa's financials credible when they look.` },
      { type: 'heading', heading: 'What is commonly requested' },
      { type: 'paragraph', text: 'Every lender, landlord and buyer has its own list, and the periods they want differ. Ask for their list in writing before you start. Most requests are built from the same pieces:' },
      {
        type: 'list',
        items: [
          'Profit & Loss statements for recent full years and the current year to date.',
          'Balance Sheets for the same dates.',
          'Business tax returns, prepared by your CPA, which the statements should tie to.',
          'Bank statements for the business accounts.',
          'A list of debts: loans, equipment financing, lines of credit and their current balances.',
          'Details of owner pay and any personal or one-time expenses that ran through the business.',
        ],
      },
      { type: 'paragraph', text: 'Some reviewers also ask for revenue by service line, provider costs or month-by-month trends. Those are easy to produce when the chart of accounts already separates them, and hard to reconstruct when it does not.' },
      { type: 'heading', heading: 'Reconciled books matter more than polished reports' },
      { type: 'paragraph', text: `A reviewer's first check is whether the numbers hold together. Every bank, credit card and loan account should be reconciled to its statement. Loan balances in QuickBooks should match what the lender says you owe. Equity should roll forward cleanly from one year to the next. And the totals should agree with the tax returns, with any differences explained by your CPA. A well-formatted report built on unreconciled accounts tends to raise more questions than it answers.` },
      { type: 'heading', heading: 'The med spa items reviewers look at closely' },
      {
        type: 'list',
        items: [
          'Prepaid packages, memberships and gift cards: money collected for treatments not yet delivered is an obligation. If it has all been booked as income, the practice looks better than it is, and a buyer will usually find out.',
          'Treatment product cost: neurotoxin, filler and other supplies recorded as cost of the treatments they support, so gross margin by service is visible instead of buried in general expenses.',
          'Provider compensation: commissions and contractor pay on their own lines, so the cost of delivering treatments can be compared with the revenue it produced.',
          'Patient financing and processing fees: revenue recorded at the full treatment price, with financing and card fees shown as their own costs.',
          'Equipment: lasers and other major equipment recorded as assets, with depreciation handled by your CPA, and any equipment financing shown as a liability.',
          'Owner pay and personal expenses: kept separate from operating costs and documented.',
        ],
      },
      { type: 'paragraph', text: 'Buyers often adjust reported profit for owner pay and one-time or personal expenses. Making those adjustments, and valuing the practice, is work for your CPA or a transaction advisor. What the books can do is make every such item easy to find and explain.' },
      { type: 'heading', heading: 'Consistency across years' },
      { type: 'paragraph', text: 'Comparisons only work when the same kinds of transactions land in the same accounts every year. If your chart of accounts changed, or a previous bookkeeper categorized things differently, earlier years may need to be standardized so they can be read side by side. That is organizing work on your existing records, not a change to what was filed with your taxes.' },
      { type: 'heading', heading: 'Common reasons a package gets questioned' },
      { type: 'paragraph', text: 'Reviewers tend to send back the same handful of problems. Each one is easier to fix before the package goes out than after:' },
      {
        type: 'list',
        items: [
          'Totals that do not agree with the tax return, with no explanation of the difference.',
          `Loan or equipment-financing balances that do not match the lender's statements.`,
          'Large Uncategorized Income, Uncategorized Expense or suspense balances.',
          'Personal spending mixed into operating expenses with no way to separate it.',
          'Accounts that have not been reconciled, or that show balances that cannot be right, such as a negative bank balance at month end.',
        ],
      },
      { type: 'heading', heading: 'Leases and equipment financing' },
      { type: 'paragraph', text: 'Not every request is a full loan review. A landlord considering a lease for a new location may ask for recent statements to judge whether the practice can carry the rent. An equipment lender looking at a new laser may focus on cash flow and the debt you already carry. The requests are smaller, but they draw on the same reconciled books, and the same items stand out when they are missing.' },
      { type: 'heading', heading: 'Start before you need it' },
      { type: 'paragraph', text: 'Rebuilding a year of books takes time, and it depends on how quickly statements and payout reports can be gathered. Starting well before a loan application or a sale conversation keeps the books from setting the timetable. If monthly books are already reconciled, most of the package is simply exporting reports and collecting documents.' },
      { type: 'tip', text: 'Keep one folder per year with bank, card and loan statements, the year-end financial statements, the tax return and any loan or lease agreements. When a request arrives, most of the answer is already in one place.' },
      {
        type: 'cta-inline',
        heading: 'Multi-year records, organized',
        text: 'The historical financial records service standardizes several years of statements and assembles a package for lenders, CPAs or advisors to review.',
        link: { page: 'services', label: 'See historical records and reporting' },
      },
      { type: 'paragraph', text: 'This article is general information, not lending, valuation, tax or legal advice. No lender or buyer approval can be promised, since they make their own decisions. Bookkeeping organizes your records; it does not include valuation opinions, audits or tax filings.' },
    ],
  },
  {
    id: 'post-018',
    slug: 'physician-owned-multi-entity-medspa-bookkeeping',
    title: 'Physician-Owned and Multi-Entity Med Spas: Keeping Each Set of Books Straight',
    metaTitle: 'Physician-Owned and Multi-Entity Med Spa Bookkeeping',
    metaDescription: 'How a med spa with a physician owner or several entities keeps separate QuickBooks books, records transfers and owner pay, and hands the CPA a clean year end.',
    excerpt: `When the practice, a management company and the owner's own money all move through the same accounts, none of the books can be read. Here is how to keep each entity's books separate and the transfers between them clear.`,
    category: 'QuickBooks & Cleanup',
    tags: ['Multi-Entity', 'Owner Pay', 'Intercompany', 'Management Company', 'QuickBooks', 'MedSpa'],
    publishedDate: '2026-12-08',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1707902665498-a202981fb5ac?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of organized financial records',
    content: [
      { type: 'intro', text: 'Many med spas have a physician or nurse practitioner as owner or medical director, and some operate through more than one entity, such as a practice entity and a separate management or holding company. When money for all of them moves through the same accounts, owner pay, personal spending and transfers get mixed together, and none of the entities has books anyone can rely on. This guide covers how to keep the bookkeeping straight once the structure is in place.' },
      { type: 'callout', text: `How your entities should be structured, who may own what, and how the arrangement complies with your state's rules are decisions for your attorney and CPA. Bookkeeping does not decide them. Its job is to record the structure you have, accurately and consistently.` },
      { type: 'heading', heading: 'One entity, one set of books' },
      { type: 'paragraph', text: 'Each legal entity needs its own QuickBooks Online company and its own bank account. QuickBooks Online keeps one set of books per company, so two entities in one file means one set of statements describing two businesses. Classes and locations are useful for tracking parts of a single business, such as service lines or sites, but they are not a substitute for separate books when there are separate legal entities.' },
      { type: 'paragraph', text: `Separate books also make each entity's own questions answerable: what the practice earned, what the management company charged, and what each owes the other.` },
      { type: 'heading', heading: 'Recording money that moves between entities' },
      { type: 'paragraph', text: 'Transfers between related entities are not income or expenses on their own. When one entity pays a bill for another, or sends it cash, the books on both sides should show a balance owed: a Due From account in the entity that paid, and a matching Due To account in the entity that received the benefit.' },
      {
        type: 'list',
        items: [
          'Management fees: record them exactly as your written agreement sets them, on the schedule it sets. The fee is income in the management company and an expense in the practice, in the same amount and the same period on both sides.',
          'Shared costs: if one entity pays rent, software or staff that both use, record the share the other owes according to the agreement, not an estimate made at year end.',
          'Matching balances: each month, the amount one entity shows as owed to it should equal the amount the other shows as owing. When they differ, find out why before it compounds.',
        ],
      },
      { type: 'heading', heading: 'Signs the entities are mixed together' },
      {
        type: 'list',
        items: [
          'One bank account or card is used for more than one entity.',
          'The management fee is paid in irregular round amounts that do not follow the agreement.',
          `The owner's personal card pays business bills, with nothing recorded to show who owes whom.`,
          'Due To and Due From balances that do not match, or that only appear in a large year-end entry.',
        ],
      },
      { type: 'heading', heading: 'Owner pay depends on the entity, and your CPA decides it' },
      { type: 'paragraph', text: `How an owner is paid depends on how each entity is set up for tax purposes, and that is your CPA's call. The books then follow it. Pay that runs through payroll is recorded as wages. Owner draws or distributions are recorded in equity, not as expenses. Money an owner puts in is recorded as a contribution or a loan, according to how it was agreed and documented.` },
      { type: 'paragraph', text: 'A physician owner who is also paid a medical director fee should see that fee on its own line, recorded the way the arrangement is set up, rather than mixed into general payroll or owner draws.' },
      { type: 'heading', heading: 'Personal expenses paid by the business' },
      { type: 'paragraph', text: 'Personal spending on a business card is common, and it can be handled cleanly. Record it as an owner draw or distribution, or as an amount the owner owes the business, rather than as a business expense. Whether any particular expense is deductible is for your CPA to decide. Keep the receipts and a short note of what each item was, so the answer is easy when they ask.' },
      { type: 'paragraph', text: 'The reverse happens too. When an owner pays a business cost personally, record it as a contribution or as an amount the business owes the owner, depending on how it was agreed. Either way, it should be visible in the books, not left out because it never touched the business account.' },
      { type: 'heading', heading: 'Starting from books that are already mixed' },
      { type: 'paragraph', text: 'If the entities have shared accounts for a while, the fix is to work back through the periods in question, entity by entity. Transfers are reclassified into Due To and Due From balances, owner items are separated from operating costs, and anything that needs a judgment is listed for your CPA rather than guessed. It is detailed work, but once the history is sorted, keeping it clean each month is routine.' },
      { type: 'heading', heading: 'What to hand your CPA at year end' },
      {
        type: 'list',
        items: [
          'Reconciled books for each entity, with every bank, card and loan account matched to its statement.',
          'Intercompany balances that agree on both sides.',
          'The management agreement and any changes made during the year.',
          'Documents for any loans between the entities, or between an entity and the owner.',
          'A summary of owner draws, distributions and contributions for each entity.',
          'Payroll reports, including any medical director pay.',
        ],
      },
      { type: 'tip', text: 'Reconcile the intercompany balances every month, not only at year end. A small difference found in March takes minutes to trace. The same difference found the following February can take much longer.' },
      {
        type: 'cta-inline',
        heading: 'Untangle owner and intercompany activity',
        text: `A QuickBooks cleanup separates and documents owner, personal and intercompany transactions so each entity's books can be read and your CPA can follow them.`,
        link: { page: 'quickbooks-cleanup', label: 'See how a med spa cleanup works' },
      },
      { type: 'paragraph', text: 'This article is general information, not tax or legal advice. Entity structure, ownership rules, owner compensation and deductibility depend on your situation and your state, so confirm them with your attorney and CPA.' },
    ],
  },
  {
    id: 'post-019',
    slug: 'iv-hydration-cost-per-drip-nurse-pay-quickbooks',
    title: 'IV Hydration Costs in QuickBooks: Supply Cost per Drip, Mobile Visits and Nurse Pay',
    metaTitle: 'IV Hydration Cost per Drip and Nurse Pay in QuickBooks',
    metaDescription: 'How an IV hydration clinic can track supply cost per drip, mobile visit costs and nurse pay in QuickBooks, so you can see which drips actually make money.',
    excerpt: 'Fluids, vitamins and tubing in one Supplies account, and nurse pay in one payroll line, hide what each drip costs to deliver. Here is how to set up IV supply cost, mobile costs and nurse pay so your books show your real margins.',
    category: 'Costs & Inventory',
    tags: ['IV Hydration', 'Cost of Goods Sold', 'Nurse Pay', '1099', 'Mobile IV', 'QuickBooks'],
    publishedDate: '2026-10-07',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1746806942787-947eebe640d6?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of IV supplies and a cost report',
    content: [
      { type: 'intro', text: `In an IV hydration business, the cost of a drip comes mostly from two things: what goes into the bag and who gives it. In many QuickBooks files both are hard to find. Fluids, vitamins and tubing sit in a general Supplies account, and nurse pay sits in one Payroll or Contract Labor line. The Profit & Loss shows what you spent, but it can't tell you what a drip on your menu costs to deliver, or whether mobile visits pay for the extra time they take. This guide covers how to record supply cost, mobile costs and nurse pay so each month answers those questions.` },
      { type: 'heading', heading: 'Why one "Supplies" account hides your drip margins' },
      { type: 'paragraph', text: `Fluid bags, vitamins and additives, and the start kits, catheters and tubing used for each infusion are there because a drip was given. They are direct costs, or cost of goods sold, and belong above gross profit. Gloves, sanitizer, paper goods and office supplies are overhead. When both sit in the same account, there is no gross profit line, and a supplier's price increase disappears into a number nobody watches.` },
      { type: 'paragraph', text: 'Adjusted to your menu and your CPA\'s preferences, a typical setup separates:' },
      {
        type: 'list',
        items: [
          'Cost of Goods Sold, IV fluids and administration supplies: bags, start kits, catheters and tubing',
          'Cost of Goods Sold, vitamins, additives and injections used in drips and add-on shots',
          'Cost of Goods Sold, premium infusions such as NAD+, if they are a meaningful part of your sales',
          'Product Waste and Expired Supplies, if you count stock and want to see what is lost',
          'Clinic Supplies (overhead): gloves, sanitizer, linens and other items not tied to a single drip',
        ],
      },
      { type: 'heading', heading: 'Working out your cost per drip' },
      { type: 'paragraph', text: `Start from your menu, not your invoices. For each drip, list what goes into it: the fluid bag, the start kit and tubing, and each vitamin or additive at its usual amount. Price each item from recent invoices, dividing what you paid by what you received (per bag, per vial or per dose), and add them up. That total is your supply cost per drip. Recheck it whenever a supplier changes prices or you change a recipe.` },
      { type: 'paragraph', text: `Example only: say a hydration drip uses a fluid bag, a start kit and tubing, and a vitamin blend that together cost $28, and it sells for $159. Supplies take about 18% of the price, leaving $131 before the nurse's time. A drip with a premium additive might cost $120 in supplies and sell for $299. The price is higher, but supplies take about 40% of it. Use your own invoices and prices; these numbers only show the method.` },
      { type: 'paragraph', text: `Cost per drip lives in a simple worksheet beside your books, not in QuickBooks itself. QuickBooks then tells you whether the month's total supply cost matches what your sales say it should be. For example, if you gave 300 drips and your worksheet says they should have used about $9,000 of supplies, a cost of goods sold line well above that points to waste, over-ordering or a recipe that has drifted.` },
      { type: 'heading', heading: 'Record supplies when bought, or count them monthly' },
      { type: 'paragraph', text: `Most IV supplies are bought often and used quickly, so many clinics record them straight to cost of goods sold when they are bought and accept small timing differences. If you keep larger stock, such as a case order of a premium additive or several weeks of fluids, a monthly count lets you hold what is on the shelf as inventory and move only what was used to cost. Higher QuickBooks Online plans can also track quantities item by item, which suits clinics with high volume or more than one location. The right method depends on your volume and how much stock you hold. How inventory is treated on your tax return is your CPA's decision.` },
      { type: 'heading', heading: 'Mobile visits: separate the revenue and the cost' },
      { type: 'paragraph', text: `A mobile visit can carry a higher price, but it also carries costs an in-clinic drip doesn't: nurse travel time, mileage or vehicle costs, and sometimes a second staff member. If mobile and in-clinic revenue share one income account and travel costs sit in general auto expense, you can't tell whether mobile service earns its place.` },
      {
        type: 'list',
        items: [
          'Give mobile services their own income account, or tag them with a class or location in QuickBooks Online if your plan includes those features.',
          'Record mileage reimbursements, vehicle costs and mobile-only supplies so they can be pulled out on their own.',
          'If nurses are paid differently for mobile visits, such as a travel stipend or a per-visit rate, record that pay so it can be traced to mobile work.',
          'Each month, compare mobile revenue with its direct costs, not just its sales.',
        ],
      },
      { type: 'heading', heading: 'Nurse pay: record it so you can read it' },
      { type: 'paragraph', text: 'Nurse pay is usually the largest cost of a drip after supplies, and sometimes larger. How it is recorded depends on the arrangement:' },
      {
        type: 'list',
        items: [
          'Employed nurses (W-2): paid through payroll, with withholding and employer payroll taxes. If nurses are paid hourly for clinic shifts and per visit for mobile work, keep those as separate pay items so you can see each one.',
          'Contract nurses (1099): paid as vendors, not through payroll. Turn on 1099 tracking in QuickBooks Online from the first payment and map contractor payments to the right category, so year-end forms are complete. The reporting threshold changed for payments made from 2026, so confirm the current amount with your CPA.',
          'Medical director: record the fee on its own expense line, in the amount and on the schedule your written agreement sets, rather than mixing it into payroll or contract labor.',
        ],
      },
      { type: 'paragraph', text: 'Whether a nurse is an employee or an independent contractor is a legal and tax decision for your CPA, payroll provider or employment attorney. Bookkeeping does not decide it. Its job is to record each arrangement correctly once it is set.' },
      { type: 'paragraph', text: 'Many clinics place nurse pay that varies with visits, such as per-drip or per-visit pay, in cost of goods sold (sometimes labeled Cost of Services), so gross profit reflects the full cost of delivering a drip. Others keep all nurse pay in operating expenses. Choose one approach with your CPA and use it every month, so one month can be compared with the next.' },
      { type: 'heading', heading: 'What to review each month' },
      {
        type: 'list',
        items: [
          'Supply cost as a share of drip revenue, compared with what your cost-per-drip worksheet predicts',
          'Gross profit for mobile and in-clinic service, each on its own',
          'Nurse pay as a share of service revenue, with employees and contractors shown separately',
          'Contractor totals for the year to date, so year-end 1099 reporting holds no surprises',
          'Waste and expired supplies, if you count stock',
        ],
      },
      { type: 'paragraph', text: 'Bookkeeping needs totals and counts, not patient names or clinical details. Record supply use by date, product and quantity, and keep patient information out of QuickBooks memos, attachments and reports.' },
      { type: 'tip', text: `Open last month's Profit & Loss. If there is no Cost of Goods Sold section, or IV fluids sit in the same account as gloves and paper towels, start by separating supplies. That one change makes the rest of these numbers possible.` },
      {
        type: 'cta-inline',
        heading: 'Books set up for IV hydration',
        text: 'IV hydration bookkeeping separates supply cost, mobile and in-clinic revenue and nurse pay, so each month shows which drips and services make money.',
        link: { page: 'iv-hydration', label: 'How IV hydration bookkeeping works' },
      },
      { type: 'paragraph', text: 'This article is general information, not tax, payroll or legal advice. Inventory treatment, worker classification and 1099 requirements depend on your situation, so confirm them with your CPA, payroll provider or employment attorney.' },
    ],
  },
  {
    id: 'post-020',
    slug: 'glp1-medication-cost-medical-director-pay-quickbooks',
    title: 'GLP-1 Medication Cost and Medical Director Pay in QuickBooks: A Guide for Weight Loss Clinics',
    metaTitle: 'GLP-1 Medication Cost and Provider Pay in QuickBooks',
    metaDescription: 'How a weight loss clinic can record GLP-1 medication cost, pharmacy shipping, medical director fees and provider pay in QuickBooks to see real margins.',
    excerpt: 'When pharmacy invoices sit in a general supplies account and provider pay sits in one payroll line, a weight loss program can look healthy while medication quietly takes more of every fee. Here is how to record both so each program month shows what it costs.',
    category: 'Costs & Inventory',
    tags: ['Medical Weight Loss', 'GLP-1', 'Cost of Goods Sold', 'Medical Director', 'Provider Pay', 'QuickBooks'],
    publishedDate: '2026-10-07',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1752842936201-44291aee473f?auto=format&fit=crop&w=1400&q=80',
    coverAlt: 'Illustration of medication supplies and a cost report',
    content: [
      { type: 'intro', text: `In a medical weight loss program, two costs decide whether a patient month makes money: the medication and the clinical time behind it. Both are easy to lose in the books. Pharmacy invoices land in a general Supplies or Medical Supplies account, shipping and cold packs land somewhere else, and medical director and provider pay sit in one payroll line. The program fee can look healthy while the medication behind it takes a bigger share every month. This guide covers how to record medication cost and provider pay so your books show what each program month really costs.` },
      { type: 'heading', heading: 'Medication is cost of goods sold, not supplies' },
      { type: 'paragraph', text: `GLP-1 medication such as semaglutide or tirzepatide, and any other medication you dispense, is a direct cost: it is in your books because a patient received it. It belongs in cost of goods sold, above gross profit. So does what it takes to get it to you or your patient, such as pharmacy shipping, cold-chain packaging, and the syringes or supplies dispensed with it. Rent, software and front-desk costs stay in operating expenses.` },
      { type: 'paragraph', text: 'Adjusted to your program and your CPA\'s preferences, a typical setup separates:' },
      {
        type: 'list',
        items: [
          'Cost of Goods Sold, GLP-1 medication',
          'Cost of Goods Sold, other medications and injections, such as B12 add-ons',
          'Cost of Goods Sold, pharmacy shipping and cold-chain packaging',
          'Cost of Goods Sold, supplements and retail products, if you sell them',
          'Shipping to Patients, if you mail medication from the clinic',
        ],
      },
      { type: 'paragraph', text: 'Where you source medication is a decision for your medical team and advisors, not your bookkeeper. The books record what you bought, from whom and at what cost, so that when sourcing or prices change, you see the effect in the same month.' },
      { type: 'heading', heading: 'Ordered per patient, or held in stock' },
      { type: 'paragraph', text: `How the cost is recorded depends on how you buy. If medication is ordered for a specific patient and dispensed right away, the invoice can go straight to cost of goods sold. If you keep stock on hand, such as vials in the clinic refrigerator for several weeks of patients, that stock is inventory. It is recorded as an asset when bought and moved to cost as it is dispensed, using a monthly count or item-level tracking on QuickBooks Online plans that include it. Medication that expires or is discarded goes to its own waste account, so the loss is visible rather than buried in cost. How inventory is treated on your tax return is your CPA's decision.` },
      { type: 'heading', heading: 'Track medication cost by dose, not just in total' },
      { type: 'paragraph', text: `Patients on a GLP-1 program often move up in dose over the first months. Depending on how your supplier prices each strength, the medication cost per patient month can rise with the dose, while many programs charge the same monthly fee throughout. A single medication cost line shows the overall trend, but it can't show that patients further into the program cost more each month than newer ones.` },
      { type: 'paragraph', text: `Example only: say your program fee is $399 a month. If a patient's medication costs you $110 in an early month and $240 at a later dose, medication goes from about 28% of that patient's fee to about 60%. Use your own invoices, dosing schedule and prices; these numbers only show why the split matters.` },
      { type: 'paragraph', text: `A simple monthly worksheet beside QuickBooks, with active patients at each dose level multiplied by your current cost for that level, shows what medication should have cost that month. If QuickBooks shows much more, look for price changes, waste, or medication dispensed without a matching charge.` },
      { type: 'heading', heading: 'Bundled or separate pricing' },
      { type: 'paragraph', text: 'Some programs charge one monthly fee that includes medication. Others charge a program fee and bill medication separately. Either works for the books, as long as medication cost is recorded on its own line:' },
      {
        type: 'list',
        items: [
          'Separate pricing: program fees and medication sales go to their own income accounts, and medication margin is medication revenue less medication cost.',
          'Bundled pricing: one program income account, with medication cost watched as a share of it each month. If you want medication shown as its own revenue line, agree with your CPA how to split the bundled fee before you start.',
          'Prepaid months or packages: fees collected before the care is delivered are held as a liability and recognized as each month is delivered, using the approach agreed with your CPA.',
        ],
      },
      { type: 'heading', heading: 'Medical director fees on their own line' },
      { type: 'paragraph', text: `Medical director arrangements differ from clinic to clinic. Whatever yours is, record the fee the way your written agreement sets it, in the same amount and for the same period, on its own expense account. Don't mix it into payroll, contract labor or general professional fees. That makes it easy to check against the agreement, and easy for your CPA to find at year end. If the medical director is paid as a contractor, turn on 1099 tracking from the first payment. If the medical director is also an owner, keep the fee separate from owner draws or distributions. How the arrangement itself is structured is a question for your attorney.` },
      { type: 'heading', heading: 'Provider pay: consultations and follow-ups' },
      { type: 'paragraph', text: 'The nurse practitioners, physician assistants, nurses and other clinicians who run consultations and follow-ups are the clinical time behind each program month. Record their pay so it can be read:' },
      {
        type: 'list',
        items: [
          'Employees (W-2): paid through payroll, with provider pay as its own payroll expense, separate from front-desk and admin pay.',
          'Contractors (1099): paid as vendors, with 1099 tracking turned on from the first payment. The reporting threshold changed for payments made from 2026, so confirm the current amount with your CPA.',
          'Pay per visit: recorded so it can be matched against visit counts from your scheduling or EMR reports.',
        ],
      },
      { type: 'paragraph', text: 'Whether a provider is an employee or an independent contractor is a legal and tax decision for your CPA, payroll provider or employment attorney. Bookkeeping does not decide it. Its job is to record each arrangement correctly once it is set.' },
      { type: 'heading', heading: 'What to review each month' },
      {
        type: 'list',
        items: [
          'Medication cost as a share of program and medication revenue, compared with your dose worksheet',
          'Medication cost per active patient, and how it changes as patients move through the program',
          'Provider pay and medical director fees, each as a share of revenue',
          'Pharmacy shipping and cold-chain costs, which are easy to overlook until they add up',
          'Contractor totals for the year to date, for year-end 1099 reporting',
        ],
      },
      { type: 'paragraph', text: 'Bookkeeping needs totals and counts, not patient names or clinical details. Active patients by dose level can come from a summary report, and patient information stays out of QuickBooks memos, attachments and reports.' },
      { type: 'tip', text: `Compare last month's medication cost with last month's program revenue. If you can't, because medication sits in a general supplies account, that is the first change to make.` },
      {
        type: 'cta-inline',
        heading: 'Books set up for weight loss programs',
        text: 'Medical weight loss bookkeeping separates medication cost, program fees, provider pay and medical director fees, so each month shows what your program really earns.',
        link: { page: 'medical-weight-loss', label: 'How medical weight loss bookkeeping works' },
      },
      { type: 'paragraph', text: 'This article is general information, not tax, payroll, legal or medical advice. Inventory treatment, worker classification and 1099 requirements depend on your situation, so confirm them with your CPA, payroll provider or attorney.' },
    ],
  },
];

/**
 * Published articles: those dated on or before the day the site was built. An article with a future
 * publishedDate stays hidden (no page, not listed, not in the sitemap) until a build on or after that date.
 * .github/workflows/publish-scheduled.yml rebuilds the site on each scheduled date.
 */
export const blogPosts: BlogPost[] = allBlogPosts.filter((p) => p.publishedDate <= BUILD_DATE);

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
};
