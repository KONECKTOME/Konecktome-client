import React, { Component } from "react";
import "../../../css/Settings/Settings_profile.css";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import profilePictureIcon from "../../../Assets/edit-profile-picture-icon.svg";
import Settings_save_changes_modal from "./Settings_save_changes_modal";
import { Row, Col } from "react-bootstrap";

class Settings_profile extends React.Component {
  state = {
    showSaveChangesModal: false,
  };

  showSaveChangesModalfn = () => {
    this.setState({
      showSaveChangesModal: true,
    });
  };
  hideSaveChangesModal = () => {
    this.setState({
      showSaveChangesModal: false,
    });
  };
  render() {
    return (
      <div id="settings_profile_wrapper">
        <div id="settings_profile_inner_wrapper">
          <div id="settings-profile-image-container">
            <div id="settings-profile-image-sub-container">
              <img
                src={profileSettingPlaceholder}
                id="settings_profile_image"
              />
              <img src={profilePictureIcon} id="settings_profile_edit_icon" />
            </div>
            <div id="profile-image-user-details">
              <p class="desktop-header-loader">Timothy D.</p>
              <p className="desktop-sub-header1">UI/UX Designer</p>
            </div>
          </div>
          <div id="settings-profile-details-container">
            <form>
              <Row>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Name</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Phone</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Address Line 1</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Middle Name</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Email</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Address line 2</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Last Name</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Profession</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p className="form-labels">Post Code</p>
                    <div className="settings-profile-input-container">
                      <input />
                    </div>
                  </div>
                  <div
                    id="settings-profile-button"
                    onClick={() => this.showSaveChangesModalfn()}
                  >
                    <p>Save changes</p>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
        {this.state.showSaveChangesModal === true ? (
          <Settings_save_changes_modal
            showSaveChangesModal={this.state.showSaveChangesModal}
            hideSaveChangesModal={() => this.hideSaveChangesModal()}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Settings_profile;
