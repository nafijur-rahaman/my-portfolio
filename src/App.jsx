import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Next steps: import About, Projects, Experience, Contact components when ready

export default function App() {
  return (
    // Add scroll-smooth behavior to container (no setup required)
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <SocialLinks />
      <main className="pt-2">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
     <Footer></Footer>
    </div>
  );
}
