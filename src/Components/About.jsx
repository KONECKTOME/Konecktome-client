import React, { Component } from "react";

import "../css/AboutUs.css";
import aboutKonecktomelogo from "../Assets/USP Assets/konecktome-about.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about-holder">
        <div id="about-us-holder">
          <img src={aboutKonecktomelogo} />
        </div>
        <div id="about-us-holder" className="details-wrapper">
          <div>
            <p id="about-us-sub-text">
              KONECKTOME is the comparison site for lower-priced and
              highly-rated services such as broadband, utilities, and financial
              services.
            </p>
            <p id="about-us-sub-text" className="second-para">
              Get genuine feedback from real purchasers, to help you in the
              journey to making your perfect buy.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
