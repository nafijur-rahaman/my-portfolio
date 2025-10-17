import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  // Particle Background
  useEffect(() => {
    const canvas = document.getElementById("contactParticles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(100,200,255,0.2)";
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
    <section id="contact" className="relative py-24 bg-gray-950 text-slate-100 overflow-hidden">
      {/* Particle Canvas */}
      <canvas id="contactParticles" className="absolute inset-0 pointer-events-none"></canvas>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold border-b-4 border-cyan-400 inline-block pb-2 tracking-wide mb-16 text-center">
          Get in Touch
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row gap-8 relative overflow-hidden"
        >
          {/* Floating Icons */}
          <motion.div
            className="absolute top-[-20px] left-[-20px] text-cyan-400 text-3xl opacity-30"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            <FaEnvelope />
          </motion.div>
          <motion.div
            className="absolute bottom-[-20px] right-[-20px] text-green-400 text-3xl opacity-30"
            animate={{ rotate: [0, -360] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <FaGithub />
          </motion.div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4 relative z-10">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold text-lg hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  Sent <FaCheck className="text-white w-4 h-4" />
                </>
              ) : (
                <>
                  Send Message <FaEnvelope className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex-1 flex flex-col gap-6 justify-center relative z-10">
            <h3 className="text-xl font-semibold text-slate-100">Connect with Me</h3>
            <p className="text-slate-300">You can also reach me via social platforms:</p>
            <div className="flex gap-4 mt-2">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-slate-100 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-slate-100 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:yourmail@example.com"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-slate-100 hover:text-rose-500 transition"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
