# Handoff: EL VALUE Website — Full Session 2026-02-19

Date: 2026-02-19
Project: elvalue-website
Repo: `/Users/jemcstd/GitHub/elvalue-website` → `jonele/elvalue-website` on GitHub
Branch: `main` (latest commit `880724e`)
Hosting: **Vercel** (auto-deploy on push to main)
Status: **LIVE at elvalue.com**

---

## Complete Commit History (this codebase)

```
880724e feat: add EvE onboarding page with free/paid paths
be2a01d feat: redesign portfolio section with browser-frame preview cards
558c0c4 fix: rename RSRV → EL-Rsrv in navbar
d0a9d87 refactor: rename EveY → EvE across entire site
48cac20 chore: update favicon to match EL-Loyal/RSRV branding
adff170 feat: add NextGenCalls.gr to portfolio and footer
2c86a65 feat: add 4-language support to homepage (GR/EN/RU/AR)
9423b16 fix: update Extratzis description — job platform, not digital menu
b34a8bc feat: complete EL VALUE website — homepage redesign, Terms, Privacy, EveY, Viva
71f62b7 Initial commit from Create Next App
```

---

## Everything Built (cumulative across sessions)

### Homepage (`app/page.tsx`)
- Hero section with animated gradient background
- AI Team section (Ella, Theo, EvE)
- Product sections: EL-Loyal (emerald), RSRV (blue), EL-OS (violet) — each with 2x2 feature card grids
- Dedicated Ella section (B2B2C, emerald accent, avatar, 4 feature rows, CTA → el-loyal.com)
- Dedicated EvE section (B2C, fuchsia accent, avatar, 4 feature rows, CTA → /evey)
- Portfolio: Browser-frame preview cards for Extratzis.gr + NextGenCalls.gr
- Stats section, CTA with Viva onboarding link
- **4-language support** (GR/EN/RU/AR) with toggle + localStorage + Arabic RTL

### EvE Landing (`app/evey/page.tsx`)
- Full landing page: Hero with aurora canvas, features, comparison table, pricing tiers (Free/Pro/Executive), how it works, add to phone, final CTA
- Bilingual GR/EN with toggle + localStorage
- All CTAs now point to `/evey/start` (internal onboarding)

### EvE Onboarding (`app/evey/start/page.tsx`) — NEW
- Two-path layout:
  - **Free**: Telegram instructions (3 steps), disabled "Coming Soon" button
  - **Pro**: €29/mo PWA subscription, 7 features, disabled CTA (needs Stripe)
- Bilingual GR/EN, synced with EvE page via `evey-lang` localStorage
- Back link to /evey

### Legal Pages
- **Terms of Service** (`app/terms/page.tsx`): 10 sections, EL VALUE CYPRUS LTD, Cyprus law, Stripe + Viva
- **Privacy Policy** (`app/privacy/page.tsx`): 12 GDPR sections, all third parties

### Navigation & Footer
- **Navbar** (`components/Navbar.tsx`): Home, EvE, EL-Loyal, EL-Rsrv, EL-OS, Contact + "Get Started" CTA
- **Footer** (`components/Footer.tsx`): Products (EL-OS, EL-Loyal, RSRV, EL-POS, EvE, Extratzis, NextGenCalls), Company links, Viva Account link

### Other
- **Contact** (`app/contact/page.tsx`): Form + Viva Wallet sidebar card
- **Favicon**: Updated to match EL-Loyal/RSRV branding
- **Translations**: `app/translations-home.ts` (4 languages), `app/evey/translations.ts` (GR/EN)

---

## Full File Map

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage — 4-lang, all sections |
| `app/translations-home.ts` | Homepage GR/EN/RU/AR translations |
| `app/evey/page.tsx` | EvE landing — bilingual GR/EN |
| `app/evey/translations.ts` | EvE page GR/EN translations |
| `app/evey/start/page.tsx` | EvE onboarding — free/paid paths |
| `app/terms/page.tsx` | Terms of Service |
| `app/privacy/page.tsx` | Privacy Policy |
| `app/contact/page.tsx` | Contact form + Viva link |
| `app/about/page.tsx` | About page |
| `app/pricing/page.tsx` | Pricing page |
| `app/api/onboard/route.ts` | Stripe checkout API route |
| `app/globals.css` | Design system — glass, gradients, RTL |
| `app/layout.tsx` | Root layout |
| `components/Navbar.tsx` | Nav — Home, EvE, EL-Loyal, EL-Rsrv, EL-OS, Contact |
| `components/Footer.tsx` | Footer — products, company, legal |
| `components/Hero.tsx` | Hero component |

---

## Live URLs

| URL | What |
|-----|------|
| `elvalue.com` | Homepage (4-language) |
| `elvalue.com/evey` | EvE landing (GR/EN) |
| `elvalue.com/evey/start` | EvE onboarding (free/paid) |
| `elvalue.com/contact` | Contact form + Viva |
| `elvalue.com/terms` | Terms of Service |
| `elvalue.com/privacy` | Privacy Policy |
| `elvalue.com/about` | About page |
| `comms.elvalue.com` | Separate Vercel project |

---

## Stack
- Next.js 16.1.6 (Turbopack)
- Tailwind 4 (CSS layers — NEVER put resets outside `@layer base`)
- Framer Motion
- Radix UI (some components)
- pnpm

## DNS (Top Host / grserver.gr)
- `elvalue.com` A → `76.76.21.21` (Vercel)
- `www` CNAME → `cname.vercel-dns.com`
- `comms` A → `76.76.21.21`
- MX → `mail.elvalue.com` (Plesk handles email only)
- AAAA record DELETED (was routing IPv6 to old WordPress)

## Design Tokens
- Ella = emerald (`#34d399`)
- EvE = fuchsia/violet
- Theo = blue (`#60a5fa`)
- EL-OS = violet (`#a78bfa`)
- Extratzis = amber
- NextGenCalls = blue
- Background: slate-950 (`#020617`)
- Glass cards: `var(--glass-bg)` + `backdrop-blur`

## Branding
- **EveY → EvE** rename complete across ALL files (zero "EveY" references remain)
- **RSRV → EL-Rsrv** in navbar
- URL path stays `/evey` (no rename needed)

---

## TODO / Next Session

### Immediate
1. **Telegram bot link** — When EvE bot is live, update `/evey/start` free tier CTA from disabled "Coming Soon" to live Telegram link
2. **Stripe env vars** — Add `STRIPE_SECRET_KEY` to Vercel for `/api/onboard` and `/evey/start` Pro subscription
3. **Wire Pro CTA** — Connect `/evey/start` Pro button to Stripe checkout → deliver PWA download link on success

### Medium-term
4. **Build EvE PWA** — The actual Progressive Web App that Pro subscribers download
5. **Test contact form** — End-to-end Stripe checkout flow on `/contact`
6. **Decommission WordPress** on Plesk (only keep email/MX)

### Nice-to-have
7. **SEO metadata** — OG images, meta descriptions per page
8. **Analytics** — Vercel Analytics or Plausible
9. **Email collection** — "Notify me" form on `/evey/start` free tier for launch day
