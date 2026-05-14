import { siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-zinc-50 py-10 dark:border-zinc-800/70 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:px-6 lg:px-8 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
        <p className="text-zinc-500 dark:text-zinc-500">
          Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
