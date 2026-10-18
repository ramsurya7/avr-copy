import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { geoTargetingSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/geo-targeting-seo")({
  head: () => pageHead(geoTargetingSeo),
  component: () => <PageTemplate page={geoTargetingSeo} />,
});
