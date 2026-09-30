import { BASE_URL } from "@/config/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, Share2, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/site";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    links: [
      { rel: "canonical", href: `${BASE_URL}/blog/${loaderData?.slug ?? ""}` },
    ],
    meta: [
      { title: `${loaderData?.title ?? "Article"} — BuildMyApp by Ravana` },
      { name: "description", content: loaderData?.excerpt ?? "A guide from Ravana." },
      { property: "og:title", content: `${loaderData?.title ?? "Article"} — BuildMyApp by Ravana` },
      { property: "og:description", content: loaderData?.excerpt ?? "A guide from Ravana." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <PageFrame
      index="404"
      title="Article not found"
      description="The guide you are looking for has moved or does not exist."
    >
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <Link to="/blog" className="text-volt hover:underline">
          Back to all guides
        </Link>
      </section>
    </PageFrame>
  ),
  component: BlogPostDetail,
});

function BlogPostDetail() {
  const post = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <PageFrame
      index={`${post.category} / Guide`}
      title={post.title}
      description={post.excerpt}
    >
      <article className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-glass-border pb-6 text-xs text-frost-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono">
              <Calendar className="size-3.5 text-volt" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="size-3.5 text-volt" /> {post.read}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-full border border-glass-border bg-glass px-3.5 py-1 text-xs text-frost hover:border-volt transition"
          >
            {copied ? <Check className="size-3.5 text-volt" /> : <Share2 className="size-3.5" />}
            <span>{copied ? "Link copied" : "Share"}</span>
          </button>
        </div>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-base leading-relaxed text-frost/90">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-frost-muted sm:text-lg sm:leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-8">
          <h4 className="font-display text-lg font-bold text-frost">Want to build an app like this?</h4>
          <p className="mt-2 text-sm text-frost-muted">
            I help people turn their ideas into working apps that real people can use.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-volt font-semibold text-ink hover:bg-volt/90">
              <Link to="/build-my-app">
                Tell me your idea <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-glass-border bg-glass">
              <Link to="/blog">
                <ArrowLeft className="mr-1 size-4" /> Back to guides
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
