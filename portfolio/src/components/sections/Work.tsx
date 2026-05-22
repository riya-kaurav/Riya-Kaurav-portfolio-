"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl text-text-primary mb-10"
      >
        work
      </motion.h2>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            {/* Title + links */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-display font-semibold text-base text-text-primary">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-text-muted hover:text-text-primary transition-colors"
                  >
                    <Github size={15} strokeWidth={1.5} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live preview"
                    className="text-text-muted hover:text-text-primary transition-colors"
                  >
                    <ExternalLink size={15} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-3">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
