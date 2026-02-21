"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText("npx sigmacode");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="group flex w-full max-w-md items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 font-mono text-sm transition-all hover:border-white/[0.12] hover:bg-white/[0.05] lg:px-6 lg:py-4 lg:text-base"
    >
      <div className="flex items-center gap-3">
        <span className="text-[#888888]">$</span>
        <span className="text-[#FAFAFA]">npx sigmacode</span>
      </div>
      <span className="flex items-center gap-1.5 text-[#888888] transition-colors group-hover:text-[#FAFAFA]">
        {copied ? (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-1.5 text-[#00FF88]"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs lg:text-sm">Copied</span>
          </motion.span>
        ) : (
          <>
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
            <span className="text-xs lg:text-sm">Copy</span>
          </>
        )}
      </span>
    </button>
  );
}
