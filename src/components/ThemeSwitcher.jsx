import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun, Palette, Check } from "lucide-react";
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

  const iconBtn =
    "grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg";

  return (
    <div className="flex items-center gap-1" ref={ref}>
      <button
        onClick={toggleMode}
        className={iconBtn}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      </button>
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className={iconBtn}
          aria-label="Choose accent color"
          aria-expanded={open}
        >
          <Palette className="h-[18px] w-[18px]" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="card absolute right-0 top-12 z-50 flex gap-2 !bg-surface p-3 shadow-xl"
            >
              {Object.entries(accents).map(([name, [c1, c2]]) => (
                <button
                  key={name}
                  onClick={() => setAccent(name)}
                  aria-label={`${name} accent`}
                  title={name}
                  className="grid h-7 w-7 place-items-center rounded-full ring-offset-2 ring-offset-surface transition hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${c1}, ${c2})`,
                    boxShadow: accent === name ? `0 0 0 2px var(--surface), 0 0 0 4px ${c1}` : undefined,
                  }}
                >
                  {accent === name && <Check className="h-3.5 w-3.5 text-black/70" strokeWidth={3} />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
