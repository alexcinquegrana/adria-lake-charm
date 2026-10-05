import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MenuPage } from "@/components/MenuPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/menu")({
  staticData: { sitemap: true },
  head: () => pageHead("en", "menu"),
  component: () => (
    <SiteLayout lang="en" page="menu">
      <MenuPage lang="en" />
    </SiteLayout>
  ),
});
