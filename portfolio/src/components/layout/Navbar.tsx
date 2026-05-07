"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // { label: "Experience", href: "#experience" },
  // { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
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
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          {/* <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
              <Terminal className="w-4 h-4 text-accent-cyan" />
            </div>
            <span className="font-display font-700 text-text-primary tracking-tight">
    
              <span className="text-accent-cyan">&lt;</span>
              {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              <span className="text-accent-cyan">/&gt;</span>
            </span>
          </button> */}

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-lg",
                    isActive
                      ? "text-accent-cyan"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-accent-cyan/8 border border-accent-cyan/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium border border-accent-cyan/40 text-accent-cyan rounded-lg hover:bg-accent-cyan/10 transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg-secondary/95 backdrop-blur-xl border-b border-border-subtle md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                className="mt-2 px-4 py-3 text-sm font-medium text-accent-cyan border border-accent-cyan/30 rounded-lg text-center"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
