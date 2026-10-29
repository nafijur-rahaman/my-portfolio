import { motion } from "motion/react";

// Fades children in once they scroll into view.
export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
