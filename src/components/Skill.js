import React from "react";
import { Link } from "react-router-dom";
import "./Skill.css";

function Skill() {
  return (
    <div>
      <section id="timeline">
        <div className="tl-item">
          <div className="tl-bg"></div>

          <div className="tl-year">
            <h1>Programmer</h1>
          </div>

          <div className="tl-content">
            <Link to="web-developer">
              <h3>Web Developer</h3>
            </Link>
            <Link to="data-analyst">
              <h3>Data Analyst</h3>
            </Link>
            <Link to="deeplearning-engg">
              <h3>Deep Learning Engineer</h3>
            </Link>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h1>Designer</h1>
          </div>
          <div className="tl-content">
            <Link to="3d-artist">
              <h3>3D Artist</h3>
            </Link>
            <Link to="vfx-artist">
              <h3>Visual Effects Artist</h3>
            </Link>
            <Link to="ui-designer">
              <h3>UI/UX Designer</h3>
            </Link>
            <Link to="graphic-designer">
              <h3>Graphic Designer</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
