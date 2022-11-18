import "./Skills.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import skills from "../../images/about.svg";

const Skills = () => {
  return (
    <>
      <main id="skills">
        <div className="skills-container">
          <div className="skills-decor">
            <div className="skills-dots">
              <img src={decor1} alt="" />
            </div>
            <div className="skills-rect">
              <img src={reactagle} alt="" />
            </div>
            <div className="skills-shady">
              <img src={shady} alt="" />
            </div>
          </div>
          <div className="skills-row">
            <div
              className=" col-lg-6 col-md-5 col-sm-12 skills-img"
              data-aos="fade-up-right"
            >
              <img src={skills} alt="skills-avatar" />
            </div>
            <div
              className=" col-lg-6 col-md-7  col-sm-12 skills_myinfo"
              data-aos="fade-up-left"
            >
              <div className="title">
                <h2>skills</h2>
                <h3>Skills</h3>
              </div>
              <div className="lang">
                <div className="lang-info">
                  <i className=""></i>
                  <p className="pt-2">HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
