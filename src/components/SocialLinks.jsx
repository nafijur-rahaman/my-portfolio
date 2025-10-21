import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const links = [
    {
      href: "https://github.com/nafijur-rahaman",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "https://www.linkedin.com/in/nafijur-rahaman",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "mailto:tanjidnafis@gmail.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            y: -3,
          }}
          className="flex items-center justify-center w-12 h-12 rounded-full 
                     bg-gray-800 text-gray-300 hover:text-cyan-400 
                     transition-all duration-300 ease-out shadow-md hover:shadow-cyan-400/20"
        >
          {link.icon}
        </motion.a>
      ))}
    </aside>
  );
}
