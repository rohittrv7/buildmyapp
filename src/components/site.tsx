import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Portfolio", to: "/portfolio", num: "01" },
  { label: "Store", to: "/store", num: "02" },
  { label: "Services", to: "/services", num: "03" },
  { label: "Process", to: "/process", num: "04" },
  { label: "About", to: "/about", num: "05" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col overflow-x-hidden bg-ink text-frost antialiased selection:bg-volt selection:text-ink">
      {/* Luxury Sticky Frosted Navbar */}
      <header className="sticky top-0 z-50 h-[68px] border-b border-white/[0.08] bg-ink/85 backdrop-blur-2xl transition-all">
        <div className="mx-auto flex h-full w-full max-w-[1800px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-16 xl:px-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3 font-display transition"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-8 sm:size-9 place-items-center rounded-xl bg-volt font-display text-sm sm:text-base font-extrabold text-ink shadow-[0_0_20px_rgba(230,255,0,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              B
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-[15px] font-bold tracking-tight text-frost group-hover:text-volt transition-colors">
                BuildMyApp
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-frost-muted/70">
                by Ravana
              </span>
            </div>
          </Link>

          {/* Center Floating Capsule Navigation (Desktop) */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] backdrop-blur-xl"
          >
            {navigation.map((item) => {
              const isActive =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  to={item.to}
                  key={item.to}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-volt text-ink font-semibold shadow-[0_2px_10px_rgba(230,255,0,0.35)]"
                      : "text-frost-muted hover:text-frost hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/918227910516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden sm:inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-frost-muted transition hover:border-volt/40 hover:text-volt hover:bg-volt/5"
            >
              <MessageCircle className="size-4" />
            </a>

            {/* Start a project CTA */}
            <Button
              asChild
              className="h-9 sm:h-10 rounded-full bg-volt px-3 sm:px-5 text-xs font-semibold text-ink shadow-[0_4px_16px_rgba(230,255,0,0.25)] transition hover:bg-volt/95 hover:shadow-[0_6px_22px_rgba(230,255,0,0.4)] hover:-translate-y-0.5"
            >
              <Link to="/build-my-app">
                <span className="hidden sm:inline">Start a project</span>
                <span className="sm:hidden">Start project</span>
                <ArrowUpRight className="ml-1 size-3 sm:size-3.5" />
              </Link>
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              className="lg:hidden grid size-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-frost transition hover:border-volt/40 hover:text-volt"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Luxury Slide Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-[68px] bottom-0 z-40 flex flex-col justify-between overflow-y-auto border-t border-white/[0.08] bg-ink/95 p-6 backdrop-blur-2xl lg:hidden"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const isActive =
                    item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                  return (
                    <Link
                      to={item.to}
                      key={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 transition-all ${
                        isActive
                          ? "border-volt/40 bg-volt/10 text-volt font-semibold"
                          : "border-white/[0.06] bg-white/[0.02] text-frost hover:border-white/20"
                      }`}
                    >
                      <span className="font-display text-lg font-bold">{item.label}</span>
                      <span className="font-mono text-xs text-frost-muted">{item.num}</span>
                    </Link>
                  );
                })}

                <div className="my-2 border-t border-white/[0.08]" />

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/blog"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center text-xs font-medium text-frost-muted hover:text-frost"
                  >
                    Journal
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center text-xs font-medium text-frost-muted hover:text-frost"
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Bottom drawer actions */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/[0.08]">
                <Button
                  asChild
                  className="h-12 w-full rounded-full bg-volt font-semibold text-ink shadow-[0_6px_20px_rgba(230,255,0,0.3)] hover:bg-volt/95"
                >
                  <Link to="/build-my-app" onClick={() => setOpen(false)}>
                    Start a project with me <ArrowUpRight className="ml-1 size-4" />
                  </Link>
                </Button>

                <a
                  href="https://wa.me/918227910516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm font-medium text-frost hover:border-volt/40 hover:text-volt transition"
                >
                  <MessageCircle className="size-4 text-volt" />
                  <span>WhatsApp: +91 8227910516</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex flex-1 flex-col">{children}</div>

      <footer className="mt-auto border-t border-glass-border bg-ink-soft/60">
        <div className="mx-auto grid w-full max-w-[1800px] gap-8 px-4 py-10 sm:px-10 md:grid-cols-[1.4fr_1fr_1fr] md:py-14 lg:px-16 xl:px-20">
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
      <div className="mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
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