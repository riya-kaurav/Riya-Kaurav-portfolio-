"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr: false,
    loading: () => (
      <div className="text-sm text-text-muted">
        Loading GitHub activity...
      </div>
    ),
  }
);

// ─── Replace these with your real values ───────────────────────────────────
const COVER_IMAGE_URL = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80";
const AVATAR_IMAGE_URL = "/image1.jpeg";
const RESUME_URL = personalInfo.socials?.resume ?? "#";
const MEDIUM_URL = personalInfo.socials?.medium ?? "#";
// ───────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col bg-bg-primary overflow-hidden">

      {/* ── COVER BANNER ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden"
      >
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a14] via-[#1a2820] to-[#0d151a]" />

        <img
          src={COVER_IMAGE_URL}
          alt="Cover"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-bg-primary/40" />

        {/* Quote — centred */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="font-serif italic text-white/90 text-base sm:text-xl md:text-2xl tracking-wide leading-relaxed text-center max-w-3xl"
          >
            {personalInfo.coverQuote ??
              "You make your own luck if you stay at it long enough."}
          </motion.p>
        </div>
      </motion.div>

      {/* ── PROFILE ROW ──────────────────────────────────────────────── */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8">
        {/* Avatar overlapping cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-14 sm:-top-16 left-4 sm:left-8"
        >
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full ring-4 ring-bg-primary overflow-hidden bg-border-subtle">
            <img
              src={AVATAR_IMAGE_URL}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </motion.div>

        {/* GitHub badge — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-end pt-3 sm:pt-4"
        />
      </div>

      {/* ── MAIN INFO ────────────────────────────────────────────────── */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-16 sm:pt-14 pb-24 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Availability badge */}
          {personalInfo.availableForWork && (
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/5 text-accent-green text-[11px] font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                </span>
                {personalInfo.availabilityText}
              </span>
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary leading-tight tracking-tight mb-1"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Sub-tagline: age • tag • tag */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6"
          >
            {personalInfo.age && (
              <>
                <span className="text-text-secondary text-sm sm:text-base font-body">
                  {personalInfo.age}
                </span>
                <span className="text-border-active">•</span>
              </>
            )}
            {personalInfo.shortTags?.map((tag: string, i: number, arr: string[]) => (
              <span key={tag} className="inline-flex items-center gap-x-2">
                <span className="text-text-secondary text-sm sm:text-base font-body">{tag}</span>
                {i < arr.length - 1 && <span className="text-border-active">•</span>}
              </span>
            ))}
            {!personalInfo.shortTags && (
              <span className="text-text-secondary text-sm sm:text-base font-body">
                engineer • developer • builder
              </span>
            )}
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-body"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-bg-primary font-display font-bold text-sm rounded-xl overflow-hidden transition-all duration-200 hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>
              <Sparkles size={14} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border-active text-text-primary font-display font-bold text-sm rounded-xl hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-200"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="text-text-muted text-xs font-mono mr-1">Find me on —</span>

            {personalInfo.socials?.github && (
              <SocialIcon href={personalInfo.socials.github} label="GitHub" icon={<Github size={16} />} />
            )}

            {personalInfo.socials?.twitter && (
              <SocialIcon
                href={personalInfo.socials.twitter}
                label="Twitter / X"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.636 5.9-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
              />
            )}

            {MEDIUM_URL && MEDIUM_URL !== "#" && (
              <SocialIcon
                href={MEDIUM_URL}
                label="Medium"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                }
              />
            )}

            {personalInfo.socials?.linkedin && (
              <SocialIcon href={personalInfo.socials.linkedin} label="LinkedIn" icon={<Linkedin size={16} />} />
            )}

            {RESUME_URL && RESUME_URL !== "#" && (
              <SocialIcon href={RESUME_URL} label="Resume" icon={<FileText size={16} />} />
            )}
          </motion.div>

          {/* GitHub Contributions — now right after social icons */}
          <motion.div
            variants={itemVariants}
            className="mt-16 sm:mt-20 flex flex-col items-center"
          >
            <h2 className="mb-6 text-lg sm:text-xl font-bold text-text-primary text-center">
              My GitHub Contributions
            </h2>

            <div className="w-full overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card p-4 sm:p-6 backdrop-blur-md">
              <div className="min-w-[700px]">
                <GitHubCalendar
                  username="riya-kaurav"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={scrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-accent-cyan transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>

    </section>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-xl border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-200"
    >
      {icon}
    </a>
  );
}