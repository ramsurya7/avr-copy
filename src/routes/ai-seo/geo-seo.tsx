import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { geoSeo } from "@/content/pages/ai-seo";

export const Route = createFileRoute("/ai-seo/geo-seo")({
  head: () => pageHead(geoSeo),
  component: () => <PageTemplate page={geoSeo} />,
});
