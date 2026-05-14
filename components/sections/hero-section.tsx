"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/brands";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { location, social } from "@/lib/content";
import { siteName } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,120,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-28">
        <motion.div
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Portfolio
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-zinc-50"
          >
            {siteName}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 text-xl font-medium text-zinc-800 sm:text-2xl dark:text-zinc-200"
          >
            Senior Full-Stack Engineer — product engineering and scalable
            systems
          </motion.p>
          <motion.p
            variants={item}
            className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400"
          >
            {location}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 text-lg text-zinc-600 sm:text-xl dark:text-zinc-400"
          >
            Laravel, PHP, MySQL, Redis, Vue 3 and Inertia.js — from B2B
            integrations and payments to performance and production reliability.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            I focus on backend architecture, secure APIs, queues and caching,
            end-to-end product delivery and maintainable systems that support
            real business outcomes.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" className="rounded-2xl" asChild>
              <a href="#projects" className="gap-2">
                View Projects
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Connect
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="size-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="size-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a href={social.email} aria-label="Email">
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
