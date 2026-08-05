# DARK MATTER

The official website and storefront for **DARK MATTER**, an EDM/bass music duo. Built with [Next.js](https://nextjs.org/) and deployed on [Netlify](https://www.netlify.com/), it covers the full site: music, tour dates, media, merch, and production mentoring services — plus a self-service `/links` page that replaces a traditional Linktree/Beacons page.

## What's on the site

- **Home / Music / Tour / Media** — bio, releases, upcoming shows (via Bandsintown), photo/video content
- **Merch** (`/merch`) — storefront powered by [Snipcart](https://snipcart.com/) for checkout and [Printful](https://printful.com/) for print-on-demand fulfillment
- **Producer Shop** (`/producer_shop`) — digital services (mixing/mastering, mentoring) sold through Snipcart, intentionally kept out of the Printful fulfillment flow since there's nothing to ship
- **Links** (`/links`) — a Linktree/Beacons-style landing page for social/bio-link traffic. Content (links, events, socials, profile info) is managed through a small CMS at `/admin` rather than hardcoded — see [Editing the Links page](#editing-the-links-page) below

## Tech stack

- [Next.js](https://nextjs.org/) (Pages Router) + [Tailwind CSS](https://tailwindcss.com/)
- [Snipcart](https://snipcart.com/) for cart/checkout, [Printful](https://printful.com/) for merch fulfillment
- [Decap CMS](https://decapcms.org/) + [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) for the `/links` content admin — git-backed, no database
- Deployed on [Netlify](https://www.netlify.com/) via `@netlify/plugin-nextjs`

## Running locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Used for |
|---|---|
| `PRINTFUL_API_KEY` | Fetching merch products/variants at build time (`getStaticProps` on `/merch`) and creating orders on purchase |
| `NEXT_PUBLIC_SNIPCART_API_KEY` | Snipcart's client-side cart/checkout widget — use the **live** key in production, a **test** key locally |

## Deploying (Netlify)

The site is deployed on Netlify, wired up via `netlify.toml` and the `@netlify/plugin-nextjs` build plugin.

1. Connect the repo to a Netlify site (Import from Git)
2. Add `PRINTFUL_API_KEY` and `NEXT_PUBLIC_SNIPCART_API_KEY` under **Site settings → Environment variables** — `PRINTFUL_API_KEY` in particular must be set before the build runs, since it's used at build time, not just at runtime
3. Point your domain at Netlify and enable HTTPS (see `LAUNCH_CHECKLIST.md` for the full domain/DNS steps)

See `LAUNCH_CHECKLIST.md` for the complete pre-launch checklist (domain, Snipcart/Printful config, checkout testing, content review).

## Editing the Links page

`/links` is meant to replace an external Linktree/Beacons page, and it's editable without touching code:

1. Go to `yourdomain.com/admin`
2. Log in (Netlify Identity — invite-only, set up per `LAUNCH_CHECKLIST.md` section 10)
3. Add, edit, reorder, or hide links, events, and the profile/social settings

Content is stored as JSON files under `content/` (`content/links/`, `content/events/`, `content/settings.json`). Every edit made in `/admin` commits directly to `main` and triggers a Netlify rebuild — no database involved. The page code itself lives at `src/pages/links.tsx`, which reads that content at build time.

### Links content fields

- **Links** — `title`, `subtitle`, `url`, `image`, `section` (`release`/`social`), `icon` (for socials), `order` (controls display position — sort the list by "Order" in `/admin` to see/edit the current sequence), `published`
- **Events** — `title`, `subtitle`, `url`, `image` (optional — falls back to a placeholder icon), `order`, `published`
- **Settings** — profile photo, logo, tagline, and the social icon row (shown in both the hero and footer)

## Setting up Printful & Snipcart

<details>
  <summary>Printful: create a store, add products, get an API key</summary>

1. [Login](https://www.printful.com/auth/login) or [sign up](https://www.printful.com/auth/register) to Printful
2. [Create a new store](https://www.printful.com/dashboard/store), selecting **Manual order platform / API**
3. Add products, configure pricing, and select `PNG` as the mockup format
4. Configure your selling region, VAT settings, and shipping preferences under **Settings → Stores**
5. Under **Settings → Stores → API**, create a **Private token** with full permissions — this is your `PRINTFUL_API_KEY`
6. Add a [billing method](https://www.printful.com/dashboard/billing/billing-methods) — Printful charges you to fulfill each order

</details>

<details>
  <summary>Snipcart: register, get an API key, configure webhooks</summary>

1. [Register](https://app.snipcart.com/register) or [login](https://app.snipcart.com) to Snipcart, switch to **LIVE** mode
2. Copy your `Public API Key` from **Account → API Keys** — this is `NEXT_PUBLIC_SNIPCART_API_KEY`
3. Under **Account → Domains & URLs**, add your live domain (and any dev/staging domains) — Snipcart blocks purchases from unrecognized domains
4. Configure webhooks pointing at your domain:
   | Webhook | URL |
   |---|---|
   | Order | `https://yourdomain.com/api/snipcart/webhook` |
   | Shipping | `https://yourdomain.com/api/snipcart/shipping` |
   | Tax | `https://yourdomain.com/api/snipcart/tax` (only needed if you're VAT-registered) |
5. Connect a payment gateway (e.g. Stripe) and enable **SCA**
6. Set your [regional settings](https://app.snipcart.com/dashboard/settings/regional) to match the currency Printful returns
7. Optionally set up an [abandoned cart recovery campaign](https://app.snipcart.com/dashboard/campaigns/create)

</details>
