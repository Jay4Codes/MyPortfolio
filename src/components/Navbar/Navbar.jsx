import "./Navbar.css";
import { Link } from "react-router-dom";
import Main from "./nav";

const Navbar = () => {
  return (
    <>
      <Main />
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">
                <img
                  src="https://code.google.com/images/developers.png"
                  alt=""
                />
                Jay.Jain <span className="blink"> _</span>
              </h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li
                    className="active"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <a href="#home">Home</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <a href="#skills">Skills</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <a href="#work">Projects</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="#experience">Experience</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#education">Education</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2100">
                    <a href="#achievements">Achievements</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2400">
                    <a href="#about">About</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2700">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="nav-social">
                <a
                  href="https://github.com/Jay4Codes/MyPortfolio.git"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="left-btns">
                <div className=" " id="theme-button2">
                  <input id="toggle" className="toggle" type="checkbox"></input>
                </div>
                <div>
                  <div className="CvMe">
                    <a
                      href="https://drive.google.com/file/d/1Za5o9YNhJXq6i30jTGEQ2cfXFdjdN1LE/view?usp=sharing"
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
