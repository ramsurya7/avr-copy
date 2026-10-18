import type { PageContent } from "@/content/types";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("Content Marketing", "/content-marketing")];

export const contentMarketingHub: PageContent = {
  slug: "/content-marketing",
  title: "Content Marketing Services — Answer-First Content | AVR Web Consulting",
  h1: "Content marketing written for readers and retrievable by AI",
  description:
    "Answer-first blogging, copywriting, guest posting and manual link building from AVR Web Consulting. Content built to rank in Google and get quoted by ChatGPT, Gemini and AI Overviews.",
  eyebrow: "Content Marketing",
  serviceName: "Content Marketing",
  answer:
    "AVR Web Consulting produces answer-first content: every page opens with a 40–60 word direct answer, then delivers depth through structured sections, tables, steps and FAQs. That shape ranks in Google and is the exact format large language models extract and cite when answering buyer questions.",
  hero: {
    image: "/images/seo-content-marketing.webp",
    imageAlt: "Content Marketing Services — Answer-First Content | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Words / article", value: "1,500–3,000" },
    { label: "Guest posts from", value: "$20" },
    { label: "Turnaround", value: "5 days" },
    { label: "Human-written", value: "100%" },
  ],
  breadcrumb: base,
  related: [
    { label: "Blogging & copywriting", to: "/content-marketing/blogging-copywriting" },
    {
      label: "Guest posting & link building",
      to: "/content-marketing/guest-posting-link-building",
    },
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
            "Expert strategies tailored for Content Marketing Services — Answer-First Content",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "answer-first",
      heading: "Why answer-first content wins twice",
      blocks: [
        {
          kind: "paragraph",
          text: "Traditional SEO content buries the answer under an introduction. Answer engines and language models do the opposite: they scan for a clean, self-contained statement that resolves the query, then look for supporting structure. Content written answer-first satisfies impatient human readers and machine extractors in the same draft.",
        },
        {
          kind: "table",
          head: ["Element", "Human benefit", "Machine benefit"],
          rows: [
            [
              "40–60 word opening answer",
              "Instant clarity",
              "Clean extractable snippet for AI answers",
            ],
            [
              "Descriptive H2/H3 questions",
              "Easy scanning",
              "Passage-level retrieval matches the query",
            ],
            [
              "Comparison tables",
              "Faster decisions",
              "Structured facts models can restate accurately",
            ],
            ["Numbered steps", "Actionable guidance", "Sequence preserved in generated summaries"],
            ["FAQ block with schema", "Objections handled", "FAQPage JSON-LD feeds answer engines"],
          ],
        },
      ],
    },
    {
      id: "services",
      heading: "What we produce",
      blocks: [
        {
          kind: "list",
          items: [
            "Pillar pages and topic clusters mapped to your commercial keywords",
            "Blog articles, 1,500–3,000 words, human-written and fact-checked",
            "Landing page and service page copy tuned for conversion",
            "Product descriptions and category copy for e-commerce catalogues",
            "FAQ libraries with FAQPage schema for each service and location",
            "Guest posts and digital PR placements on real, indexed publications",
          ],
        },
        {
          kind: "callout",
          title: "No auto-generated filler",
          text: "AI helps us research and outline. Every published sentence is written and reviewed by a human, because thin generated content is exactly what both Google's helpful content systems and LLM citation selection filter out.",
        },
      ],
    },
    {
      id: "process",
      heading: "Our content process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Question mining",
              text: "We pull real queries from search data, People Also Ask, forums, sales calls and what AI assistants currently say about your category.",
            },
            {
              title: "Brief",
              text: "Target query, search intent, required entities, competitor gaps, internal links and the exact answer statement to lead with.",
            },
            {
              title: "Draft",
              text: "Written by a subject-aware human writer, structured for passage retrieval, with sources cited where claims are checkable.",
            },
            {
              title: "Optimise",
              text: "Schema, internal linking, image alt text, meta title and description, and an FAQ block relevant to that page only.",
            },
            {
              title: "Measure",
              text: "Rankings, impressions, conversions and AI-citation checks across ChatGPT, Gemini and Perplexity 30 days after publication.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does content marketing cost?",
      answer:
        "Article packages start around $250 per month for four optimised posts, with pillar pages and multi-cluster programmes quoted by scope. Guest post placements start at $20 depending on the authority and traffic of the host site.",
    },
    {
      question: "Do you use AI to write the content?",
      answer:
        "We use AI for research, clustering and outlining, never for final prose. Every published sentence is human-written and edited, which is why our pages continue to perform through helpful-content updates that flattened bulk-generated sites.",
    },
    {
      question: "How long should a blog post be?",
      answer:
        "Long enough to fully answer the question and no longer. In practice that is 1,200–1,800 words for a focused how-to and 2,500–3,500 for a pillar page. Padding hurts, because it dilutes the passages an answer engine would otherwise extract.",
    },
    {
      question: "How often should we publish?",
      answer:
        "Four to eight substantial pieces a month builds topical authority at a sensible pace for most businesses. Consistency and internal linking within a cluster matter more than raw output volume.",
    },
    {
      question: "Will content help me appear in ChatGPT answers?",
      answer:
        "It is the main lever. Language models cite sources that state facts plainly, structure them clearly and are corroborated elsewhere. Answer-first pages plus schema plus consistent brand facts across the web is what moves you into generated answers.",
    },
    {
      question: "Do you write in industry-specific niches?",
      answer:
        "Yes — healthcare, SaaS, legal, real estate, education, manufacturing, travel and e-commerce among others. Technical or regulated niches get a subject-matter review round with your team before publication.",
    },
    {
      question: "Who owns the content?",
      answer:
        "You do, fully and permanently, from the moment it is delivered. There are no licensing terms and nothing is reused for another client.",
    },
    {
      question: "Can you refresh existing content?",
      answer:
        "Yes, and it is often the fastest win available. Rewriting existing pages answer-first, adding schema, updating statistics and consolidating cannibalising URLs frequently lifts traffic faster than publishing anything new.",
    },
    {
      question: "How do you handle keyword research?",
      answer:
        "We map keywords by intent — informational, comparison, commercial and transactional — then assign each cluster to a page type so pages do not compete with each other. Paid search data, where available, tells us which terms actually convert.",
    },
    {
      question: "What reporting do I get?",
      answer:
        "Monthly reporting covering published pieces, rankings and impressions per target query, conversions attributed to content, and AI-visibility checks showing whether assistants now mention or cite your brand for tracked prompts.",
    },
  ],
};

export const bloggingCopywriting: PageContent = {
  slug: "/content-marketing/blogging-copywriting",
  title: "SEO Content Writing Services for Your Website | AVR Web",
  h1: "Blogging and copywriting that ranks, converts and gets cited",
  description:
    "Search-friendly articles and web content written manually and optimized for your target keywords. Order SEO content writing from AVR Web Consulting.",
  keywords: "seo content writing service, seo content",
  eyebrow: "Blogging & Copywriting",
  serviceName: "Blogging and Copywriting",
  answer:
    "AVR Web Consulting writes blog articles, pillar pages, service copy and product descriptions using an answer-first structure: a direct opening answer, scannable question headings, tables, steps and a page-specific FAQ block with schema. Every piece is written by a human and reviewed for factual accuracy before publication.",
  hero: {
    image: "/images/web-copywriting-illustration.webp",
    imageAlt: "Blogging & Copywriting Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "From", value: "$250/mo" },
    { label: "Turnaround", value: "5 days" },
    { label: "Revisions", value: "2 free" },
    { label: "Plagiarism", value: "0%" },
  ],
  breadcrumb: [...base, crumb("Blogging & Copywriting", "/content-marketing/blogging-copywriting")],
  related: [
    {
      label: "Guest posting & link building",
      to: "/content-marketing/guest-posting-link-building",
    },
    { label: "Answer Engine Optimization", to: "/ai-seo/answer-engine-optimization" },
    { label: "SEO services", to: "/seo-services" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Blogging & Copywriting Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "formats",
      heading: "Content formats we write",
      blocks: [
        {
          kind: "table",
          head: ["Format", "Typical length", "Primary job"],
          rows: [
            ["Pillar page", "2,500–3,500 words", "Own the head term and link to the cluster"],
            [
              "How-to article",
              "1,200–1,800 words",
              "Capture informational intent, earn featured snippets",
            ],
            [
              "Comparison / alternatives",
              "1,500–2,200 words",
              "Win the decision-stage query and AI recommendations",
            ],
            ["Service page", "800–1,400 words", "Convert commercial intent into enquiries"],
            [
              "Case study",
              "700–1,200 words",
              "Supply the proof AI models and buyers both look for",
            ],
            ["Product description", "150–350 words", "Rank in Shopping and convert on the page"],
          ],
        },
      ],
    },
    {
      id: "structure",
      heading: "The structure behind every piece",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Direct answer",
              text: "40–60 words at the top, self-contained enough to be quoted without the surrounding page.",
            },
            {
              title: "Context",
              text: "Why the question matters now, with a concrete number or example rather than a generic preamble.",
            },
            {
              title: "Depth",
              text: "Question-shaped H2s so each section can be retrieved independently by a search or AI system.",
            },
            {
              title: "Evidence",
              text: "Tables, data points, screenshots and named sources — the things models prefer to cite.",
            },
            {
              title: "Action",
              text: "A next step that fits the reader's stage, not a hard sell on an informational query.",
            },
            {
              title: "FAQ",
              text: "Six to ten page-specific questions with FAQPage schema attached.",
            },
          ],
        },
        {
          kind: "callout",
          title: "Editorial standard",
          text: "No filler introductions, no 'in today's fast-paced world', no invented statistics. Every claim is either sourced, measurable or removed.",
        },
      ],
    },
    {
      id: "conversion",
      heading: "Copywriting for conversion, not just traffic",
      blocks: [
        {
          kind: "paragraph",
          text: "A page that ranks and never converts is an expensive hobby. Service and landing copy is written from your buyer's objections outward: what they are worried about, what proof settles it, what the price signal is, and what happens after they enquire. We interview your sales team before writing anything commercial.",
        },
        {
          kind: "list",
          title: "What we change most often on existing pages",
          items: [
            "Headlines that describe the company instead of the customer's outcome",
            "Missing price signals, which drive the highest-intent visitors to bounce and compare",
            "Proof buried at the bottom of the page instead of beside the claim",
            "Forms asking for eight fields when three would do",
            "No answer to the obvious next question, forcing a return to search",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much do you charge per article?",
      answer:
        "Packages start at $250 per month for four optimised articles. Individual long-form pillar pages with original research or interviews are quoted separately, typically in the $150–$300 range per piece depending on depth.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "First drafts land within five business days of an approved brief. Ongoing retainers run on a published calendar so you always know what is coming and when it goes live.",
    },
    {
      question: "Do you optimise the content for keywords?",
      answer:
        "Yes. Each piece targets one primary query plus a cluster of secondary and question variants, with natural placement in the title, opening answer, headings and body — never keyword stuffing, which now actively suppresses rankings.",
    },
    {
      question: "Will the content be original?",
      answer:
        "Every piece is written from scratch and checked for plagiarism before delivery. We never reuse work between clients, even within the same industry.",
    },
    {
      question: "Can you match our brand voice?",
      answer:
        "Yes. We build a short voice guide from your existing material and sales calls, covering tone, vocabulary, forbidden phrases and how technical to go. The first two pieces are calibration; after that the voice is consistent.",
    },
    {
      question: "Do you publish the content for us?",
      answer:
        "We can. For WordPress, Webflow, Shopify and most CMS platforms we handle formatting, images, internal links, meta fields and schema, then send you a preview link before publishing.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Two rounds of revisions are included on every piece. In practice most articles need one light pass once the voice guide is established.",
    },
    {
      question: "Do you write content that AI can cite?",
      answer:
        "That is the default structure we write in: direct answers, question headings, factual tables and schema. We also check after 30 days whether assistants have started referencing the page for its target prompts.",
    },
    {
      question: "Can you write technical or medical content?",
      answer:
        "Yes, with a subject-matter review loop. Regulated topics such as healthcare, finance and legal are drafted by writers experienced in the field and then reviewed by your qualified staff before publication.",
    },
    {
      question: "What do you need from us to start?",
      answer:
        "Your target keywords or topics if you have them, access to a sales call recording or two, any existing brand guide, and CMS access if you want us to publish. If you do not have keywords yet, our research covers that in the first week.",
    },
  ],
};

export const guestPostingLinkBuilding: PageContent = {
  slug: "/content-marketing/guest-posting-link-building",
  title: "Manual Link Building Services | AVR Web Consulting",
  h1: "Guest posting and manual link building on real, indexed sites",
  description:
    "Manual link building services with niche-relevant, Google-indexed backlinks that support your SEO. See what is included and request a quote today.",
  keywords: "link building services, best link building service, seo and backlinks",
  eyebrow: "Link Building",
  serviceName: "Guest Posting and Link Building",
  answer:
    "AVR Web Consulting builds links manually through editorial guest posts, niche placements and digital PR on real, indexed websites with genuine traffic. Every placement is reported with the live URL, domain metrics and anchor text. We do not use private blog networks, automated tools or link farms.",
  hero: {
    image: "/images/link-building.webp",
    imageAlt: "Guest Posting & Manual Link Building from $20 | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Placements from", value: "$20" },
    { label: "Manual outreach", value: "100%" },
    { label: "Live in", value: "7–21 days" },
    { label: "PBNs used", value: "0" },
  ],
  breadcrumb: [
    ...base,
    crumb("Guest Posting & Link Building", "/content-marketing/guest-posting-link-building"),
  ],
  related: [
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "Blogging & copywriting", to: "/content-marketing/blogging-copywriting" },
    { label: "AI citations & mentions", to: "/ai-seo/ai-citations-mentions" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Guest Posting & Manual Link Building from $20",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-we-do",
      heading: "How we earn links",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Prospect",
              text: "We shortlist sites by topical relevance, organic traffic, indexation and outbound link hygiene — not by domain rating alone.",
            },
            {
              title: "Vet",
              text: "Manual review of each candidate: does it publish real editorial, does it rank for anything, does it sell links to unrelated casinos?",
            },
            {
              title: "Pitch",
              text: "Personalised outreach with a topic angle that fits that publication's audience, not a template blast.",
            },
            {
              title: "Write",
              text: "A genuinely useful article written by our team, with one contextual link placed where it makes editorial sense.",
            },
            {
              title: "Report",
              text: "Live URL, publication date, traffic and authority metrics, anchor text and target page, delivered in a running sheet.",
            },
          ],
        },
      ],
    },
    {
      id: "quality-filter",
      heading: "Our quality filter",
      blocks: [
        {
          kind: "table",
          head: ["Signal", "We accept", "We reject"],
          rows: [
            [
              "Organic traffic",
              "Consistent, from relevant countries",
              "Zero or purely bot traffic",
            ],
            ["Indexation", "Site and pages indexed in Google", "Deindexed or noindexed sections"],
            [
              "Topic fit",
              "Related industry or adjacent audience",
              "General 'write for us' link farms",
            ],
            ["Outbound profile", "Selective, editorial links", "Hundreds of unrelated paid links"],
            ["Content standard", "Human-written, edited", "Auto-spun or scraped articles"],
          ],
        },
        {
          kind: "callout",
          title: "Why we refuse cheap bulk links",
          text: "A thousand junk links can be bought in an afternoon and can take a year to disavow. Safe, slow authority is cheaper than recovery — and AI models weigh the credibility of the sites mentioning you, so junk mentions actively hurt AI visibility too.",
        },
      ],
    },
    {
      id: "link-types",
      heading: "Link types we build",
      blocks: [
        {
          kind: "list",
          items: [
            "Editorial guest posts on niche-relevant blogs and industry publications",
            "Digital PR mentions tied to data, surveys or expert commentary",
            "Resource and roundup placements where your page genuinely belongs",
            "Business directory and manual citation links for local authority",
            "Podcast, interview and expert-quote placements that create brand mentions AI systems read",
            "Internal link architecture rebuilds — the cheapest authority you already own",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a guest post cost?",
      answer:
        "Placements start at $20 on smaller niche blogs and rise with the host site's traffic and authority — mid-tier industry publications typically run $60–$150. You see the site, metrics and price before we commit to anything.",
    },
    {
      question: "Is guest posting still effective in 2026?",
      answer:
        "Yes, when the placement is genuinely editorial on a site people actually read. What no longer works is mass-published filler on link farms, which search engines discount and AI models ignore as a credibility signal.",
    },
    {
      question: "Are your links safe from Google penalties?",
      answer:
        "We build the way a PR team would: relevant sites, natural anchor text distribution, gradual pace and no networks. Clients have not experienced manual actions from our placements, and every link is disclosed to you.",
    },
    {
      question: "How many links do I need per month?",
      answer:
        "Most competitive campaigns run four to ten quality placements a month. The right number depends on competitor link velocity in your niche, which we measure in the audit rather than guess.",
    },
    {
      question: "Do you use PBNs?",
      answer:
        "Never. Private blog networks are the single fastest route to a manual action, and their footprints are increasingly easy to detect. Every site we place on is an independent publication.",
    },
    {
      question: "How long until links affect rankings?",
      answer:
        "Links usually take four to twelve weeks to show measurable ranking impact, as the pages need to be crawled, evaluated and trusted. Competitive terms need consistent link acquisition over several months, not a single burst.",
    },
    {
      question: "Do you write the guest post content?",
      answer:
        "Yes. Our writers produce the article to the host publication's editorial standards, with the link placed contextually. You approve the topic and can review the draft before submission.",
    },
    {
      question: "Can I choose the anchor text?",
      answer:
        "You can specify preferences, and we will advise on distribution. Over-optimised exact-match anchors are one of the clearest spam signals, so we keep branded and natural-phrase anchors as the majority.",
    },
    {
      question: "Do links help AI visibility?",
      answer:
        "Yes, indirectly but importantly. Language models weigh how often and how credibly a brand is mentioned across the web. Editorial placements create the corroborating sources that make an assistant comfortable recommending you by name.",
    },
    {
      question: "What reporting do I receive?",
      answer:
        "A live sheet listing every placement: host site, live URL, publication date, organic traffic estimate, authority metrics, anchor text and destination page — updated as each link goes live, not summarised at the end of the month.",
    },
  ],
};

export const contentPages = [contentMarketingHub, bloggingCopywriting, guestPostingLinkBuilding];
