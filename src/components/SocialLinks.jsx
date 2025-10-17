import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const links = [
    { href: "https://github.com/nafijur-rahaman", label: "GitHub", icon: <Github className="w-5 h-5" /> },
    { href: "https://www.linkedin.com/in/nafijur-rahaman", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "mailto:tanjidnafis@gmail.com", label: "Email", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <aside className="fixed left-6 top-1/3 hidden md:flex flex-col gap-5 z-40">
      {links.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1, x: 5 }}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Gradient accent bar */}
          <span className="absolute left-0 top-1/4 h-1/2 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

          {link.icon}
        </motion.a>
      ))}
    </aside>
  );
}
