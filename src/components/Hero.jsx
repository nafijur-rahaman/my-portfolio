import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { hero, profile, sections, socials } from "../portfolio.config";
import Button from "./ui/Button";
import RichText from "./ui/RichText";

function useTypewriter(words, { type = 90, erase = 45, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? erase : type;
    if (!deleting && text === word) delay = hold;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, type, erase, hold]);

  return text;
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  const role = useTypewriter(hero.roles);

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:grid-cols-12">
        <div className="md:col-span-7">
          {profile.availability && (
            <motion.div
              {...fadeUp(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>
          )}

          <motion.p {...fadeUp(0.1)} className="font-mono text-base text-accent-ink sm:text-lg">
            Hi, I'm {profile.shortName} —{" "}
            <span className="text-fg">{role}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-accent" />
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="mt-4 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <RichText text={hero.headline} highlightClassName="text-gradient" />
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            {hero.primaryCta && (
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {hero.secondaryCta && (
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            )}
            <div className="ml-1 flex items-center gap-1 md:hidden">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:text-accent-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {hero.stats?.length > 0 && (
            <motion.dl {...fadeUp(0.5)} className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {hero.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="text-gradient text-3xl font-bold">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto md:col-span-5"
        >
          <div className="bg-gradient-accent absolute -inset-4 rounded-[2.5rem] opacity-30 blur-2xl" />
          <div className="bg-gradient-accent relative rounded-[2.2rem] p-[2px]">
            <img
              src={profile.image}
              alt={profile.name}
              width="400"
              height="480"
              fetchPriority="high"
              className="aspect-[5/6] w-64 rounded-[2.1rem] bg-surface object-cover sm:w-80 lg:w-96"
            />
          </div>
          {profile.location && (
            <div className="card absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 !bg-surface px-4 py-2 text-sm whitespace-nowrap shadow-lg">
              <MapPin className="h-4 w-4 text-accent-ink" /> {profile.location}
            </div>
          )}
        </motion.div>
      </div>

      {sections[0] && (
      <a
        href={`#${sections[0].id}`}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-subtle transition hover:text-fg md:block"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
      )}
    </section>
  );
}
