"use client";

import { useEffect, useState } from "react";

const storageKey = "bizosto-theme";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = theme === "dark" || (theme === "system" && prefersDark);
  root.classList.toggle("dark", useDark);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = stored ?? "system";
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setResolvedTheme(
      initialTheme === "dark"
        ? "dark"
        : initialTheme === "light"
          ? "light"
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = (window.localStorage.getItem(storageKey) as Theme | null) ?? "system";
      if (current === "system") {
        applyTheme("system");
        setResolvedTheme(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    setResolvedTheme(nextTheme);
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
