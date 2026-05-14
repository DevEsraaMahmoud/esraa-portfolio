import { SectionReveal } from "@/components/motion/section-reveal";
import { Separator } from "@/components/ui/separator";
import { experience } from "@/lib/content";

export function ExperienceSection() {
  return (
    <SectionReveal
      id="experience"
      className="border-y border-zinc-200/60 bg-zinc-100/40 py-20 dark:border-zinc-800/60 dark:bg-zinc-900/25 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Where I have shipped and led
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-0">
          {experience.map((job, index) => (
            <div key={`${job.company}-${job.period}`} className="flex gap-5 sm:gap-6">
              <div className="flex w-8 shrink-0 flex-col items-center sm:w-9">
                <span
                  className="mt-2 size-2.5 rounded-full border-2 border-zinc-300 bg-zinc-50 ring-4 ring-zinc-100 dark:border-zinc-600 dark:bg-zinc-950 dark:ring-zinc-900"
                  aria-hidden
                />
                {index < experience.length - 1 ? (
                  <div
                    className="mt-2 w-px flex-1 min-h-[2rem] bg-zinc-200 dark:bg-zinc-800"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="flex-1 pb-12 last:pb-0">
                <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 dark:border-zinc-800/80 dark:bg-zinc-950/70">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {job.company}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                        {job.location}
                      </p>
                    </div>
                    <p className="text-sm tabular-nums text-zinc-500 dark:text-zinc-500">
                      {job.period}
                    </p>
                  </div>
                  <Separator className="my-4 bg-zinc-200 dark:bg-zinc-800" />
                  <ul className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {job.highlights.map((line, hi) => (
                      <li key={`${job.company}-${hi}`} className="flex gap-2.5">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600"
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
