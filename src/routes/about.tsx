import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout, SectionHeading } from "@/components/site";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Hi, I'm Ravana — BuildMyApp" },
      { name: "description", content: "I am an app developer. I build mobile apps, websites and desktop software that are simple, fast and reliable." },
      { property: "og:title", content: "Hi, I'm Ravana — BuildMyApp" },
      { property: "og:description", content: "I build simple, fast and reliable software." },
      { property: "og:url", content: "https://buildmyapp.store/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/about" },
    ],
  }),
  component: AboutPage,
});

const tools = [
  { category: "Mobile", list: ["React Native"] },
  { category: "Frontend", list: ["React 19", "TypeScript", "Tailwind CSS", "TanStack Router", "Vite"] },
  { category: "Backend", list: ["Node.js", "Express", "NestJS"] },
  { category: "Database", list: ["MongoDB", "PostgreSQL", "SQLite"] },
  { category: "Desktop", list: ["Electron"] },
];

const reasons = [
  {
    title: "Clear communication",
    text: "You talk directly with me. No middlemen, no confusion. I give regular updates so you always know what is happening.",
  },
  {
    title: "Fair price",
    text: "Simple, honest prices with no hidden charges. We agree on the price before work starts.",
  },
  {
    title: "Source code is yours",
    text: "You own 100% of the code, design, and assets. Nothing is locked or held back.",
  },
  {
    title: "Support after delivery",
    text: "I do not disappear after launch. I provide 30 days of free bug fixing and help you get started.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <main className="flex min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex-1 flex-col">
        <PageHero
          eyebrow="RAVANA — INDEPENDENT SOFTWARE · PROFILE & PHILOSOPHY"
          headline={{
            line1: "Software with",
            highlight: "craft and",
            line3: "purpose.",
          }}
          description="I am an independent developer building apps for Android, high-performance web systems and native desktop software. Simple, fast and reliable."
          ctaLabel="Get to know me ↓"
          ctaTarget="about-content"
        />

        <section
          id="about-content"
          className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col scroll-mt-20 px-4 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-5 text-frost leading-relaxed">
            <p className="text-base sm:text-lg text-frost/90">
              I am an app developer. I help founders, creators and small businesses turn their ideas into working apps that real people can use.
            </p>
            <p className="text-base text-frost-muted">
              I build mobile apps for Android, websites and web apps, and desktop software for Windows, Mac and Linux. I handle both the visual design and the backend logic.
            </p>
            <p className="text-base text-frost-muted">
              I care about making things simple, fast and reliable. Good software does not need complicated menus or heavy code—it just needs to work smoothly every single time.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button asChild className="h-11 w-full sm:w-auto justify-center rounded-full bg-volt px-6 font-semibold text-ink hover:bg-volt/90">
                <Link to="/build-my-app">
                  Start a project with me <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 w-full sm:w-auto justify-center rounded-full border-glass-border bg-glass">
                <Link to="/portfolio">See my work</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-glass-border pb-5">
              <span className="grid size-12 place-items-center rounded-xl bg-volt font-display text-xl font-bold text-ink">
                R
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-frost">Ravana</h3>
                <p className="text-xs text-frost-muted">Independent App Developer</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs">
              <div className="flex justify-between border-b border-glass-border/40 pb-3">
                <span className="text-frost-muted">Brand</span>
                <span className="font-medium text-frost">BuildMyApp by Ravana</span>
              </div>
              <div className="flex justify-between border-b border-glass-border/40 pb-3">
                <span className="text-frost-muted">Location</span>
                <span className="font-medium text-frost">India · Remote worldwide</span>
              </div>
              <div className="flex justify-between border-b border-glass-border/40 pb-3">
                <span className="text-frost-muted">Email</span>
                <a href="mailto:rohittrv7@gmail.com" className="font-medium text-volt hover:underline">
                  rohittrv7@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-frost-muted">WhatsApp</span>
                <a
                  href="https://wa.me/918227910516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-volt/15 border border-volt/30 px-3 py-1 text-xs font-semibold text-volt hover:bg-volt hover:text-ink transition"
                >
                  <MessageCircle className="size-3" /> +91 8227910516
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Tools I use"
            title="Clean and dependable technology."
            note="I build apps using these modern tools."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {tools.map((group) => (
              <div key={group.category} className="rounded-xl border border-glass-border bg-glass p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-volt font-mono">{group.category}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.list.map((t) => (
                    <span key={t} className="rounded-md border border-glass-border bg-ink/70 px-2 py-1 text-xs text-frost-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-glass-border bg-ink-soft p-8 sm:p-10">
          <SectionHeading
            eyebrow="Why work with me"
            title="What you can expect from me."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-glass-border bg-glass p-5">
                <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-frost">
                  <Check className="size-4 text-volt" /> {r.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-frost-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </SiteLayout>
  );
}
