import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aiVisibility } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/ai-visibility")({
  head: () => pageHead(aiVisibility),
  component: () => <PageTemplate page={aiVisibility} />,
});
