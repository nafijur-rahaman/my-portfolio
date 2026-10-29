import { about, profile } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import RichText from "./ui/RichText";
import Button from "./ui/Button";
import Arrow from "./ui/Arrow";

export default function About({ id, number, label, title, intro }) {
  const [lead, ...rest] = about.paragraphs;

  return (
    <Section id={id} number={number} label={label} title={title} intro={intro}>
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <figure>
            <img
              src={profile.image}
              alt={profile.name}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-xs rounded-md object-cover"
            />
            <figcaption className="label mt-3">
              {profile.name}
              {profile.location && <>, {profile.location}</>}
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-9">
          <Reveal as="p" className="max-w-3xl text-2xl leading-snug tracking-tight text-muted md:text-[2rem]">
            <RichText text={lead} />
          </Reveal>
          <div className="mt-10 grid max-w-3xl gap-6 text-lg leading-relaxed text-muted md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal as="p" key={i} delay={0.1 + i * 0.1}>
                <RichText text={p} />
              </Reveal>
            ))}
          </div>
          {profile.resume && (
            <Reveal delay={0.2} className="mt-10">
              <Button href={profile.resume} target="_blank" rel="noopener noreferrer" variant="outline">
                View full résumé <Arrow className="h-3.5 w-3.5" />
              </Button>
            </Reveal>
          )}

          {about.stats?.length > 0 && (
            <dl className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-3">
              {about.stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.08}
                  className="border-b border-border py-6 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
                >
                  <dd className="font-display text-6xl leading-none">{s.value}</dd>
                  <dt className="mt-3 text-sm text-muted">{s.label}</dt>
                </Reveal>
              ))}
            </dl>
          )}
        </div>
      </div>

      {about.services?.length > 0 && (
        <div className="mt-28 grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">{about.servicesTitle}</p>
          <ol className="md:col-span-9">
            {about.services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 0.08}
                className="grid gap-3 border-t border-border py-7 last:border-b md:grid-cols-9 md:gap-6"
              >
                <span className="font-mono text-xs text-subtle md:col-span-1 md:pt-3">0{i + 1}</span>
                <h3 className="font-display text-3xl md:col-span-4 md:text-4xl">{s.title}</h3>
                <p className="leading-relaxed text-muted md:col-span-4 md:pt-2">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      )}

      {about.journey?.length > 0 && (
        <div className="mt-28 grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">{about.journeyTitle}</p>
          <ol className="md:col-span-9">
            {about.journey.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.06}
                className="grid gap-2 border-t border-border py-6 last:border-b md:grid-cols-9 md:gap-6"
              >
                <span className="font-mono text-sm text-accent-ink md:col-span-1">{item.year}</span>
                <h3 className="font-medium md:col-span-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-4">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
