# Flow Service Local SEO audit and rollout

Audit date: 13 October 2026 (Asia/Jakarta). Repository: `E:\serviceiphonebandung`.

## Verified scope and framework

Actual package: Next.js **16.3.5**, React **19.2.8**, App Router, TypeScript, Tailwind 4. Read the installed Next guides for metadata, sitemap, robots, redirects and Script before changing code. All service URLs remain unchanged. No calculator formulas, price values or WhatsApp message construction were changed. The working tree already contained the No.51 → No.86 address change and a footer Maps link; those changes were preserved and the link now uses the owner's listing.

Owner confirmed in this conversation: Flow Service, independent iPhone repair business; Jl. Dipati Ukur No.86 lantai 2, Lebakgede, Coblong, Bandung; WhatsApp 0878-6000-2347; warranty 2–3 months; Maps share URL `https://share.google/QbGeqpEWGPLHdoigW`. The browsing tool could not resolve that share URL, so verification provenance is the owner, not an independently inspected Maps listing. No reviews were copied from search results. A third-party directory still reports No.51 and postcode 42315; it is not authoritative for corrections: https://caribisnis.id/servis-hp/bandung/coblong/flow-service-cobl-imp1.

## Defects, affected files and disposition

| Finding | Files | Action |
|---|---|---|
| Unconfirmed `flowservice.id` default generated incorrect canonicals, OG URLs, schema IDs, sitemap and robots URL | `config/site.ts`, `lib/seo.ts`, `lib/schema.ts`, `app/sitemap.ts`, `app/robots.ts` | Default now current Vercel origin. Validated HTTPS origin configuration; absolute self canonicals and explicit OG/Twitter images. |
| No custom-host migration rules | `next.config.ts` | Opt-in old-host 308 redirects to configured origin, preserving paths/query. Reject same-host loops and malformed configuration. |
| No useful Dipatiukur location page | new `app/lokasi/dipatiukur/page.tsx` | One physical-location page with address, directions, owner Maps URL, visit preparation, hours caveat, photo placeholder, access TODOs, FAQs and all service links. |
| Five templated area pages are thin and risk doorway indexing | `app/area/[slug]/page.tsx`, `data/areas.ts`, `app/sitemap.ts` | URLs remain reachable, noindex/nofollow and excluded from sitemap. Do not restore indexing until distinct verified visitor value exists. |
| Services index lacks H1 | `app/layanan/page.tsx`, `components/sections/ServiceGrid.tsx` | Optional heading level, H1 on index; other grids remain H2. |
| Unsupported “4.9 / 350+ Google reviews”, “verified customer” icons and unsourced testimonials | `components/sections/Testimonials.tsx`, `data/testimonials.ts`, `app/page.tsx` | Homepage no longer renders this section. Source data retained for owner review. No review or aggregateRating schema added. |
| Postcode 42315, coordinates and hours not verified for No.86 | `config/site.ts`, `lib/schema.ts`, `app/kontak/page.tsx` | Unknown postcode blank; geo and hours omitted from schema. Existing coordinates retained in config as TODO and unused in schema/directions. Visible hours marked for confirmation. |
| False fresh sitemap dates on every build | `app/sitemap.ts` | Removed invented lastmod from static/service entries; articles retain actual reviewed dates. |
| Four future-dated posts visible now | `data/posts.ts`, blog index/detail, `BlogPreview`, sitemap | Editorial cutoff `2026-10-13` applied consistently. Unreviewed posts return 404; original dates/content retained. Cutoff deliberately does not advance with server clock. |
| Warranty claims range from 60/90 days to 6/12/18/36 months; “all branches” claim unsupported | `SparepartGuide`, `BeforeAfterShowcase`, `Hero`, `WarrantyGuarantee`, `data/prices.ts`, `data/testimonials.ts` | Visible durations aligned to owner-confirmed 2–3 months with per-service confirmation. Removed unconditional new-part replacement and all-branches promise. Hidden testimonial text still requires source review. |
| Service-specific content already exists but has no physical-location link | `data/services.ts`, `app/layanan/[slug]/page.tsx` | Existing distinct titles, descriptions, H1s, symptoms and FAQs retained; contextual location link added to each service page. |
| Blog/contact titles repeat the brand through the root title template | `app/blog/page.tsx`, `app/kontak/page.tsx` | Replaced with descriptive page titles; the root template supplies the brand once. |
| No analytics configured | `app/layout.tsx`, new `components/seo/Analytics.tsx` | Optional `NEXT_PUBLIC_GA4_ID`. Disabled by default; delegated WhatsApp/directions events cover existing links without changing CTA behavior. SPA page views included; no WA text, phone number or query in custom event payload. |

## Factual review still required

- `SparepartGuide.tsx`: “Original Apple Module”, “Sistem Resmi Apple”, “Standar Resmi Apple”, “True Tone Aktif 100%”, universal 120Hz support, “Cobalt Cell Kapasitas Murni 100%”, guaranteed all-day battery, warning-free iOS history. Verify supplier provenance, eligibility by iPhone model, repair/calibration process and whether any wording implies Apple authorization. Do not invent replacement specifications.
- `PriceTable.tsx`, `data/prices.ts`: Genuine/Asli classifications and Grade A/OLED Plus promises need procurement evidence; estimates and stock need owner validation. These underlying prices and calculator logic remain intact.
- `BeforeAfterShowcase.tsx`: claimed customer cases, exact repair times, “Hasil Servis Flow”, “Warna 100% Akurat”, True Tone results and image provenance need evidence. Existing six JPGs are roughly 0.65–0.83 MB each; they use `next/image`, but originals can be optimized after confirming ownership/provenance.
- `WarrantyGuarantee.tsx`, `Hero.tsx`, `CostEstimator.tsx`, `config/site.ts`: free diagnosis/no-fix-no-fee, guaranteed data safety, universal no-reset promises, 15–30 minute claims, technician skills and same-day availability need confirmation. General service descriptions are pre-existing claims, not facts newly verified by this audit.
- `data/posts.ts`: review technical/product assertions, including OLED/backlight diagnosis, “grade original”, IMEI lifetime guarantees, source URLs and iOS 27 claims before relying on them commercially. This audit does not certify blog technical accuracy.
- Future articles retained for editorial review: `cara-cek-iphone-bekas-sebelum-beli-di-bandung` (22 Oct), `suara-speaker-dan-earpiece-iphone-kecil-atau-kresek` (19 Oct), `face-id-iphone-tidak-berfungsi-penyebab-dan-solusi` (16 Oct), `layar-iphone-green-screen-white-screen-solusi` (14 Oct). Confirm real publication dates and accuracy, then deliberately advance `lib/publication.ts`; do not backdate automatically.
- Existing `hero-repair.webp`, `workshop-bandung.webp`, service/blog images and showcase photos have no verified provenance in the repository. The new location page does not pass them off as actual No.86 photographs. No fake location photography was generated.

## Owner inputs remaining

1. Normal/holiday business hours and timezone; postcode and map pin coordinates at No.86.
2. Warranty duration per service, covered failures, exclusions, remedies, claim process, diagnosis policy and branch status.
3. Real exterior, entrance/floor sign and interior photos with permission; access/stairs/lift/parking and checked transport directions.
4. Confirmation that the supplied Maps profile itself displays No.86 and the same phone/name; correct No.51 directory/profile citations through their owners.
5. Confirmed future custom `.id` hostname; social profile ownership; GA4 measurement ID and consent/privacy requirements before enabling analytics.
6. Authentic review source links, dates and permissions before restoring testimonials. Do not copy unsupported directory ratings.

## Code map

- Identity and migration: `config/origin.ts`, `config/site.ts`, `next.config.ts`, `.env.example`, `.gitignore`.
- Metadata/schema: `lib/seo.ts`, `lib/schema.ts`; retained `app/robots.ts`, `components/seo/JsonLd.tsx` (escapes `<`), generated 1200×630 `app/opengraph-image.tsx`.
- Location/internal links/semantics: `app/lokasi/dipatiukur/page.tsx`, `Hero.tsx`, `Footer.tsx`, `app/kontak/page.tsx`, services index/detail and `ServiceGrid.tsx`.
- Publication/crawl: `lib/publication.ts`, `data/posts.ts`, blog index/detail/preview, area metadata, sitemap.
- Warranty: `WarrantyGuarantee.tsx`, `SparepartGuide.tsx`, `BeforeAfterShowcase.tsx`, `data/prices.ts`.
- Analytics: `components/seo/Analytics.tsx`, `app/layout.tsx`.
- Repeatable verification: `scripts/seo-check.mjs`, `scripts/redirect-check.cjs`, `scripts/redirect-http-check.mjs`, `scripts/analytics-check.cjs`, `scripts/mobile-check.mjs`.

## Deployment and Search Console checklist

1. Resolve owner facts and remove location TODOs only when verified. Confirm visible hours and schema agree; add verified geo/hours/postcode/social fields to schema at that point. Check Maps pin, listing name/address/phone and directions on a real phone. Preserve independent-Apple disclosure.
2. Current launch: `NEXT_PUBLIC_SITE_URL=https://serviceiphonebandung.vercel.app`; leave `SEO_REDIRECT_HOSTS` empty. Rebuild after changing public env vars. Verify deployment protection does not block public crawlers; no global noindex or robots disallow. Test homepage, every service, location, robots, sitemap and OG image publicly.
3. Optional analytics: set genuine GA4 ID only after privacy/consent configuration is decided. This is an opt-in integration, not a consent manager. Check GA DebugView with debug mode enabled in a test environment; click nested WA icons and both directions/profile links; confirm one event per click and route page views without private payloads. Mark `whatsapp_click` as a lead-intent key event if useful. A click is not a confirmed repair/customer.
4. Custom domain: first confirm ownership, attach domain to Vercel, configure DNS and wait for HTTPS. Then set `NEXT_PUBLIC_SITE_URL` to its canonical HTTPS origin and `SEO_REDIRECT_HOSTS` to `serviceiphonebandung.vercel.app` and any confirmed noncanonical hosts. Deploy the same redirect configuration to deployments serving the old hostname. Never use a made-up production domain. Verify old host returns 308 for root, nested services, blog, location and query-bearing links; new host returns 200 without loops. Check preview-host indexability separately in hosting settings.
5. Keep every existing service path. Keep old host redirects active long term; ensure assets remain available. Update Google Business Profile website, social profiles and important citations to the canonical hostname. Submit a sitemap containing only new-host indexable URLs.
6. Search Console: keep the existing Vercel URL-prefix property verified. Existing `public/google6a39e312569750a1.html` remains; check its exact public verification path and content, or configure `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` from the owner token. Add/verify the future domain property using Google's DNS TXT record; optionally add the canonical URL-prefix property. No credentials/tokens invented or external account changes made by this audit.
7. Submit `/sitemap.xml`; inspect homepage, location and each service with URL Inspection and Live Test. Confirm fetched canonical equals Google-selected canonical after recrawl, successful robots access and rendered content. Request indexing for priority URLs after deployment. Review Page Indexing for blocked/duplicate/soft-404 pages and unintended area indexing.
8. After a host move, use Change of Address in the eligible old property once new verification/redirects are working; follow the current Search Console workflow. Monitor both properties and retain verification. Validate LocalBusiness with Schema.org Validator and Google's Rich Results Test. LocalBusiness/FAQ schema does not guarantee a rich result; no self-serving review stars were requested.

Official validation references: https://developers.google.com/search/docs/appearance/structured-data/local-business ; https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes ; https://support.google.com/webmasters/answer/9370220 .

## 30-day measurement plan

- Days 1–3: export baseline Search Console queries/pages/device/country and previous 28-day comparison. Segment `service iphone bandung`, `service iphone dipatiukur` and spelling variants; record impressions, clicks, CTR and average position separately for homepage/location/services. Record indexed pages and selected canonicals. Export Business Profile website/call/directions activity where available. Capture actual inquiries and confirmed jobs in an owner-maintained log.
- Days 4–7: confirm sitemap processed and priority pages crawled; inspect exclusions and redirects. Validate opt-in GA events, organic landing pages and actual inquiry attribution. Fix factual discrepancies first. Record mobile lab metrics alongside field Core Web Vitals availability; do not confuse lab samples with field outcomes.
- Days 8–14: compare query/page changes, mobile engagement, WA/directions intent and real leads. Add verified entrance/access photos and answers based on genuine customer questions. Correct important name/address/phone citations. Invite genuine customers to review their actual experience without buying, fabricating or filtering ratings.
- Days 15–21: improve service content using actual repair examples and owner-approved technical detail; prioritize pages with impressions and weak CTR. Review cannibalization between homepage and location; keep city homepage intent and visit-specific local intent distinct. Do not add templated district doorway pages.
- Days 22–30: compare equal 7/14/28-day periods and prior baseline, accounting for migration/recrawl timing. Report query and landing-page metrics, canonical/index coverage, organic WA/directions clicks, confirmed inquiries/jobs and available mobile field metrics. Prioritize further work from evidence; set targets after baseline, not invented ranking promises.

Track changes and deployment date in the report. Thirty days may be insufficient for a new page/domain to stabilize; avoid repeated title changes or attributing every movement to one edit.

## Validation results

Results are recorded below after running the final checks. Local lab measurements and programmatic JSON-LD checks do not constitute Google indexing or live account verification.

| Command / check | Result |
|---|---|
| `npm run build` | PASS: Next 16.3.5 compile, TypeScript, 31 generated static outputs. Six original service detail paths retained, one new physical-location page. |
| `npm run lint` | PASS, exit 0. Initial run had a slow dependency/config load; no source errors. |
| `git diff --check` | PASS, exit 0. Only Git Windows LF/CRLF advisory messages. |
| `SEO_TEST_BASE=http://localhost:3002 node scripts/seo-check.mjs` (set environment using PowerShell syntax on Windows) | PASS: all 20 sitemap URLs return 200; unique titles, self canonicals, description, OG URL/image, one H1/main, parsed JSON-LD and verified identity fields. Internal links checked; thin-area noindex, future article 404s, robots sitemap, generated PNG and analytics-disabled checks pass. |
| `node scripts/redirect-check.cjs` | PASS: no redirects by default; configured permanent host rules, path pattern, escaped host regex, HTTPS origin validation and loop rejection. |
| `node scripts/redirect-http-check.mjs` | PASS: running Next dev fixture returned actual HTTP 308 for root, service, location and blog; query string preserved. Fixture used reserved `https://confirmed-domain.invalid`, never a production domain. |
| `node scripts/analytics-check.cjs` | PASS: disabled/malformed ID behavior, page view, delegated WhatsApp/directions events, internal-link exclusion, no message/phone/query in custom payload, cleanup. Live GA DebugView remains an owner deployment check. |
| `node scripts/mobile-check.mjs` | PASS with headless Edge: 390×844 viewport, 4× CPU slowdown, 150 ms RTT and 1.6 Mbps network; no overflow, one H1, all image alts present, WA links available. Changing calculator model changes the generated WA consultation message to that model. Screenshots visually inspected. |
| Lighthouse 13.5.0, mobile simulated defaults, Edge 155 | Homepage: performance **57**, SEO **100**, best practices **100**; location: performance **67**, accessibility **100**, SEO **100**, best practices **100**. After contrast/play-control fixes, a separate final homepage accessibility check passes **100**. |

Lighthouse invocation used `npm exec --yes --package=lighthouse -- lighthouse URL --chrome-flags='--headless=new --disable-gpu' --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=REPORT.json --quiet`, with `CHROME_PATH` set to the installed Edge executable. It did not change project dependencies or lockfile.

Homepage mobile lab: FCP **2.5 s**, LCP **3.1 s**, TBT **6,360 ms**, CLS **0**. Location: FCP **1.2 s**, LCP **2.6 s**, TBT **5,170 ms**, CLS **0**. The initial homepage run was 56 performance with FCP 2.9 s/LCP 3.3 s. These single samples do not establish a statistically reliable speed improvement: blocking time remained high and varied substantially. Direct CDP runs were slower (homepage LCP 10.46–16.52 s; location 0.716–0.856 s), illustrating environment/method variance. No production field data or INP was available.

Focused performance changes: below-fold comparison images no longer use `priority`; hero retains its initial-load priority and responsive `next/image`. Existing video remains user-initiated with `preload="metadata"`; no extra third-party script loads without an opted-in GA4 ID. Fixed insufficient badge/warranty contrast and the video control's accessible-name mismatch. Layout and calculator formulas remain intact.

Remaining performance work: profile the existing glass/blur/animation effects and homepage hydration on representative physical mobile hardware; reduce main-thread style/layout/paint and below-fold client work based on traces. This is a material launch follow-up, not a claimed Core Web Vitals pass. Repeat deployed mobile Lighthouse/PageSpeed checks without competing local compilation, then review Search Console field metrics when enough data exists.

Local raw reports and screenshots are in ignored `.seo-reports/`: `home-lighthouse.json` (initial), `home-final-lighthouse.json`, `dipatiukur-lighthouse.json`, `home-accessibility-final.json`, `mobile.json`, `home-mobile.png`, `dipatiukur-mobile.png`. Reproducible checks are committed-ready under `scripts/`; raw outputs are not added to Git. Google Rich Results Test/Schema.org Validator and live Search Console remain deployment checklist items, not tests claimed to have been executed.
