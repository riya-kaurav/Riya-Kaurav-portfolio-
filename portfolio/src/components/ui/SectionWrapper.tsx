"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("py-24 relative", className)}
    >
      {children}
    </motion.section>
  );
}

// Section heading component
interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <span className="font-mono text-s text-accent-cyan tracking-widest uppercase">
        {label}
      </span>
      <h2 className="font-display font-bold text-5xl md:text-5xl text-text-primary mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary mt-3 max-w-5xl text-base font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
