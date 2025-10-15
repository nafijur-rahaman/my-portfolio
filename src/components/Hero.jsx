import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/profile.jpg";
export default function Hero() {
  const words = [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Specialist",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect
  useEffect(() => {
    let timeout;
    const word = words[currentWordIndex];
    let i = 0;

    const type = () => {
      if (i <= word.length) {
        setDisplayedText(word.slice(0, i));
        i++;
        timeout = setTimeout(type, 120);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          deleteText();
        }, 1500);
      }
    };

    const deleteText = () => {
      if (i >= 0) {
        setDisplayedText(word.slice(0, i));
        i--;
        timeout = setTimeout(deleteText, 50);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [currentWordIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 py-20">
      <div className="mx-auto max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left column: Text + Buttons + Stack */}
        <div className="md:col-span-7 flex flex-col justify-center gap-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100"
          >
            <span className="text-cyan-400">{displayedText}</span> <br />
            Building{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 animate-gradient-x">
              End-to-End
            </span>{" "}
            Web Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl"
          >
            I craft high-quality web applications from frontend to backend.
            Skilled in React, Node.js, Express, MongoDB, and more. I build
            scalable, maintainable, and beautiful full-stack projects that
            deliver real-world impact.
          </motion.p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 items-center mt-4">
            <Button href="#projects" className="inline-flex items-center">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </div>

          {/* Stack Badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Tailwind",
              "Node.js",
              "Express",
              "MongoDB",
              "Framer Motion",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-200 hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: Hero Image */}
        <div className="md:col-span-5 relative flex items-center justify-center">
        
          <div className="md:col-span-5 flex items-center justify-center z-10 relative">
      
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 blur-3xl opacity-40 animate-pulse pointer-events-none" />

            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-100 h-100 rounded-full overflow-hidden shadow-2xl"
            >
              <motion.img
                src={heroImage}
                alt="Full-Stack Developer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover rounded-full border-[3px] border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.6)]"
              />
            </motion.div>
          </div>

          {/* floating accent circle */}
          <div className="pointer-events-none absolute -right-8 -top-10 opacity-40">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="80"
                r="64"
                stroke="url(#g)"
                strokeWidth="6"
                opacity="0.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
