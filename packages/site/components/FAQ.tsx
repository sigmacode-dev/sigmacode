"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does sigmacode do?",
    a: "It runs claude --dangerously-skip-permissions. This enables Claude Code to work autonomously — editing files, running commands, and completing tasks without asking for confirmation at each step.",
  },
  {
    q: "Is it safe to skip permissions?",
    a: "The --dangerously-skip-permissions flag gives Claude full access to your system. Use it in projects where you trust Claude's actions. We recommend using it in sandboxed environments or personal projects.",
  },
  {
    q: "Why not just use an alias?",
    a: "You absolutely can. sigmacode is a convenience wrapper that works via npx — no shell configuration needed. Run it on any machine, any environment, instantly.",
  },
  {
    q: "Do I need Claude Code installed?",
    a: "Yes. sigmacode requires Claude Code (claude CLI) to be installed and authenticated on your system.",
  },
  {
    q: "Is this an official Anthropic product?",
    a: "No. sigmacode is an independent open-source project. It's a thin wrapper around the official Claude Code CLI.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/[0.06]"
              >
                <AccordionTrigger className="text-left text-sm text-[#FAFAFA] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[#888888]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
