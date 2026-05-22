"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "about",      href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "work",       href: "#work" },
  { label: "blog",       href: "#blog" },
  { label: "skills",     href: "#skills" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: isScrolled ? "var(--bg-primary)" : "transparent",
          borderBottom: isScrolled
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
        }}
      >
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-sm tracking-tight transition-opacity hover:opacity-50"
            style={{ color: "var(--text-primary)" }}
          >
            {personalInfo.name.split(" ")[0].toLowerCase()}
            <span style={{ color: "var(--text-muted)" }}>.</span>
          </button>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-3 py-1.5 text-sm font-body rounded-md transition-colors duration-200"
                  style={{ color: active ? "var(--text-primary)" : "var(--text-muted)" }}
                >
                  {/* sliding underline */}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ background: "var(--text-primary)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-md border transition-all duration-200 hover:opacity-70"
              style={{
                color:       "var(--text-secondary)",
                borderColor: "var(--border-active)",
              }}
            >
              resume ↗
            </a>

            {/* Theme toggle */}
            <motion.button
              onClick={toggle}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.88 }}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
              style={{
                color:        "var(--text-muted)",
                border:       "1px solid var(--border-subtle)",
                background:   "var(--bg-elevated)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                  exit={{    opacity: 0, rotate:  30, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {theme === "light"
                    ? <Moon size={13} strokeWidth={1.6} />
                    : <Sun  size={13} strokeWidth={1.6} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden p-1 rounded-md transition-colors"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setMobileOpen((o) => !o)}
              whileTap={{ scale: 0.88 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate:   0 }}
                  exit={{    opacity: 0, rotate:  20 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 md:hidden"
              style={{ background: "rgba(0,0,0,0.25)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y:   0 }}
              exit={{    opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-14 left-4 right-4 z-40 rounded-xl border md:hidden overflow-hidden"
              style={{
                background:   "var(--bg-primary)",
                borderColor:  "var(--border-subtle)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = activeSection === link.href.slice(1);
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => scrollTo(link.href)}
                      className="w-full text-left text-sm font-body px-3 py-2.5 rounded-lg transition-colors"
                      style={{
                        color:      active ? "var(--text-primary)" : "var(--text-secondary)",
                        background: active ? "var(--bg-elevated)"  : "transparent",
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}

                <div
                  className="my-1 h-px"
                  style={{ background: "var(--border-subtle)" }}
                />

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono px-3 py-2.5 rounded-lg transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  resume ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}