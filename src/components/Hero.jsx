import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { experience, hero, profile, sections } from "../portfolio.config";
import useLocalTime from "../hooks/useLocalTime";
import Button from "./ui/Button";
import RichText from "./ui/RichText";

const ease = [0.2, 0.7, 0.2, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const time = useLocalTime(profile.timezone);
  const current = experience.find((e) => /present/i.test(e.period));

  const meta = [
    profile.location && ["Based in", profile.location],
    current && ["Currently", `${current.role} at ${current.company}`],
    time && ["Local time", `${time} (GMT${tzOffset(profile.timezone)})`],
  ].filter(Boolean);

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col justify-end pt-28 pb-10 md:pt-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.div {...rise(0)} className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 md:mb-10">
          <span className="label">
            {profile.name} — {profile.title}
          </span>
          {profile.availability && (
            <span className="label flex items-center gap-2 !text-fg">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </span>
          )}
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="max-w-6xl font-display text-[clamp(2.9rem,8.2vw,8rem)] leading-[0.95] tracking-[-0.02em]"
        >
          <RichText text={hero.headline} highlightClassName="italic text-accent" />
        </motion.h1>

        <div className="mt-14 grid gap-10 border-t border-border pt-8 md:mt-20 md:grid-cols-12">
          <motion.div {...rise(0.3)} className="md:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-muted">{hero.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {hero.primaryCta && <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>}
              {hero.secondaryCta && (
                <Button href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </Button>
              )}
            </div>
          </motion.div>

          <motion.dl {...rise(0.4)} className="grid content-start gap-5 md:col-span-4 md:col-start-7">
            {meta.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 text-sm">
                <dt className="label pt-0.5">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div {...rise(0.5)} className="hidden md:col-span-2 md:flex md:flex-col md:items-end md:justify-between">
            <img
              src={profile.image}
              alt={profile.name}
              width="160"
              height="200"
              fetchPriority="high"
              className="aspect-[4/5] w-full max-w-[9rem] rounded-md object-cover grayscale transition duration-500 hover:grayscale-0"
            />
            {sections[0] && (
              <a href={`#${sections[0].id}`} className="label mt-6 flex items-center gap-2 hover:!text-fg">
                Scroll <ArrowDown className="h-3 w-3" />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function tzOffset(timeZone) {
  try {
    const part = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "shortOffset" })
      .formatToParts(new Date())
      .find((p) => p.type === "timeZoneName");
    return part.value.replace("GMT", "") || "+0";
  } catch {
    return "";
  }
}
