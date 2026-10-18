import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { locationPageBySlug } from "@/content/pages/locations";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const page = locationPageBySlug[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Location not found" }, { name: "robots", content: "noindex" }] };
    }
    const base = pageHead(loaderData.page);
    return {
      ...base,
      scripts: [
        ...base.scripts,
        {
          type: "application/ld+json",
          children: JSON.stringify(
            localBusinessSchema(loaderData.page.breadcrumb.at(-1)?.label ?? "India"),
          ),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <NotFoundPage title="Location not found" backTo="/locations" backLabel="All locations" />
  ),
  component: LocationRoute,
});

function LocationRoute() {
  const { page } = Route.useLoaderData();
  return <PageTemplate page={page} />;
}
