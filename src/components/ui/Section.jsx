import { motion } from "motion/react";
import RichText from "./RichText";

// Numbered editorial section: "(01) About" label on the left, serif title on the right.
export default function Section({ id, number, label, title, intro, aside, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-14 grid gap-6 border-t border-border pt-6 md:mb-20 md:grid-cols-12"
        >
          <p className="label md:col-span-3">
            {number != null && <span className="text-fg">({String(number).padStart(2, "0")})</span>} {label}
          </p>
          <div className="md:col-span-9">
            <div className="flex flex-wrap items-end justify-between gap-6">
              {title && (
                <h2 className="max-w-3xl font-display text-[2.6rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl md:text-7xl">
                  <RichText text={title} highlightClassName="italic text-accent" />
                </h2>
              )}
              {aside}
            </div>
            {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>}
          </div>
        </motion.header>
        {children}
      </div>
    </section>
  );
}
