"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type SectionRevealProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ id, children, className }: SectionRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={
        reduceMotion || isInView ? { opacity: 1, y: 0 } : undefined
      }
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.section>
  );
}
