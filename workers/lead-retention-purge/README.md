# Lead retention purge

A small, separate Cloudflare Worker that deletes rows from the "Leads" Google
Sheet once they're older than 24 months — the retention period promised in
the Privacy Policy (`src/components/PrivacyPage.tsx`, §1.B). It runs on its
own weekly schedule and needs no ongoing attention once it's deployed.

It reuses the same Google service account that `functions/api/lead.ts`
already uses to add rows to the sheet in the first place. That account
already has full read/write access to the spreadsheet, so there's nothing
new to set up on the Google side — just copy two values that already exist.

## One-time setup (about 5 minutes)

1. Find the values of `GOOGLE_SA_KEY` and `SPREADSHEET_ID` that the existing
   **mr-bookkeeping** Pages project uses (listed under **Settings →
   Environment variables**). If they were saved as encrypted secrets, the
   dashboard won't show the value again — re-paste it from wherever you
   originally saved it (the service account JSON key file from Google Cloud,
   and the ID from the Google Sheet's URL).

2. Deploy this Worker as its own project:
   ```
   cd workers/lead-retention-purge
   npx wrangler deploy
   ```
   This creates a new, separate Worker named `mr-bookkeeping-lead-retention`
   in your Cloudflare account — it does not touch or redeploy the main site.

3. Add the two secrets to this new Worker (same values as step 1, not new
   ones):
   ```
   npx wrangler secret put GOOGLE_SA_KEY
   npx wrangler secret put SPREADSHEET_ID
   ```
   Paste each value when prompted.

4. Confirm the schedule is active: in the Cloudflare dashboard, open the
   `mr-bookkeeping-lead-retention` Worker → **Triggers** tab → you should see
   a Cron Trigger for `0 10 * * 0` (every Sunday, 10:00 UTC).

That's it — from here it runs on its own, every week, with no further
action needed.

## Checking it worked

- **Logs:** Worker → **Logs** tab in the dashboard shows each run and how
  many rows it deleted (never the row contents — just a count).
- **Run it right now** instead of waiting for Sunday: the deployed Worker
  deliberately has no public URL (`workers_dev = false` in `wrangler.toml`),
  so nobody else can trigger it. To run a purge on demand, run it from your
  own computer against the real sheet:
  1. In `workers/lead-retention-purge/`, create a file named `.env` with the
     same two values (`.env` files are git-ignored, so it won't be committed):
     ```
     GOOGLE_SA_KEY={"type":"service_account",...the full JSON on one line...}
     SPREADSHEET_ID=...
     ```
  2. Run `npx wrangler dev`, then in another terminal:
     `curl -X POST http://localhost:8787/`
     It responds with `{"ok":true,"deleted":N}`.
  3. Stop `wrangler dev` and delete the `.env` file.

## What it does NOT do

- It only deletes rows in the Google Sheet. It does not touch the lead
  notification emails already sitting in the Gmail inbox those leads were
  sent to — per the audit (S11), "the same [24-month] rule should apply to
  the lead emails in her Gmail," which is a separate, manual cleanup (search
  that inbox by date, delete what's past 24 months) since there's no
  equivalent reusable credential for Gmail the way there already was for
  Sheets.
- It never logs or exposes the data it deletes — only a row count.
