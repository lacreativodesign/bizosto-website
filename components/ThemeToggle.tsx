"use client";

import { useSyncExternalStore } from "react";

const storageKey = "bizosto-theme:v1";
const themeEvent = "bizosto:theme-change";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";
let memoryTheme: Theme | null = null;

function readTheme(): Theme {
  if (memoryTheme) return memoryTheme;
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  } catch {
    return "system";
  }
}

function applyTheme(theme: Theme): ResolvedTheme {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = theme === "dark" || (theme === "system" && prefersDark);
  root.classList.toggle("dark", useDark);
  root.style.colorScheme = useDark ? "dark" : "light";
  return useDark ? "dark" : "light";
}

function getResolvedTheme(): ResolvedTheme {
  const theme = readTheme();
  return theme === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : theme;
}

function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const update = () => {
    applyTheme(readTheme());
    onChange();
  };
  media.addEventListener("change", update);
  window.addEventListener(themeEvent, update);
  return () => {
    media.removeEventListener("change", update);
    window.removeEventListener(themeEvent, update);
  };
}

export default function ThemeToggle() {
  const resolvedTheme = useSyncExternalStore(subscribe, getResolvedTheme, () => "light");

  const handleToggle = () => {
    const nextTheme: Theme = resolvedTheme === "dark" ? "light" : "dark";
    memoryTheme = nextTheme;
    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Theme still applies for the current page when storage is unavailable.
    }
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(themeEvent));
  };

  return (
    <button
      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
      onClick={handleToggle}
      type="button"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      {resolvedTheme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
