import type { Faq, PageContent, PageSection } from "@/content/types";
import aiSearch from "@/assets/ai-search.jpg.asset.json";
import aiRetrieval from "@/assets/ai-retrieval.jpg.asset.json";
import aiEngines from "@/assets/ai-engines.png.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import { adsSeoLlmoBlogSeed } from "@/content/pages/blog-ads-seo-llmo";
import { citationsGbpBlogSeed } from "@/content/pages/blog-citations-gbp";
import { n8nAiAgentsBlogSeed } from "@/content/pages/blog-n8n-ai-agents";
import { modernWebDesignBlogSeed } from "@/content/pages/blog-modern-web-design";
import { llmoSeoBlogSeed } from "@/content/pages/blog-llmo-seo";
import { aiSeoBlogSeed } from "@/content/pages/blog-ai-seo";
import { aeoSeoBlogSeed } from "@/content/pages/blog-aeo-seo";
import { geoSeoBlogSeed } from "@/content/pages/blog-geo-seo";
import { llmSeoBlogSeed } from "@/content/pages/blog-llm-seo";

export type BlogSeed = {
  slug: string;
  title: string;
  h1: string;
  category: "AI Search" | "AI SEO" | "SEO" | "Content" | "Local SEO" | "Paid Ads" | "Web Design";
  date: string;
  readMinutes: number;
  image: string;
  description: string;
  keywords?: string;
  answer: string;
  sections: PageSection[];
  faqs: Faq[];
  author?: {
    name: string;
    role: string;
    avatar?: string;
    bio?: string;
    social?: {
      linkedin?: string;
      x?: string;
      instagram?: string;
      facebook?: string;
    };
  };
};

const s = (id: string, heading: string, ...blocks: PageSection["blocks"]): PageSection => ({
  id,
  heading,
  blocks,
});
const p = (text: string) => ({ kind: "paragraph" as const, text });
const l = (title: string, items: string[]) => ({ kind: "list" as const, title, items });
const tbl = (head: string[], rows: string[][]) => ({ kind: "table" as const, head, rows });
const steps = (items: { title: string; text: string }[]) => ({ kind: "steps" as const, items });
const call = (title: string, text: string) => ({ kind: "callout" as const, title, text });

export const blogSeeds: BlogSeed[] = [
  {
    slug: "aeo-vs-geo-vs-llmo",
    title: "AEO vs GEO vs LLMO: What Each Term Actually Means",
    h1: "AEO vs GEO vs LLMO explained (without the hype)",
    category: "AI Search",
    date: "2026-01-22",
    readMinutes: 7,
    image: "/images/llm-seo-magnifying-glass.webp",
    description:
      "Answer Engine Optimization, Generative Engine Optimization and Large Language Model Optimization overlap but solve different problems. Here is a clear breakdown with what to do for each.",
    answer:
      "AEO optimises for direct answers in featured snippets and assistants. GEO optimises for inclusion inside generative answers such as AI Overviews and Perplexity. LLMO optimises how language models represent your brand overall, including in answers with no live retrieval. Most brands need all three.",
    sections: [
      s(
        "comparison",
        "Side-by-side comparison",
        tbl(
          ["", "AEO", "GEO", "LLMO"],
          [
            [
              "Target surface",
              "Snippets, voice, assistants",
              "AI Overviews, Perplexity, Copilot",
              "The model's internal brand representation",
            ],
            [
              "Core tactic",
              "Question-answer formatting",
              "Retrievable, citable passages",
              "Entity consistency and corroboration",
            ],
            [
              "Main asset",
              "FAQ and how-to content",
              "Comparison and data pages",
              "Off-site mentions and profiles",
            ],
            [
              "Success metric",
              "Snippet capture rate",
              "Citation rate per prompt",
              "Accuracy of unprompted brand descriptions",
            ],
          ],
        ),
      ),
      s(
        "aeo",
        "What AEO work looks like",
        l("Deliverables", [
          "One clear question per H2, answered in the following 40-60 words",
          "FAQPage and HowTo schema on the pages that deserve it",
          "Definitions, specs and prices stated as plain sentences, not marketing copy",
          "Tables for anything comparative — machines extract tables reliably",
        ]),
      ),
      s(
        "geo",
        "What GEO work looks like",
        l("Deliverables", [
          "Self-contained passages that make sense without the surrounding page",
          "Original data, benchmarks or pricing that no competitor can copy",
          "Explicit dates, sources and methodology so the answer can be verified",
          "Crawler access for AI user agents plus fast server responses",
        ]),
      ),
      s(
        "llmo",
        "What LLMO work looks like",
        l("Deliverables", [
          "Identical brand facts across your site, LinkedIn, Crunchbase, Wikidata and directories",
          "Organization schema with complete sameAs links",
          "Third-party mentions that repeat your positioning in the same words",
          "Regular audits asking models to describe your brand and correcting what they get wrong",
        ]),
      ),
    ],
    faqs: [
      {
        question: "Is GEO the same as local SEO's geo-targeting?",
        answer:
          "No. In AI search, GEO means Generative Engine Optimization. Geographic targeting is a separate discipline within local and international SEO.",
      },
      {
        question: "Which should I do first, AEO or GEO?",
        answer:
          "AEO first. Answer-first formatting is cheap, improves conversions and is the prerequisite for being extractable by generative engines.",
      },
      {
        question: "Can small businesses do LLMO?",
        answer:
          "Yes, and it is often easier — cleaning up a handful of profiles and getting consistent citations moves the needle fast for smaller entities.",
      },
      {
        question: "Do these tactics hurt traditional rankings?",
        answer:
          "No. Clear structure, schema and factual accuracy align with Google's helpful content guidance and generally help rankings.",
      },
      {
        question: "How do I know which one I am failing at?",
        answer:
          "Run your prompt set: absent from snippets means AEO, absent from AI Overviews means GEO, described incorrectly by the model means LLMO.",
      },
    ],
  },
  {
    slug: "google-ai-overviews-optimization",
    title: "How to Get Cited in Google AI Overviews",
    h1: "How to get your site cited in Google AI Overviews",
    category: "AI Search",
    date: "2026-02-03",
    readMinutes: 8,
    image: "/images/from-prompts-to-citations.webp",
    description:
      "Google AI Overviews cite a small set of sources per query. This guide covers the page patterns, schema and content structures that get selected, plus how to track your appearance rate.",
    answer:
      "To be cited in Google AI Overviews, publish pages that already rank in the top 10, answer the query in a self-contained 40-60 word passage near the top, support it with tables and specific data, mark it up with relevant schema, and keep pages fast and crawlable. Overviews mostly cite pages that already have topical authority.",
    sections: [
      s(
        "selection",
        "What Overviews actually cite",
        p(
          "Analysis of AI Overview citations consistently shows a bias toward pages already ranking in the top 10 for the query or a close variant, with content that contains a clean, quotable statement of fact. Long preambles lose to a page that states the answer immediately.",
        ),
        l("Patterns that get selected", [
          "Direct definition or answer within the first 100 words",
          "Numbered steps for procedural queries",
          "Comparison tables for 'vs' and 'best' queries",
          "Specific numbers, dates and named sources rather than vague claims",
          "Freshness signals on topics that change — updated dates that are genuinely accurate",
        ]),
      ),
      s(
        "checklist",
        "Implementation checklist",
        steps([
          {
            title: "Match the exact query",
            text: "Use the searcher's phrasing in an H2 and answer it in the next paragraph.",
          },
          {
            title: "Front-load the answer",
            text: "Never make the model read three paragraphs of context before the fact.",
          },
          {
            title: "Add the right schema",
            text: "FAQPage, HowTo, Product or Article — matched to content, never faked.",
          },
          {
            title: "Prove the claim",
            text: "Cite data, add a table, name your methodology so the passage survives verification.",
          },
          {
            title: "Keep it fast",
            text: "Slow pages get skipped during retrieval; aim for sub-2s LCP.",
          },
        ]),
      ),
      s(
        "tracking",
        "Tracking appearance rate",
        p(
          "Build a spreadsheet of 30-50 target queries, check them monthly in an incognito session, and record whether an AI Overview appears and whether you are cited. Also watch Search Console for impression growth paired with CTR decline — the classic signature of Overview coverage on your queries.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Do AI Overviews reduce my clicks?",
        answer:
          "For informational queries, yes — CTR commonly drops. Being cited preserves brand visibility and captures the users who click through for depth.",
      },
      {
        question: "Can I opt out of AI Overviews?",
        answer:
          "You can block Google-Extended or use nosnippet directives, but blocking removes your citation opportunity while your competitors keep theirs.",
      },
      {
        question: "Does schema guarantee an Overview citation?",
        answer:
          "No. Schema helps Google parse your content reliably, but selection depends on relevance, authority and clarity of the passage.",
      },
      {
        question: "How fast can changes take effect?",
        answer:
          "Overview citation sets refresh frequently; well-structured updates on already-ranking pages can be reflected within two to six weeks.",
      },
      {
        question: "Do Overviews cite small sites?",
        answer:
          "Yes, when the page is the clearest answer for a specific niche query. Specificity beats domain size on long-tail topics.",
      },
    ],
  },
  {
    slug: "llms-txt-guide",
    title: "llms.txt Explained: Should Your Site Have One?",
    h1: "llms.txt: what it is and how to write one",
    category: "AI Search",
    date: "2026-02-14",
    readMinutes: 6,
    image: "/images/ai-team-holographic-office.webp",
    description:
      "llms.txt is a proposed standard that gives AI systems a curated map of your most useful content. Here is what to include, what to skip, and how it works alongside robots.txt.",
    answer:
      "llms.txt is a markdown file at your domain root that lists your most useful pages with short descriptions, helping AI systems find authoritative content quickly. It does not control access — robots.txt does that — and it is not yet an official standard, but it is cheap to add and already read by several AI tools.",
    sections: [
      s(
        "what",
        "What goes in the file",
        l("A good llms.txt contains", [
          "An H1 with your brand name and a one-line description of what you do",
          "A short summary paragraph stating your services, markets and differentiators",
          "Grouped links to your core service, pricing, documentation and FAQ pages",
          "A one-line description for each link explaining what question it answers",
          "Contact details and a canonical statement of your business facts",
        ]),
      ),
      s(
        "vs-robots",
        "llms.txt vs robots.txt vs sitemap.xml",
        tbl(
          ["File", "Purpose", "Who reads it"],
          [
            [
              "robots.txt",
              "Grants or blocks crawler access",
              "All crawlers, enforced by convention",
            ],
            ["sitemap.xml", "Lists every indexable URL", "Search engine crawlers"],
            [
              "llms.txt",
              "Curates the best pages with context",
              "AI tools that choose to support it",
            ],
          ],
        ),
      ),
      s(
        "caveat",
        "Honest caveats",
        call(
          "Do not over-invest",
          "llms.txt takes 30 minutes and may help. It is not a substitute for crawlable content, schema or authority. If you only have time for one thing, add answer-first summaries to your top 20 pages instead.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Is llms.txt an official standard?",
        answer:
          "No. It is a community proposal that some AI tools support. It is low-cost to add but carries no guarantee of use.",
      },
      {
        question: "Where do I put llms.txt?",
        answer:
          "At the root of your domain, so it is reachable at yourdomain.com/llms.txt, served as plain text or markdown.",
      },
      {
        question: "Does llms.txt block AI training?",
        answer:
          "No. Access control belongs in robots.txt via user-agent directives such as GPTBot and Google-Extended.",
      },
      {
        question: "How long should llms.txt be?",
        answer:
          "Usually under 100 lines. Curate your best pages rather than duplicating your sitemap.",
      },
      {
        question: "Should I keep it updated?",
        answer:
          "Yes — review quarterly and whenever you launch a major service page, so the file reflects your current best content.",
      },
    ],
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist for 2026 (52 Points)",
    h1: "The technical SEO checklist we run on every audit",
    category: "SEO",
    date: "2026-01-05",
    readMinutes: 11,
    image: "/images/seo-search-engine.webp",
    description:
      "A working technical SEO checklist covering crawling, indexation, Core Web Vitals, structured data, JavaScript rendering and AI crawler access — in the order we actually run them.",
    answer:
      "A technical SEO audit should run in this order: crawl access, indexation, site architecture, Core Web Vitals, rendering, structured data, internationalisation and AI crawler access. Fixing crawl and indexation first is what makes every later fix measurable, because Google must be able to see the change.",
    sections: [
      s(
        "crawl",
        "1. Crawl and access",
        l("Check", [
          "robots.txt does not block CSS, JS or important sections",
          "No accidental noindex on templates or staging leftovers",
          "Server returns correct status codes — no soft 404s or 200 error pages",
          "Redirect chains resolved to a single hop",
          "Crawl budget is not consumed by faceted or parameter URLs",
        ]),
      ),
      s(
        "index",
        "2. Indexation and duplication",
        l("Check", [
          "Search Console coverage report has no unexplained exclusions",
          "Canonical tags are self-referencing and consistent with internal links",
          "Pagination is crawlable and not blocked by infinite scroll",
          "Thin, near-duplicate pages are consolidated or improved",
          "XML sitemaps are split by template and contain only indexable URLs",
        ]),
      ),
      s(
        "speed",
        "3. Core Web Vitals",
        tbl(
          ["Metric", "Target", "Most common fix"],
          [
            ["LCP", "< 2.5s", "Preload hero image, cut render-blocking CSS"],
            ["INP", "< 200ms", "Break long JS tasks, defer third-party scripts"],
            ["CLS", "< 0.1", "Set width and height on images and ad slots"],
            ["TTFB", "< 0.8s", "Server caching, CDN, reduce redirect hops"],
          ],
        ),
      ),
      s(
        "ai",
        "4. Structured data and AI access",
        l("Check", [
          "Organization, WebSite and Breadcrumb schema sitewide",
          "Page-type schema — Product, Article, FAQPage, LocalBusiness — where accurate",
          "No schema for content invisible to users",
          "AI user agents explicitly allowed if you want AI visibility",
          "Key facts rendered server-side, not injected by client-only JavaScript",
        ]),
      ),
    ],
    faqs: [
      {
        question: "How often should I run a technical audit?",
        answer:
          "A full audit twice a year, a light crawl monthly, and always immediately after a redesign, migration or CMS change.",
      },
      {
        question: "What is the single most damaging technical issue?",
        answer:
          "Blocking or noindexing pages that should rank. Nothing else matters if the page cannot be crawled or indexed.",
      },
      {
        question: "Do Core Web Vitals affect rankings?",
        answer:
          "They are a modest ranking signal, but their bigger effect is on conversions and on whether crawlers and AI retrievers finish fetching your pages.",
      },
      {
        question: "Is JavaScript bad for SEO?",
        answer:
          "Not inherently, but client-only rendering delays indexing and can hide content from AI retrievers. Server-render your critical content.",
      },
      {
        question: "Can I do this checklist myself?",
        answer:
          "Most of it, with Search Console and a crawler like Screaming Frog. Log-file analysis and rendering debugging usually need specialist help.",
      },
    ],
  },
  {
    slug: "local-seo-guide-india",
    title: "Local SEO in India: A Step-by-Step Guide",
    h1: "Local SEO in India: how to win the map pack",
    category: "Local SEO",
    date: "2026-01-18",
    readMinutes: 10,
    image: "/images/local-seo-logos.webp",
    description:
      "How Indian businesses rank in the Google map pack: Business Profile optimisation, citation cleanup, review velocity, location pages and the proximity factors that decide local results.",
    answer:
      "To rank in India's local map pack, fully optimise your Google Business Profile with correct categories and services, keep NAP identical across Indian directories, generate a steady flow of reviews with keyword-rich replies, publish one page per location and service, and add LocalBusiness schema with accurate geo-coordinates.",
    sections: [
      s(
        "profile",
        "Google Business Profile essentials",
        steps([
          {
            title: "Primary category precision",
            text: "Your primary category drives most of your map-pack relevance. Pick the exact match, not the broad one.",
          },
          {
            title: "Services and attributes",
            text: "List every service with a 200-300 character description containing natural search terms.",
          },
          {
            title: "Photos weekly",
            text: "Profiles with regularly added real photos see materially more direction requests and calls.",
          },
          {
            title: "Q&A seeding",
            text: "Post the ten questions customers actually ask and answer them from the business account.",
          },
          {
            title: "Posts",
            text: "Publish offers and updates fortnightly — they occupy space in the knowledge panel and signal activity.",
          },
        ]),
      ),
      s(
        "citations",
        "Citations that matter in India",
        l("Priority directories", [
          "Justdial, Sulekha, IndiaMART for commercial intent",
          "Practo or Lybrate for healthcare, 99acres or MagicBricks for property",
          "Apple Maps, Bing Places and Here for map coverage beyond Google",
          "Local chamber, industry association and city listings for regional trust",
        ]),
        p(
          "Consistency beats quantity. One transposed digit in your phone number across twenty directories does more damage than missing ten listings.",
        ),
      ),
      s(
        "reviews",
        "Review strategy that is compliant",
        l("What works", [
          "Ask at the moment of satisfaction, via SMS or WhatsApp with a direct link",
          "Never incentivise reviews — it violates Google policy and risks removal",
          "Reply to every review within 48 hours, naming the service and city naturally",
          "Route unhappy customers to a service recovery flow before they post",
        ]),
      ),
    ],
    faqs: [
      {
        question: "How long does local SEO take in India?",
        answer:
          "Profile and citation work usually shows movement in 4-8 weeks; competitive city keywords in metros take three to six months.",
      },
      {
        question: "Do I need a physical address?",
        answer:
          "Yes, Google requires a real address, though service-area businesses can hide it and specify service regions instead.",
      },
      {
        question: "How many reviews do I need?",
        answer:
          "Aim to exceed the average of the current top three in your map pack, and to keep a steady monthly flow rather than a one-time burst.",
      },
      {
        question: "Can one website rank in multiple cities?",
        answer:
          "Yes, with a genuinely unique page per city containing local proof, staff, pricing and testimonials — not a templated find-and-replace.",
      },
      {
        question: "Does distance from the searcher matter?",
        answer:
          "Heavily. Proximity is one of the three core local factors, which is why neighbourhood-level content and multiple verified locations matter.",
      },
    ],
  },
  {
    slug: "ecommerce-seo-strategy",
    title: "E-commerce SEO Strategy: Category Pages Beat Blogs",
    h1: "E-commerce SEO: why category pages deserve your budget",
    category: "SEO",
    date: "2026-02-08",
    readMinutes: 9,
    image: "/images/seo-growth-chart-laptop.webp",
    description:
      "Most e-commerce SEO budgets go to blogs that never convert. Here is the category-first framework we use to grow organic revenue, including faceted navigation control and product schema.",
    answer:
      "E-commerce SEO returns most when you fix crawl waste from faceted navigation, then turn category pages into genuine buying guides with unique copy, comparison tables and FAQ blocks. Category pages capture commercial intent, convert several times better than blog traffic, and are where product schema and AI shopping answers converge.",
    sections: [
      s(
        "crawl",
        "Fix crawl waste first",
        p(
          "On the average store, more than half of crawled URLs are filter and sort combinations. Every one of those crawls is a product page that did not get refreshed.",
        ),
        l("Controls to implement", [
          "Canonicalise filter combinations to the parent category",
          "Block sort and pagination parameters in robots.txt where they add no value",
          "Allow one valuable facet type — often brand or size — to be indexable with unique copy",
          "Remove out-of-stock products from sitemaps but keep the URLs with alternatives shown",
        ]),
      ),
      s(
        "category",
        "Category pages as buying guides",
        tbl(
          ["Element", "Why it works"],
          [
            [
              "150-word intro above the grid",
              "Establishes relevance without pushing products below the fold",
            ],
            [
              "Comparison table of top options",
              "Captures 'best' queries and is heavily quoted by AI answers",
            ],
            [
              "Sizing, material or compatibility guidance",
              "Answers the objection that stops the purchase",
            ],
            ["8-10 FAQs below the grid", "Long-tail capture plus FAQPage schema eligibility"],
          ],
        ),
      ),
      s(
        "schema",
        "Product data for AI shopping",
        l("Mark up accurately", [
          "Product with GTIN, brand, condition and full specification set",
          "Offer with price, currency, availability and shipping details",
          "AggregateRating and Review, only where reviews genuinely exist",
          "Return policy and delivery estimates in HTML text, not only in images",
        ]),
      ),
    ],
    faqs: [
      {
        question: "Should e-commerce sites blog at all?",
        answer:
          "Yes, but as support for categories — buying guides and comparisons that link into commercial pages, not generic lifestyle posts.",
      },
      {
        question: "How much copy does a category page need?",
        answer:
          "Enough to answer the buying question — typically 400-900 words spread above and below the product grid, never a keyword-stuffed wall of text.",
      },
      {
        question: "Should out-of-stock pages be deleted?",
        answer:
          "No. Keep the URL, show alternatives and restock dates. Deleting loses accumulated links and rankings.",
      },
      {
        question: "Do product reviews help SEO?",
        answer:
          "Yes — they add unique content, support AggregateRating markup and are a strong corroboration signal for AI shopping answers.",
      },
      {
        question: "How do AI assistants pick products to recommend?",
        answer:
          "They favour clearly structured specs, consistent pricing across sources, genuine review corroboration and merchant pages that load fast and are crawlable.",
      },
    ],
  },
  {
    slug: "content-that-ranks-and-converts",
    title: "Writing Content That Ranks, Converts and Gets Quoted",
    h1: "How to write content that ranks, converts and gets quoted by AI",
    category: "Content",
    date: "2026-02-20",
    readMinutes: 8,
    image: "/images/website-copywriting-laptop.webp",
    description:
      "A repeatable content structure for pages that satisfy searchers, persuade buyers and give AI assistants clean passages to cite.",
    answer:
      "Content that performs on all three fronts follows one structure: a 40-60 word direct answer under the H1, one question per H2, evidence in tables and lists, a specific point of view backed by data, and a conversion path that matches the reader's stage. Depth wins, but only after the answer is delivered.",
    sections: [
      s(
        "structure",
        "The structure",
        steps([
          {
            title: "H1 states the question or promise",
            text: "Use the reader's phrasing, not internal jargon.",
          },
          {
            title: "Answer block immediately",
            text: "40-60 words that resolve the query completely. This is what AI lifts.",
          },
          {
            title: "Depth in scannable sections",
            text: "One idea per H2, supported by a list, table or example.",
          },
          {
            title: "Evidence",
            text: "Numbers, screenshots, methodology, dates. Unverifiable claims get filtered out.",
          },
          {
            title: "Conversion path",
            text: "One clear next step relevant to intent — audit for research stage, quote for decision stage.",
          },
        ]),
      ),
      s(
        "voice",
        "Writing for humans and machines at once",
        l("Rules that serve both", [
          "Short sentences with one claim each — easy to read, easy to extract",
          "Define terms the first time you use them",
          "Prefer 'costs $100 per month' to 'affordable pricing'",
          "Use tables for anything comparative",
          "Update and date content honestly; fake freshness is detected and discounted",
        ]),
      ),
      s(
        "mistakes",
        "Common mistakes",
        l("Avoid", [
          "Three paragraphs of context before the answer",
          "Word-count padding to hit an arbitrary target",
          "AI-generated drafts published without expert editing or fact-checking",
          "Ten pages targeting near-identical keywords, cannibalising each other",
          "No author, no sources, no evidence of first-hand experience",
        ]),
      ),
    ],
    faqs: [
      {
        question: "How long should a blog post be?",
        answer:
          "As long as the question requires. Answer-first pages of 900 words often beat 3,000-word posts that bury the answer.",
      },
      {
        question: "Can I use AI to write content?",
        answer:
          "Use it for outlines, research summaries and editing. Publishing unedited AI text produces generic content with no first-hand experience signal.",
      },
      {
        question: "How often should I publish?",
        answer:
          "Consistency over volume — four genuinely useful posts a month outperform twenty thin ones, and reduce cannibalisation risk.",
      },
      {
        question: "Should old content be updated or replaced?",
        answer:
          "Update when the URL has authority and the topic still matters; consolidate when several thin pages compete for the same intent.",
      },
      {
        question: "What makes content quotable by AI?",
        answer:
          "Self-contained passages with specific facts, clear attribution, dates and structure the model can lift without needing surrounding context.",
      },
    ],
  },
  {
    slug: "google-ads-wasted-spend",
    title: "7 Ways Google Ads Budgets Leak (And How to Plug Them)",
    h1: "Where Google Ads budgets leak — and how to stop it",
    category: "Paid Ads",
    date: "2026-01-28",
    readMinutes: 7,
    image: "/images/google-ads-for-seo.webp",
    description:
      "Most accounts waste 30-60% of spend on the same seven problems. Here is how to find and fix each one, with the search terms and settings to check first.",
    answer:
      "Google Ads budgets leak most through broad match without negatives, Search Partners and Display expansion left on, untracked or duplicated conversions, single-keyword ad groups that were never built, mismatched landing pages, unfiltered location targeting, and bidding on brand terms competitors do not contest.",
    sections: [
      s(
        "leaks",
        "The seven leaks",
        tbl(
          ["Leak", "Typical waste", "Fix"],
          [
            [
              "Broad match, no negatives",
              "15-35%",
              "Weekly search-term review, tiered negative lists",
            ],
            [
              "Search Partners / Display expansion",
              "5-20%",
              "Turn off, measure, only re-enable if it proves out",
            ],
            [
              "Bad conversion tracking",
              "Distorts all bids",
              "One primary conversion, deduplicated, value-assigned",
            ],
            ["Loose location settings", "5-15%", "Set 'presence' not 'presence or interest'"],
            [
              "Landing page mismatch",
              "20-40% of clicks",
              "One landing section per ad group promise",
            ],
            [
              "Brand bidding on uncontested terms",
              "3-10%",
              "Test pausing, measure total brand capture",
            ],
            ["Ignoring device and hour data", "5-12%", "Bid adjustments after 30 days of data"],
          ],
        ),
      ),
      s(
        "audit",
        "A 45-minute audit routine",
        steps([
          {
            title: "Search terms, 30 days",
            text: "Sort by cost, add negatives for anything with spend and no conversions.",
          },
          {
            title: "Conversion actions",
            text: "Confirm only one primary action counts toward bidding and no duplicates fire.",
          },
          {
            title: "Settings sweep",
            text: "Check network, location and audience expansion settings on every campaign.",
          },
          {
            title: "Landing page match",
            text: "Click your own ads and confirm the promise is answered above the fold.",
          },
          {
            title: "Budget reallocation",
            text: "Move spend to the ad groups producing qualified leads, not raw clicks.",
          },
        ]),
      ),
    ],
    faqs: [
      {
        question: "How much Google Ads spend is typically wasted?",
        answer:
          "In accounts we audit, 30-60% of spend commonly goes to search terms or placements that never produce qualified leads.",
      },
      {
        question: "Is broad match always bad?",
        answer:
          "No. With strong conversion data and disciplined negative lists it can find new intent, but it needs weekly maintenance.",
      },
      {
        question: "Should I run Performance Max?",
        answer:
          "It works for e-commerce with clean feeds and good data, but for lead gen it often absorbs brand traffic and hides where spend goes.",
      },
      {
        question: "How much does ad management cost?",
        answer:
          "AVR Web Consulting manages Google Ads from $150/month or 12% of spend, whichever fits the account size better.",
      },
      {
        question: "Do ads help SEO rankings?",
        answer:
          "Not directly. They do provide fast keyword and conversion data that makes SEO targeting decisions much more accurate.",
      },
    ],
  },
  {
    slug: "core-web-vitals-fixes",
    title: "Core Web Vitals: The Fixes That Actually Move the Needle",
    h1: "Core Web Vitals fixes that actually change your scores",
    category: "Web Design",
    date: "2026-02-25",
    readMinutes: 8,
    image: "/images/web-developer-isometric.webp",
    description:
      "Practical LCP, INP and CLS fixes ranked by impact per hour of work, based on the sites we rebuild — plus how to avoid chasing lab scores that field data ignores.",
    answer:
      "The highest-impact Core Web Vitals fixes are: preload and properly size the LCP image, remove render-blocking CSS and fonts, defer or remove third-party scripts, set explicit dimensions on all media, and break long JavaScript tasks. Field data from real users, not Lighthouse lab scores, is what Google uses.",
    sections: [
      s(
        "lcp",
        "LCP: usually one image and one stylesheet",
        l("In order of impact", [
          "Serve the hero image in modern format at the exact rendered size",
          "Preload it and never lazy-load the above-the-fold image",
          "Inline critical CSS, defer the rest",
          "Self-host fonts with font-display: swap and preload the primary weight",
          "Cut TTFB with edge caching before optimising anything on the page",
        ]),
      ),
      s(
        "inp",
        "INP: your JavaScript is doing too much",
        l("Fixes", [
          "Audit third-party tags — chat widgets and heatmaps are frequent offenders",
          "Split long tasks and yield to the main thread",
          "Debounce expensive handlers on scroll and input",
          "Hydrate interactive components only when visible",
        ]),
      ),
      s(
        "cls",
        "CLS: reserve the space",
        l("Fixes", [
          "Width and height attributes on every image and video",
          "Reserved containers for ads, embeds and cookie banners",
          "Avoid injecting banners above existing content after load",
          "Preload fonts to prevent late swaps shifting text blocks",
        ]),
      ),
      s(
        "measure",
        "Measure the right thing",
        call(
          "Field over lab",
          "Chrome User Experience Report field data drives the Core Web Vitals assessment. A perfect Lighthouse score on your laptop means little if real users on 4G mid-range Android phones see a 4s LCP.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Do Core Web Vitals affect rankings much?",
        answer:
          "They are a tiebreaker rather than a primary signal, but the conversion and crawl-efficiency gains usually justify the work by themselves.",
      },
      {
        question: "What is a good LCP?",
        answer:
          "Under 2.5 seconds for 75% of real users. Under 2 seconds is a safer target on mobile networks.",
      },
      {
        question: "Why is my Lighthouse score good but Search Console says failing?",
        answer:
          "Lighthouse is a lab simulation on your device; Search Console reports real-user field data across devices and networks.",
      },
      {
        question: "Does a page builder ruin Core Web Vitals?",
        answer:
          "Heavy builders make good scores harder but not impossible — trimming unused modules, scripts and fonts usually recovers most of the gap.",
      },
      {
        question: "How long until improvements show in Search Console?",
        answer:
          "Field data updates on a 28-day rolling window, so allow roughly a month after deployment for the report to reflect fixes.",
      },
    ],
  },
  {
    slug: "schema-markup-that-matters",
    title: "Schema Markup That Actually Matters in 2026",
    h1: "Which schema types are worth implementing in 2026",
    category: "SEO",
    date: "2026-03-04",
    readMinutes: 7,
    image: "/images/programmer-coding-stock.webp",
    description:
      "Not all structured data earns anything. Here are the schema types that still drive rich results or AI comprehension, the ones that no longer do, and how to implement them safely.",
    answer:
      "The schema types worth implementing in 2026 are Organization, WebSite, BreadcrumbList, Product with Offer, LocalBusiness, Article, FAQPage, HowTo, Event and Review. They either trigger rich results or materially help AI systems resolve entities and extract facts. Never mark up content users cannot see.",
    sections: [
      s(
        "worth",
        "Worth implementing",
        tbl(
          ["Type", "Benefit"],
          [
            ["Organization + sameAs", "Entity resolution across Google and AI models"],
            ["WebSite + SearchAction", "Sitelinks search box eligibility"],
            ["BreadcrumbList", "Cleaner SERP paths and clearer site hierarchy for retrievers"],
            ["Product + Offer", "Price, availability and rich results in shopping surfaces"],
            ["LocalBusiness", "Map pack support and accurate hours in AI answers"],
            ["Article + author", "Authorship and freshness signals for news and blogs"],
            ["FAQPage / HowTo", "Answer extraction, even where rich results were reduced"],
          ],
        ),
      ),
      s(
        "implementation",
        "Implementation rules",
        l("Non-negotiables", [
          "JSON-LD in the head or body — never microdata retrofits",
          "Every marked-up fact must be visible on the page",
          "Use @id references to connect Organization, WebSite and page entities",
          "Validate with the Rich Results Test and Schema.org validator before deploying",
          "Keep prices, stock and hours in sync with reality — stale schema erodes trust signals",
        ]),
      ),
      s(
        "skip",
        "Where not to spend time",
        p(
          "Speakable has minimal reach, marked-up content that duplicates thin pages earns nothing, and stacking every conceivable type on one page does not increase eligibility. Depth of accuracy beats breadth of types.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Does schema improve rankings directly?",
        answer:
          "No. It improves how your content is understood and displayed, which improves click-through and AI citation likelihood.",
      },
      {
        question: "Is FAQPage schema still useful?",
        answer:
          "Yes. Google reduced FAQ rich results for most sites, but the markup still helps answer engines and AI systems extract question-answer pairs.",
      },
      {
        question: "Can incorrect schema cause a penalty?",
        answer:
          "Marking up content that is not visible to users can trigger a structured data manual action, so accuracy matters.",
      },
      {
        question: "JSON-LD or microdata?",
        answer:
          "JSON-LD. It is Google's recommended format and far easier to maintain in modern frameworks.",
      },
      {
        question: "How do I check my schema is working?",
        answer:
          "Use the Rich Results Test for eligibility and the Search Console enhancement reports to monitor errors at scale.",
      },
    ],
  },
  {
    slug: "seo-vs-paid-ads-budget",
    title: "SEO vs Paid Ads: How to Split a Limited Budget",
    h1: "SEO vs paid ads: how to split a limited marketing budget",
    category: "Paid Ads",
    date: "2026-03-11",
    readMinutes: 7,
    image: "/images/marketing-data-table.webp",
    description:
      "A decision framework for allocating budget between SEO and paid search based on your timeline, margins, competitive position and sales cycle — with three worked scenarios.",
    answer:
      "Split budget by timeline and margin: if you need leads this month, weight paid ads 70/30; if you can wait 90 days and have repeat-purchase economics, weight SEO 70/30. Most SMBs do best starting 50/50, using ads for keyword and conversion data that then targets the SEO investment precisely.",
    sections: [
      s(
        "framework",
        "The decision framework",
        tbl(
          ["Situation", "Suggested split", "Reasoning"],
          [
            [
              "Brand new site, need revenue now",
              "70% ads / 30% SEO",
              "Ads deliver traffic immediately while SEO foundations are built",
            ],
            [
              "Established site, stable revenue",
              "30% ads / 70% SEO",
              "Compounding organic reduces long-term acquisition cost",
            ],
            [
              "High-margin, long sales cycle B2B",
              "40% ads / 60% SEO + content",
              "Buyers research for months; content earns the shortlist",
            ],
            [
              "Thin-margin retail",
              "60% ads / 40% SEO",
              "Ads must be tightly ROAS-managed; SEO targets category pages",
            ],
            [
              "Seasonal business",
              "Flex ads by season",
              "SEO year-round, ads concentrated in the buying window",
            ],
          ],
        ),
      ),
      s(
        "together",
        "Use them together, not against each other",
        l("Compounding effects", [
          "Ads reveal which keywords actually convert, so SEO targets those first",
          "SEO landing pages improve Quality Score, lowering CPC",
          "Owning both organic and paid on a query raises total click share",
          "Ad copy testing produces the strongest meta titles and descriptions",
        ]),
      ),
      s(
        "math",
        "The break-even question",
        p(
          "Compare cost per acquisition over 12 months, not one. A $300/month SEO program producing 20 leads by month six costs $90 per lead in year one and far less in year two, while ads cost the same per lead forever unless conversion rate improves.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Which gives faster results, SEO or ads?",
        answer:
          "Paid ads deliver traffic the day they launch. SEO typically takes 60-90 days for movement and 4-6 months for meaningful volume.",
      },
      {
        question: "Is SEO cheaper than ads long term?",
        answer:
          "Usually yes, because organic traffic keeps arriving after work stops, while ad traffic ends the moment spend stops.",
      },
      {
        question: "Can I do only SEO?",
        answer:
          "Yes, if you can wait. Many of our clients start SEO-only at $100-300/month and add ads once organic covers baseline demand.",
      },
      {
        question: "Should I pause ads once SEO works?",
        answer:
          "Rarely fully — keep ads on high-intent, high-margin terms, but you can reduce spend on terms you now own organically.",
      },
      {
        question: "How do I measure which channel drove the sale?",
        answer:
          "Use GA4 with a data-driven attribution model plus CRM lead source capture, and review assisted conversions rather than last click alone.",
      },
    ],
  },
  {
    slug: "international-seo-hreflang",
    title: "International SEO: Getting Hreflang Right the First Time",
    h1: "International SEO and hreflang without the headaches",
    category: "SEO",
    date: "2026-03-18",
    readMinutes: 8,
    image: "/images/marketing-bridge-illustration.webp",
    description:
      "Domain structure, hreflang implementation, currency and content localisation for brands expanding from India into the US, UK, UAE and Europe.",
    answer:
      "For international SEO, choose subdirectories over ccTLDs unless you have local entities, implement bidirectional hreflang with self-referencing tags and an x-default, localise currency, spelling and examples rather than translating literally, and build local links in each target market.",
    sections: [
      s(
        "structure",
        "Choosing a structure",
        tbl(
          ["Structure", "Pros", "Cons"],
          [
            [
              "example.com/uk/",
              "Consolidated authority, cheapest to run",
              "Weaker local signal than a ccTLD",
            ],
            [
              "uk.example.com",
              "Clear separation, flexible hosting",
              "Authority splits across subdomains",
            ],
            [
              "example.co.uk",
              "Strongest local trust signal",
              "Expensive, slow to build authority per domain",
            ],
          ],
        ),
      ),
      s(
        "hreflang",
        "Hreflang rules that prevent errors",
        l("Get these right", [
          "Every page references itself plus every alternate — links must be bidirectional",
          "Use language-region codes correctly: en-GB, en-AE, en-US, not uk or uae",
          "Include an x-default for the global or language-selector page",
          "Keep canonical tags self-referencing; never canonicalise across locales",
          "Deliver hreflang consistently in HTML head or XML sitemap, not both partially",
        ]),
      ),
      s(
        "localise",
        "Localisation beyond translation",
        l("What to adapt", [
          "Currency, tax display and payment methods buyers expect locally",
          "Spelling and idiom — optimise, optimise vs optimize matters for query match",
          "Local proof: case studies, testimonials and phone numbers from that market",
          "Search behaviour: UAE audiences often search in English with Arabic brand terms",
        ]),
      ),
    ],
    faqs: [
      {
        question: "Do I need separate sites per country?",
        answer:
          "Rarely. Subdirectories with hreflang serve most brands better because they consolidate authority and are cheaper to maintain.",
      },
      {
        question: "Is hreflang a ranking factor?",
        answer:
          "No, it is a targeting signal. It tells Google which version to show which audience, preventing wrong-locale results and duplication issues.",
      },
      {
        question: "Can I use automatic translation?",
        answer:
          "Only as a first draft. Machine translation without local review produces awkward phrasing that fails to match real local search queries.",
      },
      {
        question: "Should I redirect users by IP?",
        answer:
          "No. Auto-redirects can block crawlers from other locales. Offer a dismissible suggestion banner instead.",
      },
      {
        question: "How long does international SEO take?",
        answer:
          "Expect 4-8 months per new market, since local authority and links must be built even when your home domain is strong.",
      },
    ],
  },
  {
    slug: "ai-visibility-tracking",
    title: "How to Track Your Brand's Visibility Inside AI Assistants",
    h1: "How to track brand visibility inside AI assistants",
    category: "AI Search",
    date: "2026-03-25",
    readMinutes: 7,
    image: "/images/ai-cpu-circuit-board.webp",
    description:
      "A practical, tool-agnostic method for measuring how often ChatGPT, Gemini, Perplexity, Claude and AI Overviews mention your brand — and what to do with the data.",
    answer:
      "Track AI visibility with a fixed prompt set of 30-100 buyer questions, run monthly across ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews, recording whether your brand is named, linked, described accurately and which competitors appear. Citation share and description accuracy are the two metrics that matter.",
    sections: [
      s(
        "build",
        "Build the prompt set",
        steps([
          {
            title: "Cover the funnel",
            text: "Category questions, comparison questions, 'best X for Y' questions and brand-specific questions.",
          },
          {
            title: "Use real language",
            text: "Write prompts the way customers speak, not keyword strings.",
          },
          {
            title: "Lock the wording",
            text: "Never change a prompt once tracking starts, or the trend becomes meaningless.",
          },
          {
            title: "Include competitor prompts",
            text: "So you can measure share of voice, not just presence.",
          },
        ]),
      ),
      s(
        "record",
        "What to record",
        tbl(
          ["Field", "Why"],
          [
            ["Cited (yes/no)", "Core citation share metric"],
            ["Linked (yes/no)", "Whether the mention can send traffic"],
            ["Position in answer", "Earlier mentions carry more influence"],
            ["Description accuracy", "Detects factual errors the model repeats"],
            ["Competitors named", "Reveals which sources the model trusts today"],
          ],
        ),
      ),
      s(
        "act",
        "Turning data into action",
        l("Response playbook", [
          "Absent everywhere on a topic → publish the definitive answer-first page for it",
          "Competitor cited instead → analyse the passage the model quotes and beat its clarity",
          "Described inaccurately → fix your own facts, then get third-party sources corrected",
          "Cited but not linked → strengthen entity signals so the brand name resolves to your domain",
          "Referral traffic from AI tools → segment it in GA4 and watch conversion quality",
        ]),
      ),
    ],
    faqs: [
      {
        question: "Which AI assistants should I track?",
        answer:
          "ChatGPT, Google Gemini, Google AI Overviews, Perplexity and Claude cover the large majority of assistant usage today.",
      },
      {
        question: "How often should I run the prompt set?",
        answer:
          "Monthly is the right cadence. Weekly produces noise, quarterly misses the effect of content changes.",
      },
      {
        question: "Do AI answers send real traffic?",
        answer:
          "Yes, though volumes are smaller than search. The traffic converts well because the visitor arrives pre-qualified by the recommendation.",
      },
      {
        question: "Are AI answers consistent between runs?",
        answer:
          "No, they vary. That is why a fixed prompt set run at a regular cadence, tracked as a rate over time, is more reliable than one-off checks.",
      },
      {
        question: "Can I automate this tracking?",
        answer:
          "Partly, with API-based scripts or commercial visibility tools, but manual spot checks remain necessary because consumer interfaces differ from API responses.",
      },
    ],
  },
  {
    slug: "small-business-seo-budget",
    title: "SEO for Small Business Websites: Where to Start | AVR Web",
    h1: "SEO on a small budget: the first 90 days with $100 a month",
    category: "SEO",
    date: "2026-04-02",
    readMinutes: 8,
    image: "/images/freelancer-laptop.webp",
    description:
      "New to SEO? Learn what small business owners should fix first on their website to get found on Google, from page titles to local listings and more.",
    keywords: "seo for small business website, seo for small business owners",
    answer:
      "With $100/month, spend month one on technical fixes and Google Business Profile, month two on your three highest-intent service pages with answer-first content and schema, and month three on reviews, local citations and two supporting articles. Prioritise conversion-ready pages over blog volume.",
    sections: [
      s(
        "month1",
        "Month 1: foundations",
        l("Deliverables", [
          "Fix crawl, indexation and mobile usability blockers",
          "Claim and fully populate the Google Business Profile",
          "Install GA4 and Search Console with conversion tracking",
          "Write titles and meta descriptions for the top 10 pages",
          "Add Organization and LocalBusiness schema",
        ]),
      ),
      s(
        "month2",
        "Month 2: money pages",
        l("Deliverables", [
          "Rewrite your three highest-intent service pages with a 50-word answer block",
          "Add pricing guidance — the single most requested missing information",
          "Add 8-10 FAQs per page with FAQPage schema",
          "Internal links from the homepage and blog into those pages",
        ]),
      ),
      s(
        "month3",
        "Month 3: proof and reach",
        l("Deliverables", [
          "Review generation flow via SMS or WhatsApp after each job",
          "Ten accurate local citations on the directories that matter in your market",
          "Two supporting articles answering the questions customers ask before buying",
          "First measurement review — rankings, calls, forms, and what to double down on",
        ]),
      ),
      s(
        "skip",
        "What to skip at this budget",
        call(
          "Not yet",
          "Skip paid link packages, daily blogging, video production and enterprise tools. At $100/month, precision on a handful of pages beats spreading thin across a content calendar.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Is $100 a month enough for SEO?",
        answer:
          "For a single-location local business, yes — it funds focused monthly work. For competitive national or e-commerce terms it is not; expect $300-600/month there.",
      },
      {
        question: "What should I do myself to save money?",
        answer:
          "Collect reviews, supply photos, answer our subject-matter questions and publish updates. Those cost you time and save agency hours.",
      },
      {
        question: "When will I see leads?",
        answer:
          "Local businesses commonly see the first additional calls within 6-10 weeks, mostly from Business Profile and map-pack improvements.",
      },
      {
        question: "Should I buy backlinks with a small budget?",
        answer:
          "No. At this budget, cheap links are the fastest way to waste money and risk penalties. Reviews and citations return more.",
      },
      {
        question: "Can I pause and resume later?",
        answer:
          "You can, and rankings usually hold for a while, but competitors keep publishing — restarting after long gaps costs more than staying consistent.",
      },
    ],
  },
  {
    slug: "website-redesign-without-losing-rankings",
    title: "How to Redesign a Website Without Losing Rankings",
    h1: "How to redesign your website without losing rankings",
    category: "Web Design",
    date: "2026-04-10",
    readMinutes: 9,
    image: "/images/web-development-technology-stack.webp",
    description:
      "The migration checklist that protects organic traffic through a redesign or replatform: URL inventory, redirect mapping, content parity, staged launch and post-launch monitoring.",
    answer:
      "To redesign without losing rankings, inventory every existing URL and its traffic, keep URLs identical wherever possible, map 1:1 redirects for the rest, preserve title tags, headings, content depth and schema, launch in a staged window, then monitor Search Console and rankings daily for six weeks.",
    sections: [
      s(
        "before",
        "Before launch",
        steps([
          {
            title: "Full URL inventory",
            text: "Crawl the live site and export Search Console data so no ranking URL is missed.",
          },
          {
            title: "Content parity audit",
            text: "Redesigns lose traffic mostly by deleting text. Keep the depth even if the design is lighter.",
          },
          {
            title: "Redirect map",
            text: "One-to-one 301s. Never mass-redirect to the homepage — Google treats it as a soft 404.",
          },
          {
            title: "Preserve on-page elements",
            text: "Titles, H1s, internal links, alt text, canonical and schema carried across.",
          },
          {
            title: "Staging checks",
            text: "Noindex staging, then verify it is removed at launch — the classic catastrophic mistake.",
          },
        ]),
      ),
      s(
        "launch",
        "Launch week",
        l("Checklist", [
          "Deploy in a low-traffic window and verify redirects with a live crawl within the hour",
          "Submit updated XML sitemaps and request indexing on key templates",
          "Confirm analytics and conversion tracking still fire",
          "Check Core Web Vitals on the new templates immediately",
          "Watch server logs for crawl errors and 5xx spikes",
        ]),
      ),
      s(
        "after",
        "Six weeks after",
        p(
          "Expect a temporary fluctuation of 5-15% while Google reprocesses the site. If traffic has not recovered within six weeks, the cause is almost always missing redirects, lost content or a blocked resource — audit in that order.",
        ),
      ),
    ],
    faqs: [
      {
        question: "Will a redesign always drop my rankings?",
        answer:
          "No. A well-executed migration usually sees a brief fluctuation and then recovery, often above the previous baseline if speed and content improve.",
      },
      {
        question: "Should I change URLs during a redesign?",
        answer:
          "Only when necessary. Every changed URL costs some equity in transfer, so keep the existing structure unless it is genuinely harmful.",
      },
      {
        question: "How long should redirects stay in place?",
        answer:
          "Permanently where possible, and at minimum one year. Old links keep sending traffic long after the change.",
      },
      {
        question: "When should I involve SEO in a redesign?",
        answer:
          "At the wireframe stage. Fixing SEO after a design is signed off is far more expensive than designing with it in mind.",
      },
      {
        question: "What is the most common migration mistake?",
        answer:
          "Launching with the staging noindex tag still in place, followed closely by redirecting everything to the homepage.",
      },
    ],
  },
  adsSeoLlmoBlogSeed,
  citationsGbpBlogSeed,
  n8nAiAgentsBlogSeed,
  modernWebDesignBlogSeed,
  llmoSeoBlogSeed,
  aiSeoBlogSeed,
  aeoSeoBlogSeed,
  geoSeoBlogSeed,
  llmSeoBlogSeed,
];

function blogPostPage(seed: BlogSeed): PageContent {
  return {
    slug: `/blog/${seed.slug}`,
    title: seed.title,
    h1: seed.h1,
    eyebrow: `${seed.category} · ${new Date(seed.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · ${seed.readMinutes} min read`,
    description: seed.description,
    keywords: seed.keywords,
    answer: seed.answer,
    hero: { image: seed.image, imageAlt: seed.h1 },
    breadcrumb: [
      { label: "Home", to: "/" },
      { label: "Blog", to: "/blog" },
      { label: seed.category, to: `/blog/${seed.slug}` },
    ],
    related: [
      { label: "All articles", to: "/blog" },
      { label: "AI SEO services", to: "/ai-seo" },
      { label: "SEO services", to: "/seo-services" },
      { label: "Pricing", to: "/pricing" },
    ],
    author: seed.author || {
      name: "AVR Web Consulting Team",
      role: "SEO & AI Visibility Experts",
      bio: "Our team of senior strategists and technical experts help brands rank on Google and get cited by AI assistants.",
      social: {},
    },
    sections: seed.sections,
    faqs: seed.faqs,
  };
}

export const blogPosts: PageContent[] = blogSeeds.map(blogPostPage);

export const blogPostBySlug: Record<string, PageContent> = Object.fromEntries(
  blogSeeds.map((seed, i) => [seed.slug, blogPosts[i]!]),
);

export const blogSeedBySlug: Record<string, BlogSeed> = Object.fromEntries(
  blogSeeds.map((seed) => [seed.slug, seed]),
);

export const blogHub: PageContent = {
  slug: "/blog",
  title: "SEO & AI Search Blog — Playbooks and Guides | AVR Web Consulting",
  h1: "AVR blog: SEO and AI search playbooks",
  eyebrow: "Blog",
  description:
    "In-depth guides on AI SEO, AEO, GEO, technical SEO, local SEO, content, paid ads and web performance from the AVR Web Consulting team — written for practitioners, not for word counts.",
  answer:
    "The AVR Web Consulting blog publishes practitioner guides on AI SEO, answer engine optimisation, technical SEO, local SEO in India, e-commerce SEO, paid ads efficiency and web performance. Every article opens with a direct answer and includes checklists you can apply the same day.",
  hero: {
    image: "/images/laptop-mint.webp",
    imageAlt: "SEO & AI Search Blog — Playbooks and Guides | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Articles", value: `${blogSeeds.length}` },
    { label: "Topics", value: "6" },
    { label: "Format", value: "Answer-first" },
    { label: "Updated", value: "Monthly" },
  ],
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Blog", to: "/blog" },
  ],
  related: [
    { label: "FAQs", to: "/faqs" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "AI SEO", to: "/ai-seo" },
    { label: "Contact", to: "/contact" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for SEO & AI Search Blog — Playbooks and Guides",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "index",
      heading: "All articles",
      blocks: [
        tbl(
          ["Article", "Topic", "Read"],
          blogSeeds.map((b) => [b.h1, b.category, `${b.readMinutes} min`]),
        ),
      ],
    },
  ],
  faqs: [
    {
      question: "How often do you publish new articles?",
      answer:
        "We publish two to four in-depth articles a month and update older guides whenever search or AI behaviour changes materially.",
    },
    {
      question: "Who writes the AVR blog?",
      answer:
        "The strategists and developers who deliver client work. Every article is written from live campaign experience, not summarised from other blogs.",
    },
    {
      question: "Is the content AI-generated?",
      answer:
        "No. We use AI for research and editing support, but every article is written and fact-checked by a human practitioner.",
    },
    {
      question: "Can I republish your articles?",
      answer:
        "You may quote short excerpts with a link back. Full republication requires written permission.",
    },
    {
      question: "Do you cover topics on request?",
      answer:
        "Yes. Send a question through the contact page and if it is broadly useful we will write it up.",
    },
    {
      question: "Which article should I read first?",
      answer:
        "Start with 'What is AI SEO' for the strategic picture, then the technical SEO checklist for immediate actions on your own site.",
    },
    {
      question: "Do you offer a newsletter?",
      answer:
        "We send a short monthly digest of new articles and notable search or AI changes. Ask to be added when you contact us.",
    },
    {
      question: "Are the tactics safe for my site?",
      answer:
        "Yes. Everything we publish follows search engine guidelines — we do not document manipulative tactics.",
    },
    {
      question: "Do you cover markets outside India?",
      answer:
        "Yes. Our guides cover US, UK, UAE and European search behaviour alongside Indian markets.",
    },
    {
      question: "Can AVR implement what these guides describe?",
      answer:
        "Yes. The guides document the exact processes we run for clients with customized plans. Request an audit to start.",
    },
  ],
};
