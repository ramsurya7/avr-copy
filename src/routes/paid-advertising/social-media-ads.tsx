import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { socialMediaAds } from "@/content/pages/advertising";

export const Route = createFileRoute("/paid-advertising/social-media-ads")({
  head: () => pageHead(socialMediaAds),
  component: () => <PageTemplate page={socialMediaAds} />,
});
