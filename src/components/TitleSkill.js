import React from "react";
import "./TitleSkill.css";
import Card from "./Card";

function TitleSkill() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Skill</h1>

          {/* tech stack */}
          <h2>Technical Skills</h2>
          <ul className="profile-social-links">
            <li></li>

            <li></li>

            <li></li>
          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>Experience</p>

          {/* projects */}
          <h2>Projects</h2>
          <div className="projects">
            <Card />
            <Card />
          </div>

          <h2>Certifications & Awards</h2>
          <div className="awards"></div>
        </div>

        <div className="gif">
          {/* here’s the gif */}
          <img alt="skill-gif" />
        </div>
      </aside>
    </div>
  );
}

export default TitleSkill;
