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
- [ ] Confirm Next.js API routes are working on Netlify (`@netlify/plugin-nextjs` or Next.js Runtime v5)
- [ ] If API routes return 404 in production, add a `netlify.toml` to the project root

---

## 9. Content & Pages

- [ ] Review all pages for placeholder or test content
- [ ] Confirm all images load correctly in production
- [ ] Check mobile responsiveness on a real device
- [ ] Verify all navigation links work
- [ ] Confirm `favicon.ico` is present in `/public`
- [ ] Review `terms-of-sale` page for accuracy

---

## 10. Analytics & Monitoring *(Nice to Have)*

- [ ] Add Google Analytics or Plausible if desired
- [ ] Set up Netlify email alerts for failed deploys
