"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Saves me from clicking 'yes' a hundred times a day. Simple and effective.",
    author: "Frontend Engineer",
  },
  {
    quote:
      "I added this to every project. It's exactly what Claude Code should have been by default.",
    author: "Full-Stack Developer",
  },
  {
    quote:
      "Four lines of code and it solves my biggest Claude Code frustration.",
    author: "Senior Engineer",
  },
  {
    quote: "Why didn't this exist sooner?",
    author: "DevOps Engineer",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="text-sm leading-relaxed text-[#FAFAFA]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-xs text-[#888888]">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
