import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aboutPage } from "@/content/pages/company";

export const Route = createFileRoute("/about")({
  head: () => pageHead(aboutPage),
  component: () => <PageTemplate page={aboutPage} />,
});
