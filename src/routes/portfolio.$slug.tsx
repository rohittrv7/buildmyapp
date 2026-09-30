import { BASE_URL } from "@/config/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, StudioCard } from "@/components/site";
import { projects } from "@/data/site";
import { DigitalTeachingBoardShowcase } from "@/components/DigitalTeachingBoardShowcase";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    links: [
      { rel: "canonical", href: `${BASE_URL}/portfolio/${loaderData?.slug ?? ""}` },
    ],
    meta: [
      { title: `${loaderData?.name ?? "Project"} — BuildMyApp by Ravana` },
      { name: "description", content: loaderData?.summary ?? "An app project by Ravana." },
      { property: "og:title", content: `${loaderData?.name ?? "Project"} — BuildMyApp by Ravana` },
      { property: "og:description", content: loaderData?.summary ?? "An app project by Ravana." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <PageFrame index="404" title="Project not found" description="This project does not exist or may have been moved.">
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <Link to="/portfolio" className="text-volt hover:underline">
          Back to all projects
        </Link>
      </section>
    </PageFrame>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();

  if (project.slug === "digital-teaching-board") {
    return <DigitalTeachingBoardShowcase activeProjectId="digital-teaching-board" />;
  }
  if (project.slug === "retail-billing-panel") {
    return <DigitalTeachingBoardShowcase activeProjectId="retail-billing-panel" />;
  }

  return (
    <PageFrame index={`${project.category} / App`} title={project.name} description={project.summary}>
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <div className="rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-10">
          <div className="grid min-h-60 place-items-center rounded-xl border border-glass-border p-8 text-center bg-glass">
            <div>
              <span className="rounded-full border border-volt/30 bg-volt/10 px-3 py-1 text-xs text-volt font-mono">
                {project.category} App
              </span>
              <p className="mt-4 font-display text-4xl font-bold text-frost">{project.name}</p>
              <p className="mt-2 text-sm text-frost-muted">{project.summary}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span key={tag} className="rounded-md border border-glass-border bg-glass px-3 py-1.5 text-xs text-frost">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <StudioCard eyebrow="The problem" title="What this app solves">
            {project.problem}
          </StudioCard>
          <StudioCard eyebrow="How it works" title="The simple solution">
            {project.solution}
          </StudioCard>
          <StudioCard eyebrow="The result" title="What was built">
            {project.result}
          </StudioCard>
          <StudioCard eyebrow="Key features" title="What is inside">
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-volt" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </StudioCard>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-volt px-6 font-semibold text-ink hover:bg-volt/90">
            <Link to="/build-my-app">
              Build an app like this <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full border-glass-border bg-glass">
            <Link to="/portfolio">
              <ArrowLeft className="mr-1 size-4" /> Back to projects
            </Link>
          </Button>
        </div>
      </section>
    </PageFrame>
  );
}