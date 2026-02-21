"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  // Column 1
  {
    quote:
      "Saves me from clicking 'yes' a hundred times a day. Simple and effective.",
    name: "Alex Chen",
    role: "Frontend Engineer",
    avatar: "/avatars/alex.jpg",
  },
  {
    quote:
      "I was mass-approving every permission prompt without even reading them. sigmacode just made that honest.",
    name: "Jordan Park",
    role: "Staff Engineer",
    avatar: "/avatars/jordan.jpg",
  },
  {
    quote: "Why didn't this exist sooner?",
    name: "Emily Zhang",
    role: "DevOps Engineer",
    avatar: "/avatars/emily.jpg",
  },
  // Column 2
  {
    quote:
      "Installed it globally once and forgot about it. Now every project just works without the permission spam.",
    name: "Sarah Mitchell",
    role: "Full-Stack Developer",
    avatar: "/avatars/sarah.jpg",
  },
  {
    quote:
      "My workflow went from 'claude → approve → approve → approve → done' to just 'sigmacode → done'. Massive time saver.",
    name: "Tomasz Kowalski",
    role: "Backend Engineer",
    avatar: "/avatars/tomasz.jpg",
  },
  {
    quote: "Installed it once, never looked back.",
    name: "Priya Sharma",
    role: "Engineering Manager",
    avatar: "/avatars/priya.jpg",
  },
  // Column 3
  {
    quote:
      "Four lines of code and it solves my biggest Claude Code frustration.",
    name: "Marcus Rivera",
    role: "Senior Engineer",
    avatar: "/avatars/marcus.jpg",
  },
  {
    quote:
      "I recommended this to my entire team. Everyone switched within a day.",
    name: "Nina Johansson",
    role: "Tech Lead",
    avatar: "/avatars/nina.jpg",
  },
  {
    quote:
      "The fact that it's open source and literally four lines of code makes it a no-brainer. Zero trust issues.",
    name: "David Kim",
    role: "Security Engineer",
    avatar: "/avatars/david.jpg",
  },
];

// Split testimonials into 3 columns for masonry layout
const columns = [
  testimonials.filter((_, i) => i % 3 === 0),
  testimonials.filter((_, i) => i % 3 === 1),
  testimonials.filter((_, i) => i % 3 === 2),
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", type: "tween", delay: index * 0.04 }}
      className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/[0.1] hover:bg-white/[0.03] lg:p-6"
    >
      <p className="text-sm leading-relaxed text-[#FAFAFA]/90 lg:text-base">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="relative size-8 shrink-0 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.08] lg:size-9">
          <Image src={t.avatar} alt={t.name} fill className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#FAFAFA]">
            {t.name}
          </p>
          <p className="truncate text-xs text-[#888888]">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", type: "tween" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
            Loved by developers
          </h2>
        </motion.div>

        {/* Masonry: 3 columns on lg, 2 on sm, 1 on mobile */}
        <div className="hidden gap-4 lg:grid lg:grid-cols-3">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((t, i) => (
                <TestimonialCard key={t.name} t={t} index={colIdx + i * 3} />
              ))}
            </div>
          ))}
        </div>

        {/* 2 columns on sm–lg */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:hidden">
          {[
            testimonials.filter((_, i) => i % 2 === 0),
            testimonials.filter((_, i) => i % 2 === 1),
          ].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((t, i) => (
                <TestimonialCard key={t.name} t={t} index={colIdx + i * 2} />
              ))}
            </div>
          ))}
        </div>

        {/* Single column on mobile */}
        <div className="flex flex-col gap-4 sm:hidden">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
