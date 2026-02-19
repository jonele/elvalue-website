# Checkpoint: EL VALUE Website — DEPLOYED & LIVE

Date: 2026-02-19
Project: elvalue-website
Repo: `/Users/jemcstd/GitHub/elvalue-website` → `jonele/elvalue-website` on GitHub
Branch: `main` (latest commit `9423b16`)
Hosting: **Vercel** (auto-deploy on push to main)

## What Was Done

### This Session
- **Homepage redesigned** (`app/page.tsx`): Replaced 3 placeholder image boxes with 2x2 feature card grids for EL-Loyal (emerald), RSRV (blue), EL-OS (violet)
- **Added Ella section** to homepage: B2B2C positioning, avatar, 4 feature rows, CTA to el-loyal.com
- **Added EveY section** to homepage: B2C positioning, fuchsia accent, 4 feature rows, CTA to /evey
- **Added Extratzis.gr** portfolio section on homepage
- **Added Viva onboarding link** (`https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true`) on homepage CTA, contact sidebar, and terms page
- **Created Terms of Service** (`app/terms/page.tsx`): 10 sections, Cyprus law, Stripe + Viva
- **Created Privacy Policy** (`app/privacy/page.tsx`): 12 GDPR sections, all third parties listed
- **Updated Footer** (`components/Footer.tsx`): Added EveY, Extratzis.gr, Viva Account link
- **Updated Contact page** (`app/contact/page.tsx`): Added Viva Wallet card in sidebar

### Previous Sessions (same codebase)
- EveY landing page built (`app/evey/page.tsx`) with bilingual GR/EN toggle
- Fixed critical Tailwind 4 CSS layer bug (`globals.css`): `* { padding: 0; margin: 0 }` was outside `@layer base`, silently overriding ALL Tailwind spacing utilities
- Removed pricing from contact form — now "contact us for custom pricing"
- Removed Dashboard from navbar
- CTA URLs changed from Telegram to `comms.elvalue.com`

## Key Architecture

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage — Hero, AI Team, Products, Ella, EveY, Extratzis, Stats, CTA |
| `app/evey/page.tsx` | EveY landing page — bilingual GR/EN |
| `app/evey/translations.ts` | GR/EN translation strings |
| `app/terms/page.tsx` | Terms of Service |
| `app/privacy/page.tsx` | Privacy Policy |
| `app/contact/page.tsx` | Contact/onboarding form → `/api/onboard` |
| `app/api/onboard/route.ts` | API route (Stripe checkout) |
| `components/Navbar.tsx` | Fixed nav — Home, EveY, EL-Loyal, RSRV, EL-OS, Contact |
| `components/Footer.tsx` | Products, Company, AI Team, legal links |
| `components/Hero.tsx` | Landing hero section |
| `app/globals.css` | Design system — glass cards, gradients, buttons, RTL support |

## Stack
- Next.js 16.1.6 (Turbopack)
- Tailwind 4 (with CSS layers — DO NOT put resets outside `@layer base`)
- Framer Motion
- Radix UI (some components)
- pnpm

## Current State — LIVE
- **Deployed on Vercel**: auto-deploy on push to `main`
- **GitHub**: `jonele/elvalue-website` (public)
- **Vercel project**: `elvalue/elvalue-website`
- **All routes working** in production

## Live URLs
| URL | What |
|-----|------|
| `elvalue.com` | Homepage |
| `elvalue.com/evey` | EveY landing (bilingual GR/EN) |
| `elvalue.com/contact` | Contact form + Viva link |
| `elvalue.com/terms` | Terms of Service |
| `elvalue.com/privacy` | Privacy Policy |
| `elvalue.com/about` | About page |
| `comms.elvalue.com` | EveY comms portal (separate Vercel project) |

## DNS Setup (Top Host / grserver.gr)
- `elvalue.com` A → `76.76.21.21` (Vercel)
- `www` CNAME → `cname.vercel-dns.com`
- `comms` A → `76.76.21.21`
- `elapi`, `boost`, `ELPOS` A → `76.76.21.21`
- MX records → `mail.elvalue.com` (Plesk — email stays on Top Host)
- AAAA for `elvalue.com` DELETED (was causing IPv6 to hit old WordPress)
- Old WordPress on Plesk is effectively dead but Plesk still handles email

## Latest Changes (same session)
- **4-language homepage** (GR/EN/RU/AR) with toggle + localStorage persistence
- Arabic RTL support (`dir="rtl"`, `font-arabic` class, flipped animations)
- Translations file: `app/translations-home.ts` (all homepage text in 4 languages)
- **NextGenCalls.gr** added to portfolio section + footer (AI Call Agent)
- **Favicon** updated to match EL-Loyal/RSRV branding
- Jon renamed "EveY" → "EvE" in Footer and homepage alt text (manual edit)

## Branding Note
- Jon renamed **EveY → EvE** in Footer (`components/Footer.tsx` line 10) and page.tsx (alt text line 380)
- Other references may still say "EveY" — check translations and /evey page if full rename needed

## Next Steps
1. **Configure Stripe env vars** on Vercel (`STRIPE_SECRET_KEY`) for `/api/onboard` to work
2. **Test contact form end-to-end** — Stripe checkout flow
3. **Consider**: full "EveY → EvE" rename across all files if Jon confirms
4. **Consider**: decommission WordPress on Plesk (only keep email/MX)

## Design Tokens (Critical)
- Ella = emerald (`#34d399`)
- EveY = fuchsia/violet
- Theo = blue (`#60a5fa`)
- EL-OS = violet (`#a78bfa`)
- Extratzis = amber
- Background: slate-950 (`#020617`)
- Glass cards: `var(--glass-bg)` with `backdrop-blur`
- NEVER put CSS resets outside `@layer base` — Tailwind 4 cascade layers will be overridden
