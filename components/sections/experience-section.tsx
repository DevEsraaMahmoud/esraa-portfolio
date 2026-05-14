import { SectionReveal } from "@/components/motion/section-reveal";
import { Separator } from "@/components/ui/separator";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Dictionary };

export function ExperienceSection({ dict }: Props) {
  return (
    <SectionReveal
      id="experience"
      className="border-y border-slate-200 bg-slate-50 py-14 dark:border-cyan-950/30 dark:bg-[#060d18] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono-tech text-xs font-medium text-cyan-600 sm:text-sm dark:text-cyan-400">
            {dict.experience.kicker}
          </p>
          <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl dark:text-white">
            {dict.experience.heading}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-0 sm:mt-14">
          {dict.experience.jobs.map((job, index) => (
            <div key={`${job.company}-${job.period}`} className="flex gap-3 sm:gap-6">
              <div className="flex w-6 shrink-0 flex-col items-center sm:w-9">
                <span
                  className="mt-2 size-2.5 rounded-full border-2 border-cyan-600/50 bg-white ring-4 ring-cyan-500/10 dark:border-cyan-500/60 dark:bg-[#050a14] dark:ring-cyan-500/15"
                  aria-hidden
                />
                {index < dict.experience.jobs.length - 1 ? (
                  <div
                    className="mt-2 w-px flex-1 min-h-[2rem] bg-cyan-900/30 dark:bg-cyan-900/40"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1 pb-10 last:pb-0 sm:pb-12">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-cyan-950/40 dark:bg-[#0a1220] sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="font-mono-tech text-base font-semibold text-slate-900 sm:text-lg dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 dark:text-cyan-200/80">
                        {job.company}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                        {job.location}
                      </p>
                    </div>
                    <p className="font-mono-tech text-xs tabular-nums text-cyan-700 sm:text-sm dark:text-cyan-400/90">
                      {job.period}
                    </p>
                  </div>
                  <Separator className="my-3 bg-slate-200 dark:bg-white/10 sm:my-4" />
                  <ul className="space-y-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
                    {job.highlights.map((line, hi) => (
                      <li key={`${job.company}-${hi}`} className="flex gap-2.5">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-cyan-500/70"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
