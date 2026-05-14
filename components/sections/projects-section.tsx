import { ExternalLink } from "lucide-react";

import { GitHubIcon } from "@/components/icons/brands";

import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <SectionReveal id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Selected projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Builds that mirror production work
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col border-zinc-200/80 dark:border-zinc-800/80"
          >
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-lg">
                  {t}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="mt-auto flex flex-wrap gap-3 pt-2">
              <Button className="rounded-xl" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="secondary" className="rounded-xl" asChild>
                <a href={project.demo} className="gap-2">
                  Live Demo
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionReveal>
  );
}
