import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Store", to: "/store" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  // { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col overflow-x-hidden bg-ink text-frost antialiased selection:bg-volt selection:text-ink">
      <header className="sticky top-0 z-50 border-b border-glass-border bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] w-full max-w-[1800px] items-center gap-4 px-6 sm:px-10 lg:px-16 xl:px-20">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5 font-display text-[15px] font-bold"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-8 place-items-center rounded-lg bg-volt text-sm font-bold text-ink">B</span>
            <span>
              BuildMyApp <span className="text-xs font-normal text-frost-muted">by Ravana</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                to={item.to}
                key={item.to}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-frost/5 hover:text-frost ${
                  pathname.startsWith(item.to) ? "text-volt font-medium" : "text-frost/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="ml-auto h-10 rounded-full bg-volt px-4 text-sm font-semibold text-ink hover:bg-volt/90 lg:ml-2">
            <Link to="/build-my-app">
              Start a project <ArrowUpRight />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="size-10 shrink-0 rounded-full border-glass-border bg-glass lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {open && (
          <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-glass-border bg-ink-soft p-4 lg:hidden">
            {navigation.map((item) => (
              <Link
                to={item.to}
                key={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-frost/80 hover:bg-frost/5"
              >
                {item.label}
              </Link>
            ))}
            {[
              { label: "Journal", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-frost/80 hover:bg-frost/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <div className="flex flex-1 flex-col">{children}</div>

      <footer className="mt-auto border-t border-glass-border bg-ink-soft/60">
        <div className="mx-auto grid w-full max-w-[1800px] gap-9 px-6 py-10 sm:px-10 md:grid-cols-[1.4fr_1fr_1fr] md:py-14 lg:px-16 xl:px-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 font-display font-semibold">
              <span className="grid size-8 place-items-center rounded-lg bg-volt text-sm font-bold text-ink">B</span>
              <span>
                BuildMyApp <span className="text-xs font-normal text-frost-muted">by Ravana</span>
              </span>
            </Link>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-frost-muted">
              I build simple, fast and reliable mobile apps, websites and desktop software.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-xs text-frost-muted">
              <a href="mailto:rohittrv7@gmail.com" className="inline-flex items-center gap-1.5 text-frost hover:text-volt transition">
                <Mail className="size-3.5 text-volt" /> rohittrv7@gmail.com
              </a>
              <a href="https://wa.me/918227910516" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-frost hover:text-volt transition">
                <MessageCircle className="size-3.5 text-volt" /> WhatsApp: +91 8227910516
              </a>
            </div>
            <p className="mt-6 text-xs text-frost-muted">© {new Date().getFullYear()} BuildMyApp by Ravana</p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[.17em] text-frost-muted">Explore</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { label: "Portfolio", to: "/portfolio" },
                { label: "Store", to: "/store" },
                { label: "Services", to: "/services" },
                { label: "Process", to: "/process" },
                // { label: "Pricing", to: "/pricing" },
                { label: "About", to: "/about" },
                { label: "Journal", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-frost/70 transition-colors hover:text-volt">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[.17em] text-frost-muted">Helpful Links</p>
            <div className="grid gap-2">
              {[
                { label: "Start a project", to: "/build-my-app" },
                // { label: "Pricing details", to: "/pricing" },
                { label: "Privacy policy", to: "/privacy" },
                { label: "Terms of use", to: "/terms" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-frost/70 transition-colors hover:text-volt">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  note,
  action,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[.18em] text-volt">{eyebrow}</p>
        <h2 className="mt-3 max-w-[24ch] font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
        {note && <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-frost-muted">{note}</p>}
      </div>
      {action && (
        <Link to={action.href} className="inline-flex shrink-0 items-center gap-2 text-sm text-volt hover:text-volt/80">
          {action.label}
          <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

export function PageIntro({ index, title, description }: { index: string; title: string; description: string }) {
  return (
    <section className="studio-grid border-b border-glass-border">
      <div className="mx-auto w-full max-w-[1800px] px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <p className="text-xs uppercase tracking-[.18em] text-volt font-mono font-medium">{index} / BuildMyApp by Ravana</p>
        <h1 className="mt-3 max-w-[28ch] font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-[65ch] text-sm sm:text-base leading-relaxed text-frost-muted">{description}</p>
      </div>
    </section>
  );
}

export function PageFrame({
  children,
  index,
  title,
  description,
}: {
  children: ReactNode;
  index: string;
  title: string;
  description: string;
}) {
  return (
    <SiteLayout>
      <main className="flex min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex-1 flex-col">
        <PageIntro index={index} title={title} description={description} />
        <div className="flex flex-1 flex-col">{children}</div>
      </main>
    </SiteLayout>
  );
}

export function StudioCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <article className="rounded-xl border border-glass-border bg-glass p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[.16em] text-volt">{eyebrow}</p>
      <h2 className="mt-3 font-display text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-frost-muted">{children}</div>
    </article>
  );
}