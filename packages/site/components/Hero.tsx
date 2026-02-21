"use client";

import { motion } from "framer-motion";
import { InstallCommand } from "@/components/InstallCommand";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-14">
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FF88] opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-sm text-[#888888] lg:text-base"
        >
          <span className="inline-block size-2 rounded-full bg-[#00FF88]" />
          Run it with npx — no install needed
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight text-[#FAFAFA] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Claude Code
          <br />
          <span className="bg-gradient-to-r from-[#00FF88] to-white bg-clip-text text-transparent">
            without the interruptions
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[#888888] lg:max-w-2xl lg:text-xl"
        >
          sigmacode runs Claude Code with full autonomy enabled.
          <br className="hidden sm:block" />{" "}
          Install once, run anywhere. No permission prompts. No friction.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex w-full max-w-md flex-col items-center gap-4"
        >
          <InstallCommand />
        </motion.div>
      </div>
    </section>
  );
}
