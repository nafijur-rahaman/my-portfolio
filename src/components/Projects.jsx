import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt"; // npm install react-parallax-tilt
import pimg from "../assets/image.png";

const projects = [
  {
    name: "ProFast CRM",
    description: "Full-stack CRM platform with real-time analytics and dashboard.",
    image: pimg,
    frontend: ["React", "Tailwind", "Framer Motion"],
    backend: ["Node.js", "Express", "MongoDB"],
    live: "https://profast.example.com",
    code: "https://github.com/tanjid/profast",
  },
  {
    name: "TaskMaster",
    description: "Task management app with user authentication, roles & notifications.",
    image: "/projects/taskmaster.png",
    frontend: ["React", "Redux", "Tailwind"],
    backend: ["Node.js", "Express", "PostgreSQL"],
    live: "https://taskmaster.example.com",
    code: "https://github.com/tanjid/taskmaster",
  },
  {
    name: "Blogify",
    description: "Full-stack blogging platform with markdown editor and comments.",
    image: "/projects/blogify.png",
    frontend: ["Next.js", "Tailwind", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB"],
    live: "https://blogify.example.com",
    code: "https://github.com/tanjid/blogify",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gray-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2  tracking-wide">Projects</h2>

        {/* Grid of projects */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#06b6d4"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
              >
                <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
                    <p className="text-slate-300 text-sm">{project.description}</p>

                    {/* Animated Gradient Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.frontend.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-white font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.backend.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-green-400 to-amber-400 text-white font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-4 flex gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100/10 hover:bg-cyan-400/20 text-cyan-400 font-medium text-sm transition"
                      >
                        Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100/10 hover:bg-green-400/20 text-green-400 font-medium text-sm transition"
                      >
                        View Code <FaGithub className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Optional Modal / Lightbox */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-gray-900 rounded-3xl p-6 max-w-3xl w-full relative">
              <button
                className="absolute top-4 right-4 text-slate-200 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold text-slate-100">{selectedProject.name}</h3>
              <p className="text-slate-300 mt-2">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.frontend.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-white font-medium">
                    {tech}
                  </span>
                ))}
                {selectedProject.backend.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-green-400 to-amber-400 text-white font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
