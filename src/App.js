import "./App.css";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Progress from "./components/SkillBars/progress";
// import Projects from "./components/MyWork/projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div id="preloader">
          <h2 className="name-load  animate-charcter">L O A D I N G</h2>
        </div>

        <div className="homepage">
          <Navbar />
          <Home />
        </div>

        <AboutMe />
        <Services />
        <Progress />
        {/* <Projects /> */}
        <ContactMe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
