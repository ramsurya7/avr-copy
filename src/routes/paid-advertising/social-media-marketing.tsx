import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { socialMediaMarketing } from "@/content/pages/advertising";

export const Route = createFileRoute("/paid-advertising/social-media-marketing")({
  head: () => pageHead(socialMediaMarketing),
  component: () => <PageTemplate page={socialMediaMarketing} />,
});
