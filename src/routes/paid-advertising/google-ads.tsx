import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { googleAds } from "@/content/pages/advertising";

export const Route = createFileRoute("/paid-advertising/google-ads")({
  head: () => pageHead(googleAds),
  component: () => <PageTemplate page={googleAds} />,
});
