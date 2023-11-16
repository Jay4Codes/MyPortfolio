import "./AboutMe.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import about from "../../images/about.svg";

const AboutMe = () => {
  return (
    <>
      <main id="about">
        <div className="aboutMe-container">
          <div className="about-decor">
            <div className="about-dots">
              <img src={decor1} alt="" />
            </div>
            <div className="about-rect">
              <img src={reactagle} alt="" />
            </div>
            <div className="about-shady">
              <img src={shady} alt="" />
            </div>
          </div>
          <div className="abouMe-row">
            <div
              className=" col-lg-6 col-md-5 col-sm-12 about-img"
              data-aos="fade-up-right"
            >
              <img src={about} alt="about-avatar" />
            </div>
            <div
              className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
              data-aos="fade-up-left"
            >
              <div className="title">
                <h2>About Me</h2>
                <h3>Why hire me for your next project?</h3>
              </div>
              <div className="about-description">
                <p className="about-info">
                  Interests in fields of Quantitative Research, Deep Learning, Data Science, Backend Software Development & Cloud Computing.
                  In my Final Year pursuing a B.Tech in Computer Science & Engineering (Data Science).
                  21 years of age and from Mumbai, India
                </p>
              </div>
              <div className="itscv">
                <a
                  href="https://docs.google.com/document/d/1Ep7OppV-X7o_bXbw_TiIAV-t1M0IGAudBJhZThfsxAI/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="download-cv">
                    View CV <i className="bx bx-download"></i>
                  </button>
                </a>
              </div>
              <div className="title">
                <h3>Hobbies</h3>
              </div>
              <p className="about-info hobbies">
                &nbsp; Podcasts &nbsp; | &nbsp; Music &nbsp; | &nbsp; Video Games | &nbsp; Design &nbsp; | &nbsp; Dance &nbsp;
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
