import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { guestPostingLinkBuilding } from "@/content/pages/content-marketing";

export const Route = createFileRoute("/content-marketing/guest-posting-link-building")({
  head: () => pageHead(guestPostingLinkBuilding),
  component: () => <PageTemplate page={guestPostingLinkBuilding} />,
});
