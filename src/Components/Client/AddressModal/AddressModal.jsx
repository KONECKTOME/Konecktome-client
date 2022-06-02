import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Modal, Row, Col } from "react-bootstrap";
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
    sentSuccess: false,
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
      addresses: [],
    });
  };

  sendAddress = () => {
    this.setState({
      addressSelected: false,
      userAddress: "",
      postCode: "",
      sentSuccess: true,
    });
    setTimeout(() => {
      this.setState({
        sentSuccess: false,
      });
    }, 1200);
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
                          placeholder="Enter post code"
                          id="address-modal-message"
                          // value={this.state.details.email}
                          // onChange={(e) => this.updateDetails(e)}
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
                          id="address-modal-message"
                          // value={this.state.details.email}
                          // onChange={(e) => this.updateDetails(e)}
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
                          id="address-modal-message"
                          // value={this.state.details.email}
                          // onChange={(e) => this.updateDetails(e)}
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
                          id="address-modal-message"
                          // value={this.state.details.email}
                          // onChange={(e) => this.updateDetails(e)}
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
                          id="address-modal-message"
                          // value={this.state.details.email}
                          // onChange={(e) => this.updateDetails(e)}
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
                          id="address-modal-message"
                          // value={this.state.details.email}
                          // onChange={(e) => this.updateDetails(e)}
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
                            id="address-modal-message"
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
                            id="address-modal-message"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>
              </div>
            ) : null}
            <div id="submit-btn" onClick={() => this.sendAddress()}>
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
