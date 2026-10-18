import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { aiAgentDevelopment } from "@/content/pages/development-automation";

export const Route = createFileRoute("/automation-ai-agents/ai-agent-development")({
  head: () => pageHead(aiAgentDevelopment),
  component: () => <PageTemplate page={aiAgentDevelopment} />,
});
