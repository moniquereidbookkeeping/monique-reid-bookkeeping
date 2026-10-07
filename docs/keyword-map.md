# Keyword Map: Which Page Targets Which Search Terms

Use this file before writing or changing any page, article or AI article draft for Monique Reid Bookkeeping.
Each search term belongs to exactly one page. Two pages chasing the same term compete with each other,
and neither ranks well.

Volumes are not included: most "service + city" terms get very few searches each, but the people searching
are ready to hire. Check real numbers in Google Search Console (Performance > Queries) once the site is
indexed, and update this map from what people actually search.

## Rules

1. **One primary term per page.** Secondary terms are close variants of the same need.
2. **No city or county copies.** Near-identical pages per place look like doorway pages to Google. The one
   exception is Fort Lauderdale, the home base: its page carries the Fort Lauderdale and Broward terms and is built
   on facts the South Florida page does not have (fully remote service, the owner-confirmed service area, phone
   and email). South Florida and Florida terms stay on the South Florida page. Do not add more city pages unless
   each has its own real facts.
3. **Write the way people search.** Use "med spa", "MedSpa" and "medical spa" naturally on key pages.
4. **New article? Check here first.** If its main term already belongs to a page, improve that page instead.

## The map

Status: **Live** (on the site), **Scheduled** (publishes on that date; see the README) or **To set up** (outside the website).

| Page | Status | Primary term | Secondary terms (keyword #) | Stage |
|---|---|---|---|---|
| `/fort-lauderdale-med-spa-bookkeeping` | Live | med spa bookkeeper Fort Lauderdale (#1) | med spa bookkeeping Fort Lauderdale (#2), bookkeeping for med spas Fort Lauderdale (#11), QuickBooks bookkeeper Fort Lauderdale (#12), aesthetic practice bookkeeping Fort Lauderdale (#14), med spa bookkeeper Broward County (#15), QuickBooks bookkeeper Broward County (#17), med spa bookkeeping Broward County (#18) | Decision |
| `/medspa-bookkeeping-south-florida` | Live | med spa bookkeeping South Florida (#20) | med spa bookkeeper South Florida (#5), aesthetic practice bookkeeping South Florida (#21), QuickBooks bookkeeping South Florida (#22), med spa bookkeeper Florida (#6), aesthetic practice bookkeeping Florida (#9), med spa bookkeeping Florida (#24), bookkeeping for med spas Florida (#25), medical spa bookkeeping Florida (#26), aesthetic clinic bookkeeper Florida (#27) | Decision |
| `/quickbooks-cleanup` | Live | QuickBooks cleanup for med spa (#7) | QuickBooks cleanup Fort Lauderdale (#3), QuickBooks cleanup South Florida (#23), QuickBooks cleanup services Florida (#34), catch up bookkeeping Florida (#35), bookkeeping cleanup services Florida (#36) | Decision |
| `/` (home) | Live | med spa bookkeeper (national) | med spa bookkeeping, medical spa bookkeeping, aesthetic practice bookkeeping (national terms, not in the list of 50) | Decision |
| `/services` | Live (hub) | med spa bookkeeping services (overview of every service) | wellness practice bookkeeping Florida (#28) | Consideration |
| `/monthly-bookkeeping` | Live | monthly bookkeeping for med spa (#8) | monthly bookkeeping services Florida (#37), monthly med spa bookkeeping, ongoing QuickBooks bookkeeping for aesthetic practices | Consideration |
| `/quickbooks-setup-medspa` | Live | QuickBooks setup for med spa (#39) | QuickBooks setup services Florida (#38), QuickBooks Online setup for aesthetic clinics | Consideration |
| `/medspa-financial-reporting` | Live | financial reporting for med spas (#10) | med spa KPI reporting (#40), med spa profit and margin reports | Consideration |
| `/pricing` | Live | med spa bookkeeping pricing / cost | none (#37 moved to `/monthly-bookkeeping`) | Decision |
| `/about` | Live | QuickBooks ProAdvisor Florida (#33) | QuickBooks bookkeeper Florida (#32) | Decision |
| `/dashboard` | Live (tool) | med spa P&L dashboard example | none (supports `/medspa-financial-reporting`; do not target #10 or #40 here) | Consideration |
| `/iv-hydration-bookkeeping` | Live | IV hydration bookkeeping Florida (#29) | IV drip / IV therapy business bookkeeping | Consideration |
| `/medical-weight-loss-bookkeeping` | Live | medical weight loss bookkeeping Florida (#30) | GLP-1 clinic bookkeeping Florida (#31) | Consideration |
| `/blog/medspa-membership-revenue-quickbooks` | Live | med spa membership bookkeeping (#41) | med spa package bookkeeping (#42), deferred revenue med spa | Awareness |
| `/blog/track-neurotoxin-filler-costs-quickbooks` | Live | med spa inventory bookkeeping (#44) | Botox inventory bookkeeping (#45), med spa COGS tracking (#46) | Awareness |
| `/blog/reconcile-boulevard-vagaro-quickbooks` | Live | Boulevard QuickBooks reconciliation (#47) | Vagaro QuickBooks reconciliation (#48) | Awareness |
| `/blog/record-cherry-carecredit-affirm-financing-quickbooks` | Scheduled 2026-10-13 | Cherry financing bookkeeping med spa (#49) | CareCredit reconciliation med spa (#50) | Awareness |
| `/blog/medspa-provider-commission-bookkeeping` | Scheduled 2026-11-03 | med spa provider commission bookkeeping (#43) | med spa payroll QuickBooks, 1099 vs W-2 providers | Awareness |
| `/blog/medspa-tips-refunds-chargebacks-quickbooks` | Scheduled 2026-11-24 | med spa tips and chargebacks QuickBooks | refunds and no-show fees in QuickBooks, POS payout breakdown | Awareness |
| `/blog/medspa-lender-ready-financials` | Scheduled 2026-12-01 | med spa financial statements for a loan | lender-ready books, selling a med spa: what buyers ask for | Awareness |
| `/blog/physician-owned-multi-entity-medspa-bookkeeping` | Scheduled 2026-12-08 | multi-entity med spa bookkeeping | physician-owned med spa books, management company intercompany | Awareness |
| Google Business Profile (not a web page) | To set up | bookkeeping services Fort Lauderdale FL (#4) | monthly bookkeeping Fort Lauderdale (#13), bookkeeping services Broward County FL (#16), bookkeeping services South Florida (#19) | Decision |

Existing articles keep their own terms, which are not in the list of 50: chart of accounts
(`medspa chart of accounts QuickBooks`, and it supports #39 on the QuickBooks setup page), "Is my MedSpa profitable"
(`is my med spa profitable`, supports #40 on the financial reporting page), CPA at tax time (`what a CPA needs from med spa books`), month-end close
(`med spa month-end close checklist`), and rebates (`med spa manufacturer rebates QuickBooks`).

## Done (October 2026)

- Titles on every mapped page follow the map; "med spa" and "medical spa" appear on the home, South Florida and
  Services pages.
- New pages: QuickBooks cleanup, IV hydration, medical weight loss and GLP-1. They are linked from the footer,
  home, Services and Pricing.
- The four archived articles were reviewed, corrected and put back on the publishing schedule (dates in `docs/niche-pain-points.md`). The archived cleanup, IV hydration and
  weight-loss articles stay archived and redirect to the pages that replaced them (`public/_redirects`).
- The provider-commission article is written and scheduled for 2026-11-03; it is not live yet.
- The blog generator queue no longer holds topics that compete with mapped pages.

## Service pages and the hub (October 2026)

- `/services` is the hub: it lists every service and links to each service that has its own page. Its title and
  description no longer target #8, #38 or #39, and it should not be rewritten to chase them.
- Monthly bookkeeping, QuickBooks setup and financial reporting each have their own page and own #8 (with #37), #39 and #10.
  The Dashboard is the interactive example that supports the financial reporting page; its title says "example".
- The footer, the home services summary, the service cards on `/services` and in-text "monthly bookkeeping" links
  point to the new pages.

## Still to do

- **Google Business Profile:** set up as a service-area business in Fort Lauderdale (no public address, since the
  work is remote), with its website link pointing to the Fort Lauderdale page. Use the same phone and email as that
  page. It is the main route to ranking for the general "bookkeeping services"
  terms (#4, #13, #16, #19).
- **Intuit Find-a-ProAdvisor listing** linking to the About page (#32, #33).
- **Watch the generator:** `medspa-profit-margins-benchmarks` sits close to the "Is my MedSpa profitable" article.
  Review that draft against it before merging. Only three topics remain in the queue; add new ones from this map's
  gaps, never from terms another page already owns.

## Lookup: keyword number to page

| # | Keyword | Page |
|---|---|---|
| 1 | med spa bookkeeper Fort Lauderdale | Fort Lauderdale (primary) |
| 2 | med spa bookkeeping Fort Lauderdale | Fort Lauderdale |
| 3 | QuickBooks cleanup Fort Lauderdale | QuickBooks cleanup |
| 4 | bookkeeping services Fort Lauderdale FL | Google Business Profile |
| 5 | med spa bookkeeper South Florida | South Florida |
| 6 | med spa bookkeeper Florida | South Florida |
| 7 | QuickBooks cleanup for med spa | QuickBooks cleanup (primary) |
| 8 | monthly bookkeeping for med spa | Monthly bookkeeping (primary) |
| 9 | aesthetic practice bookkeeping Florida | South Florida |
| 10 | financial reporting for med spas | Financial reporting (primary) |
| 11 | bookkeeping for med spas Fort Lauderdale | Fort Lauderdale |
| 12 | QuickBooks bookkeeper Fort Lauderdale | Fort Lauderdale |
| 13 | monthly bookkeeping Fort Lauderdale | Google Business Profile |
| 14 | aesthetic practice bookkeeping Fort Lauderdale | Fort Lauderdale |
| 15 | med spa bookkeeper Broward County | Fort Lauderdale |
| 16 | bookkeeping services Broward County FL | Google Business Profile |
| 17 | QuickBooks bookkeeper Broward County | Fort Lauderdale |
| 18 | med spa bookkeeping Broward County | Fort Lauderdale |
| 19 | bookkeeping services South Florida | Google Business Profile |
| 20 | med spa bookkeeping South Florida | South Florida (primary) |
| 21 | aesthetic practice bookkeeping South Florida | South Florida |
| 22 | QuickBooks bookkeeping South Florida | South Florida |
| 23 | QuickBooks cleanup South Florida | QuickBooks cleanup |
| 24 | med spa bookkeeping Florida | South Florida |
| 25 | bookkeeping for med spas Florida | South Florida |
| 26 | medical spa bookkeeping Florida | South Florida |
| 27 | aesthetic clinic bookkeeper Florida | South Florida |
| 28 | wellness practice bookkeeping Florida | Services |
| 29 | IV hydration bookkeeping Florida | IV hydration (primary) |
| 30 | medical weight loss bookkeeping Florida | Medical weight loss (primary) |
| 31 | GLP-1 clinic bookkeeping Florida | Medical weight loss |
| 32 | QuickBooks bookkeeper Florida | About |
| 33 | QuickBooks ProAdvisor Florida | About (primary) |
| 34 | QuickBooks cleanup services Florida | QuickBooks cleanup |
| 35 | catch up bookkeeping Florida | QuickBooks cleanup |
| 36 | bookkeeping cleanup services Florida | QuickBooks cleanup |
| 37 | monthly bookkeeping services Florida | Monthly bookkeeping |
| 38 | QuickBooks setup services Florida | QuickBooks setup |
| 39 | QuickBooks setup for med spa | QuickBooks setup (primary) |
| 40 | med spa KPI reporting | Financial reporting |
| 41 | med spa membership bookkeeping | Membership article (primary) |
| 42 | med spa package bookkeeping | Membership article |
| 43 | med spa provider commission bookkeeping | Provider-commission article (primary) |
| 44 | med spa inventory bookkeeping | Neurotoxin/filler cost article (primary) |
| 45 | Botox inventory bookkeeping | Neurotoxin/filler cost article |
| 46 | med spa COGS tracking | Neurotoxin/filler cost article |
| 47 | Boulevard QuickBooks reconciliation | Boulevard/Vagaro article (primary) |
| 48 | Vagaro QuickBooks reconciliation | Boulevard/Vagaro article |
| 49 | Cherry financing bookkeeping med spa | Cherry/CareCredit article (primary) |
| 50 | CareCredit reconciliation med spa | Cherry/CareCredit article |
