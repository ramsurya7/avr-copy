import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageTemplate";
import type { PageContent } from "@/content/types";
import { business, fullAddress } from "@/content/site";
import team from "@/assets/team-meeting.jpg.asset.json";
import {
  AnswerBlock,
  Breadcrumbs,
  CTABand,
  ContentSections,
  FaqAccordion,
  RelatedLinks,
  Section,
  StatBand,
  TableOfContents,
} from "@/components/site/sections";
import { PricingInquiryForm } from "@/components/site/PricingInquiryForm";

const contactPage: PageContent = {
  slug: "/contact",
  title: "Contact AVR Web Consulting — SEO & AI Visibility Audit",
  h1: "Talk to AVR Web Consulting",
  description:
    "Contact AVR Web Consulting in Visakhapatnam to request an SEO and AI visibility audit. Email, phone and WhatsApp support for clients across India, the US, UK, UAE and Europe.",
  eyebrow: "Contact",
  serviceName: "SEO and AI SEO consulting",
  answer: `Contact AVR Web Consulting by email at ${business.email}, by phone on ${business.phone}, or on WhatsApp. We reply within one business day, work ${business.hours}, and offer an SEO and AI visibility audit covering technical health, rankings and AI answer citations.`,
  hero: {
    image: "/images/team-video-call-meeting.webp",
    imageAlt: "Contact AVR Web Consulting — SEO & AI Visibility Audit illustration",
  },
  highlights: [
    { label: "Response time", value: "< 24 hrs" },
    { label: "Audit", value: "On request" },
    { label: "Hours", value: "Mon–Sat" },
    { label: "Clients in", value: "IN · US · UK · UAE" },
  ],
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Contact", to: "/contact" },
  ],
  related: [
    { label: "SEO services", to: "/seo-services" },
    { label: "AI SEO services", to: "/ai-seo" },
  ],
  sections: [
    {
      id: "reach-us",
      heading: "How to reach us",
      blocks: [
        {
          kind: "table",
          head: ["Channel", "Details", "Best for"],
          rows: [
            ["Email", business.email, "Briefs, proposals, documents"],
            ["Phone", business.phone, "Quick questions and scoping calls"],
            ["WhatsApp", business.phone, "Ongoing client updates"],
            ["Office", fullAddress, "In-person meetings in Visakhapatnam"],
          ],
        },
        {
          kind: "social",
        },
        {
          kind: "callout",
          title: "Request an audit, no obligation",
          text: "Send us your domain and top three competitors. You will receive a technical health summary, keyword gap snapshot and an AI visibility baseline showing which assistants already mention your brand.",
        },
      ],
    },
    {
      id: "what-happens",
      heading: "What happens after you get in touch",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Discovery call",
              text: "A 30-minute call to understand your market, goals, current performance and constraints.",
            },
            {
              title: "Audit delivery",
              text: "We run the technical, keyword and AI visibility audit and walk you through the findings.",
            },
            {
              title: "Proposal",
              text: "A scoped plan with deliverables, timelines and transparent monthly pricing — no lock-in contracts.",
            },
            {
              title: "Kick-off",
              text: "Access setup, baseline reporting and the first 30-day sprint begins.",
            },
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
          text: "Our delivery team is based in Visakhapatnam, India, and we work with clients across India, the United States, the United Kingdom, the UAE and Europe. Reporting calls are scheduled in your time zone, and all work is delivered manually by named specialists rather than automated tools.",
        },
        {
          kind: "list",
          items: [
            "India — local SEO, GMB and multi-city campaigns",
            "United States and Canada — competitive national SEO and AI visibility",
            "United Kingdom and Europe — multilingual and multi-region programmes",
            "UAE and the Gulf — bilingual English/Arabic search strategies",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I request an SEO audit?",
      answer: `Email ${business.email} or call ${business.phone} with your website URL and up to three competitors. We return a technical, keyword and AI visibility audit, usually within three business days.`,
    },
    {
      question: "How quickly do you reply?",
      answer:
        "Within one business day. Enquiries received during working hours are usually answered the same day.",
    },
    {
      question: "What are your working hours?",
      answer: `${business.hours}. Calls outside these hours are scheduled by request to suit US, UK and UAE time zones.`,
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. Alongside Indian clients, we work with businesses in the US, UK, UAE and Europe, with reporting and calls arranged in your local time.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "No. Our retainers run month to month. We ask for a realistic runway of three to six months because SEO needs time, but you are never locked in.",
    },
    {
      question: "What information should I include in my enquiry?",
      answer:
        "Your website URL, your main services and target locations, your competitors, current traffic or ranking issues, and your budget range if you have one.",
    },
    {
      question: "Can we meet in person?",
      answer: `Yes, at our office: ${fullAddress}. Please book a time in advance so the right specialists are available.`,
    },
    {
      question: "Do you offer one-off audits without a retainer?",
      answer:
        "Yes. Paid deep-dive audits are available as standalone projects if you have an in-house team to implement the recommendations.",
    },
    {
      question: "Who will I work with day to day?",
      answer:
        "A named account lead plus the specialists assigned to your work. All work is manual and in-house — we do not outsource delivery to unvetted third parties.",
    },
    {
      question: "How do you handle access and confidentiality?",
      answer:
        "We request the minimum access needed, use delegated permissions rather than shared passwords, and sign an NDA on request before any data is shared.",
    },
  ],
};

const contactSectionsForNav = [
  { id: "inquiry-form", heading: "Let's Discuss Your Project", blocks: [] },
  ...contactPage.sections,
];

function ContactPage() {
  return (
    <>
      <Section className="pb-8 pt-10 lg:pb-10 lg:pt-14">
        <Breadcrumbs trail={contactPage.breadcrumb} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            {contactPage.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {contactPage.eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-bold leading-[1.08] lg:text-5xl">{contactPage.h1}</h1>
            <p className="mt-5 max-w-2xl text-balance-pretty text-lg text-muted-foreground">
              {contactPage.description}
            </p>
            <div className="mt-8">
              <AnswerBlock text={contactPage.answer} />
            </div>
          </div>
          {contactPage.hero?.image && (
            <img
              src={contactPage.hero.image}
              alt={contactPage.hero.imageAlt ?? contactPage.h1}
              loading="eager"
              decoding="async"
              width={1200}
              height={675}
              className="w-full aspect-[16/9] rounded-3xl border border-border object-cover shadow-sm"
            />
          )}
        </div>
        {contactPage.highlights && contactPage.highlights.length > 0 && (
          <div className="mt-10">
            <StatBand stats={contactPage.highlights} />
          </div>
        )}
      </Section>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <div id="inquiry-form" className="scroll-mt-28 mb-14">
              <PricingInquiryForm />
            </div>

            <ContentSections sections={contactPage.sections} />

            <div className="mt-14">
              <FaqAccordion faqs={contactPage.faqs} />
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28">
            <TableOfContents sections={contactSectionsForNav} />
            {contactPage.related && contactPage.related.length > 0 && (
              <RelatedLinks links={contactPage.related} />
            )}
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => pageHead(contactPage),
  component: ContactPage,
});
