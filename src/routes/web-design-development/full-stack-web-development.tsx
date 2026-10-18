import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { fullStackDevelopment } from "@/content/pages/development-automation";

export const Route = createFileRoute("/web-design-development/full-stack-web-development")({
  head: () => pageHead(fullStackDevelopment),
  component: () => <PageTemplate page={fullStackDevelopment} />,
});
