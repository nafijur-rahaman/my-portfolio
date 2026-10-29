import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { profile, sections, theme } from "../portfolio.config";
import useActiveSection from "../hooks/useActiveSection";
import useScrolled from "../hooks/useScrolled";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled || open
            ? "border-border bg-surface/80 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#hero" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="bg-gradient-accent grid h-9 w-9 place-items-center rounded-xl font-bold text-on-accent shadow-md transition group-hover:rotate-6">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">{profile.name}</span>
            <span className="block text-xs text-muted">{profile.title}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative isolate rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          {theme.allowVisitorCustomization && <ThemeSwitcher />}
          {profile.resume && (
            <div className="ml-2 hidden md:block">
              <Button href={profile.resume} download className="!px-4 !py-2">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </div>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="card absolute inset-x-0 top-full mt-2 !bg-surface p-3 shadow-xl md:hidden"
            >
              <ul className="flex flex-col">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 font-medium transition hover:bg-surface-2 ${
                        active === s.id ? "text-accent-ink" : "text-fg"
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              {profile.resume && (
                <Button href={profile.resume} download className="mt-2 w-full">
                  <Download className="h-4 w-4" /> Download Resume
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
