"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "→",
    title: "One command",
    description:
      "Install with npm i -g sigmacode, then just run sigmacode. That's it.",
  },
  {
    icon: "⚡",
    title: "Zero interruptions",
    description:
      "Skip every permission prompt automatically. Claude edits files, runs commands, and ships — uninterrupted.",
  },
  {
    icon: "🔓",
    title: "Full autonomy",
    description:
      "All of Claude Code's capabilities with --dangerously-skip-permissions enabled by default.",
  },
  {
    icon: "< >",
    title: "Open source",
    description:
      "Four lines of code. Fully transparent. MIT licensed. Inspect it, fork it, trust it.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.03]"
            >
              <span className="mb-4 inline-block font-mono text-xl text-[#00FF88]">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-base font-medium text-[#FAFAFA]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#888888]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
