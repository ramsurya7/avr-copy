import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import aiPlatforms from "@/assets/ai-platforms.jpeg.asset.json";
import teamCollaboration from "@/assets/team-collaboration.jpeg.asset.json";
import { VideoHero } from "@/components/site/VideoHero";
import {
  AnswerBlock,
  CTABand,
  FaqAccordion,
  Section,
  SectionHeading,
  StatBand,
} from "@/components/site/sections";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  homeAnswer,
  homeAiServices,
  homeAutomationServices,
  homeDevelopmentTechnologies,
  homeFaqs,
  homeGrowthServices,
  homeProcess,
  homeSeoServices,
  homeServices,
  homeStats,
} from "@/content/pages/home";
import { buildHead, faqSchema, webPageSchema } from "@/lib/seo";

const title = "SEO and Digital Marketing Services | AVR Web Consulting";
const description =
  "AVR Web Consulting combines SEO, content, web design and link building to help businesses grow online. Talk to our India-based team for a free consultation.";
const keywords = "seo and digital marketing";

import heroPoster from "@/assets/home-hero-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title,
      description,
      keywords,
      path: "/",
      schemas: [
        webPageSchema({
          title,
          description,
          path: "/",
          type: "WebPage",
        }),
        faqSchema(homeFaqs),
      ],
      links: [
        {
          rel: "preload",
          as: "image",
          href: heroPoster.url,
          fetchPriority: "high",
        },
      ],
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <VideoHero
        videoSrc="/avr.mp4"
        eyebrow="Full-service digital marketing agency"
        title="Grow Your Business With Smarter Digital Marketing"
        subtitle="AVR Web Consulting helps businesses build stronger online visibility, attract qualified traffic, generate leads, and grow through SEO, advertising, content marketing, and web development."
        secondary="Now expanding into AI Search, Advanced Web Development & Business Automation."
      />

      <Section className="pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A digital marketing agency focused on sustainable online growth"
              intro="We help businesses improve their online presence, reach the right audience, and turn digital visibility into business growth through SEO, advertising, social media, content, and web development."
            />
            <div className="mt-8">
              <AnswerBlock text={homeAnswer} question="What is AVR Web Consulting?" />
            </div>
          </div>
          <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card p-1 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <div className="overflow-hidden rounded-[1.375rem]">
              <img
                src="/image1.jpg"
                alt="AVR Web Consulting team planning a digital marketing strategy around a conference table"
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <StatBand stats={homeStats} />
        </div>
      </Section>

      <Section tone="mist" id="services">
        <SectionHeading
          eyebrow="Services"
          title="Digital Marketing Services That Drive Growth"
          intro="From SEO and paid advertising to content marketing and web development, AVR Web Consulting provides the core digital services businesses need to build visibility, attract customers, and grow online."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((s, i) => (
            <ScrollReveal key={s.to} delay={i * 80} className="h-full">
              <Link
                to={s.to}
                className="group card-interactive flex h-full flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-foreground/85">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:scale-110"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight
                    className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="SEO services"
          title="Build a Stronger Search Presence"
          intro="Our SEO services improve technical website health, local and global discovery, geographic relevance, and the ability to attract useful organic traffic."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeSeoServices.map((service, i) => (
            <ScrollReveal key={service.to} delay={i * 70} className="h-full">
              <Link
                to={service.to}
                className="group card-interactive flex h-full flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Explore{" "}
                  <ArrowRight
                    className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Advertising, content & websites"
          title="Turn Visibility Into Meaningful Business Activity"
          intro="Our advertising, content, and website services work together to reach audiences, communicate value, build trust, and support conversion."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {homeGrowthServices.map((service, i) => (
            <ScrollReveal key={service.to} delay={i * 90} className="h-full">
              <Link
                to={service.to}
                className="group card-interactive flex h-full flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Explore{" "}
                  <ArrowRight
                    className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we help businesses grow"
          title="A Connected Journey From Discovery to Digital Progress"
          align="center"
        />
        <ol className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {homeProcess.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 70} as="li" className="h-full">
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border/40 pb-6 pt-16 lg:pt-24">
        <SectionHeading
          eyebrow="Advanced capabilities"
          title="The Next Evolution of Search & Digital Technology"
          intro="Digital marketing is evolving. Search is becoming more AI-driven, websites are becoming more sophisticated, and businesses are automating more workflows. AVR Web Consulting is expanding its capabilities to help businesses adapt to these changes."
        />
      </Section>

      <Section className="pt-6 lg:pt-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="The next evolution of search"
              title="AI SEO & AI Search Visibility"
              intro="Search is evolving beyond traditional search engines. Our AI SEO services help businesses structure and optimize their digital presence for emerging AI-driven discovery experiences."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {homeAiServices.map((service, i) => (
                <ScrollReveal key={service.to} delay={i * 80} className="h-full">
                  <Link
                    to={service.to}
                    className="group card-interactive block h-full rounded-2xl p-5"
                  >
                    <h3 className="font-display text-base font-semibold transition-colors duration-200 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.text}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <Button asChild className="group mt-8 rounded-full">
              <Link to="/ai-seo">
                Explore AI SEO services
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
          <div className="group relative w-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <img
              src="/image2.jpeg"
              alt="AI search platforms covered by AVR Web Consulting's AI SEO services: ChatGPT, Gemini, Claude, DeepSeek, Perplexity and Grok"
              loading="lazy"
              className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Custom digital solutions"
          title="Advanced Full-Stack Web Development"
          intro="When standard website solutions are not enough, we build custom digital experiences and web applications using modern development technologies, selected around the business outcome rather than the technology itself."
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {homeDevelopmentTechnologies.map((technology) => (
            <li
              key={technology}
              className="cursor-default rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:shadow-2xs"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="group w-full sm:w-auto justify-center min-h-[44px] rounded-full"
          >
            <Link to="/web-design-development/full-stack-web-development">
              Explore full-stack development
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto justify-center min-h-[44px] rounded-full"
          >
            <Link to="/web-design-development/vibe-coding-ai-assisted-development">
              Vibe coding &amp; AI-assisted development
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Intelligent operations"
          title="AI Agents & Business Automation"
          intro="Automate repetitive processes, connect business tools, and build intelligent workflows that help businesses operate more efficiently."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homeAutomationServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 90} className="h-full">
              <Link
                to={service.to}
                className="group card-interactive flex h-full flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Explore{" "}
                  <ArrowRight
                    className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion faqs={homeFaqs} heading="AVR Web Consulting — frequently asked questions" />
        </div>
      </Section>

      <CTABand
        title="Ready to Grow Your Digital Presence?"
        text="Whether you need stronger search visibility, better advertising, engaging content, a new website, AI-search optimization, or business automation, AVR Web Consulting can help you build the right digital strategy."
        ctaText="Book consultation"
        showWhatsapp={true}
      />
    </>
  );
}
