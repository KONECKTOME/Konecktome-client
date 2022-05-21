import React, { Component } from "react";
import Footer from "../LandingPage/Footer";
import signUpImage from "../../../Assets/signup-left-image.png";
import "../../../css/Signup & login/SignUp.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    details: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
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
    if (this.isValidEmail(this.state.details.email) === false) {
      console.log("invalid email");
    } else {
      const response = await fetch("http://localhost:3002/users/sign-up", {
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
      });
      const details = await response.json();
      this.setState({
        details: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
      });
      alert(details.id);
    }
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
              <p className="desktop-header sign-up-header">Create Account</p>
              <form>
                <Row>
                  <Col>
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
                  <Col>
                    <div className="input-holder">
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.details.lastName}
                        onChange={(e) => this.updateDetails(e)}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="input-holder">
                  <input
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
                  />
                </div>
              </form>
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
              <div id="sign-up-btn" onClick={(e) => this.register(e)}>
                <div className="desktop-medium-button">
                  <p className="desktop-big-button-text">Sign up</p>
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
    );
  }
}

export default Signup;
