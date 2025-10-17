import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Button from "./ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  const nav = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = nav.map((n) => document.querySelector(n.href));
      for (let sec of sections) {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(`#${sec.id}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-6 top-6 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto max-w-6xl bg-gradient-to-bl from-black/60 via-black/50 to-black/40 border-white/4 rounded-2xl flex items-center justify-between px-5 py-3`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 shadow-md flex items-center justify-center font-bold transition-all"
          >
            N
          </motion.div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition">
              Md. Nafijur Rahaman
            </div>
            <div className="text-xs text-slate-400 -mt-1">
              Full-Stack Developer
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            {nav.map((n) => (
              <li key={n.href} className="relative">
                <a
                  href={n.href}
                  className={`py-2 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 after:transition-all hover:after:w-full ${
                    active === n.href ? "after:w-full text-cyan-300" : ""
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Md. Nafijur Rahaman (Full).pdf"
            download
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"
          >
            <Download className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Resume
          </a>
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
              <div className="mx-3 rounded-xl bg-gradient-to-bl from-black/70 to-black/50 border border-white/6 p-5 shadow-xl backdrop-blur-md">
                <ul className="flex flex-col gap-4 text-slate-200">
                  {nav.map((n) => (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 px-3 rounded hover:bg-white/5 transition"
                      >
                        {n.label}
                      </a>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Button
                      href="/resume.pdf"
                      variant="solid"
                      className="w-full justify-center flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Resume
                    </Button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
