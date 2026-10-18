import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { caseStudiesHub } from "@/content/pages/case-studies";

export const Route = createFileRoute("/case-studies/")({
  head: () => pageHead(caseStudiesHub),
  component: () => <PageTemplate page={caseStudiesHub} />,
});
