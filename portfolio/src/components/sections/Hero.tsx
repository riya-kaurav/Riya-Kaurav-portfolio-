"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, BookOpen, User } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
// ── Typewriter ──────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((p) => (p + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText(words[index].substring(0, subIndex));
        setSubIndex((p) => p + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [subIndex, index, deleting, words, speed]);

  return text;
}

// ── GitHub Heatmap ──────────────────────────────────────────
interface ContribDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

function buildGrid(weeks: { contributionDays: ContribDay[] }[]): ContribDay[][] {
  return weeks.map((w) => w.contributionDays);
}

const MONTH_LABELS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_LABELS   = ["","Mon","","Wed","","Fri",""];

function GitHubHeatmap({ username }: { username: string }) {
  const [weeks, setWeeks]   = useState<ContribDay[][]>([]);
  const [total, setTotal]   = useState<number | null>(null);
  const [error, setError]   = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  const fetchContribs = useCallback(async () => {
    try {
      // Use the public GitHub contributions API proxy (no auth required)
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
      );
      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json();

      // Normalize response shape
      const contributions: ContribDay[] = (json.contributions as Array<{
        date: string; count: number; level: number;
      }>).map((d) => ({
        date: d.date,
        count: d.count,
        level: Math.min(d.level, 4) as ContribDay["level"],
      }));

      // Group into weeks of 7
      const grouped: ContribDay[][] = [];
      for (let i = 0; i < contributions.length; i += 7) {
        grouped.push(contributions.slice(i, i + 7));
      }
      setWeeks(grouped);
      setTotal(contributions.reduce((s, d) => s + d.count, 0));
    } catch {
      setError(true);
    }
  }, [username]);

  useEffect(() => { fetchContribs(); }, [fetchContribs]);

  // Derive month label positions from week data
  const monthPositions: { label: string; col: number }[] = [];
  weeks.forEach((week, col) => {
    if (week[0]) {
      const m = parseInt(week[0].date.split("-")[1], 10) - 1;
      const prev = weeks[col - 1]?.[0];
      const prevM = prev ? parseInt(prev.date.split("-")[1], 10) - 1 : -1;
      if (m !== prevM) monthPositions.push({ label: MONTH_LABELS[m], col });
    }
  });

  if (error) {
    return (
      <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
        couldn&apos;t load contributions
      </p>
    );
  }

  if (weeks.length === 0) {
    return (
      <div className="flex gap-1 flex-wrap">
        {Array.from({ length: 52 }).map((_, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {Array.from({ length: 7 }).map((_, di) => (
              <div
                key={di}
                className="heat-cell animate-pulse"
                style={{ background: "var(--heat-0)" }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative select-none">
      {/* Month labels */}
      <div className="flex mb-1 ml-7 relative h-4">
        {monthPositions.map(({ label, col }) => (
          <span
            key={`${label}-${col}`}
            className="absolute font-mono text-[10px]"
            style={{
              left: col * 13,
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="flex gap-1">
        {/* Day labels */}
        <div className="flex flex-col gap-1 mr-1">
          {DAY_LABELS.map((d, i) => (
            <span
              key={i}
              className="font-mono text-[9px] h-[11px] flex items-center"
              style={{ color: "var(--text-muted)", width: 20 }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="flex gap-[3px] overflow-x-auto pb-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={di}
                  className="heat-cell cursor-pointer transition-opacity hover:opacity-70"
                  data-level={day.level}
                  onMouseEnter={(e) => {
                    const rect = (e.target as HTMLElement).getBoundingClientRect();
                    setTooltip({
                      text: `${day.count} contrib${day.count !== 1 ? "s" : ""} on ${day.date}`,
                      x: rect.left + rect.width / 2,
                      y: rect.top - 6,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer: total + legend */}
      <div className="flex items-center justify-between mt-2 ml-7">
        {total !== null && (
          <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
            {total.toLocaleString()} contributions in the last year
          </span>
        )}
        <div className="flex items-center gap-1 ml-auto">
          <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>less</span>
          {([0, 1, 2, 3, 4] as const).map((l) => (
            <div key={l} className="heat-cell" data-level={l} />
          ))}
          <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>more</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none font-mono text-[11px] px-2 py-1 rounded"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
            background: "var(--bg-elevated)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border-subtle)",
            whiteSpace: "nowrap",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

// ── Animations ──────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Component ───────────────────────────────────────────────
export default function Hero() {
  const roles = [
    "Full-Stack Developer",
  ];
  const typedRole = useTypewriter(roles);

  // Extract GitHub username from URL
  const githubUsername =
    personalInfo.socials.github?.replace(/.*github\.com\//, "").replace(/\/$/, "") ??
    "yourusername";

  return (
    <section className="min-h-screen flex items-start pt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
        {/* ── Profile picture ── */}
{/* <motion.div variants={itemVariants} className="mb-7">
  <div
    className="avatar-ring w-20 h-20 overflow-hidden flex items-center justify-center"
    style={{ background: "var(--bg-elevated)" }}
  >
    <Image
      src="/image.jpeg"   // ✅ no /public prefix
      alt="Your name"
      width={80}
      height={80}
      className="object-cover"
    /> */}
    {/* Optional fallback icon if image not found */}
    {/* <User size={32} style={{ color: "var(--text-muted)" }} strokeWidth={1.2} /> */}
  {/* </div>
</motion.div> */}


          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            hey! i&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            className="font-display text-xl md:text-2xl font-semibold mb-5 h-9 flex items-center"
            style={{ color: "var(--text-secondary)" }}
          >
            {typedRole}
            <span
              className="inline-block w-0.5 h-6 ml-1 animate-blink"
              style={{ background: "var(--text-secondary)" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base md:text-lg leading-relaxed max-w-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Contact bar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 flex-wrap mb-16"
          >
            {personalInfo.socials.github && (
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="transition-opacity hover:opacity-50" style={{ color: "var(--text-muted)" }}>
                <Github size={19} strokeWidth={1.5} />
              </a>
            )}
            {personalInfo.socials.linkedin && (
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="transition-opacity hover:opacity-50" style={{ color: "var(--text-muted)" }}>
                <Linkedin size={19} strokeWidth={1.5} />
              </a>
            )}
            {personalInfo.socials.twitter && (
              <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="transition-opacity hover:opacity-50" style={{ color: "var(--text-muted)" }}>
                <Twitter size={19} strokeWidth={1.5} />
              </a>
            )}
            
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} aria-label="Email"
                className="transition-opacity hover:opacity-50" style={{ color: "var(--text-muted)" }}>
                <Mail size={19} strokeWidth={1.5} />
              </a>
            )}
          </motion.div>

          {/* ── GitHub Heatmap ── */}
          <motion.div variants={itemVariants}>
            <p
              className="font-mono text-xs mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              github contributions
            </p>
            <GitHubHeatmap username={githubUsername} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
