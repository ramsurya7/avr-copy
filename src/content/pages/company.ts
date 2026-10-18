import type { PageContent } from "@/content/types";
import { business, fullAddress } from "@/content/site";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";

export const pricingPage: PageContent = {
  slug: "/pricing",
  title: "Affordable SEO Services for Small Businesses | AVR Web",
  h1: "Tailored SEO and AI Digital Marketing Solutions",
  eyebrow: "Pricing",
  description:
    "Budget-friendly SEO for small businesses: on-page optimization, backlinks and reporting from a team that keeps pricing clear. See plans and book an audit.",
  keywords: "affordable seo services for small businesses, affordable seo expert",
  answer:
    "At AVR Web Consulting, every project is tailored to your unique requirements, goals, and market competition. We provide transparent, value-driven pricing customized to your specific scope with no lock-in contracts, 100% manual white-hat execution, and regular reporting.",
  hero: {
    image: "/images/pricing-hero.jpg",
    imageAlt: "SEO & AI SEO Pricing in India — Request a Quote | AVR illustration",
  },
  highlights: [
    { label: "Pricing Model", value: "Custom & Scoped" },
    { label: "Contract", value: "Month-to-month" },
    { label: "Strategy", value: "Tailored to Goals" },
    { label: "First audit", value: "On request" },
  ],
  serviceName: "SEO and AI SEO packages",
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Pricing", to: "/pricing" },
  ],
  related: [
    { label: "SEO Services", to: "/seo-services" },
    { label: "AI SEO", to: "/ai-seo" },
    { label: "Case Studies", to: "/case-studies" },
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
            "Tailored strategies customized to your industry, competition, and project scope",
            "Data-driven approach without relying on guesswork or one-size-fits-all packages",
            "Focus on sustainable, long-term search visibility and measurable ROI",
            "Fully aligned with modern Answer Engine, GEO, and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-drives-price",
      heading: "What changes your price",
      blocks: [
        {
          kind: "list",
          items: [
            "Number of target keywords and how competitive they are",
            "How many locations, languages or countries you target",
            "Website size — a 12-page site is faster to fix than a 12,000-SKU store",
            "Whether you need content produced or only optimised",
            "Link volume required to close the authority gap with competitors",
            "AI visibility scope: how many prompts and engines we track monthly",
          ],
        },
      ],
    },
    {
      id: "included",
      heading: "Included in every plan",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Audit first",
              text: "We never quote before auditing. You get findings and priorities before you pay anything.",
            },
            {
              title: "Manual, safe execution",
              text: "No automated link spam, no AI-dumped content. Every change is reviewed by a human.",
            },
            {
              title: "Monthly reporting call",
              text: "Rankings, traffic, conversions and AI citations in one plain-language report.",
            },
            {
              title: "Direct access",
              text: "WhatsApp and email access to the strategist actually doing the work.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How is project pricing determined?",
      answer:
        "Because every business has different competition levels, target markets, and project goals, our pricing is customized to your exact requirements. We provide a transparent scope and quote after understanding your project.",
    },
    {
      question: "Is there a minimum contract?",
      answer:
        "No. Every engagement is month-to-month. We ask for a fair 3-month view because SEO compounds, but you can cancel any month with 15 days' notice.",
    },
    {
      question: "Why is AVR Web Consulting cost-effective?",
      answer:
        "We run a lean, senior team from Visakhapatnam, India, with no expensive sales layer. You pay directly for senior execution hours and strategy, not agency bloat.",
    },
    {
      question: "Does competitive pricing mean low quality?",
      answer:
        "No. Our competitive rates come from our efficient delivery model in India, not shortcuts. All work is manual and white-hat — no PBNs, no automated links, no scraped content.",
    },
    {
      question: "What does the AI SEO add-on include?",
      answer:
        "Answer-first content rewrites, entity and schema work, llms.txt and crawler access setup, plus monthly tracking of how often ChatGPT, Gemini, Perplexity and Google AI Overviews cite your brand.",
    },
    {
      question: "Do you charge a setup fee?",
      answer:
        "No setup fee. The initial audit, keyword map and technical fix list are included in your first month.",
    },
    {
      question: "How do you bill international clients?",
      answer:
        "US, UK, UAE and EU clients are billed in USD via bank transfer, Wise or card. Indian clients are billed in INR with GST invoices.",
    },
    {
      question: "Can I buy a one-off audit instead of an ongoing plan?",
      answer:
        "Yes. A full technical, on-page and AI visibility audit is available as a standalone deliverable, and that fee is credited if you start an ongoing plan within 30 days.",
    },
    {
      question: "What results should I expect from our services?",
      answer:
        "Typically measurable technical and on-page gains in 30 days, first ranking movement in 60-90 days, and compounding traffic growth from month 4. Competitive national terms take longer.",
    },
    {
      question: "Do prices include ad spend?",
      answer:
        "No. Management fees are separate from ad budget, which you pay directly to Google or Meta so you keep full ownership of the ad accounts.",
    },
  ],
};

export const aboutPage: PageContent = {
  slug: "/about",
  title: "About AVR Web Consulting — SEO & AI Search Agency in India",
  h1: "About AVR Web Consulting",
  eyebrow: "About us",
  description:
    "AVR Web Consulting is a digital marketing agency in Visakhapatnam, India serving clients across India, the US, UK, UAE and Europe with hybrid traditional SEO and AI search optimisation.",
  answer:
    "AVR Web Consulting is a digital marketing agency headquartered in Visakhapatnam, India. We combine traditional SEO with AI search optimisation (AEO, GEO, LLMO) so brands rank on Google and get quoted by ChatGPT, Gemini and Perplexity. We serve clients in India, the US, UK, UAE and Europe.",
  hero: {
    image: "/images/team-meeting-top-down.webp",
    imageAlt: "About AVR Web Consulting — SEO & AI Search Agency in India illustration",
  },
  highlights: [
    { label: "Based in", value: "Visakhapatnam" },
    { label: "Markets served", value: "India + Global" },
    { label: "Focus", value: "SEO + AI search" },
    { label: "Work model", value: "100% manual" },
  ],
  serviceName: "Digital marketing agency",
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ],
  related: [
    { label: "Case Studies", to: "/case-studies" },
    { label: "Pricing", to: "/pricing" },
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
            "Expert strategies tailored for About AVR Web Consulting — SEO & AI Search Agency in India",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "story",
      heading: "Why we exist",
      blocks: [
        {
          kind: "paragraph",
          text: "Search changed twice in five years. First Google started answering questions on its own results page; then ChatGPT, Gemini, Perplexity and AI Overviews started answering them without a results page at all. Most agencies still sell the 2018 playbook. We rebuilt ours around a simple goal: your brand should be the source an AI quotes, not the page nobody scrolls to.",
        },
        {
          kind: "paragraph",
          text: "AVR Web Consulting was founded to make that level of work affordable. We are a small senior team, not a call centre — the person who audits your site is the person who fixes it and reports on it.",
        },
      ],
    },
    {
      id: "how-we-work",
      heading: "How we work",
      blocks: [
        {
          kind: "list",
          title: "Principles we do not break",
          items: [
            "Manual, safe, white-hat execution — no automated links, no PBNs, no scraped or AI-dumped content",
            "Answer-first content structured for both human readers and machine retrieval",
            "Fixed monthly pricing with no lock-in, so we earn the renewal every month",
            "Transparent reporting: rankings, traffic, conversions and AI citations in one document",
            "You own everything — accounts, content, schema and data stay with you",
          ],
        },
      ],
    },
    {
      id: "capabilities",
      heading: "What we do",
      blocks: [
        {
          kind: "table",
          head: ["Discipline", "What it covers"],
          rows: [
            ["Traditional SEO", "Technical, on-page, local, national and international SEO"],
            ["AI SEO", "AEO, GEO, LLM SEO, LLMO, AI visibility tracking, AI Overviews"],
            ["Paid advertising", "Google Ads, Meta, LinkedIn and remarketing"],
            ["Content marketing", "Blogging, copywriting, guest posting and digital PR"],
            ["Web design & development", "WordPress, custom builds and e-commerce stores"],
          ],
        },
      ],
    },
    {
      id: "coverage",
      heading: "Where we work",
      blocks: [
        {
          kind: "paragraph",
          text: `Our head office is at ${fullAddress}. We deliver remotely across India — Visakhapatnam, Hyderabad, Bengaluru, Chennai, Mumbai, Delhi, Pune and Kolkata — and internationally in the United States, United Kingdom, United Arab Emirates and Europe, working overlapping hours with each timezone.`,
        },
      ],
    },
    {
      id: "follow-us",
      heading: "Follow Our Journey",
      blocks: [
        {
          kind: "social",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Who is AVR Web Consulting?",
      answer:
        "AVR Web Consulting is a digital marketing agency based in Visakhapatnam, India, specialising in SEO and AI search optimisation for clients in India, the US, UK, UAE and Europe.",
    },
    {
      question: "Where is AVR Web Consulting located?",
      answer: `Our office is at ${fullAddress}. We work with clients remotely worldwide and meet on-site with clients in and around Visakhapatnam.`,
    },
    {
      question: "What makes AVR different from other SEO agencies?",
      answer:
        "We run a hybrid model: traditional SEO for Google plus AI search optimisation for ChatGPT, Gemini, Perplexity and AI Overviews. Work is manual and safe, pricing is fixed and low, and there is no lock-in contract.",
    },
    {
      question: "How big is the team?",
      answer:
        "We are a compact senior team of strategists, content specialists, developers and analysts. Small enough that you speak to the person doing the work, resourced enough to run enterprise programs.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Startups, e-commerce, healthcare, fashion and retail, SaaS, real estate, education, travel, legal services and manufacturing. See our industries section for sector-specific playbooks.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. Roughly half our work is outside India, across the US, UK, UAE and Europe. We handle timezone overlap, currency billing and market-specific search behaviour.",
    },
    {
      question: "Is your work safe from Google penalties?",
      answer:
        "Yes. Everything we do follows Google's spam policies — manual outreach for links, original human-edited content and no manipulative tactics.",
    },
    {
      question: "How do you report progress?",
      answer:
        "A monthly report and call covering rankings, organic traffic, conversions, technical health and AI citation share, written in plain language with the next month's priorities.",
    },
    {
      question: "How do I start working with AVR?",
      answer:
        "Request an audit through the contact page. We review your site and competitors, send findings and a fixed monthly quote, and start once you approve.",
    },
    {
      question: "Do you offer one-off projects?",
      answer:
        "Yes. Audits, website builds, migrations and content packages are available as fixed-price one-off projects without a retainer.",
    },
  ],
};

export const privacyPage: PageContent = {
  slug: "/privacy-policy",
  title: "Privacy Policy | AVR Web Consulting",
  h1: "Privacy policy",
  eyebrow: "Legal",
  description:
    "How AVR Web Consulting collects, uses, stores and protects personal data submitted through this website and during client engagements.",
  answer:
    "AVR Web Consulting collects only the data you submit through our contact and audit forms — name, email, phone, website and message — plus anonymised analytics. We never sell personal data, we retain enquiry data for 24 months, and you can request deletion at any time by emailing us.",
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Privacy Policy",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-we-collect",
      heading: "Data we collect",
      blocks: [
        {
          kind: "list",
          items: [
            "Contact details you submit: name, email address, phone number, company and website URL",
            "The content of your enquiry or audit request",
            "Anonymised usage analytics: pages viewed, referrer, device type, approximate region",
            "Client project data shared with us during an engagement, such as analytics and search console access",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      heading: "How we use your data",
      blocks: [
        {
          kind: "list",
          items: [
            "To respond to your enquiry and prepare a proposal or audit",
            "To deliver contracted services and report on results",
            "To send service updates you have asked for — never unsolicited bulk marketing",
            "To improve site performance using aggregated, non-identifying analytics",
          ],
        },
      ],
    },
    {
      id: "sharing-retention",
      heading: "Sharing, retention and security",
      blocks: [
        {
          kind: "paragraph",
          text: "We do not sell or rent personal data. Data is shared only with processors required to run the business — hosting, analytics and email delivery — under confidentiality obligations. Enquiry data is retained for 24 months; client records are retained for 7 years where tax law requires.",
        },
        {
          kind: "paragraph",
          text: "Access to client accounts is limited to the team members working on your project, protected by unique credentials and two-factor authentication where available.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      blocks: [
        {
          kind: "paragraph",
          text: `You can request access to, correction of, or deletion of your personal data, and you can object to processing. Email ${business.email} and we will respond within 30 days. Visitors in the EU and UK have these rights under GDPR; Indian users have equivalent rights under the DPDP Act.`,
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Does AVR Web Consulting sell my data?",
      answer: "No. We never sell, rent or trade personal data with third parties.",
    },
    {
      question: "How long is my enquiry data kept?",
      answer:
        "Enquiry and audit request data is kept for 24 months, after which it is deleted unless you become a client.",
    },
    {
      question: "How do I request deletion of my data?",
      answer: `Email ${business.email} with the subject "Data deletion" and we will remove your records within 30 days and confirm in writing.`,
    },
    {
      question: "Do you use cookies?",
      answer:
        "We use only essential cookies and privacy-friendly aggregate analytics. We do not run third-party advertising trackers on this site.",
    },
    {
      question: "Is my client data confidential?",
      answer:
        "Yes. Client strategies, data and results are confidential and are never published as case studies without written permission.",
    },
    {
      question: "Who do I contact about privacy?",
      answer: `Contact ${business.email} or call ${business.phone} for any privacy question or complaint.`,
    },
  ],
};

export const termsPage: PageContent = {
  slug: "/terms-of-service",
  title: "Terms of Service | AVR Web Consulting",
  h1: "Terms of service",
  eyebrow: "Legal",
  description:
    "The terms governing use of the AVR Web Consulting website and the delivery of SEO, AI SEO, advertising, content and web development services.",
  answer:
    "These terms cover engagement scope, fees, cancellation, ownership and liability for AVR Web Consulting services. Plans are month-to-month with 15 days' notice to cancel, invoices are due within 7 days, clients own all delivered assets, and we make no guarantee of specific search rankings.",
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Terms of Service", to: "/terms-of-service" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Terms of Service",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "engagement",
      heading: "Engagement and scope",
      blocks: [
        {
          kind: "paragraph",
          text: "Work begins when you approve a written proposal that defines deliverables, timelines and the monthly fee. Anything outside that scope is quoted separately before work starts.",
        },
      ],
    },
    {
      id: "fees",
      heading: "Fees, invoicing and cancellation",
      blocks: [
        {
          kind: "list",
          items: [
            "Monthly fees are invoiced in advance and payable within 7 days",
            "Ad spend is paid by you directly to the ad platform and is not part of our fee",
            "Plans run month-to-month; either party may cancel with 15 days' written notice",
            "Work paused for non-payment beyond 15 days may be suspended until settled",
          ],
        },
      ],
    },
    {
      id: "ownership",
      heading: "Ownership and confidentiality",
      blocks: [
        {
          kind: "paragraph",
          text: "On payment, you own all content, code, schema and creative assets we produce for you, and you retain ownership of all advertising and analytics accounts. Both parties keep the other's commercial information confidential.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Results and liability",
      blocks: [
        {
          kind: "paragraph",
          text: "Search engines and AI assistants control their own ranking and citation systems. We commit to defined deliverables and best-practice execution, not to specific positions, traffic volumes or AI mentions. Our total liability in any dispute is limited to the fees paid in the preceding three months.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is there a lock-in contract?",
      answer: "No. Services run month-to-month and can be cancelled with 15 days' written notice.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No ethical agency can. We guarantee defined deliverables, transparent reporting and best-practice execution — not specific positions controlled by Google or AI assistants.",
    },
    {
      question: "When are invoices due?",
      answer:
        "Monthly invoices are issued in advance and payable within 7 days of the invoice date.",
    },
    {
      question: "Who owns the content and website you build?",
      answer:
        "You do. On payment, all content, code, schema and creative assets transfer to you, and you keep ownership of every platform account.",
    },
    {
      question: "What happens if I cancel mid-month?",
      answer:
        "We complete the current paid month, hand over all assets and access, and do not invoice further. Fees already paid for the current month are non-refundable.",
    },
    {
      question: "Which law governs these terms?",
      answer:
        "These terms are governed by the laws of India, with courts in Visakhapatnam, Andhra Pradesh having jurisdiction, unless a separate signed agreement states otherwise.",
    },
  ],
};

export const companyPages = [pricingPage, aboutPage, privacyPage, termsPage];
