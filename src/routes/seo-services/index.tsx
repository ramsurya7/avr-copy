import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { seoServicesHub } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/")({
  head: () => pageHead(seoServicesHub),
  component: () => <PageTemplate page={seoServicesHub} />,
});
