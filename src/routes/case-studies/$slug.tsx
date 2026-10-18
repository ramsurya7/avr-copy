import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { caseStudyPageBySlug } from "@/content/pages/case-studies";
import { NotFoundPage } from "@/components/site/NotFoundPage";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const page = caseStudyPageBySlug[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(loaderData.page)
      : { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <NotFoundPage
      title="Case study not found"
      backTo="/case-studies"
      backLabel="All case studies"
    />
  ),
  component: CaseStudyRoute,
});

function CaseStudyRoute() {
  const { page } = Route.useLoaderData();
  return <PageTemplate page={page} />;
}
