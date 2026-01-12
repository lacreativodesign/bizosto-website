"use client";

import { useEffect, useState } from "react";

const storageKey = "bizosto-theme";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = theme === "dark" || (theme === "system" && prefersDark);
  root.classList.toggle("dark", useDark);
  root.style.colorScheme = useDark ? "dark" : "light";
  return useDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = stored ?? "system";
    setTheme(initialTheme);
    const nextResolved = applyTheme(initialTheme);
    setResolvedTheme(nextResolved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = (window.localStorage.getItem(storageKey) as Theme | null) ?? "system";
      if (current === "system") {
        const updated = applyTheme("system");
        setResolvedTheme(updated);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    const updated = applyTheme(nextTheme);
    setResolvedTheme(updated);
  };

  return (
    <button
      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
      onClick={handleToggle}
      type="button"
      aria-label="Toggle theme"
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      {resolvedTheme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
