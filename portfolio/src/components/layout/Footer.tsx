"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-text-primary">
              <span className="text-accent-cyan">&lt;</span>
              {personalInfo.name}
              <span className="text-accent-cyan">/&gt;</span>
            </p>
            <p className="text-text-muted text-sm mt-1 font-mono">
              {/* TODO: Update tagline */}
              Code to me like a poetry to the poet.
            </p>
          </div>

          {/* Center: nav */}
          <nav className="flex items-center gap-6 text-sm text-text-muted">
            {["about", "projects", "experience", "contact"].map((s) => (
              <button
                key={s}
                onClick={() =>
                  document
                    .getElementById(s)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-accent-cyan transition-colors capitalize"
              >
                {s}
              </button>
            ))}
          </nav>

          {/* Right: socials */}
          <div className="flex items-center gap-3">
            {personalInfo.socials.github && (
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {personalInfo.socials.linkedin && (
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            )}
            {personalInfo.socials.twitter && (
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-separator mt-8" />
        <p className="text-center text-text-muted text-xs mt-6 flex items-center justify-center gap-1.5 font-mono">
          © {currentYear} {personalInfo.name} · Made with{" "}
          <Heart size={11} className="text-red-500 fill-red-500" /> in{" "}
          {personalInfo.location}
        </p>
      </div>
    </footer>
  );
}
