import React, { Component } from "react";
import "../../../css/Settings/Settings_payment.css";
import penc_edit_icon from "../../../Assets/pencil_icon.svg";
import AddressModal from "../AddressModal/AddressModal";
class Settings_payment extends React.Component {
  state = {
    editStatus: false,
  };

  handleOpenEditIcon = () => {
    this.setState({
      editStatus: !this.state.editStatus,
    });
  };
  render() {
    return (
      <>
        {this.props.userDetails.addressHistory.length === 0 ? (
          <div className="empty-services-holder">
            <p className="empty-services-text">
              Please Update your Address Details{" "}
              <span onClick={() => this.handleOpenEditIcon()}>Here</span>
            </p>
          </div>
        ) : (
          <div className="cards">
            {this.props.userDetails.addressHistory.map((addressItem) => {
              return (
                <div className="settings_payment_boxes card">
                  <div id="settings_payment_box_header">
                    <p>Main Address</p>
                    <img
                      src={penc_edit_icon}
                      onClick={() => this.handleOpenEditIcon()}
                    />
                  </div>
                  <hr></hr>
                  <div id="settings_payment_user_details">
                    <div>
                      <div className="settings_payment_user_details_inner_div">
                        <p className="settings_payment_user_details_label">
                          House Number
                        </p>
                        <p className="settings_payment_user_details_response">
                          {addressItem.buildingName}
                        </p>
                      </div>
                      <div className="settings_payment_user_details_inner_div">
                        <p className="settings_payment_user_details_label">
                          Post Code
                        </p>
                        <p className="settings_payment_user_details_response">
                          {addressItem.postCode}
                        </p>
                      </div>
                      <div className="settings_payment_user_details_inner_div">
                        <p className="settings_payment_user_details_label">
                          Duration Of Stay
                        </p>
                        <p className="settings_payment_user_details_response">
                          {addressItem.durationOfStay}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="settings_payment_user_details_inner_div">
                          <p className="settings_payment_user_details_label">
                            Address line 1
                          </p>
                          <p className="settings_payment_user_details_response">
                            {addressItem.addressLine1}
                          </p>
                        </div>
                        <div className="settings_payment_user_details_inner_div">
                          <p className="settings_payment_user_details_label">
                            Town
                          </p>
                          <p className="settings_payment_user_details_response">
                            {addressItem.town}
                          </p>
                        </div>
                        <div className="settings_payment_user_details_inner_div">
                          <p className="settings_payment_user_details_label">
                            Country
                          </p>
                          <p className="settings_payment_user_details_response">
                            This is my address
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="settings_payment_boxes" id="settings_payment_right-box">
          <div id="settings_payment_box_header">
            <p>Payment Info</p>
            <img src={penc_edit_icon} />
          </div>
          <hr></hr>
          <div id="settings_payment_right_box_inner_div">
            <div id="settings_payment_right_box_inner_div_payment_card">
              <p id="settings_payment_right_box_inner_div_payment_card_header">
                Your current card
              </p>
              <div id="settings_payment_right_box_inner_div_payment_card_numbers_wrapper">
                <p className="settings_payment_right_box_inner_div_payment_card_numbers">
                  ...
                </p>
                <p className="settings_payment_right_box_inner_div_payment_card_numbers">
                  ....
                </p>
                <p className="settings_payment_right_box_inner_div_payment_card_numbers">
                  ....
                </p>
                <p className="settings_payment_right_box_inner_div_payment_card_numbers">
                  6754
                </p>
              </div>
              <div id="settings_payment_right_box_inner_div_payment_card_numbers_wrapper">
                <div>
                  <p id="settings_payment_right_box_inner_div_payment_card_header">
                    Card holder
                  </p>
                  <p id="settings_payment_right_box_inner_div_payment_card_header">
                    Quadri. A
                  </p>
                </div>
                <div>
                  <p id="settings_payment_right_box_inner_div_payment_card_header">
                    Exp Date
                  </p>
                  <p id="settings_payment_right_box_inner_div_payment_card_header">
                    21/32
                  </p>
                </div>
              </div>
            </div>
            <div id="settings_payment_right_box_inner_div_card_instructions">
              This is your payment method to be use on all profiles. This is a
              placeholder that doesn't make sense
            </div>
          </div>
        </div> */}
            {this.state.editStatus === true ? (
              <AddressModal
                hideAddressModal={() => this.handleOpenEditIcon()}
                show={this.state.editStatus}
                userId={this.props.userDetails._id}
              />
            ) : null}
          </div>
        )}
      </>
    );
  }
}

export default Settings_payment;
