import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "../../../css/AddressModal/AddressModal.css";

class AddressModal extends React.Component {
  state = {
    // addresses: [
    //   1, 2, 3, 4, 5, 56, 7, 7, 88, 8, 7, 1, 2, 8, 9, 0, 8, 89829, 26262, 8, 0,
    //   1, 2, 3, 4, 5, 6, 67,
    // ],
    addresses: [],
    postCode: "",
    userAddress: "",
    addressSelected: false,
  };

  getAddresses = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.getAddress.io/find/${this.state.postCode}?api-key=Js4oNDxPEUurH4pZ-S7sJQ35398`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    this.setState({
      addresses: details.addresses,
    });
  };

  getAddressContent = (e) => {
    this.setState({
      userAddress: document.getElementById("address-text").textContent,
      addressSelected: true,
    });
  };
  render() {
    return (
      <div>
        <div class="address-modal">
          <div class="address-modal-content">
            <div id="review-modal-header">
              <p className="desktop-sub-header2">Add Address</p>
              <h1
                id="review-modal-close"
                onClick={() => this.props.hideAddressModal()}
              >
                X
              </h1>
            </div>
            <div id="address-modal-body">
              <form>
                <input
                  type="text"
                  placeholder="Enter post code"
                  id="address-modal-message"
                  value={this.state.postCode}
                  onChange={(e) =>
                    this.setState({
                      postCode: e.currentTarget.value,
                    })
                  }
                />
              </form>
              <div
                id="address-modal-button"
                onClick={(e) => this.getAddresses(e)}
              >
                <p className="desktop-big-button-text modal-button-text">
                  Check postcode
                </p>
              </div>
            </div>
            {this.state.userAddress !== "" ? (
              <div id="selected-address-holder">
                <p className="desktop-sub-header2">Selected Address</p>
                <p className="settings_payment_user_details_label">
                  {this.state.userAddress}
                </p>
              </div>
            ) : null}
            <div id="addresses-container">
              {this.state.addresses.length !== 0 ? (
                <div>
                  {this.state.addresses.map((rr) => {
                    return (
                      <div
                        id="addresses"
                        onClick={(e) => this.getAddressContent(e)}
                      >
                        <p
                          className="desktop-big-button-text modal-button-text"
                          id="address-text"
                        >
                          {rr}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            {this.state.addressSelected === false ? (
              <div>
                <div id="or-holder">
                  <p className="desktop-sub-header2">Enter Address Manually</p>
                </div>
                <form>
                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">
                      Building name
                    </p>
                    <input
                      type="text"
                      placeholder="Enter post code"
                      id="address-modal-message"
                      // value={this.state.details.email}
                      // onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">
                      Address Line 1
                    </p>
                    <input
                      type="text"
                      placeholder="Enter post code"
                      id="address-modal-message"
                      // value={this.state.details.email}
                      // onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">
                      Address Line 2
                    </p>
                    <input
                      type="text"
                      placeholder="Enter post code"
                      id="address-modal-message"
                      // value={this.state.details.email}
                      // onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">Town</p>
                    <input
                      type="text"
                      placeholder="Enter post code"
                      id="address-modal-message"
                      // value={this.state.details.email}
                      // onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">
                      Post Code
                    </p>
                    <input
                      type="text"
                      placeholder="Enter post code"
                      id="address-modal-message"
                      // value={this.state.details.email}
                      // onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">
                      How long did you stay at this address?
                    </p>
                    <div id="address-modal-body">
                      <div>
                        <p className="settings_payment_user_details_label">
                          From
                        </p>
                        <input
                          type="date"
                          placeholder="Enter post code"
                          id="address-modal-message"
                        />
                      </div>
                      <div>
                        <p className="settings_payment_user_details_label">
                          Till
                        </p>
                        <input
                          type="date"
                          placeholder="Enter post code"
                          id="address-modal-message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
            <div id="submit-btn">
              <div id="address-modal-button">
                <p className="desktop-big-button-text modal-button-text">
                  Submit address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressModal;
