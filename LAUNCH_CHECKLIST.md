# Dark Matter Website — Pre-Launch Checklist

> Track progress toward a fully live, production-ready website.

---

## 1. Domain & DNS

- [ ] Confirm domain transfer is complete and unlocked at new registrar
- [ ] In Netlify: **Domain settings → Add custom domain** and add your domain
- [ ] Set DNS records at your registrar pointing to Netlify:
  - `A` record for `@` → `75.2.60.5` (Netlify load balancer)
  - `CNAME` for `www` → your Netlify site subdomain (e.g. `yoursite.netlify.app`)
- [ ] Enable **HTTPS / SSL** in Netlify (auto-provisioned via Let's Encrypt — wait for DNS propagation first)
- [ ] Verify `www` redirects to apex domain (or vice versa) — set a primary domain in Netlify

---

## 2. Environment Variables (Netlify)

- [ ] In Netlify: **Site settings → Environment variables**, confirm these are set:
  - `PRINTFUL_API_KEY` — your Printful API key
  - `NEXT_PUBLIC_SNIPCART_API_KEY` — your **live** (not test) Snipcart public API key
- [ ] Trigger a redeploy after setting env vars if they weren't already present during the last build

---

## 3. Snipcart Configuration

- [ ] Log into Snipcart dashboard → **Account → Domains & URLs**
- [ ] Add your live domain to the **allowed domains** list (purchases are blocked from unauthorized domains)
- [ ] Confirm you are using the **live API key**, not the test key, in Netlify env vars
- [ ] Configure webhook URLs in the Snipcart dashboard to point to your live domain:
  | Webhook | URL |
  |---|---|
  | Shipping | `https://yourdomain.com/api/snipcart/shipping` |
  | Tax | `https://yourdomain.com/api/snipcart/tax` |
  | Order | `https://yourdomain.com/api/snipcart/webhook` |
- [ ] Set up your **payment gateway** (e.g. Stripe) in Snipcart if not already done

---

## 4. Printful Configuration

- [ ] Confirm Printful account is connected and all products are synced
- [ ] Verify all product variants have correct prices, images, and fulfillment settings in Printful
- [ ] Confirm Printful **return address / sender info** is configured
- [ ] Confirm shipping rates are set up and the Printful API responds correctly

---

## 5. Checkout Flow Testing

### Merch (Physical — Printful fulfillment)

- [ ] Add a physical merch item to cart
- [ ] Proceed through checkout — verify shipping rates populate (pulled from Printful)
- [ ] Verify tax calculation works
- [ ] Complete a full test purchase using **Snipcart's test mode**
- [ ] Confirm the `order.completed` webhook fires and a Printful order is created
- [ ] Check Printful dashboard to confirm the test order was received and is fulfillable
- [ ] Switch to live mode and complete a real small-value test purchase

### Producer Shop (Digital — services)

- [ ] Add a digital service (e.g. Mastering Service) to cart and complete checkout
- [ ] Confirm **no Printful order is triggered** for a digital-only purchase
- [ ] Test a mixed cart (merch + digital service) and confirm only the physical item goes to Printful

---

## 6. Webhook Security

- [x] Re-enable Snipcart webhook token verification — **done** (`src/pages/api/snipcart/webhook.ts`)

---

## 7. Digital Products Routed to Printful

- [x] Filter digital items from Printful order payload — **done** (`src/lib/create-order.ts`)

---

## 8. Netlify Build & Deployment

- [ ] Confirm the production build completes without errors (check Netlify deploy logs)
- [ ] Confirm `PRINTFUL_API_KEY` is available at **build time** — it is used in `getStaticProps` on the merch page and must be set before the build runs, not just at runtime
- [x] Confirm Next.js API routes are working on Netlify (`@netlify/plugin-nextjs` or Next.js Runtime v5) — **done**, `@netlify/plugin-nextjs` added as a dev dependency and wired up in `netlify.toml`
- [x] Add a `netlify.toml` to the project root — **done**

---

## 9. Content & Pages

- [x] Review all pages for placeholder or test content — **done**. Found and fixed two real issues left over from the original boilerplate:
  - `/about` was an orphaned, unlinked page still showing "You're viewing the Headless Dropshipping Starter by Jamie Barton" — deleted (the homepage already has a real DARK MATTER bio section)
  - `/terms-of-sale` had three `[insert your support email here]` placeholders — replaced with `darkmatterbassmusic@gmail.com` and linked it from the site footer so it's actually reachable
- [x] Confirm all images load correctly in production — spot-checked every page in dev; all local and Printful-hosted images render
- [ ] Check mobile responsiveness on a real device — spot-checked at emulated mobile widths (390px) in Chrome DevTools, nav + `/links` hold up well, but still worth a pass on an actual phone before go-live
- [x] Verify all navigation links work — **done**, clicked through every top-nav route (Music, Merch, Tour, Media, Producer Shop) plus mobile menu, wishlist, and the new `/terms-of-sale` footer link, no broken links or console errors
- [x] Confirm `favicon.ico` is present in `/public` — **done**, present
- [x] Review `terms-of-sale` page for accuracy — **done**, see above

**Also found during this sweep, not blocking launch but worth knowing about:**
- `/tour`'s Bandsintown feed is currently returning zero events, while `/links` lists two upcoming shows (Synesthesia Festival 2025, Radiance NYE) — worth double-checking those events are actually on Bandsintown so the two pages don't contradict each other.
- A handful of debug `console.log` calls remain in Printful/Snipcart API routes (`src/pages/api/products/[id].ts`, `src/pages/merch.tsx`, `src/components/BandsintownTour.tsx`, plus generic `console.log(error)` catch blocks) — left alone intentionally since they sit inside checkout-critical code that should only change alongside the checkout testing in section 5, not as an incidental cleanup.
- `npm audit` currently reports 21 vulnerabilities (6 moderate, 13 high, 2 critical), mostly from older pinned dependencies (`next-auth@4`, `eslint@8`, `tailwindcss@3`, etc.) — worth a dependency review pass post-launch; not something to `--force` fix blind before going live.

---

## 10. Links Page & Content Admin (Decap CMS)

The `/links` page (Linktree/Beacons replacement) is now backed by a git-based CMS instead of hardcoded content, so you and your partner can add/remove/reorder links yourselves without touching code.

- [x] Content model + redesign shipped — `content/links.json`, `content/events.json`, `content/settings.json` (each an ordered list, drag-to-reorder in `/admin`), rendered via `src/pages/links.tsx`
- [x] Admin UI added at `/admin` (Decap CMS, `public/admin/`)
- [ ] In Netlify dashboard: **Site settings → Identity**, click **Enable Identity**
- [ ] Set registration to **Invite only** (Identity → Registration)
- [ ] Enable **Git Gateway** (Identity → Services → Git Gateway)
- [ ] Invite both band members' emails (Identity → Invite users)
- [ ] Smoke test: log into `yourdomain.com/admin`, edit one link, confirm a real commit lands on `main` and the rebuilt site reflects the change

---

## 11. Analytics & Monitoring *(Nice to Have)*

- [ ] Add Google Analytics or Plausible if desired
- [ ] Set up Netlify email alerts for failed deploys
