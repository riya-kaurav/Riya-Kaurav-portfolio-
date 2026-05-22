"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "work", href: "#work" },
  { label: "blog", href: "#blog" },
  { label: "skills", href: "#skills" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundColor: isScrolled ? "var(--bg-primary)" : "transparent",
          borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl"
      >
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-sm transition-opacity hover:opacity-60"
            style={{ color: "var(--text-primary)" }}
          >
            {personalInfo.name.split(" ")[0].toLowerCase()}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-body transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right: resume + theme toggle */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm font-body transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              resume ↗
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{
                color: "var(--text-muted)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {theme === "light" ? <Moon size={14} strokeWidth={1.5} /> : <Sun size={14} strokeWidth={1.5} />}
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden transition-colors p-1"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 left-0 right-0 z-40 backdrop-blur-xl border-b md:hidden"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-sm font-body transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                className="text-sm font-body transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
