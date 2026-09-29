import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Send, Smartphone, Globe, Monitor, HelpCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/site";

export const Route = createFileRoute("/build-my-app")({
  head: () => ({
    meta: [
      { title: "Tell Me About Your App — BuildMyApp by Ravana" },
      { name: "description", content: "Tell me about your app idea and get a simple plan and price." },
      { property: "og:title", content: "Tell Me About Your App — BuildMyApp by Ravana" },
      { property: "og:description", content: "Tell me about your app idea and get a simple plan and price." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BuildMyAppPage,
});

const appTypes = [
  { id: "Mobile app", label: "Mobile app", icon: Smartphone },
  { id: "Website or web app", label: "Website or web app", icon: Globe },
  { id: "Desktop software", label: "Desktop software", icon: Monitor },
  { id: "Not sure", label: "Not sure", icon: HelpCircle },
];

const budgetOptions = [
  "Under ₹15,000",
  "₹15,000 to ₹40,000",
  "Above ₹40,000",
  "Not sure",
];

const timelineOptions = [
  "Within 1 month",
  "1 to 3 months",
  "Flexible",
];

function BuildMyAppPage() {
  const [selectedType, setSelectedType] = useState(appTypes[0]?.id ?? "Mobile app");
  const [description, setDescription] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[1] ?? "₹15,000 to ₹40,000");
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[0] ?? "Within 1 month");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Optional mailto link trigger
    const subject = encodeURIComponent(`New App Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nWhat I want: ${selectedType}\nBudget: ${selectedBudget}\nTimeline: ${selectedTimeline}\n\nIdea Details:\n${description}`
    );
    const mailto = `mailto:rohittrv7@gmail.com?subject=${subject}&body=${body}`;

    try {
      window.open(mailto, "_blank");
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <PageFrame
      index="07"
      title="Tell Me About Your App"
      description="Fill in a few simple details below. I will reply with what I can build, how long it takes, and the exact price."
    >
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center px-4 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        {submitted ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-volt/40 bg-ink-soft p-6 text-center sm:p-12 shadow-2xl">
            <span className="inline-grid size-16 place-items-center rounded-full bg-volt/20 text-volt">
              <Check className="size-8" />
            </span>
            <h2 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-frost">
              Thank you! I will contact you within 24 hours.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-frost-muted">
              I have received your request for a <span className="font-semibold text-volt">{selectedType}</span>. I will check the details and email you at <span className="font-semibold text-frost">{email}</span>.
            </p>
            {whatsapp && (
              <p className="mt-1 text-xs text-frost-muted">
                You can also expect a message on WhatsApp at <span className="text-frost">{whatsapp}</span>.
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild className="rounded-full bg-volt font-semibold text-ink hover:bg-volt/90 px-6 w-full sm:w-auto justify-center">
                <Link to="/">Back to Homepage</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-glass-border bg-glass w-full sm:w-auto justify-center">
                <Link to="/portfolio">See My Work</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
            <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-glass-border bg-ink-soft/80 p-5 sm:p-10">
              {/* Step 1 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-volt font-mono">
                  1. What do you want?
                </label>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {appTypes.map((type) => {
                    const Icon = type.icon;
                    const active = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition ${
                          active
                            ? "border-volt bg-volt/15 text-volt font-semibold"
                            : "border-glass-border bg-glass text-frost-muted hover:border-frost/40 hover:text-frost"
                        }`}
                      >
                        <Icon className="size-5" />
                        <span className="text-xs">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-volt font-mono">
                  2. Describe your idea
                </label>
                <p className="mt-1 text-xs text-frost-muted">
                  Explain in simple words what your app should do.
                </p>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="For example: I want an app where customers can see my product catalog and place orders via WhatsApp..."
                  className="mt-2 w-full rounded-xl border border-glass-border bg-glass p-3.5 text-sm text-frost placeholder:text-frost-muted/50 outline-none focus:border-volt"
                />
              </div>

              {/* Step 3 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-volt font-mono">
                  3. What is your budget?
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={`rounded-lg border px-3 py-2.5 text-center text-xs transition ${
                        selectedBudget === b
                          ? "border-volt bg-volt/15 text-volt font-semibold"
                          : "border-glass-border bg-glass text-frost-muted hover:border-frost/40 hover:text-frost"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-volt font-mono">
                  4. When do you need it?
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {timelineOptions.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTimeline(t)}
                      className={`rounded-lg border px-3 py-2.5 text-center text-xs transition ${
                        selectedTimeline === t
                          ? "border-volt bg-volt/15 text-volt font-semibold"
                          : "border-glass-border bg-glass text-frost-muted hover:border-frost/40 hover:text-frost"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5 */}
              <div className="border-t border-glass-border pt-6 space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-volt font-mono">
                  5. Your details
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-frost-muted">Your Name *</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rohit Sharma"
                      className="mt-1 w-full rounded-lg border border-glass-border bg-glass px-3.5 py-2.5 text-sm text-frost placeholder:text-frost-muted/50 outline-none focus:border-volt"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-frost-muted">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rohit@example.com"
                      className="mt-1 w-full rounded-lg border border-glass-border bg-glass px-3.5 py-2.5 text-sm text-frost placeholder:text-frost-muted/50 outline-none focus:border-volt"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-frost-muted">WhatsApp Number (Optional but recommended)</label>
                  <input
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-lg border border-glass-border bg-glass px-3.5 py-2.5 text-sm text-frost placeholder:text-frost-muted/50 outline-none focus:border-volt"
                  />
                </div>
              </div>

              <Button type="submit" className="h-12 w-full rounded-full bg-volt font-semibold text-ink hover:bg-volt/90 text-sm">
                Send to Ravana <Send className="ml-2 size-4" />
              </Button>
            </form>

            {/* Summary card */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-glass-border bg-glass p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-volt font-mono">Summary</p>
                <div className="mt-4 space-y-3 text-xs text-frost-muted">
                  <div className="flex justify-between border-b border-glass-border/40 pb-2">
                    <span>What to build</span>
                    <span className="font-medium text-frost">{selectedType}</span>
                  </div>
                  <div className="flex justify-between border-b border-glass-border/40 pb-2">
                    <span>Budget</span>
                    <span className="font-bold text-volt">{selectedBudget}</span>
                  </div>
                  <div className="flex justify-between border-b border-glass-border/40 pb-2">
                    <span>Target time</span>
                    <span className="font-medium text-frost">{selectedTimeline}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-ink/70 p-4 text-xs leading-relaxed text-frost-muted">
                  I will review this and send you a simple plan and price within 24 hours.
                </div>
              </div>

              <div className="rounded-2xl border border-glass-border bg-ink-soft p-6 text-xs text-frost-muted space-y-3">
                <p className="font-display font-semibold text-frost">What happens next?</p>
                <p>1. I read your message directly.</p>
                <p>2. I reply with how we can build it and what it costs.</p>
                <p>3. If you like the plan, we start building.</p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </PageFrame>
  );
}
