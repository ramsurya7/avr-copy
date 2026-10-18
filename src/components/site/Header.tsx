import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, Download } from "lucide-react";
import { useState } from "react";

import { navigation, business } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/site/SocialLinks";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WordPressThemeModal } from "@/components/site/WordPressThemeModal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 font-sans backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:gap-4 lg:h-20">
        {/* Company Branding Unit */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3.5 min-w-0 shrink group py-1"
          aria-label={`${business.name} home`}
        >
          <img
            src="/1790648464804.png"
            alt="AVR Web Consulting logo"
            width={48}
            height={48}
            className="h-8 w-auto object-contain sm:h-11 md:h-12 shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="flex flex-col justify-center min-w-0">
            <span className="truncate text-sm font-bold tracking-tight text-foreground sm:text-lg lg:text-xl leading-tight">
              AVR Web Consulting
            </span>
            <span className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px] lg:text-[11.5px] leading-tight hidden min-[380px]:block">
              Future-Proof SEO · AI-Visible Results
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - 7 categories, clean and uncrowded */}
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex shrink-0">
          {navigation.map((group) => (
            <div key={group.label} className="group relative">
              <Link
                to={group.to}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3"
                activeProps={{ className: "bg-accent text-accent-foreground" }}
              >
                <span>{group.label}</span>
                <ChevronDown
                  className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />
              </Link>
              <div className="invisible absolute left-0 top-full w-[22rem] translate-y-2 pt-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-border/80 bg-popover/95 p-2 shadow-2xl backdrop-blur-md">
                  {group.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        to={child.to}
                        className="group/item block rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-mist hover:translate-x-1"
                      >
                        <span className="block text-sm font-semibold transition-colors duration-150 group-hover/item:text-primary">
                          {child.label}
                        </span>
                        {child.blurb && (
                          <span className="block text-xs text-muted-foreground">{child.blurb}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setThemeModalOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-sm cursor-pointer"
            title="Download WordPress Theme ZIP"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">WP Theme</span>
            <span className="sm:hidden">Theme</span>
          </button>

          {/* Mobile & Tablet Navigation Trigger */}
          <div className="flex items-center xl:hidden shrink-0">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 min-h-[44px] min-w-[44px] rounded-full shrink-0 touch-manipulation"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm sm:max-w-md overflow-y-auto px-4 py-6 sm:px-6"
              >
                <SheetHeader className="pb-3 border-b border-border/60 text-left">
                  <SheetTitle className="font-sans text-lg font-bold text-foreground">
                    AVR Web Consulting
                  </SheetTitle>
                </SheetHeader>
                <div className="pt-2 pb-10">
                  <Accordion type="multiple" className="w-full">
                    {navigation.map((group) => (
                      <AccordionItem
                        key={group.label}
                        value={group.label}
                        className="border-border/60"
                      >
                        <AccordionTrigger className="font-sans text-base font-semibold py-3.5 hover:no-underline">
                          {group.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1 pl-1">
                            <li>
                              <Link
                                to={group.to}
                                onClick={() => setOpen(false)}
                                className="flex min-h-[44px] items-center rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-mist active:bg-mist/80 transition-colors"
                              >
                                {group.label} overview
                              </Link>
                            </li>
                            {group.children.map((child) => (
                              <li key={child.to}>
                                <Link
                                  to={child.to}
                                  onClick={() => setOpen(false)}
                                  className="flex min-h-[44px] items-center rounded-xl px-3 py-2 text-sm text-foreground/90 hover:bg-mist active:bg-mist/80 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-6 border-t border-border pt-6 space-y-3">
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        setThemeModalOpen(true);
                      }}
                      className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      <span>Download WordPress Theme (.ZIP)</span>
                    </button>

                    <Button
                      asChild
                      size="lg"
                      className="w-full min-h-[44px] rounded-full font-semibold shadow-md shadow-primary/20"
                    >
                      <Link to="/contact" onClick={() => setOpen(false)}>
                        Contact Us
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-col items-center border-t border-border pt-8">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Follow Us
                    </h3>
                    <SocialLinks variant="dark" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <WordPressThemeModal open={themeModalOpen} onOpenChange={setThemeModalOpen} />
    </header>
  );
}
