import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import illustration from "../Assets/jumbo.svg";
import "../css/Comingsoon.css";
import facebook from "../Assets/facebookIcon.svg";
import linkedIn from "../Assets/linkedinIcon.svg";
import checkBoxIcon from "../Assets/check_mark.png";
class Comingsoon extends Component {
  state = {
    details: {
      firstName: "",
      lastName: "",
      email: "",
    },
    invalidEmailError: false,
    emailExists: false,
    successText: false,
    noTextError: false,
    subscribe: false,
    errorSendingEmail: false,
    subscribeCheckBoxClass: false,
  };

  checkBox = (e) => {
    e.preventDefault();
    this.setState((previousState) => {
      return {
        subscribe: !previousState.subscribe,
        subscribeCheckBoxClass: !previousState.subscribeCheckBoxClass,
      };
    });
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };

  sendTransactionalEmail = async () => {
    const response = await fetch(
      "https://konecktomebackend.herokuapp.com/mail/transactional",
      {
        method: "POST",
        body: JSON.stringify({
          name: this.state.details.name,
          email: this.state.details.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    return details.message;
  };

  register = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://konecktomebackend.herokuapp.com/mail/new-user",
      {
        method: "POST",
        body: JSON.stringify({
          name: this.state.details.name,
          email: this.state.details.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "Text fields can't be empty") {
      this.setState({
        noTextError: true,
      });
      setTimeout(() => {
        this.setState({
          noTextError: false,
        });
      }, 1200);
    } else if (details.message === "Invalid email") {
      this.setState({
        invalidEmailError: true,
      });
      setTimeout(() => {
        this.setState({
          invalidEmailError: false,
        });
      }, 1200);
    } else if (details.message === "This email already exists") {
      this.setState({
        emailExists: true,
      });
      setTimeout(() => {
        this.setState({
          emailExists: false,
        });
      }, 1200);
    } else if (details.message === "Sign up successful") {
      const sendEmail = this.sendTransactionalEmail();
      if (sendEmail === "Error sending email") {
        this.setState({
          errorSendingEmail: true,
        });
        setTimeout(() => {
          this.setState({
            errorSendingEmail: false,
          });
        }, 1200);
      }
      if (this.state.subscribe === true) {
        const response = await fetch(
          "https://konecktomebackend.herokuapp.com/mail/marketing",
          {
            method: "POST",
            body: JSON.stringify({
              name: this.state.details.name,
              email: this.state.details.email,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        this.setState({
          details: {
            name: "",
            email: "",
          },
          successText: true,
        });
        setTimeout(() => {
          this.setState({
            successText: false,
          });
        }, 1200);
      } else if (this.state.subscribe === false) {
        this.setState({
          details: {
            name: "",
            email: "",
          },
          successText: true,
        });
        setTimeout(() => {
          this.setState({
            successText: false,
          });
        }, 1200);
      }
    }
  };
  render() {
    return (
      <div id="landing-wrapper">
        <Container>
          <Row>
            <Col id="left-col2">
              <h3 id="coming-soon-text">Coming soon</h3>
              <h3 id="get-notified-text">
                Get notified when <br></br> we launch
              </h3>
              <form>
                <Row>
                  <Col>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={this.state.details.firstName}
                      onChange={(e) => this.updateDetails(e)}
                    />
                  </Col>
                  <Col>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={this.state.details.lastName}
                      onChange={(e) => this.updateDetails(e)}
                    />
                  </Col>
                </Row>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={this.state.details.email}
                  onChange={(e) => this.updateDetails(e)}
                />
                {/* <br></br>
                <div id="checkbox-wrapper">
                  <div
                    onClick={(e) => this.checkBox(e)}
                    className={
                      this.state.subscribeCheckBoxClass ? "active" : "inactive"
                    }
                  >
                    <img src={checkBoxIcon} id="checkbox-icon" />
                  </div>
                  <p id="checkbox-text">
                    Click the box to subscribe for newsletters
                  </p>
                </div> */}
                <p>{this.state.checkText}</p>
                {this.state.noTextError === true ? (
                  <p id="no-text-error">Fields cannot be empty.</p>
                ) : (
                  <p></p>
                )}
                {this.state.invalidEmailError === true ? (
                  <p id="invalid-email-error">Invalid email</p>
                ) : (
                  <p></p>
                )}
                {this.state.successText === true ? (
                  <p id="success-text">
                    You have successfully signed up on our platform.
                  </p>
                ) : (
                  <p></p>
                )}
                {this.state.emailExists === true ? (
                  <p id="no-text-error">This email already exists.</p>
                ) : (
                  <p></p>
                )}
                <button id="btn" onClick={(e) => this.register(e)}>
                  NOTIFY ME
                </button>
              </form>
              <div id="icons-wrapper">
                <div>
                  <img src={facebook} />
                </div>
                <div>
                  <img src={linkedIn} />
                </div>
              </div>
            </Col>
            <Col id="right-col2">
              <img src={illustration} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Comingsoon;
