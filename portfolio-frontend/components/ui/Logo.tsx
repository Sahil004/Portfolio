"use client";

import { motion } from "framer-motion";
import { AccentText } from "./SectionHeader";
import { useId } from "react";

export default function Logo() {
  const id = useId(); // prevents SVG ID collisions

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="flex items-center gap-2 cursor-pointer group"
    >
      {/* SVG Logo */}
      <motion.svg
        width="44"
        height="44"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id={`grad-${id}`}>
            <stop offset="0%" stopColor="#6e73ff" />
            <stop offset="50%" stopColor="#3ecfb8" />
            <stop offset="100%" stopColor="#ff6e9c" />
          </linearGradient>

          <filter
            id={`blur-${id}`}
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* Glass background */}
        <rect
          x="10"
          y="10"
          width="100"
          height="100"
          rx="24"
          className="fill-white/10 dark:fill-white/5 stroke-white/20 dark:stroke-white/10"
        />

        {/* Inner subtle highlight (depth boost) */}
        <rect
          x="10"
          y="10"
          width="100"
          height="100"
          rx="24"
          fill="url(#grad)"
          opacity="0.08"
        />

        {/* Animated glow */}
        <motion.circle
          cx="60"
          cy="60"
          r="40"
          fill={`url(#grad-${id})`}
          filter={`url(#blur-${id})`}
          opacity="0.9"
          animate={{
            cx: [60, 66, 54, 60],
            cy: [60, 54, 66, 60],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ opacity: 1 }}
        />

        {/* SS */}
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          fill="white"
          fontSize="40"
          fontWeight="700"
          dy=".3em"
        >
          SS
        </text>
      </motion.svg>

      {/* Text */}
      <span className="font-display font-semibold text-zinc-900 dark:text-white transition-colors">
        Sahil<span className="text-[#3ecfb8]">.</span>
        <AccentText>dev</AccentText>
      </span>
    </motion.div>
  );
}
