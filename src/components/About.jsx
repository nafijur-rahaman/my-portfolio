import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaAws,
  FaLinux,
  FaDownload,
} from "react-icons/fa";

export default function About() {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS" },
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "Framer Motion" },
        { name: "Redux" },
        { name: "SASS" },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express" },
        { name: "NestJS" },
        { name: "Django REST" },
        { name: "GraphQL" },
        { name: "Python", icon: <FaPython className="text-indigo-400" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <FaDatabase className="text-yellow-400" /> },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Redis" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "AWS", icon: <FaAws className="text-yellow-300" /> },
        { name: "Linux", icon: <FaLinux className="text-slate-400" /> },
        { name: "CI/CD" },
      ],
    },
  ];

  const timelineData = [
    {
      year: "2023",
      title: "Started CSE Journey",
      description:
        "Began my Computer Science degree and explored web tech like HTML, CSS & JS.",
    },
    {
      year: "2024",
      title: "Full Stack Dive",
      description:
        "Built MERN projects, completed 'Complete Web Development Course', gained hands-on experience.",
    },
    {
      year: "2025",
      title: "Backend & AI Integration",
      description:
        "Mastered Django REST + Node.js, began AI integration with ChatGPT & Gemini SDKs.",
    },
    {
      year: "Future",
      title: "Building Impactful Products",
      description:
        "Focusing on scalable, AI-powered apps that solve real-world problems.",
    },
  ];

  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
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
      ctx.fillStyle = "rgba(100, 200, 255, 0.35)";
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
    <section
      id="about"
      className="relative py-32 bg-gray-950 text-slate-100 overflow-hidden"
    >
      {/* Particle Background */}
      <canvas
        id="particleCanvas"
        className="absolute inset-0 pointer-events-none"
      ></canvas>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left - About */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Hey, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                Tanjid
              </span>{" "}
              — a passionate full-stack developer creating smooth, scalable web
              applications that feel effortless and run like magic.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Fluent in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                React
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                Django REST
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                MySQL
              </span>
              , and cloud tools like{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                AWS
              </span>
              .
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              When I'm not coding, I explore AI integrations, optimize
              workflows, and contribute to open-source projects. Always excited
              to learn new technologies and solve real-world problems!
            </p>

            {/* Resume Button */}
            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                {category.title}
              </h4>

              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-slate-200 shadow-sm cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      boxShadow: "0px 8px 15px rgba(0, 255, 255, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-32 max-w-5xl mx-auto px-6"
      >
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          My Journey
        </h3>
        <div className="relative border-l-2 border-cyan-500/20 ml-4">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-12 pl-8 relative"
            >
              <div className="absolute -left-3 top-1 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
              <h4 className="text-2xl font-semibold text-slate-100">
                {item.title}
              </h4>
              <span className="text-cyan-400 text-sm font-medium">
                {item.year}
              </span>
              <p className="text-slate-400 mt-2 leading-relaxed max-w-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
