import React from "react";

export default function Button({ href, onClick, children, variant = "solid", className = "" }) {
  const base = "inline-flex items-center gap-3 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-500/50";
  const styles = {
    solid: "bg-cyan-400 text-slate-900 shadow-lg hover:bg-cyan-300",
    ghost: "bg-transparent border border-slate-700 text-slate-200 hover:bg-white/5"
  };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
