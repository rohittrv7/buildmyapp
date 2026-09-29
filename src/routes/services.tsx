import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesData } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What I Can Build For You — BuildMyApp by Ravana" },
      { name: "description", content: "Tell me your idea. I will build it and deliver it ready to use." },
      { property: "og:title", content: "What I Can Build For You — BuildMyApp by Ravana" },
      { property: "og:description", content: "Tell me your idea. I will build it and deliver it ready to use." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <main className="flex min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex-1 flex-col">
        <PageHero
          eyebrow={`RAVANA — INDEPENDENT SOFTWARE · ${servicesData.length} CORE CAPABILITIES`}
          headline={{
            line1: "Software I can",
            highlight: "build and",
            line3: "deliver.",
          }}
          description="Tell me your idea. Mobile apps, high-performance web systems and native desktop software — built end-to-end and delivered ready to launch."
          ctaLabel="Explore services ↓"
          ctaTarget="services-list"
        />

        <section
          id="services-list"
          className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col scroll-mt-20 px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20"
        >
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-frost-muted">
              Engineering Capabilities
            </h2>
            <p className="max-w-[42ch] font-display text-2xl font-bold tracking-tight text-frost sm:text-3xl">
              Simple, high-quality software tailored for your business.
            </p>
          </div>

          {/* Bento 2x2 Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-glass-border bg-gradient-to-r from-ink-soft to-volt/10 p-8 sm:flex-row sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-frost">Ready to build your app?</h3>
            <p className="mt-2 text-sm text-frost-muted">Tell me your idea and I will give you a clear plan and price.</p>
          </div>
          <Button asChild className="h-12 shrink-0 rounded-full bg-volt px-6 font-semibold text-ink hover:bg-volt/90">
            <Link to="/build-my-app">
              Start a project <ArrowUpRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  </SiteLayout>
  );
}
