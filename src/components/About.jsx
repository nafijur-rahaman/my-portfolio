import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Framer Motion" },
      { name: "Next.js" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express" },
      { name: "NestJS" },
      { name: "GraphQL" },
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
      { name: "CI/CD" },
      { name: "AWS" },
    ],
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Tech",
    period: "2023 - 2027",
  },
  {
    degree: "CSE Fundamental With Phitron",
    institution: "Phitron",
    period: "2023 - 2024",
  },
  {
    degree: "Complete Web Development Course",
    institution: "Programming Hero",
    period: "2024 - 2025",
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide">
            About Me
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Hey, I’m <span className="text-cyan-400 font-semibold">Tanjid</span>. I specialize in building full-stack applications that are clean, scalable, and user-friendly. I take pride in writing readable, maintainable code that stands the test of time.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            My approach is a mix of solid fundamentals and modern tools—React, Node.js, Tailwind CSS, and more. I’m always exploring new ways to enhance performance, improve UX, and create elegant solutions for complex problems.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold border-b-2 border-cyan-400 inline-block pb-1">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors">
                      {skill.icon && <span className="text-xl">{skill.icon}</span>}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold border-b-2 border-cyan-400 inline-block pb-1">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-5 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-100">{edu.degree}</h3>
                <span className="text-sm text-slate-400">{edu.institution} | {edu.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
