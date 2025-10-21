import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import pimg from "../assets/image.png";
import triporaImg from "../assets/trioporaImg.png";
import donationImg from "../assets/donationImg.png";
import tuitionImg from "../assets/tuitionImg.png";
import lifesureImg from "../assets/lifesureProject.png";






const projectsData = [
  {
    title: "LifeSure – Modern Life Insurance Tech Platform",
    description:
      "LifeSure is a modern life insurance tech startup bringing transparency and trust to the industry. Users can explore policies, generate personalized quotes, connect with expert agents, manage their insurance digitally, and handle claims and payments through a seamless web platform.",
    image: lifesureImg,
    frontend: ["React.js", "Tailwind CSS", "Framer Motion", "React Slick", "Axios", "Firebase Auth"],
    backend: ["Node.js", "Express.js", "MongoDB", "JWT & Role-based Auth", "Stripe Payments"],
    demo: "https://lifesure-client.vercel.app/",
    githubFrontend: "https://github.com/nafijur-rahaman/Lifesure-Client",
    githubBackend: "https://github.com/nafijur-rahaman/Lifesure-Server",
    features: [
      "Policy Exploration with detailed descriptions",
      "Instant Quote Generation",
      "Agent Connect for calls or chat",
      "Dashboard Overview of policies, payments, and claims",
      "Secure Authentication (JWT & Role-based)",
      "Online Payments via Stripe",
      "Digital Policy Management",
      "Notifications & Reminders for premiums",
      "Responsive Design",
      "Claims Processing",
      "Admin Control Panel",
      "Analytics Dashboard"
    ]
  },
  {
    title: "Tuition Media Platform",
    description:
      "A platform connecting students with tutors for personalized learning experiences. Students can post tuition requests, browse tutor listings, give reviews, and manage profiles. Admins can manage users and tuition posts.",
    image: tuitionImg,
    frontend: ["HTML5", "CSS", "Bootstrap", "JavaScript", "AJAX","jQuery","js libraries"],
    backend: ["Django REST Framework", "PostgreSQL","Token & Role-based Auth", "docker","Cloudinary"],
    demo: "https://tuitionmedia.netlify.app/",
    githubFrontend: "https://github.com/nafijur-rahaman/Tution-Media-platform-frontend",
    githubBackend: "https://github.com/nafijur-rahaman/Tution-Media-Platform-Backend-",
    features: [
      "User Authentication & Role-based Access",
      "Profile Management for Students and Tutors",
      "Create and Manage Tuition Posts",
      "Tutor Listings with Search & Filters",
      "Reviews & Ratings",
      "Admin Management of Users and Posts",
      "Responsive Design"
    ]
  },
  {
    title: "Tripora – Travel Package Management",
    description:
      "A full-stack travel package management system with React + Tailwind CSS frontend and Node.js + Express + MongoDB + Firebase backend. Features secure user authentication, CRUD for travel packages, booking management, category management, and smooth animations.",
    image: triporaImg,
    frontend: ["React", "Tailwind CSS", "Framer Motion", "React Slick", "Axios", "React Router"],
    backend: ["Node.js", "Express.js", "MongoDB Atlas", "Firebase Admin", "JWT-based Token Auth"],
    demo: "https://tripora-frontend.vercel.app",
    githubFrontend: "https://github.com/nafijur-rahaman/Tripora-Frontend",
    githubBackend: "https://github.com/nafijur-rahaman/Tripora-Backend",
    features: [
      "User Authentication with Firebase",
      "CRUD Operations for Travel Packages",
      "Package Booking Management",
      "Category Management",
      "Token-protected APIs",
      "Responsive Frontend",
      "Smooth Animations",
      "Interactive Carousels"
    ]
  },
  {
  title: "Donation Platform",
  description:
    "A platform enabling users to browse donation campaigns, make contributions, and track donation history. Donors, campaign organizers, and admins can securely manage accounts and campaigns, with integrated payment processing for smooth transactions.",
  image: donationImg,
  frontend: ["HTML5", "Tailwind CSS", "JavaScript", "AJAX", "jQuery", "js libraries"],
  backend: ["Django", "PostgreSQL", "Cloudinary", "docker",  "SSLCommerz Payment Integration"],
  demo: "https://donation-platform.netlify.app/",
  githubFrontend: "https://github.com/nafijur-rahaman/Donation-platofrm-frontend",
  githubBackend: "https://github.com/nafijur-rahaman/Donation-platform-backend",
  features: [
    "User Authentication with role-based access (Donor, Organizer, Admin)",
    "Create, update, delete, and manage donation campaigns",
    "Browse and filter campaigns with progress tracking",
    "Secure donation processing via SSLCommerz",
    "Donation History tracking with receipts",
    "Responsive design for mobile, tablet, and desktop",
    "Cloud storage for campaign media via Cloudinary",
    "Scalable API to handle high traffic and transactions"
  ]
}

];


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Particle effect (unchanged)
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

      ctx.fillStyle = "rgba(100, 200, 255, 0.3)";
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
  id="projects"
  className="py-36 bg-gray-950 text-slate-100 relative overflow-hidden"
>
  <canvas
    id="projectParticles"
    className="absolute inset-0 pointer-events-none"
  ></canvas>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide mb-20 text-center">
      My Projects
    </h2>

    {/* Projects Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {projectsData.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: idx * 0.2, duration: 0.7 }}
          className="flex flex-col"
        >
          <motion.div
            className="relative bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-lg rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full min-h-[400px]"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 40px rgba(0, 255, 255, 0.2), 0 10px 20px rgba(0, 255, 255, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-t-3xl z-10">
              <img
                src={project.image || pimg}
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
            <motion.div className="p-5 sm:p-6 flex flex-col flex-1 justify-between relative z-10">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base line-clamp-3 mt-2">
                  {project.description.slice(0, 40)}...
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-4 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-md 
                               bg-slate-100/10 hover:bg-cyan-400/20 
                               text-cyan-400 font-medium text-sm sm:text-base transition w-full sm:w-auto"
                  >
                    Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-md 
                               bg-slate-100/10 hover:bg-green-400/20 
                               text-green-400 font-medium text-sm sm:text-base transition w-full sm:w-auto"
                  >
                    Frontend Code <FaGithub className="w-3 h-3" />
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-md 
                               bg-slate-100/10 hover:bg-green-400/20 
                               text-green-400 font-medium text-sm sm:text-base transition w-full sm:w-auto"
                  >
                    Backend Code <FaGithub className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* Modal */}
    {selectedProject && (
      <div
        className="fixed inset-0 bg-black/60 z-[9999] flex items-end md:items-start justify-center pt-32 md:pt-24"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="bg-gray-900 rounded-t-3xl  w-[300px] sm:w-[56rem] max-h-[calc(100vh-6rem)] overflow-y-auto shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Project Image */}
          <div className="relative w-full h-40 md:h-56 overflow-hidden rounded-t-3xl">
            <img
              src={selectedProject.image || pimg}
              alt={selectedProject.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black bg-cyan-400 w-8 h-8 rounded-full font-bold hover:bg-white hover:text-black flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            ×
          </button>

          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-slate-300 mb-4">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.frontend.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs md:text-sm rounded-full bg-cyan-400/20 text-cyan-400 font-medium"
                >
                  {tech}
                </span>
              ))}
              {selectedProject.backend.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs md:text-sm rounded-full bg-green-400/20 text-green-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            {selectedProject.features && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-slate-100 mb-2">
                  Features
                </h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1 max-h-40 overflow-y-auto pr-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm transition"
                >
                  Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              )}
              {selectedProject.githubFrontend && (
                <a
                  href={selectedProject.githubFrontend}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition"
                >
                  Frontend Code <FaGithub className="w-3 h-3" />
                </a>
              )}
              {selectedProject.githubBackend && (
                <a
                  href={selectedProject.githubBackend}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition"
                >
                  Backend Code <FaGithub className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </div>
</section>

  );
}
