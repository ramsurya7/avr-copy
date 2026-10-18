import type { PageContent } from "@/content/types";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("Paid Advertising", "/paid-advertising")];

export const paidAdvertisingHub: PageContent = {
  slug: "/paid-advertising",
  title: "Paid Advertising Agency — Google Ads & Social Ads | AVR Web Consulting",
  h1: "Paid advertising that buys demand while SEO compounds",
  description:
    "Google Ads, Meta, LinkedIn and YouTube campaigns managed by AVR Web Consulting for clients in India, the US, UK, UAE and Europe. Transparent management fees, conversion-first structure.",
  eyebrow: "Paid Advertising",
  serviceName: "Paid Advertising Management",
  answer:
    "AVR Web Consulting manages Google Ads, Meta Ads, LinkedIn Ads and YouTube campaigns with a conversion-first structure: tight query control, landing pages built to convert and full offline-conversion tracking. Paid runs alongside SEO so keyword and message data from ads informs the organic roadmap.",
  hero: {
    image: "/images/megaphone-laptop-announcement.webp",
    imageAlt: "Marketer reviewing paid advertising performance on a laptop",
  },
  highlights: [
    { label: "Channels managed", value: "6+" },
    { label: "Setup time", value: "5 days" },
    { label: "Reporting", value: "Weekly" },
    { label: "Min. management", value: "$150/mo" },
  ],
  breadcrumb: base,
  related: [
    { label: "Google Ads management", to: "/paid-advertising/google-ads" },
    { label: "Social media ads", to: "/paid-advertising/social-media-ads" },
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
            "Expert strategies tailored for Paid Advertising Agency — Google Ads & Social Ads",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "channels",
      heading: "Channels we manage",
      blocks: [
        {
          kind: "table",
          head: ["Channel", "Best for", "Typical role in the funnel"],
          rows: [
            [
              "Google Search",
              "High-intent commercial queries",
              "Capture demand that already exists",
            ],
            [
              "Google Shopping / PMax",
              "E-commerce catalogues",
              "Product discovery and repeat purchase",
            ],
            [
              "Meta (Facebook & Instagram)",
              "B2C, local services, e-commerce",
              "Create demand, retarget site visitors",
            ],
            ["LinkedIn", "B2B and SaaS with defined job titles", "Pipeline from named accounts"],
            [
              "YouTube",
              "Considered purchases needing explanation",
              "Awareness and assisted conversion",
            ],
            [
              "Microsoft Ads",
              "US/UK B2B and older demographics",
              "Cheap incremental search volume",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "We do not push every channel at once. The first 60 days concentrate budget where intent is highest — usually Google Search — and only expand into discovery channels once cost per qualified lead is stable and tracked end to end.",
        },
      ],
    },
    {
      id: "how-we-run",
      heading: "How we run paid campaigns",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Measurement first",
              text: "GA4, Google Tag Manager, conversion actions, enhanced conversions and (where a CRM exists) offline conversion import — before a single rupee or dollar is spent.",
            },
            {
              title: "Account architecture",
              text: "Campaigns split by intent and margin, not by convenience. Tight themes, negative keyword lists and search-term review every week.",
            },
            {
              title: "Creative and landing pages",
              text: "Ad copy tested in fours, landing pages matched to the query promise. Slow or generic pages get rebuilt before budget scales.",
            },
            {
              title: "Scale and feedback loop",
              text: "Winning queries and angles feed the SEO content roadmap; organic winners become paid ad copy. One strategy, two channels.",
            },
          ],
        },
      ],
    },
    {
      id: "pricing-model",
      heading: "Our pricing model",
      blocks: [
        {
          kind: "list",
          title: "Transparent, no hidden markups",
          items: [
            "Management from $150/month for small local accounts",
            "10–15% of ad spend for accounts above $5,000/month",
            "You own the ad accounts, data and pixels — always",
            "No commission from platforms, no arbitrage on your media budget",
          ],
        },
        {
          kind: "callout",
          title: "Paid plus AI visibility",
          text: "Ad clicks are increasingly influenced by what an AI assistant already told the buyer about you. We keep brand facts, reviews and comparison content consistent so the paid click lands on a brand the buyer has already heard good things about.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is your minimum ad budget?",
      answer:
        "We work with media budgets from about $500 per month. Below that, search volume is usually too thin to gather statistically useful data, and we will normally recommend putting the money into local SEO and Google Business Profile work first.",
    },
    {
      question: "How much do you charge to manage Google Ads?",
      answer:
        "Management starts at $150 per month for small local accounts and moves to 10–15% of media spend for accounts above $5,000 per month. The fee is quoted upfront and does not change without your written approval.",
    },
    {
      question: "Who owns the ad accounts?",
      answer:
        "You do. We always build campaigns inside your own Google Ads, Meta Business and LinkedIn accounts, and you keep full admin access. If we ever part ways, your history, pixels and audiences stay with you.",
    },
    {
      question: "How quickly can campaigns go live?",
      answer:
        "Typically five business days: two for tracking and account structure, two for copy and landing page review, one for launch checks. Rush launches for events or seasonal sales can be done in 48 hours.",
    },
    {
      question: "Do you run ads and SEO together?",
      answer:
        "Yes, and that is where the compounding happens. Paid search reveals which keywords actually convert within weeks, so the SEO content plan targets proven revenue terms instead of guesses, and organic winners become tested ad copy.",
    },
    {
      question: "How do you report performance?",
      answer:
        "A weekly one-page summary covering spend, conversions, cost per acquisition and what changed, plus a monthly deep dive with search-term analysis, creative performance and next month's plan. All data lives in a dashboard you can open any time.",
    },
    {
      question: "Can you fix an account another agency built?",
      answer:
        "Yes. Roughly half of new paid clients arrive with an existing account. We audit structure, tracking accuracy, wasted spend and query relevance first, and usually restructure rather than rebuild so historical learning is preserved.",
    },
    {
      question: "Do you handle international campaigns?",
      answer:
        "We run campaigns targeting India, the United States, United Kingdom, United Arab Emirates and Europe, including multi-currency accounts, localised copy and region-specific landing pages with correct hreflang.",
    },
    {
      question: "What conversion tracking do you set up?",
      answer:
        "GA4 events, Google Ads conversion actions with enhanced conversions, Meta CAPI where relevant, call tracking for phone-led businesses and CRM offline conversion import so the platforms optimise toward qualified leads rather than raw form fills.",
    },
    {
      question: "Is there a lock-in contract?",
      answer:
        "No. Paid advertising is billed month to month with 30 days' notice. We would rather keep accounts because performance justifies it than because a contract traps you.",
    },
  ],
};

export const googleAds: PageContent = {
  slug: "/paid-advertising/google-ads",
  title: "Search Engine Marketing Consultant | AVR Web Consulting",
  h1: "Google Ads management built around qualified leads, not clicks",
  description:
    "Get expert input on your search engine marketing, from reviewing current performance to planning smarter campaigns. Contact AVR Web Consulting.",
  keywords: "search engine marketing consultant, search engine marketing analysis",
  eyebrow: "Google Ads",
  serviceName: "Google Ads Management",
  answer:
    "AVR Web Consulting builds and manages Google Ads accounts across Search, Shopping, Performance Max, Display and YouTube. We start with accurate conversion tracking, structure campaigns by intent and margin, review search terms weekly and optimise toward cost per qualified lead rather than clicks or impression share.",
  hero: {
    image: "/images/google-ads-vs-seo-comparison.webp",
    imageAlt: "Google Ads Management — Search, Shopping & PMax | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Campaign types", value: "5" },
    { label: "Search-term reviews", value: "Weekly" },
    { label: "Live in", value: "5 days" },
    { label: "From", value: "$150/mo" },
  ],
  breadcrumb: [...base, crumb("Google Ads", "/paid-advertising/google-ads")],
  related: [
    { label: "Social media ads", to: "/paid-advertising/social-media-ads" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
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
            "Expert strategies tailored for Google Ads Management — Search, Shopping & PMax",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "campaign-types",
      heading: "Campaign types and when each one earns its budget",
      blocks: [
        {
          kind: "table",
          head: ["Campaign type", "Use it when", "Watch out for"],
          rows: [
            [
              "Search",
              "People already search for your product by name or need",
              "Broad match bleeding into irrelevant queries",
            ],
            [
              "Shopping",
              "You sell physical products with a clean feed",
              "Feed errors and missing GTINs killing impressions",
            ],
            [
              "Performance Max",
              "You have solid conversion data and creative assets",
              "Brand cannibalisation and no query transparency",
            ],
            [
              "Display / Remarketing",
              "You need cheap re-engagement of warm visitors",
              "Placement junk on mobile apps",
            ],
            [
              "YouTube",
              "The purchase needs a demonstration or explanation",
              "Measuring on last-click only",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "Performance Max is powerful but opaque. We only scale it once brand terms are excluded, conversion values are accurate and asset groups are themed, so it complements Search rather than quietly buying traffic you already had for free.",
        },
      ],
    },
    {
      id: "waste-control",
      heading: "How we cut wasted spend",
      blocks: [
        {
          kind: "list",
          items: [
            "Weekly search-term mining with shared and campaign-level negative lists",
            "Match-type discipline: exact and phrase carry budget, broad only with strong conversion signals",
            "Device, location and schedule bid adjustments based on 90-day conversion data",
            "Landing page speed and form audits — a 4-second page wastes up to a third of paid clicks",
            "Lead quality feedback from your sales team fed back into the account as offline conversions",
          ],
        },
        {
          kind: "callout",
          title: "The typical first-month win",
          text: "On inherited accounts, the biggest single gain is usually removing 20–40% of spend that never produced a qualified lead — before adding a single new keyword.",
        },
      ],
    },
    {
      id: "landing-pages",
      heading: "Landing pages that carry the click",
      blocks: [
        {
          kind: "paragraph",
          text: "A great campaign pointed at a weak page loses money quietly. We build or rework landing pages so the headline repeats the searcher's query, the proof appears above the fold, the form asks only for what sales actually needs, and Core Web Vitals stay green on mid-range mobile devices.",
        },
        {
          kind: "steps",
          items: [
            {
              title: "Message match",
              text: "The ad promise and the H1 say the same thing in the same words.",
            },
            {
              title: "Proof",
              text: "Reviews, client logos, certifications and specific numbers, not adjectives.",
            },
            {
              title: "Friction removal",
              text: "Short forms, click-to-call, WhatsApp and a visible price signal.",
            },
            {
              title: "Test",
              text: "One variable at a time, with enough conversions to call a winner honestly.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much should I spend on Google Ads to start?",
      answer:
        "For most local service businesses, $500–$1,000 per month of media buys enough clicks to learn quickly. Competitive B2B or multi-city campaigns usually need $2,000+ per month before the data is reliable enough to optimise confidently.",
    },
    {
      question: "Is Performance Max worth running?",
      answer:
        "It is, once you have at least 30 conversions a month and clean conversion values. Before that it tends to spend on brand and remarketing traffic you would have won anyway, which inflates reported ROAS while adding little incremental revenue.",
    },
    {
      question: "Why is my cost per click so high?",
      answer:
        "Usually a mix of low Quality Score from weak message match, over-broad match types, and bidding on head terms instead of specific commercial phrases. Improving landing page relevance and tightening keywords typically brings CPCs down within a few weeks.",
    },
    {
      question: "Do you write the ad copy?",
      answer:
        "Yes. We write responsive search ads with pinned value propositions, test four headline angles at a time and rewrite based on asset performance, not opinion. Copy is reviewed with you before it goes live.",
    },
    {
      question: "Can you manage Google Shopping feeds?",
      answer:
        "Yes. We handle Merchant Center setup, feed diagnostics, title and attribute optimisation, custom labels for margin-based bidding, and supplemental feeds for missing GTINs or product highlights.",
    },
    {
      question: "How do you measure phone leads?",
      answer:
        "Through Google call extensions, dynamic call tracking numbers on landing pages and, for longer sales cycles, offline conversion import from your CRM so the algorithm learns which calls actually became customers.",
    },
    {
      question: "How often do you optimise the account?",
      answer:
        "Search terms and budget pacing are reviewed weekly; bidding strategy, ad copy and structure are reviewed monthly. Bigger structural changes are proposed with a rationale, not applied silently.",
    },
    {
      question: "Will ads help my SEO rankings?",
      answer:
        "Not directly — paid clicks are not a ranking factor. Indirectly they help a lot, because ads tell you within weeks which keywords convert, so your SEO investment goes into pages with proven commercial value.",
    },
    {
      question: "Do you run ads in multiple countries?",
      answer:
        "Yes, including India, the US, UK, UAE and European markets. Each country gets its own campaign, currency handling, localised copy and, where needed, a country-specific landing page.",
    },
    {
      question: "What happens in the first 30 days?",
      answer:
        "Week one: tracking audit and account build. Week two: launch and daily monitoring. Weeks three and four: search-term pruning, bid strategy tuning and the first copy test. You receive a full performance review at day 30 with the plan for month two.",
    },
  ],
};

export const socialMediaAds: PageContent = {
  slug: "/paid-advertising/social-media-ads",
  title: "Social Media Ads — Meta, LinkedIn & YouTube | AVR Web Consulting",
  h1: "Social media ads that create demand, not just impressions",
  description:
    "Facebook, Instagram, LinkedIn and YouTube advertising managed by AVR Web Consulting. Creative testing, audience strategy and CAPI tracking for India, US, UK, UAE and Europe.",
  eyebrow: "Social Media Ads",
  serviceName: "Social Media Advertising",
  answer:
    "AVR Web Consulting runs paid social on Meta, Instagram, LinkedIn and YouTube. We build audience and creative testing frameworks, deploy server-side tracking through Conversions API, and judge campaigns on cost per qualified lead or blended ROAS instead of platform-reported vanity metrics.",
  hero: {
    image: "/images/digital-marketing-benefits.webp",
    imageAlt: "Social Media Ads — Meta, LinkedIn & YouTube | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Creative variants / month", value: "12+" },
    { label: "Platforms", value: "4" },
    { label: "Tracking", value: "CAPI + GA4" },
    { label: "From", value: "$150/mo" },
  ],
  breadcrumb: [...base, crumb("Social Media Ads", "/paid-advertising/social-media-ads")],
  related: [
    { label: "Social media marketing", to: "/paid-advertising/social-media-marketing" },
    { label: "Google Ads", to: "/paid-advertising/google-ads" },
    { label: "Content marketing", to: "/content-marketing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Social Media Ads — Meta, LinkedIn & YouTube",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "creative-engine",
      heading: "Creative is the targeting now",
      blocks: [
        {
          kind: "paragraph",
          text: "Platform algorithms find the audience; the creative decides who stops scrolling. We produce and rotate at least a dozen variants a month across hooks, formats and proof types, then let spend concentrate on the concepts that hold attention past three seconds.",
        },
        {
          kind: "list",
          title: "Concepts we test in every account",
          items: [
            "Problem-agitate hook with a customer quote",
            "Before/after or result screenshot with a specific number",
            "Founder-to-camera explainer, 20–30 seconds, captions burned in",
            "Offer-led static with a hard price or guarantee",
            "User-generated style testimonial, unpolished on purpose",
            "Comparison carousel against the common alternative",
          ],
        },
      ],
    },
    {
      id: "platform-fit",
      heading: "Which platform fits your business",
      blocks: [
        {
          kind: "table",
          head: ["Platform", "Strong for", "Typical cost per lead"],
          rows: [
            ["Meta (FB + IG)", "Local services, e-commerce, courses, healthcare", "Low to mid"],
            ["LinkedIn", "B2B, SaaS, recruitment, high-ticket services", "High but high quality"],
            [
              "YouTube",
              "Products needing demonstration or trust building",
              "Mid, strong assisted value",
            ],
            ["Instagram Reels", "Fashion, food, fitness, D2C brands", "Low, creative-dependent"],
          ],
        },
      ],
    },
    {
      id: "tracking",
      heading: "Tracking that survives privacy changes",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Server-side events",
              text: "Meta Conversions API and server-side GTM so conversions still register when browser tracking is blocked.",
            },
            {
              title: "Deduplication",
              text: "Event IDs matched between pixel and CAPI so one lead is not counted twice.",
            },
            {
              title: "Blended reporting",
              text: "Platform numbers compared against actual CRM or order data before any scaling decision.",
            },
            {
              title: "Incrementality checks",
              text: "Geo or budget holdouts on larger accounts to confirm paid social is adding revenue, not reporting it.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do you produce the ad creative?",
      answer:
        "Yes. We write hooks and scripts, edit short-form video from footage you supply or from stock, and design static and carousel assets. If you have an in-house creator, we brief them with the specific angles the data says to test next.",
    },
    {
      question: "How much budget do I need for Meta ads?",
      answer:
        "Around $20–$30 per day per active test lets a campaign exit the learning phase within a couple of weeks. Below that, results swing wildly and it becomes hard to tell a bad creative from an unlucky week.",
    },
    {
      question: "Why did my ads work then suddenly stop?",
      answer:
        "Almost always creative fatigue: the same audience has now seen the asset many times, frequency climbs and cost per result rises. The fix is a fresh concept, not a bid change — which is why we keep a creative pipeline running continuously.",
    },
    {
      question: "Is LinkedIn advertising too expensive?",
      answer:
        "Cost per click is high, but so is lead value. For services with a customer worth several thousand dollars, LinkedIn frequently produces the cheapest qualified pipeline because you can target by job title, company size and industry with real precision.",
    },
    {
      question: "Can you retarget my website visitors?",
      answer:
        "Yes. We build retargeting audiences from site visitors, video viewers, engagement and customer lists, then sequence different messages by how warm each group is instead of showing everyone the same ad.",
    },
    {
      question: "Do social ads help AI visibility?",
      answer:
        "Indirectly. Paid social builds branded search demand and third-party conversation about your brand, and both branded queries and independent mentions are signals that AI assistants weigh when deciding which companies to name in an answer.",
    },
    {
      question: "How do you handle iOS tracking limits?",
      answer:
        "With Conversions API, server-side tagging, aggregated event measurement configuration and modelled comparisons against your CRM data. We assume platform numbers overstate and validate against real revenue before scaling.",
    },
    {
      question: "What reporting do I get?",
      answer:
        "A weekly summary of spend, leads and cost per result plus creative-level performance, and a monthly review covering audience saturation, next creative concepts and budget recommendations.",
    },
    {
      question: "Can you run ads in multiple languages?",
      answer:
        "Yes. We run English campaigns across all our markets and can produce Hindi, Telugu and Arabic variants where the audience responds better in a local language.",
    },
    {
      question: "How soon will I see leads?",
      answer:
        "Most accounts see first leads within the opening week, but the honest read on cost per acquisition comes after two to three weeks, once the algorithm has exited learning and at least three creative concepts have had a fair share of budget.",
    },
  ],
};

export const socialMediaMarketing: PageContent = {
  slug: "/paid-advertising/social-media-marketing",
  title: "Social Media Marketing Services | AVR Web Consulting",
  h1: "Organic social media marketing that builds a brand AI can cite",
  description:
    "Content calendars, short-form video, community management and reporting for brands in India and globally. Organic social that supports SEO, AI visibility and paid performance.",
  eyebrow: "Social Media Marketing",
  serviceName: "Social Media Marketing",
  answer:
    "AVR Web Consulting manages organic social media across Instagram, Facebook, LinkedIn, YouTube and X: monthly content calendars, short-form video, graphics, captions with keyword intent, community replies and monthly analytics. Organic social builds the branded demand and third-party mentions that both search engines and AI assistants reward.",
  hero: {
    image: "/images/marketing-woman.webp",
    imageAlt: "Social Media Marketing Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Posts / month", value: "16–24" },
    { label: "Reels / month", value: "8" },
    { label: "Platforms", value: "5" },
    { label: "From", value: "$200/mo" },
  ],
  breadcrumb: [
    ...base,
    crumb("Social Media Marketing", "/paid-advertising/social-media-marketing"),
  ],
  related: [
    { label: "Social media ads", to: "/paid-advertising/social-media-ads" },
    { label: "Blogging & copywriting", to: "/content-marketing/blogging-copywriting" },
    { label: "AI visibility", to: "/ai-seo/ai-visibility" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Social Media Marketing Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "deliverables",
      heading: "What a monthly retainer includes",
      blocks: [
        {
          kind: "list",
          items: [
            "Monthly content calendar approved a week before the month starts",
            "16–24 posts including 8 short-form videos or reels",
            "Platform-native copy — no single caption blasted everywhere",
            "Hashtag, keyword and topic research tied to your SEO keyword map",
            "Community management: comments and DMs answered within one business day",
            "Monthly report on reach, engagement, follower quality and website referrals",
          ],
        },
      ],
    },
    {
      id: "content-pillars",
      heading: "The five content pillars we build every calendar on",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Educate",
              text: "Answer the questions your sales team hears every week. These clips become the raw material for FAQ pages and AI-citable answers.",
            },
            {
              title: "Prove",
              text: "Case studies, before/after numbers, reviews and client stories with permission.",
            },
            {
              title: "Humanise",
              text: "Team, process and behind-the-scenes content that makes the brand feel like people.",
            },
            {
              title: "Position",
              text: "Opinions on where your industry is heading. Distinctive views get quoted; safe views get scrolled past.",
            },
            {
              title: "Convert",
              text: "Offers, availability and clear calls to action — roughly one in six posts, no more.",
            },
          ],
        },
        {
          kind: "callout",
          title: "Repurposing rule",
          text: "Every long-form blog becomes a carousel, a reel script and three quote graphics. One research effort, five channels, consistent facts everywhere — which is exactly the entity consistency AI systems look for.",
        },
      ],
    },
    {
      id: "measurement",
      heading: "How we measure organic social",
      blocks: [
        {
          kind: "table",
          head: ["Metric", "What it tells you", "Why we track it"],
          rows: [
            [
              "Saves and shares",
              "Content was genuinely useful",
              "Best early signal of durable reach",
            ],
            ["Profile-to-site clicks", "Interest converted to intent", "Ties social to revenue"],
            [
              "Branded search volume",
              "Awareness is compounding",
              "Strong correlation with AI brand mentions",
            ],
            ["Comment quality", "Right audience, not just big audience", "Filters vanity growth"],
            [
              "Assisted conversions",
              "Social's role in multi-touch journeys",
              "Prevents unfair last-click judgement",
            ],
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Which platforms should my business be on?",
      answer:
        "Two done well beat five done poorly. Local services and D2C usually pick Instagram and Facebook; B2B and SaaS pick LinkedIn and YouTube. We choose based on where your buyers already spend attention, then commit to consistency there.",
    },
    {
      question: "How often should we post?",
      answer:
        "Four to six times a week on the primary platform, with at least two short-form videos. Consistency matters more than volume — an unpredictable feed loses reach far faster than a modest but regular one.",
    },
    {
      question: "Do you create video content?",
      answer:
        "Yes. We script, edit, caption and format short-form video. We can work from footage your team records on a phone, from existing webinar or event material, or from stock and motion graphics where filming is impractical.",
    },
    {
      question: "Will you post from our accounts?",
      answer:
        "Yes, with scheduled publishing through your own business accounts. You keep ownership and admin rights, and every calendar is approved by you before anything goes live.",
    },
    {
      question: "Does organic social affect SEO?",
      answer:
        "Not as a direct ranking factor, but strongly as a demand generator. Social drives branded search, earns links from people who discovered you there, and produces the third-party mentions AI models use when deciding who to recommend.",
    },
    {
      question: "How long before social shows results?",
      answer:
        "Engagement usually improves within four to six weeks of consistent posting. Follower growth and referral traffic typically become meaningful around month three, and branded search lift shows around months four to six.",
    },
    {
      question: "Do you handle negative comments?",
      answer:
        "Yes. We reply to routine complaints using an approved tone and escalation guide, and anything sensitive — legal, medical or safety-related — is escalated to your team immediately rather than answered on the fly.",
    },
    {
      question: "Can you grow followers quickly?",
      answer:
        "We do not buy followers or use engagement pods, because a bloated follower count with dead engagement suppresses reach and misleads your reporting. Growth here is earned through content that people save and share.",
    },
    {
      question: "What do you need from us each month?",
      answer:
        "About an hour: approving the calendar, sending any product or event updates, and ideally recording a few short clips. The more raw material you can give us, the more distinctive the output.",
    },
    {
      question: "Can social be bundled with SEO?",
      answer:
        "Yes, and it is our most popular combination. The same keyword and question research powers both, so the blog, the FAQ hub and the social calendar all reinforce one consistent set of brand facts.",
    },
  ],
};

export const advertisingPages = [
  paidAdvertisingHub,
  googleAds,
  socialMediaAds,
  socialMediaMarketing,
];

export const advertisingHeroFallback = seoConcept.url;
