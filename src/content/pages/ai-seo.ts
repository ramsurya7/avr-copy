import type { PageContent } from "@/content/types";
import aiEngines from "@/assets/ai-engines.png.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";
import aiRetrieval from "@/assets/ai-retrieval.jpg.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("AI SEO", "/ai-seo")];

const commonRelated = [
  { label: "Answer Engine Optimization", to: "/ai-seo/answer-engine-optimization" },
  { label: "LLM SEO", to: "/ai-seo/llm-seo" },
  { label: "AI visibility", to: "/ai-seo/ai-visibility" },
];

export const aiSeoHub: PageContent = {
  slug: "/ai-seo",
  title: "AI SEO Optimization for Smarter Content | AVR Web Consulting",
  h1: "AI SEO services: get cited by ChatGPT, Gemini, Perplexity and AI Overviews",
  description:
    "Use AI to sharpen your SEO: smarter content optimization and search-ready pages that support rankings. Talk to AVR Web Consulting about AI SEO.",
  keywords: "ai seo optimization, ai content optimization",
  eyebrow: "AI SEO",
  serviceName: "AI SEO",
  answer:
    "AI SEO is the practice of making a brand retrievable and quotable inside AI answers. AVR Web Consulting combines answer engine optimisation, generative engine optimisation, LLM SEO, LLMO and structured data engineering so ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews cite your business.",
  hero: {
    image: "/images/llm-seo-services.webp",
    imageAlt: "AI SEO Services — AEO, GEO, LLM SEO & LLMO | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Engines tracked", value: "6+" },
    { label: "Baseline audit", value: "7 days" },
    { label: "Schema types", value: "12+" },
    { label: "Reporting", value: "Monthly citations" },
  ],
  breadcrumb: [crumb("Home", "/"), crumb("AI SEO", "/ai-seo")],
  related: [
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "Content marketing", to: "/content-marketing" },
    { label: "AI SEO pricing", to: "/pricing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for AI SEO Services — AEO, GEO, LLM SEO & LLMO",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "shift",
      heading: "Search did not disappear — it changed shape",
      blocks: [
        {
          kind: "paragraph",
          text: "A growing share of commercial research now ends inside an AI answer. The user asks a question, an assistant synthesises a response from a handful of retrieved sources, and only those sources get named. Ranking tenth is irrelevant if the model never retrieves you; being quoted once can send higher-intent traffic than a page of blue links.",
        },
        {
          kind: "paragraph",
          text: "AI SEO is not a replacement for SEO. Assistants retrieve from search indexes, structured data, licensed datasets and their own crawls, so classic fundamentals — crawlability, authority, clear content — remain the entry ticket. What changes is the format of content, the emphasis on entities, and the way success is measured.",
        },
      ],
    },
    {
      id: "disciplines",
      heading: "The five disciplines inside AI SEO",
      blocks: [
        {
          kind: "table",
          head: ["Discipline", "Question it answers", "Primary work"],
          rows: [
            [
              "AEO",
              "Will an answer engine use my answer?",
              "Answer-first formatting, FAQ and HowTo schema, concise definitions",
            ],
            [
              "GEO",
              "Will a generative engine include my brand?",
              "Statistics, quotes, citations and structured comparisons in content",
            ],
            [
              "LLM SEO",
              "Do assistants know and recommend my brand?",
              "Entity building, third-party mentions, consistent descriptions",
            ],
            [
              "LLMO",
              "Can models retrieve my content cleanly?",
              "Chunk-friendly structure, semantic HTML, llms.txt, clean rendering",
            ],
            [
              "AI visibility",
              "Where do I currently appear?",
              "Prompt-set tracking, share-of-answer measurement, gap analysis",
            ],
          ],
        },
      ],
    },
    {
      id: "method",
      heading: "Our AI SEO method",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Prompt baseline",
              text: "We build a prompt set of 100–300 real buyer questions and record who is cited today across ChatGPT, Gemini, Perplexity, Copilot and AI Overviews.",
            },
            {
              title: "Entity audit",
              text: "We check how consistently your brand, services and people are described across your site, directories, Wikipedia-class sources and social profiles.",
            },
            {
              title: "Retrieval engineering",
              text: "Server-rendered HTML, JSON-LD entity graph, semantic structure, llms.txt and crawler permissions so models can actually read you.",
            },
            {
              title: "Answer content",
              text: "Definitions, comparisons, pricing transparency, statistics and FAQs written in the format assistants quote.",
            },
            {
              title: "Off-site authority",
              text: "Mentions in the roundups, directories, forums and publications that assistants retrieve from most for your category.",
            },
            {
              title: "Measure and iterate",
              text: "Monthly re-runs of the prompt set showing citation share, sentiment and which pages the models used.",
            },
          ],
        },
      ],
    },
    {
      id: "who",
      heading: "Who benefits most from AI SEO",
      blocks: [
        {
          kind: "list",
          items: [
            "B2B and SaaS brands whose buyers research with assistants before shortlisting",
            "E-commerce brands competing for product recommendation answers",
            "Professional services where 'best X in Y' prompts drive enquiries",
            "Any business whose competitors already appear in AI answers and they do not",
          ],
        },
        {
          kind: "callout",
          title: "Start with a baseline",
          text: "You cannot improve what you have not measured. Our AI visibility baseline shows exactly which prompts already mention you, which mention competitors, and what the models say about your brand.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is AI SEO?",
      answer:
        "AI SEO is optimisation for AI-powered answer engines. It makes your content retrievable, quotable and attributable so assistants such as ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews name your brand when answering relevant questions.",
    },
    {
      question: "Is AI SEO different from traditional SEO?",
      answer:
        "It overlaps but is not identical. Traditional SEO competes for ranked links; AI SEO competes for inclusion inside a synthesised answer. Content format, entity consistency and structured data matter more, and success is measured in citations rather than positions.",
    },
    {
      question: "Does AI SEO replace normal SEO?",
      answer:
        "No. Most assistants retrieve from live search results, so poor crawlability or weak authority still blocks you. AI SEO is a layer on top of technically sound, authoritative SEO.",
    },
    {
      question: "How do you measure AI visibility?",
      answer:
        "We maintain a prompt set of real buyer questions and run it monthly across the major assistants, recording whether your brand is mentioned, cited with a link, described accurately, and how that compares to competitors.",
    },
    {
      question: "How long does AI SEO take to show results?",
      answer:
        "Retrieval improvements from structured data and content reformatting can appear within 2–6 weeks. Entity and authority work — the part that makes models recommend you unprompted — typically takes three to six months.",
    },
    {
      question: "Can you control what an AI says about my brand?",
      answer:
        "You cannot control it directly, but you can strongly influence it by publishing clear, consistent, well-structured facts about your business and getting those facts repeated on sources the models trust.",
    },
    {
      question: "Should I block AI crawlers?",
      answer:
        "If you want AI visibility, no. Blocking GPTBot, ClaudeBot, PerplexityBot or Google-Extended removes you from those systems. We configure robots.txt deliberately so you allow the engines you want to appear in.",
    },
    {
      question: "What is llms.txt?",
      answer:
        "llms.txt is a plain-text file at the root of a site that summarises what the site offers and links to key pages in a machine-friendly way. It is an emerging convention we implement as part of LLMO work.",
    },
    {
      question: "Does AI SEO work for local businesses?",
      answer:
        "Yes. Prompts like 'best dentist near Dondaparthy' are answered from directories, reviews and structured data, so clean NAP, LocalBusiness schema and review content directly affect whether you are recommended.",
    },
    {
      question: "How much does AI SEO cost?",
      answer:
        "AI SEO packages are priced alongside our SEO retainers and start from a baseline audit; most clients run AI SEO as an add-on layer to an existing SEO programme. See our AI SEO packages page for current tiers.",
    },
  ],
};

export const aeo: PageContent = {
  slug: "/ai-seo/answer-engine-optimization",
  title: "Answer Engine Optimization (AEO) Services | AVR Web Consulting",
  h1: "Answer Engine Optimization: own the answer, not just the ranking",
  description:
    "AEO services that structure your content for AI Overviews, featured snippets and voice answers using answer-first writing, FAQ and HowTo schema, and entity-consistent facts.",
  eyebrow: "AI SEO",
  serviceName: "Answer Engine Optimization",
  answer:
    "Answer Engine Optimization structures content so answer engines can extract a direct, accurate response and attribute it to you. AVR Web Consulting rewrites pages answer-first, adds FAQPage and HowTo schema, and tightens factual consistency so your pages become the quoted source.",
  hero: {
    image: "/images/aeo-hero.jpg",
    imageAlt: "Answer Engine Optimization (AEO) Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Answer blocks", value: "Every page" },
    { label: "FAQs per page", value: "10" },
    { label: "Schema", value: "FAQ + HowTo" },
    { label: "First results", value: "2–6 weeks" },
  ],
  breadcrumb: [...base, crumb("Answer Engine Optimization", "/ai-seo/answer-engine-optimization")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Answer Engine Optimization (AEO) Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "definition",
      heading: "What is Answer Engine Optimization?",
      blocks: [
        {
          kind: "paragraph",
          text: "Answer Engine Optimization (AEO) is the practice of formatting content so an engine can lift a complete, correct answer straight from the page. Answer engines include Google AI Overviews and featured snippets, Bing Copilot, Perplexity, and voice assistants — anywhere a single response replaces a list of links.",
        },
        {
          kind: "list",
          title: "The AEO content pattern",
          items: [
            "Ask the real question as a heading, in the user's words",
            "Answer it in 40–60 words immediately below the heading",
            "Expand with detail, evidence, examples and caveats",
            "Support with a table, list or step sequence where the answer is comparative or procedural",
            "Mark it up with FAQPage, HowTo or QAPage schema",
          ],
        },
      ],
    },
    {
      id: "what-we-do",
      heading: "What our AEO engagement includes",
      blocks: [
        {
          kind: "list",
          items: [
            "Question mining from People Also Ask, Reddit, Quora, support tickets and sales calls",
            "Answer-first rewrite of your highest-intent pages",
            "Ten relevant FAQs per page, written to match real query phrasing",
            "FAQPage, HowTo, QAPage and Speakable schema deployment and validation",
            "Definition and glossary pages that establish your terminology",
            "Fact consistency audit so the same claim never appears in two versions",
            "Snippet and AI Overview monitoring per target question",
          ],
        },
      ],
    },
    {
      id: "measurement",
      heading: "How AEO success is measured",
      blocks: [
        {
          kind: "table",
          head: ["Metric", "What it tells you", "Target trend"],
          rows: [
            [
              "Answer capture rate",
              "Share of tracked questions where you are the quoted source",
              "Up",
            ],
            ["AI Overview presence", "Appearance inside Google AI summaries", "Up"],
            [
              "Zero-click brand exposure",
              "Impressions where your name is shown without a click",
              "Up",
            ],
            [
              "Assisted conversions",
              "Sessions that convert after an AI-referred first touch",
              "Up",
            ],
          ],
        },
        {
          kind: "callout",
          title: "Zero-click is not zero-value",
          text: "Being named in an answer builds preference even without a click. We track brand search volume alongside sessions so the value of answer visibility is visible in reporting.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What does AEO stand for?",
      answer:
        "AEO stands for Answer Engine Optimization — optimising content so answer engines and AI assistants can extract and attribute a direct answer from your page.",
    },
    {
      question: "How is AEO different from SEO?",
      answer:
        "SEO aims to rank a page; AEO aims to have a specific passage selected as the answer. AEO focuses on question phrasing, answer length, factual clarity and schema rather than page-level ranking alone.",
    },
    {
      question: "How long should an answer paragraph be?",
      answer:
        "Between 40 and 60 words works best. It is long enough to be complete and short enough to be lifted whole into a snippet or AI summary without truncation.",
    },
    {
      question: "Does FAQ schema still produce rich results?",
      answer:
        "Google reduced FAQ rich results for most sites, but FAQPage markup remains valuable because AI systems parse it when extracting question-answer pairs. We keep it for retrieval, not for the visual result.",
    },
    {
      question: "How many FAQs should a page have?",
      answer:
        "We standardise on ten genuinely relevant questions per page. Fewer leaves coverage gaps; more usually means padding with questions nobody asks, which dilutes the page.",
    },
    {
      question: "Can AEO help voice search?",
      answer:
        "Yes. Voice assistants read out a single answer, usually sourced from concise, well-structured passages, so the same formatting that wins snippets also wins voice results.",
    },
    {
      question: "What content types work best for AEO?",
      answer:
        "Definitions, comparisons, pricing explanations, step-by-step processes, troubleshooting guides and 'how much / how long / what is' questions all convert well into extractable answers.",
    },
    {
      question: "Do I need to change my whole website?",
      answer:
        "No. We start with the 10–20 pages that carry commercial intent, prove the pattern, then roll it across templates so new content is produced answer-first by default.",
    },
    {
      question: "How quickly does AEO work?",
      answer:
        "Because it depends on re-crawling rather than authority building, AEO often shows movement in two to six weeks — faster than most SEO work.",
    },
    {
      question: "Does AEO conflict with good writing?",
      answer:
        "No. Answer-first writing is simply clear writing: state the conclusion, then support it. Human readers prefer it too, which is why bounce rates usually improve.",
    },
  ],
};

export const geoSeo: PageContent = {
  slug: "/ai-seo/geo-seo",
  title: "GEO — Generative Engine Optimization Services | AVR Web Consulting",
  h1: "Generative Engine Optimization (GEO) for AI-written answers",
  description:
    "GEO services that increase how often generative engines include your brand: citable statistics, expert quotes, structured comparisons, source authority and prompt-level tracking.",
  eyebrow: "AI SEO",
  serviceName: "Generative Engine Optimization",
  answer:
    "Generative Engine Optimization improves how often AI-generated answers include and cite your brand. AVR Web Consulting adds the elements generative engines favour — original statistics, named expert quotes, clear comparisons and authoritative sourcing — then measures citation share prompt by prompt.",
  hero: {
    image: "/images/geo-generative-engine-optimization.webp",
    imageAlt: "GEO — Generative Engine Optimization Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Prompt set", value: "100–300" },
    { label: "Engines", value: "ChatGPT · Gemini · Perplexity" },
    { label: "Content upgrades", value: "Stats + quotes" },
    { label: "Reporting", value: "Citation share" },
  ],
  breadcrumb: [...base, crumb("GEO SEO", "/ai-seo/geo-seo")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for GEO — Generative Engine Optimization Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "definition",
      heading: "What is Generative Engine Optimization?",
      blocks: [
        {
          kind: "paragraph",
          text: "Generative Engine Optimization is the discipline of increasing your presence inside answers written by generative models. Research into generative engines consistently shows that content containing quotable statistics, named expert opinions, clear citations and direct comparisons is included far more often than generic marketing prose.",
        },
        {
          kind: "callout",
          title: "GEO has two meanings",
          text: "In local search, GEO means geographic targeting. In AI search, GEO means Generative Engine Optimization. AVR delivers both — this page covers the generative side; see GEO targeting SEO for the geographic side.",
        },
      ],
    },
    {
      id: "levers",
      heading: "The levers that increase generative inclusion",
      blocks: [
        {
          kind: "list",
          items: [
            "Original data: surveys, benchmarks, pricing studies and internal metrics nobody else can publish",
            "Named quotes attributed to a real person with a role and credential",
            "Explicit comparisons with alternatives, including honest trade-offs",
            "Clear citation of authoritative sources with links",
            "Structured formats: tables, ordered steps, definition lists",
            "Unambiguous entity language — the same brand and service names everywhere",
            "Freshness signals: dated updates and changelogs on evergreen pages",
          ],
        },
      ],
    },
    {
      id: "programme",
      heading: "What a GEO programme looks like",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Prompt research",
              text: "Build the question set your buyers actually type into assistants, segmented by funnel stage.",
            },
            {
              title: "Citation baseline",
              text: "Record which brands and URLs each engine cites today for every prompt.",
            },
            {
              title: "Gap analysis",
              text: "Identify the content assets cited competitors have that you do not — usually data, comparisons or third-party roundups.",
            },
            {
              title: "Asset production",
              text: "Publish the missing assets: benchmark studies, comparison pages, transparent pricing, expert commentary.",
            },
            {
              title: "Distribution",
              text: "Seed those assets into the sources engines retrieve from — industry publications, directories, forums and review platforms.",
            },
            {
              title: "Re-measure",
              text: "Re-run the prompt set monthly and report share of citations against named competitors.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is GEO in AI search?",
      answer:
        "GEO stands for Generative Engine Optimization: optimising content so generative AI systems include and cite it when writing answers. It focuses on quotability, evidence and structure rather than keyword rankings.",
    },
    {
      question: "How is GEO different from AEO?",
      answer:
        "AEO is about being the extracted answer to a specific question. GEO is broader — being included as a source within a synthesised, multi-source response, and being described favourably in it.",
    },
    {
      question: "What content gets cited most by generative engines?",
      answer:
        "Content with original statistics, named expert quotes, explicit comparisons, transparent pricing and clear sourcing. Generic 'ultimate guide' content without evidence is rarely selected.",
    },
    {
      question: "Do I need original research to do GEO?",
      answer:
        "It helps enormously, but you can start with what you already own: aggregate client results, publish your pricing openly, and document benchmarks from your delivery data.",
    },
    {
      question: "How do you track GEO performance?",
      answer:
        "We run a fixed prompt set across the major engines each month and record mention rate, citation rate, sentiment and competitor share, so change is measurable rather than anecdotal.",
    },
    {
      question: "Can GEO influence what the model says about competitors?",
      answer:
        "Indirectly. Publishing accurate, well-sourced comparison content often becomes the material engines use when contrasting options, which shapes how the whole category is described.",
    },
    {
      question: "Is GEO relevant for small businesses?",
      answer:
        "Yes, and often easier — niche categories have fewer authoritative sources, so a single well-structured, evidence-rich page can dominate the answers in that niche.",
    },
    {
      question: "How long does GEO take?",
      answer:
        "Expect early movement in 4–8 weeks on niche prompts and three to six months for competitive category prompts where established publications currently dominate citations.",
    },
    {
      question: "Does GEO require blocking or allowing crawlers?",
      answer:
        "Allowing them. Engines cannot cite what they cannot fetch, so GEO work begins by confirming GPTBot, ClaudeBot, PerplexityBot and Google-Extended are permitted in robots.txt.",
    },
    {
      question: "Is GEO a permanent discipline or a trend?",
      answer:
        "The mechanics will keep changing, but the underlying requirement — publishing verifiable, well-structured, genuinely useful information — is durable regardless of which engines dominate.",
    },
  ],
};

export const llmSeo: PageContent = {
  slug: "/ai-seo/llm-seo",
  title: "LLM Search Optimization Services | AVR Web Consulting",
  h1: "LLM SEO: be the brand large language models recommend",
  description:
    "Make your content easier for large language models to find and use. AVR Web Consulting helps businesses prepare for AI-driven search. Get in touch.",
  keywords: "llm search optimization",
  eyebrow: "AI SEO",
  serviceName: "LLM SEO",
  answer:
    "LLM SEO makes large language models aware of, accurate about, and favourable towards your brand. AVR Web Consulting strengthens your entity footprint, seeds consistent descriptions across sources models trust, and structures site content so it is retrieved during live browsing.",
  hero: {
    image: "/images/llm-large-language-models.webp",
    imageAlt: "LLM SEO Services for ChatGPT, Gemini & Copilot | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Models covered", value: "6+" },
    { label: "Entity sources", value: "40+" },
    { label: "Audit", value: "7 days" },
    { label: "Cadence", value: "Monthly re-test" },
  ],
  breadcrumb: [...base, crumb("LLM SEO", "/ai-seo/llm-seo")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for LLM SEO Services for ChatGPT, Gemini & Copilot",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "how-llms-learn",
      heading: "How language models learn about your brand",
      blocks: [
        {
          kind: "paragraph",
          text: "Models form their view of your brand from two channels. Training data gives them a slow-moving, consensus picture built from crawled web text; live retrieval gives them fresh information fetched at query time. LLM SEO works both channels: make the consensus picture accurate and flattering, and make live retrieval easy.",
        },
        {
          kind: "table",
          head: ["Channel", "What influences it", "How fast it changes"],
          rows: [
            [
              "Training data",
              "Widely repeated descriptions across the open web",
              "Months to years",
            ],
            ["Live retrieval", "Current search results and crawlable pages", "Days to weeks"],
            ["Tool plugins / connectors", "Structured feeds and APIs", "Immediate"],
          ],
        },
      ],
    },
    {
      id: "workstreams",
      heading: "The four LLM SEO workstreams",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Entity clarity",
              text: "One canonical description of who you are, what you sell, where you operate and who you serve — repeated identically everywhere.",
            },
            {
              title: "Source seeding",
              text: "Getting that description onto the sites models trust: industry directories, review platforms, publications, professional profiles and knowledge bases.",
            },
            {
              title: "Retrieval readiness",
              text: "Server-rendered content, JSON-LD entity graph, clean headings, llms.txt and permitted AI crawlers.",
            },
            {
              title: "Reputation shaping",
              text: "Reviews, case studies and third-party commentary that give models positive, specific material to summarise.",
            },
          ],
        },
      ],
    },
    {
      id: "prompts",
      heading: "The prompts that matter for revenue",
      blocks: [
        {
          kind: "list",
          title: "Typical high-value prompt patterns",
          items: [
            '"Best [service] agency for [industry]"',
            '"[Competitor] alternatives"',
            '"How much does [service] cost in [country]"',
            '"Is [brand] any good"',
            '"Which agency does AEO and LLM optimisation"',
            '"Recommend an SEO agency in [city]"',
          ],
        },
        {
          kind: "paragraph",
          text: "We build your prompt set around these patterns, test them monthly across ChatGPT, Gemini, Claude, Copilot, Perplexity and DeepSeek, and prioritise work on the prompts closest to a buying decision.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is LLM SEO?",
      answer:
        "LLM SEO is optimisation aimed at large language models rather than search result pages. The objective is for models to know your brand, describe it accurately and recommend it when users ask relevant questions.",
    },
    {
      question: "Can you get my brand into ChatGPT's training data?",
      answer:
        "Nobody can guarantee inclusion in a training set. What you can do is increase the volume and consistency of accurate public information about your brand, which raises the probability of being represented correctly in future training runs and in live retrieval today.",
    },
    {
      question: "How do I find out what ChatGPT says about my brand?",
      answer:
        "We run a structured prompt set across each assistant and log the responses, including accuracy errors, outdated facts and competitor comparisons. That baseline becomes the roadmap.",
    },
    {
      question: "What if an AI states something wrong about my business?",
      answer:
        "We correct the source material: update your own pages, fix stale directory entries, publish clarifying content and pursue corrections on third-party sites. Live-retrieval assistants usually reflect the fix within weeks.",
    },
    {
      question: "Which models should I optimise for?",
      answer:
        "Start with the assistants your buyers use. For most B2B clients that is ChatGPT, Gemini and Perplexity; enterprise buyers add Copilot. The underlying work overlaps heavily across all of them.",
    },
    {
      question: "Is LLM SEO just PR?",
      answer:
        "It shares DNA with digital PR, because third-party mentions matter. It differs in its emphasis on machine-readable structure, entity consistency and measurable prompt-level testing.",
    },
    {
      question: "Does schema markup affect LLMs?",
      answer:
        "Yes. Structured data gives models unambiguous facts — services, prices, locations, authors — that are easier to reuse confidently than prose, and it feeds the search indexes many assistants retrieve from.",
    },
    {
      question: "How long does LLM SEO take?",
      answer:
        "Retrieval-side gains appear in weeks. Shifting the consensus description of your brand takes three to six months of consistent publishing and third-party seeding.",
    },
    {
      question: "Do I need a Wikipedia page?",
      answer:
        "It helps if you genuinely meet notability guidelines, but it is not required. Consistent presence across industry directories, review platforms and publications achieves much of the same entity effect.",
    },
    {
      question: "How is LLM SEO reported?",
      answer:
        "Monthly: mention rate and citation rate per prompt, accuracy of the description, sentiment, competitor share of voice, and the content or mentions added that month.",
    },
  ],
};

export const llmo: PageContent = {
  slug: "/ai-seo/llmo",
  title: "LLMO — Large Language Model Optimization | AVR Web Consulting",
  h1: "LLMO: engineering content that models can retrieve cleanly",
  description:
    "Large Language Model Optimization services: chunk-friendly content architecture, semantic HTML, JSON-LD entity graphs, llms.txt and crawler configuration for reliable AI retrieval.",
  eyebrow: "AI SEO",
  serviceName: "Large Language Model Optimization",
  answer:
    "LLMO is the technical side of AI search: structuring content so language models can retrieve, chunk and reuse it accurately. AVR Web Consulting implements semantic HTML, self-contained content chunks, JSON-LD entity graphs, llms.txt files and correct AI crawler permissions.",
  hero: {
    image: "/images/what-is-llmo.webp",
    imageAlt: "LLMO — Large Language Model Optimization | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Focus", value: "Retrieval" },
    { label: "Deliverable", value: "Entity graph" },
    { label: "Includes", value: "llms.txt" },
    { label: "Validation", value: "Rendered HTML" },
  ],
  breadcrumb: [...base, crumb("LLMO", "/ai-seo/llmo")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for LLMO — Large Language Model Optimization",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "definition",
      heading: "What is LLMO?",
      blocks: [
        {
          kind: "paragraph",
          text: "Large Language Model Optimization is the engineering discipline behind AI visibility. Where AEO and GEO shape what you say, LLMO makes sure a machine can fetch it, split it into meaningful chunks, and reuse those chunks without losing context or attributing them incorrectly.",
        },
        {
          kind: "list",
          title: "Why retrieval fails",
          items: [
            "Content rendered only in the browser, invisible to non-JS crawlers",
            "Long undifferentiated pages with no headings to chunk on",
            "Pronoun-heavy paragraphs that lose meaning when extracted alone",
            "Facts stated only in images, PDFs or embedded widgets",
            "Conflicting versions of the same fact across pages",
            "robots.txt rules that silently block AI user agents",
          ],
        },
      ],
    },
    {
      id: "implementation",
      heading: "What we implement",
      blocks: [
        {
          kind: "list",
          items: [
            "Self-contained chunks: every section opens by naming its subject rather than 'it' or 'this'",
            "Semantic HTML with one H1, meaningful H2/H3 hierarchy, tables and definition lists",
            "Server-side rendering or prerendering for all indexable content",
            "A connected JSON-LD graph: Organization, Service, Article, FAQPage, BreadcrumbList, LocalBusiness",
            "llms.txt describing the site's purpose and key URLs for LLM consumers",
            "robots.txt policy explicitly permitting the AI crawlers you want",
            "Canonical fact registry so pricing, addresses and claims never conflict",
            "XML sitemap discipline with accurate lastmod values",
          ],
        },
      ],
    },
    {
      id: "testing",
      heading: "How we verify retrieval works",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Raw fetch test",
              text: "Request pages without JavaScript and confirm the full content is present in the HTML source.",
            },
            {
              title: "Chunk simulation",
              text: "Split pages at heading boundaries and check each chunk still makes sense alone.",
            },
            {
              title: "Schema validation",
              text: "Validate every JSON-LD block and confirm entities reference each other by @id.",
            },
            {
              title: "Assistant spot-check",
              text: "Ask assistants to summarise specific URLs and compare the summary to the intended message.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What does LLMO stand for?",
      answer:
        "LLMO stands for Large Language Model Optimization — structuring and publishing content so language models can retrieve and reuse it accurately.",
    },
    {
      question: "How is LLMO different from LLM SEO?",
      answer:
        "LLM SEO is the strategic goal of being known and recommended by models. LLMO is the technical execution layer that makes your content machine-retrievable in the first place.",
    },
    {
      question: "What is content chunking?",
      answer:
        "Retrieval systems split pages into passages, embed them and match them to queries. Chunking-friendly content uses clear headings and self-contained sections so each passage remains meaningful on its own.",
    },
    {
      question: "Do I need llms.txt?",
      answer:
        "It is optional and still an emerging convention, but it is cheap to add and gives LLM consumers a clean summary of your site and its key URLs. We include it in every LLMO engagement.",
    },
    {
      question: "Does JavaScript hurt LLM retrieval?",
      answer:
        "It can. Several AI crawlers do not execute JavaScript, so content that only appears after hydration is invisible to them. Server-side rendering solves this.",
    },
    {
      question: "Which schema types matter most for LLMO?",
      answer:
        "Organization and WebSite for identity, Service for offerings, Article for editorial content, FAQPage for question-answer pairs, LocalBusiness for physical presence and BreadcrumbList for context.",
    },
    {
      question: "Should PDFs be converted to HTML?",
      answer:
        "Usually yes. Key facts locked inside PDFs, images or embedded tools are far less reliably retrieved than the same information in HTML.",
    },
    {
      question: "Can LLMO be done without changing site design?",
      answer:
        "In most cases yes. The work is largely in markup, rendering and content structure rather than visual design.",
    },
    {
      question: "How do I know LLMO is working?",
      answer:
        "Retrieval tests improve first — assistants summarise your pages correctly when asked directly. Citation share in unprompted answers follows as content and authority work compounds.",
    },
    {
      question: "Is LLMO a one-off project?",
      answer:
        "The foundation is a project; keeping it true is ongoing. Every new template, redesign or CMS change can break rendering or schema, so we re-verify each quarter.",
    },
  ],
};

export const aiVisibility: PageContent = {
  slug: "/ai-seo/ai-visibility",
  title: "AI Visibility Optimization Services | AVR Web Consulting",
  h1: "AI visibility: measure and grow your share of AI answers",
  description:
    "Help your business show up when people use AI search tools. We structure your content and site so answers can reference you. Contact AVR Web Consulting.",
  keywords: "ai visibility optimization",
  eyebrow: "AI SEO",
  serviceName: "AI Visibility",
  answer:
    "AI visibility is how often and how favourably AI assistants mention your brand. AVR Web Consulting tracks a fixed prompt set across the major assistants each month, benchmarks your share of answers against competitors, and closes the content and authority gaps behind the difference.",
  hero: {
    image: "/images/ai-brand-mentions.webp",
    imageAlt: "AI Brand Mentions and Visibility Tracking Services | AVR Web Consulting",
  },
  highlights: [
    { label: "Prompts tracked", value: "100–300" },
    { label: "Engines", value: "6+" },
    { label: "Reporting", value: "Monthly" },
    { label: "Benchmark", value: "vs 3 rivals" },
  ],
  breadcrumb: [...base, crumb("AI Visibility", "/ai-seo/ai-visibility")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for AI Visibility Tracking & Optimisation Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "measure",
      heading: "What we measure",
      blocks: [
        {
          kind: "table",
          head: ["Metric", "Definition"],
          rows: [
            ["Mention rate", "Percentage of tracked prompts where your brand is named"],
            ["Citation rate", "Percentage where your domain is linked as a source"],
            ["Share of answer", "Your mentions as a share of all brands mentioned"],
            ["Accuracy score", "Whether the description of your business is correct and current"],
            ["Sentiment", "How positively the assistant characterises you"],
            ["Source map", "Which URLs and third-party sites the engine used"],
          ],
        },
      ],
    },
    {
      id: "gaps",
      heading: "Turning gaps into work",
      blocks: [
        {
          kind: "paragraph",
          text: "A visibility report is only useful if it produces action. Every gap we find is classified into one of four causes, each with a standard remedy, so the monthly report doubles as the next month's roadmap.",
        },
        {
          kind: "steps",
          items: [
            {
              title: "Not retrievable",
              text: "Fix rendering, schema, crawler permissions — LLMO work.",
            },
            {
              title: "Not quotable",
              text: "Rewrite answer-first, add data, quotes and comparisons — AEO and GEO work.",
            },
            {
              title: "Not authoritative",
              text: "Earn mentions on the sources the engine actually cited — digital PR and link building.",
            },
            {
              title: "Not accurate",
              text: "Correct stale facts at source across directories, profiles and your own pages.",
            },
          ],
        },
      ],
    },
    {
      id: "who-needs",
      heading: "Signs you need AI visibility work now",
      blocks: [
        {
          kind: "list",
          items: [
            "Competitors appear when you ask an assistant for recommendations in your category and you do not",
            "Assistants describe your pricing, services or locations incorrectly",
            "Organic traffic is flat while impressions rise — a classic AI-summary pattern",
            "Your buyers tell you they researched with ChatGPT or Gemini before contacting you",
            "You are launching in a new market and want to establish presence early",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is AI visibility?",
      answer:
        "AI visibility is the extent to which AI assistants mention, cite and accurately describe your brand when answering questions relevant to your business. It is the AI-era equivalent of share of search.",
    },
    {
      question: "How do you track AI visibility?",
      answer:
        "We maintain a fixed prompt set covering your category, competitors, locations and buying questions, run it monthly across the major assistants, and record mentions, citations, sentiment and sources.",
    },
    {
      question: "Why do results vary between runs?",
      answer:
        "Assistants are non-deterministic and personalise by region and account. We control for this by using consistent settings, running multiple samples per prompt and reporting trends rather than single results.",
    },
    {
      question: "Can I track AI visibility myself?",
      answer:
        "You can spot-check manually, and you should. Systematic tracking across hundreds of prompts, several engines and multiple months is where a managed service saves time and produces reliable trends.",
    },
    {
      question: "What is a good mention rate?",
      answer:
        "It depends on category density. In niche B2B categories, 40–60% of relevant prompts is achievable; in crowded consumer categories, any consistent presence against national brands is meaningful progress.",
    },
    {
      question: "Does AI visibility correlate with traffic?",
      answer:
        "Partly. Some answers produce clicks, many produce brand awareness without a click. We pair visibility metrics with branded search volume and direct traffic to capture the full effect.",
    },
    {
      question: "How quickly can visibility improve?",
      answer:
        "Fixes to retrieval and accuracy can show within weeks. Competitive prompts where established publications dominate typically need three to six months of content and authority work.",
    },
    {
      question: "Do you track AI Overviews too?",
      answer:
        "Yes. Google AI Overviews are tracked alongside the assistants, including whether your domain is one of the linked sources.",
    },
    {
      question: "Which competitors do you benchmark?",
      answer:
        "We benchmark against up to three named competitors of your choice plus whichever brands the engines actually cite most, which is often not who you expect.",
    },
    {
      question: "What does the monthly report include?",
      answer:
        "Prompt-level results, trend charts for mention and citation rate, competitor share of answer, accuracy and sentiment notes, the sources engines used, and a prioritised action list.",
    },
  ],
};

export const aiOverviews: PageContent = {
  slug: "/ai-seo/ai-overviews",
  title: "How to Enable Google AI Search | AVR Web Consulting",
  h1: "Get your content into Google AI Overviews",
  description:
    "Step-by-step guide to turning on Google AI search features and what it means for your website's visibility. Read the guide from AVR Web Consulting.",
  keywords: "how to enable google ai search",
  eyebrow: "AI SEO",
  serviceName: "AI Overviews Optimisation",
  answer:
    "Google AI Overviews are AI-generated summaries shown above traditional results, built from a handful of cited pages. AVR Web Consulting optimises passage structure, schema and topical authority so your URLs become one of those cited sources for your priority queries.",
  hero: {
    image: "/images/how-to-optimise-content-llms.webp",
    imageAlt: "Google AI Overviews Optimisation Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Tracked queries", value: "Your top 100" },
    { label: "Format", value: "Passage-level" },
    { label: "Signals", value: "Schema + authority" },
    { label: "Reporting", value: "Citation share" },
  ],
  breadcrumb: [...base, crumb("AI Overviews", "/ai-seo/ai-overviews")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Google AI Overviews Optimisation Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "how",
      heading: "How AI Overviews choose their sources",
      blocks: [
        {
          kind: "paragraph",
          text: "AI Overviews are grounded in search results. Google retrieves candidate pages, extracts passages that answer the query and its likely follow-ups, then synthesises a summary with links to a small number of sources. Pages that rank well, answer precisely and carry unambiguous structure are chosen disproportionately often.",
        },
        {
          kind: "list",
          title: "Observed patterns in cited pages",
          items: [
            "Direct answer within the first 100 words of the relevant section",
            "Heading text that mirrors the query phrasing",
            "Supporting lists, tables or steps immediately after the answer",
            "Clear authorship, dates and factual sourcing",
            "Strong topical coverage across a cluster, not a single orphan page",
          ],
        },
      ],
    },
    {
      id: "work",
      heading: "Our AI Overviews programme",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Query classification",
              text: "Identify which of your priority queries currently trigger an AI Overview and who is cited.",
            },
            {
              title: "Passage engineering",
              text: "Rewrite the matching sections answer-first with query-mirroring headings.",
            },
            {
              title: "Cluster completion",
              text: "Fill topical gaps so your site demonstrably covers the whole subject, not one page of it.",
            },
            {
              title: "Schema and entity work",
              text: "Article, FAQPage, Organization and author markup to remove ambiguity.",
            },
            {
              title: "Authority support",
              text: "Links and mentions that lift the underlying page into the candidate set.",
            },
            {
              title: "Monitoring",
              text: "Monthly tracking of Overview presence and citation for each tracked query.",
            },
          ],
        },
      ],
    },
    {
      id: "traffic",
      heading: "What AI Overviews do to your traffic",
      blocks: [
        {
          kind: "paragraph",
          text: "Informational queries lose clicks when an Overview answers them completely. Commercial queries behave differently: users click through to compare, price and buy. The strategic response is to shift content investment towards commercial and comparison intent while keeping enough informational coverage to be recognised as an authority.",
        },
        {
          kind: "callout",
          title: "Track impressions, not just clicks",
          text: "A rising impression count with flat clicks usually means Overview exposure. We report both, plus branded search growth, so the brand effect is not mistaken for a loss.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What are Google AI Overviews?",
      answer:
        "AI Overviews are AI-generated summaries that appear above traditional search results for many queries, synthesised from several web pages and displayed with links to those sources.",
    },
    {
      question: "How do I get featured in AI Overviews?",
      answer:
        "Rank in the candidate set for the query, answer the question directly in the first lines of the relevant section, use headings that mirror the query, add supporting structure and schema, and build topical depth across the cluster.",
    },
    {
      question: "Do AI Overviews reduce website traffic?",
      answer:
        "For purely informational queries, often yes. For commercial and comparison queries, click behaviour holds up better because users still want to evaluate options and pricing.",
    },
    {
      question: "Can I opt out of AI Overviews?",
      answer:
        "Partially. The nosnippet and max-snippet directives limit how your content can be used, but applying them typically removes snippet visibility too. We rarely recommend it.",
    },
    {
      question: "Do AI Overviews use the same ranking factors as normal search?",
      answer:
        "They are grounded in search, so ranking, relevance and quality signals matter — but passage clarity and structure influence which of the ranked pages actually gets quoted.",
    },
    {
      question: "How can I tell if my pages appear in Overviews?",
      answer:
        "We track your priority queries monthly and record whether an Overview appears and which domains are cited, since Search Console does not separate Overview data explicitly.",
    },
    {
      question: "Does schema help with AI Overviews?",
      answer:
        "Schema does not force inclusion but it removes ambiguity about entities, authorship, prices and questions, which supports accurate extraction and consistent attribution.",
    },
    {
      question: "Which content types get cited most?",
      answer:
        "Definitions, how-to steps, comparison tables, pricing explanations and troubleshooting answers, especially when written concisely with supporting evidence.",
    },
    {
      question: "Should I stop writing informational blog content?",
      answer:
        "No — informational depth is how a site earns topical authority. Rebalance rather than abandon: keep the pillars, and invest more in commercial, comparison and original-data content.",
    },
    {
      question: "How is success measured for AI Overview work?",
      answer:
        "Citation frequency across tracked queries, impression growth, branded search volume and conversions from pages that appear as Overview sources.",
    },
  ],
};

export const aiCitations: PageContent = {
  slug: "/ai-seo/ai-citations-mentions",
  title: "AI Citations & Brand Mentions Services | AVR Web Consulting",
  h1: "AI citations and mentions: become the source AI answers quote",
  description:
    "Earn AI citations and brand mentions through digital PR, roundup placement, review platform presence, original data and consistent entity signals across the sources AI engines retrieve.",
  eyebrow: "AI SEO",
  serviceName: "AI Citations and Mentions",
  answer:
    "AI citations are the linked sources an assistant credits in its answer; mentions are unlinked references to your brand. AVR Web Consulting increases both by placing consistent, verifiable brand information on the third-party sources that assistants retrieve from most in your category.",
  hero: {
    image: "/images/ai-citations-verification.webp",
    imageAlt: "AI Citations & Source Verification Services | AVR Web Consulting",
  },
  highlights: [
    { label: "Placements", value: "Manual only" },
    { label: "Guest posts", value: "From $20" },
    { label: "Sources mapped", value: "Per category" },
    { label: "Tracking", value: "Monthly" },
  ],
  breadcrumb: [...base, crumb("AI Citations & Mentions", "/ai-seo/ai-citations-mentions")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for AI Citations & Brand Mentions Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "why",
      heading: "Why citations decide AI recommendations",
      blocks: [
        {
          kind: "paragraph",
          text: "When an assistant answers 'best SEO agency for e-commerce', it rarely invents a list. It retrieves roundups, review platforms, directories and editorial articles, then summarises the consensus. Brands absent from those sources cannot appear in the answer, no matter how good their own website is.",
        },
        {
          kind: "list",
          title: "The source types that matter most",
          items: [
            "Category roundups and 'best of' listicles in trade publications",
            "Review platforms such as Clutch, G2, Trustpilot and Google reviews",
            "Industry directories with editorial standards",
            "Q&A communities and forums where practitioners answer honestly",
            "Original research others cite, which pulls your name into secondary coverage",
          ],
        },
      ],
    },
    {
      id: "programme",
      heading: "How we earn citations",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Source mapping",
              text: "Run your prompt set and record every domain the engines cite. That list becomes the target list.",
            },
            {
              title: "Eligibility",
              text: "Prepare the assets those sources require: case studies, pricing, credentials, client proof.",
            },
            {
              title: "Outreach",
              text: "Manual pitching for inclusion in roundups, expert commentary and guest contributions.",
            },
            {
              title: "Review velocity",
              text: "Compliant review generation on the platforms that appear in AI answers for your category.",
            },
            {
              title: "Data assets",
              text: "Publish original benchmarks that journalists and bloggers cite, multiplying unlinked mentions.",
            },
          ],
        },
        {
          kind: "callout",
          title: "No spam, ever",
          text: "Every placement is manual and editorially justified. Automated mention spam is easily detected, damages brand perception and does not survive in curated sources that AI engines trust.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is an AI citation?",
      answer:
        "An AI citation is a source an AI assistant credits — usually as a link or footnote — when generating an answer. Being cited puts your brand in front of the user and often drives high-intent clicks.",
    },
    {
      question: "Do unlinked brand mentions matter?",
      answer:
        "Yes. Language models learn associations from text, so repeated unlinked mentions in trusted contexts still strengthen the connection between your brand and your category.",
    },
    {
      question: "How do you know which sources AI engines use?",
      answer:
        "We log the cited domains for every prompt in your tracking set. Those logs show, category by category, which publications and platforms actually influence the answers.",
    },
    {
      question: "How long does it take to earn AI citations?",
      answer:
        "Directory and review placements can register within weeks. Editorial roundup inclusion typically takes one to three months per placement depending on the publication's cycle.",
    },
    {
      question: "Is this the same as link building?",
      answer:
        "It overlaps, but the target list is different. Traditional link building chases authority metrics; citation building chases the specific sources engines quote, which are sometimes low-DA but highly cited.",
    },
    {
      question: "Can you get us onto review platforms like Clutch or G2?",
      answer:
        "We set up and optimise the profiles and run a compliant review request programme with your clients. We never write or buy reviews.",
    },
    {
      question: "What if a competitor dominates every roundup?",
      answer:
        "We target the gaps: newer publications, niche verticals, regional lists and comparison content of our own. Category incumbency is beatable with specificity.",
    },
    {
      question: "How do you measure citation growth?",
      answer:
        "Monthly citation rate across the tracked prompt set, the number of new citing domains, and referral traffic from assistants where analytics can identify it.",
    },
    {
      question: "Do guest posts help AI visibility?",
      answer:
        "Well-placed ones do, especially on sites assistants already cite. Low-quality mass guest posting does not, and can harm classic SEO at the same time.",
    },
    {
      question: "How much does citation building cost?",
      answer:
        "Guest posts start at $20 per placement, and digital PR campaigns are quoted per project after source mapping. Most clients run citation building inside a monthly AI SEO retainer.",
    },
  ],
};

export const aiRetrievalSystems: PageContent = {
  slug: "/ai-seo/ai-retrieval-systems",
  title: "AI Retrieval System Optimisation & Data Structuring | AVR",
  h1: "AI retrieval systems: structure your data for machine reading",
  description:
    "Optimise your site for AI retrieval systems with entity graphs, machine-readable data layers, embeddings-friendly content architecture, feeds and API-ready structured content.",
  eyebrow: "AI SEO",
  serviceName: "AI Retrieval System Optimisation",
  answer:
    "AI retrieval systems fetch, chunk and embed web content before a model writes an answer. AVR Web Consulting engineers your content for that pipeline with connected JSON-LD entity graphs, chunk-safe structure, clean feeds and validated server-side rendering.",
  hero: {
    image: "/images/ai-retrieval-systems-laptop.webp",
    imageAlt: "AI Retrieval System Optimisation & Data Structuring | AVR illustration",
  },
  highlights: [
    { label: "Entity graph", value: "Connected @id" },
    { label: "Chunk audit", value: "Per template" },
    { label: "Feeds", value: "XML + JSON" },
    { label: "Validation", value: "Raw HTML tests" },
  ],
  breadcrumb: [...base, crumb("AI Retrieval Systems", "/ai-seo/ai-retrieval-systems")],
  related: commonRelated,
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for AI Retrieval System Optimisation & Data Structuring",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "pipeline",
      heading: "The retrieval pipeline in plain terms",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Fetch",
              text: "A crawler requests your URL. If robots.txt blocks it or the content needs JavaScript, the pipeline stops here.",
            },
            {
              title: "Parse",
              text: "HTML is stripped to text and structure. Semantic headings and tables survive; visual-only layout does not.",
            },
            {
              title: "Chunk",
              text: "Content is split into passages, usually at heading or paragraph boundaries.",
            },
            {
              title: "Embed and index",
              text: "Each chunk becomes a vector stored for similarity search.",
            },
            {
              title: "Retrieve and generate",
              text: "The query matches chunks, and the model writes an answer from the top matches, citing their sources.",
            },
          ],
        },
        {
          kind: "paragraph",
          text: "Every optimisation we make targets a specific stage of this pipeline. That is what separates retrieval engineering from generic 'write good content' advice.",
        },
      ],
    },
    {
      id: "work",
      heading: "What we build",
      blocks: [
        {
          kind: "list",
          items: [
            "A connected entity graph where Organization, Service, Article, Person and LocalBusiness reference each other by @id",
            "Chunk-safe writing standards: every section names its subject and stands alone",
            "Data layers: product, pricing and location data expressed in structured markup rather than images",
            "Machine-readable feeds — XML sitemaps with accurate lastmod, JSON feeds where useful",
            "llms.txt and robots.txt policy tuned for the AI agents you want",
            "Rendering guarantees so no critical content depends on client-side JavaScript",
            "Fact registry ensuring one canonical value for every price, date and claim",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is an AI retrieval system?",
      answer:
        "It is the fetch-parse-chunk-embed-retrieve pipeline that supplies a language model with source material at answer time. Optimising for it determines whether your content can be used at all.",
    },
    {
      question: "What is RAG?",
      answer:
        "RAG stands for retrieval-augmented generation: the model retrieves relevant documents first, then generates an answer grounded in them. Most AI search products work this way.",
    },
    {
      question: "How does chunking affect my content?",
      answer:
        "If a passage relies on context from earlier sections, it can be retrieved alone and misunderstood. Writing self-contained sections keeps meaning intact when chunks are separated.",
    },
    {
      question: "Do I need a vector database?",
      answer:
        "Not for public AI visibility — the engines maintain their own. A vector store is only relevant if you are building your own search or assistant on top of your content.",
    },
    {
      question: "What is an entity graph?",
      answer:
        "It is your JSON-LD markup connected by @id references so machines can see that a service, an article, an author and an organisation all belong to the same business.",
    },
    {
      question: "Are XML sitemaps still relevant?",
      answer:
        "Yes, especially with accurate lastmod values, because they help both search and AI crawlers prioritise what to fetch and re-fetch.",
    },
    {
      question: "How do images and PDFs fit in?",
      answer:
        "Poorly, unless supported by text. Any fact you need retrieved should exist as HTML text with descriptive alt text on the accompanying visual.",
    },
    {
      question: "Can retrieval optimisation break normal SEO?",
      answer:
        "No. Everything it requires — server-rendered content, semantic HTML, valid schema, consistent facts — also benefits classic search rankings.",
    },
    {
      question: "How do you test retrieval readiness?",
      answer:
        "We fetch pages without JavaScript, simulate chunk boundaries, validate every schema block and ask assistants to summarise specific URLs to confirm they read what we intended.",
    },
    {
      question: "How often should retrieval readiness be re-checked?",
      answer:
        "Quarterly, and after every redesign, CMS upgrade or template change, since those are the events that most often break rendering or drop schema.",
    },
  ],
};

export const aiSeoPages = [
  aiSeoHub,
  aeo,
  geoSeo,
  llmSeo,
  llmo,
  aiVisibility,
  aiOverviews,
  aiCitations,
  aiRetrievalSystems,
];
