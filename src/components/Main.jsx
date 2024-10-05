import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";

function AppLayout() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default AppLayout;
