import React, { Component } from "react";
import "../../../css/LandingPage/About.css";
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
        {/* <div>
          <div id="about-text-wrapper">
            <p className="about-text">
              KONECKTOME creates an avenue for you to have easy access to a
              secure, centralised platform where your personal details data can
              be stored, easily retrieved and used for any service you want to
              use it for, without any hassle.
            </p>
          </div>
          <div id="about-second-text-wrapper">
            <p className="about-text">
              We focus on personalisation, ease, and integration with your
              personal data, to enable you to efficiently sign up and purchase
              various services and products.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div id="image-holder-div">
              <img src={aboutUsIcon} />
            </div>
            <div>
              <p className="card-texts">
                KONECKTOME enables you to provide automatically full details to
                the accounts you have access to.
              </p>
            </div>
          </div>
          <div className="card">
            <div id="image-holder-div">
              <img src={aboutUsIcon} />
            </div>
            <div>
              <p className="card-texts">
                KONECTOME will recognise the website the user is visiting via
                its browser extension and automatically log them in.
              </p>
            </div>
          </div>
          <div className="card">
            <div id="image-holder-div">
              <img src={aboutUsIcon} />
            </div>
            <div className="card-texts">
              <p>
                Changes made within KONECTOME will require the use of biometrics
                (fingerprint and face recognition) to approve and update these
                changes.
              </p>
            </div>
          </div>
        </div> */}

        <div>
          <div id="about-text-wrapper">
            <p className="about-text">
              KONECKTOME is your Virtual Life Assistant, a platform focused on
              your data's security, your ease, and most importantly, YOU. We
              take the stress out of life by providing you with a FREE and
              personalised platform that brings together your data and the best
              of the best services, to make decision making and purchasing the
              simplest it has ever been.
            </p>
          </div>
          {/* <div id="about-second-text-wrapper">
            <p className="about-text">
              We focus on personalisation, ease, and integration with your
              personal data, to enable you to efficiently sign up and purchase
              various services and products.
            </p>
          </div> */}
        </div>
        <div className="about-us-vector-wrapper">
          <div className="about-us-vector-snd-wrapper">
            <div>
              <img src={centralisedPlatform} className="vector-width" />
            </div>
            <div id="text-holder" className="scnd-text-holder">
              <h3 id="head-text">Centralised Platform</h3>
              <p id="sub-text">
                Have all your online accounts in one secure place and know who
                has access to your data
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="real-time-text-holder">
              <h3 id="head-text">Real-Time Updates</h3>
              <p id="sub-text">
                Make real-time updates to your personal details across your
                online account
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
              <h3 id="head-text">True Personalisation</h3>
              <p id="sub-text">
                Get personalised recommendations of the best services and
                products for you, at the best price.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
