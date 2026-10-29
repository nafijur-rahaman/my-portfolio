import { skills } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function Skills({ id, number, label, title, intro }) {
  return (
    <Section id={id} number={number} label={label} title={title} intro={intro}>
      <div>
        {skills.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className="grid gap-5 border-t border-border py-8 last:border-b md:grid-cols-12"
          >
            <h3 className="font-display text-3xl md:col-span-3">{group.title}</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:col-span-9 lg:grid-cols-4">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  style={{ "--brand": color ?? "var(--fg)" }}
                  className="group flex items-center gap-3 text-[15px]"
                >
                  {Icon && (
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface transition group-hover:border-[var(--brand)]">
                      <Icon className="h-[18px] w-[18px] text-muted transition group-hover:text-[var(--brand)]" aria-hidden />
                    </span>
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
