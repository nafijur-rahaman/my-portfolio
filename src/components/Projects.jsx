import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../portfolio.config";
import placeholder from "../assets/project-placeholder.webp";
import Section from "./ui/Section";
import Tag from "./ui/Tag";
import ProjectModal from "./ProjectModal";

const ALL = "All";

function ProjectCard({ project, onOpen }) {
  const { links = {} } = project;
  const stack = [...(project.frontend ?? []), ...(project.backend ?? [])];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="card group flex flex-col overflow-hidden transition-colors hover:border-accent/40"
    >
      <button
        onClick={onOpen}
        className="relative block aspect-[16/10] overflow-hidden text-left"
        aria-label={`View details for ${project.title}`}
      >
        <img
          src={project.image || placeholder}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
          View details <ArrowUpRight className="ml-1 h-4 w-4" />
        </span>
        {project.featured && (
          <span className="bg-gradient-accent absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-on-accent shadow">
            <Star className="h-3 w-3 fill-current" /> Featured
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">
              <button onClick={onOpen} className="text-left transition hover:text-accent-ink">
                {project.title}
              </button>
            </h3>
            {project.subtitle && <p className="text-sm text-muted">{project.subtitle}</p>}
          </div>
          <div className="flex shrink-0 gap-1">
            {(links.frontend || links.backend) && (
              <a
                href={links.frontend || links.backend}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg"
              >
                <FaGithub className="h-[18px] w-[18px]" />
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg"
              >
                <ExternalLink className="h-[18px] w-[18px]" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {stack.slice(0, 5).map((t) => (
            <Tag key={t} tone="neutral">
              {t}
            </Tag>
          ))}
          {stack.length > 5 && <Tag tone="neutral">+{stack.length - 5}</Tag>}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const categories = useMemo(
    () => [ALL, ...new Set(projects.map((p) => p.category).filter(Boolean))],
    []
  );
  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A few things I've designed and built end-to-end. Click any project for the full breakdown."
    >
      {categories.length > 2 && (
        <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === c ? "text-on-accent" : "border border-border text-muted hover:text-fg"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="project-filter"
                  className="bg-gradient-accent absolute inset-0 -z-10 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {c}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setSelected(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={closeModal} />}
      </AnimatePresence>
    </Section>
  );
}
