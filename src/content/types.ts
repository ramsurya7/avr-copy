export type Faq = { question: string; answer: string };

export type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "steps"; title?: string; items: { title: string; text: string }[] }
  | { kind: "table"; title?: string; head: string[]; rows: string[][] }
  | { kind: "callout"; title: string; text: string }
  | { kind: "social" };

export type PageSection = {
  id: string;
  heading: string;
  blocks: ContentBlock[];
};

export type Author = {
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

export type PageContent = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords?: string | undefined;
  eyebrow?: string;
  answer: string;
  hero?: { image?: string; imageAlt?: string };
  highlights?: { label: string; value: string }[];
  sections: PageSection[];
  faqs: Faq[];
  serviceName?: string;
  related?: { label: string; to: string }[];
  breadcrumb: { label: string; to: string }[];
  author?: Author;
};
