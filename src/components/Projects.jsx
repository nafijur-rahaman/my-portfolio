import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import pimg from "../assets/image.png";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce site with payment integration, admin dashboard, user authentication, and responsive design. Optimized for performance and SEO.",
    image: pimg,
    frontend: ["React", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
    category: "Full-Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio to showcase projects, blogs, skills, and resume download. Fully responsive with smooth animations and light/dark mode support.",
    image: "/assets/project2.jpg",
    frontend: ["React", "Tailwind CSS", "Framer Motion"],
    backend: [],
    demo: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "Task Manager API",
    description:
      "RESTful API for task management with JWT authentication, role-based access, and PostgreSQL database integration. Deployed with Docker for easy scalability.",
    image: "/assets/project3.jpg",
    frontend: [],
    backend: ["Django REST", "PostgreSQL", "Docker"],
    demo: "#",
    github: "#",
    category: "Backend",
  },
];

const categories = ["All", "Frontend", "Backend", "Full-Stack"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  // Particle effect
  useEffect(() => {
    const canvas = document.getElementById("projectParticles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.fillStyle = "rgba(100, 200, 255, 0.3)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Move particles
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Update canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="py-32 bg-gray-950 text-slate-100 relative overflow-hidden">
      <canvas
        id="projectParticles"
        className="absolute inset-0 pointer-events-none"
      ></canvas>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-12">
          My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-xl font-semibold ${
                filter === cat
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-gray-800 text-slate-300 hover:bg-cyan-400/30"
              } transition`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#06b6d4"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-lg rounded-3xl overflow-hidden cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 25px 50px rgba(0, 255, 255, 0.3), 0 15px 30px rgba(0, 255, 255, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Glow Under Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-4 -bottom-4 h-8 rounded-full bg-cyan-400/20 blur-3xl z-0"
                  />

                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-3xl z-10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg rounded-t-3xl z-20"
                    >
                      Click to view details
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <motion.div
                    className="p-6 flex flex-col gap-4 relative z-10"
                  >
                    <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-3">{project.description}</p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.frontend.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                          className="px-3 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-400 font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.backend.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                          className="px-3 py-1 text-xs rounded-full bg-green-400/20 text-green-400 font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-4 flex gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100/10 hover:bg-cyan-400/20 text-cyan-400 font-medium text-sm transition"
                        >
                          Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100/10 hover:bg-green-400/20 text-green-400 font-medium text-sm transition"
                        >
                          View Code <FaGithub className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-3xl p-6 max-w-3xl w-full relative"
            >
              <button
                className="absolute top-4 right-4 text-slate-200 text-2xl font-bold hover:text-cyan-400"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold text-slate-100">
                {selectedProject.title}
              </h3>
              <p className="text-slate-300 mt-2">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {selectedProject.backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-green-400/20 text-green-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100/10 hover:bg-cyan-400/20 text-cyan-400 font-medium text-sm transition"
                  >
                    Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100/10 hover:bg-green-400/20 text-green-400 font-medium text-sm transition"
                  >
                    View Code <FaGithub className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
