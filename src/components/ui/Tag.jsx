export default function Tag({ children, tone = "accent" }) {
  const tones = {
    accent: "bg-accent/10 text-accent-ink border-accent/20",
    neutral: "bg-surface-2 text-muted border-border",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
