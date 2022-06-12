import React, { Component } from "react";
import "../css/AboutUs.css";
import aboutUsIcon from "../Assets/about_us_icon.svg";
import customerReview from "../Assets/customer-review.svg";
import entireProcess from "../Assets/Entire-process.svg";
import safeAndSecure from "../Assets/safe-and-secure.svg";
import tradeMarkIcon from "../Assets/trademark.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container" id="all-wrapper">
        {/* <h1 id="about-us-header">Why KONECKTOME ? </h1> */}
        <div className="about-us-vector-wrapper">
          <div className="about-us-vector-snd-wrapper">
            <div>
              <img
                src="https://res.cloudinary.com/konecktome/image/upload/v1655036736/1rev2-05_twqnah.png"
                className="vector-width"
              />
            </div>
            <div id="text-holder" className="scnd-text-holder">
              {/* <h3 id="head-text">
                Receieve the best and exclusive deals from services rated 4
                stars or more(out of 5)
              </h3> */}
              <p id="sub-text">
                Receieve the best and exclusive deals from services rated 4
                stars or more(out of 5).
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="real-time-text-holder">
              {/* <h3 id="head-text">First-Class User Experience</h3> */}
              <p id="sub-text">
                No cancellation fee when you switch your services through us.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/konecktome/image/upload/v1655036740/1rev2-06_n8nxtx.png"
                className="vector-width2"
              />
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="vector3-holder">
              <img
                src="https://res.cloudinary.com/konecktome/image/upload/v1655036727/1rev2-02_t9u7qs.png"
                className="vector-width3"
              />
            </div>
            <div id="text-holder">
              {/* <h3 id="head-text">Reviews And Essentials</h3> */}
              <p id="sub-text">
                We securely store your personal information so you never have
                to. Great for purchasing new services and keeping all your
                details in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="real-time-text-holder">
              {/* <h3 id="head-text">First-Class User Experience</h3> */}
              <p id="sub-text">
                Manage & split all your bills and access all service accounts in
                one place.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/konecktome/image/upload/v1655036726/1rev2-01_xhugpy.png"
                className="vector-width2"
              />
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="vector3-holder">
              <img
                src="https://res.cloudinary.com/konecktome/image/upload/v1655036729/1rev2-03_oimuh6.png"
                className="vector-width3"
              />
            </div>
            <div id="text-holder">
              {/* <h3 id="head-text">Reviews And Essentials</h3> */}
              <p id="sub-text">
                We provide user reviews and necessary extra information on all
                listed services, to give you greater confidence in your buying
                decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-vector-wrapper" id="real-and-true">
          <div className="about-us-vector-snd-wrapper">
            <div id="real-time-text-holder">
              {/* <h3 id="head-text">First-Class User Experience</h3> */}
              <p id="sub-text">
                We keep everything simple by enabling and switching all in one
                place.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/konecktome/image/upload/v1655036731/1rev2-04_qg10kq.png"
                className="vector-width2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
