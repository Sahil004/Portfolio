"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between",
          "px-6 md:px-12 lg:px-20",
          "transition-all duration-300",
          scrolled
            ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
            : "bg-transparent",
        )}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="font-display text-xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
        >
          <Logo />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#6e73ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          )}

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-light-bg dark:bg-dark-bg border-b border-black/8 dark:border-white/8 px-6 py-5 md:hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <ul className="flex flex-col gap-4 list-none">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-base text-zinc-700 dark:text-zinc-300 hover:text-[#6e73ff] dark:hover:text-[#6e73ff] transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
