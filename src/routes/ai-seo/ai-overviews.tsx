import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aiOverviews } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/ai-overviews")({
  head: () => pageHead(aiOverviews),
  component: () => <PageTemplate page={aiOverviews} />,
});
