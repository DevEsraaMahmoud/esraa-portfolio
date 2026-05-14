import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { GitHubIcon } from "@/components/icons/brands";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { projectCoverImages } from "@/lib/project-images";
import { projectLinks } from "@/lib/project-links";

type Props = { dict: Dictionary; locale: Locale };

export function ProjectsSection({ dict, locale }: Props) {
  const prefix = `/${locale}`;

  return (
    <SectionReveal
      id="projects"
      className="border-y border-slate-200 bg-slate-50 py-14 dark:border-cyan-950/30 dark:bg-[#060d18] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono-tech text-xs font-medium text-cyan-600 sm:text-sm dark:text-cyan-400">
            {dict.projects.kicker}
          </p>
          <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            {dict.projects.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {dict.projects.items.map((project, index) => {
            const links = projectLinks[index];
            const coverSrc = projectCoverImages[index];
            const demoHref = links.demo.startsWith("#")
              ? `${prefix}${links.demo}`
              : links.demo;
            const isExternal = demoHref.startsWith("http");

            return (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-cyan-950/40 dark:bg-[#0a1220]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  {coverSrc ? (
                    <>
                      <Image
                        src={coverSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_55%)]" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 dark:from-[#0c1526] dark:via-[#0f172a] dark:to-cyan-950/80" />
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.35),transparent_55%)]" />
                    </>
                  )}
                  <p className="absolute bottom-3 start-3 max-w-[calc(100%-1.5rem)] text-pretty font-display text-base font-bold leading-snug text-white drop-shadow-md sm:bottom-4 sm:start-4 sm:max-w-[calc(100%-2rem)] sm:text-lg md:text-xl">
                    {project.title}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-6">
                  <div>
                    <h3 className="font-mono-tech text-lg font-bold text-cyan-600 sm:text-xl dark:text-cyan-400">
                      {project.title}
                    </h3>
                    <span className="mt-2 inline-block rounded-md bg-cyan-500/15 px-2.5 py-1 font-mono-tech text-xs font-medium text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-200">
                      {project.company}
                    </span>
                  </div>
                  <ul className="list-outside list-disc space-y-2 ps-4 font-mono-tech text-sm leading-relaxed text-slate-600 marker:text-cyan-500 dark:text-slate-400 dark:marker:text-cyan-500/80">
                    {project.bullets.map((b) => (
                      <li key={b} className="break-words ps-0.5">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-3 dark:border-white/5 sm:pt-4">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 font-mono-tech text-xs text-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                    <Button
                      className="h-12 min-h-12 w-full rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 sm:h-10 sm:min-h-0 sm:w-auto dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                      asChild
                    >
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center gap-2 sm:w-auto"
                      >
                        <GitHubIcon className="size-4" />
                        {dict.projects.github}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 min-h-12 w-full rounded-xl border-cyan-700/40 sm:h-10 sm:min-h-0 sm:w-auto dark:border-cyan-500/40"
                      asChild
                    >
                      <a
                        href={demoHref}
                        className="inline-flex w-full justify-center gap-2 sm:w-auto"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {dict.projects.liveDemo}
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
