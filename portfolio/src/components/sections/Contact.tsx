"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-accent-cyan",
    description: "Best for project inquiries & collabs",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@riya-kaurav",
    href: personalInfo.socials.github,
    color: "text-text-secondary",
    description: "Where my code lives & breathes",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/riya-kaurav",
    href: personalInfo.socials.linkedin,
    color: "text-blue-400",
    description: "Let's connect professionally",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@Riya_K11",
    href: personalInfo.socials.twitter,
    color: "text-sky-400",
    description: "Thoughts, threads & tech talk",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="// get in touch"
          title="Contact"
          subtitle="Have a project idea, opportunity, or just want to say hi? I'd love to hear from you."
        />

        {/* Cool intro blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
           className="mb-10 p-4 rounded-2xl border border-border-subtle bg-bg-card relative overflow-hidden"
        >
          {/* Decorative glow */}
           <div className="absolute -top-10 -right-10 w-40 h-10 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none" /> 

          <p className="text-text-secondary text-sm leading-relaxed font-body max-w-4xl">
            I&apos;m always open to{" "}
            <span className="text-accent-cyan font-medium">
              new opportunities
            </span>
            , interesting conversations, and ambitious ideas. Whether you have a project in mind, a question about my work, or just want to connect — my inbox is always open.{" "}
            <span className="text-text-primary font-medium">
              I typically respond within 24 hours.
            </span>
          </p>
        </motion.div>

        {/* Social links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border-subtle hover:border-accent-cyan/30 bg-bg-card hover:bg-bg-elevated transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center group-hover:border-accent-cyan/30 transition-colors flex-shrink-0">
                <link.icon size={17} className={link.color} />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-xs font-mono text-text-muted mb-0.5">
                  {link.label}
                </p>
                <p className="text-sm text-text-primary font-medium truncate mb-1">
                  {link.value}
                </p>
                {/* Cool description */}
                <p className="text-xs text-text-muted font-body">
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={15}
                className="text-text-muted opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-text-muted text-xs font-mono mt-10"
        >
          — currently available for freelance & full-time roles —
        </motion.p>
      </div>
    </SectionWrapper>
  );
}