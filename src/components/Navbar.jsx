import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Button from "./ui/Button";

/**
 * Navbar: dark, sticky, glassy with mobile overlay.
 *
 * Links point to anchors: #about, #projects, #experience, #contact
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-6 top-6 z-50">
      <nav className="mx-auto max-w-6xl bg-gradient-to-bl from-black/60 via-black/50 to-black/40 backdrop-blur-md border border-white/4 rounded-2xl px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 shadow-md flex items-center justify-center text-black font-bold">T</div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-slate-100">Tanjid</div>
              <div className="text-xs text-slate-400 -mt-1">Full-Stack Engineer</div>
            </div>
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-cyan-300 transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="/resume.pdf" variant="solid" className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Resume
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute left-0 right-0 top-full mt-3"
            >
              <div className="mx-3 rounded-xl bg-gradient-to-bl from-black/70 to-black/50 border border-white/6 p-5 shadow-xl">
                <ul className="flex flex-col gap-4 text-slate-200">
                  {nav.map((n) => (
                    <li key={n.href}>
                      <a onClick={() => setOpen(false)} href={n.href} className="block py-2 px-3 rounded hover:bg-white/5 transition">
                        {n.label}
                      </a>
                    </li>
                  ))}
                  <li className="pt-2">
                    <a href="/resume.pdf" className="block">
                      <Button href="/resume.pdf" variant="solid" className="w-full justify-center">
                        <Download className="w-4 h-4" /> Resume
                      </Button>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
