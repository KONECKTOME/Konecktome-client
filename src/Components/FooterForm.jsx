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
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };
  render() {
    return (
      <>
        <div id="footer-form-wrapper">
          <div className="container">
            <div className="row-wrapper">
              <Row>
                <Col lg={6}>
                  <h1 id="mail-list-text">
                    Join our mailing list and get notified when we launch
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
                    <button
                      id="subscribe-btn"
                      onClick={(e) => this.register(e)}
                    >
                      Subscribe
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
