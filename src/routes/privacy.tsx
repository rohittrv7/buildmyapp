import { createFileRoute } from "@tanstack/react-router";
import { HardDrive, EyeOff, Lock } from "lucide-react";
import { PageFrame } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BuildMyApp by Ravana" },
      { name: "description", content: "I respect your privacy. No trackers, no selling data, and 100% respect for your information." },
      { property: "og:title", content: "Privacy Policy — BuildMyApp by Ravana" },
      { property: "og:description", content: "Simple, honest privacy policy." },
      { property: "og:url", content: "https://buildmyapp.store/privacy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://buildmyapp.store/privacy" },
    ],
  }),
  component: PrivacyPage,
});

const commitments = [
  {
    icon: HardDrive,
    title: "Local storage",
    desc: "Free store utilities run directly in your browser. No personal data is sent to external servers.",
  },
  {
    icon: EyeOff,
    title: "No trackers",
    desc: "I do not sell your personal data or use advertising tracking cookies.",
  },
  {
    icon: Lock,
    title: "Client privacy",
    desc: "All client messages, app ideas, and code files are kept private and confidential.",
  },
];

function PrivacyPage() {
  return (
    <PageFrame
      index="10"
      title="Privacy Policy"
      description="I believe in simple, clean software that respects your personal information."
    >
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {commitments.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-xl border border-glass-border bg-glass p-5">
                <span className="grid size-9 place-items-center rounded-lg border border-volt/30 bg-volt/10 text-volt">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-frost">{c.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-frost-muted">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 space-y-8 rounded-2xl border border-glass-border bg-ink-soft p-6 sm:p-10 text-sm leading-relaxed text-frost-muted">
          <div>
            <h2 className="font-display text-xl font-bold text-frost">1. Information I collect</h2>
            <p className="mt-2">
              When you submit a project inquiry or contact note, I collect only what you share: your name, email address, optional WhatsApp number, and your project notes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-frost">2. Downloadable store tools</h2>
            <p className="mt-2">
              The free tools in my store run inside your web browser. Any notes or goals you type are stored privately in your browser storage and are never sent to me.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-frost">3. Client project confidentiality</h2>
            <p className="mt-2">
              Your idea, project materials, and code are kept strictly confidential. I do not share or reuse your project code.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-frost">4. Data removal</h2>
            <p className="mt-2">
              You can ask me to delete any messages or project notes at any time by emailing{" "}
              <a href="mailto:rohittrv7@gmail.com" className="text-volt hover:underline">
                rohittrv7@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
