"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: (
      <svg className="size-6 lg:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "One command",
    description:
      "Run npx sigmacode and you're off. No config, no setup, no flags to remember.",
  },
  {
    icon: (
      <svg className="size-6 lg:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Zero interruptions",
    description:
      "Skip every permission prompt automatically. Claude edits files, runs commands, and ships.",
  },
  {
    icon: (
      <svg className="size-6 lg:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Full autonomy",
    description:
      "All of Claude Code's capabilities with --dangerously-skip-permissions enabled by default.",
  },
  {
    icon: (
      <svg className="size-6 lg:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Open source",
    description:
      "Four lines of code. Fully transparent. Inspect it, fork it, trust it.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", type: "tween" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
            Why sigmacode
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", type: "tween", delay: i * 0.05 }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.03] lg:p-8"
            >
              <span className="mb-4 inline-block text-[#00FF88]">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-base font-medium text-[#FAFAFA] lg:text-lg">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#888888] lg:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
