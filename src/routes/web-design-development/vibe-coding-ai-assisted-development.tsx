import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { vibeCoding } from "@/content/pages/development-automation";

export const Route = createFileRoute("/web-design-development/vibe-coding-ai-assisted-development")(
  {
    head: () => pageHead(vibeCoding),
    component: () => <PageTemplate page={vibeCoding} />,
  },
);
