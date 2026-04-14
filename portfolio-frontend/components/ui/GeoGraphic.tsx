import { motion } from "framer-motion";

const stats = [
  { value: "1.6+", label: "Years exp.", pos: "top-2 -left-6" },
  { value: "3+", label: "Products", pos: "top-1/2 -right-7 -translate-y-1/2" },
  {
    value: "8.6",
    label: "MCS GPA",
    pos: "-bottom-2 left-1/2 -translate-x-1/2",
  },
];

export default function GeoGraphic() {
  return (
    <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] mx-auto">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 280 280">
        <defs>
          <linearGradient id="gg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6e73ff" stopOpacity=".9" />
            <stop offset="100%" stopColor="#3ecfb8" stopOpacity=".9" />
          </linearGradient>
          <linearGradient id="gg2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#6e73ff" stopOpacity=".3" />
            <stop offset="100%" stopColor="#ff6e9c" stopOpacity=".3" />
          </linearGradient>
        </defs>

        {/* Outer hex */}
        <polygon
          points="140,18 238,73 238,183 140,238 42,183 42,73"
          fill="none"
          stroke="#6e73ff"
          strokeWidth=".6"
          strokeDasharray="12 6"
          opacity=".3"
          className="origin-[140px_140px] animate-spin-slow"
        />

        {/* Mid hex */}
        <polygon
          points="140,52 209,91 209,169 140,208 71,169 71,91"
          fill="none"
          stroke="#3ecfb8"
          strokeWidth=".5"
          strokeDasharray="8 5"
          opacity=".35"
          className="origin-[140px_140px] animate-spin-reverse"
        />

        {/* Inner hex */}
        <polygon
          points="140,84 184,108 184,156 140,180 96,156 96,108"
          fill="none"
          stroke="url(#gg1)"
          strokeWidth="1"
          opacity=".5"
          className="origin-[140px_140px] animate-spin-slow"
        />

        {/* Flowing dash */}
        <polyline
          points="140,84 184,108 184,156 140,180 96,156 96,108 140,84"
          fill="none"
          stroke="#6e73ff"
          strokeWidth="1.5"
          strokeDasharray="20 300"
          opacity=".7"
          style={{ animation: "dash-flow 3s linear infinite" }}
        />

        {/* Spokes */}
        {[
          [140, 140, 140, 84],
          [140, 140, 184, 108],
          [140, 140, 184, 156],
          [140, 140, 140, 180],
          [140, 140, 96, 156],
          [140, 140, 96, 108],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 2 === 0 ? "#6e73ff" : "#3ecfb8"}
            strokeWidth=".3"
            opacity=".25"
          />
        ))}

        {/* Inner triangle */}
        <polygon
          points="140,95 179,150 101,150"
          fill="none"
          stroke="url(#gg2)"
          strokeWidth=".8"
          opacity=".5"
          className="origin-[140px_132px] animate-spin-reverse"
        />

        {/* Center */}
        <circle
          cx="140"
          cy="140"
          r="18"
          fill="none"
          stroke="url(#gg1)"
          strokeWidth="1.2"
          opacity=".7"
        />
        <circle cx="140" cy="140" r="10" fill="#6e73ff" opacity=".15" />
        <circle
          cx="140"
          cy="140"
          r="5"
          fill="#6e73ff"
          opacity=".9"
          className="animate-pulse"
        />

        {/* Inner hex corners */}
        {[
          [140, 84, "#6e73ff"],
          [184, 108, "#3ecfb8"],
          [184, 156, "#6e73ff"],
          [140, 180, "#3ecfb8"],
          [96, 156, "#ff6e9c"],
          [96, 108, "#6e73ff"],
        ].map(([cx, cy, fill], i) => (
          <circle
            key={i}
            cx={cx as number}
            cy={cy as number}
            r="3.5"
            fill={fill as string}
            opacity=".8"
          />
        ))}

        {/* Outer hex corners */}
        {[
          [140, 18, "#6e73ff"],
          [238, 73, "#3ecfb8"],
          [238, 183, "#3ecfb8"],
          [140, 238, "#6e73ff"],
          [42, 183, "#ff6e9c"],
          [42, 73, "#6e73ff"],
        ].map(([cx, cy, fill], i) => (
          <circle
            key={i}
            cx={cx as number}
            cy={cy as number}
            r="2.5"
            fill={fill as string}
            opacity=".4"
          />
        ))}

        {/* Crosshair */}
        <line
          x1="140"
          y1="30"
          x2="140"
          y2="250"
          stroke="#6e73ff"
          strokeWidth=".3"
          opacity=".1"
        />
        <line
          x1="30"
          y1="140"
          x2="250"
          y2="140"
          stroke="#6e73ff"
          strokeWidth=".3"
          opacity=".1"
        />
      </svg>

      {/* Stat pills */}
      {stats.map((s) => (
        <motion.div
          key={s.label}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${s.pos} flex flex-col items-center gap-0.5 px-4 py-2.5 rounded-xl bg-zinc-950/90 border border-[#6e73ff]/30 backdrop-blur-sm`}
        >
          <span className="font-display text-2xl font-extrabold tracking-tight text-[#6e73ff]">
            {s.value}
          </span>
          <span className="text-[9px] uppercase tracking-widest text-zinc-500">
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
