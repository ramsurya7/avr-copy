import { createFileRoute, Link } from "@tanstack/react-router";
import { buildHead, breadcrumbSchema } from "@/lib/seo";
import { AnswerBlock, Breadcrumbs, CTABand, Section } from "@/components/site/sections";
import { navigation } from "@/content/site";
import { industrySeeds } from "@/content/pages/industries";
import { locationSeeds } from "@/content/pages/locations";
import { caseStudySeeds } from "@/content/pages/case-studies";
import { blogSeeds } from "@/content/pages/blog";

const title = "HTML Sitemap — All Pages & Directory | AVR Web Consulting";
const description =
  "Complete HTML sitemap directory of all pages on AVR Web Consulting. Easily navigate our SEO, AI visibility, content marketing, advertising services, industry playbooks, and guides.";
const breadcrumb = [
  { label: "Home", to: "/" },
  { label: "Sitemap", to: "/sitemap" },
];

export const Route = createFileRoute("/sitemap")({
  head: () =>
    buildHead({
      title,
      description,
      path: "/sitemap",
      schemas: [breadcrumbSchema(breadcrumb)],
    }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <>
      <Section className="pb-8 pt-10 lg:pt-14">
        <Breadcrumbs trail={breadcrumb} />
        <div className="mt-6 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Site Architecture
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] lg:text-5xl">
            HTML Sitemap & Directory
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          <div className="mt-8">
            <AnswerBlock text="This directory lists every canonical page, service hub, location guide, sector playbook, and knowledge base article published by AVR Web Consulting. Crawlers can also access our machine-readable XML sitemap at /sitemap.xml." />
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Main Services Navigation */}
          {navigation.map((group) => (
            <div key={group.label} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">
                <Link to={group.to} className="hover:text-primary">
                  {group.label}
                </Link>
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.children.map((child) => (
                  <li key={child.to}>
                    <Link
                      to={child.to}
                      className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {child.label}
                    </Link>
                    {child.blurb && (
                      <span className="block text-xs text-muted-foreground">{child.blurb}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Industry Solutions */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              <Link to="/industries" className="hover:text-primary">
                Industries We Serve
              </Link>
            </h2>
            <ul className="mt-4 space-y-2.5">
              {industrySeeds.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {ind.name} SEO & AI Visibility
                  </Link>
                  <span className="block text-xs text-muted-foreground">{ind.short}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              <Link to="/locations" className="hover:text-primary">
                Locations We Serve
              </Link>
            </h2>
            <ul className="mt-4 space-y-2.5">
              {locationSeeds.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to="/locations/$slug"
                    params={{ slug: loc.slug }}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {loc.city} ({loc.country})
                  </Link>
                  <span className="block text-xs text-muted-foreground">{loc.economy}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              <Link to="/case-studies" className="hover:text-primary">
                Client Case Studies
              </Link>
            </h2>
            <ul className="mt-4 space-y-2.5">
              {caseStudySeeds.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {cs.industry} ({cs.location})
                  </Link>
                  <span className="block text-xs text-muted-foreground">{cs.summary}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog & Thought Leadership */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-foreground">
              <Link to="/blog" className="hover:text-primary">
                Articles & Playbooks
              </Link>
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {blogSeeds.map((b) => (
                <div key={b.slug} className="rounded-xl border border-border/60 p-3.5">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: b.slug }}
                    className="text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
                  >
                    {b.h1}
                  </Link>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Readable Sitemaps */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-foreground">
              Machine-Readable Feeds
            </h2>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline"
              >
                XML Sitemap (sitemap.xml)
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline"
              >
                Robots Directives (robots.txt)
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
