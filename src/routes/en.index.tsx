import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HomePage } from "@/components/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  staticData: { sitemap: true },
  head: () => pageHead("en", "home"),
  component: () => (
    <SiteLayout lang="en" page="home">
      <HomePage lang="en" />
    </SiteLayout>
  ),
});
