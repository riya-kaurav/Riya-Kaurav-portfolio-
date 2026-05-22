"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const skillCategories = [
  { label: "frontend", items: skills.languages },
  { label: "backend", items: skills.frameworksAndlibraries },
  { label: "tools", items: skills.databases },
  { label: "tools", items: skills.tools },
  { label: "tools", items: skills.others },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl text-text-primary mb-10"
      >
        skills
      </motion.h2>

      <div className="space-y-8">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
          >
            <p className="font-mono text-xs text-text-muted mb-3">
              {ci + 1}. {category.label}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-sm text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
