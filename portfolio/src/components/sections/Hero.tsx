"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import dynamic from "next/dynamic";

// Dynamic import to prevent hydration mismatch
const GitHubCalendar = dynamic<{
  username: string;
  blockSize?: number;
  blockMargin?: number;
  fontSize?: number;
}>(
  async () => {
    const mod = (await import("react-github-calendar")) as any;
    return mod.default || mod.GitHubCalendar;
  },
  {
    ssr: false,
    loading: () => (
      <div className="text-sm text-text-muted">
        Loading GitHub activity...
      </div>
    ),
  }
);

// ==============================
// Typewriter Hook
// ==============================
function useTypewriter(words: string[], speed = 90) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => {
        setDeleting(true);
      }, 1800);

      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed]);

  return words[index].substring(0, subIndex);
}

// ==============================
// Animation Variants
// ==============================
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==============================
// Hero Component
// ==============================
export default function Hero() {
  const roles = useMemo(
    () => [
      "Full-Stack Developer",
      "Backend Engineer",
      "Open Source Contributor",
    ],
    []
  );

  const typedRole = useTypewriter(roles);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background Glow Effects */}
      <div className="glow-orb w-[500px] h-[500px] bg-accent-cyan/10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />

      <div className="glow-orb w-[320px] h-[320px] bg-accent-green/10 bottom-1/4 right-1/4" />

      <div className="glow-orb w-[220px] h-[220px] bg-accent-purple/10 top-1/2 left-1/4" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan/30"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 24}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability */}
          {personalInfo.availableForWork && (
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5 text-accent-green text-xs font-mono backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                </span>

                {personalInfo.availabilityText}
              </span>
            </motion.div>
          )}

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-accent-cyan text-sm tracking-[0.25em] mb-4"
          >
            Hello, world! I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-5xl md:text-7xl leading-[1.05] tracking-tight text-text-primary mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            className="flex items-center h-14 mb-6"
          >
            <span className="text-2xl md:text-4xl font-bold text-gradient-cyan">
              {typedRole}
            </span>

            <span className="ml-1 w-[2px] h-8 bg-accent-cyan animate-pulse" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl leading-relaxed text-text-secondary mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent-cyan px-7 py-3.5 text-sm font-bold text-bg-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-cyan active:scale-[0.98]"
            >
              <span className="relative z-10">
                View Projects
              </span>

              <Sparkles
                size={15}
                className="relative z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-border-active px-7 py-3.5 text-sm font-bold text-text-primary transition-all duration-300 hover:border-accent-cyan/50 hover:bg-accent-cyan/5 hover:text-accent-cyan"
            >
              Contact Me
            </button>
          </motion.div>

         

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-xs text-text-muted">
              Find me on
            </span>

            <div className="w-8 h-px bg-border-active" />

            <div className="flex items-center gap-3">
              {[
                {
                  href: personalInfo.socials.github,
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: personalInfo.socials.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: personalInfo.socials.twitter,
                  icon: Twitter,
                  label: "Twitter",
                },
              ]
                .filter((item) => item.href)
                .map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle text-text-muted transition-all duration-300 hover:border-accent-cyan/40 hover:bg-accent-cyan/5 hover:text-accent-cyan"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
            </div>
          </motion.div>
        </motion.div>

        {/* GitHub Calendar */}
<motion.div
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  className="mt-24 flex flex-col items-center w-full"
>
  <h2 className="mb-6 text-center text-xl font-bold text-text-primary">
    My GitHub Contributions
  </h2>

  <div className="w-full overflow-x-auto rounded-2xl border border-border-subtle bg-background/40 p-3 sm:p-4 md:p-6 backdrop-blur-md">
    <div className="min-w-[720px] flex justify-center">
      {/* @ts-ignore */}
      <GitHubCalendar
  username="riya-kaurav"
  blockSize={typeof window !== "undefined" && window.innerWidth < 640 ? 8 : 12}
  blockMargin={typeof window !== "undefined" && window.innerWidth < 640 ? 3 : 4}
  fontSize={typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 14}
/>
    </div>
  </div>
</motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollToSection("projects")}
          className="group absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent-cyan"
        >
          <span className="font-mono text-xs tracking-[0.3em]">
            SCROLL
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}