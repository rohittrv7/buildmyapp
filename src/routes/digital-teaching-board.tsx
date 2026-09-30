import { createFileRoute } from "@tanstack/react-router";
import { DigitalTeachingBoardShowcase } from "@/components/DigitalTeachingBoardShowcase";

export const Route = createFileRoute("/digital-teaching-board")({
  head: () => ({
    meta: [
      { title: "Digital Teaching Board — Free Classroom Chalkboard for Windows" },
      {
        name: "description",
        content: "A full-screen chalkboard and screen annotation app for Windows. Free, fast, and offline-friendly.",
      },
      { property: "og:title", content: "Digital Teaching Board — Free Classroom Chalkboard for Windows" },
      {
        property: "og:description",
        content: "A full-screen chalkboard and screen annotation app for Windows.",
      },
      { property: "og:url", content: "https://buildmyapp.store/digital-teaching-board" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/digital-teaching-board" },
    ],
  }),
  component: DigitalTeachingBoardPage,
});

function DigitalTeachingBoardPage() {
  return <DigitalTeachingBoardShowcase activeProjectId="digital-teaching-board" />;
}
