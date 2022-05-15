import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import placeholder from "../../../Assets/my-placeholder.png";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import "../../../css/History/index.css";

class History_home extends React.Component {
  state = {
    test: [1, 2, 3, 4, 5, 6, 7],
  };
  render() {
    return (
      <div id="history-wrapper">
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
        {/* <div id="resp-table">
          <div id="resp-table-header">
            <div class="table-header-cell">
              <p className="desktop-sub-header2">Name</p>
            </div>
            <div class="table-header-cell">
              <p className="desktop-sub-header2">Date</p>
            </div>
            <div class="table-header-cell">
              <p className="desktop-sub-header2">Description</p>
            </div>
          </div>
          <div id="resp-table-body">
            <div class="resp-table-row">
              {this.state.test.map((tt) => {
                return (
                  <div>
                    <div class="table-body-cell">
                      <div id="history-main-content-item">
                        <div className="small-profile-image-container">
                          <img
                            src={profileSettingPlaceholder}
                            className="small-profile-image"
                          />
                        </div>
                        <div>
                          <p className="desktop-text history-service-provider-text">
                            Some service provider name
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="table-body-cell">
                      <p className="desktop-text">21-09-2021</p>
                    </div>
                    <div class="table-body-cell">
                      <p className="desktop-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est saepe officia iusto fugit eveniet asperiores
                        itaque nostrum
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        {/* <div id="history-main-content">
          <div>
            <div>
              <p className="desktop-sub-header2">Name</p>
            </div>
            <div id="history-main-content-item">
              <div className="small-profile-image-container">
                <img
                  src={profileSettingPlaceholder}
                  className="small-profile-image"
                />
              </div>
              <div>
                <p className="desktop-text history-service-provider-text">
                  Some service provider name
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="desktop-sub-header2">Date</p>
            <p className="desktop-text">21-09-2021</p>
          </div>
          <div>
            <p className="desktop-sub-header2">Description</p>
          </div>
        </div>
        <div id="history-main-content">
          <div id="history-main-content-item">
            <div className="small-profile-image-container">
              <img
                src={profileSettingPlaceholder}
                className="small-profile-image"
              />
            </div>
            <div>
              <p className="desktop-text history-service-provider-text">
                Some service provider name
              </p>
            </div>
          </div>
          <div>
            <p className="desktop-text">21-09-2021</p>
          </div>
          <div>
            <p className="desktop-text history-description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            </p>
          </div>
        </div> */}
        <table>
          <tr>
            <th>
              <p className="acc-nav-inner-text">Name</p>
            </th>
            <th>
              <p className="desktop-sub-header2">Date</p>
            </th>
            <th>
              <p className="desktop-sub-header2">Description</p>
            </th>
          </tr>
          {this.state.test.map((tt) => {
            return (
              <tr id="history_account_items">
                <td>
                  <Row>
                    <Col lg={2}>
                      <div className="small-profile-image-container">
                        <img
                          src={profileSettingPlaceholder}
                          className="small-profile-image"
                        />
                      </div>
                    </Col>
                    <Col lg={4}>
                      <p className="desktop-text history-service-provider-text">
                        Some service provider name
                      </p>
                    </Col>
                  </Row>
                </td>
                <td>
                  <p className="desktop-text">21-09-2021</p>
                </td>
                <td className="settings_account_type_date_text">
                  <p className="desktop-text">21-09-2021</p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default History_home;
