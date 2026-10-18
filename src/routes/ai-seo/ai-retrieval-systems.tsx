import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aiRetrievalSystems } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/ai-retrieval-systems")({
  head: () => pageHead(aiRetrievalSystems),
  component: () => <PageTemplate page={aiRetrievalSystems} />,
});
