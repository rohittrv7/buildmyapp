import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  Globe,
  MessageCircle,
  Monitor,
  Smartphone,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildMyApp by Ravana — Independent App Developer" },
      {
        name: "description",
        content: "I build simple, fast and reliable mobile apps, websites and desktop software. Tell me your idea and I will build it.",
      },
      { property: "og:title", content: "BuildMyApp by Ravana — Independent App Developer" },
      {
        property: "og:description",
        content: "I build simple, fast and reliable mobile apps, websites and desktop software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const techStack = [
  "React Native",
  "React",
  "Node.js",
  "Express",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
  "Electron",
];

const whatIBuildItems = [
  {
    icon: Smartphone,
    title: "Android Apps",
    text: "Phone apps with smooth touch, clean views, and offline support.",
  },
  {
    icon: Globe,
    title: "Websites & Web Apps",
    text: "Fast websites that load instantly and work on every screen.",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    text: "Native installable tools for Windows and Mac, built with Electron.",
  },
  {
    icon: Database,
    title: "Backend & Database",
    text: "Reliable APIs and databases to secure and manage your data.",
  },
];

function StatCounter({
  target,
  suffix = "",
  label,
  note,
}: {
  target: number;
  suffix?: string;
  label: string;
  note: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, shouldReduceMotion]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-volt tracking-tight">
        {count}
        {suffix}
      </div>
      <p className="mt-2 font-display text-base sm:text-lg font-semibold text-frost">
        {label}
      </p>
      <p className="mt-1 text-xs text-frost-muted">
        {note}
      </p>
    </div>
  );
}

function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  // Asymmetric 3-card selection: digital teaching board first if available, else first 3
  const mainFeatured =
    projects.find((p) => p.slug === "digital-teaching-board") ?? projects[0];
  const secondaryFeatured = projects
    .filter((p) => p.slug !== mainFeatured?.slug)
    .slice(0, 2);

  return (
    <SiteLayout>
      <main className="flex flex-1 flex-col overflow-x-hidden">
        {/* 1. Hero (Full Screen) */}
        <section className="relative flex min-h-[calc(100svh-68px)] min-h-[calc(100dvh-68px)] w-full flex-col justify-between overflow-hidden border-b border-glass-border bg-ink">
          {/* Background atmosphere */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="hairline-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_75%)]" />
            <div className="animate-drift absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-volt/20 blur-[140px]" />
            <div
              className="animate-drift absolute right-[-10%] bottom-[-25%] h-[460px] w-[460px] rounded-full bg-volt/10 blur-[160px]"
              style={{ animationDelay: "-8s" }}
            />
            <svg className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <pattern id="home-hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1" className="fill-volt/20" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#home-hero-dots)"
                style={{ maskImage: "radial-gradient(ellipse at 75% 65%, black, transparent 70%)" }}
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 md:py-20 lg:px-16 xl:px-20">
            <div className="max-w-4xl">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <p className="font-mono text-xs uppercase tracking-[.18em] text-frost-muted font-medium inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-volt animate-pulse" />
                  Independent App Developer · Ravana
                </p>
              </motion.div>

              <h1 className="font-display text-[clamp(2.75rem,7.5vw,8.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-frost">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block text-frost"
                    initial={shouldReduceMotion ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.6, delay: 0.0, ease: [0.16, 1, 0.3, 1] }
                    }
                  >
                    Your idea.
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block text-volt italic pl-[0.02em]"
                    initial={shouldReduceMotion ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }
                    }
                  >
                    Built properly.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }
                }
                className="mt-6 max-w-[50ch] text-base leading-relaxed text-frost-muted sm:text-lg"
              >
                I build mobile apps, websites and desktop software for real people.
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }
                }
                className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <Button
                  asChild
                  className="h-12 rounded-full bg-volt px-7 text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(230,255,0,0.35)] transition hover:bg-volt/95 hover:-translate-y-0.5"
                >
                  <Link to="/build-my-app">
                    Start a project <ArrowUpRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-glass-border bg-glass px-7 text-sm font-medium text-frost transition hover:border-white/30 hover:bg-glass/90"
                >
                  <Link to="/portfolio">
                    See my work
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
                className="mt-8 flex items-center gap-2 font-mono text-xs text-frost-muted/80"
              >
                <Check className="size-3.5 text-volt" />
                <span>Source code is yours. Support after delivery.</span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Scroll Hint */}
          <div className="relative pb-6 pt-2 flex justify-center items-center pointer-events-auto">
            <a
              href="#marquee"
              aria-label="Scroll down to content"
              className="group flex flex-col items-center gap-1.5 p-2 text-frost-muted/60 transition-colors hover:text-volt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt rounded-full"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] transition-colors group-hover:text-volt">
                Scroll
              </span>
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                }
                className="flex flex-col items-center text-volt"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </a>
          </div>
        </section>

        {/* 2. Marquee Strip */}
        <section
          id="marquee"
          className="border-b border-glass-border bg-ink-soft/40 py-3.5 overflow-hidden select-none"
        >
          <div className="animate-marquee flex items-center">
            {[...techStack, ...techStack, ...techStack, ...techStack].map((name, i) => (
              <span key={`${name}-${i}`} className="flex items-center">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-frost-muted/80 hover:text-volt transition-colors whitespace-nowrap">
                  {name}
                </span>
                <span className="size-1.5 rounded-full bg-volt/50 mx-6 shrink-0" />
              </span>
            ))}
          </div>
        </section>

        {/* 3. What I Build */}
        <section className="mx-auto w-full max-w-[1800px] px-6 py-14 sm:px-10 lg:px-16 xl:px-20 md:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
                01 / WHAT I BUILD
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
                Crafted for every screen.
              </h2>
              <p className="mt-2 text-sm text-frost-muted">
                From phones in your pocket to full desktop workstations.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-volt hover:underline"
            >
              See all services <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x divide-glass-border rounded-2xl border border-glass-border bg-glass/40 backdrop-blur-sm">
            {whatIBuildItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 transition-colors duration-200 hover:bg-white/[0.02]"
                >
                  <div className="grid size-10 place-items-center rounded-xl border border-volt/25 bg-volt/10 text-volt">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-frost">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-frost-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Featured Work (Asymmetric 3-Card Layout) */}
        <section className="border-t border-glass-border bg-ink-soft/30 py-14 sm:py-20">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
                  02 / FEATURED WORK
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
                  Selected projects, built and shipped.
                </h2>
                <p className="mt-2 text-sm text-frost-muted">
                  Real software made for real users. Tap any project to explore details.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-volt hover:underline"
              >
                View all work <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Asymmetric layout: 1 big card left (7 cols), 2 stacked cards right (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7 h-full">
                {mainFeatured && <ProjectCard project={mainFeatured} />}
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                {secondaryFeatured[0] && (
                  <ProjectCard project={secondaryFeatured[0]} />
                )}
                {secondaryFeatured[1] && (
                  <ProjectCard project={secondaryFeatured[1]} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Numbers */}
        <section className="border-t border-glass-border bg-ink py-14 sm:py-20">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
                03 / BY THE NUMBERS
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
                Real metrics, honest delivery.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
              <StatCounter
                target={projects.length}
                suffix="+"
                label="Projects Shipped"
                note="Android, Web & Desktop"
              />
              <StatCounter
                target={3}
                suffix=""
                label="Core Platforms"
                note="Mobile, Web, Desktop"
              />
              <StatCounter
                target={30}
                suffix=" Days"
                label="Free Bug-Fix Support"
                note="Included after handover"
              />
              <StatCounter
                target={100}
                suffix="%"
                label="Source Code Ownership"
                note="All code belongs to you"
              />
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section className="border-t border-glass-border bg-ink-soft/40 py-14 sm:py-20">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
                  04 / THE WORKFLOW
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
                  From first chat to finished app.
                </h2>
                <p className="mt-2 text-sm text-frost-muted">
                  A simple 4-step journey with clear milestones and regular demos.
                </p>
              </div>
              <Link
                to="/process"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-volt hover:underline"
              >
                Read full process <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* 4-step horizontal timeline with connecting line */}
            <div className="relative">
              {/* Connecting horizontal line */}
              <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-volt/60 via-volt/30 to-volt/10 z-0" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                {[
                  {
                    num: "01",
                    title: "Tell me your idea",
                    desc: "Fill the quick form or chat with me on WhatsApp.",
                  },
                  {
                    num: "02",
                    title: "Get a plan and price",
                    desc: "I send a clear scope, timeline, and exact fixed cost.",
                  },
                  {
                    num: "03",
                    title: "I build it",
                    desc: "I build your software with regular progress demos.",
                  },
                  {
                    num: "04",
                    title: "Launch and support",
                    desc: "You get the full code plus 30 days of free bug fixing.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex flex-col">
                    <div className="grid size-14 place-items-center rounded-2xl border border-volt/40 bg-ink font-display text-lg font-bold text-volt shadow-[0_0_18px_rgba(230,255,0,0.15)]">
                      {step.num}
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-frost">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-frost-muted">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Why Work With Me */}
        <section className="border-t border-glass-border bg-ink py-14 sm:py-20">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left sticky column */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 space-y-4">
                  <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
                    05 / WHY WORK WITH ME
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-frost leading-[1.05]">
                    Direct collaboration. No agencies, no middlemen.
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-frost-muted pt-2 max-w-[44ch]">
                    You talk directly with the developer writing your code. Clear answers, rapid turnarounds, and total ownership of what gets made.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-volt hover:underline"
                    >
                      More about how I work <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right 2x2 grid of points */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Clear communication",
                    text: "You speak directly with me. Regular updates so you always know progress.",
                  },
                  {
                    title: "Fair price",
                    text: "Agreed upfront before code begins. No hidden costs or surprise fees.",
                  },
                  {
                    title: "Source code is yours",
                    text: "100% of the repository, design assets, and files belong entirely to you.",
                  },
                  {
                    title: "Support after delivery",
                    text: "30 days of free bug fixing and launch support included with every project.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-glass-border bg-glass/60 p-6 backdrop-blur-md transition-all duration-200 hover:border-volt/30"
                  >
                    <div>
                      <div className="grid size-8 place-items-center rounded-lg bg-volt/10 text-volt">
                        <Check className="size-4" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold text-frost">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-frost-muted">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Store Teaser */}
        <section className="border-t border-glass-border bg-ink-soft/40 py-14 sm:py-20">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
                  06 / READY-MADE SOFTWARE
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
                  Software you can download today.
                </h2>
              </div>
              <Link
                to="/store"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-volt hover:underline"
              >
                Browse all software <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Wide banner card */}
            <div className="relative overflow-hidden rounded-[28px] border border-glass-border bg-gradient-to-br from-ink-soft via-glass to-volt/5 p-7 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-volt/30 bg-volt/10 px-3 py-1 font-mono text-xs font-semibold text-volt">
                      Free Download
                    </span>
                    <span className="rounded-full border border-glass-border bg-glass px-3 py-1 font-mono text-xs text-frost-muted">
                      v1.0.0 · 18 KB · Instant access
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-frost">
                    Focus Board — Daily Browser Planner
                  </h3>
                  <p className="max-w-[54ch] text-sm sm:text-base leading-relaxed text-frost-muted">
                    A simple daily planner that opens right in your web browser. Set three daily goals, track habits offline, and keep your workday distraction-free.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href="/downloads/focus-board.html"
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 text-sm font-semibold text-ink shadow-[0_6px_20px_rgba(230,255,0,0.25)] transition hover:bg-volt/95"
                    >
                      <ArrowDownToLine className="size-4" /> Download Free
                    </a>
                    <Link
                      to="/store"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-frost-muted hover:text-frost transition"
                    >
                      Browse all ready-made software <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="rounded-2xl border border-glass-border bg-ink/70 p-6 backdrop-blur-md text-center max-w-xs w-full">
                    <div className="mx-auto grid size-16 place-items-center rounded-2xl border border-volt/30 bg-volt/10 font-display text-3xl font-bold text-volt">
                      ◫
                    </div>
                    <p className="mt-4 font-display text-base font-bold text-frost">
                      Private & Browser-Based
                    </p>
                    <p className="mt-1 text-xs text-frost-muted">
                      No login or account required. Runs 100% locally on your computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Pricing Teaser Strip */}
        <section className="border-y border-glass-border bg-ink-soft/60 py-5">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-volt animate-pulse shrink-0" />
              <p className="font-display text-base sm:text-lg font-semibold text-frost">
                Projects start from <span className="text-volt font-bold">₹15,000</span>. See simple pricing.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-glass-border bg-glass px-5 text-xs font-semibold text-frost hover:border-volt hover:text-volt shrink-0"
            >
              <Link to="/pricing">
                View simple pricing <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* 10. Final Call to Action */}
        <section className="relative overflow-hidden py-20 sm:py-28 text-center bg-ink">
          {/* Centered green glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-volt/15 blur-[140px]"
          />

          <div className="relative mx-auto w-full max-w-3xl px-6">
            <p className="font-mono text-xs uppercase tracking-[.18em] text-volt font-medium">
              07 / GET IN TOUCH
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-frost">
              Have an idea? <br className="hidden sm:inline" />
              <span className="text-volt">Let's build it.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-frost-muted max-w-[48ch] mx-auto">
              Tell me what you are planning. I'll reply with a straightforward plan, fixed price, and honest timeline.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-volt px-8 text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(230,255,0,0.35)] transition hover:bg-volt/95 hover:-translate-y-0.5"
              >
                <Link to="/build-my-app">
                  Start a project <ArrowUpRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <a
                href="https://wa.me/918227910516"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-glass-border bg-glass px-7 text-sm font-medium text-frost hover:border-volt hover:text-volt transition backdrop-blur-md"
              >
                <MessageCircle className="size-4 text-volt" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}