import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../portfolio.config";
import Section from "./ui/Section";
import Arrow from "./ui/Arrow";
import BrowserFrame from "./BrowserFrame";
import ProjectModal from "./ProjectModal";

const ALL = "All";

function ProjectRow({ project, index, onOpen }) {
  const { links = {} } = project;
  const stack = [...(project.frontend ?? []), ...(project.backend ?? [])];
  const flip = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className="grid items-center gap-8 border-t border-border py-12 md:grid-cols-12 md:gap-12 md:py-16"
    >
      <button
        onClick={onOpen}
        aria-label={`Open case study: ${project.title}`}
        className={`group block text-left md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <BrowserFrame
          src={project.image}
          url={links.demo}
          className="transition duration-500 group-hover:-translate-y-1"
          imgClassName="transition duration-700 group-hover:scale-[1.03]"
        />
      </button>

      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div className="label flex items-center gap-3">
          <span className="text-fg">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-border" />
          <span>{project.category}</span>
          {project.featured && <span className="text-accent-ink">Featured</span>}
        </div>
        <h3 className="mt-5 font-display text-5xl leading-none md:text-6xl">{project.title}</h3>
        {project.subtitle && <p className="mt-3 text-lg">{project.subtitle}</p>}
        <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
        <p className="mt-6 font-mono text-xs leading-6 text-muted">{stack.slice(0, 7).join(" / ")}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
          <button onClick={onOpen} className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-bg transition hover:bg-accent hover:text-white">
            Case study <Arrow className="h-3.5 w-3.5" />
          </button>
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1">
              <span className="link-underline">Live site</span> <Arrow className="h-3.5 w-3.5" />
            </a>
          )}
          {(links.frontend || links.backend) && (
            <a
              href={links.frontend || links.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1"
            >
              <span className="link-underline">Source</span> <Arrow className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ id, number, label, title, intro }) {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const categories = useMemo(
    () => [ALL, ...new Set(projects.map((p) => p.category).filter(Boolean))],
    []
  );
  const count = (c) => (c === ALL ? projects.length : projects.filter((p) => p.category === c).length);
  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  const filters =
    categories.length > 2 ? (
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-x-5 gap-y-2">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`text-sm transition ${filter === c ? "text-fg" : "text-subtle hover:text-fg"}`}
          >
            <span className={filter === c ? "underline decoration-accent decoration-2 underline-offset-8" : ""}>{c}</span>
            <sup className="ml-0.5 font-mono text-[10px]">{count(c)}</sup>
          </button>
        ))}
      </div>
    ) : null;

  return (
    <Section id={id} number={number} label={label} title={title} intro={intro} aside={filters}>
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((p) => (
          <ProjectRow key={p.title} project={p} index={projects.indexOf(p)} onOpen={() => setSelected(p)} />
        ))}
      </AnimatePresence>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={closeModal} />}</AnimatePresence>
    </Section>
  );
}
