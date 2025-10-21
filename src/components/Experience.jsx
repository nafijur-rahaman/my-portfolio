import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import ethicaldenLogo from "../assets/ethicalden.png";

const experiences = [
  {
    title: "Junior Backend Developer",
    company: "Ethical Den",
    logo: ethicaldenLogo,
    period: "March 2025 - Present",
    description:
      "Worked on Django, Django REST framework, APIs, database integration with PostgreSQL, and implementing RESTful endpoints for internal applications.",
    category: "Backend",
    tech: ["Django REST", "PostgreSQL", "Python", "Firebase", "WebSockets", "MySQL", "OAuth", "Git"],
    color: "from-orange-400 to-amber-400",
  },
];

export default function Experience() {
  const canvasRef = useRef(null);

  // Canvas Particle Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(100, 200, 255, 0.2)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section id="experience" className="relative py-32 bg-gray-950 text-slate-100">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide mb-16 text-center">
          Experience
        </h2>

        <div className="relative border-l-2 border-slate-700 ml-6 md:ml-10">
          {experiences.map((exp, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { amount: 0.3 });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start({
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                });
              } else {
                controls.start({ opacity: 0, x: -60 });
              }
            }, [inView, controls]);

            return (
              <motion.div
                key={index}
                ref={ref}
                animate={controls}
                className="mb-12 relative group"
              >
                {/* Timeline Icon */}
                <div
                  className={`absolute -left-7 top-1 w-12 h-12 flex items-center justify-center rounded-full shadow-xl bg-gradient-to-r ${exp.color}`}
                >
                  <FaBriefcase className="text-white w-6 h-6" />
                </div>

                <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-xl rounded-2xl p-7 ml-6 shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-cyan-500/30">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain rounded-md bg-slate-800 p-1 border border-slate-700"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100 leading-tight">{exp.title}</h3>
                      <p className="text-sm text-slate-400">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-3">{exp.period}</p>

                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                        className="px-3 py-1 text-xs rounded-full font-medium bg-green-400/20 text-green-400"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <span
                    className={`inline-block mt-4 px-3 py-1 text-xs rounded-full font-medium text-white bg-gradient-to-r ${exp.color}`}
                  >
                    {exp.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
