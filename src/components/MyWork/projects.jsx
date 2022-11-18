import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
        <h3>Check Out My Reacet Projects</h3>
      </div>
      <div className="project-row">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="project" data-aos="fade-up">
            <div className="project-img">
              <img src="" alt="about-avatar" className="work-img" />
            </div>

            <div className="date-posted">
              <div className="who-post">
                <p className="admin">language used</p>
              </div>
            </div>
            <div className="work-details">
              <h2>Project Title</h2>
              <p className="work-info">Project Info</p>
              <div className="project-links">
                <a href="demo-link" target="_blank" rel="noopener noreferrer">
                  <h6 className="learnmore">
                    <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp; Live
                    Demo
                  </h6>
                </a>
                <a href="github-link" target="_blank" rel="noopener noreferrer">
                  <h6 className="learnmore">
                    <i className="fa fa-github" aria-hidden="true"></i> &nbsp;
                    Source Code
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Projects;
