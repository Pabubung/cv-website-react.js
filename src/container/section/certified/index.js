import React, { Component } from "react";
import "./certified.css";
class Certified extends Component {
  render() {
    return (
      <div className="certified-container">
        <p className="fontstyle">Certified</p>

        <div className="certified-content">
          <strong>Certified Secure Computer User v2</strong>
          <a>EC - Council </a>
        </div>

        <div className="certified-content">
          <strong>Networking Fundamentals</strong>
          <a>Microsoft Technology Associate</a>
        </div>

        <div className="certified-content">
          <strong>Database Administration Fundamentals</strong>
          <a>Microsoft Technology Associate</a>
        </div>
      </div>
    );
  }
}

export default Certified;
