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
    imageUploadStatus: false,
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
      this.setState({ imageUploadStatus: true });
      setTimeout(
        () =>
          this.setState({
            imageUploadStatus: false,
          }),
        1000
      );
    } else if (details.message === "An error occured while uploading image") {
      alert("errir");
    }
  };
  handleChange = (e) => {
    const profileImage = e.target.files[0];
    this.setState({
      profileImage,
      loading: true,
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
        {this.state.loading === true ? (
          <Loader imageUploadStatus={this.state.imageUploadStatus} />
        ) : null}
        <div id="settings_profile_wrapper">
          <div id="settings_profile_inner_wrapper">
            <div id="settings-profile-image-container">
              <div id="settings-profile-image-sub-container">
                <img
                  src={this.props.userDetails.imageUrl}
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
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.firstName}
                    </p>
                    {/* <div className="settings-profile-input-container">
                      <input />
                    </div> */}
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Phone</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.phone === undefined
                        ? "Note Provided"
                        : this.props.userDetails.phone}
                    </p>
                    {/* <div className="settings-profile-input-container">
                      <input />
                    </div> */}
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Age</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.age === undefined
                        ? "Note Provided"
                        : this.props.userDetails.age}
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Last Name</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.lastName}
                    </p>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Profession</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.profession === undefined
                        ? "Note Provided"
                        : this.props.userDetails.profession}
                    </p>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Date Of Birth</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.dob === undefined
                        ? "Note Provided"
                        : this.props.userDetails.dob}
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Email</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.email}
                    </p>
                  </div>
                  <div className="settings-profile-input-label-container">
                    <p id="settings_profile_details_header">Gender</p>
                    <p id="settings_profile_details_sub_header">
                      {this.props.userDetails.gender === undefined
                        ? "Note Provided"
                        : this.props.userDetails.gender}
                    </p>
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
