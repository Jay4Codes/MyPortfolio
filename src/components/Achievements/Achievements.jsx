import web from "../../images/web.png";
import "./Achievements.css";

const Achievements = () => {
  return (
    <>
      <section id="achievements">
        <div className="achievement-container">
          <div className="achievement-title">
            <h2>Achievements</h2>
            <h3>Achievements</h3>
          </div>

          <div className="achievement-row">
            <div
              className=" my-achievement"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <img src={web} alt="achievement-icon" />
              <h4 className="web">Web Development</h4>
              <p className="achievement-info">
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

export default Achievements;
