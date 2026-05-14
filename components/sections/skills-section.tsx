import {
  Cpu,
  Database,
  Gauge,
  LayoutGrid,
  Plug,
  Workflow,
} from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import type { Dictionary } from "@/lib/i18n/types";

const icons = [Cpu, Database, Gauge, LayoutGrid, Plug, Workflow] as const;

type Props = { dict: Dictionary };

export function SkillsSection({ dict }: Props) {
  return (
    <SectionReveal
      id="skills"
      className="border-b border-slate-200 bg-white py-14 dark:border-cyan-950/25 dark:bg-[#050a14] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono-tech text-xs font-medium text-cyan-600 sm:text-sm dark:text-cyan-400">
            {dict.skills.kicker}
          </p>
          <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            {dict.skills.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-400">
            {dict.skills.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2">
          {dict.skills.groups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={group.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 dark:border-cyan-950/35 dark:bg-[#0a1220]"
              >
                <div className="flex flex-col items-center border-b border-slate-200 px-4 pb-4 pt-5 dark:border-white/5 sm:px-5 sm:pb-5 sm:pt-6">
                  <Icon
                    className="size-10 text-cyan-500 sm:size-12 dark:text-cyan-400"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <h3 className="mt-3 text-center font-mono-tech text-sm font-bold text-cyan-700 sm:mt-4 sm:text-base dark:text-cyan-300">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 bg-slate-100/90 p-3 sm:gap-3 sm:p-4 dark:bg-[#060d18]/95">
                  <p className="text-center text-[11px] leading-relaxed text-slate-600 sm:text-xs dark:text-slate-400">
                    {group.blurb}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-white/90 px-2 py-0.5 font-mono-tech text-[11px] text-slate-700 shadow-sm dark:bg-slate-800/90 dark:text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
