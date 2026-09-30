import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — BuildMyApp by Ravana" },
      { name: "description", content: "Simple, honest terms: source code ownership, milestone payments, and 30 days bug fixing." },
      { property: "og:title", content: "Terms — BuildMyApp by Ravana" },
      { property: "og:description", content: "Simple, honest terms." },
      { property: "og:url", content: "https://buildmyapp.store/terms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/terms" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageFrame
      index="11"
      title="Simple Terms"
      description="Clear, fair rules for working together. No confusing legal words."
    >
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <div className="space-y-8 rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-10 text-sm leading-relaxed text-frost-muted">
          <div>
            <h2 className="font-display text-xl font-bold text-frost">1. Source code is 100% yours</h2>
            <p className="mt-2">
              Once final payment is complete, full ownership of all source code, files and design assets is transferred directly to you. I keep no rights or license fees. Everything belongs to you.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-frost">2. Payment in simple milestones</h2>
            <p className="mt-2">
              Projects are paid in clear steps: a deposit to start, a payment after testing a working demo, and the remainder upon final delivery and code transfer.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-frost">3. 30 days of free bug fixing</h2>
            <p className="mt-2">
              Every build includes 30 days of free support. If any bug or issue appears in the agreed features after launch, I will fix it promptly for free.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-frost">4. Free tools and downloads</h2>
            <p className="mt-2">
              Tools downloaded from the store are provided free for your use. They run locally on your computer or browser.
            </p>
          </div>

          <div className="border-t border-glass-border pt-6">
            <p className="text-xs text-frost-muted">
              Have questions about these terms? Email me at{" "}
              <a href="mailto:rohittrv7@gmail.com" className="text-volt hover:underline">
                rohittrv7@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
