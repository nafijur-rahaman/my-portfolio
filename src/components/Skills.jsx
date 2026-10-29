import { skills } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      description="The languages, frameworks and tools I use to take products from idea to production."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08} className="card p-6">
            <h3 className="mb-5 font-mono text-sm tracking-widest text-accent-ink uppercase">{group.title}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  style={{ "--brand": color ?? "var(--accent)" }}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-3.5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
                >
                  {Icon && (
                    <Icon className="h-4 w-4 text-muted transition group-hover:text-[var(--brand)]" aria-hidden />
                  )}
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
