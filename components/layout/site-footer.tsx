import type { Dictionary } from "@/lib/i18n/types";
import { siteName } from "@/lib/site";

type Props = { dict: Dictionary };

export function SiteFooter({ dict }: Props) {
  return (
    <footer className="border-t border-slate-200 bg-white pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-8 dark:border-cyan-950/35 dark:bg-[#050a14] sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] text-xs text-slate-600 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:text-sm lg:px-8 dark:text-slate-400">
        <p className="font-mono-tech">
          © {new Date().getFullYear()} {siteName} · {dict.hero.location}
        </p>
        <p className="text-slate-500 dark:text-slate-500">{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
