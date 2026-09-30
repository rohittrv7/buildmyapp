import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, FileText, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout, SectionHeading } from "@/components/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How It Works — BuildMyApp by Ravana" },
      { name: "description", content: "Simple steps from your idea to a finished app." },
      { property: "og:title", content: "How It Works — BuildMyApp by Ravana" },
      { property: "og:description", content: "Simple steps from your idea to a finished app." },
      { property: "og:url", content: "https://buildmyapp.store/process" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/process" },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    num: "1",
    title: "Tell Me Your Idea",
    text: "Fill the form or message me on WhatsApp. Tell me what you want.",
    icon: MessageCircle,
  },
  {
    num: "2",
    title: "Get a Plan and Price",
    text: "I reply with what I will build, how long it takes and the price.",
    icon: FileText,
  },
  {
    num: "3",
    title: "I Build It",
    text: "I build your app and show you progress on the way.",
    icon: Code2,
  },
  {
    num: "4",
    title: "Launch and Support",
    text: "You get the final app and the full source code. I fix any bugs for 30 days after delivery.",
    icon: Rocket,
  },
];

const faqs = [
  {
    q: "How long does it take?",
    a: "Simple apps and websites take 2 to 3 weeks. Complete apps with backend take about 4 to 6 weeks.",
  },
  {
    q: "How do I pay?",
    a: "Payment is split into simple milestones: a deposit to start, a payment after seeing the working app, and the rest when everything is delivered.",
  },
  {
    q: "Will I get the source code?",
    a: "Yes. You get 100% of the code, files and design assets. Everything belongs to you.",
  },
  {
    q: "Can I ask for changes?",
    a: "Yes. I show you the app as I build it so you can test it and ask for adjustments easily.",
  },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <main className="flex min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex-1 flex-col">
        <PageHero
          eyebrow={`RAVANA — INDEPENDENT SOFTWARE · 4-STEP WORKFLOW`}
          headline={{
            line1: "How ideas are",
            highlight: "built and",
            line3: "launched.",
          }}
          description="Clear milestones, honest timelines, and zero surprises. From initial conversation to working production code and 30-day post-launch support."
          ctaLabel="See how it works ↓"
          ctaTarget="process-steps"
        />

        <section
          id="process-steps"
          className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col scroll-mt-20 px-4 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20"
        >
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-frost-muted">
              Simple 4-Step Process
            </h2>
            <p className="max-w-[36ch] font-display text-2xl font-bold tracking-tight text-frost sm:text-3xl">
              From your idea to a working app in 4 clear stages.
            </p>
          </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-volt">{step.num}</span>
                    <span className="grid size-10 place-items-center rounded-xl border border-volt/20 bg-volt/10 text-volt">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-frost">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-frost-muted">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Common questions answered simply."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-glass-border bg-glass p-6">
                <h4 className="font-display text-lg font-semibold text-frost">{faq.q}</h4>
                <p className="mt-2 text-sm leading-relaxed text-frost-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-glass-border bg-gradient-to-r from-ink-soft to-volt/10 p-6 sm:flex-row sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-frost">Ready to get started?</h3>
            <p className="mt-2 text-sm text-frost-muted">Tell me your idea and let's start with Step 1.</p>
          </div>
          <Button asChild className="h-12 w-full sm:w-auto shrink-0 rounded-full bg-volt px-6 font-semibold text-ink hover:bg-volt/90 justify-center">
            <Link to="/build-my-app">
              Tell me your idea <ArrowUpRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  </SiteLayout>
  );
}
