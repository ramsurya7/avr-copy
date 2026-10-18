import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { paidAdvertisingHub } from "@/content/pages/advertising";

export const Route = createFileRoute("/paid-advertising/")({
  head: () => pageHead(paidAdvertisingHub),
  component: () => <PageTemplate page={paidAdvertisingHub} />,
});
