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
  { prefix: "? ", text: "Allow file edit to src/app.tsx? (y/n) ", color: "text-[#888888]", answer: "y" },
  { prefix: "? ", text: "Allow running npm install? (y/n) ", color: "text-[#888888]", answer: "y" },
  { prefix: "? ", text: "Allow file edit to package.json? (y/n) ", color: "text-[#888888]", answer: "y" },
  { prefix: "? ", text: "Allow running npm test? (y/n) ", color: "text-[#888888]", answer: "y" },
  { prefix: "? ", text: "Allow file edit to src/utils.ts? (y/n) ", color: "text-[#888888]", answer: "y" },
  { prefix: "", text: "...", color: "text-[#888888]" },
];

const afterLines: TerminalLine[] = [
  { prefix: "$ ", text: "sigmacode", color: "text-[#FAFAFA]" },
  { prefix: "● ", text: "Claude is working...", color: "text-[#888888]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Created src/app.tsx", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Installed dependencies", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Tests passing", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
  { prefix: "✓ ", text: "Done.", color: "text-[#FAFAFA]", prefixColor: "text-[#00FF88]" },
];

function TerminalWindow({
  title,
  lines,
  variant,
}: {
  title: string;
  lines: TerminalLine[];
  variant: "before" | "after";
}) {
  return (
    <div
      className={`flex-1 overflow-hidden rounded-xl border ${
        variant === "after"
          ? "border-[#00FF88]/20 shadow-[0_0_40px_rgba(0,255,136,0.04)]"
          : "border-white/[0.06]"
      } bg-[#0D0D0D]`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-white/[0.08]" />
          <div className="size-2.5 rounded-full bg-white/[0.08]" />
          <div className="size-2.5 rounded-full bg-white/[0.08]" />
        </div>
        <span className="ml-2 text-xs text-[#888888]">{title}</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-sm leading-7">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: variant === "before" ? 0.5 : 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
          >
            <span className={line.prefixColor || "text-[#888888]"}>{line.prefix}</span>
            <span className={line.color}>{line.text}</span>
            {"answer" in line && <span className="text-[#00FF88]">{line.answer}</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Demo() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row"
        >
          <TerminalWindow title="Before" lines={beforeLines} variant="before" />
          <TerminalWindow title="After" lines={afterLines} variant="after" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center font-mono text-xs text-[#888888]"
        >
          Equivalent to:{" "}
          <span className="text-[#FAFAFA]">claude --dangerously-skip-permissions</span>
        </motion.p>
      </div>
    </section>
  );
}
