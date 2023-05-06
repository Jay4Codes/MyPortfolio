import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import TimelineNavbar from "./components/Navbar/TimelineNavbar";
import Home from "./components/Home/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
// import Timeline from "./components/Timeline/Timeline";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Projects />
                <Experience />
                <Skills />
                <Education />
                <Achievements />
                <AboutMe />
                <ContactMe />
                <Footer />
              </>
            }
          />
          {/* <Route
            path="/timeline"
            element={
              <>
                <TimelineNavbar />
                <Timeline />
              </>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;