import React from "react";
import "./TitleSkill.css";
import Card from "./Card";

function DataAnal() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Data Analysis</h1>

          {/* tech stack */}
          <h2>Technical Skill</h2>
          <ul className="tech-skills">
            <li>Excel</li>

            <li>Tableau</li>

            <li>Python</li>
            
            <li>Data Visualisation</li>

            <li>MySQL</li>

            <li>Kaggle</li>
          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>
            None
          </p>

          <h2>Projects</h2>
          <div className="projects">
            <Card num='01' title='Solar Data Analysis' desc='' />
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

export default DataAnal;
