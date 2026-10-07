# SEO Deep-Dive Audit: moniquereidbookkeeping.com

Audit date: 2026-10-07. Audited code: `main` at `5b6ca6f`. Audit only: no site file, branch, setting or sitemap was changed.

How this was checked:
- **Live crawl:** every live address was fetched with a Googlebot user agent, and the prerendered HTML was parsed, not the browser-rendered page.
- **Response checks:** headers and redirect hops were read with `curl`.
- **Lab tests:** Lighthouse 12 (mobile, simulated throttling) ran on four pages, and axe-core 4 (WCAG 2 A/AA) ran on every page at 390px and 1280px.
- **Source:** findings are cross-checked against the code.
- **Limits:** no Google ranking, traffic or Search Console data was available, so none is claimed.

## Executive summary

1. **The technical base is strong.** Every indexable page returns 200 at its canonical address and has one H1, a unique title (≤60 characters) and description (≤160). Structured data parses on every page, the sitemap matches the live pages exactly, and Lighthouse SEO scores 100.
2. **www is not redirected.** `https://www.moniquereidbookkeeping.com/…` serves every page with 200 and zero hops. Canonical tags point to the root address, but there is no 301.
3. **The biggest local gap is off-site and proof:** no Google Business Profile, no phone number, no `sameAs` profile links, and no reviews or testimonials anywhere on the site. For "med spa bookkeeper Fort Lauderdale", the map results depend on these more than on page copy.
4. **The FAQ answers are invisible to search engines.** None of the 21 answers are in the HTML, because they render only when clicked, yet the FAQPage structured data marks all 21 up.
5. **One trust conflict.** The About page claims a Bachelor of Business Administration, which contradicts the site's own content rule, "No degree claims on the site".
6. **Lab speed is acceptable, not great:** mobile performance 73–92, LCP 2.7–4.1 s, CLS ≈ 0. The main delay is the render-blocking Google Fonts stylesheet.
7. **Competitors searched for the three target terms are national firms, not local ones.** A real Fort Lauderdale specialist with reviews and directory listings has an open lane.

## Findings

Severity: Critical / High / Medium / Low. Effort: S (hours), M (a day or two), L (more).

| ID | Page/URL | Issue or opportunity | Evidence | Why it matters locally | Severity | Effort | Needs owner input |
|---|---|---|---|---|---|---|---|
| F01 | Whole site (Google Business Profile) | No Google Business Profile is linked or evidenced, and the site shows no phone number. | The site HTML has no `tel:` link and no phone text. `index.html` Organization has no `telephone` or `sameAs` (parsed JSON-LD: `sameAs=null`, `telephone=null`). | The map pack for "bookkeeper Fort Lauderdale" and "med spa bookkeeper near me" is driven by Google Business Profile: category, proximity and reviews. Without one the site can't appear there at all. | Critical | S | Y |
| F02 | `https://www.…` (all paths) | www serves duplicate pages with 200 and no redirect. | `curl -L https://www.moniquereidbookkeeping.com/` → `HTTP/2 200`, 0 hops; `/about` on www → 200. The www HTML's canonical points to `https://moniquereidbookkeeping.com/about`, so Google can consolidate, but links and citations to www stay split. | Directory listings and Google Business Profile links often get typed with www. A single 301 keeps every signal on one host. | High | S | Y (Cloudflare dashboard) |
| F03 | `/faq` (and the home FAQ block) | FAQ answers are not in the prerendered HTML; FAQPage schema marks up content that isn't on the page. | `faq.html`: 21/21 questions present, 0/21 answer texts present. `src/components/FAQSection.tsx:541` renders `{isOpen && (…answer…)}`. The FAQPage JSON-LD contains all 21 answers. | These answers are the most locally useful long-tail text on the site (Cherry/CareCredit, sales tax, cleanup, multi-entity). Crawlers and AI answer engines can't read them, and structured data that doesn't match visible content can be ignored. | High | S | N |
| F04 | Whole site | No reviews, testimonials or case examples anywhere. | Text search of every page: no "testimonial", no review markup, no client quotes. | Reviews are a top local ranking and conversion factor. The competitor surfaced by search shows a named client testimonial (MedspaBookkeepers, per search snippet). | High | M | Y |
| F05 | `/about`, home About block | Degree claim conflicts with the site's own rules. | `src/components/AboutSection.tsx:97`: "…ProAdvisor with a Bachelor of Business Administration." `docs/niche-pain-points.md:44`: "No degree claims on the site." | E-E-A-T depends on accurate, verifiable credentials. An unverifiable or inconsistent claim is a trust risk. | High | S | Y |
| F06 | `/about`, home | Credential badges aren't backed by structured data or a verification link. | Badges for "QuickBooks Online Level 2" and "QuickBooks Payroll Certified" (`AboutSection.tsx`). Person `hasCredential` lists only "Intuit Certified QuickBooks ProAdvisor" (`index.html:134`), and the Organization repeats it (`index.html:99`); credentials belong to the person. No link to an Intuit ProAdvisor profile. | Intuit's Fort Lauderdale ProAdvisor directory page ranks for the local query (see the competitive section). Linking the profile makes the credential verifiable. | Medium | S | Y |
| F07 | Home, South Florida meta descriptions | The ProAdvisor wording is inconsistent. | `src/router.ts:48` and `:91` say "Intuit Certified ProAdvisor"; elsewhere it's "Intuit Certified QuickBooks ProAdvisor"; `docs/niche-pain-points.md:44` says "Intuit QuickBooks Online ProAdvisor". | Consistent naming across the site, Google Business Profile and directories helps entity matching. | Low | S | Y (choose the official wording) |
| F08 | Footer (every page) | 5 of the 6 footer "Services" links all go to `/services`. | `src/components/Footer.tsx:46,52,58,64,70`. The inbound link count for `/services` from footers is 90 (18 pages × 5). | The same destination five times wastes link equity and gives no hint which service each link means. | Medium | S | N |
| F09 | `/iv-hydration-bookkeeping`, `/medical-weight-loss-bookkeeping` | These pages are weakly linked. | Inbound body links: 2 each (home hero chips and the Services "Who this is for" list). They're not in the nav or footer. | They target Florida industry terms (#29–31). Pages with few internal links rank slowly. | Medium | S | N |
| F10 | Articles ↔ service pages | Articles and service pages don't link to each other. | The 3 live articles are linked only from `/blog` and each other's "Keep reading". The cleanup, Services, South Florida, IV and weight-loss pages link to no article, and the home page links to none. | Topic clusters (a service page plus supporting articles) help both rank. A how-to reader should see the matching service. | Medium | M | N |
| F11 | Several pages | Calls to action that navigate are `<button>` elements, not links. | "Read the FAQ" (`src/App.tsx:338`), "Open the example dashboard" (`App.tsx:159`), "Explore bookkeeping services" (`FinancialDashboard.tsx:330`), "Back to Home" (Terms, Privacy), plus booking buttons everywhere. The About, Dashboard and Calculator pages have zero body `<a>` links. | Crawlers don't follow buttons, and visitors can't open them in a new tab. | Low | S | N |
| F12 | `/services`, `/dashboard`, `/pricing` | H1s don't contain the primary keyword from the keyword map. | `/services` H1 "Bookkeeping Built Around Your Practice" (target: monthly bookkeeping for med spa). `/dashboard` H1 "See Where Your Practice's Revenue Goes" (target: financial reporting for med spas). `/pricing` H1 "Bookkeeping Plans & Pricing" (target: med spa bookkeeping pricing). The titles do carry the terms. | The H1 is a strong on-page relevance signal. The titles alone are weaker. | Medium | S | N |
| F13 | Home, Contact, articles | Render-blocking Google Fonts stylesheet; mobile LCP is 3.9–4.1 s in the lab. | Lighthouse mobile: home perf 73, LCP 3.9 s; Contact 80, LCP 4.1 s; Boulevard article 77, LCP 4.0 s; South Florida 92, LCP 2.7 s. `render-blocking-resources`: fonts.googleapis.com stylesheet, about 800–930 ms. Three web fonts total about 105 KB (`index.html:41-44`, five Playfair styles plus four Jakarta weights). | Slower LCP hurts mobile users, who are most local searchers, and is a Core Web Vitals risk. | Medium | M | N |
| F14 | All pages | One 157 KB (brotli) JavaScript bundle, of which Lighthouse estimates 80–97 KB is unused per page. | Lighthouse `unused-javascript`; bundle `/assets/index-*.js` 157 KB transferred. TBT is 0–280 ms, so the risk is modest. | It affects interaction readiness on low-end phones. Code-splitting with prerender needs care. | Low | L | N |
| F15 | Header logo | Logo PNG is about twice the displayed size. | `/mr-logo-full.png` 25.5 KB, 12 KB wasted (Lighthouse `uses-responsive-images`). | A small LCP and data saving. | Low | S | N |
| F16 | Home, Pricing, Blog, Dashboard | Colour contrast fails WCAG AA; the Dashboard slider has no label. | axe `color-contrast`: `text-[#1A2E40]/50` on white is 2.97:1 (`PricingSection.tsx:249`, `BlogListPage.tsx:182`); gold/70 on navy is 3.97:1 (`PricingSection.tsx:249`); `text-[#57534E]/70` (`FinancialDashboard.tsx:1116`). axe `label` (critical): range input at `FinancialDashboard.tsx:407`. | Accessibility is a quality signal and affects every visitor who can't read pale text. | Medium | S | N |
| F17 | `/faq`, `/about`, `/contact`, footer | Heading order skips levels. | `/faq` goes H1 → H3 (no H2); `/about` H1 → H3; `/contact` has no H2; footer column titles are H4 after H2 (Lighthouse `heading-order`). | Minor accessibility and structure issue. | Low | S | N |
| F18 | Mobile header, footer | Some tap targets are under 24px tall. | At 390px: top-bar "Book Your Free 20-Min Clarity Call" is 248×20; footer links are 18px tall. Inline text links are exempt. No horizontal overflow on any page, and no text under 12px. | This is the main booking call to action on mobile. | Low | S | N |
| F19 | `/contact` | The Calendly embed may initialise twice. | Commit `62bc75f` added `data-url={BOOKING_URL}` (`CalendlyBookingCard.tsx:107`). Calendly's script auto-initialises elements with `data-url`, and the component also calls `initInlineWidget` after clearing the container (`:28-29`). Not observable here because Calendly is blocked in this sandbox. | A double load slows the only booking path. Needs a check in a normal browser. | Medium | S | N |
| F20 | Structured data, site-wide | Duplicate and thin entities. | A global `#service-cleanup` Service (`index.html:197`, no offers) plus a separate page-level Service without an `@id` on `/quickbooks-cleanup` (`src/entry-server.tsx:103-113`). BlogPosting `author` is an `@id` reference only (`entry-server.tsx:80`) and `image` is an external Unsplash URL (`:76`). No AboutPage or ProfilePage for `/about`. | Clean entities (one Service per service, a Person with name, URL and credentials) help Google connect the business, the person and the location. | Medium | S | N |
| F21 | `/medspa-bookkeeping-south-florida` | The local page has no owner-specific local proof. | 503 body words, but no photo of Monique, no local client example or quote, no phone, no statement on in-person availability, and no Google Business Profile or map link. | This page carries 18 local keywords. Real local detail is what separates it from a templated city page. | Medium | M | Y |
| F22 | `/about`, `/contact` | Both pages are thin. | Body words: About 271 (with no body links), Contact 140 (no hours, response time, service area detail or phone). | The About page is the main E-E-A-T page, and Contact is where NAP (name, address, phone) belongs. | Medium | M | Y |
| F23 | Upcoming article | The pending inventory/COGS article would compete with a live page. | The requested `post-016` (`medspa-inventory-cogs-quickbooks`) overlaps keywords #44–46, which `docs/keyword-map.md` gives to `/blog/track-neurotoxin-filler-costs-quickbooks`. | Two pages for one search split the ranking. | Medium | S | N |
| F24 | `/404` | The `/404` address returns 200. | `curl /404` → 200, but it's marked `noindex, nofollow`. Unknown addresses correctly return 404. | Minor soft-404 hygiene. | Low | S | N |
| F25 | Headers | HSTS lacks `includeSubDomains`/`preload`; there's no Content-Security-Policy; images are cached for only 4 hours. | `strict-transport-security: max-age=31536000`; `/monique-reid-headshot.webp` and `/og-image.png` have `cache-control: max-age=14400`. | Hardening and repeat-visit speed. Not a ranking issue on its own. | Low | S | Y (confirm subdomains before preload) |
| F26 | Articles | Social shares use one generic image; covers are generic stock photos. | `og:image` is `/og-image.png` on every page. Article covers are Unsplash photos with empty alt text (decorative). | A distinct image per article improves click-through when shared in local groups. | Low | M | N |
| F27 | Privacy | The Cloudflare Web Analytics beacon may not be disclosed. | Lighthouse saw `static.cloudflareinsights.com/beacon.min.js` load. The privacy policy and cookie banner name only Google Analytics and Clarity (`PrivacyPage.tsx`, `CookieBanner.tsx`). | Trust and accuracy of disclosures. | Low | S | Y (is Web Analytics on?) |
| F28 | Booking flow | Thank-you page and conversion tracking can be bypassed. | `/booked` is reached only through Calendly's embedded `postMessage`. The "Open calendar in a new tab" fallback (`/contact`) never reaches it. | Bookings made in a new tab don't count as conversions, which hides what's working. | Low | S | N |
| F29 | Content cadence | Article automation is now weekly, with 3 topics left and failure emails removed. | `.github/workflows/publish-article.yml` (owner commit `3c44bf3`): cron `0 13 * * 2`, the notify-failure job is gone, and the generator queue has 3 topics. | Steady, unique topical content supports the cluster. Silent failures could stall it. | Low | S | Y |
| F30 | Content | Missing topics that competitors and the pain-point list cover. | See "Next 10 articles" below. Competitors rank with management-company (MSO/PC) structures, "questions to ask your bookkeeper" and Florida sales-tax content. | These are where new, non-competing rankings can come from. | Medium | M | Some |

## Already done (with evidence)

- **No redirects on canonical addresses.** Every indexable page returns 200 at its address. `/about/`, `/blog/`, `/services/` and `.html` variants take a single 308 to the canonical; archived articles take a single 301 (`public/_redirects`).
- **Canonical and meta tags.**
  - Each page has an absolute, self-referencing canonical on the root host; www pages also point to the root.
  - Titles are unique and 40–59 characters; descriptions are 56–160 characters.
  - Each page has one H1, `lang="en"` and a viewport tag.
  - Open Graph and Twitter tags are on every page, and `og:type=article` on posts.
- **Sitemap is accurate.** `/sitemap.xml` holds exactly the 18 live indexable pages. `/booked` (noindex) and the 7 scheduled articles are excluded; `<lastmod>` appears only where real (blog).
- **robots.txt** allows everything and declares the sitemap. Missing pages return a real 404 with `noindex`, and `/booked` is `noindex, nofollow`.
- **Structured data parses without errors on all 19 pages:**
  - ProfessionalService/AccountingService with a Fort Lauderdale, FL address and areaServed (city, region, state, country).
  - Person, Service with offers, and BreadcrumbList on inner pages.
  - BlogPosting on articles, and FAQPage only on `/faq`.
- **Local pages are live:** `/medspa-bookkeeping-south-florida` (Broward, Miami-Dade and Palm Beach cities, Florida items, Service areaServed), `/quickbooks-cleanup`, `/iv-hydration-bookkeeping` and `/medical-weight-loss-bookkeeping`, all linked from the footer, home or Services.
- **Keyword-map titles are applied,** and "med spa / medical spa" wording is on the home, South Florida and Services pages.
- **Performance and headers:**
  - Calendly loads only on `/contact`.
  - Fingerprinted JS/CSS are cached `immutable` for 1 year, with brotli compression.
  - HSTS is on.
  - CLS is 0–0.002, and email addresses are no longer obfuscated (no `__cf_email__`).
- **Mobile and quality scores:** no horizontal overflow at 390px on any page; Lighthouse SEO 100 and Best Practices 96 (the console errors are this sandbox blocking third-party hosts).
- **Content system:** scheduled publishing hides future-dated articles; posts have "Keep reading" links to related posts plus Services and Pricing.

## Top 10 fixes, in proposed order

1. **Set up Google Business Profile** as a service-area business in Fort Lauderdale with the street address hidden, and decide whether to show a phone number (F01). Everything local builds on this.
2. **Add the www → root 301** in Cloudflare (Rules → Redirect Rules → "Redirect from WWW to root"), then confirm it's a single hop (F02).
3. **Render the FAQ answers in the HTML,** collapsed with CSS or `<details>`, so the content and the FAQPage markup match (F03).
4. **Resolve the credentials.** Confirm or remove the degree claim, confirm the Level 2 and Payroll certifications, and link the Intuit ProAdvisor profile; then add it and LinkedIn to `sameAs` (F05, F06, F07).
5. **Start collecting real reviews** through Google Business Profile and show 2–3 with permission on Home, South Florida and Cleanup (F04).
6. **Fix internal linking:**
   - Point each footer service link at its own page or section, and add the IV and weight-loss pages to the footer.
   - Link each service page to its matching articles and vice versa, and show the latest articles on the home page (F08, F09, F10).
   - Turn navigation buttons into links (F11).
7. **Put the target keyword in the H1s** of Services, Dashboard and Pricing (F12).
8. **Self-host and trim the web fonts,** preloading the two used most, to cut roughly 0.8–1 s of mobile LCP (F13, F15).
9. **Accessibility:** fix the contrast issues, add the slider label, correct the heading order and enlarge the mobile top-bar link (F16, F17, F18).
10. **Verify the Calendly embed loads once** (F19). Decide how to handle the inventory/COGS article: merge it into the neurotoxin/filler article or give it a different main search term (F23).

## Local assessment: is the one South Florida page enough?

**Yes for now.** The page already names Fort Lauderdale in its title, H1, body and schema, and the keyword map deliberately avoids city copies.

A separate Fort Lauderdale page is justified only once it can carry content no other page has, all real and from you:
- whether in-person meetings in Fort Lauderdale are offered, and where;
- named Broward clients or anonymised Broward client stories, used with permission;
- reviews from Fort Lauderdale practices;
- local referral partners, such as CPAs or med spa consultants you actually work with;
- local photos of Monique.

Without that, a second page would be a near-duplicate doorway page. First, make the South Florida page stronger with the items in F21.

## Next 10 articles (no conflicts with the keyword map)

| # | Working title | Main search term | Supports | Why |
|---|---|---|---|---|
| 1 | Florida sales tax for med spas: retail products, packages and what QuickBooks should track | Florida med spa sales tax | South Florida page | Local-only topic; competitors (IQBPA) advertise Florida sales-tax help. Frame as records, not advice. |
| 2 | Physician-owned med spa and a management company: keeping two sets of books straight | med spa MSO bookkeeping | Services, FAQ | Competitors rank with MSO/PC content (Chief Bookkeeping Officer, Irvine Bookkeeping); your FAQ already promises it. |
| 3 | Lender-ready financials: what banks and buyers ask a med spa for | med spa financial statements for a loan | Services, Dashboard | Pain point #6; high-intent owners. |
| 4 | Tips, refunds, no-shows and chargebacks in QuickBooks | med spa refunds chargebacks QuickBooks | Boulevard/Vagaro article | Pain point #8; links naturally to the POS cluster. |
| 5 | Gift cards in a med spa's books | med spa gift card accounting | Membership article | Distinct liability topic, already raised in the FAQ. |
| 6 | Square payouts in QuickBooks for aesthetic practices | Square QuickBooks reconciliation med spa | Cleanup page | A different platform from the Boulevard/Vagaro article. |
| 7 | Opening a med spa: the QuickBooks setup checklist | med spa QuickBooks setup checklist | Services (setup, #39) | Already queued in the generator; new-owner intent. |
| 8 | Switching bookkeepers: how to hand over a med spa's QuickBooks file | change bookkeeper med spa | Pricing, Contact | Bottom-of-funnel; competitors use "questions to ask your bookkeeper". |
| 9 | Mobile IV therapy bookkeeping: travel costs, nurse pay and event bookings | mobile IV bookkeeping | IV hydration page | Strengthens the thin IV cluster. |
| 10 | Laser and device financing in QuickBooks: assets, loans and the records your CPA needs | med spa equipment financing QuickBooks | Cleanup, Services | Equipment pain point; distinct from the CPA article. |

**Possible new page later:** a "Management company (MSO/PC) bookkeeping" page, only if you take that work. The FAQ already says you do.

## Needs owner input

- **Google Business Profile:**
  - Does one exist? Which account owns it?
  - Category choice ("Bookkeeping service" is the closest standard one).
  - Service areas to list.
  - Which page its website link should point to.
- **Phone number:** do you want a public business number? It must be the same everywhere: site, Google Business Profile and directories.
- **Credentials:**
  - Is the Bachelor of Business Administration accurate and okay to state? If yes, update the content rule; if not, remove it from About.
  - Confirm QuickBooks Online Level 2 and Payroll certifications.
  - Send your Intuit ProAdvisor profile URL.
  - Confirm the official credential wording to use everywhere.
- **Profiles for `sameAs`:** LinkedIn, Google Business Profile, Intuit ProAdvisor, and any association memberships.
- **Reviews and testimonials:** real client quotes you have permission to publish, with name, role and city as the client allows.
- **Photos:** real photos of Monique working or in the Fort Lauderdale area, for the South Florida and About pages and Google Business Profile.
- **Local facts:**
  - Do you meet clients in person in Fort Lauderdale or Broward?
  - Your typical response time.
  - Business hours for Google Business Profile.
- **Cloudflare:** dashboard access, or do the www redirect yourself (F02). Confirm whether Cloudflare Web Analytics is on (F27).
- **Content:** do you serve management-company (MSO/PC) structures and Florida sales-tax record keeping? This decides articles 1–2.

## Off-site local actions (no spam tactics)

1. **Google Business Profile:**
   - Service-area business with the address hidden, real categories, a services list with plain descriptions, and hours.
   - A weekly post that links to the newest article.
   - Ask every happy client for a review through the profile's own link.
2. **Intuit Find-a-ProAdvisor:** complete the profile with industry, location (Fort Lauderdale) and services, linking to `/about`. Intuit's directory page for Fort Lauderdale ProAdvisors appears for "QuickBooks ProAdvisor bookkeeper Fort Lauderdale FL".
3. **American Med Spa Association vendor directory (Accounting):** a real industry listing that competitors use. Join only if the membership terms make sense for you.
4. **Consistent NAP listings:** Bing Places, Apple Business Connect, LinkedIn company page, and optionally Yelp and the Greater Fort Lauderdale Chamber of Commerce. Use the exact same name, city and phone on each.
5. **Referral partnerships:**
   - Local CPAs who do med spa tax work, since you don't prepare taxes.
   - Med spa consultants and attorneys.
   - Booking or financing platforms' partner directories, only where you're a genuine partner.
6. **Avoid:** bought or swapped reviews, fake street addresses, mass citation services, and near-duplicate city pages.

## Competitive notes

Search results are from a general web search, not Google, so treat them as indicative, not as rankings. Competitor pages couldn't be opened from this workspace (network allowlist), so these notes come from search-result snippets.

| Search | Results seen | What the results have that this site lacks |
|---|---|---|
| med spa bookkeeper Fort Lauderdale | [Fast Ledgers](https://www.fastledgers.com/med-spa), [Irvine Bookkeeping](https://www.irvinebookkeeping.com/med-spa-bookkeeping-services), [Chief Bookkeeping Officer](https://www.chiefbookkeepingofficer.com/med-spa-bookkeeping), [MedspaBookkeepers](https://medspabookkeepers.com/), plus med spa listings ([BBB](https://www.bbb.org/us/fl/fort-lauderdale/category/medical-spa)) | No local specialist appears. National firms win on years of experience, team bios and MSO/PC content. |
| med spa bookkeeping South Florida | [Speakeasy Bookkeeping](https://www.speakeasybookkeeping.com/) (Florida med spas), [Atteign](https://www.atteign.com/med-spas), [Healthy Bodies of Finance](https://healthybodiesoffinance.com/health-wellness-accounting-services/medical-spa-estheticians/), [Liguori Accounting](https://www.liguoricpa.com/medical-aesthetic-providers/) | A Florida-focused competitor exists (Speakeasy). Liguori publishes a chart-of-accounts article ([link](https://www.liguoricpa.com/2026/08/05/med-spa-bookkeeping-what-to-track-every-month-and-how-to-structure-your-chart-of-accounts/)) that competes with your scheduled one. |
| QuickBooks cleanup for med spa | [RemoteBooksOnline](https://www.remotebooksonline.com/blog/quickbooks-cleanup-checklist), [Certum Solutions](https://www.certumsolutions.com/quickbooks-cleanup), [House of Bookkeepers](https://houseofbookkeepers.com/quickbooks-clean-up/), [Melissa Rhodes, CPA](https://www.mrhodescpa.com/quickbooks-cleanup-services) | Generic cleanup pages with published turnaround times and checklists. None is med-spa-specific, which fits your cleanup page. |
| QuickBooks ProAdvisor bookkeeper Fort Lauderdale FL (extra) | [Intuit ProAdvisor directory: Fort Lauderdale](https://proadvisor.intuit.com/us/fl/fort-lauderdale), [Lazarus CPA](https://www.lazarus-cpa.com/quickbooks-proadvisor-services/), [IQBPA](https://iqbpa.com/quickbooks-support-fort-lauderdale.html), [David Weinstein CPA](https://www.davidweinsteincpa.com/professional-fort-lauderdale-bookkeeper/) | Local generalists win with directory presence, years in business and Florida sales-tax support. None specialises in med spas. |

**From snippets:**
- [MedspaBookkeepers](https://medspabookkeepers.com/) shows pricing from $795/month, a named client testimonial and a refund guarantee. It's also listed in the [AmSpa vendor directory](https://americanmedspa.org/resources/vendor-directory/accounting).
- [Chief Bookkeeping Officer](https://www.chiefbookkeepingofficer.com/15-questions-med-spa-owners-ask-their-bookkeeper) ranks with "15 questions to ask your bookkeeper" content.

## What could not be verified, and why

- **Plain `http://` → `https://` redirect:** this workspace only allows HTTPS, so port 80 couldn't be tested. HSTS is set, which protects browsers that have already visited.
- **Rankings, impressions and index coverage:** no Search Console or Google ranking data was available. The competitive section uses a non-Google search engine.
- **Whether a Google Business Profile exists:** it can't be checked from here.
- **Competitor page content:** blocked by the network allowlist, so only search snippets were used.
- **Calendly behaviour, including the possible double load (F19):** Calendly is blocked in this sandbox, so `/contact` showed no iframe here.
- **Lead form submission:** not submitted, to avoid sending you real lead emails.
- **Google Rich Results Test and real-user Core Web Vitals:** Google's tools weren't reachable. The structured data was checked here for syntax and expected fields only. Lighthouse numbers are lab estimates through this sandbox's proxy, with some third-party requests blocked.
- **Search volumes:** not available, so priorities rest on intent and fit, not volume.
