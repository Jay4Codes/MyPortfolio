import "./Navbar.css";
import { Link } from "react-router-dom";
import Main from "./nav";

const Navbar = () => {
  return (
    <>
      <Main />
      {/* <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button> */}
      <header id="header" className="fixed-top ">
        <div className="container-fluid navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">
                <img src="./developer.png" alt="" />
                Jay.Jain <span className="blink"> _</span>
              </h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li
                    className="active"
                    data-aos="fade-down"
                    data-aos-duration="600"
                  >
                    <a href="#home">Home</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <a href="#experience">Experience</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <a href="#work">Projects</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="#skills">Skills</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#achievements">Achievements</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2100">
                    <a href="#education">Education</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2400">
                    <a href="#about">About</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2700">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="left-btns">
                <div className=" " id="theme-button2">
                  <input id="toggle" className="toggle" type="checkbox"></input>
                </div>
                <div>
                  <div className="CvMe">
                    <a
                      href="https://docs.google.com/document/d/1Ep7OppV-X7o_bXbw_TiIAV-t1M0IGAudBJhZThfsxAI/edit?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="my-cv">Resume</button>
                    </a>
                  </div>
                </div>

                <div className=" " id="theme-button">
                  <Link to="#" className="menuBtn">
                    <span className="lines"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
