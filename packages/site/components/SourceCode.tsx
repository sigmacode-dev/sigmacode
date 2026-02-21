"use client";

import { motion } from "framer-motion";

type CodeLine =
  | { text: string; color: string; parts?: never }
  | { parts: { text: string; color: string }[]; text?: never; color?: never };

const codeLines: CodeLine[] = [
  { text: "#!/usr/bin/env node", color: "text-[#888888]" },
  {
    parts: [
      { text: "import", color: "text-[#FF79C6]" },
      { text: " { execSync } ", color: "text-[#FAFAFA]" },
      { text: "from", color: "text-[#FF79C6]" },
      { text: ' "child_process"', color: "text-[#00FF88]" },
      { text: ";", color: "text-[#888888]" },
    ],
  },
  { text: "", color: "" },
  {
    parts: [
      { text: "execSync", color: "text-[#FAFAFA]" },
      { text: "(", color: "text-[#888888]" },
      { text: '"claude --dangerously-skip-permissions"', color: "text-[#00FF88]" },
      { text: ", {", color: "text-[#888888]" },
    ],
  },
  {
    parts: [
      { text: "  stdio", color: "text-[#FAFAFA]" },
      { text: ": ", color: "text-[#888888]" },
      { text: '"inherit"', color: "text-[#00FF88]" },
      { text: ",", color: "text-[#888888]" },
    ],
  },
  {
    parts: [
      { text: "}", color: "text-[#888888]" },
      { text: ");", color: "text-[#888888]" },
    ],
  },
];

export function SourceCode() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
            The entire source code
          </h2>
          <p className="mt-3 text-[#888888]">Transparency is a feature.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0D0D0D]"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-white/[0.08]" />
              <div className="size-2.5 rounded-full bg-white/[0.08]" />
              <div className="size-2.5 rounded-full bg-white/[0.08]" />
            </div>
            <span className="ml-2 text-xs text-[#888888]">index.js</span>
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm leading-7">
            {codeLines.map((line, i) => (
              <div key={i}>
                {line.parts ? (
                  line.parts.map((part, j) => (
                    <span key={j} className={part.color}>
                      {part.text}
                    </span>
                  ))
                ) : (
                  <>
                    {line.text === "" ? <br /> : <span className={line.color}>{line.text}</span>}
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-center font-mono text-xs text-[#888888]"
        >
          4 lines · 87 bytes · MIT License
        </motion.p>
      </div>
    </section>
  );
}
