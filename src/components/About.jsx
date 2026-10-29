import { Download, Sparkles } from "lucide-react";
import { about, profile } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import RichText from "./ui/RichText";
import Button from "./ui/Button";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              <RichText text={p} />
            </p>
          ))}
          {profile.resume && (
            <Button href={profile.resume} download variant="outline" className="!mt-8">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          )}
        </Reveal>

        <div className="grid gap-4 lg:col-span-2">
          {about.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1} className="card flex gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-ink">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {about.journey?.length > 0 && (
        <div className="mt-24">
          <Reveal as="h3" className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">
            {about.journeyTitle}
          </Reveal>
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.journey.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.1} className="card relative p-6">
                <span className="text-gradient font-mono text-sm font-semibold">{item.year}</span>
                <h4 className="mt-2 font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
