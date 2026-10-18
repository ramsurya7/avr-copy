import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aiSeoHub } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/")({
  head: () => pageHead(aiSeoHub),
  component: () => <PageTemplate page={aiSeoHub} />,
});
