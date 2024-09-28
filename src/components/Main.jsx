import About from "./About";
import Connect from "./Connect";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";

function AppLayout() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Connect />
      <Footer />
    </>
  );
}

export default AppLayout;
