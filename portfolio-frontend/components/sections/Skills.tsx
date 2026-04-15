"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import {
  MdAutoAwesome,
  MdBuild,
  MdOutlineDesktopWindows,
  MdOutlineSettings,
  MdStorage,
} from "react-icons/md";

import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

import { IconType } from "react-icons";
import { Skill } from "@/lib/types/skillsType";

const TAB_ORDER = [
  "Frontend",
  "Backend",
  "Database",
  "Tools & DevOps",
  "Other",
] as const;

const ICON_MAP: Record<string, IconType> = {
  ...SiIcons,
  ...FaIcons,
  ...MdIcons,
  ...BiIcons,
};

type Tab = (typeof TAB_ORDER)[number];

const TAB_ICONS: Record<Tab, IconType> = {
  Frontend: MdOutlineDesktopWindows,
  Backend: MdOutlineSettings,
  Database: MdStorage,
  "Tools & DevOps": MdBuild,
  Other: MdAutoAwesome,
};

const BADGES: Record<string, { label: string; color: string }> = {
  "Performance Optim.": { label: "2026 ★", color: "#6e73ff" },
  SEO: { label: "2026 ★", color: "#6e73ff" },
  "Core Web Vitals": { label: "2026 ★", color: "#6e73ff" },
  "Web Accessibility": { label: "2026 ★", color: "#6e73ff" },
  GraphQL: { label: "Hot", color: "#ff6e9c" },
  "Nest.js": { label: "Hot", color: "#ff6e9c" },
};

export default function Skills({
  skills,
}: {
  skills: Record<string, Skill[]>;
}) {
  const [active, setActive] = useState<Tab>("Frontend");

  return (
    <section
      id="skills"
      className="py-10 md:py-14 px-6 md:px-12 lg:px-20 bg-light-bg dark:bg-dark-bg"
    >
      <SectionLabel>Tech Stack</SectionLabel>
      <SectionTitle>
        What I <AccentText>build with</AccentText>
      </SectionTitle>

      {/* Tabs — icon + label, underline style */}
      <div className="flex overflow-x-auto whitespace-nowrap mt-12 mb-10 border-b border-black/8 dark:border-white/8 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-black/20 dark:scrollbar-thumb-white/20">
        {" "}
        {TAB_ORDER.map((tab) => {
          const Icon = TAB_ICONS[tab];
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200
              ${
                active === tab
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
              }`}
            >
              <Icon className="text-base leading-none" />
              {tab}

              {/* Active underline */}
              {active === tab && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#6e73ff]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
        >
          {(skills[active] ?? []).map((skill, i) => {
            const badge = skill.badge;
            const Icon =
              skill.icon && ICON_MAP[skill.icon] ? ICON_MAP[skill.icon] : null;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.035, duration: 0.25 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative flex flex-col items-center justify-center gap-4
                  py-5 md:py-7 px-3 rounded-2xl cursor-default
                  bg-white dark:bg-white/[0.03]
                  border border-black/8 dark:border-white/8
                  hover:border-[#6e73ff]/40 dark:hover:border-[#6e73ff]/40
                  hover:shadow-[0_8px_32px_rgba(110,115,255,0.12)]
                  transition-all duration-200"
              >
                {/* Badge */}
                {badge && (
                  <span
                    className="absolute top-2 right-2 text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      color: badge.color,
                      background: `${badge.color}18`,
                      border: `0.5px solid ${badge.color}44`,
                    }}
                  >
                    {badge.label}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  {Icon && (
                    <Icon
                      className={`w-8 md:w-10 h-8 md:h-10 transition-all duration-200 ${skill.iconClass ?? "text-zinc-400"}`}
                      aria-hidden
                    />
                  )}
                </div>

                {/* Name */}
                <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 text-center leading-snug transition-colors duration-200">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
