import type { Faq } from "@/content/types";
import { seoPages } from "@/content/pages/seo";
import { aiSeoPages } from "@/content/pages/ai-seo";
import { advertisingPages } from "@/content/pages/advertising";
import { contentPages } from "@/content/pages/content-marketing";
import { webDesignPages } from "@/content/pages/web-design";
import { industriesHub, industryPages } from "@/content/pages/industries";
import { locationsHub, locationPages } from "@/content/pages/locations";
import { caseStudiesHub, caseStudyPages } from "@/content/pages/case-studies";
import { blogHub, blogPosts } from "@/content/pages/blog";
import { companyPages } from "@/content/pages/company";
import { homeFaqs } from "@/content/pages/home";

export type FaqEntry = Faq & {
  category: string;
  source: string;
  sourceTo: string;
};

type Group = { category: string; label: string; to: string; faqs: Faq[] };

const groups: Group[] = [
  { category: "Home", label: "AVR Web Consulting", to: "/", faqs: homeFaqs },
  ...seoPages.map((p) => ({ category: "SEO Services", label: p.h1, to: p.slug, faqs: p.faqs })),
  ...aiSeoPages.map((p) => ({ category: "AI SEO", label: p.h1, to: p.slug, faqs: p.faqs })),
  ...advertisingPages.map((p) => ({
    category: "Paid Advertising",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
  ...contentPages.map((p) => ({
    category: "Content Marketing",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
  ...webDesignPages.map((p) => ({ category: "Web Design", label: p.h1, to: p.slug, faqs: p.faqs })),
  ...[industriesHub, ...industryPages].map((p) => ({
    category: "Industries",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
  ...[locationsHub, ...locationPages].map((p) => ({
    category: "Locations",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
  ...[caseStudiesHub, ...caseStudyPages].map((p) => ({
    category: "Case Studies",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
  ...[blogHub, ...blogPosts].map((p) => ({
    category: "Blog",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
  ...companyPages.map((p) => ({
    category: "Company & Legal",
    label: p.h1,
    to: p.slug,
    faqs: p.faqs,
  })),
];

export const allFaqs: FaqEntry[] = groups.flatMap((g) =>
  g.faqs.map((f) => ({ ...f, category: g.category, source: g.label, sourceTo: g.to })),
);

export const faqCategories: string[] = Array.from(new Set(allFaqs.map((f) => f.category)));

export const faqCountByCategory: Record<string, number> = Object.fromEntries(
  faqCategories.map((c) => [c, allFaqs.filter((f) => f.category === c).length]),
);

/** Top FAQs surfaced in FAQPage schema (schema is capped to avoid bloat). */
export const featuredFaqs: Faq[] = allFaqs
  .slice(0, 40)
  .map(({ question, answer }) => ({ question, answer }));
