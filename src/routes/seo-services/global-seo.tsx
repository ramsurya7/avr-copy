import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { globalSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/global-seo")({
  head: () => pageHead(globalSeo),
  component: () => <PageTemplate page={globalSeo} />,
});
