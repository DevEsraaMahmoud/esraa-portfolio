"use client";

const LABELS = [
  "Laravel",
  "PHP",
  "MySQL",
  "Redis",
  "Vue 3",
  "Inertia.js",
  "Tailwind CSS",
] as const;

type Props = { rtl?: boolean };

export function TechMarquee({ rtl = false }: Props) {
  const doubled = [...LABELS, ...LABELS];
  const row = (
    <>
      {doubled.map((label, i) => (
        <span
          key={`${label}-${i}`}
          className="inline-flex shrink-0 items-center gap-1.5 px-4 py-2 font-mono-tech text-xs tracking-wide text-slate-300 sm:gap-2 sm:px-8 sm:text-sm"
        >
          <span className="size-1.5 rounded-full bg-cyan-400/80" />
          {label}
        </span>
      ))}
    </>
  );

  return (
    <div className="relative overflow-hidden border-y border-cyan-950/40 bg-[#04080f] py-2.5 sm:py-3">
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r from-[#04080f] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l from-[#04080f] to-transparent sm:w-20" />
      <div
        className={
          rtl
            ? "flex w-max motion-safe:animate-marquee-rtl"
            : "flex w-max motion-safe:animate-marquee"
        }
      >
        {row}
        {row}
      </div>
    </div>
  );
}
