import { theme } from "../portfolio.config";

const noise =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Subtle paper/film grain over the whole page.
export default function Grain() {
  if (!theme.grain) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-screen"
      style={{ backgroundImage: noise }}
    />
  );
}
