"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, Layers } from "lucide-react";
import TechOrb from "../ui/TechOrd";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative md:min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-[68px] py-14"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full -top-48 -right-24 bg-[#6e73ff]/10 dark:bg-[#6e73ff]/15 blur-[100px] animate-drift" />
        <div className="absolute w-[400px] h-[400px] rounded-full -bottom-32 left-[10%] bg-[#3ecfb8]/10 dark:bg-[#3ecfb8]/12 blur-[80px] animate-drift-2" />
        <div className="absolute w-[300px] h-[300px] rounded-full top-[40%] left-[45%] bg-[#ff6e9c]/8 dark:bg-[#ff6e9c]/10 blur-[70px] animate-drift-3" />
        <div
          className="absolute inset-0 opacity-30 dark:opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(110,115,255,0.07) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(110,115,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      {/* Content row */}
      <div className="relative z-10 w-full flex items-center justify-between gap-12">
        {/* Left: text */}
        <div className="max-w-2xl">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 border border-black/8 dark:border-white/8 text-sm text-zinc-500 dark:text-zinc-400 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#3ecfb8] shadow-[0_0_8px_#3ecfb8] animate-pulse" />
              Available for new opportunities
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[clamp(3.5rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] mb-4 text-zinc-900 dark:text-white"
          >
            Sahil
            <br />
            <span className="gradient-text">Sayyad</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-display text-xl md:text-2xl font-semibold text-zinc-500 dark:text-zinc-400 mb-5"
          >
            Frontend / Full Stack Developer
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-10"
          >
            Building scalable, high-performance web applications with modern
            JavaScript. 1.6 years crafting fintech, eCommerce &amp; SaaS
            platforms with Next.js, React, and TypeScript.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{
                y: -2,
                boxShadow: "0 0 40px rgba(110,115,255,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#6e73ff] text-white text-sm font-medium shadow-[0_0_24px_rgba(110,115,255,0.3)] transition-all duration-300"
            >
              <Layers size={16} />
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Sahil_Sayyad_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
            >
              <Download size={16} />
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
            >
              <MessageCircle size={16} />
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right: orb graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:flex items-center justify-center flex-shrink-0 pr-8 lg:pr-20"
        >
          <TechOrb />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600">
          Scroll
        </span>
        <div
          className="w-px h-12 animate-scroll-line"
          style={{
            background: "linear-gradient(to bottom, #6e73ff, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
