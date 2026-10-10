# Monique Reid Bookkeeping

Website for Monique Reid Bookkeeping: QuickBooks bookkeeping for MedSpas, aesthetic clinics and wellness practices.

- **Stack:** React + Vite + Tailwind, hosted on Cloudflare Pages
- **Server code:** `functions/api/lead.ts` (lead capture, email, Google Sheet) and `functions/api/diagnostic.ts` (AI plan)
- **Blog:** posts live in `src/data/blogPosts.ts`. An article appears on the site from its `publishedDate`: a future date keeps it hidden until then. A GitHub Action drafts a new article twice a week, dates it for the next free Tuesday and opens a pull request for review.
- **Scheduled publishing:** `.github/workflows/publish-scheduled.yml` rebuilds the site each morning an article is due. It needs a Cloudflare Pages deploy hook saved as the GitHub secret `CLOUDFLARE_PAGES_DEPLOY_HOOK` (steps at the top of that file).
- **Sitemap:** `public/sitemap.xml` is generated from the page list and blog posts on every build.

## Run locally

```
npm install
npm run dev
```

## Secrets

Real keys are set in the Cloudflare Pages dashboard and GitHub Actions secrets. See `.env.example` for the names. Never commit real keys.

## Article schedule

Live: Boulevard & Vagaro reconciliation (featured), memberships & packages, neurotoxin & filler costs.

| Date | Article |
|---|---|
| 2026-10-13 | Cherry & CareCredit payouts |
| 2026-10-20 | MedSpa chart of accounts |
| 2026-10-27 | Is my MedSpa profitable? |
| 2026-11-03 | Provider commission bookkeeping |
| 2026-11-10 | Month-end close checklist |
| 2026-11-17 | Manufacturer rebates & rewards |
| 2027-01-05 | What your CPA needs at tax time |

To move an article, change its `publishedDate`. Generated drafts take the next free Tuesday.
