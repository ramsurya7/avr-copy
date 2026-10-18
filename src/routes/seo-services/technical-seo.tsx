import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { technicalSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/technical-seo")({
  head: () => pageHead(technicalSeo),
  component: () => <PageTemplate page={technicalSeo} />,
});
