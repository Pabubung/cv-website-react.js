import React, { Component } from "react";
import Card from "./card";
import {
  experienceFive,
  experienceFour,
  experienceOne,
  experienceThree,
  experienceTwo,
} from "./data";
import "./experience.css";
class Experience extends Component {
  render() {
    return (
      <div className="container-experience">
        <div className="row-experience">
          <Card {...experienceOne} />
          <Card {...experienceTwo} />
          <Card {...experienceThree} />
          <Card {...experienceFour} />
          <Card {...experienceFive} />
        </div>
      </div>
    );
  }
}

export default Experience;
