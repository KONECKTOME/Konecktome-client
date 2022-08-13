import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Modal, Row, Col } from "react-bootstrap";
import "../../../css/AddressModal/AddressModal.css";

class AddressModal extends React.Component {
  state = {
    addresses: [],
    postCode: "",
    userAddress: "",
    addressSelected: false,
    sentSuccess: false,
    addressDetails: {
      buildingName: "",
      postCode: "",
      addressLine1: "",
      addressLine2: "",
      town: "",
      city: "",
      currentAddress: null,
      postCode: "",
    },
    dateOfArrival: "",
    dateOfDeparture: "",
    updateUserDetails: null,
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
    console.log(this.state.addresses);
  };

  getAddressContent = (e) => {
    this.setState({
      userAddress: document.getElementById("address-text").textContent,
      addressSelected: true,
      addresses: [],
    });
  };

  updateAddressDetails = (e) => {
    const addressDetails = this.state.addressDetails;
    const id = e.currentTarget.id;
    addressDetails[id] = e.currentTarget.value;
    this.setState({ addressDetails });
  };

  fixDateString = (dateToBeFixed) => {
    const arr = dateToBeFixed.split("-");

    // let year = arr[0].split("")[2] + arr[0].split("")[3];
    // const dateStringNeeded = year + "-" + arr[1] + "-" + arr[2];
    return arr;
  };

  sendAddress = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/users/update-address", {
      method: "POST",
      body: JSON.stringify({
        userId: this.props.userId,
        addressId: this.props.addressId,
        buildingName: this.state.addressDetails.buildingName,
        addressLine1: this.state.addressDetails.addressLine1,
        addressLine2: this.state.addressDetails.addressLine2,
        town: this.state.addressDetails.town,
        city: this.state.addressDetails.city,
        currentAddress: false,
        postCode: this.state.addressDetails.postCode,
        dateOfArrival: this.fixDateString(this.state.dateOfArrival),
        dateOfDeparture: this.fixDateString(this.state.dateOfDeparture),
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const details = await response.json();
    if (details.message === "Address added") {
      alert("success");
      this.props.fetchUser();
    } else if (
      details.message ===
      "Date Of Arrival cannot be more than Date Of Departure"
    ) {
      alert("error");
    }
  };
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={() => this.props.hideAddressModal()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            {this.state.sentSuccess === true ? (
              <div id="notification-holder">
                <p className="desktop-big-button-text modal-button-text">
                  Yay, address added successfully !!!
                </p>
              </div>
            ) : null}
            <div id="address-modal-body" className="review-modal-header">
              <p className="desktop-sub-header2">Add Address</p>
              <div
                id="modal_close_btn"
                onClick={() => this.props.hideAddressModal()}
              >
                <p className="modal-close-button-text">X</p>
              </div>
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
            <div id="current-address-checkbox">
              <input type="checkbox" />
              <p className="desktop-sub-header2">
                Check the box if this is your current address
              </p>
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
                  <Row>
                    {this.state.addresses.map((rr) => {
                      return (
                        <Col md={6}>
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
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              ) : null}
            </div>

            {this.state.addressSelected === false ? (
              <div>
                <div id="or-holder">
                  <p className="desktop-sub-header2">Enter Address Manually</p>
                </div>
                <form>
                  <Row>
                    <Col>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Building name
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Building Name"
                          id="buildingName"
                          value={this.state.addressDetails.buildingName}
                          onChange={(e) => this.updateAddressDetails(e)}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Address Line 1
                        </p>
                        <input
                          type="text"
                          placeholder="Enter post code"
                          id="addressLine1"
                          value={this.state.addressDetails.addressLine1}
                          onChange={(e) => this.updateAddressDetails(e)}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Address Line 2
                        </p>
                        <input
                          type="text"
                          placeholder="Enter post code"
                          id="addressLine2"
                          value={this.state.addressDetails.addressLine2}
                          onChange={(e) => this.updateAddressDetails(e)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Town
                        </p>
                        <input
                          type="text"
                          placeholder="Enter post code"
                          id="town"
                          value={this.state.addressDetails.town}
                          onChange={(e) => this.updateAddressDetails(e)}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Post Code
                        </p>
                        <input
                          type="text"
                          placeholder="Enter post code"
                          id="postCode"
                          value={this.state.addressDetails.postCode}
                          onChange={(e) => this.updateAddressDetails(e)}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          City
                        </p>
                        <input
                          type="text"
                          placeholder="Enter post code"
                          id="city"
                          value={this.state.addressDetails.city}
                          onChange={(e) => this.updateAddressDetails(e)}
                        />
                      </div>
                    </Col>
                  </Row>

                  <div id="address-inputholder">
                    <p className="settings_payment_user_details_label">
                      How long did you stay at this address?
                    </p>
                    <Row>
                      <Col>
                        <div>
                          <p className="settings_payment_user_details_label">
                            From
                          </p>
                          <input
                            type="date"
                            placeholder="dd-mm-yyyy"
                            id="dateOfArrival"
                            onChange={(e) =>
                              this.setState({
                                dateOfArrival: e.currentTarget.value,
                              })
                            }
                          />
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <p className="settings_payment_user_details_label">
                            Till
                          </p>
                          <input
                            type="date"
                            placeholder="dd-mm-yyyy"
                            id="dateOfDeparture"
                            onChange={(e) =>
                              this.setState({
                                dateOfDeparture: e.currentTarget.value,
                              })
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>
              </div>
            ) : null}
            <div id="submit-btn" onClick={(e) => this.sendAddress(e)}>
              <div id="address-modal-button">
                <p className="desktop-big-button-text modal-button-text">
                  Submit address
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AddressModal;
