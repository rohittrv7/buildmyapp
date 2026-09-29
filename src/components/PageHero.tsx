import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export interface PageHeroHeadline {
  line1: string;
  highlight: string;
  line3: string;
}

export interface PageHeroProps {
  eyebrow: ReactNode;
  headline?: PageHeroHeadline;
  headlineLine1?: string;
  headlineHighlight?: string;
  headlineLine3?: string;
  description: string;
  ctaLabel?: string;
  ctaTarget?: string;
  showScrollHint?: boolean;
  className?: string;
}

export function PageHero({
  eyebrow,
  headline,
  headlineLine1,
  headlineHighlight,
  headlineLine3,
  description,
  ctaLabel,
  ctaTarget,
  showScrollHint = true,
  className = "",
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const line1 = headline?.line1 ?? headlineLine1 ?? "";
  const highlight = headline?.highlight ?? headlineHighlight ?? "";
  const line3 = headline?.line3 ?? headlineLine3 ?? "";

  const cleanTarget = ctaTarget ? ctaTarget.replace(/^#/, "") : "";

  const handleScrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cleanTarget) {
      e.preventDefault();
      const el = document.getElementById(cleanTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`relative flex min-h-[calc(100svh-68px)] w-full flex-col justify-between overflow-hidden border-b border-glass-border bg-ink ${className}`}
    >
      {/* Background generative layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Hairline subtle grid with radial mask */}
        <div className="hairline-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_75%)]" />

        {/* Soft volt radial glows */}
        <div className="animate-drift absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-volt/20 blur-[140px]" />
        <div
          className="animate-drift absolute right-[-10%] bottom-[-25%] h-[460px] w-[460px] rounded-full bg-volt/10 blur-[160px]"
          style={{ animationDelay: "-8s" }}
        />

        {/* Dotted pattern with subtle radial mask */}
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <pattern id="page-hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" className="fill-volt/20" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#page-hero-dots)"
            style={{ maskImage: "radial-gradient(ellipse at 75% 65%, black, transparent 70%)" }}
          />
        </svg>

        {/* Bottom subtle vignette */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      {/* Main hero content container */}
      <div className="relative mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center px-4 py-8 sm:px-10 sm:py-14 md:py-16 lg:px-16 xl:px-20">
        <div className="grid grid-cols-12 gap-8 items-end lg:gap-12">
          {/* Left Column: Eyebrow + Headline */}
          <div className="col-span-12 lg:col-span-8">
            {/* Top-left small monospace eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }
              }
              className="mb-6 sm:mb-8"
            >
              <p className="font-mono text-xs uppercase tracking-[.18em] text-frost-muted font-medium">
                {eyebrow}
              </p>
            </motion.div>

            {/* Fluid 3-line headline with mask reveals */}
            <h1 className="font-display text-[clamp(2.75rem,8vw,10rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
              {line1 && (
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
                    {line1}
                  </motion.span>
                </span>
              )}

              {highlight && (
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block text-volt"
                    initial={shouldReduceMotion ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }
                    }
                  >
                    {highlight}
                  </motion.span>
                </span>
              )}

              {line3 && (
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block italic text-frost pl-[0.05em]"
                    initial={shouldReduceMotion ? false : { y: "115%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }
                    }
                  >
                    {line3}
                  </motion.span>
                </span>
              )}
            </h1>
          </div>

          {/* Right Column (desktop) / Below headline (mobile/tablet): Description & CTA */}
          <motion.div
            className="col-span-12 flex flex-col justify-end gap-6 sm:gap-7 lg:col-span-4 lg:border-l lg:border-glass-border lg:pl-8 pb-1"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }
            }
          >
            <p className="max-w-md text-base leading-relaxed text-frost-muted sm:text-lg">
              {description}
            </p>

            {ctaLabel && cleanTarget && (
              <a
                href={`#${cleanTarget}`}
                onClick={handleScrollToTarget}
                className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-volt px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(230,255,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-volt/95 hover:shadow-[0_16px_40px_-12px_rgba(230,255,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt active:translate-y-0"
              >
                <span>{ctaLabel}</span>
                <span className="font-bold transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom animated scroll hint */}
      {showScrollHint && cleanTarget && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.75 }
          }
          className="relative pb-6 pt-2 flex justify-center items-center pointer-events-auto"
        >
          <a
            href={`#${cleanTarget}`}
            onClick={handleScrollToTarget}
            aria-label="Scroll to content"
            className="group flex flex-col items-center gap-1.5 p-2 text-frost-muted/60 transition-colors hover:text-volt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt rounded-full"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] transition-colors group-hover:text-volt">
              Scroll
            </span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
              transition={
                shouldReduceMotion
                  ? {}
                  : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              }
              className="flex flex-col items-center text-volt"
            >
              <svg
                className="size-4 transition-transform group-hover:translate-y-0.5"
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
        </motion.div>
      )}
    </header>
  );
}
