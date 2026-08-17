import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPage } from "@/components/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/contact")({
  head: () => pageHead("en", "contact"),
  component: () => (
    <SiteLayout lang="en" page="contact">
      <ContactPage lang="en" />
    </SiteLayout>
  ),
});
