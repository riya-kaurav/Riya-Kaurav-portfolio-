"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Download } from "lucide-react";
import { personalInfo, skills } from "@/data/portfolio";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";

const skillCategories = [
  { label: "Frontend", items: skills.frontend, color: "cyan" },
  { label: "Backend", items: skills.backend, color: "green" },
  { label: "Tools", items: skills.tools, color: "purple" },
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Avatar + meta */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl bg-bg-elevated border border-border-subtle flex items-center justify-center overflow-hidden relative">
                {/* TODO: Replace with your actual photo using next/image */}
                {/* <Image src="/avatar.jpg" alt="Your Name" fill className="object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-green/5" />
                <User size={48} className="text-text-muted relative z-10" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-2xl border border-accent-cyan/20 -z-10" />
              <div className="absolute -inset-4 rounded-2xl border border-accent-cyan/10 -z-20" />
            </div>

            {/* Meta info */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-2 text-text-secondary text-sm font-body">
                <MapPin size={14} className="text-accent-cyan flex-shrink-0" />
                {/* TODO: Update location */}
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm font-body">
                <Mail size={14} className="text-accent-cyan flex-shrink-0" />
                {/* TODO: Update email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-accent-cyan transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Resume download */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-active text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 rounded-xl text-sm font-medium transition-all duration-200 w-full justify-center lg:justify-start"
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Bio + Skills */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-text-secondary text-base leading-relaxed font-body">
                {/* TODO: Add your bio */}
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              {skillCategories.map((category, catIdx) => (
                <div key={category.label}>
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">
                    {category.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                        className={
                          category.color === "cyan"
                            ? "tag-pill"
                            : category.color === "green"
                            ? "inline-flex items-center px-3 py-1 rounded-full font-mono text-xs font-medium bg-accent-green/8 text-accent-green/80 border border-accent-green/15"
                            : "inline-flex items-center px-3 py-1 rounded-full font-mono text-xs font-medium bg-accent-purple/8 text-purple-400/80 border border-accent-purple/20"
                        }
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
