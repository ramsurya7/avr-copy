import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aeo } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/answer-engine-optimization")({
  head: () => pageHead(aeo),
  component: () => <PageTemplate page={aeo} />,
});
