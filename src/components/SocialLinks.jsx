import { motion } from "motion/react";
import { socials } from "../portfolio.config";

// Fixed vertical social rail on large screens.
export default function SocialLinks() {
  return (
    <aside className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-3 xl:flex">
      {socials.map(({ href, label, icon: Icon }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:-translate-y-1 hover:text-accent-ink"
        >
          <Icon className="h-5 w-5" />
        </motion.a>
      ))}
      <span className="mt-2 h-24 w-px bg-border" />
    </aside>
  );
}
