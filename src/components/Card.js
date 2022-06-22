import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-div">
      <div className="card">
        <div className="box">
          <div className="content">
            <h1>{props.num}</h1>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <button>Source Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
