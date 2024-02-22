// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
// import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Experience from "./components/Experience";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <Service /> */}
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">DAVE SEXTON</h6>
        <p>Much thanks to John Alex at <a href="https://www.youtube.com/@CodeAProgram" target="_blank">codeaprogram</a> for the starter code</p>
      </footer>
    </div>
  );
};

export default App;
