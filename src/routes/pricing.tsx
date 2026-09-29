import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, SectionHeading } from "@/components/site";
import { pricingConfig } from "@/data/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: `${pricingConfig.heading} — BuildMyApp by Ravana` },
      { name: "description", content: pricingConfig.subtext },
      { property: "og:title", content: `${pricingConfig.heading} — BuildMyApp by Ravana` },
      { property: "og:description", content: pricingConfig.subtext },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageFrame
      index="05"
      title={pricingConfig.heading}
      description={pricingConfig.subtext}
    >
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Pricing Plans"
          title="Choose the plan that fits your project."
          note="Clear prices in Indian Rupees (₹) with no hidden fees."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingConfig.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition duration-300 ${
                plan.popular
                  ? "border-volt bg-ink-soft shadow-xl shadow-volt/5 ring-1 ring-volt/40"
                  : "border-glass-border bg-glass hover:border-volt/40"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-volt px-3.5 py-0.5 text-xs font-bold text-ink">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold text-frost">{plan.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-frost-muted min-h-8">
                  {plan.subtext}
                </p>

                <div className="mt-6 border-b border-glass-border pb-6">
                  <span className="font-display text-4xl font-extrabold text-volt">{plan.price}</span>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-xs uppercase tracking-wider text-volt font-semibold">What is included</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-frost/90">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-volt" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <Button
                  asChild
                  className={`w-full h-11 rounded-full font-semibold transition ${
                    plan.popular
                      ? "bg-volt text-ink hover:bg-volt/90 shadow-md shadow-volt/20"
                      : "border border-glass-border bg-glass text-frost hover:bg-frost/10"
                  }`}
                >
                  <Link to={plan.buttonLink}>
                    {plan.buttonText} <ArrowUpRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-frost-muted">
          {pricingConfig.note}
        </p>

        <div className="mt-14 rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-8 text-center">
          <h3 className="font-display text-xl font-bold text-frost">Have questions about pricing?</h3>
          <p className="mt-2 text-xs text-frost-muted">
            Message me on WhatsApp or send an email. I will reply with an honest answer.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full bg-volt font-semibold text-ink hover:bg-volt/90 px-6">
              <a href="https://wa.me/918227910516" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-glass-border bg-glass">
              <Link to="/contact">Send an Email</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
