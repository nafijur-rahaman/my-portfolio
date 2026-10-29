import { motion } from "motion/react";

export default function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 max-w-2xl"
          >
            {eyebrow && (
              <p className="mb-3 font-mono text-sm tracking-widest text-accent-ink uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
            {description && <p className="mt-4 text-lg text-muted">{description}</p>}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
