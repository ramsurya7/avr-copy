# AVR Web Consulting — AI-SEO Agency Website

A large, content-deep marketing site (60+ pages, 15+ blog articles, 200+ FAQs) built on a light theme brand kit derived from the AVR logo, with a full-screen looping hero video and machine-readable structured data on every page.

## Brand kit (from the logo)

- Electric cyan `#22A7E0` (primary), deep ink `#0E1116` (text/contrast rings), pure white surfaces, soft mist `#F4F8FB` section bands, warm amber `#F5A623` for accents/CTA highlights.
- Light theme only. Circular/ring motifs echoing the logo: pill buttons, rounded cards, ring-outlined icons.
- Typography: Space Grotesk headings + DM Sans body — modern tech, high legibility, distinct from default AI-slop Inter.
- Grid-disciplined layout, generous whitespace, restrained motion (fade/slide on scroll only), WCAG AA contrast, visible focus states.

## What gets built

**Global chrome**

- Header with mega-menu covering the full service tree, sticky CTA, mobile drawer.
- Footer with full sitemap, NAP block (Visakhapatnam address, +91-9182543249, info@avrwebconsulting.com), service/city links.
- Reusable section kit: Hero (video or static), stat band, service grid, process steps, pricing table, testimonial, case-study card, FAQ accordion, CTA band, breadcrumb.

**Home** — full-screen looping background video (the uploaded Gemini video, muted/autoplay/playsinline, poster fallback, reduced-motion fallback to a static frame) with high-contrast overlay headline, then services, AI-SEO differentiator, industries, results, pricing teaser, blog teaser, 10 FAQs.

**Route map (60+ pages)**

- Services hub + Global / Local / Technical / GEO Targeting SEO
- AI SEO hub + AEO / GEO SEO / LLM SEO / LLMO / AI Visibility / AI Overviews / AI Citations & Mentions / AI Retrieval Systems
- Paid Advertising hub + Google Ads / Social Media Ads
- Content Marketing hub + Blogging & Copywriting / Guest Posting & Link Building
- Web Design hub + WordPress / E-commerce
- Local Citations & GMB
- Social Media Marketing
- Industries hub + Startups / E-commerce / Healthcare / Fashion & Retail / SaaS & Tech / Real Estate / Education / Travel / Legal / Manufacturing
- Locations hub + city pages: Delhi, Mumbai, Chennai, Bangalore, Hyderabad, Visakhapatnam, Pune, Kolkata + country pages: USA, UK, UAE, Europe
- Case Studies hub + SEO Success Stories / AI SEO Visibility / PPC Results + 6 individual case studies
- Blog hub + 15+ full articles (1,500–2,500 words each)
- Pricing hub + SEO / AI SEO / PPC package pages
- FAQs hub (searchable, 200+ questions, category filters)
- About + Our Story / Team / Awards & Certifications
- Contact (consultation form, office location, embedded map/directions)
- Legal: Privacy, Terms, Sitemap page, 404

**FAQs** — every page carries 10 page-relevant FAQs rendered as an accordion and emitted as FAQPage JSON-LD. The FAQ hub aggregates all of them with instant client-side fuzzy search + category filtering.

**Blog articles** — deep, structured content: TL;DR answer box, table of contents, H2/H3 hierarchy, definition callouts, comparison tables, key-takeaway lists, per-article FAQs, author box, internal links. Uploaded stock/AI imagery placed on relevant articles, case studies, About, and service pages.

## AI SEO / AEO / GEO / LLM / LLMO / AI-visibility layer

Applied to every page, not bolted on:

- Answer-first content: each page opens with a 40–60 word direct answer block, then depth — the shape answer engines and LLMs extract.
- Structured data per page type: Organization + LocalBusiness (NAP, geo, hours) sitewide; Service, FAQPage, Article, BreadcrumbList, Review/AggregateRating where genuine, WebSite + SearchAction, Person for team.
- Semantic HTML, one H1, descriptive headings phrased as real questions, tables and definition lists for machine parsing.
- Unique `head()` per route: title, description, og/twitter tags, self-referencing canonical.
- `robots.txt` allowing AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) + `sitemap.xml` covering all routes + `llms.txt` summarising the site for LLM retrieval.
- Entity consistency: identical brand name, NAP, and service naming across every page so AI systems resolve one entity.
- GEO: city/country pages with locality-specific copy, geo-coordinates, and local FAQs.
- Performance for crawlability: lazy images, no render-blocking work, lean bundles.

## Backend (Lovable Cloud)

Content stays in typed source files (fastest, fully server-rendered, perfect for crawlers). Cloud is enabled only for lead capture:

- `leads` table with RLS: public insert allowed, reads restricted — consultation form, quick-quote, and newsletter submissions land here.

## Execution order

Page-by-page, each finished and reviewed before the next.

1. Brand kit in `src/styles.css`, header/footer, section component kit, SEO/schema utilities, video hero component.
2. Home page complete.
3. Service hubs, then their child pages.
4. AI SEO cluster (the differentiator).
5. Industries, Locations/GEO pages.
6. Case studies, Pricing, About, Contact + Cloud form.
7. Blog articles.
8. FAQ hub with search, sitemap/robots/llms.txt, accessibility + performance pass.

## Technical notes

- TanStack Start file routes under `src/routes/`; nested service trees as layout + child routes.
- Content in typed modules (`src/content/*`) — services, FAQs, articles, cities, case studies — so pages, sitemap, FAQ search, and JSON-LD all read from one source and never drift.
- Shared `buildHead()` and `jsonLd()` helpers so every route emits complete, self-referencing metadata.
- Uploaded video and images published as CDN assets; video served with poster + `prefers-reduced-motion` fallback.
- Tailwind v4 semantic tokens only — no hardcoded colors in components.
