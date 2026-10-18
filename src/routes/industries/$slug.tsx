import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { industryPageBySlug } from "@/content/pages/industries";
import { NotFoundPage } from "@/components/site/NotFoundPage";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const page = industryPageBySlug[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(loaderData.page)
      : { meta: [{ title: "Industry not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <NotFoundPage title="Industry not found" backTo="/industries" backLabel="All industries" />
  ),
  component: IndustryRoute,
});

function IndustryRoute() {
  const { page } = Route.useLoaderData();
  return <PageTemplate page={page} />;
}
