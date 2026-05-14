import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  alt: string;
  className?: string;
  /** صورة صغيرة بجانب الاسم والعنوان */
  inline?: boolean;
};

/** Hero portrait — `public/me.jpeg`. */
export function HeroAvatar({ alt, className, inline }: Props) {
  const outer = inline
    ? "relative h-20 w-20 shrink-0 sm:h-28 sm:w-28"
    : "relative aspect-square w-full";

  return (
    <div className={cn(outer, className)}>
      <div
        className="pointer-events-none absolute inset-[6%] rounded-full bg-cyan-400/25 blur-2xl sm:blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[3%] rounded-full border border-dashed border-cyan-400/50"
        aria-hidden
      />
      <div className="relative mx-auto h-[88%] w-[88%] overflow-hidden rounded-full border-2 border-cyan-500/35 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
        <Image
          src="/me.jpeg"
          alt={alt}
          fill
          priority
          sizes={inline ? "(max-width:640px) 80px, 112px" : "(max-width: 1024px) 90vw, 380px"}
          className="object-cover object-[50%_15%]"
        />
      </div>
    </div>
  );
}
