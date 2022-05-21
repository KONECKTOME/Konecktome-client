import React, { Component } from "react";
import signUpImage from "../../../Assets/signup-left-image.png";
import Footer from "../LandingPage/Footer";
import { Row, Col } from "react-bootstrap";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div id="sign-up-main">
        <Row>
          <Col md={6}>
            <div>
              <img src={signUpImage} />
            </div>
          </Col>
          <Col md={6}>
            <div id="sign-up-right-col">
              <p className="desktop-header sign-up-header">Recover Password</p>
              <form>
                <div className="input-holder">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email you registered with"
                  />
                </div>
                <div id="sign-up-btn">
                  <div className="desktop-medium-button">
                    <p className="desktop-big-button-text">Recover password</p>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default ForgotPassword;
