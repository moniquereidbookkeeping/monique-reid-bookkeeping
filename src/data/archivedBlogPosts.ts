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
];
