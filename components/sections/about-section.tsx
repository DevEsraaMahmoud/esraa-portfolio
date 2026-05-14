import { SectionReveal } from "@/components/motion/section-reveal";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Product-minded engineering at scale
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            I ship reliable platforms where backend architecture, integrations
            and delivery discipline meet user outcomes. My work spans Laravel
            ecosystems, API design, queue-driven workflows and pragmatic
            performance tuning for production traffic.
          </p>
          <p>
            I collaborate closely with product and infrastructure stakeholders
            to turn complex domains—multi-tenancy, search, secure file
            exchange—into maintainable systems with clear boundaries, automated
            testing and observable deployments.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
