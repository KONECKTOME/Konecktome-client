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
    userDetails: {
      firstName: this.props.userDetails.firstName,
      lastName: this.props.userDetails.lastName,
      email: this.props.userDetails.email,
      phone: this.props.userDetails.phone,
      profession: this.props.userDetails.profession,
      gender: this.props.userDetails.gender,
    },
    dob: this.props.userDetails.dob,
    showEditProfile: false,
  };

  updateUserDetails = (e) => {
    const userDetails = this.state.userDetails;
    const id = e.currentTarget.id;
    userDetails[id] = e.currentTarget.value;
    this.setState({ userDetails });
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

  showEditProfile = () => {
    this.setState({
      showEditProfile: !this.state.showEditProfile,
    });
  };

  fixDateString = (dateToBeFixed) => {
    const arr = dateToBeFixed.split("-");
    let year = arr[0].split("")[2] + arr[0].split("")[3];
    const dateStringNeeded = year + "-" + arr[1] + "-" + arr[2];
    return dateStringNeeded;
  };

  editUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3002/users/edit-user`, {
      method: "PUT",
      body: JSON.stringify({
        userId: this.props.userDetails._id,
        firstName: this.state.userDetails.firstName,
        lastName: this.state.userDetails.lastName,
        email: this.state.userDetails.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const details = await response.json();
    if (details === "Invalid email") {
      alert("invalid email");
    } else if (details === "User updated") {
      return "User updated";
    } else if (details === "Error") {
      return "Error";
    }
  };

  editProfessionAndDOB = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3002/users/update-dob-profession`,
      {
        method: "PUT",
        body: JSON.stringify({
          userId: this.props.userDetails._id,
          dob: this.state.dob,
          profession: this.state.userDetails.profession,
          phone: this.state.userDetails.phone,
          gender: this.state.userDetails.gender,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details === "User profession and co updated!") {
      alert("Success updated");
    } else if (details === "ERROR!") {
      return "error";
    }
  };

  updateProfileDetails = async (e) => {
    e.preventDefault();
    this.editUser(e);
    this.editProfessionAndDOB(e);
    this.setState({
      showEditProfile: false,
    });
    // if (this.editUser(e) === "User updated") {
    //   if (this.editProfessionAndDOB(e) === "User profession and co updated!") {
    //     alert("success");
    //     this.setState({
    //       showEditProfile: false,
    //     });
    //   } else if (this.editProfessionAndDOB(e) === "error") {
    //     alert("Error in profession age");
    //   }
    // } else if (this.editUser(e) === "Error") {
    //   alert("error in user details");
    // }
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
              {this.state.showEditProfile === true ? (
                <Row id="edit-profile-row">
                  <Col lg={4}>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Name</p>
                      <div className="settings-profile-input-container">
                        <input
                          id="firstName"
                          value={this.state.userDetails.firstName}
                          onChange={(e) => this.updateUserDetails(e)}
                        />
                      </div>
                    </div>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Phone</p>
                      <div className="settings-profile-input-container">
                        <input
                          id="phone"
                          value={this.state.userDetails.phone}
                          onChange={(e) => this.updateUserDetails(e)}
                        />
                      </div>
                    </div>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Date Of Birth</p>
                      <div className="settings-profile-input-container">
                        <input
                          type="date"
                          placeholder="dd-mm-yyyy"
                          id="dob"
                          value={this.state.userDetails.dob}
                          onChange={(e) =>
                            this.setState({
                              dob: e.currentTarget.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Last Name</p>
                      <div className="settings-profile-input-container">
                        <input
                          id="lastName"
                          value={this.state.userDetails.lastName}
                          onChange={(e) => this.updateUserDetails(e)}
                        />
                      </div>
                    </div>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Profession</p>
                      <div className="settings-profile-input-container">
                        <input
                          id="profession"
                          value={this.state.userDetails.profession}
                          onChange={(e) => this.updateUserDetails(e)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Email</p>
                      <div className="settings-profile-input-container">
                        <input
                          id="email"
                          value={this.state.userDetails.email}
                          onChange={(e) => this.updateUserDetails(e)}
                        />
                      </div>
                    </div>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Gender</p>
                      <div className="settings-profile-input-container">
                        <input
                          id="gender"
                          value={this.state.userDetails.gender}
                          onChange={(e) => this.updateUserDetails(e)}
                        />
                      </div>
                    </div>
                    <div
                      id="settings-profile-button"
                      onClick={(e) => this.updateProfileDetails(e)}
                    >
                      <p>Update Profile</p>
                    </div>
                  </Col>
                </Row>
              ) : (
                <Row id="profile-details-row">
                  <Col>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Name</p>
                      <p id="settings_profile_details_sub_header">
                        {this.props.userDetails.firstName}
                      </p>
                    </div>
                    <div className="settings-profile-input-label-container">
                      <p id="settings_profile_details_header">Phone</p>
                      <p id="settings_profile_details_sub_header">
                        {this.props.userDetails.phone === undefined
                          ? "Note Provided"
                          : this.props.userDetails.phone}
                      </p>
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
                      onClick={() => this.showEditProfile()}
                    >
                      <p>Edit Profile</p>
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </div>
          {/* {this.state.showSaveChangesModal === true ? (
            <Settings_save_changes_modal
              showSaveChangesModal={this.state.showSaveChangesModal}
              hideSaveChangesModal={() => this.hideSaveChangesModal()}
            />
          ) : (
            <div></div>
          )} */}
        </div>
      </>
    );
  }
}

export default Settings_profile;
