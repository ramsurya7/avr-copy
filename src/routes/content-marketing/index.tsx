import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { contentMarketingHub } from "@/content/pages/content-marketing";

export const Route = createFileRoute("/content-marketing/")({
  head: () => pageHead(contentMarketingHub),
  component: () => <PageTemplate page={contentMarketingHub} />,
});
