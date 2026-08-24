const script = `(() => {
  const storageKey = "bizosto-theme:v1";
  let stored = "system";
  try {
    stored = window.localStorage.getItem(storageKey) || window.localStorage.getItem("bizosto-theme") || "system";
    window.localStorage.setItem(storageKey, stored);
    window.localStorage.removeItem("bizosto-theme");
  } catch {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = stored === "dark" || (stored === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.style.colorScheme = useDark ? "dark" : "light";
})();`;

export default function ThemeScript() {
  return <script id="theme-script" dangerouslySetInnerHTML={{ __html: script }} />;
}
