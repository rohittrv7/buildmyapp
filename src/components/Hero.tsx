import { motion } from "motion/react";
import { boardSite as site, boardProjects as projects } from "@/data/board";

const released = projects.filter((p) => p.status === "released").length;

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      {/* generative background: drifting accent field + hairline grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_75%)]" />
        <div className="animate-drift absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div
          className="animate-drift absolute right-[-10%] bottom-[-30%] h-[460px] w-[460px] rounded-full bg-primary/10 blur-[160px]"
          style={{ animationDelay: "-7s" }}
        />
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" className="fill-primary/25" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dots)"
            style={{ maskImage: "radial-gradient(ellipse at 80% 70%, black, transparent 70%)" }}
          />
        </svg>
      </div>

      <div className="relative mx-auto grid grid-cols-12 gap-6 px-16 pb-24 pt-14 sm:pt-24">
        <motion.div
          className="col-span-12 lg:col-span-9"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-mono mb-8">
            {site.makerName} — independent software · {released} tool
            {released === 1 ? "" : "s"} released
          </p>
          <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
            Small tools,
            <br />
            <span className="text-primary">given away</span>
            <br />
            <span className="pl-[0.08em] italic">for free.</span>
          </h1>
        </motion.div>

        <motion.div
          className="col-span-12 flex flex-col justify-end gap-8 lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:border-l lg:border-border lg:pl-5">
            This is where everything I build lands — desktop apps, web tools,
            odd little utilities. No accounts, no upsells. Download, use, tell
            me what to make next.
          </p>
          <a
            href="#release"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_var(--primary)]"
          >
            See the current release
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
