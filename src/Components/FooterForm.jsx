import React, { Component } from "react";
import "../css/FooterForm.css";
import { Container, Row, Col } from "react-bootstrap";
class FooterForm extends Component {
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
  sendMartketingEmail = async () => {
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/mail/marketing",
      {
        method: "POST",
        body: JSON.stringify({
          fName: this.state.details.firstName,
          lName: this.state.details.lastName,
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

  sendTransactionalEmail = async () => {
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/mail/transactional",
      {
        method: "POST",
        body: JSON.stringify({
          fName: this.state.details.firstName,
          lName: this.state.details.lastName,
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
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/mail/new-user",
      {
        method: "POST",
        body: JSON.stringify({
          fName: this.state.details.firstName,
          lName: this.state.details.lastName,
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
        details: {
          firstName: "",
          lastName: "",
          email: "",
        },
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
        details: {
          firstName: "",
          lastName: "",
          email: "",
        },
      });
      setTimeout(() => {
        this.setState({
          emailExists: false,
        });
      }, 1200);
    } else if (details.message === "Sign up successful") {
      const sendEmail = this.sendTransactionalEmail();
      const sendMartketingEmail = this.sendMartketingEmail();
      if (
        sendEmail === "Error sending email" ||
        sendMartketingEmail === "An errored in adding to mail list"
      ) {
        this.setState({
          errorSendingEmail: true,
        });
        setTimeout(() => {
          this.setState({
            errorSendingEmail: false,
          });
        }, 1200);
      } else {
        this.setState({
          details: {
            firstName: "",
            lastName: "",
            email: "",
          },
          successText: true,
        });
        setTimeout(() => {
          this.setState({
            successText: false,
          });
        }, 1200);
        window.location.href = "https://konecktome.com/success";
      }
    }
  };
  render() {
    return (
      <>
        <div id="footer-form-wrapper">
          <div className="container">
            <div className="row-wrapper">
              <Row>
                <Col lg={6}>
                  <p id="mail-list-text-coming-soon">We are coming soon...</p>
                  <h1 id="mail-list-text">
                    Join our mailing list and get notified when we launch.
                  </h1>
                </Col>
                <Col lg={6}>
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
                    {this.state.noTextError === true ? (
                      <div>
                        <div id="no-text-error">
                          <p>Bummer, text fields cannot be empty.</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    {this.state.invalidEmailError === true ? (
                      <div>
                        <div id="no-text-error">
                          <p>oops, email is invalid...</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    {this.state.successText === true ? (
                      <div>
                        <div id="success-text">
                          <p>
                            That's what we like to see, sign up is successful
                            !!!
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    {this.state.emailExists === true ? (
                      <div>
                        <div id="email-exists">
                          <p>
                            Yup, we've met before. Your email already exists!!!
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    <button
                      id="subscribe-btn"
                      onClick={(e) => this.register(e)}
                    >
                      SUBSCRIBE
                    </button>
                  </form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterForm;
