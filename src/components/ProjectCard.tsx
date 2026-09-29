import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  const visibleTags = project.stack.slice(0, 3);
  const extraTagsCount = project.stack.length - 3;

  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className="group relative flex h-full flex-col rounded-[22px] border border-white/10 bg-ink-soft/70 p-5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-volt/50 hover:shadow-[0_16px_36px_-12px_rgba(202,254,72,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt motion-reduce:hover:transform-none motion-reduce:transition-none"
    >
      {/* 1. Cover area (16:10 aspect ratio) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/5 bg-ink">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-volt/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.91_0.22_126_/_14%),transparent_65%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none grid size-16 place-items-center rounded-2xl border border-glass-border bg-ink/80 font-display text-3xl font-extrabold text-volt shadow-inner transition-transform duration-500 ease-out group-hover:scale-110">
              {project.name.charAt(0)}
            </div>
          </div>
        )}

        {/* Platform badge (top-left) */}
        <span className="absolute left-3 top-3 z-10 rounded-full border border-glass-border bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-volt backdrop-blur-md shadow-sm">
          {project.category}
        </span>

        {/* Circular arrow button (top-right) */}
        <span className="absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full border border-glass-border bg-ink/80 text-frost backdrop-blur-md shadow-sm transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>

      {/* 2. Body */}
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-display text-xl font-bold leading-snug text-frost transition-colors duration-300 group-hover:text-volt line-clamp-2">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-frost-muted line-clamp-2">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-ink-soft/80 px-2.5 py-1 font-mono text-xs text-frost-muted whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {extraTagsCount > 0 && (
            <span className="rounded-md border border-volt/30 bg-volt/10 px-2 py-1 font-mono text-xs font-semibold text-volt whitespace-nowrap">
              +{extraTagsCount}
            </span>
          )}
        </div>
      </div>

      {/* 3. Footer */}
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-glass-border pt-4">
        <span className="min-w-0 truncate font-mono text-xs uppercase tracking-wider text-frost-muted">
          {project.category} {project.kind === "App build" ? "App" : "Software"}
        </span>
        <span className="shrink-0 text-xs font-semibold text-volt transition-transform duration-300 group-hover:translate-x-1">
          View Details →
        </span>
      </div>
    </Link>
  );
}
