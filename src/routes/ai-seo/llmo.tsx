import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { llmo } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/llmo")({
  head: () => pageHead(llmo),
  component: () => <PageTemplate page={llmo} />,
});
