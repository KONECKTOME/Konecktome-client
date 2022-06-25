import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cancellation from "../Assets/Cancellation.png";
import Connection from "../Assets/connection.png";
import Exclusive from "../Assets/Exclusive.png";
import Reviews from "../Assets/Reviews.png";
import Secure from "../Assets/Secure.png";
import Journey from "../Assets/Journey.png";

import "../css/Benefits.css";

class Benefits extends React.Component {
  render() {
    return (
      <Container>
        <div id="benefits-container">
          <div id="image-text-holder">
            <div id="image-holder">
              <img src={Exclusive} className="vector-width" />
            </div>
            <div id="text-holder">
              <p id="sub-text">
                Receieve the best and exclusive deals from services rated 4
                stars or more(out of 5).
              </p>
            </div>
          </div>
          <div id="image-text-holder">
            <div id="text-holder">
              <p id="sub-text">
                No cancellation fee when you switch your services through us.
              </p>
            </div>
            <div id="image-holder">
              <img src={Cancellation} className="vector-width" />
            </div>
          </div>
          <div id="image-text-holder">
            <div id="image-holder">
              <img src={Secure} className="vector-width2" />
            </div>
            <div id="text-holder">
              <p id="sub-text2">
                We securely store your personal information so you never have
                to. Great for purchasing new services and keeping all your
                details in one place.
              </p>
            </div>
          </div>
          <div id="image-text-holder">
            <div id="text-holder">
              <p id="sub-text">
                Manage & split all your bills and access all service accounts in
                one place.
              </p>
            </div>
            <div id="image-holder">
              <img src={Connection} className="vector-width" />
            </div>
          </div>
          <div id="image-text-holder">
            <div id="image-holder">
              <img src={Reviews} className="vector-width" />
            </div>
            <div id="text-holder">
              <p id="sub-text3">
                We provide user reviews and necessary extra information on all
                listed services, to give you greater confidence in your buying
                decisions.
              </p>
            </div>
          </div>
          <div id="image-text-holder">
            <div id="text-holder">
              <p id="sub-text">
                We keep everything simple by enabling and switching all in one
                place.
              </p>
            </div>
            <div id="image-holder">
              <img src={Journey} className="vector-width" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Benefits;
