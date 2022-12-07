import React, { Component } from "react";
import Footer from "../LandingPage/Footer";
import signUpImage from "../../../Assets/signup-left-image-svg.svg";
import "../../../css/Signup & login/SignUp.css";
import { Row, Col } from "react-bootstrap";
import googleIcon from "../../../Assets/google-icon.png";
import facebookIcon from "../../../Assets/facebook.png";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    details: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    pin: {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    },
    emptyFields: false,
    error: false,
    success: false,
    emailExists: false,
    invalidEmail: false,
    sendLoading: false,
    passwordLessThan7: false,
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const pin = this.state.pin;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    pin[id] = e.currentTarget.value;
    this.setState({ details, pin });
  };

  isValidEmail = (email) => {
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };

  register = async (e) => {
    e.preventDefault();
    if (e.key === "Enter" || e.type === "click") {
      const concatenatePin =
        this.state.pin.pin1 +
        this.state.pin.pin2 +
        this.state.pin.pin3 +
        this.state.pin.pin4;
      if (
        this.state.details.firstName === "" ||
        this.state.details.lastName === "" ||
        this.state.details.email === "" ||
        this.state.details.password === ""
      ) {
        this.setState({ emptyFields: true });
        setTimeout(() => this.setState({ emptyFields: false }), 1500);
      } else if (this.isValidEmail(this.state.details.email) === false) {
        this.setState({ invalidEmail: true });
        setTimeout(() => this.setState({ invalidEmail: false }), 1500);
      } else {
        this.setState({ sendLoading: true });
        const response = await fetch(
          "https://konecktomebackend.herokuapp.com/users/sign-up/yes",
          {
            method: "POST",
            body: JSON.stringify({
              firstName: this.state.details.firstName,
              lastName: this.state.details.lastName,
              email: this.state.details.email,
              password: this.state.details.password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const details = await response.json();
        if (details.message === "Email already exists") {
          this.setState({ emailExists: true, sendLoading: false });
          setTimeout(() => this.setState({ emailExists: false }), 1500);
        } else if (details.message === "Less Than 7") {
          this.setState({ passwordLessThan7: true, sendLoading: false });
          setTimeout(() => this.setState({ passwordLessThan7: false }), 1500);
        } else if (details.id) {
          this.setState({
            success: true,
            details: {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            },
          });
          setTimeout(
            () => this.setState({ sendLoading: false, success: false }),
            1500
          );
          // window.location.href = `https://konecktome-mvp.herokuapp.com/dashboard/${details.id}`;
          window.location.href = `http://localhost:3000/dashboard/${details.id}`;
        }
      }
    }
  };

  loginWithGoogle = async () => {
    window.location.href =
      "https://konecktomebackend.herokuapp.com/users/auth/google";
  };

  loginWithFacebook = async () => {
    window.location.href =
      "https://konecktomebackend.herokuapp.com/users/login/facebook";
  };

  handleKeypress = (e) => {
    if (e.key === "Enter") {
      this.btn.click();
    }
  };
  render() {
    return (
      <div id="sign-up-main">
        <div id="signup-container">
          <Row id="signup-row" className="mx-0">
            <Col md={6} className="p-0">
             <div id="signup-left-column" className="w-100 h-100">
                <img src={signUpImage} />
              </div>
            </Col>
            <Col md={6} className="p-0">
              <div id="sign-up-right-col">
                <p className="desktop-header sign-up-header">Register</p>
                <p className="desktop-header sign-up-header">Continue With</p>
                <div id="login-icon-wrapper">
                  <div
                    className="icons-holder"
                    onClick={() => this.loginWithGoogle()}
                  >
                    <img src={googleIcon} className="auth-icons" />
                    <p className="desktop-text fs-3 my-0 ms-3">Google</p>
                  </div>
                  <div
                    className="icons-holder"
                    onClick={() => this.loginWithFacebook()}
                  >
                    <img src={facebookIcon} className="auth-icons" />
                    <p className="desktop-text fs-3 my-0 ms-3">Facebook</p>
                  </div>
                </div>
                <div className="desktop-header sign-up-header">OR</div>
                <form>
                  <Row>
                    <Col md={6}>
                      <div className="input-holder">
                        <input
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          value={this.state.details.firstName}
                          onChange={(e) => this.updateDetails(e)}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-holder">
                        <input
                          id="lastName"
                          placeholder="Last Name"
                          type="text"
                          value={this.state.details.lastName}
                          onChange={(e) => this.updateDetails(e)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="input-holder">
                    <input
                      className="mt-1"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={this.state.details.email}
                      onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div className="input-holder">
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={this.state.details.password}
                      onChange={(e) => this.updateDetails(e)}
                      onKeyPress={(e) => this.handleKeypress(e)}
                    />
                  </div>
                </form>
                {this.state.success === true ? (
                  <div className="success-notification-holder">
                    <p>Yay, Sign Up Successful</p>
                  </div>
                ) : null}
                {this.state.error === true ? (
                  <div className="error-notification-holder">
                    <p>I know, these things happen. Error </p>
                  </div>
                ) : null}
                {this.state.passwordLessThan7 === true ? (
                  <div className="error-notification-holder">
                    <p>
                      Password Must Be More Than 7 Characters And Alphanumeric
                    </p>
                  </div>
                ) : null}

                {this.state.emailExists === true ? (
                  <div className="exist-notification-holder">
                    <p>Yup, we've met before. Email already exists</p>
                  </div>
                ) : null}
                {this.state.emptyFields === true ? (
                  <div className="error-notification-holder">
                    <p>Input fields cannot be empty</p>
                  </div>
                ) : null}
                {this.state.invalidEmail === true ? (
                  <div className="error-notification-holder">
                    <p>Invalid Email</p>
                  </div>
                ) : null}
                <div className="desktop-text sign-up-footer">
                  <span>
                    By signing up, you agree to our
                    <span>
                      <Link className="links sign-up-span-link">
                        Terms & Conditions
                      </Link>
                    </span>
                    and
                    <span>
                      <Link className="links sign-up-span-link">
                        privacy policy
                      </Link>
                    </span>
                  </span>
                </div>
                <div id="sign-up-btn">
                  <div
                    className="desktop-medium-button"
                    onClick={(e) => this.register(e)}
                    ref={(node) => (this.btn = node)}
                  >
                    {this.state.sendLoading === true ? (
                      <div id="explore-loading"></div>
                    ) : (
                      <p className="desktop-big-button-text">Sign Up</p>
                    )}
                  </div>
                </div>
                <div id="sign-up-btn">
                  <span className="desktop-text">
                    Already have an account?{" "}
                    <span>
                      <Link to="/login" className="links sign-up-span-link">
                        Login here
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Signup;
