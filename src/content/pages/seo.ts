import type { PageContent } from "@/content/types";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("SEO Services", "/seo-services")];

export const seoServicesHub: PageContent = {
  slug: "/seo-services",
  title: "SEO Services for Business Websites | AVR Web Consulting",
  h1: "SEO services that earn rankings in Google and citations in AI answers",
  description:
    "Improve your rankings with SEO services from AVR Web Consulting: audits, on-page optimization, technical fixes and backlinks. Request a free audit.",
  keywords:
    "search engine optimization service, search optimization services, seo optimization companies",
  eyebrow: "SEO Services",
  serviceName: "Search Engine Optimization",
  answer:
    "AVR Web Consulting provides four core SEO services: global SEO for multi-country organic growth, local SEO for map and near-me visibility, technical SEO for crawlability and Core Web Vitals, and GEO targeting for city-level rankings. Packages start at $200 per month with manual, penalty-safe execution.",
  hero: {
    image: "/images/seo-typing-laptop.webp",
    imageAlt: "SEO Services — Global, Local, Technical & GEO | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Starting price", value: "$200/mo" },
    { label: "Citations live in", value: "3 days" },
    { label: "Technical fixes", value: "1 week" },
    { label: "Markets served", value: "India + Global" },
  ],
  breadcrumb: [crumb("Home", "/"), crumb("SEO Services", "/seo-services")],
  related: [
    { label: "AI SEO services", to: "/ai-seo" },
    { label: "Content marketing", to: "/content-marketing" },
    { label: "Pricing", to: "/pricing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for SEO Services — Global, Local, Technical & GEO",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-you-get",
      heading: "What our SEO services include",
      blocks: [
        {
          kind: "paragraph",
          text: "Every engagement starts with a full technical and content audit, then moves into a prioritised roadmap. We do not sell traffic for its own sake — the goal is qualified visibility: the queries that produce enquiries, calls and orders for your business, in the countries and cities where you actually sell.",
        },
        {
          kind: "list",
          title: "Included in every SEO retainer",
          items: [
            "Technical audit covering crawlability, indexation, site speed and Core Web Vitals",
            "Keyword and intent mapping across informational, commercial and transactional queries",
            "On-page optimisation: titles, meta descriptions, headings, internal links, schema markup",
            "Content briefs and answer-first content production for priority pages",
            "Manual link building and citation placement — no PBNs, no automated spam",
            "Monthly reporting with rankings, traffic, conversions and AI-answer visibility tracking",
          ],
        },
        {
          kind: "callout",
          title: "Hybrid by default",
          text: "Every SEO retainer now includes baseline AEO and LLM optimisation — schema, answer blocks and entity consistency — because a growing share of searches ends in an AI summary rather than a blue link.",
        },
      ],
    },
    {
      id: "service-lines",
      heading: "Choose the SEO service that matches your goal",
      blocks: [
        {
          kind: "table",
          head: ["Service", "Best for", "Primary outcome"],
          rows: [
            [
              "Global SEO",
              "SaaS, e-commerce and exporters selling in multiple countries",
              "Organic revenue across US, UK, UAE and Europe",
            ],
            [
              "Local SEO",
              "Clinics, showrooms, service providers with a service area",
              "Map pack rankings, calls and direction requests",
            ],
            [
              "Technical SEO",
              "Large or legacy sites with crawl and speed problems",
              "Clean indexation and faster page experience",
            ],
            [
              "GEO Targeting SEO",
              "Multi-city operators in Indian metros",
              "City-level ranking for 'service + city' queries",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "Most clients combine two: technical SEO to remove the ceiling, then either local or global depending on where revenue comes from. If you are unsure, our audit tells you which lever moves first.",
        },
      ],
    },
    {
      id: "process",
      heading: "Our SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Audit (week 1)",
              text: "Technical crawl, content inventory, backlink review, competitor gap analysis and AI-answer baseline.",
            },
            {
              title: "Roadmap (week 1–2)",
              text: "A prioritised list ranked by impact and effort, with owners and dates. You approve before work starts.",
            },
            {
              title: "Fix and optimise (week 2–4)",
              text: "Technical fixes shipped, priority pages rewritten answer-first, schema deployed, internal links rebuilt.",
            },
            {
              title: "Build authority (ongoing)",
              text: "Manual citations, guest posts and digital PR that earn real editorial links and AI-citable mentions.",
            },
            {
              title: "Measure and iterate (monthly)",
              text: "Rankings, organic sessions, conversions and AI visibility reviewed monthly; the roadmap is re-prioritised each cycle.",
            },
          ],
        },
      ],
    },
    {
      id: "why-avr",
      heading: "Why businesses choose AVR Web Consulting",
      blocks: [
        {
          kind: "list",
          items: [
            "Affordable, transparent pricing — SEO from $200/month, local SEO from $100/month, guest posts from $20",
            "Fast delivery: citations live in 3 days, technical fixes shipped within a week",
            "100% manual work — every citation, link and guest post is placed by a human",
            "Hybrid expertise: classic SEO plus AEO, GEO, LLM SEO and LLMO under one roof",
            "Global plus local: teams experienced with US, UK, UAE, European and Indian search markets",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much do your SEO services cost?",
      answer:
        "SEO retainers start at $200 per month for global SEO and $100 per month for local SEO. Guest posts start at $20 per placement. Final pricing depends on the number of target keywords, languages and markets; you get a fixed monthly figure before work begins.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Technical fixes and on-page improvements often move rankings within 4–8 weeks. Competitive commercial keywords typically take 4–6 months of consistent content and link building. Local SEO and citation work usually shows movement in the map pack within 30–60 days.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No credible agency can guarantee a specific position, because ranking systems are controlled by Google and AI engines. We guarantee deliverables, timelines and transparent reporting, and we track ranking, traffic and conversion trends so progress is measurable.",
    },
    {
      question: "Which countries do you provide SEO services in?",
      answer:
        "We serve clients globally, with focus markets in the United States, United Kingdom, United Arab Emirates and Europe, plus national coverage across India including Delhi, Mumbai, Chennai, Bangalore, Hyderabad and Visakhapatnam.",
    },
    {
      question: "Is your link building safe?",
      answer:
        "Yes. All links and citations are placed manually on real, indexed sites with genuine traffic. We do not use private blog networks, automated tools or link farms, which is why our clients avoid manual actions and algorithmic penalties.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer:
        "Yes. A large part of our client base is small businesses, local service providers and early-stage startups. Local SEO from $100 per month is designed specifically for businesses that need enquiries rather than vanity traffic.",
    },
    {
      question: "What reporting do you provide?",
      answer:
        "You receive a monthly report covering keyword rankings, organic sessions, conversions, links and citations built, technical health and AI-answer visibility, along with a short written summary of what changed and what happens next.",
    },
    {
      question: "Can you fix an existing site or do you need to rebuild it?",
      answer:
        "In most cases we optimise the existing site. Rebuilds are only recommended when the platform blocks indexation, speed or schema — and we will tell you plainly if that is the case rather than selling a redesign by default.",
    },
    {
      question: "Do your SEO packages include content writing?",
      answer:
        "Yes. Content briefs and answer-first article production are included in all standard retainers. Volume depends on the package; additional articles and landing pages can be added at any time.",
    },
    {
      question: "How is SEO different from AI SEO?",
      answer:
        "Classic SEO optimises for ranked links in Google and Bing. AI SEO — AEO, GEO, LLM SEO and LLMO — optimises for being quoted inside AI answers from ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews. We run both together because users now move between them.",
    },
  ],
};

export const globalSeo: PageContent = {
  slug: "/seo-services/global-seo",
  title: "Organic SEO Agency and Consultant | AVR Web Consulting",
  h1: "Global SEO services for multi-country organic growth",
  description:
    "Build steady, long-term search visibility without paid ads. Our organic SEO agency focuses on content, on-page work and quality backlinks. Get a free audit.",
  keywords: "organic seo agency, organic seo consultant",
  eyebrow: "SEO Services",
  serviceName: "Global SEO",
  answer:
    "Global SEO makes one website rank in several countries at once. AVR Web Consulting builds the country and language architecture, hreflang tags, localised keyword sets and market-specific links required for a single domain to compete in US, UK, UAE and European search results.",
  hero: {
    image: "/images/digital-marketing.webp",
    imageAlt: "Global SEO Services for US, UK, UAE & Europe | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "From", value: "$200/mo" },
    { label: "Markets", value: "US · UK · UAE · EU" },
    { label: "Audit delivery", value: "5 days" },
    { label: "Work type", value: "100% manual" },
  ],
  breadcrumb: [...base, crumb("Global SEO", "/seo-services/global-seo")],
  related: [
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "LLM SEO", to: "/ai-seo/llm-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Global SEO Services for US, UK, UAE & Europe",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "definition",
      heading: "What is global SEO?",
      blocks: [
        {
          kind: "paragraph",
          text: "Global SEO — also called international SEO — is the practice of structuring and optimising a website so it can rank in more than one country or language. It combines a technical layer (URL structure, hreflang, indexing rules), a content layer (localised keywords, currency, spelling, examples) and an authority layer (links and mentions from each target market).",
        },
        {
          kind: "paragraph",
          text: "The mistake most brands make is translating pages and hoping Google sorts it out. Search intent differs by market: a UK buyer searches 'SEO agency pricing', a US buyer searches 'SEO agency cost', and a UAE buyer often searches in English but expects local currency and WhatsApp contact. Global SEO is intent research repeated per market.",
        },
      ],
    },
    {
      id: "architecture",
      heading: "Choosing the right international architecture",
      blocks: [
        {
          kind: "table",
          head: ["Structure", "Example", "When we recommend it"],
          rows: [
            [
              "ccTLD",
              "example.co.uk",
              "Strong local trust needed, budget for separate authority building",
            ],
            [
              "Subdirectory",
              "example.com/uk/",
              "Most clients — consolidates authority, cheapest to maintain",
            ],
            ["Subdomain", "uk.example.com", "Separate tech stacks or regional teams"],
            ["Parameter", "example.com?loc=uk", "Not recommended — weak signals and crawl waste"],
          ],
        },
        {
          kind: "callout",
          title: "Our default recommendation",
          text: "Subdirectories with correct hreflang and a clear canonical policy. It concentrates link equity, is cheapest to run, and is the fastest structure to get indexed correctly.",
        },
      ],
    },
    {
      id: "deliverables",
      heading: "What is included in a global SEO engagement",
      blocks: [
        {
          kind: "list",
          items: [
            "Market prioritisation based on demand, competition and your fulfilment capacity",
            "Country and language keyword research with local search volume and intent labels",
            "hreflang implementation and validation, including x-default handling",
            "Localised on-page optimisation: titles, meta, headings, currency, spelling, units",
            "Duplicate-content control across similar English variants (US/UK/AU)",
            "Country-specific link building and digital PR",
            "Geo-targeted schema, Organization data and consistent NAP across markets",
            "Search Console property setup and per-country performance reporting",
          ],
        },
      ],
    },
    {
      id: "ai-layer",
      heading: "Global SEO in the age of AI answers",
      blocks: [
        {
          kind: "paragraph",
          text: "AI assistants answer country-specific questions using region-aware retrieval. If your UK page has no pricing in GBP, no UK entity signals and no UK citations, an LLM will summarise a competitor instead. We add answer blocks, localised FAQ schema and per-market entity consistency so your pages are retrievable in every market you serve.",
        },
        {
          kind: "list",
          title: "AI signals we add per market",
          items: [
            "Answer-first summary paragraphs in local phrasing",
            "FAQPage schema with market-specific questions",
            "Consistent brand, address and service naming across all locales",
            "Citable statistics and clearly attributed claims",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between global SEO and local SEO?",
      answer:
        "Global SEO targets audiences in multiple countries through language and country signals, while local SEO targets buyers near a physical location through Google Business Profile, citations and map-pack signals. Many clients run both: local for their home city and global for export markets.",
    },
    {
      question: "Do I need separate websites for each country?",
      answer:
        "Usually not. For most businesses a single domain with country subdirectories and correct hreflang performs better than several weak websites, because all links and authority accumulate on one domain.",
    },
    {
      question: "How does hreflang work?",
      answer:
        "Hreflang tags tell search engines which language and regional version of a page to show. Each version must reference every other version, including itself, and pair with a self-referencing canonical. Incorrect or one-way hreflang is one of the most common international SEO faults we fix.",
    },
    {
      question: "How long does global SEO take?",
      answer:
        "Architecture and technical work is typically complete in 3–6 weeks. Ranking traction in a new country usually appears from month three, and compounds from month six as market-specific links and content accumulate.",
    },
    {
      question: "Can you handle non-English markets?",
      answer:
        "Yes. We manage localisation with native reviewers for major European languages and Arabic, and we always localise intent and examples rather than machine-translating existing pages.",
    },
    {
      question: "How much does global SEO cost?",
      answer:
        "Global SEO retainers start at $200 per month for a single market and scale with the number of countries, languages and pages. You receive a fixed monthly price after the audit, with no long lock-in contracts.",
    },
    {
      question: "Will duplicate English pages hurt my rankings?",
      answer:
        "Not if handled correctly. Near-duplicate US, UK and AU pages need hreflang plus meaningful localisation — pricing, spelling, examples and contact details — so each version is genuinely useful for its market.",
    },
    {
      question: "Do you build links in each target country?",
      answer:
        "Yes. Local relevance matters, so we place manual guest posts, listings and digital PR mentions on sites based in or read by each target market rather than relying on generic global directories.",
    },
    {
      question: "How do you measure global SEO performance?",
      answer:
        "We segment Search Console and analytics by country, then report impressions, clicks, average position, conversions and AI-answer citations per market so you can see which country is paying back its investment.",
    },
    {
      question: "Can global SEO work for a small business?",
      answer:
        "Yes, if you focus. We usually start with one or two priority countries and a tight keyword set rather than launching ten locales at once, which keeps costs low and produces measurable wins faster.",
    },
  ],
};

export const localSeo: PageContent = {
  slug: "/seo-services/local-seo",
  title: "Local SEO Agency for Small Businesses | AVR Web Consulting",
  h1: "Local SEO services that fill the map pack with your business",
  description:
    "Get found by nearby customers with local SEO from AVR Web Consulting: keyword research, on-page fixes, GMB setup and citations. Request a free audit.",
  keywords:
    "local seo agency, best local seo agency, best local search engine optimization companies, local business seo services, local seo for small businesses, search engine optimization for local business",
  eyebrow: "SEO Services",
  serviceName: "Local SEO",
  answer:
    "Local SEO makes your business appear when nearby customers search. AVR Web Consulting optimises your Google Business Profile, builds manually verified local citations within three days, fixes NAP consistency, and targets 'near me' and 'service + city' keywords from $100 per month.",
  hero: {
    image: "/images/local-seo-hero.jpg",
    imageAlt: "Local SEO Services from $100/month | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "From", value: "$100/mo" },
    { label: "Citations live", value: "3 days" },
    { label: "GMB posts", value: "Weekly" },
    { label: "Review support", value: "Included" },
  ],
  breadcrumb: [...base, crumb("Local SEO", "/seo-services/local-seo")],
  related: [
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Locations we serve", to: "/locations" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Local SEO Services from $100/month",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How local ranking actually works",
      blocks: [
        {
          kind: "paragraph",
          text: "Google ranks local results on three factors: relevance (does your profile and site match the query), distance (how close you are to the searcher) and prominence (how well known and well cited your business is). You cannot change distance, so local SEO is the discipline of maximising relevance and prominence.",
        },
        {
          kind: "list",
          title: "The levers we pull",
          items: [
            "Google Business Profile categories, services, attributes and description",
            "Consistent name, address and phone number across every directory",
            "Location and service landing pages with genuine local content",
            "Review volume, recency and keyword-rich review responses",
            "Local links from chambers, associations, sponsorships and regional media",
            "Geo and LocalBusiness schema on the website",
          ],
        },
      ],
    },
    {
      id: "citations",
      heading: "Manual citations delivered in three days",
      blocks: [
        {
          kind: "paragraph",
          text: "Citations are mentions of your business name, address and phone number on directories and industry sites. Their value comes from consistency: a single wrong suite number or old phone line can suppress map rankings. We build every citation by hand, then send a live URL sheet you can verify.",
        },
        {
          kind: "table",
          head: ["Package", "Citations", "Turnaround"],
          rows: [
            ["Starter", "30 manual citations", "3 days"],
            ["Growth", "60 manual citations + cleanup", "5 days"],
            ["Multi-location", "30 per location", "5–7 days"],
          ],
        },
      ],
    },
    {
      id: "content",
      heading: "Location pages that rank without duplication",
      blocks: [
        {
          kind: "paragraph",
          text: "Spun city pages no longer rank. Each location page we build carries a distinct opening answer, local proof (projects, reviews, landmarks, service radius), local FAQs and its own LocalBusiness schema with correct coordinates — which also makes the page usable by AI assistants answering 'best X near me' questions.",
        },
        {
          kind: "steps",
          items: [
            {
              title: "Research",
              text: "Local intent keywords, competitor map pack analysis and review gap review.",
            },
            {
              title: "Build",
              text: "One optimised page per genuine service area with unique copy and schema.",
            },
            {
              title: "Prove",
              text: "Add local reviews, case snippets and photos to establish real presence.",
            },
            {
              title: "Promote",
              text: "Local citations, GMB posts and regional links pointing at the location page.",
            },
          ],
        },
      ],
    },
    {
      id: "ai-local",
      heading: "Local visibility inside AI assistants",
      blocks: [
        {
          kind: "paragraph",
          text: "AI assistants increasingly answer local queries by summarising directory data, reviews and structured markup rather than a map. Businesses with consistent NAP, rich LocalBusiness schema and quotable review content get named in those answers; businesses with conflicting listings simply disappear.",
        },
        {
          kind: "callout",
          title: "Included in every local retainer",
          text: "LocalBusiness schema, 10 local FAQs with FAQPage markup, and entity consistency checks across Google, Bing Places, Apple Maps and the top directories in your market.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does local SEO cost?",
      answer:
        "Local SEO starts at $100 per month per location. That includes Google Business Profile optimisation, weekly posts, citation maintenance, review guidance and on-page work for your location pages.",
    },
    {
      question: "How fast will I appear in the map pack?",
      answer:
        "Most single-location businesses see map pack movement in 30–60 days once citations are consistent and the profile is fully completed. Competitive metro categories such as dentistry or real estate usually take three to four months.",
    },
    {
      question: "What is a citation and why does it matter?",
      answer:
        "A citation is any online mention of your business name, address and phone number. Search engines use the consistency of those mentions to verify that your business is real and located where you claim, which directly affects map rankings.",
    },
    {
      question: "Do you manage Google Business Profile posts and photos?",
      answer:
        "Yes. We publish weekly posts, add geo-tagged photos, keep services and hours accurate, answer Q&A entries and monitor for unauthorised profile edits or suspensions.",
    },
    {
      question: "Can you help with reviews?",
      answer:
        "We provide a compliant review generation system — request templates, QR cards and follow-up sequences — plus response writing. We never buy or fabricate reviews, which risks profile suspension.",
    },
    {
      question: "Do I need a physical address for local SEO?",
      answer:
        "You need either a physical address or a defined service area. Service-area businesses can hide the address and still rank, provided the profile, citations and website all describe the same service radius.",
    },
    {
      question: "Can you rank one business in multiple cities?",
      answer:
        "Yes, through a combination of genuine service-area pages, city-specific content and, where you have real premises, additional verified Google Business Profiles. We never create fake listings — they get removed and can suspend the main profile.",
    },
    {
      question: "How do you report local SEO results?",
      answer:
        "You receive monthly grid rank tracking around your location, Google Business Profile insights (calls, direction requests, website clicks), citation status and organic conversions from location pages.",
    },
    {
      question: "What is NAP consistency?",
      answer:
        "NAP stands for name, address and phone number. Consistency means every listing uses the exact same format everywhere. Variations such as 'Ste 4' versus 'Suite 4' weaken the trust signal and can hold back map rankings.",
    },
    {
      question: "Does local SEO help with AI search?",
      answer:
        "Yes. Assistants like ChatGPT and Gemini pull from directories, reviews and structured data. Clean NAP, LocalBusiness schema and answer-formatted content make your business far more likely to be named when someone asks an AI for a local recommendation.",
    },
  ],
};

export const technicalSeo: PageContent = {
  slug: "/seo-services/technical-seo",
  title: "SEO Website Optimization Services | AVR Web Consulting",
  h1: "Technical SEO that removes the ceiling on your rankings",
  description:
    "Improve an existing website's rankings with SEO website optimization: page speed, on-page fixes and technical clean-up. Request a free website audit.",
  keywords: "seo website optimization services",
  eyebrow: "SEO Services",
  serviceName: "Technical SEO",
  answer:
    "Technical SEO ensures search engines and AI crawlers can find, render, understand and index every important page. AVR Web Consulting audits crawlability, indexation, speed, structured data and rendering, then ships the critical fixes within one week of approval.",
  hero: {
    image: "/images/analytics-yearly-growth-2025.webp",
    imageAlt: "Technical SEO Services & Site Audits | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Audit delivery", value: "5 days" },
    { label: "Critical fixes", value: "1 week" },
    { label: "Checks run", value: "180+" },
    { label: "Includes", value: "Schema + CWV" },
  ],
  breadcrumb: [...base, crumb("Technical SEO", "/seo-services/technical-seo")],
  related: [
    { label: "Global SEO", to: "/seo-services/global-seo" },
    { label: "AI retrieval systems", to: "/ai-seo/ai-retrieval-systems" },
    { label: "Web design & development", to: "/web-design-development" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Technical SEO Services & Site Audits",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "audit",
      heading: "What our technical audit covers",
      blocks: [
        {
          kind: "list",
          items: [
            "Crawl analysis: orphan pages, redirect chains, crawl traps, faceted URL bloat",
            "Indexation review: coverage reports, canonical conflicts, noindex accidents, duplicate clusters",
            "Rendering: JavaScript dependency, hydration issues, server-side vs client-side content parity",
            "Core Web Vitals: LCP, INP and CLS diagnosis at template level, not just page level",
            "Structured data: coverage, validity and opportunity mapping across page types",
            "Internal linking: depth, anchor distribution and hub-and-spoke integrity",
            "Log file review for large sites: what crawlers actually request versus what you publish",
            "Security and hygiene: HTTPS, mixed content, status codes, robots.txt and sitemap accuracy",
          ],
        },
      ],
    },
    {
      id: "common-issues",
      heading: "The technical problems we find most often",
      blocks: [
        {
          kind: "table",
          head: ["Issue", "Typical impact", "Usual fix time"],
          rows: [
            [
              "Client-side rendered content",
              "Key copy invisible to some crawlers",
              "1–3 weeks (dev)",
            ],
            ["Missing or invalid schema", "No rich results, weak AI retrieval", "2–4 days"],
            ["Slow LCP on templates", "Ranking and conversion loss on mobile", "1–2 weeks"],
            ["Canonical conflicts", "Wrong URL indexed, split authority", "1–3 days"],
            ["Broken internal link depth", "Important pages crawled rarely", "3–5 days"],
          ],
        },
        {
          kind: "paragraph",
          text: "We separate findings into three buckets — critical (blocking indexation or revenue), high (measurable ranking drag) and hygiene — so your developers know exactly what to do first. Where you have no development capacity, our team implements the fixes directly.",
        },
      ],
    },
    {
      id: "ai-crawlers",
      heading: "Technical SEO for AI crawlers",
      blocks: [
        {
          kind: "paragraph",
          text: "AI answer engines run their own crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended — and most of them execute little or no JavaScript. If your content only exists after hydration, you are invisible to them even if Google renders you fine.",
        },
        {
          kind: "list",
          title: "What we implement",
          items: [
            "Server-rendered HTML for all indexable content",
            "robots.txt rules that deliberately allow the AI crawlers you want",
            "Clean semantic HTML: one H1, real headings, tables and definition lists",
            "Complete JSON-LD entity graph linking Organization, Service, Article and FAQ",
            "An llms.txt summary file describing the site for LLM retrieval",
          ],
        },
      ],
    },
    {
      id: "deliverable",
      heading: "What you receive",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Findings document",
              text: "Every issue with evidence, affected URLs, business impact and a recommended fix.",
            },
            {
              title: "Prioritised backlog",
              text: "Ticket-ready items your developers can pick up, ordered by impact and effort.",
            },
            {
              title: "Implementation",
              text: "We ship the fixes ourselves where you prefer, then re-test each item.",
            },
            {
              title: "Verification",
              text: "Post-fix crawl, Search Console monitoring and a written confirmation of what changed.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does a technical SEO audit take?",
      answer:
        "A standard audit is delivered within five working days. Enterprise sites with log-file analysis and multiple templates take up to ten working days.",
    },
    {
      question: "Do you implement fixes or only recommend them?",
      answer:
        "Both. Many clients hand the prioritised backlog to their own developers; others ask us to implement directly. We are comfortable working in WordPress, Shopify and custom stacks.",
    },
    {
      question: "What are Core Web Vitals and do they still matter?",
      answer:
        "Core Web Vitals measure loading (LCP), responsiveness (INP) and visual stability (CLS). They are a real but modest ranking factor, and a large conversion factor — slow mobile pages lose revenue regardless of rankings.",
    },
    {
      question: "Will technical SEO alone increase my traffic?",
      answer:
        "Technical SEO removes constraints; content and authority create growth. When a site has serious crawl, index or rendering issues, fixing them can produce immediate gains. On a technically healthy site, the returns come from content and links instead.",
    },
    {
      question: "How do you handle JavaScript-heavy websites?",
      answer:
        "We test rendered versus raw HTML, identify content that only appears after hydration, and recommend server-side rendering, static generation or prerendering for critical pages so both Google and AI crawlers see complete content.",
    },
    {
      question: "What schema markup should my site have?",
      answer:
        "At minimum Organization and WebSite sitewide, Service on service pages, Article on posts, FAQPage where you answer questions, LocalBusiness for physical locations and BreadcrumbList on deep pages. We map schema per template rather than page by page.",
    },
    {
      question: "How often should a technical audit be repeated?",
      answer:
        "A full audit annually, with quarterly health checks. Any time you migrate platforms, redesign or change URL structure, run an audit before and after launch.",
    },
    {
      question: "Can technical SEO recover a traffic drop?",
      answer:
        "Often yes, when the drop came from an accidental noindex, a broken migration, canonical errors or a server performance regression. We start by matching the drop date against deployments, Search Console coverage and algorithm updates.",
    },
    {
      question: "Do you do site migrations?",
      answer:
        "Yes. We plan URL mapping, redirect rules, schema parity and staging QA, then monitor coverage and rankings daily for the first four weeks after launch.",
    },
    {
      question: "Does technical SEO affect AI visibility?",
      answer:
        "Significantly. Most AI crawlers do not render JavaScript and rely heavily on structured data and clean semantics, so a technically sound site is a precondition for being cited in AI answers.",
    },
  ],
};

export const geoTargetingSeo: PageContent = {
  slug: "/seo-services/geo-targeting-seo",
  title: "Multi Location SEO for Growing Brands | AVR Web Consulting",
  h1: "GEO targeting SEO for city-level search dominance",
  description:
    "Help every branch rank in its own city. Our multi location SEO covers location pages, local listings and city-level keywords. Talk to AVR Web Consulting.",
  keywords: "multi location seo",
  eyebrow: "SEO Services",
  serviceName: "GEO Targeting SEO",
  answer:
    "GEO targeting SEO wins searches that include a place name, such as 'SEO agency Delhi' or 'web design Bangalore'. AVR Web Consulting builds unique city landing pages with local proof, geo schema and city-specific links so each metro ranks independently rather than competing with itself.",
  hero: {
    image: "/images/glowing-ai-brain.webp",
    imageAlt: "GEO Targeting SEO for Indian Metro Cities | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Cities covered", value: "8 metros" },
    { label: "Page build", value: "5–7 days" },
    { label: "Includes", value: "Geo schema" },
    { label: "Also serves", value: "US · UK · UAE" },
  ],
  breadcrumb: [...base, crumb("GEO Targeting SEO", "/seo-services/geo-targeting-seo")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO SEO for AI engines", to: "/ai-seo/geo-seo" },
    { label: "Locations we serve", to: "/locations" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for GEO Targeting SEO for Indian Metro Cities",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what",
      heading: "What GEO targeting means in search",
      blocks: [
        {
          kind: "paragraph",
          text: "GEO targeting is optimisation for queries that carry an explicit location. These queries convert far better than generic ones because the searcher has already decided where they want the service delivered. In Indian metros, 'service + city' searches often account for the majority of commercial volume in a category.",
        },
        {
          kind: "callout",
          title: "Two meanings of GEO",
          text: "In classic SEO, GEO means geographic targeting. In AI search, GEO also stands for Generative Engine Optimisation. We run both — see our GEO SEO page for the generative side.",
        },
      ],
    },
    {
      id: "pages",
      heading: "How we build city pages that actually rank",
      blocks: [
        {
          kind: "list",
          items: [
            "A unique 40–60 word answer paragraph naming the city and service",
            "Locally researched keywords, including regional-language transliterations where relevant",
            "Genuine local proof: clients served, neighbourhoods covered, delivery timelines",
            "City-specific FAQs with FAQPage schema — ten per page",
            "LocalBusiness or Service schema with correct coordinates and area served",
            "Internal links from the national service hub and related city pages",
            "City-relevant links: local media, business associations, regional directories",
          ],
        },
        {
          kind: "paragraph",
          text: "The failure mode is templating: replacing the city name in an identical block of text. Search engines cluster those pages as duplicates and rank none of them. Every page we produce has a different first paragraph, different proof and different questions.",
        },
      ],
    },
    {
      id: "coverage",
      heading: "Cities and markets we cover",
      blocks: [
        {
          kind: "table",
          head: ["Market", "Cities", "Typical competition"],
          rows: [
            ["India — tier 1", "Delhi, Mumbai, Bangalore, Hyderabad, Chennai", "High"],
            ["India — tier 2", "Pune, Kolkata, Visakhapatnam", "Medium"],
            ["Gulf", "Dubai, Abu Dhabi, Sharjah", "High"],
            ["Western", "London, New York, Manchester, Berlin", "Very high"],
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is GEO targeting in SEO?",
      answer:
        "GEO targeting is optimising pages for searches that include a location, such as 'SEO services Hyderabad'. It combines city-specific content, geographic schema and locally relevant links so the page ranks in and for that place.",
    },
    {
      question: "How is GEO targeting different from local SEO?",
      answer:
        "Local SEO focuses on map pack visibility around a physical location and relies heavily on Google Business Profile. GEO targeting is about organic pages ranking for location keywords, which works even in cities where you have no office.",
    },
    {
      question: "Can I rank in a city where I have no office?",
      answer:
        "Yes, in organic results. You can build a service-area page for that city with genuine local content and links. You cannot legitimately appear in the map pack there without a verified address in that city.",
    },
    {
      question: "How many city pages should I create?",
      answer:
        "Only as many as you can make genuinely different and genuinely serve. Ten strong city pages outperform a hundred templated ones, which risk being classified as doorway pages.",
    },
    {
      question: "Do city pages count as doorway pages?",
      answer:
        "They do if they offer no unique value. Pages with distinct copy, real local proof, unique FAQs and clear service information are legitimate and rank well.",
    },
    {
      question: "How long do city pages take to rank?",
      answer:
        "Tier-2 city pages often rank within 6–10 weeks. Tier-1 metros with entrenched competitors typically need four to six months of supporting links and content.",
    },
    {
      question: "Do you handle regional languages?",
      answer:
        "We handle English plus transliterated regional terms that people actually search, and can arrange native-language content for Hindi, Telugu and Tamil where the demand justifies it.",
    },
    {
      question: "What schema do city pages need?",
      answer:
        "Service or LocalBusiness schema with areaServed and geo coordinates, plus BreadcrumbList and FAQPage. This combination is also what AI engines use when answering location-based questions.",
    },
    {
      question: "Can GEO targeting work internationally?",
      answer:
        "Yes. The same approach applies to Dubai, London or New York, with the addition of hreflang and currency localisation when multiple countries are in play.",
    },
    {
      question: "How do you measure GEO targeting success?",
      answer:
        "We track rankings by city keyword group, organic sessions and conversions filtered by landing page, and grid-based local rank where a Google Business Profile exists in that city.",
    },
  ],
};

export const localCitationsGmb: PageContent = {
  slug: "/seo-services/local-citations-gmb",
  title: "Google My Business SEO Services | AVR Web Consulting",
  h1: "Local citations and GMB optimisation, delivered in three days",
  description:
    "Set up and optimize your Google My Business profile so local searchers can find, call and visit you. See how AVR Web Consulting can help your listing.",
  keywords: "google my business and seo, google my business seo services",
  eyebrow: "SEO Services",
  serviceName: "Local Citations and GMB Optimisation",
  answer:
    "Local citations are consistent listings of your business name, address and phone number across directories. AVR Web Consulting builds 30–60 manual citations within three days, cleans conflicting listings, and fully optimises your Google Business Profile for categories, services, posts and reviews.",
  hero: {
    image: "/images/online-learning-video-call.webp",
    imageAlt: "Local Citations & Google Business Profile Optimisation | AVR illustration",
  },
  highlights: [
    { label: "Turnaround", value: "3 days" },
    { label: "Placement", value: "100% manual" },
    { label: "Report", value: "Live URLs" },
    { label: "Cleanup", value: "Included" },
  ],
  breadcrumb: [...base, crumb("Local Citations & GMB", "/seo-services/local-citations-gmb")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Pricing", to: "/pricing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Local Citations & Google Business Profile Optimisation",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "why",
      heading: "Why citations still matter",
      blocks: [
        {
          kind: "paragraph",
          text: "Citations are the verification layer of local search. When your name, address and phone number appear identically across dozens of trusted sources, search engines and AI assistants gain confidence that the business exists as described. When those details conflict, confidence drops and so do rankings.",
        },
        {
          kind: "list",
          title: "Where we list you",
          items: [
            "Global directories: Google, Bing Places, Apple Business Connect, Yelp, Foursquare",
            "Indian directories: JustDial, Sulekha, IndiaMART, TradeIndia and regional portals",
            "Industry directories relevant to your vertical",
            "Data aggregators that feed dozens of downstream listings",
          ],
        },
      ],
    },
    {
      id: "gmb",
      heading: "Google Business Profile optimisation checklist",
      blocks: [
        {
          kind: "list",
          items: [
            "Primary and secondary category selection based on competitor analysis",
            "Complete service list with individual descriptions",
            "Keyword-informed business description within Google's guidelines",
            "Product and service photos, geo-tagged, refreshed monthly",
            "Weekly Google posts: offers, updates and event announcements",
            "Q&A seeding and moderation",
            "Review response templates and reputation monitoring",
            "Booking, messaging and UTM-tagged website links",
          ],
        },
      ],
    },
    {
      id: "cleanup",
      heading: "Duplicate and conflict cleanup",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Discovery",
              text: "We scan directories and aggregators for every version of your listing, including old addresses and closed profiles.",
            },
            {
              title: "Decision",
              text: "We agree one canonical NAP format with you — exact spelling, suite formatting and phone number.",
            },
            {
              title: "Correction",
              text: "Duplicates are claimed and merged or suppressed; incorrect data is edited at the source.",
            },
            {
              title: "Verification",
              text: "You receive a spreadsheet of every listing with its live URL and current status.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How many citations does my business need?",
      answer:
        "Most single-location businesses need 30–60 quality citations. Beyond that, accuracy matters far more than volume — one conflicting listing can do more damage than ten extra directories add value.",
    },
    {
      question: "How fast are citations delivered?",
      answer:
        "Standard packages of 30 manual citations are delivered within three working days, with a report of live URLs and login details for each submission.",
    },
    {
      question: "Are the citations manual or automated?",
      answer:
        "Every citation is created manually by a team member. We do not use automated submission tools, which frequently produce broken or duplicate listings that later require cleanup.",
    },
    {
      question: "What happens if my address changes?",
      answer:
        "We run a full NAP update across every listing we control, prioritising Google, Bing, Apple and the aggregators that feed other directories, then verify each change.",
    },
    {
      question: "Do citations help if I have no physical storefront?",
      answer:
        "Yes. Service-area businesses still benefit from consistent listings; we simply hide the street address where the directory allows and emphasise the service radius.",
    },
    {
      question: "Can you fix a suspended Google Business Profile?",
      answer:
        "We can prepare and submit a reinstatement request with supporting documentation, and correct the underlying issue — most often address mismatch, keyword stuffing in the name or ineligible virtual offices.",
    },
    {
      question: "Do you manage multi-location businesses?",
      answer:
        "Yes. We manage bulk uploads, per-location profiles, location-specific posts and reporting, with 30 citations per location as standard.",
    },
    {
      question: "Will citations alone put me in the map pack?",
      answer:
        "Citations remove a barrier rather than guarantee a position. Combined with a fully optimised profile, review velocity, local content and proximity, they are one of the fastest levers available.",
    },
    {
      question: "Do AI assistants use citation data?",
      answer:
        "Yes. Assistants frequently synthesise directory and review data when answering local questions, so consistent citations improve the odds of being named in an AI recommendation.",
    },
    {
      question: "What information do you need from me?",
      answer:
        "Exact business name, address, phone, website, hours, categories, service list, a short description, logo and a few photos. We handle everything else and share access details afterwards.",
    },
  ],
};

export const seoPages = [
  seoServicesHub,
  globalSeo,
  localSeo,
  technicalSeo,
  geoTargetingSeo,
  localCitationsGmb,
];
