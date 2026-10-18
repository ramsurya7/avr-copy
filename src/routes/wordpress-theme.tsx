import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WordPressThemeModal } from "@/components/site/WordPressThemeModal";
import {
  Download,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  FileArchive,
  Layers,
  Code2,
  Sparkles,
  ArrowRight,
  FolderTree,
  Smartphone,
  Gauge,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/wordpress-theme")({
  head: () => ({
    meta: [
      {
        title: "WordPress Theme Download & Installation - AVR Web Consulting",
      },
      {
        name: "description",
        content:
          "Download the official AVR Web Consulting WordPress theme (.zip). High-performance, Tailwind CSS-powered, SEO and AI search optimized with clean tables and mobile-first design.",
      },
    ],
  }),
  component: WordPressThemePage,
});

function WordPressThemePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDirectDownload = async (filename: string = "avr-web-consulting.zip") => {
    setDownloading(true);
    try {
      const response = await fetch(`/${filename}`);
      if (!response.ok) throw new Error("Fetch failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(`/${filename}`, "_blank");
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  };

  const copyUrl = (filename: string = "avr-web-consulting.zip") => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://avrwebconsulting.com";
    navigator.clipboard.writeText(`${origin}/${filename}`).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-mist/80 via-background to-background py-14 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/25 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>WordPress 6.0 – 6.7+ Ready</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verified Archive Integrity</span>
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              AVR Web Consulting <span className="text-primary">WordPress Theme</span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-muted-foreground leading-relaxed">
              Convert and power your WordPress website with our complete agency theme. Built with
              modern Tailwind CSS, full Customizer support for company contacts, video hero,
              responsive tables, and mobile-first touch navigation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="rounded-full px-7 py-6 text-base font-bold shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                <span>Download Theme (.ZIP)</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => copyUrl("avr-web-consulting.zip")}
                className="rounded-full px-6 py-6 text-sm font-semibold border-border"
              >
                {copiedLink ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                    <Check className="h-4 w-4" />
                    <span>Copied Direct URL!</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                    <span>Copy Direct ZIP Link</span>
                  </span>
                )}
              </Button>

              <a
                href="/avr-web-consulting.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline px-2 py-1"
              >
                <span>Direct link (new tab)</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Highlights & Overview */}
      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Gauge className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Production Tailwind Build</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Compiled standalone CSS (
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
                assets/css/main.css
              </code>
              ) enqueued cleanly through standard WordPress{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
                functions.php
              </code>
              .
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Mobile Touch Ergonomics</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Includes an accessible off-canvas drawer with smooth backdrop blur, 44px minimum touch
              targets, and horizontal scroll indicators for data tables.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">WordPress Customizer Integration</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Manage your company telephone, email, WhatsApp link, and physical office address live
              from <strong>Appearance &gt; Customize &gt; AVR Company Information</strong>.
            </p>
          </div>
        </div>

        {/* Step-by-Step Installation */}
        <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-card via-card to-mist/40 p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Easy 3-Step Setup
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground">
              How to Install in Your WordPress Admin
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow these simple steps to install and activate your theme in under two minutes:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/80 bg-background p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-sm text-primary-foreground mb-3">
                1
              </div>
              <h4 className="font-bold text-foreground">Go to Themes</h4>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Log into WordPress (<code className="bg-muted px-1 rounded">/wp-admin</code>) and
                navigate to <strong>Appearance &gt; Themes</strong>.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-sm text-primary-foreground mb-3">
                2
              </div>
              <h4 className="font-bold text-foreground">Upload Theme ZIP</h4>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Click <strong>Add New Theme</strong>, then click <strong>Upload Theme</strong> at
                the top. Choose{" "}
                <code className="bg-muted px-1 rounded font-semibold">avr-web-consulting.zip</code>.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 font-bold text-sm text-white mb-3">
                3
              </div>
              <h4 className="font-bold text-foreground">Install &amp; Activate</h4>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                Click <strong>Install Now</strong>, wait a few seconds, then click{" "}
                <strong>Activate</strong>. Your modern theme is now live!
              </p>
            </div>
          </div>

          {/* Quick Download CTA inside card */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileArchive className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-bold text-foreground">avr-web-consulting.zip</p>
                <p className="text-xs text-muted-foreground">
                  945 KB &bull; Verified intact &bull; Ready to upload
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => setModalOpen(true)}
                className="rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>Open Download Center</span>
              </Button>
            </div>
          </div>
        </div>

        {/* File Structure Overview */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Theme Blueprint
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground">
              What&apos;s Included in the Theme
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every standard WordPress template has been implemented with clean, accessible PHP and
              semantic HTML5:
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-bold text-sm text-foreground">style.css</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Theme metadata header, CSS variables, and fallback typographic styles conforming
                  to WordPress theme guidelines.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-bold text-sm text-foreground">functions.php</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Enqueues Google Fonts (Plus Jakarta Sans), Tailwind CSS build, and interactive
                  theme JS. Configures Customizer controls and navigation menus.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-bold text-sm text-foreground">front-page.php</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Custom agency landing page featuring full-width video background hero, service
                  highlights, stat band, and interactive CTAs.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-bold text-sm text-foreground">header.php &amp; footer.php</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Universal header with accessible mobile drawer navigation and skip-to-content
                  link; footer with structured address and social links.
                </p>
              </div>
            </div>
          </div>

          {/* Directory Tree Card */}
          <div className="rounded-3xl border border-border bg-slate-950 p-6 sm:p-8 text-slate-200 font-mono text-xs shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <FolderTree className="h-4 w-4 text-cyan-400" />
                <span className="font-bold text-white">Theme Directory Hierarchy</span>
              </div>
              <span className="text-[11px] text-slate-400">avr-web-consulting/</span>
            </div>

            <pre className="overflow-x-auto text-slate-300 leading-relaxed">
              {`avr-web-consulting/
├── style.css              <- Theme header & design tokens
├── functions.php          <- Script enqueuing & customizer
├── index.php              <- Main fallback & archive template
├── front-page.php         <- Agency homepage & video hero
├── header.php             <- Accessible header & mobile menu
├── footer.php             <- Footer & company contact data
├── page.php               <- Default page template
├── single.php             <- Single blog post template
├── 404.php                <- Custom 404 not found page
├── screenshot.png         <- 1200x900 theme preview
├── readme.txt             <- WordPress documentation
├── assets/
│   ├── css/
│   │   └── main.css       <- Production Tailwind build
│   └── js/
│       └── theme.js       <- Vanilla touch & drawer JS
└── public/
    ├── 1790648464804.png  <- Agency logo
    ├── whatsapp-logo.png  <- WhatsApp brand asset
    ├── image1.jpg
    └── image2.jpeg`}
            </pre>

            <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Total size: ~945 KB compressed</span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Archive</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal instance */}
      <WordPressThemeModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
