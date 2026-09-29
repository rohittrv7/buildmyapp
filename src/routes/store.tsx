import { useMemo, useState } from "react";
import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, Search } from "lucide-react";
import { SiteLayout } from "@/components/site";
import { PageHero } from "@/components/PageHero";
import { products } from "@/data/site";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Ready-Made Software — BuildMyApp by Ravana" },
      { name: "description", content: "Download software I have already built. Some are free, some are paid." },
      { property: "og:title", content: "Ready-Made Software — BuildMyApp by Ravana" },
      { property: "og:description", content: "Download software I have already built. Some are free, some are paid." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoreRouteComponent,
});

function StoreRouteComponent() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) {
    return <Outlet />;
  }
  return <StorePage />;
}

function StorePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const visible = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "All" || product.category === category) &&
          `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );

  return (
    <SiteLayout>
      <main className="flex min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex-1 flex-col">
        <PageHero
          eyebrow={`RAVANA — INDEPENDENT SOFTWARE · ${products.length} PRODUCTS`}
          headline={{
            line1: "Software I have",
            highlight: "built and",
            line3: "released.",
          }}
          description="Download software I have already built. Some are free, some are paid. Instant access to full source code and installers."
          ctaLabel="Browse software ↓"
          ctaTarget="products"
        />

        <section
          id="products"
          className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col scroll-mt-20 px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20"
        >
          {/* Section heading & filter bar */}
          <div className="mb-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-frost-muted">
                Browse software downloads
              </h2>
              <span className="font-mono text-xs text-frost-muted/60">
                Showing {visible.length} of {products.length}
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative block flex-1">
                <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-frost-muted" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search software"
                  placeholder="Search ready-made software..."
                  className="h-11 w-full rounded-full border border-glass-border bg-glass pl-10 pr-4 text-sm text-frost outline-none placeholder:text-frost-muted focus:border-volt"
                />
              </label>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter software by category">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    className={`min-h-10 rounded-full border px-4 text-sm transition ${
                      category === item
                        ? "border-volt bg-volt text-ink font-semibold"
                        : "border-glass-border bg-glass text-frost-muted hover:text-frost"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <article key={product.slug} className="flex flex-col justify-between rounded-2xl border border-glass-border bg-glass p-6">
              <div>
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-xl border border-volt/25 bg-volt/10 font-display text-2xl text-volt">
                    {product.icon}
                  </span>
                  <span className="rounded-full border border-glass-border px-3 py-1 text-xs text-frost-muted">
                    {product.category}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-xl font-bold text-frost">{product.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-frost-muted">{product.description}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-frost-muted">
                  <span>v{product.version}</span>
                  <span>•</span>
                  <span>{product.size}</span>
                  <span>•</span>
                  <span className="font-semibold text-volt">{product.price}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2 pt-4 border-t border-glass-border">
                <a
                  href={product.file}
                  download
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-volt px-4 text-sm font-semibold text-ink transition hover:bg-volt/90"
                >
                  <ArrowDownToLine className="size-4" /> Download
                </a>
                <Link
                  to="/store/$slug"
                  params={{ slug: product.slug }}
                  aria-label={`Details for ${product.name}`}
                  className="grid size-11 place-items-center rounded-full border border-glass-border text-frost transition hover:border-volt hover:text-volt"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-sm text-frost-muted">No software found with that name.</p>
        )}
      </section>
    </main>
  </SiteLayout>
  );
}