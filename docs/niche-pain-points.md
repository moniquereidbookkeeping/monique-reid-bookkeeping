# MedSpa Niche Pain Points: Content Reference

Use this file when writing blog posts, FAQs, page copy or emails (human or AI) for Monique Reid Bookkeeping.
Pain and ease scores are the site owner's advisor judgment (not survey data). Scale 1-5 (ease 5 = simplest to solve).

## Audience
MedSpas, aesthetic clinics, IV hydration and wellness practices, medical weight-loss practices, related self-pay healthcare. Fort Lauderdale FL based, serves clients nationwide. QuickBooks Online only.

## Pain points, ranked by pain

| # | Pain point | Pain | Ease | Where it lives on the site |
|---|---|---|---|---|
| 1 | Behind or messy books, months uncategorized (cleanup) | 5 | 3 | Pricing page cleanup tiers; FAQ |
| 2 | Prepaid packages, memberships and gift cards booked as income (deferred revenue) | 5 | 3 | Home problem card 03; FAQ faq-9 |
| 3 | POS payouts that do not match gross sales | 5 | 4 | Home problem card 01; FAQ |
| 4 | Treatment cost and inventory buried in generic expenses | 5 | 3 | Home problem card 04; blog chart of accounts |
| 5 | Owner is a physician or NP, multi-entity, owner pay mixed in | 4 | 3 | FAQ faq-9b (no article yet) |
| 6 | Books that cannot support a loan, a sale or a new location | 3 | 4 | Home problem card 05; FAQ faq-9c (no article yet) |
| 7 | Patient financing fees (Cherry, CareCredit, PatientFi) hidden in deposits | 3 | 5 | Home problem card 02 |
| 8 | Tips, refunds, no-show fees, chargebacks | 3 | 4 | FAQ (payout question) |
| 9 | Manufacturer rebates and rewards (Allē, ASPIRE) | 3 | 4 | Blog post-010; FAQ faq-9a |
| 10 | 1099 injectors, medical director fees, booth rent | 3 | 5 | FAQ (contractors and Medical Directors) |
| 11 | Product waste and expiry (vials) | 2 | 2 | Not promised on site (needs owner stock counts) |

## Ideas not yet written (good for new posts)
- Physician-owner and multi-entity books: owner pay, transfers, what to give the CPA
- Lender-ready financials for a MedSpa: what lenders and buyers ask for
- Tips, refunds, no-shows and chargebacks: where each belongs
- 1099 injectors, medical director fees and booth rent: coding and year-end
- Patient financing fees: Cherry, CareCredit, PatientFi in QuickBooks
- Deferred revenue for packages and memberships (check tax claims with CPA wording)
- Product waste and expiry (only if a monthly inventory process exists)

Published posts: chart of accounts; is my MedSpa profitable (QuickBooks reports); what your CPA needs; month-end close checklist; manufacturer rebates and rewards. Archived older posts live in `src/data/archivedBlogPosts.ts` (hidden; re-check facts before restoring).

## Rules for any new content
- Voice: no "we/our" on marketing pages. "I" only where Monique speaks (About, Contact intro, booking emails). Privacy and Terms keep "we".
- No HIPAA compliance claims. Do not say or imply she handles patient medical records.
- No guarantees of results, approval, savings or timelines. No unconfirmed contract terms (cancellation, notice periods) until the written service agreement exists.
- Tax and depreciation treatment: coordinate with the client's CPA. Never give tax advice or tax-return services. Structure decisions go to attorney and CPA.
- Software-specific statements (Boulevard, Vagaro, Square, QuickBooks features, Allē, ASPIRE): keep general and hedged unless verified. Programs differ by manufacturer and contract.
- Figures: examples only, labeled as examples. Plans: Essential $497, Growth $797, Full-Spectrum $1,197. Cleanup $597 (1-3 months), $1,297 (4-6), $1,997 (7-12), custom quote for 13+ months or multiple entities.
- Call: free 20-minute private Zoom call. Button label exactly: "Book Your Free 20-Min Clarity Call". Name: Financial Clarity Call.
- Credential: Intuit QuickBooks Online ProAdvisor. No degree claims on the site.
- Post format: see `BlogPost` in `src/types.ts`; section types intro, heading, paragraph, list, callout, tip. Add to `src/data/blogPosts.ts`; the sitemap picks up new slugs on build.
