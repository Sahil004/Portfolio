"use client";

import { motion } from "framer-motion";
import { SectionLabel, SectionTitle, AccentText } from "@/components/ui/SectionHeader";
import { FadeUp, FadeIn } from "@/components/ui/Motion";

const stats = [
  { value: "1.6+", label: "Years experience" },
  { value: "3+", label: "Products shipped" },
  { value: "8.6", label: "MCS CGPA" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2"
    >
      <SectionLabel>About Me</SectionLabel>
      <SectionTitle>
        The developer <AccentText>behind the code</AccentText>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
        {/* Avatar */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6e73ff] to-[#3ecfb8] opacity-20 blur-2xl scale-110" />
              {/* Avatar card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #6e73ff, #3ecfb8)",
                }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 animate-spin"
                  style={{
                    background: "conic-gradient(transparent, rgba(255,255,255,0.08), transparent 30%)",
                    animationDuration: "6s",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl font-extrabold text-white/90 select-none">
                    SS
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeUp delay={0.2}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5">
              Hi, I&apos;m Sahil 👋
            </h3>
            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-[0.9375rem]">
              <p>
                I&apos;m a Full Stack Developer based in Pune, India, with a deep
                passion for crafting web applications that are fast, scalable,
                and delightful to use. My journey started with a Master&apos;s in
                Computer Science, building a strong foundation in algorithms,
                databases, and software engineering.
              </p>
              <p>
                At Consociate Solutions, I build real-world fintech and SaaS
                platforms — from payment gateways and analytics dashboards to
                complex business logic for high-volume transactions. I&apos;m driven
                by the challenge of solving complex problems with elegant, efficient code.
              </p>
              <p>
                I believe in clean, maintainable code and leveraging AI tools to
                stay ahead of the curve. Every project is an opportunity to push
                the limits of what&apos;s possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-black/5 dark:border-white/5">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-[#6e73ff]">
                    {s.value}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
