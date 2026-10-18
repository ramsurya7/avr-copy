import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { privacyPage } from "@/content/pages/company";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead(privacyPage),
  component: () => <PageTemplate page={privacyPage} />,
});
