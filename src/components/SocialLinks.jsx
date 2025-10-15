import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Renders a vertical social bar (left side).
 * Put it near the root so it stays fixed.
 */
export default function SocialLinks() {
  const iconBase = "w-5 h-5";
  const linkCls = "group p-2 rounded-md bg-white/3 hover:bg-white/6 transition-colors";

  const links = [
    { href: "https://github.com/your-username", label: "GitHub", icon: <Github className={iconBase} /> },
    { href: "https://www.linkedin.com/in/your-username", label: "LinkedIn", icon: <Linkedin className={iconBase} /> },
    { href: "mailto:you@example.com", label: "Email", icon: <Mail className={iconBase} /> },
  ];

  return (
    <aside className="fixed left-6 top-1/3 hidden md:flex flex-col gap-3 z-40">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className={linkCls}
        >
          {l.icon}
        </a>
      ))}
    </aside>
  );
}
