import "./Achievements.css";
import { achievements } from "../../data/resume";

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
            {Object.entries(achievements.prize).map(([key, value]) => (
              <div
                className=" my-achievement"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                key={key}
              >
                <a href={value[4]} target="_blank" rel="noreferrer">
                  {value[3] ? <img src={value[3]} alt="img" /> : ""}
                </a>
                <h4 className="web">{value[0]}</h4>
                <p className="achievement-info">{value[2]}</p>
                <a href={value[4]} target="_blank" rel="noreferrer">
                  <h6 className="learn-more">Learn More</h6>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
