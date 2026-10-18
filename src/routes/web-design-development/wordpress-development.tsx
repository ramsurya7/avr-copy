import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { wordpressDevelopment } from "@/content/pages/web-design";

export const Route = createFileRoute("/web-design-development/wordpress-development")({
  head: () => pageHead(wordpressDevelopment),
  component: () => <PageTemplate page={wordpressDevelopment} />,
});
