const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  solid:
    "bg-gradient-accent text-on-accent shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5",
  outline: "border border-border bg-surface/50 text-fg hover:border-accent hover:text-accent-ink",
  ghost: "text-muted hover:text-fg hover:bg-surface-2",
};

export default function Button({ href, variant = "solid", className = "", children, external, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const ext = external ?? /^https?:\/\//.test(href);
    return (
      <a href={href} className={cls} {...(ext && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
