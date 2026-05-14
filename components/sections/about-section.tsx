import { SectionReveal } from "@/components/motion/section-reveal";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Dictionary };

export function AboutSection({ dict }: Props) {
  return (
    <SectionReveal
      id="about"
      className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono-tech text-xs font-medium text-cyan-600 sm:text-sm dark:text-cyan-400">
            {dict.about.kicker}
          </p>
          <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl dark:text-white">
            {dict.about.heading}
          </h2>
        </div>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-600 sm:space-y-4 sm:text-base dark:text-slate-400">
          {dict.about.bullets.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-500/80"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
