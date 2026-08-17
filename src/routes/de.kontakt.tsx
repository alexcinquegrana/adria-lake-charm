import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPage } from "@/components/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/kontakt")({
  head: () => pageHead("de", "contact"),
  component: () => (
    <SiteLayout lang="de" page="contact">
      <ContactPage lang="de" />
    </SiteLayout>
  ),
});
