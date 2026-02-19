# Checkpoint: EvE Onboarding Page + Portfolio Redesign

Date: 2026-02-19
Project: elvalue-website
Repo: `/Users/jemcstd/GitHub/elvalue-website` → `jonele/elvalue-website`
Branch: `main` (latest commit `880724e`)
Hosting: **Vercel** (auto-deploy on push)

## What Was Done

### This Session (continuation)
- **Portfolio section redesigned** (`app/page.tsx`): Replaced small list cards with large browser-frame preview cards for Extratzis.gr and NextGenCalls.gr — browser chrome (3 dots + URL bar), gradient preview area, info section, hover effects
- **EvE onboarding page created** (`app/evey/start/page.tsx`): Two-path landing with:
  - **Free tier**: Telegram instructions (3 steps), disabled "Coming Soon" CTA
  - **Pro tier**: €29/mo PWA subscription, 7 features listed, disabled CTA
  - Bilingual GR/EN, synced with EvE page via `evey-lang` localStorage
- **All EvE CTAs updated**: Changed from `comms.elvalue.com` (external) to `/evey/start` (internal), removed `target="_blank"`

### Commits Pushed
1. `be2a01d` — feat: redesign portfolio section with browser-frame preview cards
2. `880724e` — feat: add EvE onboarding page with free/paid paths

## Key Files Modified/Created

| File | Action | What |
|------|--------|------|
| `app/page.tsx` | Edit | Portfolio section → browser-frame cards |
| `app/evey/start/page.tsx` | **Create** | Onboarding page (free Telegram + paid PWA) |
| `app/evey/page.tsx` | Edit | CTA_URL → `/evey/start`, removed `target="_blank"` |

## Current State — LIVE
- All 14 routes building clean
- Deployed on Vercel, auto-deploy on push to `main`

## Next Steps
1. **Telegram bot link** — When ready, replace "Coming Soon" button with live Telegram link on `/evey/start`
2. **Stripe integration** — Wire Pro subscription CTA to Stripe checkout (needs `STRIPE_SECRET_KEY` on Vercel)
3. **PWA** — Build/deploy the EvE PWA app that Pro subscribers will download
4. **Test contact form** — Stripe checkout flow on `/contact` still untested in prod
