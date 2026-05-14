import { PenLine } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { engineeringNotes } from "@/lib/content";

export function NotesSection() {
  return (
    <SectionReveal id="notes" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Engineering Notes
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          Blog preview — writing in progress
        </h2>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Short-form notes on shipping Laravel platforms, search, tenancy and
          delivery. Full articles will land here soon.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {engineeringNotes.map((note) => (
          <Card
            key={note.title}
            className="group border-zinc-200/80 transition-colors hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-lg leading-snug">{note.title}</CardTitle>
                <PenLine
                  className="size-5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
                  aria-hidden
                />
              </div>
              <CardDescription className="text-base leading-relaxed">
                {note.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Coming soon
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionReveal>
  );
}
