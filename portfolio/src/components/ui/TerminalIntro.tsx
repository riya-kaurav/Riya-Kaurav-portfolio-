"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; type: "cmd" | "out" | "ok" };

const SCRIPT: Line[] = [
  { text: "$ whoami", type: "cmd" },
  { text: "riya-kaurav", type: "out" },
  { text: "$ cat focus.txt", type: "cmd" },
  { text: "backend systems | applied ai", type: "out" },
  { text: "$ docker compose up -d", type: "cmd" },
  { text: "[ ok ] postgres   ready", type: "ok" },
  { text: "[ ok ] redis      ready", type: "ok" },
  { text: "[ ok ] api        listening on :3000", type: "ok" },
  { text: "$ open portfolio", type: "cmd" },
];

const KEY = "terminal-intro-seen";

export default function TerminalIntro() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const finishRef = useRef<() => void>(() => {});

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduce) {
      setShow(false);
      return;
    }

    setLines([]);
    setTyping("");
    document.body.style.overflow = "hidden";

    let cancelled = false;
    let finished = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((r) => {
        timers.push(setTimeout(r, ms));
      });

    const finish = () => {
      if (finished) return;
      finished = true;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      setLeaving(true);
      timers.push(
        setTimeout(() => {
          document.body.style.overflow = "";
          setShow(false);
        }, 600)
      );
    };
    finishRef.current = finish;

    const onKey = () => finish();
    window.addEventListener("keydown", onKey);

    (async () => {
      for (const line of SCRIPT) {
        if (cancelled) return;
        if (line.type === "cmd") {
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return;
            setTyping(line.text.slice(0, i));
            await sleep(28);
          }
          await sleep(220);
          if (cancelled) return;
          setTyping("");
          setLines((l) => [...l, line]);
        } else {
          await sleep(170);
          if (cancelled) return;
          setLines((l) => [...l, line]);
        }
      }
      await sleep(550);
      if (!cancelled) finish();
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      onClick={() => finishRef.current()}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] px-4 transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[11px] text-text-muted">
            riya@portfolio: ~
          </span>
        </div>

        <div className="min-h-[270px] p-4 font-mono text-[12px] leading-6 sm:p-5 sm:text-[13px]">
          {lines.map((l, i) => (
            <div
              key={i}
              className={
                l.type === "cmd"
                  ? "text-text-primary"
                  : l.type === "ok"
                  ? "text-accent-green"
                  : "text-text-secondary"
              }
            >
              {l.text}
            </div>
          ))}
          <div className="text-text-primary">
            {typing}
            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-white/80 align-middle" />
          </div>
        </div>
      </div>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        click or press any key to skip
      </p>
    </div>
  );
}