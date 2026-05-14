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
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {dict.education.kicker}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          {dict.education.heading}
        </h2>
      </div>

      <div className="mt-12 max-w-2xl">
        {dict.education.entries.map((entry) => (
          <Card
            key={entry.degree}
            className="border-zinc-200/80 dark:border-zinc-800/80"
          >
            <CardHeader>
              <CardTitle className="text-xl">{entry.degree}</CardTitle>
              <CardDescription className="text-base">
                {entry.schoolLine}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionReveal>
  );
}
