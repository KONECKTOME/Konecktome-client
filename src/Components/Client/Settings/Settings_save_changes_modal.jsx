import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class Settings_save_changes_modal extends React.Component {
  state = {
    showSaveChangesModal: this.props.showSaveChangesModal,
  };
  render() {
    return (
      <div>
        <Modal
          show={this.state.showSaveChangesModal}
          onHide={() => this.props.hideSaveChangesModal()}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div id="modal_close_btn"></div>
            <div id="settings_modal_wrapper">
              <p id="settings_modal_header">Profile settings</p>
              <p id="settings_modal_subheader">
                Hey, what's your passcode again ?
              </p>
              <div id="settings_modal_form_container">
                <div id="settings_modal_form_subcontainer">
                  <form id="settings_modal_form">
                    <input type="text" />
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

export default Settings_save_changes_modal;
