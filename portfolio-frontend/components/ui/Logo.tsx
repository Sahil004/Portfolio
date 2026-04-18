"use client";

import { motion } from "framer-motion";
import { AccentText } from "./SectionHeader";
import { useId } from "react";

export default function Logo() {
  const id = useId();

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <motion.svg
        width="44"
        height="44"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6e73ff" />
            <stop offset="50%" stopColor="#3ecfb8" />
            <stop offset="100%" stopColor="#ff6e9c" />
          </linearGradient>
          <linearGradient
            id={`grad-fill-${id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6e73ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3ecfb8" stopOpacity="0.06" />
          </linearGradient>
          <filter
            id={`blur-${id}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* glass card */}
        <rect
          x="10"
          y="10"
          width="100"
          height="100"
          rx="26"
          className="fill-white/10 dark:fill-white/[0.06]"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />

        {/* subtle gradient fill — now correctly referencing dynamic id */}
        <rect
          x="10"
          y="10"
          width="100"
          height="100"
          rx="26"
          fill={`url(#grad-fill-${id})`}
        />

        {/* animated glow blob */}
        <motion.circle
          cx="60"
          cy="60"
          r="38"
          fill={`url(#grad-${id})`}
          filter={`url(#blur-${id})`}
          opacity="0.85"
          animate={{ cx: [60, 65, 55, 60], cy: [60, 55, 65, 60] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* initials */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="38"
          fontWeight="700"
          letterSpacing="-1"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          SS
        </text>
      </motion.svg>

      {/* wordmark */}
      <span className="font-display font-semibold text-zinc-900 dark:text-white transition-colors">
        Sahil<span className="text-[#3ecfb8]">.</span>
        <AccentText>dev</AccentText>
      </span>
    </motion.div>
  );
}
