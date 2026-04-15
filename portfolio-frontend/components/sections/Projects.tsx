"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Building2, Lock } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/ui/Motion";

const CATEGORY_DESC: Record<string, string> = {
  company:
    "Collaborated in a team to deliver production-grade solutions for clients and employers.",
  college: "Academic projects built during my MCS programme.",
  self: "Side projects I built independently to explore new ideas.",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("company");
  const filtered = PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-10 md:py-14 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2"
    >
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>
        Things I&apos;ve <AccentText>built</AccentText>
      </SectionTitle>

      {/* Tabs */}
      <div className="flex flex-wrap items-end gap-0 mt-10 border-b border-black/8 dark:border-white/8">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative px-5 py-3 text-sm font-medium transition-colors duration-200
              ${
                activeCategory === cat.id
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
              }`}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <motion.span
                layoutId="proj-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#6e73ff]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
        {CATEGORY_DESC[activeCategory]}
      </p>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {filtered.length === 0 ? (
            <div className="col-span-full py-16 text-center text-sm text-zinc-400 dark:text-zinc-500 border border-dashed border-black/10 dark:border-white/10 rounded-2xl">
              No projects in this category yet — check back soon.
            </div>
          ) : (
            filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-2xl overflow-hidden
                  border border-black/8 dark:border-white/[0.07]
                  bg-white dark:bg-white/[0.03]
                  hover:border-[#6e73ff]/35 dark:hover:border-[#6e73ff]/35
                  hover:shadow-[0_16px_48px_rgba(110,115,255,0.12)]
                  transition-all duration-300"
              >
                {/* Thumbnail */}
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br `}
                >
                  {/* Light mode gradient */}
                  <div
                    className={`absolute inset-0 dark:hidden bg-gradient-to-br `}
                  />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="relative z-10 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradient at bottom */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Company badge — bottom left of image */}
                  {project.company && (
                    <div
                      className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5
                      px-2.5 py-1 rounded-lg
                      bg-black/50 backdrop-blur-sm
                      border border-white/10 text-white text-[10px] font-medium"
                    >
                      <Building2 size={10} className="opacity-70" />
                      {project.company}
                    </div>
                  )}

                  {/* Private indicator */}
                  {project.github === "#" && (
                    <div
                      className="absolute top-3 right-3 z-30 flex items-center gap-1
                      px-2 py-1 rounded-lg
                      bg-black/40 backdrop-blur-sm
                      border border-white/10 text-white/60 text-[10px]"
                    >
                      <Lock size={9} />
                      Private
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full
                          bg-black/[0.04] dark:bg-white/[0.05]
                          border border-black/8 dark:border-white/8
                          text-zinc-500 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/5 dark:bg-white/5" />

                  {/* Links */}
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5
                        text-xs font-medium py-2 rounded-lg
                        bg-[#6e73ff] text-white
                        hover:bg-[#5a5fdd]
                        shadow-[0_0_16px_rgba(110,115,255,0.3)]
                        hover:shadow-[0_0_24px_rgba(110,115,255,0.45)]
                        transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5
                        text-xs font-medium py-2 rounded-lg
                        border border-black/8 dark:border-white/8
                        text-zinc-500 dark:text-zinc-400
                        hover:bg-black/5 dark:hover:bg-white/5
                        transition-all duration-200"
                    >
                      <Github size={11} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
