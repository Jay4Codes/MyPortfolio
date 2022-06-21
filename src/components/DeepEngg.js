import React from "react";
import "./TitleSkill.css";
import Card from "./Card";

function DeepEngg() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Deep Learning</h1>

          {/* tech stack */}
          <h2>Technical Skill</h2>
          <ul className="tech-skills">
            <li>TensorFlowJS</li>

            <li>CNN</li>

            <li>Time Series Analysis</li>
          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>
            None
          </p>
          <h2>Projects</h2>
          <div className="projects">
            <Card num='01' title='AI Virtual Mouse' desc='' />
            <Card num='02' title='Image Enhancer' desc='' />
            <Card num='03' title='Stock Price Prediction' desc='' />
          </div>

          <h2>Certifications & Awards</h2>
          <div className="awards">

          </div>

        </div>

        <div className="gif">
          {/* here’s the gif */}
          <img />
        </div>
      </aside>
    </div>
  );
}

export default DeepEngg;
