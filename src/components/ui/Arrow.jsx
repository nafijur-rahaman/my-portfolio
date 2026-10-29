import { ArrowUpRight } from "lucide-react";

// Diagonal arrow that nudges up-right when its parent `group` is hovered.
export default function Arrow({ className = "h-4 w-4" }) {
  return (
    <ArrowUpRight
      aria-hidden
      className={`${className} shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5`}
    />
  );
}
