import { Briefcase, Check } from "lucide-react";
import { experience } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Tag from "./ui/Tag";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-8 border-l border-border pl-8 md:pl-10">
        {experience.map((exp, i) => (
          <Reveal as="li" key={`${exp.company}-${exp.role}`} delay={i * 0.1} className="relative">
            <span className="bg-gradient-accent absolute top-6 -left-[calc(2rem+1.25rem+0.5px)] grid h-10 w-10 place-items-center rounded-full text-on-accent shadow-lg ring-4 ring-bg md:-left-[calc(2.5rem+1.25rem+0.5px)]">
              <Briefcase className="h-4 w-4" />
            </span>

            <article className="card p-6 transition hover:border-accent/40 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt=""
                      className="h-12 w-12 rounded-xl border border-border bg-white object-contain p-1.5"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted">
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-ink">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                      {exp.type && <span> · {exp.type}</span>}
                      {exp.location && <span> · {exp.location}</span>}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>

              {exp.description && <p className="mt-5 leading-relaxed text-muted">{exp.description}</p>}

              {exp.achievements?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-muted">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
