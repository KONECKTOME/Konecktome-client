import React, { Component } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "../../../css/AddressModal/AddressModal.css";
import CrossIcon from "../../SvgIcons/CrossIcon";

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
    emptyFields: false,
    durationError: false,
    showAddressHolder: false,
    postCodeCheckerDateOfDeparture: "",
    postCodeCheckerDateOfArrival: "",
    addressFromPostCodeChecker: "",
    checkingPostCodeloader: false,
    postCodeTownFromApi: "",
    postCodeCountyFromApi: "",
    postCodeCheckerDateOfArrival: "",
    postCodeCheckerDateOfDeparture: "",
    postCodeFromPostChecker: "",
    currentAddressFromPostCodeChecker: false,
    deliveryAddressFromPostCodeChecker: false,
    sentSuccessFromPostCodeChecker: false,
    errorFromPostCodeChecker: false,
    emptyFieldsFromPostCodeChecker: false,
    postCodefromPostCodeChecker: "",
  };

  hideAddressHolder = () => {
    this.setState({ showAddressHolder: false });
  };

  getAddresses = async (e) => {
    e.preventDefault();
    this.setState({ showAddressHolder: true });
  };

  updateAddressDetails = (e) => {
    const addressDetails = this.state.addressDetails;
    const id = e.currentTarget.id;
    addressDetails[id] = e.currentTarget.value;
    this.setState({ addressDetails });
  };

  fixDateString = (dateToBeFixed) => {
    const arr = dateToBeFixed.split("-");
    return arr;
  };

  sendAddress = async (e, fromPostCodeChecker) => {
    e.preventDefault();
    if (fromPostCodeChecker) {
      if (
        this.state.addressFromPostCodeChecker === "" ||
        this.state.postCodeCheckerDateOfArrival === "" ||
        this.state.postCodeCheckerDateOfDeparture === ""
      ) {
        this.setState({ emptyFieldsFromPostCodeChecker: true });
        setTimeout(
          () => this.setState({ emptyFieldsFromPostCodeChecker: false }),
          1500
        );
      } else {
        let addressFromPostCodeCheckerInArray =
          this.state.addressFromPostCodeChecker.split(",");
        let addressline2FromPostCodeChecker = "";
        addressFromPostCodeCheckerInArray[2] !== undefined
          ? (addressline2FromPostCodeChecker =
              addressFromPostCodeCheckerInArray[2])
          : (addressline2FromPostCodeChecker = "");
        const response = await fetch(
          "https://konecktomebackend.herokuapp.com/users/update-address",
          {
            method: "POST",
            body: JSON.stringify({
              userId: this.props.userId,
              addressId: null,
              buildingName: "",
              addressLine1:
                addressFromPostCodeCheckerInArray[0] +
                addressFromPostCodeCheckerInArray[1],
              addressLine2: addressline2FromPostCodeChecker.trim(),
              town: addressFromPostCodeCheckerInArray[3].trim(),
              city: addressFromPostCodeCheckerInArray[4].trim(),
              currentAddress: this.state.currentAddressFromPostCodeChecker,
              deliveryAddress: this.state.deliveryAddressFromPostCodeChecker,
              postCode: this.state.postCodeFromPostChecker,
              dateOfArrival: this.fixDateString(
                this.state.postCodeCheckerDateOfArrival
              ),
              dateOfDeparture: this.fixDateString(
                this.state.postCodeCheckerDateOfDeparture
              ),
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const details = await response.json();
        if (details.message === "Address added") {
          this.setState({ sentSuccessFromPostCodeChecker: true });
          setTimeout(
            () => this.setState({ sentSuccessFromPostCodeChecker: false }),
            1500
          );
        } else if (
          details.message ===
          "Date Of Arrival cannot be more than Date Of Departure"
        ) {
          this.setState({ errorFromPostCodeChecker: true });
          setTimeout(
            () => this.setState({ errorFromPostCodeChecker: false }),
            1500
          );
        }
      }
    } else {
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
        let addressId = null;
        {
          this.props.addressId !== undefined
            ? (addressId = this.props.addressId)
            : (addressId = null);
        }
        const response = await fetch(
          "https://konecktomebackend.herokuapp.com/users/update-address",
          {
            method: "POST",
            body: JSON.stringify({
              userId: this.props.userId,
              addressId: addressId,
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
        }
      }
    }
  };

  isValidPostcode = (p) => {
    // var postcodeRegEx = /[A-Z]{1,2}[A-Z0-9]{1,2} ?[0-9][A-Z]{2}/i;
    var regexp =
      /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
    return regexp.test(p);
  };

  fetchAddressViaPostCode = async (postCode) => {
    let addresses = [];
    var parameters = {
      key: "8f3ef-722be-b312c-08426",
      postcode: postCode,
      response: "data_formatted",
    };
    this.setState({ showAddressHolder: true, checkingPostCodeloader: true });
    var capitilizePostCode = postCode.toUpperCase();
    if (this.isValidPostcode(capitilizePostCode) == true) {
      var url = "http://pcls1.craftyclicks.co.uk/json/rapidaddress";
      let request = new XMLHttpRequest();
      request.open("POST", url, false);
      request.setRequestHeader("Content-Type", "application/json");
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 400) {
            // Success!
            let data = JSON.parse(this.responseText);
            addresses.push(data);
          } else {
            throw "HTTP Request Error";
          }
        }
      };

      request.send(JSON.stringify(parameters));
      if (!addresses[0].error_code) {
        this.setState({
          checkingPostCodeloader: false,
          postCodeTownFromApi: addresses[0].town,
          postCodeCountyFromApi: addresses[0].traditional_county,
          addresses: addresses[0].delivery_points,
          postCodeFromPostChecker: postCode,
        });
      } else {
        this.setState({
          checkingPostCodeloader: false,
        });
      }
    }
  };

  selectPostCode = (line1, line2, town, county) => {
    let selectedAddress = "";
    if (!line2) {
      selectedAddress = line1 + "," + " " + town + "," + " " + county;
      this.setState({
        addressFromPostCodeChecker: selectedAddress,
        showAddressHolder: false,
      });
    } else {
      selectedAddress =
        line1 + "," + " " + line2 + "," + " " + town + "," + " " + county;
      this.setState({
        addressFromPostCodeChecker: selectedAddress,
        showAddressHolder: false,
      });
    }
  };

  hideAddressHolder = () => {
    this.setState({
      showAddressHolder: false,
      addressFromPostCodeChecker: "",
      checkingPostCodeloader: false,
      postCodeTownFromApi: "",
      postCodeCountyFromApi: "",
      addresses: [],
    });
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
              <h3 className="desktop-sub-header2 mb-0">Add Address</h3>
              <div
                id="explore-compare-delete-btn"
                onClick={() => this.props.hideAddressModal()}
              >
                <CrossIcon color="#5e5e5e" />
              </div>
            </div>
            <div id="address-modal-body">
              <form>
                <div id="explore-address-input-holder">
                  <h4>
                    <label className="explore-address-label">
                      Check Post code
                    </label>
                  </h4>
                  <div>
                    <input
                      type="text"
                      placeholder="Ex. WQ3 6RC"
                      onKeyUp={(e) =>
                        this.fetchAddressViaPostCode(e.currentTarget.value)
                      }
                      value={this.state.addressFromPostCodeChecker}
                      onChange={(e) =>
                        this.setState({
                          addressFromPostCodeChecker: e.currentTarget.value,
                        })
                      }
                    />
                    {this.state.addressFromPostCodeChecker && (
                      <div
                        id="explore-address-close-btn"
                        onClick={() => this.hideAddressHolder()}
                      >
                        <CrossIcon color="#777" size="25" />
                      </div>
                    )}
                  </div>
                </div>

                {this.state.showAddressHolder === true &&
                this.state.addressFromPostCodeChecker ? (
                  <div id="address-modal-dropdown-holder">
                    {this.state.checkingPostCodeloader === true ? (
                      <div id="explore-address-post-code-loader">
                        <div id="reset-pin-spinner-holder">
                          <div id="reset-pin-spinner"></div>
                        </div>
                        <div id="reset-pin-spinner-holder">
                          <p id="settings_modal_header">Fetching...</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        {this.state.addresses.length !== 0 ? (
                          <ul>
                            <li className="desktop-sub-header2">
                              Select Your Address
                            </li>
                            {this.state.addresses.map((item) => {
                              return (
                                <li
                                  className="desktop-text"
                                  onClick={() =>
                                    this.selectPostCode(
                                      item.line_1,
                                      item.line_2,
                                      this.state.postCodeTownFromApi,
                                      this.state.postCodeCountyFromApi
                                    )
                                  }
                                >
                                  {item.line_1}, {item.line_2},
                                  {this.state.postCodeTownFromApi},{" "}
                                  {this.state.postCodeCountyFromApi}
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <div id="explore-address-post-code-loader">
                            <div id="reset-pin-spinner-holder">
                              <p id="settings_modal_header">
                                Oops, post code not found
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : null}

                <Row className="mt-4">
                  <Col sm={12} md={6}>
                    <label className="explore-address-label">
                      Date Of Arrival
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="postCodeCheckerDateOfArrival"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          postCodeCheckerDateOfArrival: e.currentTarget.value,
                        })
                      }
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <label className="explore-address-label">
                      Date Of Departure
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="postCodeCheckerDateOfDeparture"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          postCodeCheckerDateOfDeparture: e.currentTarget.value,
                        })
                      }
                    />
                  </Col>
                </Row>

                <div id="address-modal-current-delivery-checkbox-holder">
                  <div id="explore-compare-holder">
                    <label
                      for="compare"
                      className="explore-address-label"
                      id="compare-label"
                    >
                      <input
                        type="checkbox"
                        value={this.state.deliveryAddressFromPostCodeChecker}
                        onChange={(e) =>
                          this.setState({
                            deliveryAddressFromPostCodeChecker:
                              e.target.checked,
                          })
                        }
                      />
                      <span id="input-compare-text">Delivery Address</span>
                    </label>
                  </div>
                  <div id="explore-compare-holder">
                    <label
                      for="compare"
                      className="explore-address-label"
                      id="compare-label"
                    >
                      <input
                        type="checkbox"
                        value={this.state.currentAddressFromPostCodeChecker}
                        onChange={(e) =>
                          this.setState({
                            currentAddressFromPostCodeChecker: e.target.checked,
                          })
                        }
                      />
                      <span id="input-compare-text">Current Address</span>
                    </label>
                  </div>
                </div>
                {this.state.emptyFieldsFromPostCodeChecker === true ? (
                  <div className="error-notification-holder">
                    <p>Input fields cannot be empty</p>
                  </div>
                ) : null}
                {this.state.errorFromPostCodeChecker === true ? (
                  <div className="error-notification-holder">
                    <p>An Error Occured</p>
                  </div>
                ) : null}
                {this.state.sentSuccessFromPostCodeChecker === true ? (
                  <div className="success-notification-holder">
                    <p>Address Saved</p>
                  </div>
                ) : null}
                <div
                  className="desktop-big-button"
                  id="explore-address-btn"
                  onClick={(e) => this.sendAddress(e, true)}
                >
                  <p className="desktop-big-button-text">Save Address</p>
                </div>
              </form>
            </div>

            {this.state.addressSelected === false ? (
              <div>
                <div id="or-holder">
                  <p className="desktop-sub-header2">OR</p>
                </div>
                <div className="mb-4">
                  <p className="desktop-sub-header2">Enter Address Manually</p>
                </div>

                <form>
                  <Row>
                    <Col md={6}>
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
                    <Col md={6}>
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
                    <Col md={6}>
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
                    <Col md={6}>
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
                    <Col md={6}>
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
                    <Col md={6}>
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
                    <Col md={6}>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Date Of Arrival
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
                    <Col md={6}>
                      <div id="address-inputholder">
                        <p className="settings_payment_user_details_label">
                          Date Of Departure
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
            <div id="submit-btn" onClick={(e) => this.sendAddress(e, false)}>
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
