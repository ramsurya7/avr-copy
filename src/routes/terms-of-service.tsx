import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { termsPage } from "@/content/pages/company";

export const Route = createFileRoute("/terms-of-service")({
  head: () => pageHead(termsPage),
  component: () => <PageTemplate page={termsPage} />,
});
