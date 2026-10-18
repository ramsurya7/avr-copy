import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aiCitations } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/ai-citations-mentions")({
  head: () => pageHead(aiCitations),
  component: () => <PageTemplate page={aiCitations} />,
});
