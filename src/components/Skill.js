import React from "react";
import { Link } from "react-router-dom";
import "./Skill.css";

function Skill(props) {
  return (
    <div>
      <section id="timeline">
        <div className="tl-item">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">Programmer</p>
          </div>

          <div className="tl-content">
            <Link to="web-developer">
              <h1>Web Developer</h1>
            </Link>
            <Link to="data-analyst">
              <h1>Data Analyst</h1>
            </Link>
            <Link to="deeplearning-engg">
              <h1>Deep Learning Engineer</h1>
            </Link>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Designer</p>
          </div>
          <div className="tl-content">
            <Link to="3d-artist">
              <h1>3D Artist</h1>
            </Link>
            <Link to="vfx-artist">
              <h1>Visual Effects Artist</h1>
            </Link>
            <Link to="ui-designer">
              <h1>UI/UX Designer</h1>
            </Link>
            <Link to="graphic-designer">
              <h1>Graphic Designer</h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
