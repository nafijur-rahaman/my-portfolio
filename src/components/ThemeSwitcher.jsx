import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeSwitcher() {
  const { mode, toggleMode, accent, accents, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.type === "keydown" ? e.key === "Escape" : !ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-1" ref={ref}>
      <button
        onClick={toggleMode}
        className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:text-fg"
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-full transition hover:scale-110"
          aria-label="Choose accent color"
          aria-expanded={open}
        >
          <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent/15" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-11 right-0 z-50 w-44 rounded-xl border border-border bg-surface p-2 shadow-xl shadow-black/10"
            >
              <p className="label px-2 pt-1 pb-2">Accent</p>
              {Object.entries(accents).map(([name, color]) => (
                <button
                  key={name}
                  onClick={() => setAccent(name)}
                  className={`flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-sm capitalize transition hover:bg-surface-2 ${
                    accent === name ? "text-fg" : "text-muted"
                  }`}
                >
                  <span className="h-3 w-3 rounded-full" style={{ background: color }} />
                  {name}
                  {accent === name && <span className="ml-auto font-mono text-[10px]">●</span>}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
