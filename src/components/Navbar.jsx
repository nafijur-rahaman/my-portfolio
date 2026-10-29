import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile, sections, socials, theme } from "../portfolio.config";
import useActiveSection from "../hooks/useActiveSection";
import useScrolled from "../hooks/useScrolled";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./ui/Button";
import Arrow from "./ui/Arrow";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled && !open ? "border-b border-border bg-bg/80 backdrop-blur-lg" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#hero" className="group relative z-[60] flex items-baseline gap-2" aria-label="Back to top">
          <span className="font-display text-2xl leading-none">{profile.name.replace(/^Md\.\s*/, "")}</span>
          <span className="hidden font-mono text-[10px] text-subtle sm:inline">©{new Date().getFullYear()}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`group flex items-baseline gap-1.5 text-sm transition ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span className={`font-mono text-[10px] ${active === s.id ? "text-accent" : "text-subtle"}`}>
                  0{i + 1}
                </span>
                <span className="link-underline">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-[60] flex items-center gap-1">
          {theme.allowVisitorCustomization && <ThemeSwitcher />}
          {profile.resume && (
            <div className="ml-2 hidden md:block">
              <Button href={profile.resume} target="_blank" rel="noopener noreferrer" className="!py-2">
                Résumé <Arrow className="h-3.5 w-3.5" />
              </Button>
            </div>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            className="ml-1 flex h-9 items-center gap-2 rounded-full border border-border px-4 text-sm md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg px-5 pt-24 pb-10 md:hidden"
          >
            <ul className="flex-1">
              {sections.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-border"
                >
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 font-display text-4xl"
                  >
                    {s.label}
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-4 text-sm text-muted">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
              {profile.resume && (
                <Button href={profile.resume} target="_blank" rel="noopener noreferrer">
                  Résumé <Arrow className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
