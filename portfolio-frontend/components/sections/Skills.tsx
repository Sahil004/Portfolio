"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SectionLabel, SectionTitle, AccentText } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/ui/Motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-12 lg:px-20 bg-light-bg dark:bg-dark-bg"
    >
      <SectionLabel>Tech Stack</SectionLabel>
      <SectionTitle>
        What I <AccentText>build with</AccentText>
      </SectionTitle>

      <div className="flex flex-col gap-12 mt-12">
        {Object.entries(SKILLS).map(([category, items], catIdx) => (
          <FadeUp key={category} delay={catIdx * 0.1}>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 dark:text-zinc-500 mb-5">
                {category}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{
                      y: -4,
                      borderColor: "rgba(110,115,255,0.6)",
                      boxShadow:
                        "0 8px 24px rgba(0,0,0,0.15), 0 0 0 1px rgba(110,115,255,0.4)",
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                      bg-white/40 dark:bg-white/[0.03]
                      border border-black/8 dark:border-white/8
                      text-sm font-medium text-zinc-700 dark:text-zinc-300
                      cursor-default transition-colors duration-200"
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
