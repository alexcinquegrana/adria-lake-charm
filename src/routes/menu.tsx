import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MenuPage } from "@/components/MenuPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/menu")({
  staticData: { sitemap: true },
  head: () => pageHead("it", "menu"),
  component: () => (
    <SiteLayout lang="it" page="menu">
      <MenuPage lang="it" />
    </SiteLayout>
  ),
});
