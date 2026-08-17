import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PlacePage } from "@/components/PlacePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/the-place")({
  head: () => pageHead("en", "place"),
  component: () => (
    <SiteLayout lang="en" page="place">
      <PlacePage lang="en" />
    </SiteLayout>
  ),
});
