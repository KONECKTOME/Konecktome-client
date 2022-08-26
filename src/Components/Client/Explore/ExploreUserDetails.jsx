import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";

class ExploreUserDetails extends Component {
  state = {
    userDetails: {
      phone: "",
      profession: "",
      gender: "",
    },
    dob: "",
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
    if (details.message === "User profession and co updated!") {
      this.setState({
        success: true,
        userDetails: {
          phone: "",
          profession: "",
          gender: "",
          dob: "",
        },
      });
      setTimeout(() => this.setState({ success: false }), 1500);
    } else if (details.message === "ERROR!") {
      this.setState({
        error: true,
      });
      setTimeout(() => this.setState({ error: false }), 1500);
    }
  };

  updateUserDetails = (e) => {
    const userDetails = this.state.userDetails;
    const id = e.currentTarget.id;
    userDetails[id] = e.currentTarget.value;
    this.setState({ userDetails });
  };
  render() {
    return (
      <div>
        <div id="settings_password_security_wrapper">
          <div id="settings_password_security_sub_wrapper">
            <p id="settings_password_security_header_text">
              PLEASE UPDATE DETAILS
            </p>
          </div>
        </div>
        <div id="">
          <div className="settings_password_security_form_inner_wrapper">
            <form>
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                value={this.state.userDetails.phone}
                onChange={(e) => this.updateUserDetails(e)}
              />
              <input
                type="text"
                placeholder="Profession"
                id="profession"
                value={this.state.userDetails.profession}
                onChange={(e) => this.updateUserDetails(e)}
              />
              <input
                type="text"
                placeholder="Gender"
                id="gender"
                value={this.state.userDetails.gender}
                onChange={(e) => this.updateUserDetails(e)}
              />
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                id="dob"
                value={this.state.dob}
                onChange={(e) =>
                  this.setState({
                    dob: e.currentTarget.value,
                  })
                }
              />
            </form>
            {this.state.success === true ? (
              <div className="password-success-notification-holder">
                <p>Details Updates</p>
              </div>
            ) : null}
            {this.state.error === true ? (
              <div className="password-error-notification-holder">
                <p>Incorrect Password</p>
              </div>
            ) : null}
            {this.state.emptyfields === true ? (
              <div className="password-error-notification-holder">
                <p>New Passwords Do Not Match</p>
              </div>
            ) : null}

            <div
              className="desktop-big-button"
              id={
                this.props.renderAddressAndUserDetails === true
                  ? "exploreUserHideBtn"
                  : ""
              }
              onClick={(e) => this.editProfessionAndDOB(e)}
            >
              <p className="desktop-big-button-text">Update Details</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreUserDetails;
