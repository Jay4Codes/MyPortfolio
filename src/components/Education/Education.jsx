import { courses, education } from "../../data/resume";
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
            {Object.entries(education.degree).map(([key, value]) => (
              <div
                className=" my-education"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                key={key}
              >
                <a href={value[5]} rel="noreferrer" target="_blank">
                  <img src={value[5]} alt={value[0]} />
                </a>
                <h4 className="web">{value[0]}</h4>
                <p className="education-info">
                  {value[2]}
                  <br />
                  from {value[3]} in {value[4]}
                </p>
                <a href={value[6]} rel="norefferer" target="_blank">
                  <h6 className="learn-more">Grade - {value[1]}</h6>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="education-title">
          <h3>Courses & Certifications</h3>
        </div>
        <div className="education-row">
          {Object.entries(courses.course).map(([key, value]) => (
            <div
              className=" my-education"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              key={key}
            >
              <a href={value[4]} rel="noreferrer" target="_blank">
                <img src={value[3]} alt={value[0]} />
              </a>
              <h4 className="web">{value[0]}</h4>
              <p className="education-info">
                {value[1]}
                <br />
                {value[2]}
              </p>
              <a href={value[4]} rel="norefferer" target="_blank">
                <h6 className="learn-more">Credential</h6>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
