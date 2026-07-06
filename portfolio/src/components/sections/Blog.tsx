"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl text-text-primary mb-4"
      >
        blog
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="font-body text-sm text-text-secondary mb-5 max-w-md"
      >
        write about what I learn while building projects, exploring system design, debugging real problems, and growing as a developer in the AI era. This space is a collection of my learnings, experiments, mistakes, and thoughts around tech.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.14 }}
        href={personalInfo.socials.medium ?? "https://medium.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        read on medium
        <ExternalLink size={13} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
