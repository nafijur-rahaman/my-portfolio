import { sections } from "./portfolio.config";
import ThemeProvider from "./theme/ThemeProvider";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Maps section ids in portfolio.config.js to components.
const SECTION_COMPONENTS = {
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  contact: Contact,
};

export default function App() {
  return (
    <ThemeProvider>
      <Background />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <SocialLinks />
      <main id="main">
        <Hero />
        {sections.map(({ id }) => {
          const Component = SECTION_COMPONENTS[id];
          return Component ? <Component key={id} /> : null;
        })}
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
