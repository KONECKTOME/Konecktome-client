import React, { Component } from "react";
import "../../../css/Settings/Settings_profile.css";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import profilePictureIcon from "../../../Assets/edit-profile-picture-icon.svg";
import Settings_save_changes_modal from "./Settings_save_changes_modal";
import Loader from "../Loader/Loader";
import { Row, Col } from "react-bootstrap";

class Settings_profile extends React.Component {
  state = {
    profileImage: null,
    showSaveChangesModal: false,
    loading: false,
  };

  handleImageUpload = async () => {
    const photo = new FormData();
    photo.append("image", this.state.profileImage);
    const response = await fetch(
      `http://localhost:3002/users/image-upload/${this.props.userId}`,
      {
        method: "POST",
        body: photo,
      }
    );

    const details = await response.json();

    if (details.message === "Image added successfully") {
      alert("suc");
    }
  };
  handleChange = (e) => {
    const profileImage = e.target.files[0];
    this.setState({
      profileImage,
    });

    setTimeout(() => this.handleImageUpload(), 1000);
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
      <>
        {this.state.loading === true ? <Loader /> : null}
        <div id="settings_profile_wrapper">
          <div id="settings_profile_inner_wrapper">
            <div id="settings-profile-image-container">
              <div id="settings-profile-image-sub-container">
                <img
                  src={profileSettingPlaceholder}
                  id="settings_profile_image"
                />
                <div id="image-upload-holder">
                  <label htmlFor="file-input">
                    <img
                      src={profilePictureIcon}
                      id="settings_profile_edit_icon"
                    />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    image="file"
                    onChange={(e) => this.handleChange(e)}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div id="settings-profile-details-container">
              <Row>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Name</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                    {/* <div className="settings-profile-input-container">
                      <input />
                    </div> */}
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Phone</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                    {/* <div className="settings-profile-input-container">
                      <input />
                    </div> */}
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Age</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                  </div>
                </Col>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Last Name</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Profession</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Date Of Birth</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                  </div>
                </Col>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Email</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Gender</p>
                    <p id="settings_profile_details_sub_header">Timothy</p>
                  </div>
                  <div
                    id="settings-profile-button"
                    onClick={() => this.showSaveChangesModalfn()}
                  >
                    <p>Edit Profile</p>
                  </div>
                </Col>
              </Row>
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
      </>
    );
  }
}

export default Settings_profile;
