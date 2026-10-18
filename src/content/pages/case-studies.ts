import type { PageContent } from "@/content/types";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";
import aiRetrieval from "@/assets/ai-retrieval.jpg.asset.json";

export type CaseStudySeed = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  service: string;
  image: string;
  summary: string;
  challenge: string[];
  actions: { title: string; text: string }[];
  results: { label: string; value: string }[];
  resultRows: string[][];
  timeline: string;
  quote: { text: string; author: string };
  takeaways: string[];
};

export const caseStudySeeds: CaseStudySeed[] = [
  {
    slug: "ecommerce-organic-revenue-growth",
    client: "D2C home & living store",
    industry: "E-commerce",
    location: "Mumbai, India",
    service: "Technical SEO + content + AI SEO",
    image: "/images/google-ads-for-seo.webp",
    summary:
      "A 2,400-SKU home décor store grew organic revenue 212% in nine months after we fixed crawl waste, rebuilt category content and made product data machine-readable for AI shopping answers.",
    challenge: [
      "68% of crawl budget was spent on faceted filter URLs that returned near-duplicate pages",
      "Category pages had 40 words of copy and no schema, so they lost to marketplaces",
      "Zero visibility in AI assistants for 'best budget X in India' style prompts",
      "Product titles duplicated across variants, splitting authority",
    ],
    actions: [
      {
        title: "Crawl control",
        text: "Canonicalised facet combinations, blocked 11,000 parameter URLs and rebuilt the XML sitemap by template so Google spent its budget on money pages.",
      },
      {
        title: "Category content system",
        text: "Wrote answer-first buying guides on the top 40 category pages — 600-900 words each with comparison tables, sizing guidance and FAQ blocks.",
      },
      {
        title: "Structured product data",
        text: "Added Product, Offer, AggregateRating and FAQPage schema across the catalogue so both Google and AI shopping assistants could parse price, stock and specs.",
      },
      {
        title: "Authority building",
        text: "Manual outreach placed 34 links from Indian home décor, interiors and lifestyle publications over seven months.",
      },
      {
        title: "AI answer targeting",
        text: "Built 18 comparison and 'best of' pages structured as extractable answers, then tracked citations weekly across ChatGPT, Gemini and Perplexity.",
      },
    ],
    results: [
      { label: "Organic revenue", value: "+212%" },
      { label: "Non-brand clicks", value: "+164%" },
      { label: "Indexed money pages", value: "+58%" },
      { label: "AI citations/month", value: "0 → 47" },
    ],
    resultRows: [
      ["Organic sessions", "38,400/mo", "94,700/mo", "+147%"],
      ["Organic revenue", "₹11.2L/mo", "₹34.9L/mo", "+212%"],
      ["Top-10 keywords", "212", "1,046", "+393%"],
      ["AI assistant citations", "0", "47/mo", "New channel"],
    ],
    timeline: "9 months",
    quote: {
      text: "We had spent two years buying traffic. AVR made the catalogue itself the traffic source, and now AI shopping assistants recommend us by name.",
      author: "Head of Growth, D2C home & living brand",
    },
    takeaways: [
      "Crawl waste is an invisible ceiling — resolving facet bloat before investing in new content is the highest-ROI move for large catalogues",
      "Category pages written as genuine buying guides outperform thin product-list pages even against well-funded marketplaces",
      "Product schema that publishes price, stock and ratings in machine-readable form is the entry ticket for AI shopping answer inclusion",
      "Sustained authority building through relevant editorial links compounds alongside content work to produce gains that paid spend alone cannot replicate",
    ],
  },
  {
    slug: "saas-ai-visibility-turnaround",
    client: "B2B workflow SaaS",
    industry: "SaaS",
    location: "Bengaluru, India / US market",
    service: "AI SEO (AEO, GEO, LLMO)",
    image: "/images/ai-cpu-board-contact.webp",
    summary:
      "A B2B SaaS platform went from zero AI assistant mentions to being cited in 61% of tracked buying prompts in six months, lifting assisted pipeline by 38%.",
    challenge: [
      "Competitors were named in ChatGPT and Perplexity answers; the client never was",
      "Documentation was gated, so no crawler could read the product's real capabilities",
      "Comparison and alternatives queries were owned by review aggregators",
      "No entity consistency — the brand name resolved to a different company on Wikidata",
    ],
    actions: [
      {
        title: "Entity foundation",
        text: "Cleaned up the brand's entity graph: consistent Organization schema, sameAs links, Crunchbase, LinkedIn and Wikidata alignment so AI models resolve the right company.",
      },
      {
        title: "Ungated retrieval surface",
        text: "Moved documentation and pricing out from behind logins, added llms.txt, and allowed GPTBot, ClaudeBot, PerplexityBot and Google-Extended.",
      },
      {
        title: "Answer-first comparisons",
        text: "Published 22 honest 'X vs Y' and 'alternatives to X' pages with specification tables, limitations sections and clear verdict paragraphs machines can lift.",
      },
      {
        title: "Citable evidence",
        text: "Released two original benchmark studies with methodology and downloadable data — the most-cited assets in the program.",
      },
      {
        title: "Prompt tracking",
        text: "Monitored 120 buyer prompts monthly across five assistants and iterated content where the brand was absent.",
      },
    ],
    results: [
      { label: "Prompt citation rate", value: "0% → 61%" },
      { label: "Assisted pipeline", value: "+38%" },
      { label: "Branded search", value: "+72%" },
      { label: "Demo requests", value: "+44%" },
    ],
    resultRows: [
      ["Tracked prompts citing brand", "0 of 120", "73 of 120", "+61 pts"],
      ["Organic demo requests", "58/mo", "84/mo", "+44%"],
      ["Branded search volume", "1,900/mo", "3,270/mo", "+72%"],
      ["Referral traffic from AI tools", "12/mo", "1,140/mo", "+9,400%"],
    ],
    timeline: "6 months",
    quote: {
      text: "Buyers started arriving already convinced, because the AI they asked had quoted our benchmark study.",
      author: "VP Marketing, B2B workflow SaaS",
    },
    takeaways: [
      "Gated content and logins are invisible to AI crawlers — making documentation and pricing publicly accessible is a prerequisite, not an optional improvement",
      "Entity consistency across Crunchbase, LinkedIn and Wikidata shapes how AI models resolve a brand and is far cheaper to fix than to ignore",
      "Original benchmark studies with downloadable methodology become the most-cited assets in a programme, multiplying mentions across sources models trust",
      "Monitoring specific buyer prompts monthly — not generic rankings — is the only reliable way to measure and improve AI assistant visibility",
    ],
  },
  {
    slug: "multi-location-clinic-local-seo",
    client: "Multi-speciality clinic group",
    industry: "Healthcare",
    location: "Hyderabad & Visakhapatnam, India",
    service: "Local SEO + GMB",
    image: "/images/neural-network-lightbulb.webp",
    summary:
      "Six clinic locations moved into the map pack for their core treatments, tripling appointment calls from Google in five months with zero paid spend.",
    challenge: [
      "Duplicate and unclaimed Google Business Profiles across six locations",
      "One generic 'Services' page trying to rank for every treatment in every city",
      "NAP inconsistencies across 40+ directories",
      "No review generation process; 11 reviews across the whole group",
    ],
    actions: [
      {
        title: "Profile cleanup",
        text: "Claimed, merged and fully populated six Google Business Profiles with services, treatment attributes, hours, photos and Q&A.",
      },
      {
        title: "Location × service pages",
        text: "Built 34 unique pages combining each treatment with each location, each with doctor bios, pricing guidance and 10 FAQs.",
      },
      {
        title: "Citation correction",
        text: "Fixed NAP across 42 Indian directories and healthcare aggregators, adding LocalBusiness and MedicalClinic schema per location.",
      },
      {
        title: "Review engine",
        text: "Introduced a post-visit SMS review flow with compliant templates, taking the group from 11 to 380 reviews.",
      },
      {
        title: "Proximity content",
        text: "Added neighbourhood landing sections targeting the catchment areas around each clinic.",
      },
    ],
    results: [
      { label: "Calls from Google", value: "+218%" },
      { label: "Map-pack keywords", value: "9 → 146" },
      { label: "Reviews", value: "11 → 380" },
      { label: "Direction requests", value: "+186%" },
    ],
    resultRows: [
      ["Map-pack top-3 keywords", "9", "146", "+1,522%"],
      ["Calls from Google Business", "142/mo", "452/mo", "+218%"],
      ["Website appointment forms", "37/mo", "119/mo", "+222%"],
      ["Average rating", "3.9", "4.7", "+0.8"],
    ],
    timeline: "5 months",
    quote: {
      text: "Our front desk noticed before the report did — the phone simply did not stop.",
      author: "Operations Director, multi-speciality clinic group",
    },
    takeaways: [
      "Duplicate and unclaimed Google Business Profiles actively suppress rankings — claiming and cleaning up all profiles before new work is non-negotiable in multi-location healthcare",
      "A page per service per location, each with specific doctor bios, pricing guidance and FAQs, dramatically outperforms a single 'Services' page covering everything",
      "Systematic review generation through compliant post-visit sequences can take a group from single-digit reviews to hundreds within months, shifting both map rankings and patient trust",
      "Local citation accuracy across healthcare aggregators and Indian directories is the foundation — inconsistent NAP is the most common and most damaging omission in clinic SEO",
    ],
  },
  {
    slug: "us-law-firm-national-seo",
    client: "Immigration law firm",
    industry: "Legal services",
    location: "United States",
    service: "National SEO + content",
    image: "/images/gmb-citation-map.webp",
    summary:
      "A US immigration law firm reached page one for 87 high-intent visa terms and cut cost per qualified consultation by 61% versus their previous paid-only model.",
    challenge: [
      "Entirely dependent on paid search at $94 per consultation",
      "Thin practice-area pages with no E-E-A-T signals",
      "Competing against national directories with huge authority",
      "Content did not answer the specific procedural questions searchers asked",
    ],
    actions: [
      {
        title: "Topic architecture",
        text: "Mapped every visa category to a pillar page with procedural sub-articles, forming 9 tightly interlinked clusters.",
      },
      {
        title: "E-E-A-T build-out",
        text: "Attorney bios with bar admissions, authored articles, reviewed-by lines, and Attorney and LegalService schema throughout.",
      },
      {
        title: "Procedural answer content",
        text: "Published 64 answer-first articles covering timelines, fees, document checklists and denial reasons, each with a 45-word extractable summary.",
      },
      {
        title: "Digital PR",
        text: "Earned 21 links from US news and immigration policy publications by commenting on rule changes within 24 hours.",
      },
      {
        title: "Conversion work",
        text: "Replaced generic contact forms with case-type-specific intake flows, lifting form completion by 34%.",
      },
    ],
    results: [
      { label: "Page-one keywords", value: "87" },
      { label: "Cost per consult", value: "-61%" },
      { label: "Organic consults", value: "+240%" },
      { label: "AI Overview presence", value: "31 queries" },
    ],
    resultRows: [
      ["Organic sessions", "6,100/mo", "27,800/mo", "+356%"],
      ["Organic consultations", "20/mo", "68/mo", "+240%"],
      ["Cost per consultation", "$94", "$37", "-61%"],
      ["Queries with AI Overview citation", "0", "31", "New"],
    ],
    timeline: "11 months",
    quote: {
      text: "We stopped renting attention from Google Ads and started owning it.",
      author: "Managing Partner, US immigration law firm",
    },
    takeaways: [
      "Topic clusters built around visa categories, each with procedural sub-articles, create far more durable authority than standalone practice-area pages",
      "E-E-A-T is not optional in legal search — attorney credentials, bar admissions and reviewed-by lines are the signals Google and AI engines require before citing legal content",
      "Answer-first articles with extractable 45-word summaries are the format that wins both featured snippets and AI Overview citations simultaneously",
      "Replacing a generic contact form with intake flows specific to each case type can lift form completion by over 30%, compounding the value of every organic session",
    ],
  },
  {
    slug: "uae-real-estate-lead-generation",
    client: "Dubai property brokerage",
    industry: "Real estate",
    location: "Dubai, UAE",
    service: "SEO + Google Ads",
    image: "/images/lead-generation-phone-laptop.webp",
    summary:
      "A Dubai brokerage combined community-level SEO with tightly matched Google Ads to cut cost per qualified lead by 47% while doubling organic enquiries.",
    challenge: [
      "Ads competing against portals with unlimited budgets",
      "No organic presence for community and off-plan project searches",
      "Bilingual audience with English and Arabic query patterns",
      "Lead quality unmeasured — sales could not tell which channel worked",
    ],
    actions: [
      {
        title: "Community page system",
        text: "Built 28 community and project pages with price trends, ROI data, amenities and school proximity — the details buyers actually search.",
      },
      {
        title: "Bilingual targeting",
        text: "Added Arabic versions with correct hreflang and locally-worded queries instead of machine translation.",
      },
      {
        title: "Ads restructure",
        text: "Rebuilt campaigns around intent tiers, cut 61% of wasted spend on investor-tourist traffic and matched ad copy to landing sections.",
      },
      {
        title: "Lead scoring loop",
        text: "Integrated CRM outcomes back into Google Ads so bidding optimised for qualified leads, not raw form fills.",
      },
      {
        title: "Schema for listings",
        text: "Added RealEstateListing and Place schema so listings surface in rich results and AI property answers.",
      },
    ],
    results: [
      { label: "Cost per qualified lead", value: "-47%" },
      { label: "Organic enquiries", value: "+108%" },
      { label: "Arabic organic traffic", value: "+320%" },
      { label: "Ad spend waste removed", value: "61%" },
    ],
    resultRows: [
      ["Qualified leads", "44/mo", "97/mo", "+120%"],
      ["Cost per qualified lead", "AED 610", "AED 323", "-47%"],
      ["Organic sessions", "9,300/mo", "21,400/mo", "+130%"],
      ["Arabic organic sessions", "500/mo", "2,100/mo", "+320%"],
    ],
    timeline: "7 months",
    quote: {
      text: "Same budget, twice the meetings — and the meetings are with real buyers.",
      author: "Sales Director, Dubai property brokerage",
    },
    takeaways: [
      "Combining community-level organic content with tightly restructured paid campaigns produces synergistic effects neither channel achieves independently in competitive real estate markets",
      "Arabic-language pages targeting locally-worded queries — not machine-translated versions of English content — drove a 320% increase in organic Arabic sessions because the query patterns differ materially",
      "Feeding CRM-qualified lead data back into Google Ads bidding is the single fastest way to shift a campaign from optimising for clicks to optimising for actual sales conversations",
      "RealEstateListing and Place schema make property inventory legible to both Google rich results and AI property research tools, opening a second visibility channel beyond portal listings",
    ],
  },
  {
    slug: "uk-manufacturer-b2b-seo",
    client: "Industrial components manufacturer",
    industry: "Manufacturing",
    location: "United Kingdom",
    service: "Technical SEO + web rebuild",
    image: "/images/local-citation-directory-listing.webp",
    summary:
      "A UK manufacturer replaced a 900-page legacy site with a fast, structured catalogue and grew RFQ submissions 176% without losing a single legacy ranking.",
    challenge: [
      "Legacy site on an unsupported CMS, 8.4s load time on 3G",
      "Product specs locked inside PDFs, invisible to search and AI",
      "No RFQ tracking; sales attributed everything to 'word of mouth'",
      "A previous migration had already lost 40% of organic traffic",
    ],
    actions: [
      {
        title: "Risk-managed migration",
        text: "Full URL inventory, 1:1 redirect map for 912 URLs, staged launch and daily post-launch monitoring for six weeks.",
      },
      {
        title: "Specs as HTML",
        text: "Converted 340 PDF datasheets into structured HTML spec tables with Product schema, making every tolerance and material searchable.",
      },
      {
        title: "Core Web Vitals",
        text: "Rebuilt on a modern stack: LCP from 6.1s to 1.4s, CLS to 0.02, and 94 mobile Lighthouse performance.",
      },
      {
        title: "Application-led content",
        text: "Created 26 application and industry pages matching how engineers search — by problem, not by product code.",
      },
      {
        title: "RFQ attribution",
        text: "Instrumented quote forms and phone calls so every enquiry maps to a landing page and query.",
      },
    ],
    results: [
      { label: "RFQ submissions", value: "+176%" },
      { label: "LCP", value: "6.1s → 1.4s" },
      { label: "Indexed spec pages", value: "+340" },
      { label: "Rankings kept in migration", value: "100%" },
    ],
    resultRows: [
      ["Organic sessions", "4,800/mo", "13,600/mo", "+183%"],
      ["RFQ submissions", "29/mo", "80/mo", "+176%"],
      ["Mobile Lighthouse performance", "31", "94", "+63"],
      ["Pages indexed", "540", "1,020", "+89%"],
    ],
    timeline: "8 months",
    quote: {
      text: "Engineers can finally find our tolerances without downloading a PDF — and so can Google.",
      author: "Marketing Manager, UK industrial manufacturer",
    },
    takeaways: [
      "A full 1:1 redirect map for every existing URL, staged launch and six weeks of daily post-launch monitoring are what allowed a 900-page migration to retain 100% of legacy rankings",
      "Converting product specifications from locked PDFs into structured HTML tables with Product schema simultaneously opened the site to search indexing and to AI sourcing tools",
      "Core Web Vitals improvements — LCP from 6.1s to 1.4s — matter more in B2B manufacturing than many assume, because procurement teams use slow networks on trade-show floors and factory floors",
      "Organising content by application and problem rather than by product code is how engineer-led searches get captured before a competitor's catalogue does",
    ],
  },
];

function caseStudyPage(seed: CaseStudySeed): PageContent {
  return {
    slug: `/case-studies/${seed.slug}`,
    title: `${seed.industry} Case Study — ${seed.results[0]!.value} ${seed.results[0]!.label} | AVR`,
    h1: `${seed.industry} case study: ${seed.results[0]!.label.toLowerCase()} ${seed.results[0]!.value}`,
    eyebrow: `${seed.industry} · ${seed.location}`,
    description: seed.summary,
    answer: seed.summary,
    hero: { image: seed.image, imageAlt: `${seed.industry} case study by AVR Web Consulting` },
    highlights: seed.results,
    serviceName: seed.service,
    breadcrumb: [
      { label: "Home", to: "/" },
      { label: "Case Studies", to: "/case-studies" },
      { label: seed.industry, to: `/case-studies/${seed.slug}` },
    ],
    related: [
      { label: "All case studies", to: "/case-studies" },
      { label: "Pricing", to: "/pricing" },
      { label: "SEO Services", to: "/seo-services" },
      { label: "AI SEO", to: "/ai-seo" },
    ],
    sections: [
      {
        id: "key-takeaways",
        heading: "Key Takeaways",
        blocks: [
          {
            kind: "list",
            items: [
              "Expert strategies tailored for Crawl control",
              "Data-driven approach without relying on guesswork",
              "Focus on sustainable, long-term search visibility",
              "Fully aligned with modern Answer Engine and AI search requirements",
            ],
          },
        ],
      },
      {
        id: "snapshot",
        heading: "Client snapshot",
        blocks: [
          {
            kind: "table",
            head: ["Field", "Detail"],
            rows: [
              ["Client", seed.client],
              ["Industry", seed.industry],
              ["Market", seed.location],
              ["Services used", seed.service],
              ["Engagement length", seed.timeline],
            ],
          },
        ],
      },
      {
        id: "challenge",
        heading: "The challenge",
        blocks: [
          {
            kind: "paragraph",
            text: `When ${seed.client.toLowerCase()} came to AVR Web Consulting, growth had stalled for reasons that were structural, not cosmetic. The audit surfaced four blocking issues:`,
          },
          { kind: "list", items: seed.challenge },
        ],
      },
      {
        id: "approach",
        heading: "What we did",
        blocks: [{ kind: "steps", items: seed.actions }],
      },
      {
        id: "results",
        heading: `Results after ${seed.timeline}`,
        blocks: [
          {
            kind: "table",
            head: ["Metric", "Before", "After", "Change"],
            rows: seed.resultRows,
          },
          {
            kind: "callout",
            title: "In the client's words",
            text: `"${seed.quote.text}" — ${seed.quote.author}`,
          },
        ],
      },
      {
        id: "takeaways",
        heading: "What this means for similar businesses",
        blocks: [
          {
            kind: "list",
            items: seed.takeaways,
          },
        ],
      },
    ],
    faqs: [
      {
        question: `How long did this ${seed.industry.toLowerCase()} project take to show results?`,
        answer: `First measurable movement appeared within 60-90 days, and the headline numbers above were achieved over ${seed.timeline} of continuous work.`,
      },
      {
        question: "What services were used in this case study?",
        answer: `${seed.service}. The mix was set by the audit findings rather than a fixed package.`,
      },
      {
        question: "Was any paid advertising involved in these organic numbers?",
        answer:
          "Organic metrics reported here exclude paid traffic. Where paid campaigns ran, they are reported separately in the results table.",
      },
      {
        question: "Can these results be replicated for my business?",
        answer:
          "Results depend on your market's competitiveness, your site's current state and budget. The method is repeatable; the exact percentages are not guaranteed.",
      },
      {
        question: "How much would a project like this cost?",
        answer:
          "Programs of this scope typically run between $300 and $600 per month with AVR Web Consulting, depending on content volume and number of markets.",
      },
      {
        question: "Was any of the content AI-generated?",
        answer:
          "No. All content was researched and written by humans, then structured so that AI systems can extract and cite it accurately.",
      },
      {
        question: "How were AI citations measured?",
        answer:
          "We ran a fixed monthly prompt set across ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews, recording whether the brand was named or linked.",
      },
      {
        question: "Did rankings hold after the engagement?",
        answer:
          "Yes. Because the work is manual and policy-compliant, gains have held through subsequent core updates rather than reversing.",
      },
      {
        question: "Do you share the client's name?",
        answer:
          "Only with written permission. Several clients prefer anonymity, so we describe the business type, market and verified metrics instead.",
      },
      {
        question: "How do I get an audit for my own site?",
        answer:
          "Request an audit from the contact page. You will receive findings, priorities and a fixed monthly quote within one business day.",
      },
    ],
  };
}

export const caseStudyPages: PageContent[] = caseStudySeeds.map(caseStudyPage);

export const caseStudyPageBySlug: Record<string, PageContent> = Object.fromEntries(
  caseStudySeeds.map((s, i) => [s.slug, caseStudyPages[i]!]),
);

export const caseStudiesHub: PageContent = {
  slug: "/case-studies",
  title: "SEO & AI SEO Case Studies — Real Client Results | AVR Web Consulting",
  h1: "Case studies: measurable SEO and AI search results",
  eyebrow: "Case studies",
  description:
    "Six documented AVR Web Consulting engagements across e-commerce, SaaS, healthcare, legal, real estate and manufacturing — with before-and-after metrics for traffic, leads, revenue and AI citations.",
  answer:
    "AVR Web Consulting case studies document real client outcomes: 212% organic revenue growth for a D2C store, 61% AI prompt citation rate for a B2B SaaS, 218% more calls for a clinic group, and 47% lower cost per lead for a Dubai brokerage. Every metric is measured before and after.",
  hero: {
    image: "/images/team-collaboration-tablet.webp",
    imageAlt: "SEO & AI SEO Case Studies — Real Client Results | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Documented projects", value: "6" },
    { label: "Industries covered", value: "6" },
    { label: "Markets", value: "India, US, UK, UAE" },
    { label: "Avg. engagement", value: "8 months" },
  ],
  serviceName: "SEO and AI SEO case studies",
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Case Studies", to: "/case-studies" },
  ],
  related: [
    { label: "Pricing", to: "/pricing" },
    { label: "About Us", to: "/about" },
    { label: "SEO Services", to: "/seo-services" },
    { label: "AI SEO", to: "/ai-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for SEO & AI SEO Case Studies — Real Client Results",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "overview",
      heading: "Results at a glance",
      blocks: [
        {
          kind: "table",
          head: ["Client type", "Market", "Service", "Headline result"],
          rows: caseStudySeeds.map((s) => [
            s.client,
            s.location,
            s.service,
            `${s.results[0]!.label} ${s.results[0]!.value}`,
          ]),
        },
      ],
    },
    {
      id: "how-we-measure",
      heading: "How we measure and report",
      blocks: [
        {
          kind: "list",
          items: [
            "Baselines are locked before work starts using Search Console, GA4 and CRM data",
            "Organic figures exclude paid, referral and branded-direct traffic unless stated",
            "Lead and revenue numbers come from client CRM records, not form-fill counts",
            "AI citations are measured with a fixed monthly prompt set across five assistants",
            "Every reported number is reproducible from a report we already sent the client",
          ],
        },
      ],
    },
    {
      id: "what-they-share",
      heading: "What every winning project had in common",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Fix retrieval first",
              text: "Crawlability, speed, indexation and structured data before any content investment.",
            },
            {
              title: "Answer the actual question",
              text: "Content written to resolve a specific intent in the first 60 words, then go deep.",
            },
            {
              title: "Make data machine-readable",
              text: "Specs, prices, hours and reviews in HTML and schema, never trapped in PDFs or images.",
            },
            {
              title: "Earn authority manually",
              text: "Real outreach, real publications, no networks — so gains survive core updates.",
            },
            {
              title: "Measure outcomes, not vanity",
              text: "Qualified leads and revenue reported monthly, with the next month's priorities attached.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Are these case study results real?",
      answer:
        "Yes. Every figure comes from client Search Console, GA4 and CRM data, with baselines recorded before work started. Client names are withheld where permission was not granted.",
    },
    {
      question: "How long before I see results like these?",
      answer:
        "Technical and on-page gains typically show within 30-60 days, ranking movement in 60-90 days, and compounding traffic or revenue growth from month four onward.",
    },
    {
      question: "Do you have case studies in my industry?",
      answer:
        "We document e-commerce, SaaS, healthcare, legal, real estate and manufacturing here, and have delivered work in startups, education, travel, fashion and finance. Ask for relevant references.",
    },
    {
      question: "What was the typical budget for these projects?",
      answer:
        "Engagements are tailored to project scope and competitiveness, typically scaling with content volume, location breadth, and technical complexity.",
    },
    {
      question: "Did any of these clients get penalised later?",
      answer:
        "No. All work is manual and compliant with search engine spam policies, so gains have held through subsequent Google core updates.",
    },
    {
      question: "How do you track AI assistant citations?",
      answer:
        "We run a fixed monthly prompt set across ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews, logging whether the brand is named, linked or omitted.",
    },
    {
      question: "Can you guarantee the same results for me?",
      answer:
        "No agency can guarantee specific rankings or revenue. We guarantee the method, the deliverables and transparent reporting against baselines we agree upfront.",
    },
    {
      question: "Do you work with small budgets?",
      answer:
        "Yes. We design customized plans for single-location businesses who need local visibility as well as enterprise campaigns.",
    },
    {
      question: "Will you show my business as a case study?",
      answer:
        "Only with your written permission, and we can anonymise the brand while keeping verified metrics.",
    },
    {
      question: "How do I start a project like these?",
      answer:
        "Request an audit on the contact page. We benchmark your site against competitors and send priorities plus a tailored proposal within one business day.",
    },
  ],
};
