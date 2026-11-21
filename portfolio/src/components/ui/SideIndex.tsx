"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

const LABELS: Record<string, string> = {
  projects: "Projects",
  about: "Tech",
  experience: "Experience",
  blog: "Writing",
  contact: "Contact",
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function SideIndex() {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const found = Array.from(
      document.querySelectorAll<HTMLElement>("main > [id], main section[id]")
    );
    const secs = found.filter((el, i) => found.findIndex((x) => x.id === el.id) === i);

    setItems([
      { id: "home", label: "Home" },
      ...secs.map((s) => ({ id: s.id, label: LABELS[s.id] ?? cap(s.id) })),
    ]);

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.35;
        let current = "home";
        secs.forEach((s) => {
          if (s.getBoundingClientRect().top <= line) current = s.id;
        });
        const atBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
        if (atBottom && secs.length) current = secs[secs.length - 1].id;
        setActive(current);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Page index"
      className="hidden xl:block top-[28vh] z-40 w-[120px]"
      style={{ position: "fixed", left: "calc(50% + 475px + 28px)" }}
    >
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
        Index
      </p>
      <ul className="flex flex-col gap-1">
        {items.map((item) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`group flex items-center gap-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200 ${
                  on
                    ? "text-text-primary font-semibold"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                <span className="flex w-4 flex-shrink-0">
                  <span
                    className={`h-px bg-white transition-all duration-300 ${
                      on ? "w-4" : "w-0 opacity-50 group-hover:w-2"
                    }`}
                  />
                </span>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}