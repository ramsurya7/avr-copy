import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { allFaqs, faqCategories, faqCountByCategory, featuredFaqs } from "@/content/faqs";
import { buildHead, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { AnswerBlock, Breadcrumbs, CTABand, Section, StatBand } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = `${allFaqs.length}+ SEO & AI SEO FAQs — Searchable Answer Hub | AVR`;
const description = `Searchable hub of ${allFaqs.length} answers on SEO, AI SEO, AEO, GEO, LLMO, paid ads, content, web design, industries and pricing from AVR Web Consulting.`;
const answer = `This hub holds ${allFaqs.length} answers covering SEO, AI SEO (AEO, GEO, LLM SEO, LLMO), paid advertising, content marketing, web design, industry playbooks, city-level services, case studies and pricing. Search any question and get a direct answer plus a link to the page that explains it in depth.`;
const breadcrumb = [
  { label: "Home", to: "/" },
  { label: "FAQs", to: "/faqs" },
];

export const Route = createFileRoute("/faqs")({
  head: () =>
    buildHead({
      title,
      description,
      path: "/faqs",
      schemas: [faqSchema(featuredFaqs), breadcrumbSchema(breadcrumb)],
    }),
  component: FaqHub,
});

function FaqHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allFaqs.filter((f) => {
      if (category !== "All" && f.category !== category) return false;
      if (!q) return true;
      return (
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.source.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const shown = results.slice(0, 80);

  return (
    <>
      <Section className="pb-6 pt-10 lg:pt-14">
        <Breadcrumbs trail={breadcrumb} />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Answer hub
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] lg:text-5xl">
              {allFaqs.length}+ answers on SEO, AI search and digital marketing
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 max-w-3xl">
              <AnswerBlock text={answer} />
            </div>
          </div>
          <img
            src="/images/team-video-call-meeting.webp"
            alt="Searchable SEO & AI SEO FAQs"
            loading="eager"
            className="w-full aspect-video rounded-3xl border border-border object-cover shadow-sm"
          />
        </div>
        <div className="mt-10">
          <StatBand
            stats={[
              { label: "Total answers", value: `${allFaqs.length}` },
              { label: "Topics", value: `${faqCategories.length}` },
              { label: "Search", value: "Instant" },
              { label: "Updated", value: "Monthly" },
            ]}
          />
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-3xl border border-border bg-card p-5 lg:p-6">
          <label htmlFor="faq-search" className="sr-only">
            Search all frequently asked questions
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. 'AI Overviews', 'pricing', 'local SEO Vizag'"
              className="h-12 rounded-full pl-11 text-base"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setCategory("All")}
              aria-pressed={category === "All"}
            >
              All ({allFaqs.length})
            </Button>
            {faqCategories.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={category === c ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c} ({faqCountByCategory[c]})
              </Button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" role="status">
          {results.length} answer{results.length === 1 ? "" : "s"}
          {query ? ` matching "${query}"` : ""}
          {results.length > shown.length ? ` — showing the first ${shown.length}` : ""}
        </p>

        {shown.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-border p-10 text-center">
            <p className="font-display text-lg font-semibold">No answer matches that search</p>
            <p className="mt-2 text-muted-foreground">
              Try a broader term, or{" "}
              <Link to="/contact" className="text-primary underline">
                ask us directly
              </Link>{" "}
              — we reply within one business day.
            </p>
          </div>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="mt-6 rounded-3xl border border-border bg-card px-5"
          >
            {shown.map((faq, i) => (
              <AccordionItem key={`${faq.sourceTo}-${i}`} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground/85">
                  <p>{faq.answer}</p>
                  <p className="mt-3 text-sm">
                    <span className="text-muted-foreground">More on this: </span>
                    <Link to={faq.sourceTo} className="text-primary underline">
                      {faq.source}
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Section>

      <CTABand
        title="Still have a question?"
        text="Send it over. We answer real questions with real specifics, not sales copy — usually within one business day."
      />
    </>
  );
}
