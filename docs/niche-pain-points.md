# MedSpa Niche Pain Points: Content Reference

Use this file when writing blog posts, FAQs, page copy or emails (human or AI) for Monique Reid Bookkeeping.
Pain and ease scores are the site owner's advisor judgment (not survey data). Scale 1-5 (ease 5 = simplest to solve).

## Audience
MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, related self-pay healthcare. Fort Lauderdale FL based, serves clients nationwide. QuickBooks Online only.
Works fully remote (Zoom, QuickBooks Online, phone, email): no office visits and no public street address. Fort Lauderdale service area (owner-confirmed): Fort Lauderdale, Wilton Manors, Oakland Park, Plantation, Davie and greater Broward County. Public phone 386-297-9815; email monique@moniquereidbookkeeping.com.

## Pain points, ranked by pain

| # | Pain point | Pain | Ease | Where it lives on the site |
|---|---|---|---|---|
| 1 | Behind or messy books, months uncategorized (cleanup) | 5 | 3 | Pricing page cleanup tiers; FAQ |
| 2 | Prepaid packages, memberships and gift cards booked as income (deferred revenue) | 5 | 3 | Home problem card 03; FAQ faq-9; blog membership and package revenue (live) |
| 3 | POS payouts that do not match gross sales | 5 | 4 | Home problem card 01; FAQ; blog Boulevard and Vagaro reconciliation (live) |
| 4 | Treatment cost and inventory buried in generic expenses | 5 | 3 | Home problem card 04; blog neurotoxin/filler cost (live); blog chart of accounts (scheduled 2026-10-20); IV supply cost per drip and GLP-1 medication cost articles (live) |
| 5 | Owner is a physician or NP, multi-entity, owner pay mixed in | 4 | 3 | FAQ faq-9b; article scheduled 2026-12-08 (not live yet) |
| 6 | Books that cannot support a loan, a sale or a new location | 3 | 4 | Home problem card 05; FAQ faq-9c; article scheduled 2026-12-01 (not live yet) |
| 7 | Patient financing fees (Cherry, CareCredit, PatientFi) hidden in deposits | 3 | 5 | Home problem card 02; article scheduled 2026-10-13 (not live yet) |
| 8 | Tips, refunds, no-show fees, chargebacks | 3 | 4 | FAQ (payout question); article scheduled 2026-11-24 (not live yet) |
| 9 | Manufacturer rebates and rewards (Allē, ASPIRE) | 3 | 4 | FAQ faq-9a; blog post-010 rebates (scheduled 2026-11-17) |
| 10 | 1099 injectors, medical director fees, booth rent | 3 | 5 | FAQ (contractors and Medical Directors); IV nurse pay and GLP-1 medical director and provider pay articles (live); provider-commission article scheduled 2026-11-03 covers part of it |
| 11 | Product waste and expiry (vials) | 2 | 2 | Not promised on site (needs owner stock counts) |

## Ideas not yet written (good for new posts)
- 1099 injectors and booth rent in a med spa: coding and year-end (IV nurse pay and weight-loss medical director pay now have their own articles)
- Product waste and expiry (only if a monthly inventory process exists)

Status is set by `publishedDate` in `src/data/blogPosts.ts`: a post goes live with the first build on or after that date. Check there before relying on this list.

Published (live): Boulevard and Vagaro reconciliation; membership and package revenue; neurotoxin and filler cost (all 2026-10-06); IV hydration cost per drip and nurse pay; GLP-1 medication cost and medical director pay (both 2026-10-07).

Scheduled (written, not live yet): Cherry, CareCredit and Affirm financing (2026-10-13); chart of accounts (2026-10-20); is my MedSpa profitable (2026-10-27); provider commission (2026-11-03); month-end close checklist (2026-11-10); manufacturer rebates and rewards (2026-11-17); tips, refunds, no-shows and chargebacks (2026-11-24); lender-ready financials (2026-12-01); physician-owned and multi-entity books (2026-12-08); what your CPA needs (2027-01-05). Archived older posts live in `src/data/archivedBlogPosts.ts` (hidden; re-check facts before restoring).

## Rules for any new content
- Voice: no "we/our" on marketing pages. "I" only where Monique speaks (About, Contact intro, booking emails). Privacy and Terms keep "we".
- No HIPAA compliance claims. Do not say or imply she handles patient medical records.
- No guarantees of results, approval, savings or timelines. One owner-confirmed exception (October 2026): monthly reports are delivered by the 15th of the following month. No unconfirmed contract terms (cancellation, notice periods) until the written service agreement exists.
- Tax and depreciation treatment: coordinate with the client's CPA. Never give tax advice or tax-return services. Structure decisions go to attorney and CPA.
- Software-specific statements (Boulevard, Vagaro, Square, QuickBooks features, Allē, ASPIRE): keep general and hedged unless verified. Programs differ by manufacturer and contract.
- Figures: examples only, labeled as examples. Plans: Essential $497, Growth $797, Full-Spectrum $1,197. Cleanup $597 (1-3 months), $1,297 (4-6), $1,997 (7-12), custom quote for 13+ months or multiple entities.
- Call: free 20-minute private Zoom call. Button label exactly: "Book Your Free 20-Min Clarity Call". Name: Financial Clarity Call.
- Credentials (use only this wording): Certified Intuit ProAdvisor; QuickBooks ProAdvisor Gold Tier; QuickBooks Workforce Certified; QuickBooks Online Level 2 Certified. (Owner-confirmed October 2026: the About page badges are Gold Tier, Workforce Certified and Level 2 Certified — Payroll Certified is no longer shown.)
- Degree: Bachelor of Business Administration. Owner-confirmed (October 2026) and allowed on the site, as on the About page. No other degree or license claims.
- Post format: see `BlogPost` in `src/types.ts`; section types intro, heading, paragraph, list, callout, tip. Add to `src/data/blogPosts.ts`; the sitemap picks up new slugs on build.
