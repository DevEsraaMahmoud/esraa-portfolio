import { SectionReveal } from "@/components/motion/section-reveal";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Dictionary };

export function EducationSection({ dict }: Props) {
  return (
    <SectionReveal
      id="education"
      className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="max-w-2xl">
        <p className="font-mono-tech text-xs font-medium text-cyan-600 sm:text-sm dark:text-cyan-400">
          {dict.education.kicker}
        </p>
        <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl dark:text-white">
          {dict.education.heading}
        </h2>
      </div>

      <div className="mt-10 max-w-2xl space-y-4 sm:mt-12">
        {dict.education.entries.map((entry) => (
          <Card
            key={entry.degree}
            className="border-slate-200 bg-white dark:border-cyan-950/40 dark:bg-[#0a1220]"
          >
            <CardHeader className="space-y-1 p-4 sm:p-6">
              <CardTitle className="font-mono-tech text-lg text-cyan-700 sm:text-xl dark:text-cyan-300">
                {entry.degree}
              </CardTitle>
              <CardDescription className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
                {entry.schoolLine}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionReveal>
  );
}
