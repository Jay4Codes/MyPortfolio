import "./Skills.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import { skills } from "../../data/resume";

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
              className=" col-lg-10 col-md-7 col-sm-12 skills_myinfo"
              data-aos="fade-up-left"
            >
              <div className="title">
                <h2>skills</h2>
                <h3>Skills</h3>
              </div>
              <h4>Languages</h4>
              <div className="lang">
                {Object.entries(skills.languages).map(([key, value]) => (
                  <div className="lang-info" key={key}>
                    <div className="skill-img">
                      <img src={value[1]} alt={value[0]} />
                    </div>
                    <div className="skill-name">{value[0]}</div>
                  </div>
                ))}
              </div>
              <h4>Development</h4>
              <div className="lang">
                {Object.entries(skills.development).map(([key, value]) => (
                  <div className="lang-info" key={key}>
                    <div className="skill-img">
                      <img src={value[1]} alt={value[0]} />
                    </div>
                    <div className="skill-name">{value[0]}</div>
                  </div>
                ))}
              </div>
              <h4>Databases</h4>
              <div className="lang">
                {Object.entries(skills.databases).map(([key, value]) => (
                  <div className="lang-info" key={key}>
                    <div className="skill-img">
                      <img src={value[1]} alt={value[0]} />
                    </div>
                    <div className="skill-name">{value[0]}</div>
                  </div>
                ))}
              </div>
              <h4>Data Science</h4>
              <div className="lang">
                {Object.entries(skills.data_science).map(([key, value]) => (
                  <div className="lang-info" key={key}>
                    <div className="skill-img">
                      <img src={value[1]} alt={value[0]} />
                    </div>
                    <div className="skill-name">{value[0]}</div>
                  </div>
                ))}
              </div>
              <h4>Machine Learning</h4>
              <div className="lang">
                {Object.entries(skills.machine_learning).map(([key, value]) => (
                  <div className="lang-info" key={key}>
                    <div className="skill-img">
                      <img src={value[1]} alt={value[0]} />
                    </div>
                    <div className="skill-name">{value[0]}</div>
                  </div>
                ))}
              </div>
              <h4>Others</h4>
              <div className="lang">
                {Object.entries(skills.others).map(([key, value]) => (
                  <div className="lang-info" key={key}>
                    <div className="skill-img">
                      <img src={value[1]} alt={value[0]} />
                    </div>
                    <div className="skill-name">{value[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
