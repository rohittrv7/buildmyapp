import { createFileRoute } from "@tanstack/react-router";
import { DigitalTeachingBoardShowcase } from "@/components/DigitalTeachingBoardShowcase";

export const Route = createFileRoute("/retail-billing-panel")({
  head: () => ({
    meta: [
      { title: "RetailDesk — Free Offline Billing & Inventory Panel for Windows" },
      {
        name: "description",
        content: "A complete offline billing counter, inventory manager, and customer ledger for shop owners.",
      },
      { property: "og:title", content: "RetailDesk — Free Offline Billing & Inventory Panel for Windows" },
      {
        property: "og:description",
        content: "A complete offline billing counter, inventory manager, and customer ledger for shop owners.",
      },
      { property: "og:url", content: "https://buildmyapp.store/retail-billing-panel" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/retail-billing-panel" },
    ],
  }),
  component: RetailBillingPanelPage,
});

function RetailBillingPanelPage() {
  return <DigitalTeachingBoardShowcase activeProjectId="retail-billing-panel" />;
}
