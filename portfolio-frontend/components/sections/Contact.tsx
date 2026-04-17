"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { SOCIALS } from "@/lib/data";
import {
  SectionLabel,
  SectionTitle,
  AccentText,
} from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/ui/Motion";
import { sendContact } from "@/lib/api/apiHelperFunction";

const INPUT_CLASS = `w-full px-4 py-3 rounded-xl text-sm
  bg-black/[0.03] dark:bg-white/[0.03]
  border border-black/8 dark:border-white/8
  text-zinc-900 dark:text-zinc-100
  placeholder:text-zinc-400 dark:placeholder:text-zinc-600
  focus:outline-none focus:border-[#6e73ff]/50 focus:ring-2 focus:ring-[#6e73ff]/15
  transition-all duration-200`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const charCount = form.message.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");

      await sendContact(form); // 🔥 REAL API CALL

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 bg-light-bg-2 dark:bg-dark-bg-2 overflow-hidden"
    >
      <SectionLabel>Contact</SectionLabel>
      <SectionTitle>
        Let&apos;s <AccentText>build together</AccentText>
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 mt-14 items-start">
        {/* ── LEFT ── */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col gap-8">
            {/* Heading + copy */}
            <div>
              <h3
                className="font-display text-2xl md:text-3xl font-bold tracking-tight
                text-zinc-900 dark:text-white leading-tight mb-3"
              >
                Got an idea?
                <br />
                <span className="gradient-text">Let&apos;s make it real.</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[0.9375rem]">
                Whether it&apos;s a job opportunity, a freelance project, or
                just a great conversation about tech — I&apos;d love to hear
                from you.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#6e73ff22] via-[#3ecfb822] to-transparent" />

            {/* Socials */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
                Or reach me directly
              </p>
              <div className="flex flex-col gap-2">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                      border border-black/8 dark:border-white/8
                      bg-white/60 dark:bg-white/[0.02]
                      hover:border-[#6e73ff]/30 dark:hover:border-[#6e73ff]/30
                      hover:bg-black/[0.02] dark:hover:bg-white/[0.04]
                      transition-all duration-200 group"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 ${social.bg}`}
                    >
                      <social.icon
                        className={`h-4 w-4 transition-colors duration-200 ${social.iconClass ?? "text-zinc-700 dark:text-zinc-300"}`}
                        aria-hidden
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-none mb-0.5">
                        {social.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 dark:text-zinc-500 truncate">
                        {social.handle}
                      </p>
                    </div>
                    <span className="text-zinc-300 dark:text-zinc-600 group-hover:text-[#6e73ff] transition-colors">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ── RIGHT: Form card ── */}
        <FadeUp delay={0.2}>
          <div className="relative">
            {/* ambient glow */}
            <div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-br
              from-[#6e73ff]/15 via-transparent to-[#3ecfb8]/15
              blur-2xl opacity-70 pointer-events-none"
            />

            <div
              className="relative rounded-2xl
              border border-black/8 dark:border-white/[0.08]
              bg-white/80 dark:bg-white/[0.03]
              backdrop-blur-sm p-6 md:p-8 flex flex-col gap-6"
            >
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#6e73ff]/10 flex items-center justify-center">
                    <Sparkles size={13} className="text-[#6e73ff]" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Send a message
                  </span>
                </div>
                {/* decorative dots */}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6e9c]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fac775]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3ecfb8]/40" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Sahil Sayyad"
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Message
                    </label>
                    <span
                      className={`text-[10px] tabular-nums transition-colors
                      ${charCount > 400 ? "text-[#ff6e9c]" : "text-zinc-400 dark:text-zinc-600"}`}
                    >
                      {charCount}/500
                    </span>
                  </div>
                  <textarea
                    value={form.message}
                    onChange={(e) => {
                      if (e.target.value.length <= 500)
                        setForm({ ...form, message: e.target.value });
                    }}
                    placeholder="Tell me about your project, role, or idea..."
                    rows={5}
                    className={`${INPUT_CLASS} resize-none`}
                  />
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-1 flex-wrap gap-3">
                  <motion.button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    whileHover={
                      status === "idle"
                        ? { y: -2, boxShadow: "0 0 32px rgba(110,115,255,0.4)" }
                        : {}
                    }
                    whileTap={status === "idle" ? { scale: 0.97 } : {}}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                      text-sm font-medium transition-all duration-300
                      disabled:opacity-70 disabled:cursor-not-allowed
                      ${
                        status === "success"
                          ? "bg-[#3ecfb8] text-white shadow-[0_0_20px_rgba(62,207,184,0.3)]"
                          : "bg-[#6e73ff] text-white shadow-[0_0_20px_rgba(110,115,255,0.25)]"
                      }`}
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>✓ Sent!</>
                    ) : (
                      <>
                        Send Message <Send size={13} />
                      </>
                    )}
                  </motion.button>

                  {/* Status messages */}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-[#ff6e9c]"
                    >
                      Please fill in all fields.
                    </motion.p>
                  )}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-[#3ecfb8]"
                    >
                      I&apos;ll get back to you soon 🚀
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
