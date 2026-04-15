"use client";

import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { FadeUp, FadeIn } from "@/components/ui/Motion";
import GeoGraphic from "../ui/GeoGraphic";
import {
  FiCode,
  FiCpu,
  FiLayout,
  FiMonitor,
  FiServer,
  FiZap,
} from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="pt-12 md:pt-28 pb-10 md:pb-14 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2"
    >
      <SectionLabel>About Me</SectionLabel>
      <SectionTitle>
        The developer <AccentText>behind the code</AccentText>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-12">
        {/* Left — graphic */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center md:justify-start py-10 md:py-0">
            <GeoGraphic />
          </div>
        </FadeIn>

        {/* Right — text */}
        {/* Right — text */}
        <FadeUp delay={0.2}>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5">
              Hi, I&apos;m Sahil 👋
            </h3>

            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-[0.9375rem]">
              <p>
                I&apos;m a Full Stack Developer based in Pune, India, with a
                deep passion for crafting web applications that are fast,
                scalable, and delightful to use. My journey started with a
                Master&apos;s in Computer Science, building a strong foundation
                in algorithms, databases, and software engineering.
              </p>
              <p>
                At Consociate Solutions, I build real-world fintech and SaaS
                platforms — from payment gateways and analytics dashboards to
                complex business logic for high-volume transactions.
              </p>
              <p>
                I believe in clean, maintainable code and leveraging AI tools to
                stay ahead of the curve. Every project is an opportunity to push
                the limits of what&apos;s possible on the web.
              </p>
            </div>

            {/* Interests */}
            {/* Interests */}
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <FiMonitor size={14} />, label: "Frontend Dev" },
                  { icon: <FiServer size={14} />, label: "Backend Dev" },
                  { icon: <FiCode size={14} />, label: "Web Dev" },
                  { icon: <FiCpu size={14} />, label: "Problem Solving" },
                  { icon: <FiLayout size={14} />, label: "UI / UX" },
                  { icon: <FiZap size={14} />, label: "Performance" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl
          bg-black/[0.03] dark:bg-white/[0.03]
          border border-black/6 dark:border-white/6
          text-zinc-600 dark:text-zinc-400 text-sm"
                  >
                    <span className="text-[#6e73ff]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ecfb8] shadow-[0_0_6px_#3ecfb8]" />
              Pune, India · Open to opportunities
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
