import React, { Component } from "react";

class ExploreUserDetails extends Component {
  state = {
    userDetails: {
      phone: "",
      profession: "",
      gender: "",
      dob: "",
    },
  };
  render() {
    return (
      <div>
        {/* <div id="settings_password_security_wrapper">
          <div id="settings_password_security_sub_wrapper">
            <p id="settings_password_security_header_text">
              PLEASE UPDATE DETAILS
            </p>
          </div>
        </div> */}
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
                value={this.state.userDetails.dob}
                onChange={(e) => this.updateUserDetails(e)}
              />
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
                onClick={(e) => this.editProfessionAndDOB(e)}
              >
                <p className="desktop-big-button-text">Update Details</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreUserDetails;
