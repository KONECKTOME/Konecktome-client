import React, { Component } from "react";
import coming_soon_left_col_image from "../Assets/sucess-left-col-image.svg";
import verified from "../Assets/verified_icon.svg";
import { Row, Col } from "react-bootstrap";
import "../css/success.css";

class Sucess extends React.Component {
  render() {
    return (
      <div i>
        <Row>
          <Col>
            <img src={coming_soon_left_col_image} />
          </Col>
          <Col id="success-right-col">
            <div id="success-right-col-wrapper">
              <img src={verified} />
            </div>
            <div id="success-right-col-wrapper">
              <div id="success-right-col-inner-wrapper">
                <p id="success-header">
                  Confirmed! You’re on the newsletter list!
                </p>
                <p>Thanks [User’s first name] for being awesome!</p>
                <p>
                  You’ll be receiving our congratulatory email from us shortly,
                  so make sure to keep a lookout for it! Don’t forget to check
                  your spam section too just in case we end up there.
                </p>
                <p>
                  Feel free to also spread the word about the upcoming and FREE
                  service that puts you back in the driver’s seat, with
                  first-class treatment, and your own virtual life assistant
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sucess;
