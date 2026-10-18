import type { Faq } from "@/content/types";

export const homeAnswer =
  "AVR Web Consulting is a full-service digital marketing agency in Visakhapatnam, India. We help businesses improve their online presence through SEO, advertising, social media marketing, content marketing, and web design and development, with advanced capabilities in AI search, custom full-stack development, AI agents, and business automation.";

export const homeStats = [
  { label: "Search visibility", value: "SEO" },
  { label: "Customer acquisition", value: "Ads" },
  { label: "Brand authority", value: "Content" },
  { label: "Digital experiences", value: "Web" },
];

export const homeServices: { title: string; text: string; to: string; items: string[] }[] = [
  {
    title: "SEO Services",
    text: "Improve search visibility, technical website health, local discovery, and relevant organic traffic across your target markets.",
    to: "/seo-services",
    items: [
      "Global SEO",
      "Local SEO",
      "Technical SEO",
      "GEO Targeting SEO",
      "Local Citations & GMB",
    ],
  },
  {
    title: "Advertising",
    text: "Reach relevant audiences, attract targeted traffic, and support lead generation through carefully managed campaigns.",
    to: "/paid-advertising",
    items: ["Google Ads", "Social Media Ads", "Social Media Marketing"],
  },
  {
    title: "Content Marketing",
    text: "Build authority and audience engagement with useful content, clear brand communication, and relevant link strategies.",
    to: "/content-marketing",
    items: ["Blogging & Copywriting", "Guest Posting & Link Building"],
  },
  {
    title: "Web Design & Development",
    text: "Create a credible, responsive online presence designed for usability, conversions, online sales, and business growth.",
    to: "/web-design-development",
    items: ["WordPress Development", "E-commerce Development"],
  },
];

export const homeSeoServices = [
  {
    title: "SEO Services Overview",
    text: "A coordinated strategy for stronger organic visibility, relevant traffic, and a healthier search presence.",
    to: "/seo-services",
  },
  {
    title: "Global SEO",
    text: "Build visibility across countries and languages with market-aware research, site structure, and content.",
    to: "/seo-services/global-seo",
  },
  {
    title: "Local SEO",
    text: "Strengthen local discovery for people searching for relevant services in your city or service area.",
    to: "/seo-services/local-seo",
  },
  {
    title: "Technical SEO",
    text: "Improve crawling, indexing, site performance, structured data, and the technical health of your website.",
    to: "/seo-services/technical-seo",
  },
  {
    title: "GEO Targeting SEO",
    text: "Target specific cities, regions, or countries with geographically relevant pages and search signals.",
    to: "/seo-services/geo-targeting-seo",
  },
  {
    title: "Local Citations & GMB",
    text: "Improve business information consistency and local presence through citations and Google Business Profile support.",
    to: "/seo-services/local-citations-gmb",
  },
];

export const homeGrowthServices = [
  {
    title: "Advertising",
    text: "Google Ads, Social Media Ads, and Social Media Marketing help businesses reach relevant audiences, generate targeted visits, and create measurable lead opportunities.",
    to: "/paid-advertising",
  },
  {
    title: "Content Marketing",
    text: "Blogging, copywriting, guest posting, and relevant link building support communication, engagement, authority, SEO, and organic visibility.",
    to: "/content-marketing",
  },
  {
    title: "Web Design & Development",
    text: "WordPress and e-commerce development create responsive, usable experiences that support credibility, conversions, online sales, and digital growth.",
    to: "/web-design-development",
  },
];

export const homeProcess = [
  {
    title: "Get found",
    text: "SEO, Local SEO, Technical SEO, and useful content make your business easier to discover.",
  },
  {
    title: "Get traffic",
    text: "Google Ads and social media marketing help attract relevant visitors to your digital presence.",
  },
  {
    title: "Build authority",
    text: "Content, blogging, guest posting, and relevant link building strengthen your online presence.",
  },
  {
    title: "Convert visitors",
    text: "Professional websites and e-commerce experiences help turn interest into enquiries and sales.",
  },
  {
    title: "Adapt to AI",
    text: "AI SEO, AI visibility, custom development, and automation help your business prepare for digital change.",
  },
];

export const homeAiServices = [
  {
    title: "AI SEO Overview",
    to: "/ai-seo",
    text: "Connect established SEO foundations with emerging AI-driven discovery opportunities.",
  },
  {
    title: "Answer Engine Optimization",
    to: "/ai-seo/answer-engine-optimization",
    text: "Structure clear, useful answers that answer engines can understand and retrieve.",
  },
  {
    title: "GEO SEO",
    to: "/ai-seo/geo-seo",
    text: "Generative Engine Optimization for clearer entities, sourceable information, and AI discovery.",
  },
  {
    title: "LLM SEO",
    to: "/ai-seo/llm-seo",
    text: "Improve content structure and context for discovery through large language model experiences.",
  },
  {
    title: "LLMO",
    to: "/ai-seo/llmo",
    text: "Make important business information easier for language models to interpret and retrieve.",
  },
  {
    title: "AI Visibility",
    to: "/ai-seo/ai-visibility",
    text: "Strengthen the signals that support visibility opportunities across AI-powered search.",
  },
  {
    title: "AI Overviews",
    to: "/ai-seo/ai-overviews",
    text: "Prepare accurate, well-structured content for Google's AI-assisted search experiences.",
  },
  {
    title: "AI Citations & Mentions",
    to: "/ai-seo/ai-citations-mentions",
    text: "Improve source clarity, factual consistency, and the potential to be referenced in AI answers.",
  },
  {
    title: "AI Retrieval Systems",
    to: "/ai-seo/ai-retrieval-systems",
    text: "Create machine-readable information layers that support reliable content retrieval.",
  },
];

export const homeDevelopmentTechnologies = [
  "React",
  "Node.js",
  "JavaScript",
  "JSON",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "Databases",
  "Full-Stack Development",
  "AI-Assisted Development",
];

export const homeAutomationServices = [
  {
    title: "n8n Automations",
    text: "Connect business tools and automate repeatable tasks through dependable multi-step workflows.",
    to: "/automation-ai-agents/n8n-automation",
  },
  {
    title: "AI Agent Development",
    text: "Build focused AI agents that assist with defined business processes, information, and actions.",
    to: "/automation-ai-agents/ai-agent-development",
  },
  {
    title: "Business Workflow Automation",
    text: "Reduce repetitive work and improve operational efficiency by connecting systems and processes.",
    to: "/automation-ai-agents/n8n-automation",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "What digital marketing services does AVR Web Consulting provide?",
    answer:
      "We provide SEO, Google Ads, social media advertising and marketing, content marketing, WordPress development, and e-commerce development. We also offer AI SEO, custom full-stack development, AI agents, and business automation.",
  },
  {
    question: "Do you provide Local SEO and Global SEO?",
    answer:
      "Yes. Local SEO supports discovery in specific cities and service areas, while Global SEO helps businesses build search visibility across countries and languages.",
  },
  {
    question: "Do you provide Google Ads and Social Media Marketing?",
    answer:
      "Yes. We manage Google Ads, social media advertising, and organic social media marketing to help businesses reach relevant audiences and create measurable traffic and lead opportunities.",
  },
  {
    question: "Do you provide WordPress and E-commerce Development?",
    answer:
      "Yes. We build responsive WordPress websites and e-commerce experiences focused on usability, credibility, conversions, and online sales functionality.",
  },
  {
    question: "What is AI SEO?",
    answer:
      "AI SEO improves content structure, entity clarity, machine-readable information, and source quality to support discovery across AI-powered search and answer experiences.",
  },
  {
    question: "What is Answer Engine Optimization?",
    answer:
      "Answer Engine Optimization structures content around clear questions, direct answers, supporting detail, and reliable context so answer engines can understand and retrieve it more effectively.",
  },
  {
    question: "How is AI SEO different from traditional SEO?",
    answer:
      "Traditional SEO focuses on visibility in search results. AI SEO also considers how answer engines and language models interpret, retrieve, and present information. The two approaches share strong technical and content foundations.",
  },
  {
    question: "Do you build custom full-stack websites?",
    answer:
      "Yes. When standard website platforms are not enough, we build custom web experiences and applications using modern front-end, server, and database technologies, including AI-assisted development workflows.",
  },
  {
    question: "Do you provide AI agents and n8n automation?",
    answer:
      "Yes. We develop focused AI agents, n8n automations, and connected business workflows designed to reduce repetitive work and improve operational efficiency.",
  },
  {
    question: "What is the difference between GEO Targeting SEO and GEO SEO?",
    answer:
      "GEO Targeting SEO focuses on geographic markets such as cities, regions, and countries. GEO SEO means Generative Engine Optimization and focuses on improving how information is understood in AI-driven discovery experiences.",
  },
];
