# Keyword Map: Which Page Targets Which Search Terms

Use this file before writing or changing any page, article or AI article draft for Monique Reid Bookkeeping.
Each search term belongs to exactly one page. Two pages chasing the same term compete with each other,
and neither ranks well.

Volumes are not included: most "service + city" terms get very few searches each, but the people searching
are ready to hire. Check real numbers in Google Search Console (Performance > Queries) once the site is
indexed, and update this map from what people actually search.

## Rules

1. **One primary term per page.** Secondary terms are close variants of the same need.
2. **No city or county copies.** Fort Lauderdale, Broward, South Florida and Florida all go to the one South
   Florida page. Near-identical pages per place look like doorway pages to Google.
3. **Write the way people search.** Use "med spa", "MedSpa" and "medical spa" naturally on key pages.
4. **New article? Check here first.** If its main term already belongs to a page, improve that page instead.

## The map

Status: **Live** (exists, keep), **Edit** (exists, needs the changes listed), **New** (to build),
**Restore** (archived article to review and bring back).

| Page | Status | Primary term | Secondary terms (keyword #) | Stage |
|---|---|---|---|---|
| `/medspa-bookkeeping-south-florida` | Edit | med spa bookkeeping South Florida (#20) | med spa bookkeeper Fort Lauderdale (#1), med spa bookkeeping Fort Lauderdale (#2), med spa bookkeeper South Florida (#5), bookkeeping for med spas Fort Lauderdale (#11), aesthetic practice bookkeeping Fort Lauderdale (#14), med spa bookkeeper Broward County (#15), med spa bookkeeping Broward County (#18), aesthetic practice bookkeeping South Florida (#21), med spa bookkeeper Florida (#6), aesthetic practice bookkeeping Florida (#9), med spa bookkeeping Florida (#24), bookkeeping for med spas Florida (#25), medical spa bookkeeping Florida (#26), aesthetic clinic bookkeeper Florida (#27), QuickBooks bookkeeper Fort Lauderdale (#12), QuickBooks bookkeeper Broward County (#17), QuickBooks bookkeeping South Florida (#22) | Decision |
| `/quickbooks-cleanup` | New | QuickBooks cleanup for med spa (#7) | QuickBooks cleanup Fort Lauderdale (#3), QuickBooks cleanup South Florida (#23), QuickBooks cleanup services Florida (#34), catch up bookkeeping Florida (#35), bookkeeping cleanup services Florida (#36) | Decision |
| `/` (home) | Edit | med spa bookkeeper (national) | med spa bookkeeping, medical spa bookkeeping, aesthetic practice bookkeeping (national terms, not in the list of 50) | Decision |
| `/services` | Edit | monthly bookkeeping for med spa (#8) | wellness practice bookkeeping Florida (#28), QuickBooks setup services Florida (#38), QuickBooks setup for med spa (#39) | Consideration |
| `/pricing` | Edit | med spa bookkeeping pricing / cost | monthly bookkeeping services Florida (#37) | Decision |
| `/about` | Edit | QuickBooks ProAdvisor Florida (#33) | QuickBooks bookkeeper Florida (#32) | Decision |
| `/dashboard` | Edit | financial reporting for med spas (#10) | med spa KPI reporting (#40) | Consideration |
| `/iv-hydration-bookkeeping` | New | IV hydration bookkeeping Florida (#29) | IV drip / IV therapy business bookkeeping | Consideration |
| `/medical-weight-loss-bookkeeping` | New | medical weight loss bookkeeping Florida (#30) | GLP-1 clinic bookkeeping Florida (#31) | Consideration |
| `/blog/medspa-membership-revenue-quickbooks` | Restore | med spa membership bookkeeping (#41) | med spa package bookkeeping (#42), deferred revenue med spa | Awareness |
| `/blog/track-neurotoxin-filler-costs-quickbooks` | Restore | med spa inventory bookkeeping (#44) | Botox inventory bookkeeping (#45), med spa COGS tracking (#46) | Awareness |
| `/blog/reconcile-boulevard-vagaro-quickbooks` | Restore | Boulevard QuickBooks reconciliation (#47) | Vagaro QuickBooks reconciliation (#48) | Awareness |
| `/blog/record-cherry-carecredit-affirm-financing-quickbooks` | Restore | Cherry financing bookkeeping med spa (#49) | CareCredit reconciliation med spa (#50) | Awareness |
| `/blog/medspa-payroll-bookkeeping-quickbooks` | New | med spa provider commission bookkeeping (#43) | med spa payroll QuickBooks, 1099 vs W-2 providers | Awareness |
| Google Business Profile (not a web page) | New | bookkeeping services Fort Lauderdale FL (#4) | monthly bookkeeping Fort Lauderdale (#13), bookkeeping services Broward County FL (#16), bookkeeping services South Florida (#19) | Decision |

Existing articles keep their own terms, which are not in the list of 50: chart of accounts
(`medspa chart of accounts QuickBooks`, and it supports #39), "Is my MedSpa profitable" (`is my med spa profitable`,
supports #40), CPA at tax time (`what a CPA needs from med spa books`), month-end close
(`med spa month-end close checklist`), and rebates (`med spa manufacturer rebates QuickBooks`).

## Page changes

**South Florida page**
- Title: `Med Spa Bookkeeper in Fort Lauderdale & South Florida`.
- Add a short section for practices elsewhere in Florida.
- Use "medical spa" and "QuickBooks bookkeeper" once each, naturally.
- The Google Business Profile website link should point here.

**QuickBooks cleanup (new)**
- Title: `QuickBooks Cleanup for Med Spas | Fort Lauderdale & Florida`.
- Cover the fixed-fee tiers from Pricing, what happens week by week, and what you need from the owner.
- Mention Fort Lauderdale, South Florida and Florida once each.
- Link to it from Services, Pricing and the home cleanup card.
- Point the archived `quickbooks-cleanup-for-medspas` redirect here instead of `/services`. Keep that article
  archived: restoring it would compete with this page.

**Home**
- Title: `Med Spa Bookkeeping & QuickBooks | Monique Reid Bookkeeping`.
- Keep it national. Do not add Florida city names beyond the footer, or it competes with the South Florida page.

**Services**
- Title: `Monthly Med Spa Bookkeeping Services | Monique Reid`.
- Link the setup section to the chart-of-accounts article and the new cleanup page.

**Pricing**
- Title: `Med Spa Bookkeeping Pricing & Monthly Plans | Monique Reid`.

**About**
- Title: `Monique Reid | Intuit Certified QuickBooks ProAdvisor, FL`.
- Link to the Intuit Find-a-ProAdvisor listing, and have that listing link back to the site.

**Dashboard**
- Title: `Med Spa Financial Reporting & KPI Dashboard Example`.
- Add a short introduction on the monthly reports and KPIs clients receive.

**IV hydration and medical weight-loss pages (new)**
- Build them from the archived `iv-hydration-business-bookkeeping` and `medical-weight-loss-practice-bookkeeping`
  articles, reviewed first. Update their redirects to point at the new pages.

**Restored articles**
- Review each one before it goes live (they were archived on purpose).
- Delete its line in `public/_redirects` first, or the redirect will hide the article.

## Conflicts in the blog generator queue

`.github/scripts/generate-article.mjs` drafts articles from a topic list. Six queued topics target terms this map
gives to another page. Remove them from the queue, or fold any draft into the mapped page instead of publishing
it separately:

| Queued topic | Competes with |
|---|---|
| `boulevard-payout-reconciliation-guide` | Restored Boulevard/Vagaro article (#47) |
| `vagaro-quickbooks-integration-bookkeeping` | Restored Boulevard/Vagaro article (#48) |
| `cherry-carecredit-financing-bookkeeping` | Restored Cherry/CareCredit article (#49, #50) |
| `deferred-revenue-medspa-packages-memberships` | Restored membership article (#41, #42) |
| `cost-of-goods-sold-medspa-injectables` | Restored neurotoxin/filler cost article (#44 to #46) |
| `glp1-weight-loss-practice-financial-tracking` | New medical weight-loss page (#30, #31) |

Queued topics with no conflict: `medspa-payroll-bookkeeping-quickbooks` (this is the #43 article),
`medspa-tax-deductions-cpa-checklist`, `opening-medspa-bookkeeping-setup-checklist`, `medspa-profit-margins-benchmarks`.

## Lookup: keyword number to page

| # | Keyword | Page |
|---|---|---|
| 1 | med spa bookkeeper Fort Lauderdale | South Florida |
| 2 | med spa bookkeeping Fort Lauderdale | South Florida |
| 3 | QuickBooks cleanup Fort Lauderdale | QuickBooks cleanup |
| 4 | bookkeeping services Fort Lauderdale FL | Google Business Profile |
| 5 | med spa bookkeeper South Florida | South Florida |
| 6 | med spa bookkeeper Florida | South Florida |
| 7 | QuickBooks cleanup for med spa | QuickBooks cleanup (primary) |
| 8 | monthly bookkeeping for med spa | Services (primary) |
| 9 | aesthetic practice bookkeeping Florida | South Florida |
| 10 | financial reporting for med spas | Dashboard (primary) |
| 11 | bookkeeping for med spas Fort Lauderdale | South Florida |
| 12 | QuickBooks bookkeeper Fort Lauderdale | South Florida |
| 13 | monthly bookkeeping Fort Lauderdale | Google Business Profile |
| 14 | aesthetic practice bookkeeping Fort Lauderdale | South Florida |
| 15 | med spa bookkeeper Broward County | South Florida |
| 16 | bookkeeping services Broward County FL | Google Business Profile |
| 17 | QuickBooks bookkeeper Broward County | South Florida |
| 18 | med spa bookkeeping Broward County | South Florida |
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
| 37 | monthly bookkeeping services Florida | Pricing |
| 38 | QuickBooks setup services Florida | Services |
| 39 | QuickBooks setup for med spa | Services |
| 40 | med spa KPI reporting | Dashboard |
| 41 | med spa membership bookkeeping | Membership article (primary) |
| 42 | med spa package bookkeeping | Membership article |
| 43 | med spa provider commission bookkeeping | Payroll article (primary) |
| 44 | med spa inventory bookkeeping | Neurotoxin/filler cost article (primary) |
| 45 | Botox inventory bookkeeping | Neurotoxin/filler cost article |
| 46 | med spa COGS tracking | Neurotoxin/filler cost article |
| 47 | Boulevard QuickBooks reconciliation | Boulevard/Vagaro article (primary) |
| 48 | Vagaro QuickBooks reconciliation | Boulevard/Vagaro article |
| 49 | Cherry financing bookkeeping med spa | Cherry/CareCredit article (primary) |
| 50 | CareCredit reconciliation med spa | Cherry/CareCredit article |
