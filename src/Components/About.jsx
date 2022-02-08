import React, { Component } from "react";
import "../css/AboutUs.css";
import aboutUsIcon from "../Assets/about_us_icon.svg";
import centralisedPlatform from "../Assets/centralPlatform.svg";
import realTime from "../Assets/real-time.svg";
import truePerson from "../Assets/true-person.svg";
import { Row, Col } from "react-bootstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container" id="all-wrapper">
        <h1 id="about-us-header">Why Konecktome?</h1>
        <div className="about-us-vector-wrapper">
          <div className="about-us-vector-snd-wrapper">
            <div>
              <img src={centralisedPlatform} className="vector-width" />
            </div>
            <div id="text-holder" className="scnd-text-holder">
              <h3 id="head-text">Personal And Secure</h3>
              <p id="sub-text">
                Safe and secure centralised platform with user personalisation
                at its root.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="real-time-text-holder">
              <h3 id="head-text">First-Class User Experience</h3>
              <p id="sub-text">
                The entire process of purchasing and switching, and subsequent
                bill management is performed all in-platform, enabling for a
                more enjoyable and satisfying user experience.
              </p>
            </div>
            <div>
              <img src={realTime} className="vector-width2" />
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="vector3-holder">
              <img src={truePerson} className="vector-width3" />
            </div>
            <div id="text-holder">
              <h3 id="head-text">Reviews And Essentials</h3>
              <p id="sub-text">
                Customer reviews, alongside a clear and concise listing of any
                additional information (e.g. T&Cs and additional costs)
                provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
