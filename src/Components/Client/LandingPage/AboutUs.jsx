import React, { Component } from "react";
import "../../../css/LandingPage/About.css";
import aboutKonecktomelogo from "../../../Assets/USP Assets/usp-konecktome.png";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div id="about-holder">
        <div id="about-us-holder">
          <img src={aboutKonecktomelogo} />
        </div>
        <div id="about-us-holder">
          <div>
            <p id="about-us-sub-text">
              KONECKTOME creates an avenue for you to have easy access to a
              secure, centralised platform where your personal details data can
              be stored, easily retrieved and used for any service you want to
              use it for, without any hassle.
            </p>
            <p id="about-us-sub-text">
              We focus on personalisation, ease, and integration with your
              personal data, to enable you to efficiently sign up and purchase
              various services and products.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
