"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TIMELINE } from "@/lib/data";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

/* ── types ── */
type TimelineType = "work" | "edu" | "cert";

const CATEGORY_META: Record<
  TimelineType,
  { label: string; sublabel: string; color: string; dot: string }
> = {
  work: {
    label: "Work",
    sublabel: "Professional\nExperience",
    color: "#6e73ff",
    dot: "bg-[#6e73ff] shadow-[0_0_12px_rgba(110,115,255,0.6)]",
  },
  edu: {
    label: "Education",
    sublabel: "Academic\nBackground",
    color: "#3ecfb8",
    dot: "bg-[#3ecfb8] shadow-[0_0_12px_rgba(62,207,184,0.6)]",
  },
  cert: {
    label: "Certificates",
    sublabel: "Courses &\nCertifications",
    color: "#ff6e9c",
    dot: "bg-[#ff6e9c] shadow-[0_0_12px_rgba(255,110,156,0.6)]",
  },
};

const BADGE_STYLES: Record<TimelineType, string> = {
  work: "bg-[#6e73ff]/10 text-[#6e73ff] border border-[#6e73ff]/20",
  edu: "bg-[#3ecfb8]/10 text-[#3ecfb8] border border-[#3ecfb8]/20",
  cert: "bg-[#ff6e9c]/10 text-[#ff6e9c] border border-[#ff6e9c]/20",
};

/* ── group items by type, preserving order ── */
type Group = { type: TimelineType; items: typeof TIMELINE };

function groupTimeline(items: typeof TIMELINE): Group[] {
  const groups: Group[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.type === item.type) {
      last.items.push(item);
    } else {
      groups.push({ type: item.type, items: [item] });
    }
  }
  return groups;
}

/* ── single card ── */
function TimelineCard({
  item,
  index,
  color,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
  color: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative pl-8"
    >
      {/* dot */}
      <div
        className={cn(
          "absolute left-0 top-4 w-2.5 h-2.5 rounded-full border-2 border-light-bg dark:border-dark-bg -translate-x-[calc(50%+0.5px)]",
          CATEGORY_META[item.type].dot,
        )}
      />

      <motion.div
        whileHover={{ borderColor: `${color}44` }}
        className="rounded-2xl border border-black/8 dark:border-white/8
          bg-white/60 dark:bg-white/[0.03]
          p-5 transition-colors duration-300
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      >
        {/* header row */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-white">
            {item.role}
          </h3>
          <span
            className="text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium"
            style={{
              color,
              background: `${color}14`,
              border: `0.5px solid ${color}33`,
            }}
          >
            {item.date}
          </span>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4">
          {item.company}
        </p>

        <ul className="flex flex-col gap-2">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="relative pl-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
            >
              <span
                className="absolute left-0 top-[0.3em] w-1 h-1 rounded-full"
                style={{ background: color }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

/* ── group block — sticky label left, timeline right ── */
function GroupBlock({ group }: { group: Group }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const meta = CATEGORY_META[group.type];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-0 lg:gap-12"
    >
      {/* ── LEFT: sticky label ── */}
      <div className="lg:sticky lg:top-28 h-fit mb-6 lg:mb-0 pt-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* big label */}
          <div
            className="font-display text-5xl font-extrabold tracking-tight leading-none mb-3 select-none"
            style={{
              background: `linear-gradient(135deg, ${meta.color}, ${meta.color}66)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {meta.label}
          </div>

          {/* sublabel */}
          <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-pre-line leading-relaxed mb-5">
            {meta.sublabel}
          </p>

          {/* colored rule */}
          <div
            className="w-8 h-0.5 rounded-full"
            style={{ background: meta.color }}
          />

          {/* count pill */}
          <div
            className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full text-[10px] font-semibold"
            style={{
              color: meta.color,
              background: `${meta.color}14`,
              border: `0.5px solid ${meta.color}33`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: meta.color }}
            />
            {group.items.length}{" "}
            {group.items.length === 1 ? "entry" : "entries"}
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: timeline ── */}
      <div className="relative">
        {/* vertical line */}
        <div
          className="absolute left-0 top-2 bottom-2 w-px"
          style={{
            background: `linear-gradient(to bottom, ${meta.color}, ${meta.color}22)`,
          }}
        />

        <div className="flex flex-col gap-6">
          {group.items.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} color={meta.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── section ── */
export default function Experience() {
  const groups = groupTimeline(TIMELINE);

  return (
    <section
      id="experience"
      className="py-14 px-6 md:px-12 lg:px-20 bg-light-bg dark:bg-dark-bg"
    >
      <SectionLabel>Experience &amp; Education</SectionLabel>
      <SectionTitle>
        My <AccentText>journey</AccentText>
      </SectionTitle>

      <div className="mt-16 flex flex-col gap-24">
        {groups.map((group, i) => (
          <GroupBlock key={i} group={group} />
        ))}
      </div>
    </section>
  );
}
