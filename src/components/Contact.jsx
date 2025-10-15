import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-black/60 via-black/40 to-black/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row gap-8"
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold text-lg hover:shadow-lg transition"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>

          {/* Contact Info & Socials */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
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
