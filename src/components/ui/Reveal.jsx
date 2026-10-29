import { motion } from "motion/react";

// Fades children in once they scroll into view.
export default function Reveal({ children, delay = 0, y = 20, className = "", as = "div" }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
