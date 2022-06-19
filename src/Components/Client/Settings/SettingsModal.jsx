import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../../../css/Settings/Settings_modal.css";

class SettingsModal extends React.Component {
  state = {
    showModal: this.props.modalState,
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
        >
          <Modal.Body>
            <div id="modal_close_btn"></div>
            <div id="settings_modal_wrapper">
              <p id="settings_modal_header">Profile settings</p>
              <p id="settings_modal_subheader">Hey, what's your pin again ?</p>

              <div id="settings_modal_form_container">
                <div id="settings_modal_form_subcontainer">
                  <form id="settings_modal_form">
                    <div id="pin-container">
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                    </div>
                  </form>
                </div>
              </div>

              <div
                id="setting_modal_form_button_wrapper"
                onClick={() => this.props.hideModal()}
              >
                <div id="settings_modal_form_button">
                  <p id="settings_modal_form_button_text">Continue</p>
                </div>
              </div>
              <p id="settings_modal_forgotten_password">Forgotten password ?</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SettingsModal;
