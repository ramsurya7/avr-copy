import { business, fullAddress } from "@/content/site";

export type FaqItem = { question: string; answer: string };

type HeadInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string | undefined;
  type?: "website" | "article" | "product";
  image?: string;
  noindex?: boolean;
  schemas?: (Record<string, unknown> | null | undefined)[];
  links?: Record<string, string>[];
};

export const SITE_URL = "https://avrwebconsulting.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function toAbsoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    url: SITE_URL,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    email: business.email,
    telephone: business.phone,
    logo: `${SITE_URL}/1790648464804.png`,
    image: `${SITE_URL}/1790648464804.png`,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phone,
        contactType: "customer service",
        email: business.email,
        availableLanguage: ["English", "Telugu", "Hindi"],
        areaServed: ["IN", "US", "GB", "AE"],
      },
    ],
    areaServed: [
      "India",
      "Visakhapatnam",
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Kolkata",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
      "Europe",
    ],
    knowsAbout: [
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Large Language Model Optimization",
      "AI Visibility",
      "Local SEO",
      "Technical SEO",
      "Link Building",
      "Web Development",
      "Business Automation",
      "E-commerce",
    ],
    openingHours: "Mo-Sa 09:30-19:00",
    sameAs: Object.values(business.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: business.name,
    description: business.description,
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema(input: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
}) {
  const pageUrl = toAbsoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function contactPageSchema() {
  const pageUrl = `${SITE_URL}/contact`;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Contact AVR Web Consulting — SEO & AI Visibility Audit",
    description:
      "Contact AVR Web Consulting in Visakhapatnam to request an SEO and AI visibility audit. Email, phone and WhatsApp support.",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": ORG_ID },
  };
}

export function aboutPageSchema() {
  const pageUrl = `${SITE_URL}/about`;
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "About AVR Web Consulting — Hybrid SEO + AI Visibility Agency",
    description:
      "Founded in 2016 in Visakhapatnam, AVR Web Consulting combines traditional search engine optimization with generative engine and answer engine optimization.",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": ORG_ID },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { label: string; to: string }[]) {
  if (!trail || trail.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: toAbsoluteUrl(t.to),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  about?: string[];
  mentions?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: toAbsoluteUrl(input.path),
    provider: { "@id": ORG_ID },
    areaServed: [
      "India",
      "Visakhapatnam",
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Kolkata",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
      "Europe",
    ],
    about: input.about?.map((name) => ({ "@type": "Thing", name })) || [],
    mentions: input.mentions?.map((name) => ({ "@type": "Thing", name })) || [],
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  about?: string[];
  mentions?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: toAbsoluteUrl(input.path),
    image: input.image ? toAbsoluteUrl(input.image) : `${SITE_URL}/1790648464804.png`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: input.author ?? business.name,
      url: SITE_URL,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: toAbsoluteUrl(input.path),
    about: input.about?.map((name) => ({ "@type": "Thing", name })) || [],
    mentions: input.mentions?.map((name) => ({ "@type": "Thing", name })) || [],
  };
}

export function localBusinessSchema(city: string, region?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${business.name} — SEO Agency ${city}`,
    description: `${business.name} provides SEO, AI SEO and digital marketing services in ${city}${
      region ? `, ${region}` : ""
    }.`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: city,
    parentOrganization: { "@id": ORG_ID },
  };
}

/** Builds a complete, self-referencing head() payload for a route. */
export function buildHead({
  title,
  description,
  path,
  keywords,
  type = "website",
  image,
  noindex,
  schemas = [],
  links = [],
}: HeadInput) {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImageUrl = image ? toAbsoluteUrl(image) : undefined;

  const validSchemas = schemas.filter(Boolean);

  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: business.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "geo.placename", content: business.address.city },
    { name: "geo.region", content: "IN-AP" },
    { name: "business.contact_data.street_address", content: fullAddress },
  ];

  if (ogImageUrl) {
    meta.push({ property: "og:image", content: ogImageUrl });
    meta.push({ name: "twitter:image", content: ogImageUrl });
  }
  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  return {
    meta,
    links: [{ rel: "canonical", href: canonicalUrl }, ...(links || [])],
    scripts: validSchemas.map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
