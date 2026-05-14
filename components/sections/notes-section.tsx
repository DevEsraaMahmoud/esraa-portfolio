import { PenLine } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Dictionary };

export function NotesSection({ dict }: Props) {
  return (
    <SectionReveal
      id="notes"
      className="border-y border-slate-200 bg-slate-50 py-14 dark:border-cyan-950/30 dark:bg-[#060d18] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono-tech text-xs font-medium text-cyan-600 sm:text-sm dark:text-cyan-400">
            {dict.notes.kicker}
          </p>
          <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl dark:text-white">
            {dict.notes.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-400">
            {dict.notes.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {dict.notes.items.map((note) => (
            <Card
              key={note.title}
              className="group border-slate-200 bg-white transition-colors hover:border-cyan-300 dark:border-cyan-950/40 dark:bg-[#0a1220] dark:hover:border-cyan-700/50"
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <CardTitle className="font-mono-tech text-base leading-snug text-cyan-800 sm:text-lg dark:text-cyan-200">
                    {note.title}
                  </CardTitle>
                  <PenLine
                    className="size-5 shrink-0 text-cyan-600/60 transition-colors group-hover:text-cyan-500 dark:text-cyan-500/60 dark:group-hover:text-cyan-300"
                    aria-hidden
                  />
                </div>
                <CardDescription className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                  {note.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6">
                <span className="font-mono-tech text-xs font-medium uppercase tracking-wider text-cyan-700/80 dark:text-cyan-400/80">
                  {dict.notes.comingSoon}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
