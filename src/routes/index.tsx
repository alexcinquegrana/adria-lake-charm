import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HomePage } from "@/components/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => pageHead("it", "home"),
  component: () => (
    <SiteLayout lang="it" page="home">
      <HomePage lang="it" />
    </SiteLayout>
  ),
});
