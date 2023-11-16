import "./Experience.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { works } from "../../data/resume";

const Experience = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: true,
    loop: true,
    rewind: true,
    autoplayTimeout: 6000,
    smartSpeed: 8000,
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
    <div className="work-experience" id="experience">
      <div className="mywork-title">
        <h2>My Work</h2>
        <h3>Experience</h3>
      </div>
      <div className="experience-row">
        <OwlCarousel className="owl-theme" {...options}>
          {Object.entries(works.work).map(([key, value]) => (
            <div className="experience" data-aos="fade-up" key={key}>
              <div className="experience-img">
                <a href={value[3]} target="_blank" rel="noreferrer">
                  <img src={value[1]} alt={value[2]} className="work-img" />
                </a>
              </div>
              <div className="date-posted">
                <div className="who-post">
                  <a href={value[3]} target="_blank" rel="noreferrer"><p className="admin">{value[2]}</p></a>
                </div>
              </div>
              <div className="work-details">
                <h2>{value[0]}</h2>
                <p className="work-info">{value[4]}</p>
                <div className="experience-links">
                  <h6 className="learnmore">
                    <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                    {value[5]}
                  </h6>
                  <h6 className="learnmore">
                    <i className="fa fa-location" aria-hidden="true"></i> &nbsp;
                    {value[6]}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Experience;
