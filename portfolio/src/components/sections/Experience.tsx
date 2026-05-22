"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl mb-10"
        style={{ color: "var(--text-primary)" }}
      >
        experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {/* Role */}
            <p
              className="font-display font-semibold text-base lowercase"
              style={{ color: "var(--text-primary)" }}
            >
              {exp.role.toLowerCase()}
            </p>

            {/* Company */}
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {exp.company}
              </a>
            ) : (
              <p className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
                {exp.company}
              </p>
            )}

            {/* Duration + Location */}
            <p className="font-mono text-xs mt-1 mb-4" style={{ color: "var(--text-muted)" }}>
              {exp.duration}
              {exp.location ? ` · ${exp.location}` : ""}
            </p>

            {/* Description */}
            {exp.description && (
              <p
                className="font-body text-sm leading-relaxed mb-4 max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {exp.description}
              </p>
            )}

            {/* Highlights */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="flex items-start gap-2 text-sm font-body"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-[3px] flex-shrink-0 font-mono text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      —
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}