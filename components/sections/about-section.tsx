import { SectionReveal } from "@/components/motion/section-reveal";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Dictionary };

export function AboutSection({ dict }: Props) {
  return (
    <SectionReveal id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {dict.about.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            {dict.about.heading}
          </h2>
        </div>
        <ul className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dict.about.bullets.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
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
