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
                  I'm 20 years old creative SOFTWARE DEVELOPER based in Mumbai,
                  India specializing in User Interface Design and Development. I
                  build clean, appealing, and functional interfaces which comply
                  with the latest web standards.
                </p>
                {/* <p className="about-info-2">Desc2</p> */}
              </div>
              <div className="itscv">
                <a
                  href="https://drive.google.com/file/d/127RCSy1lUZE2sS8IgkxxPcUqbw1rYMOR/view"
                  download="RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-cv">
                    Download Cv <i className="bx bx-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
