import React from "react";
import "./About.css";
import Card from "./Card";
import workgif from "../images/gifs/3d-work-office.gif";
import megif from "../images/gifs/digital-media-3d.gif";

function About() {
  return (
    <div className="bg">
      <aside className="profile-card">
        <div className="abt">
          {/* About */}
          <h1>About Me</h1>

          {/* bio */}
          <p>
            Bio Learn More As a passionate and motivated professional, I'm
            constantly striving to improve my techniques, expand my skillset and
            find new opportunities to grow. Each of my projects - both solo and
            collaborative - have provided this growth and allowed me to
            establish myself within this competitive industry.
          </p>

          {/* projects */}
          <h2>Education</h2>
          <div className="edu">
            <Card />
            <Card />
          </div>

          <img src={workgif} alt="workgif" />
        </div>

        <div className="gif">
          {/* here’s the gif */}
          <img src={megif} alt="me-gif" />

          <h2>Hobbies</h2>
        </div>
      </aside>
    </div>
  );
}

export default About;
