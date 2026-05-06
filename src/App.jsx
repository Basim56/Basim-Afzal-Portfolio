import { useState, useEffect } from "react";
import "./styles/globals.css";

import Navbar     from "./components/Navbar/Navbar";
import Hero       from "./components/Hero/Hero";
import About      from "./components/About/About";
import Skills     from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects   from "./components/Projects/Projects";
import Education  from "./components/Education/Education";
import Contact    from "./components/Contact/Contact";
import Footer     from "./components/Footer/Footer";

const SECTIONS = ["home", "about", "skills", "experience", "projects", "education", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  /* ── scroll spy ── */
  useEffect(() => {
    const onScroll = () => {
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── smooth scroll helper ── */
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "#070b14", color: "#e2e8f0" }}>
      <Navbar activeSection={activeSection} onScrollTo={scrollTo} />
      <Hero       onScrollTo={scrollTo} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
