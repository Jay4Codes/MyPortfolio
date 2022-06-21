import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-bg">
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="home-container">
          <h1>
            <span className="line">I am</span>
            <span className="line">Jay Jain</span>
            <span className="line">
              <span className="color">&</span> I code & design.
            </span>
          </h1>
          <div className="buttons">
            <nav>
              <Link to="/skills"><button className="custom-btn btn-15">Skills</button></Link>
              <Link to="/about"><button className="custom-btn btn-15">About</button></Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
