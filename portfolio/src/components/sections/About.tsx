"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { MapPin, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-bold text-2xl text-text-primary mb-8"
      >
        about me
      </motion.h2>

      <div className="max-w-xl space-y-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="font-body text-sm text-text-secondary leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1.5 text-text-muted text-sm font-body"
        >
          <MapPin size={13} strokeWidth={1.5} />
          {personalInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 font-body text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <Download size={13} strokeWidth={1.5} />
            download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
