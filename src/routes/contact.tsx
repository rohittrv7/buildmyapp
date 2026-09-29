import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mail, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, SectionHeading } from "@/components/site";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ravana — BuildMyApp" },
      { name: "description", content: "Message me directly by email or WhatsApp to talk about your app." },
      { property: "og:title", content: "Contact Ravana — BuildMyApp" },
      { property: "og:description", content: "Direct communication for your app build." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto = `mailto:rohittrv7@gmail.com?subject=${subject}&body=${body}`;

    try {
      window.open(mailto, "_blank");
    } catch {
      // fallback
    }

    setSubmitted();
  };

  const setSubmitted = () => {
    setSent(true);
  };

  return (
    <PageFrame
      index="08"
      title="Contact Me"
      description="Message me directly. I will get back to you within 24 hours."
    >
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-4 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-glass-border bg-ink-soft/80 p-5 sm:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <span className="inline-grid size-14 place-items-center rounded-full bg-volt/20 text-volt">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-frost">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-frost-muted">
                  Thank you, {name}! I will reply to <span className="text-frost font-medium">{email}</span> within 24 hours.
                </p>
                <Button
                  onClick={() => {
                    setSent(false);
                    setMessage("");
                  }}
                  variant="outline"
                  className="mt-6 rounded-full border-glass-border bg-glass text-xs"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-5">
                <SectionHeading
                  eyebrow="Send a Message"
                  title="Tell me what you need."
                />

                <div>
                  <label className="text-xs text-frost-muted">Your Name *</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rohit"
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

                <div>
                  <label className="text-xs text-frost-muted">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Ravana, I have an idea for an app and want to discuss..."
                    className="mt-1 w-full rounded-lg border border-glass-border bg-glass p-3.5 text-sm text-frost placeholder:text-frost-muted/50 outline-none focus:border-volt"
                  />
                </div>

                <Button type="submit" className="h-11 w-full rounded-full bg-volt font-semibold text-ink hover:bg-volt/90">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-glass-border bg-glass p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-volt font-mono">Direct Ways to Reach Me</span>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-volt/30 bg-volt/10 text-volt">
                    <MessageCircle className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-frost-muted">WhatsApp</p>
                    <a
                      href="https://wa.me/918227910516"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base font-bold text-frost hover:text-volt transition"
                    >
                      +91 8227910516
                    </a>
                    <p className="text-xs text-frost-muted">Quickest way to chat with me</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-volt/30 bg-volt/10 text-volt">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-frost-muted">Email</p>
                    <a
                      href="mailto:rohittrv7@gmail.com"
                      className="font-display text-base font-bold text-frost hover:text-volt transition"
                    >
                      rohittrv7@gmail.com
                    </a>
                    <p className="text-xs text-frost-muted">For project briefs and details</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-volt/30 bg-volt/10 text-volt">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-frost-muted">Response Time</p>
                    <p className="text-sm font-semibold text-frost">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-glass-border bg-ink-soft p-6">
              <h4 className="font-display text-base font-semibold text-frost">Have an app ready to plan?</h4>
              <p className="mt-1 text-xs text-frost-muted">
                Use my 5-step project form for an exact plan and price.
              </p>
              <Button asChild className="mt-4 h-9 rounded-full bg-volt px-4 text-xs font-semibold text-ink hover:bg-volt/90">
                <Link to="/build-my-app">
                  Start a project <ArrowUpRight className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
