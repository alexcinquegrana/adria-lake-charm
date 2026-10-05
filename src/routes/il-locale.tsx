import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PlacePage } from "@/components/PlacePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/il-locale")({
  staticData: { sitemap: true },
  head: () => pageHead("it", "place"),
  component: () => (
    <SiteLayout lang="it" page="place">
      <PlacePage lang="it" />
    </SiteLayout>
  ),
});
