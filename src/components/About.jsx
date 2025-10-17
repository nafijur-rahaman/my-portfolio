import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaLinux,
  FaDownload,
} from "react-icons/fa";
import tailicon from "../assets/tailwindicon.png"
import nextjsicon from "../assets/nextjsicon.png"
import tsicon from "../assets/typescripticon.png"
import djicon from "../assets/djicon.png"
import exicon from "../assets/exicon.png"
import mysqlicon from "../assets/mysqlicon.png"
import psqlicon from "../assets/psqlicon.png"


export default function About() {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <img src={tailicon} alt="Tailwind CSS" className="w-5 h-5"/> },
        { name: "TypeScript", icon: <img src={tsicon} alt="TypeScript" className="w-5 h-5"/> },
        { name: "Next.js", icon: <img src={nextjsicon} alt="Next.js" className="w-5 h-5"/> },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Python", icon: <FaPython className="text-indigo-400" /> },
        { name: "Django REST", icon: <img src={djicon} alt="Django REST" className="w-5 h-5"/> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express.js", icon: <img src={exicon} alt="Express.js" className="w-5 h-5"/> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <img src={psqlicon} alt="PostgreSQL" className="w-5 h-5"/> },
        { name: "MySQL", icon: <img src={mysqlicon} alt="MySQL" className="w-5 h-5"/> },
        { name: "MongoDB", icon: <FaDatabase className="text-yellow-400" /> },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "Linux", icon: <FaLinux className="text-slate-400" /> },
        { name: "Docker(Basic)", icon: <FaDocker className="text-blue-400" /> },
        { name: "CI/CD(github actions)" },
      ],
    },
  ];

const timelineData = [
  {
    year: "2023",
    title: "Started CSE Journey",
    description:
      "Began my Bachelor of Computer Science degree at Bangladesh University of Business and Technology (BUBT).",
  },
  {
    year: "2024",
    title: "CSE Fundamentals With Phitron",
    description:
      "Learned Basic Programming, Data Structures, Algorithms, OOP, Database, Django, and Django REST Framework backend foundation.",
  },
  {
    year: "2025",
    title: "Complete Web Development With Programming Hero",
    description:
      "Mastered MERN stack development.",
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

    // Full viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 70 }, () => ({
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="relative py-5 bg-gray-950 text-slate-100 overflow-hidden"
    >
      {/* Full-Page Particle Background */}
      <canvas
        id="particleCanvas"
        className="fixed inset-0 pointer-events-none z-0"
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
            <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide mb-16 text-center">
              About Me
            </h2>
<p className="text-lg text-slate-300 leading-relaxed">
  Hi, I’m{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
    Nafis
  </span>
  ! I’m a full-stack developer who loves turning ideas into smooth, scalable web applications. I focus on making apps that just work—efficient, reliable, and a joy to use.
</p>
<p className="text-lg text-slate-400 leading-relaxed">
  Over the years, I’ve built my skills in{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
    React
  </span>
  ,{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
    Django REST
  </span>
  ,{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
    Node.js
  </span>
  , and{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
    MySQL
  </span>
  . I enjoy learning new technologies and figuring out how they can solve real problems.
</p>
<p className="text-lg text-slate-400 leading-relaxed">
  When I’m not coding, you’ll find me exploring AI integrations, contributing to open-source projects, or just tinkering with ways to make workflows smarter and faster. I’m excited to join teams where I can grow, collaborate, and create products that make an impact.
</p>


            {/* Resume Button */}
            <a
              href="/Md. Nafijur Rahaman (Full).pdf"
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
                    {skill.icon && (
                      <span className="text-xl">{skill.icon}</span>
                    )}
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
        className="relative mt-32 max-w-5xl mx-auto px-6 z-10"
      >
        <div className="flex justify-center mb-16">
          <h3 className="text-4xl font-bold border-b-4 border-cyan-400 pb-2 tracking-wide">
            My Journey
          </h3>
        </div>

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
