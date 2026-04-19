"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-accent-cyan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@riya-kaurav", // TODO: Update your GitHub handle
    href: personalInfo.socials.github,
    color: "text-text-secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/riya-kaurav", // TODO: Update your LinkedIn
    href: personalInfo.socials.linkedin,
    color: "text-blue-400",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@Riya_K11", // TODO: Update your Twitter handle
    href: personalInfo.socials.twitter,
    color: "text-sky-400",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your actual form submission logic
    // Options: Formspree, EmailJS, Resend, custom API route
    // Example with Formspree:
    // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    //   headers: { "Content-Type": "application/json" },
    // });

    // Simulated delay for demo
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/50 focus:bg-bg-elevated/80 transition-all duration-200";

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// get in touch"
          title="Contact"
          subtitle="Have a project idea, opportunity, or just want to say hi? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Social links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {/* TODO: Personalize your contact blurb */}
              The best way to reach me is via email. I typically respond within
              24 hours. You can also find me on these platforms:
            </p>

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
                className="group flex items-center gap-4 p-4 rounded-xl border border-border-subtle hover:border-accent-cyan/30 bg-bg-card hover:bg-bg-elevated transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center group-hover:border-accent-cyan/30 transition-colors flex-shrink-0">
                  <link.icon size={16} className={link.color} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-text-muted">{link.label}</p>
                  <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center gap-4 bg-bg-card border border-accent-green/20 rounded-2xl p-8 text-center"
              >
                <CheckCircle size={40} className="text-accent-green" />
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Message Sent!
                </h3>
                <p className="text-text-secondary text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-2 text-sm text-accent-cyan hover:underline font-mono"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-bg-card border border-border-subtle rounded-2xl p-6 md:p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-text-muted">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-text-muted">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-text-muted">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project inquiry / Collaboration / Just saying hi"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-text-muted">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-cyan text-bg-primary font-display font-bold text-sm rounded-xl hover:shadow-glow-cyan hover:scale-[1.01] transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
