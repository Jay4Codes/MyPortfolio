import React from "react";
import "./TitleSkill.css";
import Card from "./Card";
import gif from "../images/gifs/web-dev.gif";
import aws from "../images/icons/aws.svg";
import django from "../images/icons/django.svg";
import firebase from "../images/icons/firebase.svg";
import react from "../images/icons/react.svg";
import mongodb from "../images/icons/mongodb.svg";
import nodejs from "../images/icons/nodejs.svg";
import flask from "../images/icons/flask.svg";
import html from "../images/icons/html-5.svg";
import css from "../images/icons/css-3.svg";
import js from "../images/icons/javascript.svg";
import wordpress from "../images/icons/wordpress-icon.svg";
import postgre from "../images/icons/postgresql.svg";
import php from "../images/icons/php.svg";

function WebDev() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Web Development</h1>

          {/* tech stack */}
          <h2>Technical Skills</h2>
          <ul className="tech-skills">
            <li>
              <img src={aws} alt="aws" />
            </li>

            <li>
              <img src={django} alt="django" />
            </li>

            <li>
              <img src={react} alt="react" />
            </li>

            <li>
              <img src={firebase} alt="firebase" />
            </li>

            <li>
              <img src={mongodb} alt="mongodb" />
            </li>

            <li>
              <img src={nodejs} alt="nodejs" />
            </li>

            <li>
              <img src={flask} alt="flask" />
            </li>

            <li>
              <img src={html} alt="html" />
            </li>

            <li>
              <img src={css} alt="css" />
            </li>

            <li>
              <img src={js} alt="js" />
            </li>

            <li>
              <img src={wordpress} alt="js" />
            </li>

            <li>
              <img src={postgre} alt="js" />
            </li>

            <li>
              <img src={php} alt="js" />
            </li>
          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>Markytics UniVoyage</p>

          <h2>Projects</h2>
          <div className="projects">
            <Card num="01" title="VLearn" desc="Visualising DSA Concepts" />
            <Card
              num="02"
              title="VCare"
              desc="Fitness platform using AI techniques"
            />
            <Card
              num="03"
              title="SkyJack"
              desc="Treasure Hunt Website for DJS S4DS"
            />
          </div>

          <h2>Certifications & Awards</h2>
          <div className="awards"></div>
        </div>

        <div className="gif">
          {/* here’s the gif */}
          <img src={gif} alt="web-dev" />
        </div>
      </aside>
    </div>
  );
}

export default WebDev;
