import "./Projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { projects } from "../../data/resume";

const Projects = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3.7,
      },
      1440: {
        items: 3.7,
      },
    },
  };

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>My Work</h2>
        <h3>Check Out My Recent Projects</h3>
      </div>
      <div className="project-row">
        <OwlCarousel className="owl-theme" {...options}>
          {Object.entries(projects.project).map(([key, value]) => (
            <div className="project" data-aos="fade-up" key={key}>
              <div className="project-img">
                <img src={value[3]} alt={value[0]} className="work-img" />
              </div>
              <div className="date-posted">
                <div className="who-post">
                  <p className="admin">{value[1]}</p>
                </div>
              </div>
              <div className="work-details">
                <h2>{value[0]}</h2>
                <p className="work-info">{value[2]}</p>
                <div className="project-links">
                  <a href={value[4]} target="_blank" rel="noopener noreferrer">
                    <h6 className="learnmore">
                      <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                      Live Demo
                    </h6>
                  </a>
                  <a href={value[5]} target="_blank" rel="noopener noreferrer">
                    <h6 className="learnmore">
                      <i className="fa fa-github" aria-hidden="true"></i> &nbsp;
                      Source Code
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Projects;
