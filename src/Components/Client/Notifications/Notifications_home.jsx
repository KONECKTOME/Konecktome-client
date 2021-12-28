import React, { Component } from "react";
import "../../../css/Notifications/Notification.css";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Row, Col } from "react-bootstrap";

class Notifications_home extends React.Component {
  state = {
    test: [1, 2, 4, 5, 6, 7, 78, 8],
  };
  render() {
    return (
      <div id="notifications_wrapper">
        <div id="history_form-div">
          <form>
            <input
              id="searchQuery"
              type="text"
              placeholder="Search by name, category"
              className="history-search-form"
            />
          </form>
        </div>
        <div id="history_no_of_items_text">
          <p>Showing 7 of 78</p>
        </div>
        <table>
          <tr>
            <th>
              <p className="acc-nav-inner-text">Name</p>
            </th>
            <th>
              <p className="acc-nav-inner-text">Date</p>
            </th>
            <th>
              <p className="acc-nav-inner-text">Description</p>
            </th>
          </tr>
          {this.state.test.map((tt) => {
            return (
              <tr id="history_account_items">
                <td>
                  <Row>
                    <Col lg={3}>
                      <div id="settings_account_image_container">
                        <img
                          src={profileSettingPlaceholder}
                          id="settings_account_image"
                        />
                      </div>
                    </Col>
                    <Col lg={7}>
                      <p className="settings_account_service-provider-text">
                        Notification title
                      </p>
                    </Col>
                  </Row>
                </td>
                <td className="settings_account_type_date_text">
                  21-3-67 | 4:30
                </td>
                <td className="settings_account_type_date_text">
                  <p>Lorem ipsum is simply a dummy text of printing</p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Notifications_home;
