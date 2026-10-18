import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { localSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/local-seo")({
  head: () => pageHead(localSeo),
  component: () => <PageTemplate page={localSeo} />,
});
