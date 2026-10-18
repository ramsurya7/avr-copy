import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { locationsHub } from "@/content/pages/locations";

export const Route = createFileRoute("/locations/")({
  head: () => pageHead(locationsHub),
  component: () => <PageTemplate page={locationsHub} />,
});
