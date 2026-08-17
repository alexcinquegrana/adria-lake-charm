import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPage } from "@/components/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contatti")({
  head: () => pageHead("it", "contact"),
  component: () => (
    <SiteLayout lang="it" page="contact">
      <ContactPage lang="it" />
    </SiteLayout>
  ),
});
