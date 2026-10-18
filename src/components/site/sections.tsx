import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import type { ContentBlock, Faq, PageSection } from "@/content/types";
import { business } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/site/SocialLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "mist" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        tone === "mist" && "bg-mist",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <As className="text-3xl font-bold leading-tight lg:text-4xl">{title}</As>
      {intro && (
        <p className="mt-4 text-balance-pretty text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}

/** Answer-first block: the 40-60 word direct answer AI engines extract. */
export function AnswerBlock({ text, question }: { text: string; question?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-accent/40 p-6 lg:p-8 transition-all duration-300 hover:border-primary/60 hover:bg-accent/60 hover:shadow-md hover:shadow-primary/5">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
        aria-hidden="true"
      />
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Quick answer
      </p>
      {question && (
        <p className="mb-2 font-display text-lg font-bold text-foreground">{question}</p>
      )}
      <p className="text-base leading-relaxed text-foreground lg:text-lg">{text}</p>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to: string }[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm font-medium text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-none py-1"
    >
      <ol className="flex items-center gap-2">
        {trail.map((item, i) => (
          <li key={`${item.to}-${item.label}-${i}`} className="flex items-center gap-2 shrink-0">
            {i > 0 && (
              <span aria-hidden="true" className="opacity-60">
                /
              </span>
            )}
            {i === trail.length - 1 ? (
              <span className="text-foreground font-semibold">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:text-primary transition-colors duration-150">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StatBand({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-2.5 rounded-2xl border border-border bg-card p-3.5 sm:gap-4 sm:p-6 lg:grid-cols-4 lg:gap-6 lg:p-8 shadow-2xs">
      {stats.map((s) => (
        <div
          key={s.label}
          className="group rounded-xl border border-transparent p-2.5 sm:p-3 transition-all duration-300 hover:border-primary/30 hover:bg-mist/80 hover:-translate-y-0.5"
        >
          <dt className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-muted-foreground group-hover:text-foreground transition-colors duration-200 truncate">
            {s.label}
          </dt>
          <dd className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground tabular-nums group-hover:text-primary transition-colors duration-200 break-words">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.kind === "paragraph")
          return (
            <p key={i} className="text-balance-pretty text-base leading-relaxed text-foreground">
              {block.text}
            </p>
          );

        if (block.kind === "list")
          return (
            <div key={i}>
              {block.title && (
                <h3 className="mb-3 text-lg font-semibold text-foreground">{block.title}</h3>
              )}
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

        if (block.kind === "steps")
          return (
            <div key={i}>
              {block.title && (
                <h3 className="mb-4 text-lg font-semibold text-foreground">{block.title}</h3>
              )}
              <ol className="space-y-4">
                {block.items.map((item, idx) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">
                      <span className="block font-semibold text-foreground">{item.title}</span>
                      <span className="block text-foreground/90">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          );

        if (block.kind === "table") {
          const colCount = block.head.length;
          const minWidthClass =
            colCount <= 2
              ? "min-w-[18rem] sm:min-w-full"
              : colCount === 3
                ? "min-w-[26rem] sm:min-w-full"
                : "min-w-[32rem]";

          return (
            <div key={i} className="my-6">
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
                <div className="flex items-center justify-between border-b border-border/70 bg-mist/60 px-4 py-3 sm:px-6">
                  <h3 className="font-display text-sm font-bold tracking-tight text-foreground">
                    {block.title || "Information Table"}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary sm:hidden">
                    <span>Swipe</span> &rarr;
                  </span>
                </div>
                <div className="overflow-x-auto scrollbar-thin">
                  <table className={cn("w-full text-left text-sm border-collapse", minWidthClass)}>
                    <thead>
                      <tr className="border-b border-border/80 bg-mist/40">
                        {block.head.map((h, hIdx) => (
                          <th
                            key={`${h}-${hIdx}`}
                            scope="col"
                            className="px-3.5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap sm:px-6 sm:py-3.5"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {block.rows.map((row, rIdx) => (
                        <tr
                          key={`${row.join("-")}-${rIdx}`}
                          className="transition-colors duration-150 even:bg-mist/30 hover:bg-primary/[0.035]"
                        >
                          {row.map((cell, ci) => {
                            const isEmail = cell === business.email;
                            const isPhone = cell === business.phone;
                            const isWhatsApp =
                              isPhone && row[0]?.toLowerCase().includes("whatsapp");
                            const isPositiveChange =
                              typeof cell === "string" && /^\+\d+/.test(cell.trim());
                            const hasNumbers = typeof cell === "string" && /\d/.test(cell);

                            return (
                              <td
                                key={`${rIdx}-${ci}`}
                                className={cn(
                                  "px-3.5 py-3 align-middle leading-relaxed sm:px-6 sm:py-3.5",
                                  ci === 0
                                    ? "font-semibold text-foreground min-w-[6.5rem] sm:min-w-[8.5rem] break-words"
                                    : "text-foreground/85 break-words",
                                  hasNumbers && "tabular-nums",
                                )}
                              >
                                {isEmail ? (
                                  <a
                                    href={`mailto:${business.email}?subject=${encodeURIComponent(
                                      "Website Inquiry - AVR Web Consulting",
                                    )}`}
                                    className="font-medium text-primary hover:underline break-all sm:break-normal"
                                  >
                                    {cell}
                                  </a>
                                ) : isWhatsApp ? (
                                  <a
                                    href={business.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {cell}
                                  </a>
                                ) : isPhone ? (
                                  <a
                                    href={business.phoneHref}
                                    className="font-medium text-primary hover:underline whitespace-nowrap"
                                  >
                                    {cell}
                                  </a>
                                ) : isPositiveChange ? (
                                  <span className="inline-flex items-center font-semibold text-emerald-600 dark:text-emerald-400">
                                    {cell}
                                  </span>
                                ) : (
                                  cell
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }

        if (block.kind === "social")
          return (
            <div key={i} className="mt-4">
              <SocialLinks variant="dark" />
            </div>
          );

        return (
          <div key={i} className="rounded-2xl border border-amber/30 bg-amber/5 p-6 shadow-2xs">
            <p className="font-display font-semibold text-foreground">{block.title}</p>
            <p className="mt-1 text-foreground/85 leading-relaxed">{block.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ContentSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-28">
          <h2 className="mb-5 text-2xl font-bold lg:text-3xl">{s.heading}</h2>
          <Blocks blocks={s.blocks} />
        </section>
      ))}
    </div>
  );
}

export function TableOfContents({ sections }: { sections: PageSection[] }) {
  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-border bg-card p-5 shadow-2xs"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="block rounded-md px-2 py-1 text-foreground/80 transition-all duration-200 hover:bg-mist hover:text-primary hover:translate-x-1"
            >
              {s.heading}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#faqs"
            className="block rounded-md px-2 py-1 text-foreground/80 transition-all duration-200 hover:bg-mist hover:text-primary hover:translate-x-1"
          >
            Frequently asked questions
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function FaqAccordion({ faqs, heading }: { faqs: Faq[]; heading?: string }) {
  return (
    <div id="faqs" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
        {heading ?? "Frequently asked questions"}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl border border-border bg-card px-5 shadow-2xs divide-y divide-border/60"
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${i}`}
            className="border-b-0 transition-colors duration-200 hover:bg-mist/40 px-2 rounded-xl"
          >
            <AccordionTrigger className="text-left font-display text-base font-semibold py-4 hover:no-underline hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-foreground/85 pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function CTABand({
  title = "Get an AI visibility & SEO audit",
  text = "Tell us your target keywords and markets. We reply within one business day with findings, priorities and a tailored proposal.",
  ctaText = "Book consultation",
  showWhatsapp = false,
}: {
  title?: string;
  text?: string;
  ctaText?: string;
  showWhatsapp?: boolean;
}) {
  return (
    <Section
      tone="ink"
      className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0d1424] to-ink py-20 lg:py-28"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-foreground/80">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto">
          <Button
            asChild
            size="lg"
            className="group w-full sm:w-auto justify-center min-h-[44px] rounded-full shadow-lg shadow-primary/20"
          >
            <Link to="/contact">
              {ctaText}
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>
          {showWhatsapp && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto justify-center min-h-[44px] rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground hover:border-primary/60 transition-all duration-200"
            >
              <a
                href={`${business.whatsapp}?text=Hello%20AVR%20Web%20Consulting,%20I%20would%20like%20to%20discuss%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          )}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto justify-center min-h-[44px] rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground hover:border-primary/60 transition-all duration-200"
          >
            <a href={business.phoneHref}>Call {business.phone}</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function RelatedLinks({ links }: { links: { label: string; to: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Related services
      </p>
      <ul className="space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="block rounded-md px-2 py-1.5 text-foreground/80 transition-all duration-200 hover:bg-mist hover:text-primary hover:translate-x-1"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
