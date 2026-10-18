import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageTemplate";
import { pricingPage } from "@/content/pages/company";
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

const pricingSectionsForNav = [
  { id: "discuss-project", heading: "Let's Discuss Your Project", blocks: [] },
  ...pricingPage.sections,
];

function PricingPage() {
  return (
    <>
      <Section className="pb-8 pt-10 lg:pb-10 lg:pt-14">
        <Breadcrumbs trail={pricingPage.breadcrumb} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            {pricingPage.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {pricingPage.eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-bold leading-[1.08] lg:text-5xl">{pricingPage.h1}</h1>
            <p className="mt-5 max-w-2xl text-balance-pretty text-lg text-muted-foreground">
              {pricingPage.description}
            </p>
            <div className="mt-8">
              <AnswerBlock text={pricingPage.answer} />
            </div>
          </div>
          {pricingPage.hero?.image && (
            <img
              src={pricingPage.hero.image}
              alt={pricingPage.hero.imageAlt ?? pricingPage.h1}
              loading="eager"
              decoding="async"
              width={1200}
              height={675}
              className="w-full aspect-[16/9] rounded-3xl border border-border object-cover shadow-sm"
            />
          )}
        </div>
        {pricingPage.highlights && pricingPage.highlights.length > 0 && (
          <div className="mt-10">
            <StatBand stats={pricingPage.highlights} />
          </div>
        )}
      </Section>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <div id="discuss-project" className="scroll-mt-28 mb-14">
              <PricingInquiryForm />
            </div>

            <ContentSections sections={pricingPage.sections} />

            <div className="mt-14">
              <FaqAccordion faqs={pricingPage.faqs} />
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28">
            <TableOfContents sections={pricingSectionsForNav} />
            {pricingPage.related && pricingPage.related.length > 0 && (
              <RelatedLinks links={pricingPage.related} />
            )}
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

export const Route = createFileRoute("/pricing")({
  head: () => pageHead(pricingPage),
  component: PricingPage,
});
