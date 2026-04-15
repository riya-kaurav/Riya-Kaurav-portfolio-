"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// what I do"
          title="Services"
          subtitle="How I can help you build, ship, and grow your product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-bg-card border border-border-subtle rounded-2xl p-7 hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
            >
              {/* Background hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="text-3xl mb-5 select-none">{service.icon}</div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-text-primary mb-3 group-hover:text-accent-cyan transition-colors duration-200">
                {/* TODO: Customize service title */}
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {/* TODO: Customize service description */}
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-center gap-2 text-text-muted text-xs font-mono"
                  >
                    <span className="text-accent-cyan">✓</span>
                    {/* TODO: Customize features */}
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 relative rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-8 md:p-10 overflow-hidden text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="glow-orb w-64 h-64 bg-accent-cyan/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <p className="font-mono text-xs text-accent-cyan tracking-widest mb-3">
              // available for hire
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-3">
              Got a project in mind?
            </h3>
            <p className="text-text-secondary text-sm mb-7 max-w-md mx-auto">
              {/* TODO: Customize your pitch */}
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a conversation about tech.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-cyan text-bg-primary font-display font-bold text-sm rounded-xl hover:shadow-glow-cyan hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
            >
              Let&apos;s Talk
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
