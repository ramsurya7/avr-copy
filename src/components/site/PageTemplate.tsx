import type { PageContent } from "@/content/types";
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
import {
  buildHead,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
  contactPageSchema,
  aboutPageSchema,
} from "@/lib/seo";
import { SocialLinks } from "@/components/site/SocialLinks";

export function pageHead(page: PageContent) {
  const schemas: (Record<string, unknown> | null)[] = [];

  if (page.slug === "/contact") {
    schemas.push(contactPageSchema());
  } else if (page.slug === "/about") {
    schemas.push(aboutPageSchema());
  } else {
    schemas.push(
      webPageSchema({
        title: page.title,
        description: page.description,
        path: page.slug,
        type: "WebPage",
      }),
    );
    schemas.push(
      serviceSchema({
        name: page.serviceName ?? page.h1,
        description: page.description,
        path: page.slug,
      }),
    );
  }

  if (page.faqs && page.faqs.length > 0) {
    schemas.push(faqSchema(page.faqs));
  }
  if (page.breadcrumb && page.breadcrumb.length > 0) {
    schemas.push(breadcrumbSchema(page.breadcrumb));
  }

  return buildHead({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    path: page.slug,
    ...(page.hero?.image ? { image: page.hero.image } : {}),
    schemas: schemas.filter(Boolean) as Record<string, unknown>[],
  });
}

export function PageTemplate({ page }: { page: PageContent }) {
  return (
    <>
      <Section className="pb-8 pt-10 lg:pb-10 lg:pt-14">
        <Breadcrumbs trail={page.breadcrumb} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            {page.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {page.eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-bold leading-[1.08] lg:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-balance-pretty text-lg text-muted-foreground">
              {page.description}
            </p>
            <div className="mt-8">
              <AnswerBlock text={page.answer} />
            </div>
          </div>
          {page.hero?.image && (
            <div className="group relative w-full overflow-hidden rounded-3xl border border-border bg-card p-1 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="overflow-hidden rounded-[1.375rem]">
                <img
                  src={page.hero.image}
                  alt={page.hero.imageAlt ?? page.h1}
                  loading="eager"
                  decoding="async"
                  width={1200}
                  height={675}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>
        {page.highlights && page.highlights.length > 0 && (
          <div className="mt-10">
            <StatBand stats={page.highlights} />
          </div>
        )}
      </Section>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <ContentSections sections={page.sections} />

            {page.author && (
              <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  {page.author.avatar && (
                    <img
                      src={page.author.avatar}
                      alt={page.author.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-primary/20 transition-transform duration-300 hover:scale-105"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold">{page.author.name}</h3>
                    <p className="text-sm font-medium text-primary">{page.author.role}</p>
                    {page.author.bio && (
                      <p className="mt-2 text-sm text-muted-foreground">{page.author.bio}</p>
                    )}
                    <div className="mt-4">
                      <SocialLinks variant="dark" size="small" urls={page.author.social} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-14">
              <FaqAccordion faqs={page.faqs} />
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28">
            <TableOfContents sections={page.sections} />
            {page.related && page.related.length > 0 && <RelatedLinks links={page.related} />}
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
