import type { PageContent } from "@/content/types";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("Web Design & Development", "/web-design-development")];

export const webDesignHub: PageContent = {
  slug: "/web-design-development",
  title: "Website Design and SEO Services | AVR Web Consulting",
  h1: "Websites built to load fast, rank well and be readable by AI",
  description:
    "Get a WordPress website built to rank. We combine web design and SEO so your site looks professional and is easy for Google to find. Request a quote.",
  keywords:
    "website design and seo services, website design and seo company, web design seo services",
  eyebrow: "Web Design & Development",
  serviceName: "Web Design and Development",
  answer:
    "AVR Web Consulting designs and builds business websites, WordPress sites and online stores with SEO built in from the first wireframe: semantic HTML, clean URL architecture, schema markup, green Core Web Vitals and answer-first page structure so both search crawlers and AI retrieval systems can parse every page.",
  hero: {
    image: "/images/web-development-touch-screen.webp",
    imageAlt: "Web Design & Development — SEO-Ready Websites | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Projects from", value: "$400" },
    { label: "Typical build", value: "3–5 weeks" },
    { label: "Core Web Vitals", value: "Green" },
    { label: "Mobile-first", value: "Always" },
  ],
  breadcrumb: base,
  related: [
    { label: "WordPress development", to: "/web-design-development/wordpress-development" },
    { label: "E-commerce development", to: "/web-design-development/ecommerce-development" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Web Design & Development — SEO-Ready Websites",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "approach",
      heading: "SEO is an architecture decision, not a plugin",
      blocks: [
        {
          kind: "paragraph",
          text: "Most rebuild disasters happen because search was treated as a phase after launch. We fix information architecture, URL structure, internal linking and schema during design, so the site launches ranking-ready instead of needing six months of remedial work.",
        },
        {
          kind: "list",
          title: "Built into every build",
          items: [
            "Semantic HTML with one clear H1 and logical heading hierarchy per page",
            "Clean, human-readable URLs with a permanent redirect map from the old site",
            "Organization, LocalBusiness, Service, Article, FAQPage and Breadcrumb schema",
            "Image optimisation, lazy loading and modern formats for green Core Web Vitals",
            "Answer-first page templates with FAQ blocks that AI systems can extract",
            "Accessible contrast, focus states and keyboard navigation as a baseline",
          ],
        },
      ],
    },
    {
      id: "platforms",
      heading: "Platforms we build on",
      blocks: [
        {
          kind: "table",
          head: ["Platform", "Best for", "Typical timeline"],
          rows: [
            ["WordPress", "Content-heavy business sites needing easy editing", "3–4 weeks"],
            ["WooCommerce", "Stores with complex catalogues on a WordPress stack", "5–7 weeks"],
            ["Shopify", "D2C brands wanting hosted reliability", "4–6 weeks"],
            [
              "Custom React / static",
              "Marketing sites where speed and SEO are critical",
              "4–6 weeks",
            ],
            ["Landing pages", "Campaign-specific conversion pages", "3–7 days"],
          ],
        },
      ],
    },
    {
      id: "process",
      heading: "Our build process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Discovery",
              text: "Business goals, buyer questions, competitor teardown and the keyword map that will drive the sitemap.",
            },
            {
              title: "Architecture",
              text: "Sitemap, URL structure, internal linking plan and redirect mapping approved before any design work.",
            },
            {
              title: "Design",
              text: "Mobile-first wireframes, then a full design system — colours, type scale, components — reviewed page by page.",
            },
            {
              title: "Build",
              text: "Development with performance budgets enforced, schema deployed and content loaded as pages are finished.",
            },
            {
              title: "QA and launch",
              text: "Cross-browser and device testing, accessibility pass, Lighthouse checks, redirect verification, analytics and Search Console setup.",
            },
            {
              title: "Aftercare",
              text: "30 days of post-launch support, indexation monitoring and a fix list from the first crawl of the live site.",
            },
          ],
        },
        {
          kind: "callout",
          title: "One page at a time",
          text: "We complete, review and test each page before moving to the next. It is slower on paper and far faster in practice, because it stops a single structural mistake from being copied across forty templates.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a website cost?",
      answer:
        "Small business sites start around $400, content-rich multi-service sites typically run $800–$2,000, and e-commerce builds depend on catalogue size and integrations. Every quote is fixed-scope with the deliverables written down before work begins.",
    },
    {
      question: "How long does a website take to build?",
      answer:
        "A focused business site takes three to four weeks, larger content sites four to six, and e-commerce five to seven. The main variable is content readiness — projects where copy and images are ready launch weeks sooner.",
    },
    {
      question: "Will my new site keep its existing rankings?",
      answer:
        "Yes, when the migration is done properly. We map every existing URL to its new destination with 301 redirects, preserve title and heading structure on ranking pages, and monitor indexation daily for the first fortnight after launch.",
    },
    {
      question: "Do you design mobile-first?",
      answer:
        "Always. Most traffic in our clients' markets is mobile, and Google indexes the mobile version. Designs are drawn at mobile widths first and expanded upward, rather than shrinking a desktop layout.",
    },
    {
      question: "Can I edit the website myself?",
      answer:
        "Yes. WordPress and Shopify builds come with a page builder or block setup plus a short recorded walkthrough, so your team can update text, images, blog posts and products without needing us.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "We advise on hosting and can set it up in your own account, so you always own the infrastructure and billing. For most business sites we recommend managed hosting with a CDN rather than the cheapest shared plan.",
    },
    {
      question: "Is the site optimised for AI search?",
      answer:
        "Yes. Templates include answer-first content blocks, FAQ sections with schema, clean semantic markup and an llms.txt file, all of which make the site easier for AI retrieval systems to parse and cite.",
    },
    {
      question: "What about website speed?",
      answer:
        "We set performance budgets during the build and test on throttled mobile connections. Targets are green Core Web Vitals: LCP under 2.5 seconds, INP under 200ms and CLS under 0.1 on real devices, not just on a fast desktop.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Thirty days of support is included with every build. After that, optional maintenance covers updates, backups, security monitoring, uptime checks and a monthly content or design change allowance.",
    },
    {
      question: "Can you redesign an existing site?",
      answer:
        "Yes, and we start with an audit of what currently ranks and converts so the redesign protects those assets. Redesigns that ignore existing performance data are the most common cause of post-launch traffic loss.",
    },
  ],
};

export const wordpressDevelopment: PageContent = {
  slug: "/web-design-development/wordpress-development",
  title: "WordPress SEO Services and Expert Help | AVR Web Consulting",
  h1: "WordPress development that stays fast after you start editing it",
  description:
    "Fix speed, structure and on-page issues holding your WordPress site back. Work with a WordPress SEO expert at AVR Web Consulting. Request a free audit.",
  keywords: "wordpress seo services, wordpress seo expert",
  eyebrow: "WordPress Development",
  serviceName: "WordPress Development",
  answer:
    "AVR Web Consulting builds custom WordPress sites with a lean plugin stack, block-based editing, schema markup and green Core Web Vitals. We avoid bloated multipurpose themes and page-builder overload, so the site stays fast and secure long after your team starts publishing to it.",
  hero: {
    image: "/images/wordpress-development-course.webp",
    imageAlt: "WordPress Development Services — Fast & SEO-Ready | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Build time", value: "3–4 weeks" },
    { label: "Plugins used", value: "Under 12" },
    { label: "Lighthouse target", value: "90+" },
    { label: "Training", value: "Included" },
  ],
  breadcrumb: [
    ...base,
    crumb("WordPress Development", "/web-design-development/wordpress-development"),
  ],
  related: [
    { label: "E-commerce development", to: "/web-design-development/ecommerce-development" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "Blogging & copywriting", to: "/content-marketing/blogging-copywriting" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for WordPress Development Services — Fast & SEO-Ready",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "services",
      heading: "What we do with WordPress",
      blocks: [
        {
          kind: "list",
          items: [
            "Custom theme and block development tailored to your brand system",
            "Business, service and multi-location site builds with location templates",
            "Speed optimisation: caching, image conversion, script deferral, database cleanup",
            "Security hardening, backups, staging environments and update workflows",
            "Migrations from Wix, Squarespace, static HTML or legacy WordPress installs",
            "SEO configuration: schema, sitemaps, canonical rules, robots and internal linking",
          ],
        },
      ],
    },
    {
      id: "speed",
      heading: "Why most WordPress sites are slow — and how we avoid it",
      blocks: [
        {
          kind: "table",
          head: ["Common cause", "Symptom", "Our approach"],
          rows: [
            [
              "Multipurpose theme",
              "Loads code for features you never use",
              "Lean custom theme or a minimal block theme",
            ],
            [
              "Page builder overload",
              "Div soup, huge CSS, poor CLS",
              "Native block editor with custom patterns",
            ],
            [
              "30+ plugins",
              "Conflicts, security holes, slow admin",
              "Under 12 vetted plugins, each justified",
            ],
            [
              "Unoptimised images",
              "LCP over 4 seconds on mobile",
              "WebP/AVIF, responsive sizes, lazy loading",
            ],
            [
              "Cheap shared hosting",
              "Slow TTFB regardless of front-end work",
              "Managed hosting plus CDN recommendation",
            ],
          ],
        },
        {
          kind: "callout",
          title: "The maintainability test",
          text: "A site is only fast if it is still fast a year later. We build patterns your editors can reuse, so adding a page does not mean bolting on another plugin.",
        },
      ],
    },
    {
      id: "handover",
      heading: "Handover and training",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Staging review",
              text: "You review every page on a staging URL and sign off before launch.",
            },
            {
              title: "Launch checklist",
              text: "Redirects, SSL, analytics, Search Console, sitemap submission, indexation check.",
            },
            {
              title: "Training",
              text: "A recorded walkthrough covering editing pages, publishing posts, adding services and updating SEO fields.",
            },
            {
              title: "Documentation",
              text: "A short written guide listing plugins, licences, credentials and where each template lives.",
            },
            {
              title: "Support",
              text: "Thirty days of post-launch fixes included, with optional ongoing maintenance after that.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why choose WordPress over a website builder?",
      answer:
        "WordPress gives you full ownership of your content, unrestricted SEO control including schema and redirects, and no platform limits on page count or URL structure. Builders are faster to start on and much harder to scale a serious content programme on.",
    },
    {
      question: "Which page builder do you use?",
      answer:
        "Where possible we build with the native block editor and custom patterns, which produces far lighter markup. If your team already relies on Elementor or Divi, we will work within it and optimise around its overhead.",
    },
    {
      question: "How many plugins will my site have?",
      answer:
        "Usually under twelve. Every plugin is a maintenance and security liability, so each one has to earn its place. Anything that can be handled with a few lines of theme code is handled in the theme instead.",
    },
    {
      question: "Can you make my existing WordPress site faster?",
      answer:
        "Yes. A typical speed engagement covers hosting and TTFB, image conversion, render-blocking scripts, caching configuration, plugin pruning and database cleanup. Most sites we audit have their largest win in images and unused plugins.",
    },
    {
      question: "Do you use Yoast or Rank Math?",
      answer:
        "Either works; we usually configure Rank Math for its schema flexibility. What matters more is the configuration — canonical rules, indexation control, sitemaps and structured data — than which plugin badge sits in the admin bar.",
    },
    {
      question: "Is WordPress secure?",
      answer:
        "It is when maintained. We harden the install, restrict admin access, enforce strong authentication, keep core and plugins updated, and set up automated offsite backups so a bad update is a ten-minute rollback rather than a crisis.",
    },
    {
      question: "Can you migrate my site from Wix or Squarespace?",
      answer:
        "Yes. We rebuild the content in WordPress, preserve or improve the URL structure with a full 301 redirect map, and monitor Search Console for coverage errors through the first weeks after the switch.",
    },
    {
      question: "Will I be able to add new pages myself?",
      answer:
        "Yes. We build reusable block patterns for your common page types, so adding a new service or location page is a matter of picking a pattern and filling in the content, with the SEO fields already wired up.",
    },
    {
      question: "Do you build multilingual WordPress sites?",
      answer:
        "Yes, typically with a translation plugin plus correct hreflang implementation. For markets like the UAE or Europe we also review URL structure so each language version can rank independently.",
    },
    {
      question: "What does WordPress development cost?",
      answer:
        "Business site builds start around $400 and most multi-service sites land between $800 and $2,000 depending on page count, custom templates and integrations. Speed optimisation as a standalone project starts at $200.",
    },
  ],
};

export const ecommerceDevelopment: PageContent = {
  slug: "/web-design-development/ecommerce-development",
  title: "E-commerce Development — Shopify & WooCommerce | AVR Web Consulting",
  h1: "E-commerce development built to rank, load fast and convert",
  description:
    "Shopify and WooCommerce store development by AVR Web Consulting: SEO-ready category architecture, product schema, fast checkout and feed-ready catalogues for global selling.",
  eyebrow: "E-commerce Development",
  serviceName: "E-commerce Development",
  answer:
    "AVR Web Consulting builds Shopify and WooCommerce stores with SEO-first architecture: crawlable faceted navigation, unique category copy, Product and Review schema, fast mobile checkout and clean product feeds for Google Shopping. Stores are structured so both search engines and AI shopping assistants can read your catalogue accurately.",
  hero: {
    image: "/images/ecommerce-hero-new.jpg",
    imageAlt: "E-commerce Development — Shopify & WooCommerce | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Build time", value: "5–7 weeks" },
    { label: "Product schema", value: "Full" },
    { label: "Feed-ready", value: "Day one" },
    { label: "Checkout steps", value: "Minimised" },
  ],
  breadcrumb: [
    ...base,
    crumb("E-commerce Development", "/web-design-development/ecommerce-development"),
  ],
  related: [
    { label: "WordPress development", to: "/web-design-development/wordpress-development" },
    { label: "Google Ads", to: "/paid-advertising/google-ads" },
    { label: "Global SEO", to: "/seo-services/global-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for E-commerce Development — Shopify & WooCommerce",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "architecture",
      heading: "Catalogue architecture decides your ceiling",
      blocks: [
        {
          kind: "paragraph",
          text: "In e-commerce, most organic traffic is won or lost in category and filter design. Stores that let every filter combination generate a crawlable URL bury their real pages under thousands of near-duplicates; stores with no landing pages for high-intent filters leave easy revenue on the table.",
        },
        {
          kind: "list",
          title: "How we structure a catalogue",
          items: [
            "Category pages targeting real search demand, with unique intro and buying-guide copy",
            "Curated landing pages for high-volume filter combinations, indexed deliberately",
            "Parameter and facet control so low-value combinations stay out of the index",
            "Canonical rules for variants, pagination handled without splitting authority",
            "Internal linking from guides and blog content into money categories",
          ],
        },
      ],
    },
    {
      id: "conversion",
      heading: "Conversion details that move the number",
      blocks: [
        {
          kind: "table",
          head: ["Element", "Common mistake", "What we implement"],
          rows: [
            [
              "Product images",
              "One angle, slow to load",
              "Multiple angles, zoom, optimised formats",
            ],
            ["Delivery info", "Revealed at checkout", "Shown on the product page with dates"],
            ["Reviews", "Missing or off-site only", "On-page reviews with Review schema"],
            [
              "Checkout",
              "Forced account creation",
              "Guest checkout, wallet payments, minimal fields",
            ],
            ["Search", "Exact-match only", "Typo-tolerant search with synonyms and filters"],
            [
              "Trust",
              "No returns policy visible",
              "Returns, warranty and support surfaced near the buy button",
            ],
          ],
        },
      ],
    },
    {
      id: "ai-shopping",
      heading: "Getting your products into AI shopping answers",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Structured product data",
              text: "Complete Product, Offer, AggregateRating and Review schema so assistants can read price, availability and reception without guessing.",
            },
            {
              title: "Factual specifications",
              text: "Machine-readable spec tables on every product page — dimensions, materials, compatibility — instead of marketing adjectives only.",
            },
            {
              title: "Comparison content",
              text: "Honest 'X vs Y' and 'best for' guides, the exact format assistants draw on when a shopper asks for a recommendation.",
            },
            {
              title: "Feed hygiene",
              text: "Clean Merchant Center feeds with GTINs, accurate categories and consistent titles, which also keeps Shopping ads efficient.",
            },
            {
              title: "Consistency",
              text: "Identical product naming, pricing and availability across your site, marketplaces and feeds so AI systems resolve one confident answer.",
            },
          ],
        },
        {
          kind: "callout",
          title: "Why this matters now",
          text: "A growing share of product discovery starts with an assistant, not a search box. Stores with complete structured data get named in those answers; stores with pretty pages and empty markup do not.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Shopify or WooCommerce — which should I choose?",
      answer:
        "Shopify suits brands that want hosted reliability, straightforward payments and low maintenance. WooCommerce suits businesses that need deep customisation, complex pricing rules or tight integration with an existing WordPress content operation.",
    },
    {
      question: "How much does an e-commerce site cost?",
      answer:
        "Small catalogues start around $900, while stores with several hundred products, custom filters and integrations typically run $2,000–$5,000. Migrations from an existing platform are quoted separately based on catalogue size and URL mapping work.",
    },
    {
      question: "How long does a store build take?",
      answer:
        "Five to seven weeks for most projects: one week of architecture, two to three of design and build, one for catalogue loading and integrations, and one for QA, payment testing and launch.",
    },
    {
      question: "Do you handle product data and imports?",
      answer:
        "Yes. We import catalogues from spreadsheets or an existing platform, normalise titles and attributes, generate SEO-friendly URLs and flag missing fields such as GTINs that would otherwise break Shopping feeds.",
    },
    {
      question: "Will my product pages have schema markup?",
      answer:
        "Yes — Product, Offer, AggregateRating, Review and Breadcrumb schema on every product page, which drives rich results in Google and gives AI shopping assistants the structured facts they need to recommend you.",
    },
    {
      question: "Can you improve my existing store's speed?",
      answer:
        "Yes. Common wins are image optimisation, removing unused apps and scripts, deferring third-party tags and fixing theme-level render blocking. On Shopify, app bloat is usually the single biggest cost to page speed.",
    },
    {
      question: "Do you set up Google Merchant Center?",
      answer:
        "Yes, including feed creation, diagnostics, attribute mapping and custom labels for margin-based bidding, so Shopping and Performance Max campaigns can launch as soon as the store goes live.",
    },
    {
      question: "How do you handle international selling?",
      answer:
        "With market-specific currency and pricing, localised content where it matters, correct hreflang between regional versions and shipping rules that are visible before checkout. For India-based exporters we also review tax and invoicing display.",
    },
    {
      question: "What about abandoned carts?",
      answer:
        "We implement cart recovery emails, wallet and UPI payment options, guest checkout and transparent shipping costs shown early. Surprise costs at the final step remain the most common cause of abandonment we find in audits.",
    },
    {
      question: "Do you offer ongoing store support?",
      answer:
        "Yes. Thirty days of post-launch support is included, and monthly maintenance covers updates, security, feed monitoring, conversion experiments and new category or landing page rollouts.",
    },
  ],
};

export const webDesignPages = [webDesignHub, wordpressDevelopment, ecommerceDevelopment];
