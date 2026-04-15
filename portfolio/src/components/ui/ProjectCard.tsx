"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative rounded-2xl bg-bg-card border border-border-subtle overflow-hidden",
        "hover:border-accent-cyan/30 transition-all duration-300",
        "shadow-card-base hover:shadow-card-hover"
      )}
    >
      {/* Card top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-accent-cyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="p-6 md:p-7 flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Year badge */}
            <span className="font-mono text-xs text-text-muted border border-border-subtle rounded-md px-2 py-0.5">
              {project.year}
            </span>
            {project.featured && (
              <span className="font-mono text-xs text-accent-green border border-accent-green/30 bg-accent-green/5 rounded-md px-2 py-0.5">
                Featured
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                aria-label="Live preview"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2">
          {project.title}
          <ArrowUpRight
            size={16}
            className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-accent-cyan"
          />
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
