import React, { Component } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "../../../css/Settings/Settings_save_changes_modal.css";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";

class Settings_save_changes_modal extends React.Component {
  state = {
    showSaveChangesModal: this.props.showSaveChangesModal,
    arr1: [1, 2, 3, 4, 5, 6],
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.showSaveChangesModal}
          onHide={() => this.props.hideSaveChangesModal()}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div
              id="modal_close_btn"
              onClick={() => this.props.hideSaveChangesModal()}
            >
              X
            </div>
            <div id="settings_confirmation_modal_wrapper">
              <p id="settings_modal_header">CONFIRMATION</p>
              <p id="settings_confirmation_modal_subheader">
                Lorem ipsum is simply a dummy text of printing and typesetting
                industry
              </p>
              <div id="settings_modal_form_container">
                <div id="settings_modal_form_subcontainer">
                  <form id="settings_modal_form">
                    <input type="text" />
                  </form>
                </div>
              </div>
              <div id="settings_confirmation_modal_checkbox_wrapper">
                <div>
                  <input type="checkbox"></input>
                </div>
                <div>
                  <div>
                    <p>Apply changes to all service providers</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>0/73 selected</p>
                  </div>
                </div>
              </div>
              {this.state.arr1.map((ss) => {
                return (
                  <>
                    <div id="settings_confirmation_modal_checkbox_wrapper">
                      <div>
                        <input type="checkbox"></input>
                      </div>
                      <div id="settings_profile_confirmation_modal-service-provider-wrapper">
                        <div id="settings-profile-confirmation-modal-image-sub-container">
                          <img
                            src={profileSettingPlaceholder}
                            id="settings_profile_modal_confirmation_image"
                          />
                        </div>
                        <p id="settings_profile_modal_confirmation-service-provider-name">
                          Some service provider name
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <hr></hr>
                  </>
                );
              })}
              <div
                id="setting_modal_form_button_wrapper"
                onClick={() => this.props.hideSaveChangesModal()}
              >
                <div id="settings_modal_form_button">
                  <p id="settings_modal_form_button_text">Continue</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Settings_save_changes_modal;
