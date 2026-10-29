import { experience } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Arrow from "./ui/Arrow";

export default function Experience({ id, number, label, title, intro }) {
  return (
    <Section id={id} number={number} label={label} title={title} intro={intro}>
      <ol>
        {experience.map((exp, i) => (
          <Reveal
            as="li"
            key={`${exp.company}-${exp.role}`}
            delay={i * 0.08}
            className="grid gap-6 border-t border-border py-10 last:border-b md:grid-cols-12"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-sm">{exp.period}</p>
              {(exp.type || exp.location) && (
                <p className="mt-1 text-sm text-muted">{[exp.type, exp.location].filter(Boolean).join(" · ")}</p>
              )}
            </div>

            <div className="md:col-span-6">
              <div className="flex items-center gap-4">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt=""
                    className="h-11 w-11 rounded-lg border border-border bg-white object-contain p-1.5"
                  />
                )}
                <div>
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">{exp.role}</h3>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-accent-ink"
                    >
                      {exp.company} <Arrow className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <p className="text-accent-ink">{exp.company}</p>
                  )}
                </div>
              </div>

              {exp.description && <p className="mt-6 leading-relaxed text-muted">{exp.description}</p>}

              {exp.achievements?.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex gap-4 text-muted">
                      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-fg/40" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="md:col-span-3">
              <p className="label mb-3">Stack</p>
              <p className="font-mono text-xs leading-6 text-muted">{exp.tech.join(" / ")}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
