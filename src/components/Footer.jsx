import { ArrowUp } from "lucide-react";
import { footer, profile, socials } from "../portfolio.config";
import useLocalTime from "../hooks/useLocalTime";

export default function Footer() {
  const time = useLocalTime(profile.timezone);
  const name = profile.name.replace(/^Md\.\s*/, "");

  return (
    <footer className="overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="grid gap-8 text-sm md:grid-cols-12">
          <p className="text-muted md:col-span-3">© {new Date().getFullYear()} {profile.name}</p>
          <p className="text-muted md:col-span-4">{footer.tagline}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:col-span-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-start justify-between gap-4 md:col-span-2 md:justify-end">
            {time && <span className="font-mono text-xs text-muted md:hidden">{time}</span>}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 transition hover:text-accent-ink"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-16 -mb-[0.12em] font-display text-[clamp(3.2rem,12.5vw,13rem)] leading-[0.85] tracking-[-0.03em] whitespace-nowrap select-none"
        >
          {name}
          <span className="text-accent">.</span>
        </p>
      </div>
    </footer>
  );
}
