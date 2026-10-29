import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import Button from "./ui/Button";
import Arrow from "./ui/Arrow";
import Tag from "./ui/Tag";
import BrowserFrame from "./BrowserFrame";

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
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center md:p-8"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[94svh] w-full max-w-5xl overflow-y-auto rounded-t-2xl border border-border bg-bg md:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-bg/90 px-6 py-4 backdrop-blur md:px-10">
          <p className="label">Case study — {project.category}</p>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-fg"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-10 md:px-10">
          <h3 id="project-modal-title" className="font-display text-5xl leading-none md:text-7xl">
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-3 text-xl text-muted">{project.subtitle}</p>}

          <BrowserFrame src={project.image} url={links.demo} className="mt-10" />

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="label mb-4">Overview</p>
              <p className="text-lg leading-relaxed">{project.description}</p>

              {project.features?.length > 0 && (
                <>
                  <p className="label mt-10 mb-4">Key features</p>
                  <ul className="grid gap-x-8 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="border-t border-border py-3 text-sm text-muted">
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="space-y-8 md:col-span-4 md:col-start-9">
              {[
                ["Frontend", project.frontend],
                ["Backend", project.backend],
              ].map(
                ([label, list]) =>
                  list?.length > 0 && (
                    <div key={label}>
                      <p className="label mb-3">{label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {list.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                  )
              )}
              <div className="flex flex-col gap-3 border-t border-border pt-8">
                {links.demo && (
                  <Button href={links.demo} variant="accent" className="justify-between">
                    Visit live site <Arrow className="h-3.5 w-3.5" />
                  </Button>
                )}
                {links.frontend && (
                  <Button href={links.frontend} variant="outline" className="justify-between">
                    {links.backend ? "Frontend code" : "Source code"} <Arrow className="h-3.5 w-3.5" />
                  </Button>
                )}
                {links.backend && (
                  <Button href={links.backend} variant="outline" className="justify-between">
                    Backend code <Arrow className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
