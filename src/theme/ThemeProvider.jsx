import { useCallback, useEffect, useMemo, useState } from "react";
import { theme as themeConfig } from "../portfolio.config";
import { ThemeContext } from "./ThemeContext";

const STORAGE_KEY = "portfolio-theme";

function readStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

function systemMode() {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeProvider({ children }) {
  const allowCustom = themeConfig.allowVisitorCustomization;
  const stored = allowCustom ? readStored() : {};

  const [mode, setMode] = useState(() => {
    const m = stored.mode ?? themeConfig.defaultMode;
    return m === "system" ? systemMode() : m;
  });
  const [accent, setAccent] = useState(() =>
    themeConfig.accents[stored.accent] ? stored.accent : themeConfig.defaultAccent
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = mode;
    root.style.setProperty("--accent", themeConfig.accents[accent]);
    if (allowCustom) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode, accent }));
      } catch {
        /* storage unavailable — theme just won't persist */
      }
    }
  }, [mode, accent, allowCustom]);

  const toggleMode = useCallback(() => setMode((m) => (m === "dark" ? "light" : "dark")), []);

  const value = useMemo(
    () => ({ mode, accent, accents: themeConfig.accents, setAccent, toggleMode }),
    [mode, accent, toggleMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
