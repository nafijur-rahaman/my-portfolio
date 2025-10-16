import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaAws,
  FaLinux,
} from "react-icons/fa";

export default function SkillWheel() {
  const wheelRef = useRef(null);
  const controls = useAnimation();

  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: null },
    { name: "TypeScript", icon: null },
    { name: "Next.js", icon: null },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express", icon: null },
    { name: "Django REST", icon: null },
    { name: "GraphQL", icon: null },
    { name: "MongoDB", icon: <FaDatabase className="text-yellow-400" /> },
    { name: "PostgreSQL", icon: null },
    { name: "MySQL", icon: null },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Python", icon: <FaPython className="text-indigo-400" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-300" /> },
    { name: "Linux", icon: <FaLinux className="text-slate-400" /> },
    { name: "CI/CD", icon: null },
  ];

  // Center coordinates
  const radius = 180;

  // Animate the wheel rotation slowly
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { duration: 40, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <section className="py-32 bg-gray-950 text-slate-100 flex justify-center items-center">
      <motion.div
        ref={wheelRef}
        animate={controls}
        className="relative w-[400px] h-[400px] rounded-full flex items-center justify-center"
      >
        {/* Center Avatar / About */}
        <div className="absolute w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center text-xl font-semibold text-cyan-400 backdrop-blur-md border border-cyan-400/30">
          Me
        </div>

        {/* Skills */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.div
              key={skill.name}
              className="absolute flex flex-col items-center gap-1 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.3, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl">{skill.icon}</div>
              <span className="text-sm text-slate-200">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
