import { useState, useMemo } from "react";
import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { ArrowRight, Clock, Search } from "lucide-react";
import { PageFrame, SectionHeading } from "@/components/site";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — BuildMyApp by Ravana" },
      { name: "description", content: "Simple guides and advice on building apps from idea to launch." },
      { property: "og:title", content: "Journal — BuildMyApp by Ravana" },
      { property: "og:description", content: "Simple guides and advice on building apps." },
      { property: "og:url", content: "https://buildmyapp.store/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/blog" },
    ],
  }),
  component: BlogRouteComponent,
});

function BlogRouteComponent() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) {
    return <Outlet />;
  }
  return <BlogPage />;
}

function BlogPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((p) => p.category))];

  const visiblePosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <PageFrame
      index="09"
      title="Journal & Guides"
      description="Simple thoughts, advice and practical guides on building software that works."
    >
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Articles"
          title="Practical thoughts on apps."
        />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-frost-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides..."
              className="h-11 w-full rounded-full border border-glass-border bg-glass pl-10 pr-4 text-sm text-frost placeholder:text-frost-muted outline-none focus:border-volt"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs transition ${
                  selectedCategory === cat
                    ? "border-volt bg-volt text-ink font-semibold"
                    : "border-glass-border bg-glass text-frost-muted hover:text-frost"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col justify-between rounded-2xl border border-glass-border bg-ink-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-volt/40"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-frost-muted">
                  <span className="rounded-full border border-glass-border bg-glass px-2.5 py-1 text-volt font-mono">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="size-3 text-frost-muted" /> {post.read}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-frost group-hover:text-volt transition">
                  {post.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-frost-muted">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-glass-border pt-4 text-xs font-semibold text-volt">
                <span>Read guide</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {visiblePosts.length === 0 && (
          <p className="py-16 text-center text-sm text-frost-muted">
            No guides match your search.
          </p>
        )}
      </section>
    </PageFrame>
  );
}
