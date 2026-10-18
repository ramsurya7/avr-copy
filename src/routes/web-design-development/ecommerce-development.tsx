import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { ecommerceDevelopment } from "@/content/pages/web-design";

export const Route = createFileRoute("/web-design-development/ecommerce-development")({
  head: () => pageHead(ecommerceDevelopment),
  component: () => <PageTemplate page={ecommerceDevelopment} />,
});
