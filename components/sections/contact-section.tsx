import { Download, Phone } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { cvDownloadFilename, cvHref, social } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Dictionary };

export function ContactSection({ dict }: Props) {
  return (
    <SectionReveal
      id="contact"
      className="border-t border-slate-200 bg-white py-14 dark:border-cyan-950/30 dark:bg-[#050a14] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-cyan-950/40 dark:bg-[#0a1220] sm:p-10 lg:p-14">
          <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            {dict.contact.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-400">
            {dict.contact.intro}
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Button
              size="lg"
              className="h-12 min-h-12 w-full rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 sm:h-11 sm:min-h-0 sm:w-auto dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
              asChild
            >
              <a href={social.email} className="inline-flex w-full justify-center sm:w-auto">
                {dict.contact.contactMe}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 min-h-12 w-full rounded-xl border-cyan-700/40 sm:h-11 sm:min-h-0 sm:w-auto dark:border-cyan-500/40" asChild>
              <a href={`tel:${social.phone}`} className="inline-flex w-full justify-center gap-2 sm:w-auto">
                <Phone className="size-4 shrink-0" />
                {social.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 min-h-12 w-full rounded-xl border-cyan-700/40 sm:h-11 sm:min-h-0 sm:w-auto dark:border-cyan-500/40" asChild>
              <a
                href={cvHref}
                download={cvDownloadFilename}
                className="inline-flex w-full justify-center gap-2 sm:w-auto"
              >
                <Download className="size-4 shrink-0" />
                {dict.contact.downloadCv}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
