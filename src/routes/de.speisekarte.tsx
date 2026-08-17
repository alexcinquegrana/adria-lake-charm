import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MenuPage } from "@/components/MenuPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/speisekarte")({
  head: () => pageHead("de", "menu"),
  component: () => (
    <SiteLayout lang="de" page="menu">
      <MenuPage lang="de" />
    </SiteLayout>
  ),
});
