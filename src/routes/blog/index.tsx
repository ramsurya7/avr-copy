import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { blogHub, blogSeeds } from "@/content/pages/blog";
import { buildHead, breadcrumbSchema, faqSchema } from "@/lib/seo";
import {
  AnswerBlock,
  Breadcrumbs,
  CTABand,
  FaqAccordion,
  Section,
  SectionHeading,
  StatBand,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildHead({
      title: blogHub.title,
      description: blogHub.description,
      path: blogHub.slug,
      ...(blogHub.hero?.image ? { image: blogHub.hero.image } : {}),
      schemas: [faqSchema(blogHub.faqs), breadcrumbSchema(blogHub.breadcrumb)],
    }),
  component: BlogIndex,
});

const categories = ["All", ...Array.from(new Set(blogSeeds.map((b) => b.category)))];

function BlogIndex() {
  const [active, setActive] = useState("All");
  const posts = useMemo(
    () =>
      [...blogSeeds]
        .filter((b) => active === "All" || b.category === active)
        .sort((a, b) => (a.date < b.date ? 1 : -1)),
    [active],
  );

  return (
    <>
      <Section className="pb-6 pt-10 lg:pt-14">
        <Breadcrumbs trail={blogHub.breadcrumb} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Blog
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] lg:text-5xl">
              {blogHub.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{blogHub.description}</p>
            <div className="mt-8">
              <AnswerBlock text={blogHub.answer} />
            </div>
          </div>
          <img
            src="/images/laptop-mint.webp"
            alt="SEO & AI Search Blog — Playbooks and Guides"
            loading="eager"
            className="w-full aspect-video rounded-3xl border border-border object-cover shadow-sm"
          />
        </div>
        {blogHub.highlights && (
          <div className="mt-10">
            <StatBand stats={blogHub.highlights} />
          </div>
        )}
      </Section>

      <Section className="pt-4">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button
              key={c}
              size="sm"
              variant={active === c ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
            >
              {c}
            </Button>
          ))}
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg">
                <img
                  src={post.image}
                  alt={post.h1}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {post.category} · {post.readMinutes} min read
                  </p>
                  <h2 className="mt-3 font-display text-lg font-bold leading-snug">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="after:absolute group-hover:text-primary"
                    >
                      {post.h1}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Blog FAQs"
          title="About the AVR blog"
          intro="How we research, write and update these guides."
        />
        <div className="mt-8">
          <FaqAccordion faqs={blogHub.faqs} heading="Blog questions" />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
