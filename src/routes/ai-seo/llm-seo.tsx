import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { llmSeo } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/llm-seo")({
  head: () => pageHead(llmSeo),
  component: () => <PageTemplate page={llmSeo} />,
});
