"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

type Filter = "all" | "featured";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <SectionWrapper id="projects" className="bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeading
            label="// my work"
            title="Projects"
            subtitle="Things I've built, shipped, and learned from."
          />

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 bg-bg-card border border-border-subtle rounded-xl p-1 self-start sm:self-auto flex-shrink-0"
          >
            {(["all", "featured"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-4 py-2 text-xs font-mono rounded-lg capitalize transition-colors duration-200 ${
                  filter === f
                    ? "text-accent-cyan"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-bg"
                    className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg"
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-text-muted text-sm mb-4 font-body">
            These are just a few highlights. There&apos;s more on GitHub.
          </p>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-active text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-accent-cyan/5"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
