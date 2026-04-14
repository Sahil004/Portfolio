"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TIMELINE } from "@/lib/data";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const badgeStyles = {
  work: "bg-[#6e73ff]/10 text-[#6e73ff] border border-[#6e73ff]/20",
  edu: "bg-[#3ecfb8]/10 text-[#3ecfb8] border border-[#3ecfb8]/20",
  cert: "bg-[#ff6e9c]/10 text-[#ff6e9c] border border-[#ff6e9c]/20",
};

const badgeLabel = { work: "Work", edu: "Education", cert: "Certificate" };

const dotColor = {
  work: "bg-[#6e73ff] shadow-[0_0_12px_rgba(110,115,255,0.5)]",
  edu: "bg-[#3ecfb8] shadow-[0_0_12px_rgba(62,207,184,0.5)]",
  cert: "bg-[#ff6e9c] shadow-[0_0_12px_rgba(255,110,156,0.5)]",
};

function TimelineItem({
  item,
  index,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative pl-8"
    >
      {/* Dot */}
      <div
        className={cn(
          "absolute left-0 top-3 w-3 h-3 rounded-full border-2 border-light-bg dark:border-dark-bg -translate-x-[calc(50%+0.5px)]",
          dotColor[item.type],
        )}
      />

      {/* Card */}
      <motion.div
        whileHover={{ borderColor: "rgba(110,115,255,0.25)" }}
        className="rounded-2xl border border-black/8 dark:border-white/8
          bg-light-bg-2 dark:bg-dark-bg-2
          p-6 transition-colors duration-300"
      >
        {/* Badge */}
        <span
          className={cn(
            "inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded mb-3",
            badgeStyles[item.type],
          )}
        >
          {badgeLabel[item.type]}
        </span>

        {/* Meta */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-white">
            {item.role}
          </h3>
          <span
            className="text-xs px-3 py-1 rounded-full
            bg-[#6e73ff]/8 border border-[#6e73ff]/15
            text-[#6e73ff] whitespace-nowrap"
          >
            {item.date}
          </span>
        </div>

        <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-4">
          {item.company}
        </p>

        <ul className="flex flex-col gap-2">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="relative pl-5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
            >
              <span className="absolute left-0 top-[0.2em] text-[#6e73ff] text-xs">
                →
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 px-6 md:px-12 lg:px-20 bg-light-bg dark:bg-dark-bg"
    >
      <SectionLabel>Experience &amp; Education</SectionLabel>
      <SectionTitle>
        My <AccentText>journey</AccentText>
      </SectionTitle>

      {/* Timeline */}
      <div className="relative mt-12 max-w-3xl">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-3 bottom-4 w-px"
          style={{
            background:
              "linear-gradient(to bottom, #6e73ff, rgba(110,115,255,0.1))",
          }}
        />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
