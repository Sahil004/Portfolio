"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionLabel, SectionTitle, AccentText } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/ui/Motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2"
    >
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>
        Things I&apos;ve <AccentText>built</AccentText>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {PROJECTS.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col rounded-2xl overflow-hidden
                border border-black/8 dark:border-white/8
                bg-light-bg-3 dark:bg-dark-bg-3
                hover:border-black/15 dark:hover:border-white/15
                transition-colors duration-300
                shadow-sm hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div
                className={`h-44 flex items-center justify-center text-6xl relative overflow-hidden
                  bg-gradient-to-br ${project.gradient} dark:bg-none`}
                style={{}}
              >
                <div
                  className={`absolute inset-0 dark:hidden bg-gradient-to-br ${project.gradientLight}`}
                />
                <span className="relative z-10 drop-shadow-lg">{project.emoji}</span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#6e73ff]/0 group-hover:bg-[#6e73ff]/5 transition-colors duration-300" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full
                        bg-black/5 dark:bg-white/5
                        border border-black/8 dark:border-white/8
                        text-zinc-500 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                      bg-[#6e73ff]/10 border border-[#6e73ff]/25
                      text-[#6e73ff] hover:bg-[#6e73ff]/20
                      transition-colors duration-200"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                      border border-black/8 dark:border-white/8
                      text-zinc-500 dark:text-zinc-400
                      hover:bg-black/5 dark:hover:bg-white/5
                      transition-colors duration-200"
                  >
                    <Github size={12} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
