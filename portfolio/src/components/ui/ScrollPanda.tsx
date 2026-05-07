"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Panda() {
  return (
    <svg
      width="48"
      height="56"
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Body ── */}
      <ellipse cx="24" cy="42" rx="14" ry="12" fill="white" />
      <ellipse cx="24" cy="42" rx="14" ry="12" stroke="#ddd" strokeWidth="0.8" fill="none" />

      {/* Belly */}
      <ellipse cx="24" cy="44" rx="8" ry="7" fill="#f7f7f7" />

      {/* ── Arms ── */}
      {/* Left arm */}
      <ellipse cx="9" cy="38" rx="5" ry="7" fill="#2a2a2a" transform="rotate(-15 9 38)" />
      <ellipse cx="7" cy="44" rx="4" ry="3" fill="#222" transform="rotate(-15 7 44)" />
      {/* Right arm */}
      <ellipse cx="39" cy="38" rx="5" ry="7" fill="#2a2a2a" transform="rotate(15 39 38)" />
      <ellipse cx="41" cy="44" rx="4" ry="3" fill="#222" transform="rotate(15 41 44)" />

      {/* ── Legs ── */}
      {/* Left leg */}
      <ellipse cx="17" cy="52" rx="5" ry="4" fill="#2a2a2a" />
      {/* Right leg */}
      <ellipse cx="31" cy="52" rx="5" ry="4" fill="#2a2a2a" />

      {/* ── Neck ── */}
      <ellipse cx="24" cy="30" rx="8" ry="4" fill="white" />

      {/* ── Head ── */}
      <circle cx="24" cy="22" r="18" fill="white" />
      <circle cx="24" cy="22" r="18" stroke="#ddd" strokeWidth="0.6" fill="none" />

      {/* ── Ears ── */}
      {/* Left ear */}
      <circle cx="9" cy="8" r="6" fill="#2a2a2a" />
      <circle cx="9" cy="8" r="3.5" fill="#555" />
      {/* Right ear */}
      <circle cx="39" cy="8" r="6" fill="#2a2a2a" />
      <circle cx="39" cy="8" r="3.5" fill="#555" />

      {/* ── Eye patches (big black) ── */}
      <ellipse cx="16" cy="20" rx="7" ry="6.5" fill="#1a1a1a" transform="rotate(-10 16 20)" />
      <ellipse cx="32" cy="20" rx="7" ry="6.5" fill="#1a1a1a" transform="rotate(10 32 20)" />

      {/* ── Eyes (white sclera + pupil) ── */}
      <circle cx="16" cy="20" r="4" fill="white" />
      <circle cx="32" cy="20" r="4" fill="white" />
      {/* Pupils */}
      <circle cx="16" cy="20" r="2.5" fill="#111" />
      <circle cx="32" cy="20" r="2.5" fill="#111" />
      {/* Eye shine */}
      <circle cx="17.2" cy="18.8" r="1.1" fill="white" />
      <circle cx="33.2" cy="18.8" r="1.1" fill="white" />
      {/* Extra tiny shine */}
      <circle cx="15.2" cy="21.2" r="0.5" fill="white" fillOpacity="0.6" />
      <circle cx="31.2" cy="21.2" r="0.5" fill="white" fillOpacity="0.6" />

      {/* ── Muzzle ── */}
      <ellipse cx="24" cy="28" rx="8" ry="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="0.6" />

      {/* Nose */}
      <ellipse cx="24" cy="25.5" rx="3" ry="2" fill="#555" />
      {/* Nose highlight */}
      <ellipse cx="23" cy="24.8" rx="1" ry="0.6" fill="#888" />

      {/* Mouth */}
      <path
        d="M20.5 29.5 Q24 32.5 27.5 29.5"
        stroke="#888"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Cheek blush */}
      <ellipse cx="12" cy="27" rx="4" ry="2.5" fill="#ffb6c1" fillOpacity="0.35" />
      <ellipse cx="36" cy="27" rx="4" ry="2.5" fill="#ffb6c1" fillOpacity="0.35" />

      {/* ── Tail ── */}
      <circle cx="36" cy="50" r="3.5" fill="#ddd" stroke="#ccc" strokeWidth="0.6" />
    </svg>
  );
}

export default function ScrollPanda() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const PANDA_SIZE = 56;

  return (
    <div className="fixed left-0 top-0 bottom-0 z-[9999] pointer-events-none flex items-stretch">

      {/* Vertical track */}
      <div className="relative w-[2px] bg-white/10 mx-3 my-8">

        {/* Filled progress from top */}
        <div
          className="absolute top-0 left-0 right-0 bg-white/20 transition-all duration-75"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Panda on track */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: `clamp(0px, calc(${progress * 100}% - ${PANDA_SIZE / 2}px), calc(100% - ${PANDA_SIZE}px))`,
          }}
          // Breathe / sway
          animate={{ x: [0, 2, 0, -2, 0], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Panda />
        </motion.div>
      </div>
    </div>
  );
}