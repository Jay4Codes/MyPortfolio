import decor3 from "../../images/decoration/Group-31.png";
import intro from "../../images/intro.png";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <section className=" intro-page" id="home">
        <div className="decorations">
          <div className="decor-dot2">
            <img src={decor3} alt="" />
          </div>

          <div className="parcol"></div>
        </div>
        <div className="small-intro">
          <div className="intro-row">
            <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
              <div className="intro-name">
                <h3
                  className="role"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  SOFTWARE DEVELOPER | DATA ANALYST
                </h3>
                <h3
                  className="name"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Hey! I Am
                </h3>
                <h3
                  className="job text-animate"
                  data-aos="fade-down"
                  data-aos-duration="1700"
                >
                  Jay Jain
                </h3>
                <p
                  className="myinfo"
                  data-aos="fade-down"
                  data-aos-duration="1800"
                >
                  Just another guy programming my life for 20 years living in
                  the City of dreams.
                </p>
              </div>
              <div
                className="intro-btns"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                <a
                  href="https://drive.google.com/file/d/1Za5o9YNhJXq6i30jTGEQ2cfXFdjdN1LE/view?usp=sharing"
                  className="contactMe"
                  rel="noreferrer"
                >
                  <button className="contact-me">
                    Resume <i className="bx bx-send "></i>
                  </button>
                </a>
                <a href="mailto:jay4emails@gmail.com" className="contactMe">
                  <button className="contact-me">
                    Hire me <i className="bx bx-send "></i>
                  </button>
                </a>
              </div>
              <div
                className="intro-contact"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <span>Follow Me:</span>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jay-ra-jain/"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/Jay4Codes"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 left-img "
              data-aos="fade-down-left"
            >
              <div className="ff">
                <img className="intro-img" src={intro} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
