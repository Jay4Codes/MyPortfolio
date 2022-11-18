import web from "../../images/web.png";
import "./Education.css";

const Education = () => {
  return (
    <>
      <section id="education">
        <div className="education-container">
          <div className="education-title">
            <h2>Education</h2>
            <h3>Education</h3>
          </div>

          <div className="education-row">
            <div
              className=" my-education"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <img src={web} alt="education-icon" />
              <h4 className="web">Web Development</h4>
              <p className="education-info">
                As a Web developer use coding languages like HTML, CSS,
                JavaScript, and Python to build websites and web applications.
              </p>
              {/* <h6 className="learn-more">Service Learn More</h6> */}
              <div className="shadow-icon">
                <i className=""></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
