const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  solid: "bg-fg text-bg hover:bg-accent hover:text-white",
  accent: "bg-accent text-white hover:brightness-110",
  outline: "border border-border text-fg hover:border-fg",
  ghost: "text-muted hover:text-fg",
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
