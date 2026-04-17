"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Building2,
  Lock,
  GraduationCap,
  User,
} from "lucide-react";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { Project } from "@/lib/types/projectsType";

/* ── constants ── */
const PROJECT_CATEGORIES = [
  { id: "company", label: "Company" },
  { id: "college", label: "College" },
  { id: "self", label: "Self" },
];

const CATEGORY_DESC: Record<string, string> = {
  company:
    "Collaborated in a team to deliver production-grade solutions for clients and employers.",
  college: "Academic projects built during my MCS programme.",
  self: "Side projects I built independently to explore new ideas.",
};

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  company: <Building2 size={10} className="opacity-70" />,
  college: <GraduationCap size={10} className="opacity-70" />,
  self: <User size={10} className="opacity-70" />,
};

/* ── tech pill ── */
function TechPill({ name }: { name: string }) {
  return (
    <span
      className="text-[10px] px-2 py-0.5 rounded-full font-medium
        bg-black/[0.04] dark:bg-white/[0.06]
        border border-black/8 dark:border-white/8
        text-zinc-500 dark:text-zinc-400"
    >
      {name}
    </span>
  );
}

/* ── tag pill ── */
function TagPill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold"
      style={{
        color,
        background: `${color}14`,
        border: `0.5px solid ${color}40`,
      }}
    >
      {label}
    </span>
  );
}

/* ── project card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasGithub = !!project.github_url;
  const hasLive = !!project.live_url;
  const isPrivate = !hasGithub;

  const orgName = project.associated_with?.organization ?? null;
  const orgImage = project.associated_with?.image ?? null;
  const descriptionLines = project.description
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const [showAll, setShowAll] = useState(false);
  const visibleLines = showAll
    ? descriptionLines
    : descriptionLines.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl overflow-hidden
        border border-black/8 dark:border-white/[0.07]
        bg-white dark:bg-white/[0.03]
        hover:border-[#6e73ff]/35 dark:hover:border-[#6e73ff]/35
        hover:shadow-[0_16px_48px_rgba(110,115,255,0.12)]
        transition-all duration-300"
    >
      {/* ── thumbnail ── */}
      <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:640px) 100vw, 33vw"
          className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-500 p-4 md:p-8"
        />

        {/* bottom gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" /> */}

        {/* org badge — bottom left */}
        {orgName && (
          <div
            className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5
            px-2.5 py-1 rounded-lg
            bg-black/50 backdrop-blur-sm
            border border-white/10 text-white text-[10px] font-medium max-w-[60%]"
          >
            {orgImage ? (
              <div className="relative w-3.5 h-3.5 rounded-sm overflow-hidden shrink-0">
                <Image
                  src={orgImage}
                  alt={orgName}
                  fill
                  sizes="14px"
                  className="object-contain"
                />
              </div>
            ) : (
              CATEGORY_ICON[project.category]
            )}
            <span className="truncate">{orgName}</span>
          </div>
        )}

        {/* private badge — top right */}
        {isPrivate && (
          <div
            className="absolute top-3 right-3 z-20 flex items-center gap-1
            px-2 py-1 rounded-lg
            bg-black/40 backdrop-blur-sm
            border border-white/10 text-white/60 text-[10px]"
          >
            <Lock size={9} />
            Private
          </div>
        )}
      </div>

      {/* ── body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* title */}
        <h3 className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
          {project.title}
        </h3>

        {/* tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TagPill key={tag.id} label={tag.label} color={tag.color} />
            ))}
          </div>
        )}

        {/* description */}
        <ul className="flex flex-col gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
          {visibleLines.map((line, i) => (
            <li key={i} className="relative pl-4">
              <span
                className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full"
                style={{ background: "#6e73ff" }}
              />
              {line}
            </li>
          ))}
        </ul>

        {descriptionLines.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="self-start text-xs font-semibold text-[#6e73ff] hover:text-[#5a5fdd] transition-colors duration-200"
          >
            {showAll ? "Show less" : "Read more"}
          </button>
        )}

        {/* tech stack */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <TechPill key={tech.id} name={tech.name} />
            ))}
          </div>
        )}

        {/* divider */}
        <div className="h-px bg-black/5 dark:bg-white/5" />

        {/* links */}
        <div className="flex gap-2">
          {hasLive && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5
                text-xs font-medium py-2 rounded-lg
                bg-[#6e73ff] text-white
                hover:bg-[#5a5fdd]
                shadow-[0_0_16px_rgba(110,115,255,0.3)]
                hover:shadow-[0_0_24px_rgba(110,115,255,0.45)]
                transition-all duration-200
                ${hasGithub ? "flex-1" : "w-full"}`}
            >
              <ExternalLink size={11} />
              Live Demo
            </motion.a>
          )}

          {hasGithub && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5
                text-xs font-medium py-2 rounded-lg
                border border-black/8 dark:border-white/8
                text-zinc-500 dark:text-zinc-400
                hover:bg-black/5 dark:hover:bg-white/5
                transition-all duration-200
                ${hasLive ? "flex-1" : "w-full"}`}
            >
              <Github size={11} />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── section ── */
export default function Projects({ projects }: { projects: Project[] }) {
  const categories = PROJECT_CATEGORIES.filter((cat) =>
    projects.some((p) => p.category === cat.id),
  );

  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "company",
  );

  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-10 md:py-14 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2"
    >
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>
        Things I&apos;ve <AccentText>built</AccentText>
      </SectionTitle>

      {/* tabs — only show categories that have projects */}
      <div className="flex flex-wrap items-end gap-0 mt-10 border-b border-black/8 dark:border-white/8">
        {categories.map((cat) => (
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

      {/* grid */}
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
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
