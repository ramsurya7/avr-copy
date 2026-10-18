import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { webDesignHub } from "@/content/pages/web-design";

export const Route = createFileRoute("/web-design-development/")({
  head: () => pageHead(webDesignHub),
  component: () => <PageTemplate page={webDesignHub} />,
});
