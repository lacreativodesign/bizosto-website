const script = `(() => {
  const storageKey = "bizosto-theme";
  const stored = window.localStorage.getItem(storageKey) || "system";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = stored === "dark" || (stored === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.style.colorScheme = useDark ? "dark" : "light";
})();`;

export default function ThemeScript() {
  return <script id="theme-script" dangerouslySetInnerHTML={{ __html: script }} />;
}
