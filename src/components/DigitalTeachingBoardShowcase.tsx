import { Grain } from "@/components/Grain";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Roadmap } from "@/components/Roadmap";
import { SuggestionBox } from "@/components/SuggestionBox";
import { SiteFooter } from "@/components/SiteFooter";
import { boardProjects as projects, boardSite as site } from "@/data/board";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function DigitalTeachingBoardShowcase({ activeProjectId }: { activeProjectId?: string }) {
  const activeProject = activeProjectId ? projects.find((p) => p.id === activeProjectId) : null;
  const otherProjects = projects.filter((p) => p.status === "released" && p.id !== activeProjectId);
  const displayProjects = activeProject ? [activeProject] : projects.filter((p) => p.status === "released");
  const mainProject = displayProjects[0] ?? projects[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Top navigation back to main portfolio */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/80 px-6 py-2.5 backdrop-blur-md">
        <div className="mx-auto flex items-center justify-between">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5" /> Back to BuildMyApp Portfolio
          </Link>
          <span className="font-mono text-xs text-muted-foreground">
            Desktop Software Showcase
          </span>
        </div>
      </div>

      <Grain />
      <CursorGlow />
      <Hero />
      <main className="mx-auto max-w-6xl px-6">
        <section id="release">
          {displayProjects.map((p, i) => (
            <ProjectShowcase key={p.id} project={p} index={i} />
          ))}
        </section>
        <Roadmap />
        <SuggestionBox />
        <SiteFooter />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: mainProject.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows",
            softwareVersion: mainProject.version,
            description: mainProject.description,
            author: { "@type": "Person", name: site.makerName },
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </div>
  );
}
