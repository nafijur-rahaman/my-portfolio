import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import ethicaldenLogo from "../assets/ethicalden.png";
const experiences = [
  
  {
    title: "Junior Backend Developer",
    company: "Ethical Den",
    logo: ethicaldenLogo,
    period: "March 2025 - Present",
    description:
      "Worked on Django, Django rest framework, APIs, database integration with PostgreSQL, and implementing RESTful endpoints for internal applications.",
    category: "Backend",
    color: "from-orange-400 to-amber-400",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide mb-12">
          Experience
        </h2>

        <div className="relative border-l-2 border-slate-700 ml-10 ">
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

              {/* Experience card */}
              <div className="bg-gradient-to-br  from-black/60 via-black/40 to-black/50 backdrop-blur-xl rounded-2xl p-7 shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-cyan-500/20">
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

                {/* Category Tag */}
                <span
                  className={`inline-block mt-4 px-3 py-1 text-xs rounded-full font-medium text-white bg-gradient-to-r ${exp.color}`}
                >
                  {exp.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
