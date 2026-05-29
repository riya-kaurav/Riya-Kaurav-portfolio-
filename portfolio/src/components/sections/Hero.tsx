"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
  Sparkles,
  FileText,
  BookOpen,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useEffect, useState } from "react";

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

// ─── replace these with your real values ───────────────────────────────────
const AVATAR_IMAGE_URL = "/image.jpeg"; // your banner/landscape photo
const COVER_IMAGE_URL = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80"; // your profile picture
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
      {/* ── COVER BANNER ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden"
      >
        {/* Fallback gradient shown when no cover image is set */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a14] via-[#1a2820] to-[#0d151a]" />

        <img
          src={COVER_IMAGE_URL}
          alt="Cover"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Subtle overlay + vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-bg-primary/40" />

        {/* Cover quote — like Image 1 */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="absolute inset-0 flex items-center justify-center font-serif italic text-white/70 text-sm sm:text-base md:text-lg tracking-wide text-center px-8 select-none pointer-events-none"
          style={{ fontStyle: "italic" }}
        >
          {personalInfo.coverQuote ??
            "You make your own luck if you stay at it long enough."}
        </motion.p>
      </motion.div>

      {/* ── PROFILE ROW ────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8">
        {/* Avatar — overlaps the cover */}
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
            {/* Fallback initials */}
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-text-muted bg-border-subtle">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        </motion.div>

        {/* GitHub stars / stats badge — top right, like Image 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-end pt-3 sm:pt-4"
        >
          <a
            href={personalInfo.socials?.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-bg-secondary/60 text-text-muted text-xs font-mono hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
          >
            <Github size={13} />
            <span>{personalInfo.githubStars ?? "96"}</span>
          </a>
        </motion.div>
      </div>

      {/* ── MAIN INFO AREA ─────────────────────────────────────────────── */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-16 sm:pt-14 pb-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
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

          {/* Sub-tagline row — like "22 • engineer • developer • builder" */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4"
          >
            {personalInfo.age && (
              <>
                <span className="text-text-secondary text-sm sm:text-base font-body">
                  {personalInfo.age}
                </span>
                <span className="text-border-active">•</span>
              </>
            )}
            {personalInfo.shortTags?.map((tag, i, arr) => (
              <>
                <span
                  key={tag}
                  className="text-text-secondary text-sm sm:text-base font-body"
                >
                  {tag}
                </span>
                {i < arr.length - 1 && (
                  <span key={`dot-${i}`} className="text-border-active">
                    •
                  </span>
                )}
              </>
            ))}
            {/* Fallback if shortTags not set */}
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
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-10"
          >
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

          {/* Social icons row — horizontal, minimal like Image 1 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <span className="text-text-muted text-xs font-mono mr-1">
              Find me on —
            </span>

            {/* GitHub */}
            {personalInfo.socials?.github && (
              <SocialIcon
                href={personalInfo.socials.github}
                label="GitHub"
                icon={<Github size={16} />}
              />
            )}

            {/* Twitter / X */}
            {personalInfo.socials?.twitter && (
              <SocialIcon
                href={personalInfo.socials.twitter}
                label="Twitter"
                icon={
                  // X logo SVG
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.636 5.9-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
              />
            )}

            {/* Medium */}
            {MEDIUM_URL && MEDIUM_URL !== "#" && (
              <SocialIcon
                href={MEDIUM_URL}
                label="Medium"
                icon={
                  // Medium "M" wordmark SVG
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                }
              />
            )}

            {/* LinkedIn */}
            {personalInfo.socials?.linkedin && (
              <SocialIcon
                href={personalInfo.socials.linkedin}
                label="LinkedIn"
                icon={<Linkedin size={16} />}
              />
            )}

            {/* Resume — paperclip / file icon like Image 1 */}
            {RESUME_URL && RESUME_URL !== "#" && (
              <SocialIcon
                href={RESUME_URL}
                label="Resume"
                icon={<FileText size={16} />}
              />
            )}
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

// ── Small reusable icon button ──────────────────────────────────────────────
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