import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { localCitationsGmb } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/local-citations-gmb")({
  head: () => pageHead(localCitationsGmb),
  component: () => <PageTemplate page={localCitationsGmb} />,
});
