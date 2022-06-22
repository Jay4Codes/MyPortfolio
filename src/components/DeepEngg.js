import React from "react";
import "./TitleSkill.css";
import Card from "./Card";
import gif from "../images/gifs/deep-learning.gif";
import tf from "../images/icons/tensorflow.svg";
import keras from "../images/icons/keras.svg";
import opencv from "../images/icons/opencv.svg";
import jupyter from "../images/icons/jupyter.svg";
import pytorch from "../images/icons/pytorch.svg";

function DeepEngg() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt-skill">
          {/* the skill */}
          <h1>Machine Learning</h1>

          {/* tech stack */}
          <h2>Technical Skills</h2>
          <ul className="tech-skills">
            <li>
              <img src={tf} alt="tensorflow" />
            </li>

            <li>
              <img src={keras} alt="keras" />
            </li>

            <li>
              <img src={opencv} alt="opencv" />
            </li>

            <li>
              <img src={jupyter} alt="jupyter" />
            </li>

            <li>
              <img src={pytorch} alt="pytorch" />
            </li>
          </ul>

          {/* experience */}
          <h2>Experience</h2>
          <p>None</p>

          {/* projects */}
          <h2>Projects</h2>
          <div className="projects">
            <Card num="01" title="AI Virtual Mouse" desc="" />
            <Card num="02" title="Image Enhancer" desc="" />
            <Card num="03" title="Stock Price Prediction" desc="" />
          </div>

          <h2>Certifications & Awards</h2>
          <div className="awards"></div>
        </div>

        <div className="gif">
          {/* here’s the gif */}
          <img src={gif} alt="deeplearner" />
        </div>
      </aside>
    </div>
  );
}

export default DeepEngg;
