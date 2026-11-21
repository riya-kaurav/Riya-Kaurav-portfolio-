"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";

const allSkills = [
  ...skills.languages,
  ...skills.frameworksAndlibraries,
  ...skills.databases,
  ...skills.tools,
  ...skills.others,
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// stack"
          title="Tech I Work With"
          subtitle="Languages, frameworks, databases and tools I use to build things."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {allSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[12px] font-semibold text-white/80 hover:bg-accent-cyan/10 hover:border-accent-cyan/20 hover:text-accent-cyan transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}