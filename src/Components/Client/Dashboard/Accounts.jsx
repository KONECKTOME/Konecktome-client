import React, { Component } from "react";
import "../../../css/Dashboard/Accounts.css";
import { Row, Col } from "react-bootstrap";
import acc_dropdown_icon from "../../../Assets/acc-dropdown-icon.svg";
import placeholder from "../../../Assets/my-placeholder.png";
import star from "../../../Assets/star-icon.png";

class Accounts extends Component {
  state = {
    accounts: [1, 2, 3],
  };

  render() {
    return (
      <div id="acc-wrapper">
        <p className="desktop-sub-header1">My Accounts</p>
        {this.state.accounts.length !== 0 ? (
          <div id="acc-nav-wrapper">
            <table>
              <tr>
                <th>
                  <p className="acc-nav-inner-text">Name</p>
                </th>
                <th>
                  <p className="acc-nav-inner-text">Type</p>
                </th>
                <th>
                  <p className="acc-nav-inner-text">Join Date</p>
                </th>
              </tr>
              <div>
                {this.state.accounts.map((tt) => {
                  return (
                    <tr>
                      <td>
                        <Row>
                          <Col lg={3}>
                            <img src={placeholder} />
                          </Col>
                          <Col lg={7}>
                            <p className="service-provider-text">
                              Service provider
                            </p>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <p className="desktop-text">Social</p>
                      </td>
                      <td>
                        <p className="desktop-text">14/23/09</p>
                      </td>
                    </tr>
                  );
                })}
              </div>
            </table>
          </div>
        ) : (
          <div id="no-services">
            <p className="desktop-sub-header2">
              You haven't purchased any services yet...
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Accounts;
