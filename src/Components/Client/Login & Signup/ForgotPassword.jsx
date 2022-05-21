import React, { Component } from "react";
import signUpImage from "../../../Assets/signup-left-image.png";
import Footer from "../LandingPage/Footer";
import { Row, Col } from "react-bootstrap";

class ForgotPassword extends React.Component {
  state = {
    details: {
      email: "",
    },
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };

  resetPassword = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:3002/users/forgot-password",
      {
        method: "POST",
        body: JSON.stringify({
          email: this.state.details.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    alert(details.message);
    this.setState({
      details: {
        email: "",
      },
    });
  };
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
                    value={this.state.details.email}
                    onChange={(e) => this.updateDetails(e)}
                  />
                </div>
                <div id="sign-up-btn" onClick={(e) => this.resetPassword(e)}>
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
