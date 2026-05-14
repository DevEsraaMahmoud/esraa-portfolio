import { Download, Phone } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { social } from "@/lib/content";

export function ContactSection() {
  return (
    <SectionReveal
      id="contact"
      className="border-t border-zinc-200/60 bg-zinc-100/40 py-20 dark:border-zinc-800/60 dark:bg-zinc-900/25 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800/80 dark:bg-zinc-950/70 sm:p-12 lg:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Open to product engineering opportunities, backend architecture
            discussions and scalable web platform development.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="rounded-2xl" asChild>
              <a href={social.email}>Contact Me</a>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
              <a href={`tel:${social.phone}`} className="gap-2">
                <Phone className="size-4" />
                {social.phone}
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
              <a href="/cv.pdf" download className="gap-2">
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
