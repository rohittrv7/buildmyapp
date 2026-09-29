import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/site";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Directory — BuildMyApp by Ravana" },
      { name: "description", content: "Explore BuildMyApp portfolio, services, store, process, and pricing." },
    ],
  }),
  component: CatchAllPage,
});

function CatchAllPage() {
  return (
    <PageFrame
      index="Directory"
      title="Looking for something?"
      description="Here are the main pages of the website ready for you to explore."
    >
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { title: "Portfolio", desc: "Apps and software I have built.", to: "/portfolio" },
            { title: "Store", desc: "Download ready-made software and templates.", to: "/store" },
            { title: "Services", desc: "Mobile apps, websites, desktop software and backends.", to: "/services" },
            { title: "Process", desc: "4 simple steps from your idea to a working app.", to: "/process" },
            // { title: "Pricing", desc: "Clear, predictable prices in Indian Rupees (₹).", to: "/pricing" },
            { title: "About", desc: "Learn more about me and the tools I use.", to: "/about" },
            { title: "Start a project", desc: "Tell me about your app and get a price.", to: "/build-my-app" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group flex flex-col justify-between rounded-xl border border-glass-border bg-ink-soft p-5 transition hover:border-volt/40 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-frost group-hover:text-volt transition">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-frost-muted leading-relaxed">{item.desc}</p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-volt">
                Open page <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="rounded-full bg-volt font-semibold text-ink hover:bg-volt/90 px-6">
            <Link to="/">
              <Home className="mr-2 size-4" /> Go to Homepage
            </Link>
          </Button>
        </div>
      </section>
    </PageFrame>
  );
}
