import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { bloggingCopywriting } from "@/content/pages/content-marketing";

export const Route = createFileRoute("/content-marketing/blogging-copywriting")({
  head: () => pageHead(bloggingCopywriting),
  component: () => <PageTemplate page={bloggingCopywriting} />,
});
