import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import useScrolled from "../hooks/useScrolled";

export default function ScrollToTop() {
  const show = useScrolled(600);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="bg-gradient-accent fixed right-6 bottom-6 z-40 grid h-12 w-12 place-items-center rounded-full text-on-accent shadow-lg shadow-accent/30 transition hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
