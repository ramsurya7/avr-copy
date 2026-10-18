import type { Faq, PageContent } from "@/content/types";
import { business } from "@/content/site";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";

const images = [teamMeeting.url, entrepreneur.url, laptopWork.url, seoConcept.url];

export type LocationSeed = {
  slug: string;
  city: string;
  region: string;
  country: string;
  kind: "city" | "country";
  lat?: number;
  lng?: number;
  economy: string;
  sectors: string[];
  competition: string;
  localNotes: string[];
  currency: string;
};

export const locationSeeds: LocationSeed[] = [
  {
    slug: "seo-company-in-visakhapatnam",
    city: "Visakhapatnam",
    region: "Andhra Pradesh",
    country: "India",
    kind: "city",
    lat: 17.7231,
    lng: 83.3012,
    economy:
      "Vizag's port, pharma, IT-SEZ and tourism economy creates demand across B2B industrial, healthcare and hospitality search.",
    sectors: [
      "Manufacturing & exports",
      "Healthcare",
      "Real estate",
      "Hospitality & travel",
      "Education",
    ],
    competition: "Moderate — most local competitors still have thin, unstructured websites.",
    localNotes: [
      "Our head office is in Dondaparthy, so Vizag clients get on-site strategy sessions",
      "Strong map-pack opportunity across Dwaraka Nagar, MVP Colony, Gajuwaka and Madhurawada",
      "Telugu-language query variants are under-served and cheap to win",
    ],
    currency: "INR / USD",
  },
  {
    slug: "seo-company-in-delhi",
    city: "Delhi NCR",
    region: "Delhi",
    country: "India",
    kind: "city",
    lat: 28.6139,
    lng: 77.209,
    economy:
      "Delhi NCR is India's most competitive commercial search market, spanning Gurugram's corporate belt, Noida's tech corridor and Delhi's trading base.",
    sectors: ["B2B services", "E-commerce", "Education", "Healthcare", "Real estate"],
    competition: "Very high — agencies, aggregators and portals bid on every commercial term.",
    localNotes: [
      "Hyper-local pages by micro-market (Gurugram, Noida, Dwarka, Saket) outperform city-wide pages",
      "Map-pack wins need review velocity plus consistent citations across Indian directories",
      "Hindi and Hinglish query variants add meaningful incremental volume",
    ],
    currency: "INR",
  },
  {
    slug: "seo-company-in-mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    country: "India",
    kind: "city",
    lat: 19.076,
    lng: 72.8777,
    economy:
      "Mumbai concentrates finance, media, real estate and D2C brands, so commercial intent is high-value and fiercely contested.",
    sectors: ["BFSI", "Real estate", "Media & entertainment", "D2C retail", "Healthcare"],
    competition: "Very high — expect 6–9 months to compete on head terms.",
    localNotes: [
      "Suburb-level targeting (Andheri, BKC, Powai, Thane) converts better than 'in Mumbai' pages",
      "Finance clients need YMYL-grade authorship and compliance review",
      "Local PR and publisher links move the needle faster than volume link building",
    ],
    currency: "INR",
  },
  {
    slug: "seo-company-in-bangalore",
    city: "Bangalore",
    region: "Karnataka",
    country: "India",
    kind: "city",
    lat: 12.9716,
    lng: 77.5946,
    economy:
      "Bangalore is India's SaaS and startup capital, where buyers research in English, compare vendors obsessively and increasingly start in AI assistants.",
    sectors: ["SaaS & tech", "Startups", "E-commerce", "Education", "Real estate"],
    competition: "High, but product-led search and AI citations are still winnable quickly.",
    localNotes: [
      "SaaS buyers rely on comparison and integration queries — own those formats",
      "AI assistant visibility matters more here than in any other Indian market",
      "Koramangala, Indiranagar, Whitefield and HSR micro-markets need separate local pages",
    ],
    currency: "INR / USD",
  },
  {
    slug: "seo-company-in-hyderabad",
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    kind: "city",
    lat: 17.385,
    lng: 78.4867,
    economy:
      "Hyderabad's pharma, IT and real-estate boom drives sustained B2B and high-ticket consumer search demand.",
    sectors: ["Pharma & healthcare", "IT services", "Real estate", "Education", "Retail"],
    competition: "High in real estate and education; moderate elsewhere.",
    localNotes: [
      "HITEC City, Gachibowli, Kukatpally and Banjara Hills deserve their own locality pages",
      "Telugu query variants and bilingual GBP posts lift local pack performance",
      "Pharma clients need compliance-safe content workflows",
    ],
    currency: "INR",
  },
  {
    slug: "seo-company-in-chennai",
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    kind: "city",
    lat: 13.0827,
    lng: 80.2707,
    economy:
      "Chennai combines automotive manufacturing, healthcare tourism, IT services and a strong export base.",
    sectors: ["Manufacturing & auto", "Healthcare", "IT services", "Education", "Logistics"],
    competition: "Moderate to high; manufacturing spec content is badly under-served.",
    localNotes: [
      "Tamil-language search is significant and under-optimised by competitors",
      "Healthcare tourism queries come from overseas — pair local and international targeting",
      "Manufacturer catalogues locked in PDFs are the single biggest missed opportunity",
    ],
    currency: "INR",
  },
  {
    slug: "seo-company-in-pune",
    city: "Pune",
    region: "Maharashtra",
    country: "India",
    kind: "city",
    lat: 18.5204,
    lng: 73.8567,
    economy:
      "Pune's IT parks, automotive belt and large student population create a mixed B2B and consumer search market.",
    sectors: ["IT & SaaS", "Automotive", "Education", "Real estate", "Hospitality"],
    competition: "Moderate — faster wins than Mumbai for the same investment.",
    localNotes: [
      "Hinjewadi, Kharadi, Baner and Viman Nagar micro-markets convert best",
      "Education clients should map content to intake calendars",
      "Local review velocity is decisive for service businesses",
    ],
    currency: "INR",
  },
  {
    slug: "seo-company-in-kolkata",
    city: "Kolkata",
    region: "West Bengal",
    country: "India",
    kind: "city",
    lat: 22.5726,
    lng: 88.3639,
    economy:
      "Kolkata's trading, healthcare, education and emerging IT sectors offer lower competition and strong ROI on well-structured sites.",
    sectors: ["Healthcare", "Education", "Trading & exports", "Real estate", "Retail"],
    competition: "Lower than metro peers — rankings often move within 3–4 months.",
    localNotes: [
      "Salt Lake, New Town and Park Street micro-markets need dedicated pages",
      "Bengali query variants are almost entirely un-optimised",
      "Directory citation cleanup alone often lifts map-pack position",
    ],
    currency: "INR",
  },
  {
    slug: "seo-company-in-usa",
    city: "the United States",
    region: "USA",
    country: "United States",
    kind: "country",
    economy:
      "The US market rewards depth, original data and strong entity signals; buyers compare vendors across search, review platforms and AI assistants.",
    sectors: ["SaaS", "E-commerce", "Healthcare", "Legal", "Home services"],
    competition: "Extremely high on head terms; long-tail and AI citations remain accessible.",
    localNotes: [
      "State and metro-level landing pages outperform national-only pages",
      "US buyers verify vendors via reviews, G2 and AI answers before contacting",
      "Time-zone overlap is handled by our IST evening coverage for US mornings",
    ],
    currency: "USD",
  },
  {
    slug: "seo-company-in-uk",
    city: "the United Kingdom",
    region: "UK",
    country: "United Kingdom",
    kind: "country",
    economy:
      "UK search demands British spelling, GBP pricing and local trust signals; local packs are decisive for service businesses.",
    sectors: ["Professional services", "E-commerce", "Healthcare", "Property", "Trades"],
    competition: "High in London, moderate across regional cities.",
    localNotes: [
      "British English localisation is non-negotiable — spelling mismatches cost rankings",
      "Companies House details and UK addresses strengthen entity trust",
      "City pages for London, Manchester, Birmingham and Leeds work best",
    ],
    currency: "GBP",
  },
  {
    slug: "seo-company-in-uae",
    city: "the UAE",
    region: "UAE",
    country: "United Arab Emirates",
    kind: "country",
    economy:
      "Dubai and Abu Dhabi combine high purchase power, a multilingual audience and fast-moving real estate, retail and tourism sectors.",
    sectors: [
      "Real estate",
      "Tourism & hospitality",
      "Retail",
      "Healthcare",
      "Professional services",
    ],
    competition: "High in real estate; moderate elsewhere with bilingual content advantages.",
    localNotes: [
      "Arabic and English bilingual content with correct hreflang doubles addressable demand",
      "Free-zone and mainland business queries have distinct intent",
      "Google Business Profile and local directory presence drive most service enquiries",
    ],
    currency: "AED / USD",
  },
  {
    slug: "seo-company-in-europe",
    city: "Europe",
    region: "EU",
    country: "Europe",
    kind: "country",
    economy:
      "European growth means multilingual, multi-country SEO with GDPR-safe tracking and correct hreflang architecture.",
    sectors: ["Manufacturing", "SaaS", "E-commerce", "Travel", "Professional services"],
    competition: "Varies by language market — smaller languages are frequently under-served.",
    localNotes: [
      "Hreflang and country-language URL structure decide whether pages rank at all",
      "Native-speaker translation beats machine translation for rankings and trust",
      "GDPR-compliant analytics and consent handling are part of the build",
    ],
    currency: "EUR",
  },
];

function locationFaqs(s: LocationSeed): Faq[] {
  const where = s.kind === "city" ? `in ${s.city}` : `in ${s.city}`;
  return [
    {
      question: `Does AVR Web Consulting provide SEO services ${where}?`,
      answer: `Yes. AVR Web Consulting delivers SEO, AI SEO, paid advertising, content and web development ${where}. We work remotely from our Visakhapatnam head office with scheduled calls in your time zone, and clients receive the same manual, audit-first process regardless of location.`,
    },
    {
      question: `How much does SEO cost ${where}?`,
      answer: `Plans start at $100/month for focused local scopes and scale with competition, content volume and the number of locations targeted. Pricing is quoted in ${s.currency} after an audit — no long lock-in contracts.`,
    },
    {
      question: `How competitive is search ${where}?`,
      answer: s.competition,
    },
    {
      question: `Which industries do you serve ${where}?`,
      answer: `Our strongest verticals ${where} are ${s.sectors.join(", ").toLowerCase()}. ${s.economy}`,
    },
    {
      question: `How long before we see SEO results ${where}?`,
      answer: `Technical and on-page work typically shifts impressions within 3–6 weeks. Ranking and enquiry growth usually becomes material in months 3–6, with authority-driven compounding after that.`,
    },
    {
      question: `Do you optimise for AI search ${where}?`,
      answer: `Yes. Every programme includes AEO, GEO and LLMO work so your business appears in ChatGPT, Gemini, Perplexity and Google AI Overviews for local queries, backed by structured data and answer-first content.`,
    },
    {
      question: `Can you improve our Google Business Profile ${where}?`,
      answer: `Yes. We optimise categories, services, products, photos, posts and Q&A, then build consistent citations and a review generation cadence to lift map-pack position.`,
    },
    {
      question: `Do we need to meet in person?`,
      answer:
        s.kind === "city" && s.city === "Visakhapatnam"
          ? "You can. Our office is in Dondaparthy, Visakhapatnam, and local clients are welcome for strategy sessions — though everything can also run remotely."
          : `No. Everything runs over video calls, shared dashboards and written reports. Clients ${where} have worked with us for years without a single in-person meeting.`,
    },
    {
      question: `What makes your work safe from Google penalties?`,
      answer: `All links, citations and content are produced manually by people. We use no PBNs, no automated link tools and no spun content, which is why clients ${where} have never had a manual action under our management.`,
    },
    {
      question: `How do I start a campaign for my business?`,
      answer: `Request an audit. We review your site, competitors and AI visibility ${where}, then send a prioritised roadmap with timelines and pricing. Call ${business.phone} or email ${business.email}.`,
    },
  ];
}

function locationPage(s: LocationSeed, index: number): PageContent {
  const label = s.kind === "city" ? s.city : s.country;
  return {
    slug: `/locations/${s.slug}`,
    title: `SEO Company in ${label} — AI SEO & Digital Marketing | AVR Web Consulting`,
    h1: `SEO and AI visibility services in ${label}`,
    description: `AVR Web Consulting is an affordable SEO and AI SEO company serving ${label}. Local SEO, technical SEO, AEO, LLM visibility, Google Ads and web development. Plans from $100/month.`,
    eyebrow: "Locations",
    serviceName: `SEO Services in ${label}`,
    answer: `AVR Web Consulting provides SEO, AI SEO and digital marketing services in ${label}, covering technical SEO, local SEO, answer engine optimisation and AI visibility across ChatGPT, Gemini, Perplexity and Google AI Overviews. Plans start at $100/month with manual, penalty-safe work and monthly reporting in ${s.currency}.`,
    hero: {
      image: images[index % images.length] ?? teamMeeting.url,
      imageAlt: `Digital marketing team serving clients in ${label}`,
    },
    highlights: [
      { label: "Market", value: label },
      { label: "Plans from", value: "$100/mo" },
      { label: "Reporting", value: "Monthly" },
      { label: "Work", value: "100% manual" },
    ],
    breadcrumb: [
      { label: "Home", to: "/" },
      { label: "Locations", to: "/locations" },
      { label: label, to: `/locations/${s.slug}` },
    ],
    related: [
      { label: "All locations", to: "/locations" },
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
              "Expert strategies tailored for Sectors we serve here",
              "Data-driven approach without relying on guesswork",
              "Focus on sustainable, long-term search visibility",
              "Fully aligned with modern Answer Engine and AI search requirements",
            ],
          },
        ],
      },
      {
        id: "market",
        heading: `The search market in ${label}`,
        blocks: [
          { kind: "paragraph", text: s.economy },
          { kind: "list", title: "Sectors we serve here", items: s.sectors },
          { kind: "callout", title: "Competition level", text: s.competition },
        ],
      },
      {
        id: "local-strategy",
        heading: `How we win visibility in ${label}`,
        blocks: [
          { kind: "list", title: "Market-specific tactics", items: s.localNotes },
          {
            kind: "steps",
            title: "Our four-stage local programme",
            items: [
              {
                title: "Local audit",
                text: `Technical crawl, local pack position, competitor gap and AI visibility baseline for ${label}.`,
              },
              {
                title: "Foundations",
                text: "Site speed, schema, internal linking, Google Business Profile and citation consistency.",
              },
              {
                title: "Content",
                text: `Service and locality pages written for how buyers in ${label} actually search, with 10 FAQs each.`,
              },
              {
                title: "Authority",
                text: "Manual links, local PR, directory citations and review velocity to hold position long term.",
              },
            ],
          },
        ],
      },
      {
        id: "services",
        heading: `Services available in ${label}`,
        blocks: [
          {
            kind: "table",
            title: "Service coverage and starting price",
            head: ["Service", "What it covers", "From"],
            rows: [
              ["Local SEO", "Map pack, GBP, citations, review velocity", "$100/mo"],
              ["Technical SEO", "Crawl, index, Core Web Vitals, schema", "$150/mo"],
              ["AI SEO / AEO", "AI Overviews, ChatGPT and Perplexity visibility", "$200/mo"],
              ["Content marketing", "Answer-first blogs, service and locality pages", "$120/mo"],
              ["Google Ads", "Search, Shopping and Performance Max management", "$150/mo"],
              ["Web development", "SEO-ready WordPress and e-commerce builds", "$400 project"],
            ],
          },
        ],
      },
      {
        id: "ai-visibility",
        heading: `AI search visibility for ${label} businesses`,
        blocks: [
          {
            kind: "paragraph",
            text: `Buyers in ${label} increasingly ask AI assistants for recommendations before they ever open a search results page. We make your business the entity those systems can verify: consistent NAP, LocalBusiness schema with geo-coordinates, answer-first page openings and factual, citable content.`,
          },
          {
            kind: "list",
            title: "What we track monthly",
            items: [
              "Brand mentions in ChatGPT, Gemini, Perplexity and Copilot answers",
              "Google AI Overview appearances for target queries",
              "Local pack and organic rankings by keyword",
              "Enquiries, calls and form submissions attributed to organic",
            ],
          },
        ],
      },
    ],
    faqs: locationFaqs(s),
  };
}

export const locationPages: PageContent[] = locationSeeds.map(locationPage);

export const locationPageBySlug: Record<string, PageContent> = Object.fromEntries(
  locationPages.map((p) => [p.slug.split("/").pop() as string, p]),
);

export const locationsHub: PageContent = {
  slug: "/locations",
  title: "Locations We Serve — SEO Company in India, USA, UK, UAE & Europe | AVR",
  h1: "SEO and AI visibility services across India and worldwide",
  description:
    "AVR Web Consulting serves Visakhapatnam, Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune and Kolkata, plus clients in the USA, UK, UAE and Europe. Tailored custom plans for every market.",
  eyebrow: "Locations",
  serviceName: "SEO Services by Location",
  answer:
    "AVR Web Consulting is headquartered in Visakhapatnam, India and serves clients across eight Indian metros plus the United States, United Kingdom, United Arab Emirates and Europe. Each market gets locality-specific content, LocalBusiness schema with geo-coordinates and AI visibility tracking tuned to local query patterns.",
  hero: {
    image: "/images/locations-pin-hero.jpg",
    imageAlt: "Locations We Serve — SEO Company in India, USA, UK, UAE & Europe | AVR illustration",
  },
  highlights: [
    { label: "Head office", value: "Visakhapatnam" },
    { label: "Indian metros", value: "8" },
    { label: "International markets", value: "4" },
    { label: "Plans", value: "Tailored" },
  ],
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Locations", to: "/locations" },
  ],
  related: locationSeeds.map((s) => ({
    label: s.kind === "city" ? s.city : s.country,
    to: `/locations/${s.slug}`,
  })),
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Locations We Serve — SEO Company in India, USA, UK, UAE & Europe",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "india",
      heading: "SEO services across Indian metros",
      blocks: [
        {
          kind: "paragraph",
          text: "Search behaviour changes city by city: language mix, competition, micro-market geography and the sectors that dominate demand. We build a locality page structure for each city rather than reusing one national page with the city name swapped in.",
        },
        {
          kind: "table",
          title: "Indian market coverage",
          head: ["City", "Leading sectors", "Competition"],
          rows: locationSeeds
            .filter((s) => s.kind === "city")
            .map((s) => [
              s.city,
              s.sectors.slice(0, 3).join(", "),
              s.competition.split("—")[0]!.trim(),
            ]),
        },
      ],
    },
    {
      id: "global",
      heading: "International markets",
      blocks: [
        {
          kind: "table",
          title: "Global coverage",
          head: ["Market", "Focus", "Currency"],
          rows: locationSeeds
            .filter((s) => s.kind === "country")
            .map((s) => [s.country, s.sectors.slice(0, 3).join(", "), s.currency]),
        },
        {
          kind: "paragraph",
          text: "International programmes include hreflang architecture, native-language content, currency and spelling localisation, and GDPR-safe analytics where required. Meetings are scheduled in your time zone.",
        },
      ],
    },
    {
      id: "how",
      heading: "How remote delivery works",
      blocks: [
        {
          kind: "steps",
          title: "Working with us from anywhere",
          items: [
            {
              title: "Discovery call",
              text: "We discuss your market, existing traffic, main services and goals.",
            },
            {
              title: "Initial audit",
              text: "We assess your site, competitors and AI visibility in your market within 3 working days.",
            },
            {
              title: "Roadmap call",
              text: "A scheduled video call in your time zone to agree scope, timelines and pricing.",
            },
            {
              title: "Execution sprints",
              text: "Monthly sprints with a shared task board so you always see what is in progress.",
            },
            {
              title: "Reporting",
              text: "Live dashboard plus a written monthly review covering rankings, AI mentions and enquiries.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Which locations does AVR Web Consulting serve?",
      answer:
        "Visakhapatnam, Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune and Kolkata in India, plus clients across the United States, United Kingdom, United Arab Emirates and Europe.",
    },
    {
      question: "Where is AVR Web Consulting based?",
      answer: `Our head office is at ${business.address.street}, ${business.address.city} – ${business.address.postalCode}, ${business.address.region}, India. Call ${business.phone} or email ${business.email}.`,
    },
    {
      question: "Can you work with clients in other time zones?",
      answer:
        "Yes. We schedule calls in your local time and maintain overlap hours for US, UK, UAE and European clients. Day-to-day communication runs on email, WhatsApp and a shared task board.",
    },
    {
      question: "Do you charge more for international clients?",
      answer:
        "No premium for geography. Pricing reflects scope and competition, which is why international clients often find our rates 50–70% below local agency quotes for the same deliverables.",
    },
    {
      question: "How do you handle multi-country SEO?",
      answer:
        "With a proper hreflang and URL architecture, native-language content, localised currency and spelling, and country-specific entity signals so each market resolves correctly in search and AI systems.",
    },
    {
      question: "Do you offer local SEO for multiple branches?",
      answer:
        "Yes. Each branch gets its own optimised location page, Google Business Profile management, consistent citations and review generation, all tracked separately in reporting.",
    },
    {
      question: "Can you target a city where you have no office?",
      answer:
        "Yes. Ranking in a city requires locally relevant content, citations and reviews, not a physical office — though a genuine local address is required to appear in the map pack itself.",
    },
    {
      question: "Which markets give the fastest ROI?",
      answer:
        "Lower-competition Indian metros such as Visakhapatnam, Kolkata and Pune usually move fastest. In international markets, long-tail and AI-citation strategies deliver returns well before head-term rankings.",
    },
    {
      question: "Do you optimise for local AI search?",
      answer:
        "Yes. Local AEO includes LocalBusiness schema with geo-coordinates, consistent NAP everywhere, and answer-first locality content so AI assistants recommend you for 'near me' style prompts.",
    },
    {
      question: "How do we get started?",
      answer:
        "Request an audit through the contact page. You will receive a market-specific roadmap, timeline and price quoted in your currency within three working days.",
    },
  ],
};
