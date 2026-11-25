
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
<Certifications />
<Contact />
<footer className="footer">
  <p>© 2026 Ashwini V. All rights reserved.</p>
  <p>Designed & Developed with React.</p>
</footer>
    </>
  );
}

export default App;
