import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HomePage } from "@/components/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/")({
  staticData: { sitemap: true },
  head: () => pageHead("de", "home"),
  component: () => (
    <SiteLayout lang="de" page="home">
      <HomePage lang="de" />
    </SiteLayout>
  ),
});
