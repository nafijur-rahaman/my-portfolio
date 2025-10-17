import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        timeout = setTimeout(deleteText, 1500);
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

  // Particle generator
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      size: Math.random() * 6 + 2,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setParticles(p);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-visible min-h-screen flex items-center justify-center bg-gray-950 text-slate-100 px-6 md:px-12"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,255,255,0.7), transparent 70%)`,
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              filter: "blur(1px)",
            }}
            animate={{
              y: ["0vh", "-120vh"],
              opacity: [1, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Text Section */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="text-cyan-400">{displayedText}</span>
            <br />
            Building{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 animate-gradient-x">
              End-to-End
            </span>{" "}
            Web Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 max-w-2xl"
          >
            I design and build robust full-stack web apps with React, Django,
            and modern tech — blending performance, scalability, and aesthetic
            detail.
          </motion.p>

          <div className="flex gap-4 items-center mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold rounded-3xl shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              View Projects <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transition"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>

        {/* Right - Profile */}
        <div className="md:col-span-5 flex justify-center relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.4)]"
          >
            <motion.img
              src={heroImage}
              alt="Full-Stack Developer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
