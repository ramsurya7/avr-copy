import { Phone } from "lucide-react";
import { business } from "@/content/site";

export function FloatingContact() {
  const whatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(
    "Hello AVR Web Consulting, I would like to discuss your services.",
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3 md:bottom-8 md:right-8 animate-float-subtle">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-110 md:h-[56px] md:w-[56px] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        style={{ filter: "drop-shadow(0 4px 12px rgba(37,211,102,0.35))" }}
      >
        <span
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/20 animate-pulse-ring"
          aria-hidden="true"
        />
        <img
          src="/whatsapp-logo.png"
          alt="Chat on WhatsApp"
          className="h-full w-full object-contain border-none p-0 bg-transparent"
        />
      </a>
      <a
        href={business.phoneHref}
        aria-label="Call us"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Phone
          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
