import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ServiceItem } from "@/data/services";

export interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;

  const visibleTech = service.tech.slice(0, 3);
  const remainingCount = service.tech.length - 3;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }
      }
      className="group relative flex h-full flex-col justify-between rounded-[24px] border border-white/[0.09] bg-ink-soft/70 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/50 hover:shadow-[0_20px_40px_-15px_rgba(230,255,0,0.12)]"
    >
      <div>
        {/* Top row: Big outlined number & glass icon square */}
        <div className="flex items-center justify-between">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-volt/30 transition-colors duration-300 group-hover:text-volt/80 select-none">
            {service.number}
          </span>
          <div className="grid size-12 place-items-center rounded-2xl border border-glass-border bg-glass text-volt transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Icon className="size-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-frost">
          {service.title}
        </h3>

        {/* One short description (max 2 lines) */}
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-frost-muted line-clamp-2">
          {service.description}
        </p>

        {/* 3 simple benefits as small pills with check icon */}
        <div className="mt-5 flex flex-wrap gap-2">
          {service.benefits.map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-frost-muted transition-colors duration-200 group-hover:border-volt/20 group-hover:text-frost"
            >
              <Check className="size-3 shrink-0 text-volt" />
              <span>{benefit}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom section with mt-auto so it is always pinned to bottom */}
      <div className="mt-8 flex flex-col">
        <div className="border-t border-glass-border/70 pt-5 flex items-center justify-between gap-3">
          {/* Tech chips on left */}
          <div className="flex flex-wrap items-center gap-1.5 min-w-0 pr-2">
            {visibleTech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-frost-muted/90"
              >
                {item}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="rounded-md border border-volt/20 bg-volt/5 px-1.5 py-0.5 font-mono text-[11px] font-medium text-volt">
                +{remainingCount}
              </span>
            )}
          </div>

          {/* Build this button on right */}
          <Link
            to="/build-my-app"
            search={{ type: service.title } as any}
            className="group/btn inline-flex shrink-0 items-center gap-1.5 rounded-full bg-volt px-4 py-2 text-xs font-semibold text-ink shadow-[0_4px_12px_rgba(230,255,0,0.22)] transition-all duration-200 hover:bg-volt/95 hover:shadow-[0_6px_18px_rgba(230,255,0,0.4)]"
          >
            <span>Build this</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
