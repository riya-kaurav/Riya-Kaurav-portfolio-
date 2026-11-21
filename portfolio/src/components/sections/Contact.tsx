"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-accent-cyan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/riya-kaurav",
    href: personalInfo.socials.linkedin,
    color: "text-blue-400",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@Riya_K11",
    href: personalInfo.socials.twitter,
    color: "text-sky-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@riya-kaurav",
    href: personalInfo.socials.github,
    color: "text-text-secondary",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// get in touch"
          title="Contact"
          subtitle="Have a project idea, opportunity, or just want to say hi? I'd love to hear from you."
        />

        <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xl">
          The best way to reach me is via email. I typically respond within
          24-48 hours. You can also find me on these platforms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-3 p-3.5 rounded-xl border border-border-subtle hover:border-accent-cyan/30 bg-bg-card hover:bg-bg-elevated transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center group-hover:border-accent-cyan/30 transition-colors flex-shrink-0">
                <link.icon size={15} className={link.color} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-text-muted">{link.label}</p>
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}