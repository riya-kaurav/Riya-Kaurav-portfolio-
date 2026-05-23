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
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Typewriter hook
function useTypewriter(words: string[], speed = 80) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(words[index].substring(0, subIndex));
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed]);

  return text;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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

export default function Hero() {
  const roles = [
    "currently engineering plot twists",
  ];

  const typedText = useTypewriter(roles);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid px-4 sm:px-6">
      {/* Background Glows */}
      <div className="glow-orb w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent-cyan/8 top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />

      <div className="glow-orb w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-accent-green/5 bottom-1/4 right-1/4" />

      <div className="glow-orb w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] bg-accent-purple/5 top-1/2 left-1/4" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-cyan/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      <div className="w-full max-w-6xl mx-auto pt-28 sm:pt-32 pb-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability Badge */}
          {personalInfo.availableForWork && (
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8 flex justify-center sm:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5 text-accent-green text-[11px] sm:text-xs font-mono text-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                </span>

                {personalInfo.availabilityText}
              </span>
            </motion.div>
          )}

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-accent-cyan text-xs sm:text-sm tracking-[0.25em] mb-4 text-center sm:text-left"
          >
            Hello, world! I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-text-primary leading-[1.05] tracking-tight mb-4 text-center sm:text-left break-words"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            variants={itemVariants}
            className="mb-6 text-center sm:text-left"
          >
            <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-accent-cyan">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-body text-center sm:text-left"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-accent-cyan text-bg-primary font-display font-bold text-sm rounded-xl overflow-hidden transition-all duration-200 hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>

              <Sparkles size={15} className="relative z-10" />

              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 border border-border-active text-text-primary font-display font-bold text-sm rounded-xl hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-200"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <span className="text-text-muted text-xs font-mono">
              Find me on
            </span>

            <div className="hidden sm:block w-8 h-px bg-border-active" />

            <div className="flex items-center gap-3">
              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
              )}

              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              )}

              {personalInfo.socials.twitter && (
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={17} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 sm:mt-24 flex flex-col items-center"
        >
          <h2 className="mb-6 text-lg sm:text-xl font-bold text-text-primary text-center">
            My GitHub Contributions
          </h2>

          <div className="w-full overflow-x-auto rounded-2xl border border-border-subtle bg-background/40 p-4 sm:p-6 backdrop-blur-md">
            <div className="min-w-[700px]">
              {/* @ts-ignore */}
              <GitHubCalendar
                username="riya-kaurav"
                blockSize={12}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToProjects}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors group"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-widest">
            scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}