import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class PinModal extends React.Component {
  state = {
    showModal: this.props.modalState,
    pin: {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    },
    confirmNewPin: {
      confirmpin1: "",
      confirmpin2: "",
      confirmpin3: "",
      confirmpin4: "",
    },
    emptyFields: false,
    pinsDontMatch: false,
    success: false,
    error: false,
  };

  updatePinDetails = (e) => {
    const pin = this.state.pin;
    const id = e.currentTarget.id;
    pin[id] = e.currentTarget.value;
    this.setState({ pin });
  };

  updateConfirmPinDetails = (e) => {
    const confirmNewPin = this.state.confirmNewPin;
    const id = e.currentTarget.id;
    confirmNewPin[id] = e.currentTarget.value;
    this.setState({ confirmNewPin });
  };

  autoTab = (current, to) => {
    if (
      current.getAttribute &&
      current.value.length == current.getAttribute("maxlength")
    ) {
      to.focus();
    }
  };

  goBackToDashboard = () => {
    this.props.hidePinModal();
    this.props.history.push("/dashboard/" + this.props.userId);
  };

  pinInArray = (str) => {
    return str.split("").length;
  };

  sendPin = async () => {
    const concatenatePin =
      this.state.pin.pin1 +
      this.state.pin.pin2 +
      this.state.pin.pin3 +
      this.state.pin.pin4;
    const concatenateConfirmPin =
      this.state.confirmNewPin.confirmpin1 +
      this.state.confirmNewPin.confirmpin2 +
      this.state.confirmNewPin.confirmpin3 +
      this.state.confirmNewPin.confirmpin4;
    if (
      this.pinInArray(concatenatePin) !== 4 ||
      this.pinInArray(concatenateConfirmPin) !== 4
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else if (concatenatePin !== concatenateConfirmPin) {
      this.setState({ pinsDontMatch: true });
      setTimeout(() => this.setState({ pinsDontMatch: false }), 1500);
    } else {
      const response = await fetch(
        "https://konecktomebackend.herokuapp.com/users/pin-for-OAuth",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.props.email,
            newPin: concatenatePin,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.message === "Invalid User") {
        this.setState({ error: true });
        setTimeout(() => this.setState({ error: false }), 1500);
      } else if (details.message === "Pin Updated") {
        this.setState({ success: true });
        setTimeout(() => this.setState({ success: false }), 2000);
        setTimeout(() => this.props.fetchUser(), 2000);
        setTimeout(() => this.props.hidePinModal(), 2000);
      }
    }
  };
  render() {
    return (
      <div>
        <div>
          <Modal
            show={this.state.showModal}
            onHide={() => this.props.hidePinModal()}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <div id="settings_modal_wrapper">
                <p id="settings_modal_header">Set Your Pin</p>
                <p id="settings_modal_subheader">Enter Pin You'd Like To Use</p>
                <div id="settings_modal_form_container">
                  <div id="settings_modal_form_subcontainer">
                    <form id="settings_modal_form" name="pinForm">
                      <div id="pin-container">
                        <input
                          type="text"
                          maxlength="1"
                          id="pin1"
                          value={this.state.pin.pin1}
                          onInput={() =>
                            this.autoTab(
                              document.pinForm.pin1,
                              document.pinForm.pin2
                            )
                          }
                          onChange={(e) => this.updatePinDetails(e)}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="pin2"
                          name="pin2"
                          value={this.state.pin.pin2}
                          onInput={() =>
                            this.autoTab(
                              document.pinForm.pin2,
                              document.pinForm.pin3
                            )
                          }
                          onChange={(e) => this.updatePinDetails(e)}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="pin3"
                          value={this.state.pin.pin3}
                          onInput={() =>
                            this.autoTab(
                              document.pinForm.pin3,
                              document.pinForm.pin4
                            )
                          }
                          onChange={(e) => this.updatePinDetails(e)}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="pin4"
                          value={this.state.pin.pin4}
                          onChange={(e) => this.updatePinDetails(e)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <p id="settings_modal_subheader">Confirm Pin</p>
                <div id="settings_modal_form_container">
                  <div id="settings_modal_form_subcontainer">
                    <form id="settings_modal_form" name="confirmPinForm">
                      <div id="pin-container">
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin1"
                          value={this.state.confirmNewPin.confirmpin1}
                          onInput={() =>
                            this.autoTab(
                              document.confirmPinForm.confirmpin1,
                              document.confirmPinForm.confirmpin2
                            )
                          }
                          onChange={(e) => this.updateConfirmPinDetails(e)}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin2"
                          name="pin2"
                          value={this.state.confirmNewPin.confirmpin2}
                          onInput={() =>
                            this.autoTab(
                              document.confirmPinForm.confirmpin2,
                              document.confirmPinForm.confirmpin3
                            )
                          }
                          onChange={(e) => this.updateConfirmPinDetails(e)}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin3"
                          value={this.state.confirmNewPin.confirmpin3}
                          onInput={() =>
                            this.autoTab(
                              document.confirmPinForm.confirmpin3,
                              document.confirmPinForm.confirmpin4
                            )
                          }
                          onChange={(e) => this.updateConfirmPinDetails(e)}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin4"
                          value={this.state.confirmNewPin.confirmpin4}
                          onChange={(e) => this.updateConfirmPinDetails(e)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {this.state.error === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_error_button">
                      <p id="settings_modal_form_button_text">
                        An Error Occured
                      </p>
                    </div>
                  </div>
                ) : null}

                {this.state.emptyFields === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_error_button">
                      <p id="settings_modal_form_button_text">
                        Input Fields cannot be empty
                      </p>
                    </div>
                  </div>
                ) : null}
                {this.state.pinsDontMatch === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_error_button">
                      <p id="settings_modal_form_button_text">
                        Pins Don't Match
                      </p>
                    </div>
                  </div>
                ) : null}

                {this.state.success === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_success_button">
                      <p id="settings_modal_form_button_text">Pin Saved</p>
                    </div>
                  </div>
                ) : null}

                <div
                  id="setting_modal_form_button_wrapper"
                  onClick={() => this.sendPin()}
                >
                  <div id="settings_modal_form_button">
                    <p id="settings_modal_form_button_text">Save</p>
                  </div>
                </div>
                <div id="pin-container">
                  <p
                    id="settings_modal_forgotten_password"
                    onClick={() => this.goBackToDashboard()}
                  >
                    Go Back to Dashboard
                  </p>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(PinModal);
