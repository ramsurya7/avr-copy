import type { Faq, PageContent } from "@/content/types";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";

const images = [teamMeeting.url, seoConcept.url, entrepreneur.url, laptopWork.url];

type IndustrySeed = {
  slug: string;
  name: string;
  short: string;
  buyer: string;
  cycle: string;
  channels: string;
  intent: string[];
  challenges: string[];
  plays: { title: string; text: string }[];
  aiAngle: string;
  kpi: string[];
  schema: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
};

export const industrySeeds: IndustrySeed[] = [
  {
    slug: "startups",
    name: "Startups",
    short: "Category-creating startups that need demand before budget",
    buyer: "founders, growth leads and early adopters",
    cycle: "14–60 days",
    channels: "organic search, AI assistants, communities and founder-led content",
    intent: [
      '"best <category> tool 2026" comparison searches',
      '"alternative to <incumbent>" switching queries',
      "problem-aware questions typed into ChatGPT and Perplexity",
      "investor and hiring brand searches",
    ],
    challenges: [
      "Zero domain authority competing with funded incumbents",
      "Category language keeps changing as the product evolves",
      "Small teams cannot publish weekly without an editorial system",
      "AI assistants recommend established names by default",
    ],
    plays: [
      {
        title: "Own the comparison layer",
        text: "Build alternative, vs and best-of pages with honest comparison tables — the exact format LLMs quote when a user asks for recommendations.",
      },
      {
        title: "Ship an entity foundation",
        text: "Consistent Organization schema, founder Person markup, Crunchbase/LinkedIn/G2 parity so AI engines resolve one confident entity for the brand.",
      },
      {
        title: "Answer-first documentation",
        text: "Turn docs and support tickets into indexable question pages that both Google and retrieval systems can extract.",
      },
      {
        title: "Low-competition long tail first",
        text: "Rank on specific, high-intent queries within 60–90 days instead of burning a year on a head term.",
      },
    ],
    aiAngle:
      "For a startup, being cited by ChatGPT or Perplexity is often cheaper than ranking #1 on Google — there is far less competition for structured, verifiable answers than for authority-driven blue links.",
    kpi: [
      "Share of AI answers mentioning the brand",
      "Branded search volume growth",
      "Demo requests from organic and AI referrals",
      "Comparison-page conversion rate",
    ],
    schema: "SoftwareApplication + Organization + FAQPage",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    metaTitle: "Ecommerce SEO Services for Online Stores | AVR Web",
    metaDescription:
      "Grow organic traffic to your online store with ecommerce SEO: product and category page optimization, technical fixes and content. Get a free audit.",
    keywords:
      "e commerce seo services, ecommerce seo companies, seo for ecommerce site, ecommerce seo consultant, best ecommerce seo company, e commerce seo agency, best ecommerce seo, seo services for ecommerce websites",
    short: "Online stores fighting marketplaces for product demand",
    buyer: "shoppers comparing price, delivery and reviews",
    cycle: "1–14 days",
    channels: "organic product and category search, Shopping, AI shopping answers",
    intent: [
      'category and "buy <product> online" queries',
      '"best <product> under <price>" listicle intent',
      "brand + size / colour / spec variants",
      "AI assistants asked to shortlist products",
    ],
    challenges: [
      "Thin, duplicated product descriptions across thousands of SKUs",
      "Faceted navigation creating crawl traps and index bloat",
      "Marketplaces outranking the brand for its own products",
      "Reviews and stock data not exposed as structured data",
    ],
    plays: [
      {
        title: "Category pages as buying guides",
        text: "Every category gets original guidance, spec tables and FAQs so it can rank and be extracted, not just list products.",
      },
      {
        title: "Product schema at scale",
        text: "Product, Offer, AggregateRating and shipping details emitted programmatically so both Google and AI shopping surfaces read live data.",
      },
      {
        title: "Crawl budget control",
        text: "Facet rules, canonicals and pagination handling so crawlers spend their time on pages that convert.",
      },
      {
        title: "Review and UGC harvesting",
        text: "Structured review content feeds the exact evidence AI answers look for before recommending a store.",
      },
    ],
    aiAngle:
      "AI shopping assistants compare specs, price and return policy. Stores that publish that data in machine-readable form get shortlisted; stores that hide it in images do not.",
    kpi: [
      "Non-brand organic revenue",
      "Category page rankings and CTR",
      "Product rich-result coverage",
      "AI assistant product mentions",
    ],
    schema: "Product + Offer + AggregateRating + BreadcrumbList",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "Medical SEO Services for Practices | AVR Web Consulting",
    metaDescription:
      "SEO for medical practices and clinics: improve your website, local listings and Google profile so patients can find the care they need. Get a free audit.",
    keywords: "medical seo services",
    short: "Clinics, hospitals and health brands under YMYL scrutiny",
    buyer: "patients, caregivers and referring practitioners",
    cycle: "same day to 30 days",
    channels: "local search, Google Business Profile, symptom-led organic search",
    intent: [
      '"<specialty> near me" and "best <specialist> in <city>"',
      "symptom, treatment and cost questions",
      "insurance and appointment logistics",
      "doctor name and credential searches",
    ],
    challenges: [
      "YMYL standards demand verifiable expertise on every page",
      "Multi-location listings drift out of sync",
      "Medical claims must stay compliant while still being findable",
      "AI engines are conservative about citing unverified health sources",
    ],
    plays: [
      {
        title: "Author and reviewer bylines",
        text: "Physician Person schema, credentials and review dates on every clinical page — the strongest E-E-A-T signal in healthcare.",
      },
      {
        title: "Location + service matrix",
        text: "A page per service per location with genuinely local detail, LocalBusiness and MedicalClinic schema, and synced NAP.",
      },
      {
        title: "Patient question libraries",
        text: "Deep FAQ coverage of symptoms, preparation, cost and recovery — the queries patients actually ask AI assistants at 2am.",
      },
      {
        title: "Review velocity systems",
        text: "Ethical review generation that lifts map-pack rank and gives AI engines the trust signals they weight heavily.",
      },
    ],
    aiAngle:
      "Health answers are held to a higher citation bar. Sites with named, credentialed authors and structured medical markup are the ones AI systems are willing to quote.",
    kpi: [
      "Map-pack rankings by service and location",
      "Appointment form and call conversions",
      "Review count and average rating",
      "Featured snippet and AI Overview coverage",
    ],
    schema: "MedicalClinic + Physician + FAQPage + LocalBusiness",
  },
  {
    slug: "fashion-retail",
    name: "Fashion & Retail",
    short: "Apparel and lifestyle brands in a trend-driven SERP",
    buyer: "style-led shoppers researching across social and search",
    cycle: "1–21 days",
    channels: "visual search, organic, social commerce, AI style recommendations",
    intent: [
      "trend and occasion queries",
      "fabric, fit and size guidance",
      "brand vs brand comparisons",
      "seasonal collection searches",
    ],
    challenges: [
      "Seasonal collections create and kill URLs every quarter",
      "Image-heavy pages with almost no crawlable text",
      "Size and fit questions handled by support rather than published",
      "Fierce marketplace competition on every product term",
    ],
    plays: [
      {
        title: "Evergreen collection architecture",
        text: "Permanent category URLs refreshed each season instead of new URLs that reset authority every drop.",
      },
      {
        title: "Fit and fabric content",
        text: "Publish the size, care and styling answers your support team repeats — high-intent, low-competition, quotable by AI.",
      },
      {
        title: "Image SEO discipline",
        text: "Descriptive alt text, compressed responsive images and ImageObject markup for visual and multimodal search.",
      },
      {
        title: "Lookbook to landing page",
        text: "Turn campaign visuals into indexable style guides that carry internal links to buyable categories.",
      },
    ],
    aiAngle:
      "Multimodal assistants read alt text, spec tables and styling guidance. Descriptive text around imagery is what makes a fashion catalogue legible to AI.",
    kpi: [
      "Non-brand category traffic",
      "Return rate reduction from better fit content",
      "Image search impressions",
      "Seasonal keyword capture speed",
    ],
    schema: "Product + ItemList + ImageObject",
  },
  {
    slug: "saas-tech",
    name: "SaaS & Tech",
    metaTitle: "SEO for Tech and IT Companies | AVR Web Consulting",
    metaDescription:
      "Reach buyers searching for technology and IT services. We improve site structure, content and technical SEO for tech and IT companies. Get a free audit.",
    keywords: "seo for tech companies, seo for it companies",
    short: "Software companies competing on product-led search",
    buyer: "practitioners, technical evaluators and procurement",
    cycle: "30–180 days",
    channels: "organic, documentation, review sites, AI assistants",
    intent: [
      'jobs-to-be-done and "how to <task>" queries',
      "integration and API questions",
      "pricing and security due diligence",
      "competitor comparison and migration searches",
    ],
    challenges: [
      "Docs and marketing site fight each other for the same keywords",
      "Feature pages read like release notes, not answers",
      "Long sales cycles hide the SEO contribution in attribution",
      "G2 and listicles outrank the vendor's own comparison pages",
    ],
    plays: [
      {
        title: "Use-case page system",
        text: "One page per job-to-be-done with a workflow, screenshots, schema and an outcome-focused CTA.",
      },
      {
        title: "Docs as an SEO asset",
        text: "Make documentation indexable, question-headed and internally linked so it earns rankings and AI citations.",
      },
      {
        title: "Comparison ownership",
        text: "Fair, factual vs pages with tables — the format LLMs reuse verbatim when asked to compare vendors.",
      },
      {
        title: "Trust page structure",
        text: "Security, uptime and compliance pages marked up so procurement and AI research both find the answers fast.",
      },
    ],
    aiAngle:
      "Technical buyers now start in ChatGPT. LLMO for SaaS means publishing precise, structured, verifiable capability data that a model can restate without hallucinating.",
    kpi: [
      "Pipeline sourced from organic and AI referrals",
      "Use-case page rankings",
      "Share of voice on comparison queries",
      "AI answer citation frequency",
    ],
    schema: "SoftwareApplication + FAQPage + HowTo",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    metaTitle: "Real Estate SEO Services for Agents | AVR Web Consulting",
    metaDescription:
      "Get your real estate website in front of local buyers and sellers. Our SEO covers listings pages, local search and content. Request a free audit today.",
    keywords:
      "real estate seo services, seo for real estate, seo for real estate agents, real estate seo company, real estate seo expert, seo for estate agents",
    short: "Developers, brokerages and property portals in hyper-local SERPs",
    buyer: "buyers, tenants, investors and NRI purchasers",
    cycle: "30–270 days",
    channels: "local organic, map pack, portal listings, AI locality research",
    intent: [
      '"flats for sale in <locality>" and price-per-sqft queries',
      "project name and builder reputation searches",
      "investment and rental-yield research",
      "NRI purchase and legal process questions",
    ],
    challenges: [
      "Portals dominate every generic property keyword",
      "Listing pages expire and leave dead URLs at scale",
      "Locality content is copied across competitors",
      "Trust questions decide the lead, not the listing",
    ],
    plays: [
      {
        title: "Locality authority hubs",
        text: "Deep, genuinely local guides with prices, connectivity, schools and yield data that portals cannot match at that depth.",
      },
      {
        title: "Listing lifecycle SEO",
        text: "Rules for sold and expired listings — redirect, retain or refresh — so authority is never thrown away.",
      },
      {
        title: "Process content for high-intent leads",
        text: "Stamp duty, loan, NRI and documentation guides that capture serious buyers earlier than listing pages do.",
      },
      {
        title: "Map-pack and review engine",
        text: "GBP optimisation per office plus review velocity to win the local pack for brokerage searches.",
      },
    ],
    aiAngle:
      "When buyers ask AI about a locality, models reach for structured, data-rich local pages. Publishing tables of prices and amenities makes you the retrievable source.",
    kpi: [
      "Qualified site-visit enquiries",
      "Locality keyword coverage",
      "Map-pack visibility per office",
      "Cost per lead vs portal spend",
    ],
    schema: "RealEstateListing + Place + LocalBusiness",
  },
  {
    slug: "education",
    name: "Education",
    short: "Institutes, edtech and coaching brands with seasonal demand",
    buyer: "students, parents and working professionals",
    cycle: "7–120 days",
    channels: "organic search, YouTube, AI study assistants",
    intent: [
      "course, syllabus and eligibility queries",
      '"best <course> in <city>" comparisons',
      "fees, placement and scholarship questions",
      "exam preparation and result timelines",
    ],
    challenges: [
      "Admission demand spikes for a few weeks each cycle",
      "Course pages read like brochures instead of answers",
      "Students increasingly ask AI assistants instead of searching",
      "Placement claims need evidence to be credible",
    ],
    plays: [
      {
        title: "Course pages as decision documents",
        text: "Syllabus tables, eligibility, fees, duration and outcomes on the page — structured, comparable, quotable.",
      },
      {
        title: "Admission-cycle calendar",
        text: "Content published and refreshed ahead of each intake so pages are already ranking when demand peaks.",
      },
      {
        title: "Career-outcome content",
        text: "Salary, role and progression data that answers the real question behind every course search.",
      },
      {
        title: "Course schema everywhere",
        text: "Course and EducationalOccupationalProgram markup so listings appear in rich results and AI course comparisons.",
      },
    ],
    aiAngle:
      "Students ask AI to compare programmes. Institutes publishing complete, structured programme data get summarised accurately; the rest get skipped or misquoted.",
    kpi: [
      "Application and enquiry volume",
      "Course keyword rankings by intake",
      "Organic share of admissions",
      "Rich-result coverage for courses",
    ],
    schema: "Course + EducationalOrganization + FAQPage",
  },
  {
    slug: "travel",
    name: "Travel & Hospitality",
    short: "Hotels, tour operators and DMCs rebuilding direct demand",
    buyer: "leisure and business travellers planning itineraries",
    cycle: "3–90 days",
    channels: "organic, map pack, OTA parity, AI trip planning",
    intent: [
      "destination and itinerary planning queries",
      '"best time to visit" and cost questions',
      "hotel and package comparisons",
      "visa, transport and logistics research",
    ],
    challenges: [
      "OTAs outrank operators for their own inventory",
      "Seasonality swings traffic and revenue hard",
      "Itinerary content is duplicated across the industry",
      "AI trip planners now replace the first research session",
    ],
    plays: [
      {
        title: "Destination content clusters",
        text: "Original, first-hand itineraries, cost tables and seasonal guides that OTAs cannot replicate.",
      },
      {
        title: "Direct-booking conversion path",
        text: "Rate parity messaging, structured offers and fast booking flows on the pages that rank.",
      },
      {
        title: "Local pack for every property",
        text: "GBP, review velocity and location schema per hotel or office to win map visibility.",
      },
      {
        title: "AI itinerary readiness",
        text: "Machine-readable day plans, prices and inclusions so AI planners cite and link you as the source.",
      },
    ],
    aiAngle:
      "AI trip planners assemble itineraries from structured, specific sources. Publishing real day-by-day detail with prices makes your content the raw material.",
    kpi: [
      "Direct bookings from organic",
      "Destination cluster rankings",
      "Map-pack visibility per property",
      "AI planner citations",
    ],
    schema: "Hotel + TouristTrip + Offer",
  },
  {
    slug: "legal",
    name: "Legal Services",
    metaTitle: "SEO for Lawyers and Law Firms | AVR Web Consulting",
    metaDescription:
      "SEO services for lawyers who want more local clients searching for legal help. Content, on-page work and local SEO built around law firms. Get a free audit.",
    keywords:
      "seo for lawyers, seo services for lawyers, attorney seo services, best seo for lawyers, best seo company for lawyers",
    short: "Law firms competing on high-value, high-scrutiny queries",
    buyer: "individuals and businesses with an urgent legal problem",
    cycle: "1–45 days",
    channels: "local organic, map pack, AI legal research",
    intent: [
      '"<practice area> lawyer in <city>"',
      "process, timeline and cost questions",
      "rights and eligibility research",
      "document and filing requirements",
    ],
    challenges: [
      "Extreme competition and cost per click in legal markets",
      "YMYL scrutiny on every claim published",
      "Practice-area pages that say nothing specific",
      "Reviews and citations inconsistent across directories",
    ],
    plays: [
      {
        title: "Practice-area depth",
        text: "Each practice area gets process steps, timelines, fee ranges and jurisdiction detail — not a paragraph of adjectives.",
      },
      {
        title: "Attorney entity building",
        text: "Person schema, bar credentials, publications and speaking history so expertise is machine-verifiable.",
      },
      {
        title: "Question-led long tail",
        text: "Hundreds of specific legal questions answered plainly, capturing intent before competitors' service pages do.",
      },
      {
        title: "Local citation cleanup",
        text: "Consistent NAP across legal directories to stabilise map-pack position for every office.",
      },
    ],
    aiAngle:
      "Legal answers require citation-grade sourcing. Firms that publish jurisdiction-specific, dated, authored content are the ones AI systems reference.",
    kpi: [
      "Qualified consultation requests",
      "Practice-area keyword rankings",
      "Map-pack position per office",
      "Cost per case vs paid search",
    ],
    schema: "LegalService + Attorney + FAQPage",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    short: "B2B manufacturers and exporters selling to technical buyers",
    buyer: "procurement teams, engineers and distributors",
    cycle: "30–365 days",
    channels: "organic technical search, trade portals, AI sourcing research",
    intent: [
      "specification and material grade searches",
      '"<product> manufacturer in India / supplier" queries',
      "MOQ, certification and export questions",
      "application and compatibility research",
    ],
    challenges: [
      "Product catalogues locked inside PDFs",
      "Sites built for brochures, not for search",
      "Trade portals intercepting enquiries",
      "Technical buyers need specs the site never publishes",
    ],
    plays: [
      {
        title: "Spec pages out of PDFs",
        text: "Every grade, size and variant gets an indexable page with a specification table — instantly quotable by search and AI.",
      },
      {
        title: "Application-led content",
        text: "Pages organised by industry application, the way procurement actually searches.",
      },
      {
        title: "Certification and compliance hub",
        text: "ISO, export and test certificates published as structured, crawlable proof.",
      },
      {
        title: "Export geography targeting",
        text: "Country-level pages for USA, UK, UAE and Europe buyers with logistics and compliance specifics.",
      },
    ],
    aiAngle:
      "AI sourcing tools shortlist suppliers from structured specification data. A PDF-only catalogue is invisible; an HTML spec table is a citation.",
    kpi: [
      "RFQ volume from organic",
      "Spec page indexation and rankings",
      "Export-country traffic growth",
      "Enquiry quality vs trade portals",
    ],
    schema: "Product + Organization + FAQPage",
  },
];

function industryFaqs(s: IndustrySeed): Faq[] {
  return [
    {
      question: `Do you have experience with ${s.name.toLowerCase()} SEO?`,
      answer: `Yes. AVR Web Consulting has run SEO and AI visibility programmes for ${s.name.toLowerCase()} businesses across India, the USA, UK, UAE and Europe. We work to ${s.buyer} search behaviour and a typical ${s.cycle} decision cycle rather than applying a generic checklist.`,
    },
    {
      question: `How long does ${s.name.toLowerCase()} SEO take to show results?`,
      answer: `Technical and on-page fixes usually move impressions within 3–6 weeks. Meaningful ranking and enquiry growth typically lands in months 3–6, with compounding gains after that. Sites with existing authority move faster than new domains.`,
    },
    {
      question: `What does ${s.name.toLowerCase()} SEO cost at AVR Web Consulting?`,
      answer: `Programmes start at $100/month for focused local or single-service work and scale with content volume, number of locations and competition. We quote after an initial audit so the scope matches the opportunity, not a template.`,
    },
    {
      question: `Which keywords matter most for ${s.name.toLowerCase()}?`,
      answer: `The highest-value clusters are ${s.intent.slice(0, 3).join("; ")}. We prioritise commercial intent first, then supporting informational content that feeds both search rankings and AI answers.`,
    },
    {
      question: `How do you get ${s.name.toLowerCase()} brands mentioned by ChatGPT and Perplexity?`,
      answer: s.aiAngle,
    },
    {
      question: `What structured data do you implement for ${s.name.toLowerCase()}?`,
      answer: `We deploy ${s.schema} alongside sitewide Organization and BreadcrumbList markup, validated against Google's Rich Results Test and kept in sync as content changes.`,
    },
    {
      question: `Do you also handle paid ads for ${s.name.toLowerCase()} clients?`,
      answer: `Yes. Google Ads and social advertising run alongside SEO so you have demand today while organic and AI visibility compound. Many clients start with paid for speed and shift budget to organic as rankings mature.`,
    },
    {
      question: `Which KPIs do you report for ${s.name.toLowerCase()}?`,
      answer: `We report ${s.kpi.join(", ").toLowerCase()} — plus AI visibility tracking that shows how often your brand appears in ChatGPT, Gemini, Perplexity and Google AI Overviews.`,
    },
    {
      question: `Is the work manual and safe for ${s.name.toLowerCase()} sites?`,
      answer: `Every link, citation and content asset is produced manually. We use no PBNs, no automated link tools and no AI-spun content — critical in a sector where ${(s.challenges[0] ?? "trust matters").toLowerCase()}.`,
    },
    {
      question: `Can you work with our existing ${s.name.toLowerCase()} website?`,
      answer: `Yes. We audit and improve what you have first — most sites gain more from fixing crawlability, structure and content depth than from a rebuild. If a rebuild genuinely pays back, our web team can handle it.`,
    },
  ];
}

function industryPage(s: IndustrySeed, index: number): PageContent {
  return {
    slug: `/industries/${s.slug}`,
    title: s.metaTitle ?? `${s.name} SEO & AI Visibility Services | AVR Web Consulting`,
    h1: `SEO and AI visibility for ${s.name.toLowerCase()} businesses`,
    description:
      s.metaDescription ??
      `Specialist SEO, AEO and AI search optimisation for ${s.name.toLowerCase()} brands. ${s.short}. Manual, affordable work from AVR Web Consulting — India and global.`,
    keywords: s.keywords,
    eyebrow: "Industries",
    serviceName: `${s.name} SEO Services`,
    answer: `AVR Web Consulting runs SEO and AI visibility programmes for ${s.name.toLowerCase()} businesses, targeting ${s.buyer} across ${s.channels}. We combine technical SEO, answer-first content and structured data (${s.schema}) so you rank on Google and get cited by ChatGPT, Gemini, Perplexity and AI Overviews.`,
    hero: {
      image: images[index % images.length] ?? teamMeeting.url,
      imageAlt: `${s.name} team reviewing digital marketing performance`,
    },
    highlights: [
      { label: "Buying cycle", value: s.cycle },
      { label: "Programmes from", value: "$100/mo" },
      { label: "Core schema", value: s.schema.split(" + ")[0] ?? "Schema" },
      { label: "Markets", value: "India + global" },
    ],
    breadcrumb: [
      { label: "Home", to: "/" },
      { label: "Industries", to: "/industries" },
      { label: s.name, to: `/industries/${s.slug}` },
    ],
    related: [
      { label: "All industries", to: "/industries" },
      { label: "AI SEO services", to: "/ai-seo" },
      { label: "SEO services", to: "/seo-services" },
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
              "Expert strategies tailored for Own the comparison layer",
              "Data-driven approach without relying on guesswork",
              "Focus on sustainable, long-term search visibility",
              "Fully aligned with modern Answer Engine and AI search requirements",
            ],
          },
        ],
      },
      {
        id: "search-behaviour",
        heading: `How ${s.name.toLowerCase()} buyers actually search in 2026`,
        blocks: [
          {
            kind: "paragraph",
            text: `${s.short}. The audience is ${s.buyer}, and discovery now spans ${s.channels}. A typical decision takes ${s.cycle}, which means visibility has to be maintained across the whole journey — not just on the final commercial keyword.`,
          },
          {
            kind: "list",
            title: "Highest-value intent clusters",
            items: s.intent,
          },
          {
            kind: "callout",
            title: "The AI shift in this sector",
            text: s.aiAngle,
          },
        ],
      },
      {
        id: "challenges",
        heading: `What holds ${s.name.toLowerCase()} websites back`,
        blocks: [
          {
            kind: "list",
            title: "Common blockers we find in audits",
            items: s.challenges,
          },
          {
            kind: "paragraph",
            text: "Our audit quantifies each of these against revenue impact, so the roadmap starts with the fixes that move enquiries fastest rather than the ones that are easiest to tick off.",
          },
        ],
      },
      {
        id: "playbook",
        heading: `The AVR ${s.name.toLowerCase()} growth playbook`,
        blocks: [
          { kind: "steps", title: "Four plays we run in order", items: s.plays },
          {
            kind: "table",
            title: "Programme phases and outcomes",
            head: ["Phase", "Focus", "Typical timeline", "Outcome"],
            rows: [
              [
                "1. Audit",
                "Technical, content and AI visibility baseline",
                "Week 1–2",
                "Prioritised roadmap",
              ],
              [
                "2. Foundation",
                "Crawl, speed, schema, information architecture",
                "Week 2–6",
                "Indexation and rich results",
              ],
              [
                "3. Content",
                "Answer-first pages for the intent clusters above",
                "Month 2–5",
                "Ranking and citation growth",
              ],
              [
                "4. Authority",
                "Manual links, citations, digital PR",
                "Month 3–12",
                "Durable competitive position",
              ],
            ],
          },
        ],
      },
      {
        id: "measurement",
        heading: "How we measure success",
        blocks: [
          { kind: "list", title: "Reported every month", items: s.kpi },
          {
            kind: "paragraph",
            text: "Reporting ties rankings and AI mentions to enquiries and revenue. You get a live dashboard, a monthly written review and a call to agree the next sprint — no vanity metrics.",
          },
        ],
      },
    ],
    faqs: industryFaqs(s),
  };
}

export const industryPages: PageContent[] = industrySeeds.map(industryPage);

export const industryPageBySlug: Record<string, PageContent> = Object.fromEntries(
  industryPages.map((p) => [p.slug.split("/").pop() as string, p]),
);

export const industriesHub: PageContent = {
  slug: "/industries",
  title: "Industries We Serve — SEO & AI Visibility by Sector | AVR Web Consulting",
  h1: "Industry-specific SEO and AI visibility programmes",
  description:
    "AVR Web Consulting runs sector-specific SEO, AEO and AI search programmes for startups, e-commerce, healthcare, SaaS, real estate, education, travel, legal, fashion and manufacturing brands.",
  eyebrow: "Industries",
  serviceName: "Industry SEO Services",
  answer:
    "AVR Web Consulting serves ten core industries — startups, e-commerce, healthcare, fashion and retail, SaaS and tech, real estate, education, travel, legal and manufacturing. Each programme is built around that sector's buyer intent, decision cycle, compliance constraints and the structured data AI engines need to cite you.",
  hero: {
    image: "/images/industries-hero.webp",
    imageAlt:
      "Industries We Serve — SEO & AI Visibility by Sector | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Industries served", value: "10+" },
    { label: "Markets", value: "India + global" },
    { label: "Programmes", value: "Tailored" },
    { label: "Work", value: "100% manual" },
  ],
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Industries", to: "/industries" },
  ],
  related: industrySeeds.map((s) => ({ label: s.name, to: `/industries/${s.slug}` })),
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Industries We Serve — SEO & AI Visibility by Sector",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "why-sector",
      heading: "Why sector-specific SEO beats a generic retainer",
      blocks: [
        {
          kind: "paragraph",
          text: "Search intent, competition and trust requirements differ wildly by sector. A healthcare page needs credentialed authorship; an e-commerce category needs product schema at scale; a manufacturer needs specifications lifted out of PDFs. Running the same checklist across all three wastes budget.",
        },
        {
          kind: "table",
          title: "Sector at a glance",
          head: ["Industry", "Primary buyer", "Decision cycle", "Core schema"],
          rows: industrySeeds.map((s) => [s.name, s.buyer, s.cycle, s.schema]),
        },
      ],
    },
    {
      id: "common-layer",
      heading: "What every industry programme includes",
      blocks: [
        {
          kind: "list",
          title: "Baseline across all sectors",
          items: [
            "Full technical audit: crawl, index, Core Web Vitals, mobile UX",
            "Answer-first content architecture with one clear H1 and question-led H2s",
            "Structured data appropriate to the sector, validated and monitored",
            "AI visibility tracking across ChatGPT, Gemini, Perplexity and AI Overviews",
            "Manual link building and citation work — no PBNs or automation",
            "Monthly reporting tied to enquiries and revenue, not vanity metrics",
          ],
        },
      ],
    },
    {
      id: "choose",
      heading: "Choose your industry",
      blocks: [
        {
          kind: "list",
          title: "Dedicated industry pages",
          items: industrySeeds.map((s) => `${s.name} — ${s.short}`),
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Which industries does AVR Web Consulting specialise in?",
      answer:
        "Startups, e-commerce, healthcare, fashion and retail, SaaS and tech, real estate, education, travel and hospitality, legal services, and manufacturing and industrial exporters — with dedicated strategy pages for each.",
    },
    {
      question: "What if my industry is not listed?",
      answer:
        "We still work with you. The listed sectors are where we have the deepest playbooks, but our audit-first process adapts to any business with search or AI-assistant demand. Contact us for an assessment.",
    },
    {
      question: "Does industry experience actually matter in SEO?",
      answer:
        "Yes — mostly for speed and accuracy. Knowing the intent clusters, compliance limits and schema types for a sector removes months of discovery and avoids strategies that cannot be published in regulated industries.",
    },
    {
      question: "Do you work with competitors in the same city?",
      answer:
        "No. We take one client per industry per target city so we are never optimising two sites against each other for the same keywords.",
    },
    {
      question: "How is AI SEO different by industry?",
      answer:
        "The citation bar differs. Health, legal and finance require credentialed authorship and verifiable sources; e-commerce and SaaS require structured product and capability data. We tune the AEO and LLMO layer to each sector's evidence requirements.",
    },
    {
      question: "Can you handle multi-location businesses?",
      answer:
        "Yes. We build service-by-location page matrices with LocalBusiness schema, synced NAP and per-location Google Business Profile optimisation, from two locations to two hundred.",
    },
    {
      question: "What does an industry programme cost?",
      answer:
        "We provide tailored proposals for focused local or single-service scopes, scaling with content volume, locations and competitiveness. Every quote follows an initial audit so the scope matches the opportunity.",
    },
    {
      question: "How quickly do industry programmes show results?",
      answer:
        "Impressions typically move in 3–6 weeks after technical fixes. Rankings and enquiry growth generally become material in months 3–6, with authority-driven compounding after that.",
    },
    {
      question: "Do you provide content writing for regulated industries?",
      answer:
        "Yes. Human writers produce every page, with client-side review workflows for medical, legal and financial claims so nothing is published without approval.",
    },
    {
      question: "Can we start with one service before a full programme?",
      answer:
        "Absolutely. Many clients begin with a technical audit, a local SEO sprint or an AI visibility assessment, then expand once the first results land.",
    },
  ],
};
