"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Download } from "lucide-react";
import { personalInfo, skills } from "@/data/portfolio";
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
          label="// about.me"
          title="Who I Am"
          subtitle="A little bit about me and what I bring to the table."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-8"
        >
          {/* Bio */}
          <p className="text-text-secondary text-base leading-relaxed font-body max-w-4xl">
            {personalInfo.bio}
          </p>

          {/* Skills */}
          <div>
            <p className="text-xs font-mono text-text-muted mb-3">
              // tech i work with
            </p>

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

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Location */}
            <div className="flex items-center gap-2 text-text-muted text-sm font-body">
              <MapPin
                size={13}
                className="text-accent-cyan flex-shrink-0"
              />
              {personalInfo.location}
            </div>

            <div className="w-px h-4 bg-border-subtle hidden sm:block" />

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-text-muted text-sm font-body hover:text-accent-cyan transition-colors"
            >
              <Mail
                size={13}
                className="text-accent-cyan flex-shrink-0"
              />
              {personalInfo.email}
            </a>

            <div className="w-px h-4 bg-border-subtle hidden sm:block" />

            {/* Resume */}
           
          </div>

          
        </motion.div>
      </div>
    </SectionWrapper>
  );
}