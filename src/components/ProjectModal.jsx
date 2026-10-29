import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X, ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Button from "./ui/Button";
import Tag from "./ui/Tag";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const { links = {} } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-surface shadow-2xl sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
        >
          <X className="h-5 w-5" />
        </button>

        <img src={project.image} alt="" className="aspect-[16/8] w-full object-cover object-top" />

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">{project.category}</p>
          <h3 id="project-modal-title" className="mt-2 text-2xl font-bold sm:text-3xl">
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-1 text-muted">{project.subtitle}</p>}
          <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              ["Frontend", project.frontend],
              ["Backend", project.backend],
            ].map(
              ([label, list]) =>
                list?.length > 0 && (
                  <div key={label}>
                    <h4 className="mb-3 text-sm font-semibold">{label}</h4>
                    <div className="flex flex-wrap gap-2">
                      {list.map((t) => (
                        <Tag key={t} tone={label === "Frontend" ? "accent" : "neutral"}>
                          {t}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>

          {project.features?.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold">Key Features</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
            {links.demo && (
              <Button href={links.demo}>
                Live Demo <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            {links.frontend && (
              <Button href={links.frontend} variant="outline">
                <FaGithub className="h-4 w-4" /> {links.backend ? "Frontend Code" : "Source Code"}
              </Button>
            )}
            {links.backend && (
              <Button href={links.backend} variant="outline">
                <FaGithub className="h-4 w-4" /> Backend Code
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
