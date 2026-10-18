import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { n8nAutomation } from "@/content/pages/development-automation";

export const Route = createFileRoute("/automation-ai-agents/n8n-automation")({
  head: () => pageHead(n8nAutomation),
  component: () => <PageTemplate page={n8nAutomation} />,
});
