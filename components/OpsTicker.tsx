"use client";

import { useEffect, useState } from "react";

const events = [
  { dot: "bg-emerald-500", text: "Invoice #1042 paid — $4,800 recorded to ledger" },
  { dot: "bg-primary", text: "Project “Brand Refresh” moved to Client Review" },
  { dot: "bg-amber-500", text: "New lead assigned to Sales — follow-up scheduled" },
  { dot: "bg-emerald-500", text: "Quote approved by client — production job created" },
  { dot: "bg-primary", text: "Payroll run completed — 18 team members" },
];

export default function OpsTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % events.length);
    }, 3200);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const event = events[index];

  return (
    <div
      className="flex items-center gap-3 rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur"
      aria-live="off"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${event.dot}`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${event.dot}`} />
      </span>
      <span key={index} className="ops-ticker-item truncate">
        {event.text}
      </span>
      <span className="ml-auto hidden shrink-0 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground/70 sm:inline">
        Illustrative activity
      </span>
    </div>
  );
}
