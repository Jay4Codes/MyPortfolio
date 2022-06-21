import React from "react";
import "./TitleSkill.css";
import Card from "./Card";

function TitleSkill() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>David Jones</h1>

          {/* tech stack */}
          <ul className="profile-social-links">
            <li></li>

            <li></li>

            <li></li>
          </ul>

          {/* experience */}
          <p>
            Even when everything is perfect, you can always make it better.
            Break barriers in your head, create something crazy and don't forget
            Code is Poetry...
          </p>
          <div className="projects">
            <Card />
            <Card />
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

export default TitleSkill;
