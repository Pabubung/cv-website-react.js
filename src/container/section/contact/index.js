import React, { Component } from "react";
import "./contact.css";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { icons } from "react-icons/lib";
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <section className="contact-title">
          <p>Contact me on social media</p>
        </section>

        <div className="contact-row-icons">
          <FaFacebook
            className="social-media-icon"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.facebook.com/octovianuspabubung",
                "_blank"
              )
            }
          />

          <FaInstagram
            className="social-media-icon"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/octovianuspabubung/",
                "_blank"
              )
            }
          />
          <FaLinkedin
            className="social-media-icon"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/octovianuspabubung/",
                "_blank"
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default Contact;
