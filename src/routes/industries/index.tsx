import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { industriesHub } from "@/content/pages/industries";

export const Route = createFileRoute("/industries/")({
  head: () => pageHead(industriesHub),
  component: () => <PageTemplate page={industriesHub} />,
});
