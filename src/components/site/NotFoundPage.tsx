import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/sections";

export function NotFoundPage({
  title = "Page not found",
  description = "The page you are looking for has moved or never existed.",
  backTo = "/",
  backLabel = "Back to home",
}: {
  title?: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
}) {
  return (
    <Section className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-bold lg:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button asChild>
          <Link to={backTo}>{backLabel}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Contact us</Link>
        </Button>
      </div>
    </Section>
  );
}
