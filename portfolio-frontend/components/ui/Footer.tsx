export default function Footer() {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-black/5 dark:border-white/5 px-6 md:px-12 lg:px-20 py-8 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-zinc-400 dark:text-zinc-600">
        © 2025 Sahil Sayyad. Made with{" "}
        {/* <span className="text-[#ff6e9c]">♥</span> in Pune, India. */}
      </p>
      <p className="text-xs text-zinc-400 dark:text-zinc-600">
        Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
      </p>
    </footer>
  );
}
