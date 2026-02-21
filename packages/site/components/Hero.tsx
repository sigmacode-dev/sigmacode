"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1 text-[#888888] transition-colors hover:text-[#FAFAFA]"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-1 text-[#00FF88]"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs">Copied</span>
        </motion.span>
      ) : (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
          />
        </svg>
      )}
    </button>
  );
}

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
          className="mb-8 flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-sm text-[#888888]"
        >
          <span className="inline-block size-2 rounded-full bg-[#00FF88]" />
          Now available on npm
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight text-[#FAFAFA] sm:text-6xl md:text-7xl"
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
          className="mt-6 max-w-xl text-lg leading-relaxed text-[#888888]"
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
          {/* Install command */}
          <div className="group flex w-full items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 font-mono text-sm transition-colors hover:border-white/[0.12]">
            <div className="flex items-center gap-3">
              <span className="text-[#888888]">$</span>
              <span className="text-[#FAFAFA]">npm i -g sigmacode</span>
            </div>
            <CopyButton text="npm i -g sigmacode" />
          </div>

          {/* Usage hint */}
          <p className="font-mono text-sm text-[#888888]">
            Then just run: <span className="text-[#00FF88]">sigmacode</span>
          </p>

          {/* GitHub link */}
          <a
            href="https://github.com/anthropics/sigmacode"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-[#888888] transition-colors hover:text-[#FAFAFA]"
          >
            View on GitHub
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-3 text-xs text-[#888888]"
        >
          <span>Open Source</span>
          <span className="text-white/10">·</span>
          <span>MIT Licensed</span>
          <span className="text-white/10">·</span>
          <span>Works with Claude Code</span>
        </motion.div>
      </div>
    </section>
  );
}
