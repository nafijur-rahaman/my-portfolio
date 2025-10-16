import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaBriefcase, FaDatabase, FaPython, FaNodeJs, FaAws } from "react-icons/fa";
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
    tech: ["Django REST", "PostgreSQL", "Python", "AWS"],
    color: "from-orange-400 to-amber-400",
  },
];

export default function Experience() {
  useEffect(() => {
    const canvas = document.getElementById("expParticles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
  }, []);

  return (
    <section id="experience" className="relative py-32 bg-gray-950 text-slate-100">
      <canvas
        id="expParticles"
        className="absolute inset-0 pointer-events-none"
      ></canvas>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide mb-16 text-center">
          Experience
        </h2>

        <div className="relative border-l-2 border-slate-700 ml-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative group"
            >
              {/* Timeline icon */}
              <div
                className={`absolute -left-7 top-1 w-12 h-12 flex items-center justify-center rounded-full shadow-xl bg-gradient-to-r ${exp.color}`}
              >
                <FaBriefcase className="text-white w-6 h-6" />
              </div>

              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
              >
                <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-xl rounded-2xl p-7 shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-cyan-500/30">
                  {/* Header: Logo + Title */}
                  <div className="flex items-center gap-4 mb-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain rounded-md bg-slate-800 p-1 border border-slate-700"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-slate-400">{exp.company}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <p className="text-sm text-slate-500 mb-3">{exp.period}</p>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech) => {
                      let Icon;
                      switch (tech) {
                        case "React":
                          Icon = FaLaptopCode;
                          break;
                        case "Node.js":
                          Icon = FaNodeJs;
                          break;
                        case "Python":
                          Icon = FaPython;
                          break;
                        case "AWS":
                          Icon = FaAws;
                          break;
                        case "PostgreSQL":
                        case "Django REST":
                          Icon = FaDatabase;
                          break;
                        default:
                          Icon = null;
                      }
                      return (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                          className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 font-medium ${
                            Icon
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                              : "bg-gray-800 text-slate-200"
                          }`}
                        >
                          {Icon && <Icon className="text-sm" />}
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>

                  {/* Category Tag */}
                  <span
                    className={`inline-block mt-4 px-3 py-1 text-xs rounded-full font-medium text-white bg-gradient-to-r ${exp.color}`}
                  >
                    {exp.category}
                  </span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
