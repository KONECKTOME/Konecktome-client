import React, { Component } from "react";
import "../../../css/Dashboard/Accounts.css";
import { Row, Col } from "react-bootstrap";
import acc_dropdown_icon from "../../../Assets/acc-dropdown-icon.svg";
import placeholder from "../../../Assets/my-placeholder.png";
import star from "../../../Assets/star-icon.png";

class Accounts extends Component {
  state = {
    test: [1, 2, 3, 5, 6, 7, 8],
  };
  render() {
    return (
      <div id="acc-wrapper">
        <div id="acc-header-wrapper">
          <div>
            <p id="acc-header-text">My Accounts</p>
          </div>
          <div>dropdown placeholder</div>
        </div>
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
                <p className="acc-nav-inner-text">Joined Date</p>
              </th>
            </tr>
            {this.state.test.map((tt) => {
              return (
                <tr>
                  <td>
                    <Row>
                      <Col lg={2}>
                        <img src={star} id="star-icon" />
                      </Col>
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
                  <td>Socials</td>
                  <td>15-02-2021</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Accounts;
