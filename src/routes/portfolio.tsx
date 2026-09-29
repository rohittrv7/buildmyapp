import { useState } from "react";
import { createFileRoute, Outlet, useChildMatches } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { SiteLayout } from "@/components/site";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "My Work — BuildMyApp by Ravana" },
      { name: "description", content: "Apps and software I have built. Tap any project to see details." },
      { property: "og:title", content: "My Work — BuildMyApp by Ravana" },
      { property: "og:description", content: "Apps and software I have built." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioRouteComponent,
});

function PortfolioRouteComponent() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) {
    return <Outlet />;
  }
  return <PortfolioPage />;
}

function PortfolioPage() {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Android", "Web", "Desktop"] as const;

  const countFor = (cat: string) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const visible = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <SiteLayout>
      <main className="flex min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex-1 flex-col">
        {/* Full-screen Page Hero */}
        <PageHero
          eyebrow={`RAVANA — INDEPENDENT SOFTWARE · ${projects.length} PROJECTS`}
          headline={{
            line1: "Apps I have",
            highlight: "built and",
            line3: "shipped.",
          }}
          description="Mobile apps, websites and desktop software, built for real people. Pick a project to see what it does and the tools I used."
          ctaLabel="See my projects ↓"
          ctaTarget="projects"
        />

        {/* Content & Filter Section */}
        <section
          id="projects"
          className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col scroll-mt-20 px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20"
        >
          {/* Small heading above the pills */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-frost-muted">
              Browse by platform
            </h2>
            <span className="font-mono text-xs text-frost-muted/60">
              Showing {visible.length} of {projects.length}
            </span>
          </div>

          {/* Horizontally scrollable category filter pills */}
          <div
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 sm:flex-wrap"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((item) => {
              const count = countFor(item);
              const isActive = category === item;
              return (
                <button
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={isActive}
                  key={item}
                  className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt ${
                    isActive
                      ? "border-volt bg-volt text-ink font-semibold shadow-sm"
                      : "border-glass-border bg-glass/80 text-frost-muted hover:text-frost hover:border-white/20"
                  }`}
                >
                  {item} <span className="ml-1 opacity-75 font-mono text-xs">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          {visible.length > 0 ? (
            <motion.div
              layout
              className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {visible.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(index * 0.05, 0.25),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="my-16 flex flex-1 flex-col items-center justify-center rounded-2xl border border-glass-border bg-ink-soft/40 p-12 text-center backdrop-blur-sm">
              <p className="font-display text-xl font-bold text-frost">
                No projects in this category yet
              </p>
              <p className="mt-2 text-sm text-frost-muted">
                Check back soon or browse all available software.
              </p>
              <button
                type="button"
                onClick={() => setCategory("All")}
                className="mt-6 rounded-full bg-volt px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-volt/90"
              >
                View all projects
              </button>
            </div>
          )}
        </section>
      </main>
    </SiteLayout>
  );
}