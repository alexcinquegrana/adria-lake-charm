import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PlacePage } from "@/components/PlacePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/lokal")({
  head: () => pageHead("de", "place"),
  component: () => (
    <SiteLayout lang="de" page="place">
      <PlacePage lang="de" />
    </SiteLayout>
  ),
});
