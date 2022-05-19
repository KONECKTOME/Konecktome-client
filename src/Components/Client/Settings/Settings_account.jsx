import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import placeholder from "../../../Assets/my-placeholder.png";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import "../../../css/Settings/settings_account.css";

class Settings_account extends React.Component {
  state = {
    test: [1, 2, 3, 4, 5, 6, 7, 8],
  };
  render() {
    return (
      <div>
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
            <th>
              <p className="acc-nav-inner-text">Actions</p>
            </th>
          </tr>
          {this.state.test.map((tt) => {
            return (
              <>
                <tr id="settings_account_items">
                  <td>
                    <Row>
                      <Col lg={3}>
                        <div className="small-profile-image-container">
                          <img
                            src={image_placeholder}
                            className="small-profile-image"
                          />
                        </div>
                      </Col>
                      <Col lg={7}>
                        <p className="settings_account_service-provider-text">
                          Service provider name
                        </p>
                      </Col>
                    </Row>
                  </td>
                  <td className="settings_account_type_date_text">Socials</td>
                  <td className="settings_account_type_date_text">
                    15-02-2021
                  </td>
                  <td>
                    <div id="settings_account_unsubscribe_btn">
                      <p>Unsubscribe</p>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Settings_account;
