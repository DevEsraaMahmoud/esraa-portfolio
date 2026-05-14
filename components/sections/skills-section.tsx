import { SectionReveal } from "@/components/motion/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <SectionReveal
      id="skills"
      className="border-y border-zinc-200/60 bg-zinc-100/40 py-20 dark:border-zinc-800/60 dark:bg-zinc-900/25 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Technical skills
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Backend, data and performance, frontend and integrations — aligned
            with how I ship in production.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="border-zinc-200/80 dark:border-zinc-800/80"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-base">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge key={s} variant="outline" className="rounded-lg px-3 py-1">
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
