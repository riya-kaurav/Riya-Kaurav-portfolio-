"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-10">

         

         

        {/* Bottom bar */}
       
        <p className="text-center text-text-muted text-xs mt-6 flex items-center justify-center gap-1.5 font-mono">
          © {currentYear} {personalInfo.name} · Made with{" "}
          <Heart size={11} className="text-red-500 fill-red-500" /> in{" "}
          {personalInfo.location}
        </p>
      </div>
    </footer>
  );
}
