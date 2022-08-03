import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../../../css/Settings/Settings_modal.css";

class SettingsModal extends React.Component {
  state = {
    showModal: this.props.modalState,
    pin: {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    },
    emptyFields: false,
    notFound: false,
    success: false,
  };

  updatePinDetails = (e) => {
    const pin = this.state.pin;
    const id = e.currentTarget.id;
    pin[id] = e.currentTarget.value;
    this.setState({ pin });
  };

  autoTab = (current, to) => {
    alert(current);
    if (
      current.getAttribute &&
      current.value.length == current.getAttribute("maxlength")
    ) {
      to.focus();
    }
  };

  validatePin = async () => {
    const concatenatePin =
      this.state.pin.pin1 +
      this.state.pin.pin2 +
      this.state.pin.pin3 +
      this.state.pin.pin4;
    if (
      this.state.pin.pin1 === "" ||
      this.state.pin.pin2 === "" ||
      this.state.pin.pin3 === "" ||
      this.state.pin.pin4 === ""
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else {
      const response = await fetch("http://localhost:3002/users/check-pin", {
        method: "POST",
        body: JSON.stringify({
          email: this.props.userEmail,
          pin: concatenatePin,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const details = await response.json();
      if (details.message === "Invalid User") {
        this.setState({ notFound: true });
        setTimeout(() => this.setState({ notFound: false }), 1500);
      } else if (details.message === "Valid User") {
        this.setState({ success: true });
        setTimeout(() => this.setState({ success: false }), 1500);
        setTimeout(() => this.props.hideModal(), 1500);
      }
    }
  };

  goBackToDashboard = () => {
    this.props.hideModal();
    window.location.href = `http://localhost:3000/dashboard/${this.props.userId}`;
  };

  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.props.hideModal()}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            <div id="settings_modal_wrapper">
              <p id="settings_modal_header">Profile settings</p>
              {this.props.userPin === "0000" ? (
                <div className="exist-notification-holder">
                  Go Back to Dashboard To Set Your Pin
                </div>
              ) : null}
              <p id="settings_modal_subheader">Hey, what's your pin again ?</p>
              <div id="settings_modal_form_container">
                <div id="settings_modal_form_subcontainer">
                  <form id="settings_modal_form" name="pinForm">
                    <div id="pin-container">
                      <input
                        type="text"
                        maxlength="1"
                        id="pin1"
                        value={this.state.pin.pin1}
                        onChange={(e) => this.updatePinDetails(e)}
                      />
                      <input
                        type="text"
                        maxlength="1"
                        id="pin2"
                        name="pin2"
                        value={this.state.pin.pin2}
                        onChange={(e) => this.updatePinDetails(e)}
                      />
                      <input
                        type="text"
                        maxlength="1"
                        id="pin3"
                        value={this.state.pin.pin3}
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
              {this.state.notFound === true ? (
                <div id="setting_modal_form_button_wrapper">
                  <div id="settings_modal_form_error_button">
                    <p id="settings_modal_form_button_text">Incorrect Pin</p>
                  </div>
                </div>
              ) : null}

              {this.state.emptyFields === true ? (
                <div id="setting_modal_form_button_wrapper">
                  <div id="settings_modal_form_error_button">
                    <p id="settings_modal_form_button_text">
                      Fields cannot be empty
                    </p>
                  </div>
                </div>
              ) : null}

              {this.state.success === true ? (
                <div id="setting_modal_form_button_wrapper">
                  <div id="settings_modal_form_success_button">
                    <p id="settings_modal_form_button_text">Pin Validated</p>
                  </div>
                </div>
              ) : null}

              <div
                id="setting_modal_form_button_wrapper"
                onClick={() => this.validatePin()}
              >
                <div id="settings_modal_form_button">
                  <p id="settings_modal_form_button_text">Continue</p>
                </div>
              </div>
              <div id="pin-container">
                <p id="settings_modal_forgotten_password">Forgotten pin?</p>
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
    );
  }
}

export default SettingsModal;
