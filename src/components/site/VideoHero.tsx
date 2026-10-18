import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import heroVideo from "@/assets/avr-home-hero.mp4.asset.json";
import heroVideoWebm from "@/assets/avr-home-hero.webm.asset.json";
import heroPoster from "@/assets/home-hero-poster.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { business } from "@/content/site";

import { useEffect, useRef, useState } from "react";

export function VideoHero({
  eyebrow,
  title,
  subtitle,
  secondary,
  videoSrc = "/avr.mp4",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  secondary?: string;
  videoSrc?: string;
}) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Defer video loading slightly to prioritize critical page rendering and LCP
    const timer = setTimeout(() => setShouldLoadVideo(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sources are inserted after mount, so restart resource selection explicitly.
    if (shouldLoadVideo) videoRef.current?.load();
  }, [shouldLoadVideo]);

  return (
    <section className="relative isolate min-h-[38rem] overflow-hidden bg-ink text-ink-foreground lg:min-h-[44rem]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        poster={heroPoster.url}
        autoPlay
        muted
        loop
        playsInline
        preload={shouldLoadVideo ? "auto" : "none"}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <img
        src={heroPoster.url}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60"
        aria-hidden="true"
      />
      {/* Ambient cyan lighting */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-primary/15 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[38rem] flex-col justify-center py-20 lg:min-h-[44rem]">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/95 backdrop-blur transition-all duration-300 hover:border-primary/60 hover:bg-ink-foreground/15">
          <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.14] sm:text-5xl sm:leading-[1.1] lg:text-6xl tracking-tight text-white break-words">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-balance-pretty text-base sm:text-lg leading-relaxed text-ink-foreground/90 lg:text-xl">
          {subtitle}
        </p>
        {secondary && (
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-ink-foreground/80 lg:text-base">
            {secondary}
          </p>
        )}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="group w-full sm:w-auto justify-center min-h-[44px] rounded-full"
          >
            <Link to="/contact">
              Request a digital audit
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
    </section>
  );
}
