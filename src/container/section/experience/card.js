import React from "react";
import "./card.css";

function Card({ title, description, duration, img }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <div>
          <h1 className="card-title">{title}</h1>
        </div>
        <div>
          <strong className="card-duration">{duration}</strong>
        </div>
        <div>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
