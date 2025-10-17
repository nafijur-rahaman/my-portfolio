import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Footer Info */}
        <div className="text-center md:text-left">
          <p className="text-slate-400">© {new Date().getFullYear()} Tanjid. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Full-Stack Developer Portfolio</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-2xl text-slate-100 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-2xl text-slate-100 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="text-2xl text-slate-100 hover:text-rose-500 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900  p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}


