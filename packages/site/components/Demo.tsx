"use client";

import { motion } from "framer-motion";

type TerminalLine = {
  prefix: string;
  text: string;
  color: string;
  prefixColor?: string;
  answer?: string;
};

const beforeLines: TerminalLine[] = [
  { prefix: "$ ", text: "claude", color: "text-[#FAFAFA]" },
  { prefix: "? ", text: "Allow file edit to src/app.tsx? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "? ", text: "Allow running npm install? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "? ", text: "Allow file edit to package.json? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "? ", text: "Allow running npm test? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "? ", text: "Allow file edit to src/utils.ts? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "? ", text: "Allow file edit to src/config.ts? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "? ", text: "Allow running npm run build? (y/n) ", color: "text-[#666]", prefixColor: "text-[#F59E0B]", answer: "y" },
  { prefix: "", text: "...and 14 more prompts", color: "text-[#444]" },
];

const afterLines: TerminalLine[] = [
  { prefix: "$ ", text: "sigmacode", color: "text-[#FAFAFA]" },
  { prefix: "", text: "", color: "" },
  { prefix: "● ", text: "Claude is working...", color: "text-[#999]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Created src/app.tsx", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Installed dependencies", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Tests passing", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Done.", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
];

function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block h-4 w-1.5 translate-y-0.5 bg-[#00FF88] lg:h-5"
    />
  );
}

function TerminalWindow({
  title,
  lines,
  variant,
}: {
  title: string;
  lines: TerminalLine[];
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <div className="relative flex-1">
      {/* Glow behind the After terminal */}
      {isAfter && (
        <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[#00FF88] opacity-[0.06] blur-3xl" />
      )}

      <div
        className={`relative h-full overflow-hidden rounded-xl border ${
          isAfter
            ? "border-[#00FF88]/20"
            : "border-white/[0.06]"
        } bg-[#0D0D0D]`}
      >
        {/* Top accent line for After */}
        {isAfter && (
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent" />
        )}

        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <div className={`size-2.5 rounded-full ${isAfter ? "bg-[#FF5F56]" : "bg-white/[0.08]"}`} />
            <div className={`size-2.5 rounded-full ${isAfter ? "bg-[#FFBD2E]" : "bg-white/[0.08]"}`} />
            <div className={`size-2.5 rounded-full ${isAfter ? "bg-[#27C93F]" : "bg-white/[0.08]"}`} />
          </div>
          <span className={`ml-2 text-xs font-medium lg:text-sm ${isAfter ? "text-[#00FF88]/70" : "text-[#555]"}`}>
            {title}
          </span>
        </div>

        {/* Terminal body */}
        <div
          className={`p-4 font-mono text-sm leading-7 lg:p-6 lg:text-base lg:leading-8 ${
            !isAfter ? "opacity-40" : ""
          }`}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
              className={line.text === "" ? "h-2" : ""}
            >
              <span className={line.prefixColor || "text-[#888888]"}>
                {line.prefix}
              </span>
              <span className={line.color}>{line.text}</span>
              {"answer" in line && (
                <span className="text-[#00FF88]/60">{line.answer}</span>
              )}
            </motion.div>
          ))}
          {isAfter && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="mt-1"
            >
              <span className="text-[#888888]">$ </span>
              <BlinkingCursor />
            </motion.div>
          )}
        </div>

        {/* Fade overlay on Before terminal */}
        {!isAfter && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0D]/80" />
        )}
      </div>
    </div>
  );
}

export function Demo() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", type: "tween" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
            See the difference
          </h2>
        </motion.div>

        <div className="flex flex-col items-stretch gap-4 md:flex-row md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-1"
          >
            <TerminalWindow title="Before" lines={beforeLines} variant="before" />
          </motion.div>

          {/* Arrow between terminals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden items-center md:flex"
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-[#00FF88]/10 bg-[#00FF88]/[0.04]">
              <svg className="size-4 text-[#00FF88]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-1"
          >
            <TerminalWindow title="After" lines={afterLines} variant="after" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
