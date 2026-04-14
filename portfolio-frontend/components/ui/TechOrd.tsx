export default function TechOrb() {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* SVG rings */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 320 320"
      >
        <defs>
          <linearGradient id="rg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6e73ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3ecfb8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="rg2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6e9c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6e73ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Main animated ring */}
        <circle
          cx="160"
          cy="160"
          r="80"
          fill="none"
          stroke="url(#rg1)"
          strokeWidth="1"
          strokeDasharray="502"
          strokeDashoffset="0"
          opacity="0.7"
          className="animate-spin-slow origin-[160px_160px]"
        />
        {/* Dashed outer ring */}
        <circle
          cx="160"
          cy="160"
          r="120"
          fill="none"
          stroke="url(#rg2)"
          strokeWidth="0.5"
          strokeDasharray="10 8"
          opacity="0.5"
          className="animate-spin-slow origin-[160px_160px]"
        />
        {/* Outermost ring */}
        <circle
          cx="160"
          cy="160"
          r="140"
          fill="none"
          stroke="#6e73ff"
          strokeWidth="0.5"
          opacity="0.35"
        />
        {/* Inner dashed ring */}
        <circle
          cx="160"
          cy="160"
          r="56"
          fill="none"
          stroke="#3ecfb8"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="6 6"
          className="animate-spin-reverse origin-[160px_160px]"
        />

        {/* Star polygons */}
        <polygon
          points="160,32 179,84 232,84 189,116 204,168 160,136 116,168 131,116 88,84 141,84"
          fill="none"
          stroke="#6e73ff"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <polygon
          points="160,288 141,236 88,236 131,204 116,152 160,184 204,152 189,204 232,236 179,236"
          fill="none"
          stroke="#3ecfb8"
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* Crosshairs */}
        <line
          x1="20"
          y1="160"
          x2="300"
          y2="160"
          stroke="#6e73ff"
          strokeWidth="0.3"
          opacity="0.15"
        />
        <line
          x1="160"
          y1="20"
          x2="160"
          y2="300"
          stroke="#6e73ff"
          strokeWidth="0.3"
          opacity="0.15"
        />
        <line
          x1="60"
          y1="60"
          x2="260"
          y2="260"
          stroke="#3ecfb8"
          strokeWidth="0.3"
          opacity="0.12"
        />
        <line
          x1="260"
          y1="60"
          x2="60"
          y2="260"
          stroke="#3ecfb8"
          strokeWidth="0.3"
          opacity="0.12"
        />

        {/* Cardinal dots */}
        <circle cx="160" cy="80" r="2.5" fill="#6e73ff" opacity="0.7" />
        <circle cx="240" cy="160" r="2.5" fill="#3ecfb8" opacity="0.7" />
        <circle cx="160" cy="240" r="2.5" fill="#ff6e9c" opacity="0.7" />
        <circle cx="80" cy="160" r="2.5" fill="#6e73ff" opacity="0.7" />
        <circle cx="216" cy="104" r="2" fill="#3ecfb8" opacity="0.5" />
        <circle cx="216" cy="216" r="2" fill="#6e73ff" opacity="0.5" />
        <circle cx="104" cy="216" r="2" fill="#3ecfb8" opacity="0.5" />
        <circle cx="104" cy="104" r="2" fill="#ff6e9c" opacity="0.5" />
      </svg>

      {/* Orbiting dots */}
      <span className="absolute top-1/2 left-1/2 -mt-[5px] -ml-[5px] w-[10px] h-[10px] rounded-full bg-[#6e73ff] shadow-[0_0_8px_#6e73ff88] animate-orbit-1" />
      <span className="absolute top-1/2 left-1/2 -mt-[5px] -ml-[5px] w-[10px] h-[10px] rounded-full bg-[#3ecfb8] shadow-[0_0_8px_#3ecfb888] animate-orbit-2" />
      <span className="absolute top-1/2 left-1/2 -mt-[5px] -ml-[5px] w-[10px] h-[10px] rounded-full bg-[#ff6e9c] shadow-[0_0_8px_#ff6e9c88] animate-orbit-3" />
      <span className="absolute top-1/2 left-1/2 -mt-[3.5px] -ml-[3.5px] w-[7px] h-[7px] rounded-full bg-[#6e73ff66] animate-orbit-4" />
      <span className="absolute top-1/2 left-1/2 -mt-[3.5px] -ml-[3.5px] w-[7px] h-[7px] rounded-full bg-[#3ecfb866] animate-orbit-5" />

      {/* Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#6e73ff] to-[#3ecfb8] flex items-center justify-center">
        <div className="w-[48px] h-[48px] rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center">
          <span className="font-mono font-extrabold text-lg bg-gradient-to-br from-[#6e73ff] to-[#3ecfb8] bg-clip-text text-transparent">
            {"</>"}
          </span>
        </div>
      </div>

      {/* Floating tags */}
      <div className="absolute top-7 -right-5 animate-float-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-[#6e73ff]/40 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3ecfb8]" />
        <span className="font-mono text-[11px] text-[#3ecfb8]">Next.js</span>
      </div>
      <div className="absolute bottom-16 -right-8 animate-float-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-[#6e73ff]/40 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6e73ff]" />
        <span className="font-mono text-[11px] text-[#6e73ff]">TypeScript</span>
      </div>
      <div className="absolute bottom-7 -left-5 animate-float-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-[#ff6e9c]/40 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6e9c]" />
        <span className="font-mono text-[11px] text-[#ff6e9c]">React</span>
      </div>
      <div className="absolute top-[70px] -left-8 animate-float-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-[#6e73ff]/20 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6e73ff88]" />
        <span className="font-mono text-[11px] text-zinc-400">Node.js</span>
      </div>
    </div>
  );
}
