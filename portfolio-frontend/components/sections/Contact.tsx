"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SOCIALS } from "@/lib/data";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/ui/Motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="py-14 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2"
    >
      <SectionLabel>Contact</SectionLabel>
      <SectionTitle>
        Let&apos;s <AccentText>build together</AccentText>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-start">
        {/* Left */}
        <FadeUp delay={0.1}>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight mb-4">
            Let&apos;s build something amazing together 🚀
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 text-[0.9375rem]">
            I&apos;m always open to exciting new projects, full-time
            opportunities, or just a great conversation about tech. Drop a
            message and I&apos;ll get back to you soon.
          </p>

          <div className="flex flex-col gap-3">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl
                  border border-black/8 dark:border-white/8
                  bg-black/2 dark:bg-white/2
                  hover:border-black/15 dark:hover:border-white/15
                  hover:bg-black/5 dark:hover:bg-white/5
                  transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg flex-shrink-0 ${social.bg}`}
                >
                  <social.icon
                    className={`h-5 w-5 transition-colors duration-200 ${social.iconClass ?? "text-zinc-700 dark:text-zinc-300"}`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {social.name}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    {social.handle}
                  </p>
                </div>
                <span className="ml-auto text-zinc-300 dark:text-zinc-600 group-hover:text-[#6e73ff] transition-colors text-lg">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm
                  bg-light-bg-3 dark:bg-dark-bg-3
                  border border-black/8 dark:border-white/8
                  text-zinc-900 dark:text-zinc-100
                  placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                  focus:outline-none focus:border-[#6e73ff]/50 focus:ring-2 focus:ring-[#6e73ff]/15
                  transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm
                  bg-light-bg-3 dark:bg-dark-bg-3
                  border border-black/8 dark:border-white/8
                  text-zinc-900 dark:text-zinc-100
                  placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                  focus:outline-none focus:border-[#6e73ff]/50 focus:ring-2 focus:ring-[#6e73ff]/15
                  transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl text-sm resize-none
                  bg-light-bg-3 dark:bg-dark-bg-3
                  border border-black/8 dark:border-white/8
                  text-zinc-900 dark:text-zinc-100
                  placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                  focus:outline-none focus:border-[#6e73ff]/50 focus:ring-2 focus:ring-[#6e73ff]/15
                  transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{
                y: -2,
                boxShadow: "0 0 32px rgba(110,115,255,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-[#6e73ff] text-white text-sm font-medium
                shadow-[0_0_20px_rgba(110,115,255,0.25)]
                transition-all duration-300"
            >
              Send Message
              <Send size={14} />
            </motion.button>

            {/* Status messages */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#3ecfb8]"
              >
                Thanks! I&apos;ll get back to you soon 🚀
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#ff6e9c]"
              >
                Please fill in all fields.
              </motion.p>
            )}
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
