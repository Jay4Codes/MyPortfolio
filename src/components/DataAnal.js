import React from "react";
import "./TitleSkill.css";
import Card from "./Card";
import gif from "../images/gifs/data-analysis.gif";
import tableau from "../images/icons/tableau.svg";
import python from "../images/icons/python.svg";
import d3 from "../images/icons/d3.svg";
import mysql from "../images/icons/mysql.svg";
import excel from "../images/icons/microsoft-office-excel.svg";

function DataAnal() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Data Analysis</h1>

          {/* tech stack */}
          <h2>Technical Skills</h2>
          <ul className="tech-skills">
            <li>
              <img src={excel} alt="excel" />
            </li>

            <li>
              <img src={tableau} alt="tableau" />
            </li>

            <li>
              <img src={python} alt="python" />
            </li>

            <li>
              <img src={d3} alt="d3" />
            </li>

            <li>
              <img src={mysql} alt="mysql" />
            </li>
          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>None</p>

          {/* projects */}
          <h2>Projects</h2>
          <div className="projects">
            <Card num="01" title="Solar Data Analysis" desc="" />
          </div>

          <h2>Certifications & Awards</h2>
          <div className="awards"></div>
        </div>

        <div className="gif">
          {/* here’s the gif */}
          <img src={gif} alt="data-analyst" />
        </div>
      </aside>
    </div>
  );
}

export default DataAnal;
