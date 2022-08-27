import React, { Component } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "../../../css/AddressModal/AddressModal.css";

class AddressModal extends React.Component {
  state = {
    addresses: [1, 1, 1, 1, 1, 1, 1],
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
    emptyFields: false,
    durationError: false,
    showAddressHolder: false,
  };

  hideAddressHolder = () => {
    this.setState({ showAddressHolder: false });
  };

  getAddresses = async (e) => {
    e.preventDefault();
    this.setState({ showAddressHolder: true });
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
    if (
      this.state.addressDetails.buildingName === "" ||
      this.state.addressDetails.addressLine1 === "" ||
      this.state.addressDetails.addressLine2 === "" ||
      this.state.addressDetails.town === "" ||
      this.state.addressDetails.city === "" ||
      this.state.dateOfArrival === "" ||
      this.state.dateOfDeparture === ""
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else {
      const response = await fetch(
        "http://localhost:3002/users/update-address",
        {
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
        }
      );
      const details = await response.json();
      if (details.message === "Address added") {
        this.setState({ sentSuccess: true });
        setTimeout(() => this.setState({ sentSuccess: false }), 1500);
        this.props.fetchUser();
      } else if (
        details.message ===
        "Date Of Arrival cannot be more than Date Of Departure"
      ) {
        this.setState({ durationError: true });
        setTimeout(() => this.setState({ durationError: false }), 1500);
        alert("error");
      }
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
            <div id="address-modal-body-header" className="review-modal-header">
              <p className="desktop-sub-header2">Add Address</p>
              <div
                id="explore-compare-delete-btn"
                onClick={() => this.props.hideAddressModal()}
              >
                <p>X</p>
              </div>
            </div>
            <div id="address-modal-body">
              <form>
                <label className="explore-address-label">Check Post code</label>
                <div id="explore-address-input-holder">
                  <input
                    type="text"
                    placeholder="Ex. WQ3 6RC"
                    // value={this.state.postCode}
                    // onChange={(e) =>
                    //   this.setState({
                    //     postCode: e.currentTarget.value,
                    //   })
                    // }
                  />
                  <div
                    id="explore-address-close-btn"
                    onClick={() => this.hideAddressHolder()}
                  >
                    X
                  </div>
                </div>
                {this.state.showAddressHolder === true ? (
                  <div id="address-dropdown-holder">
                    <ul>
                      <li className="desktop-sub-header2">
                        Select Your Address
                      </li>
                      {this.state.addresses.map((item) => {
                        return (
                          <li className="desktop-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestiae ipsum
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
                <div
                  className="desktop-big-button"
                  id="explore-address-btn"
                  onClick={(e) => this.getAddresses(e)}
                >
                  <p className="desktop-big-button-text">Check postcode</p>
                </div>
              </form>
            </div>

            <div id="current-address-checkbox">
              <input type="checkbox" />
              <p className="desktop-sub-header2">
                Check the box if this is your current address
              </p>
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
                          placeholder="Ex. 1 Road Court"
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
                          placeholder="Ex. 1 Road Way"
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
                          placeholder="Ex. 1 Road Way"
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
                          placeholder="Ex. SW5 RTD"
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
                {this.state.sentSuccess === true ? (
                  <div className="success-notification-holder">
                    <p>
                      Address Saved, Add Another Address or use the close btn
                      above to close{" "}
                    </p>
                  </div>
                ) : null}
                {this.state.emptyFields === true ? (
                  <div className="error-notification-holder">
                    <p className="">Empty fields</p>
                  </div>
                ) : null}
                {this.state.durationError === true ? (
                  <div className="error-notification-holder">
                    <p className="">
                      Date Of Arrival Cannot Be Less Than Date Of Departure
                    </p>
                  </div>
                ) : null}
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
