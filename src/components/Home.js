import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

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
              <span className="color">I</span> code & design
            </span>
          </h1>
          <div className="buttons">
            <nav>
              <Link to="/skills">
                <button className="custom-btn btn-15 wall-btn">Skills</button>
              </Link>
              <Link to="/about">
                <button className="custom-btn btn-15 wall-btn">About</button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
