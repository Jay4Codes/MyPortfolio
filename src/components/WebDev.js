import React from "react";
import "./TitleSkill.css";
import Card from "./Card";

function WebDev() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Web Development</h1>

          {/* tech stack */}
          <h2>Technical Skill</h2>
          <ul className="tech-skills">
            <li>AWS</li>

            <li>Django</li>

            <li>ReactJS</li>
            
            <li>Firebase</li>
            
            <li>MongoDB</li>

            <li>NodeJS</li>

            <li>Flask</li>

            <li>HTML5</li>
            
            <li>CSS3</li>

            <li>JS</li>

          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>
            Markytics
            UniVoyage
          </p>

          <h2>Projects</h2>
          <div className="projects">
            <Card />
            <Card />
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

export default WebDev;
