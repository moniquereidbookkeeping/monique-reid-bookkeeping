# Monique Reid Bookkeeping

Website for Monique Reid Bookkeeping: QuickBooks bookkeeping for MedSpas, aesthetic clinics and wellness practices.

- **Stack:** React + Vite + Tailwind, hosted on Cloudflare Pages
- **Server code:** `functions/api/lead.ts` (lead capture, email, Google Sheet) and `functions/api/diagnostic.ts` (AI plan)
- **Blog:** posts live in `src/data/blogPosts.ts`. A GitHub Action drafts a new article twice a week and opens a pull request for review. Merging it publishes it.
- **Sitemap:** `public/sitemap.xml` is generated from the page list and blog posts on every build.

## Run locally

```
npm install
npm run dev
```

## Secrets

Real keys are set in the Cloudflare Pages dashboard and GitHub Actions secrets. See `.env.example` for the names. Never commit real keys.
