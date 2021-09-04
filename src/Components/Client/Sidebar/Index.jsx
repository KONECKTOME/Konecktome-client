import React, { Component } from "react";
import "../../../css/Sidebar/index.css";
import details_icon from "../../../Assets/my_details_icon.svg";
import account_icon from "../../../Assets/my_accounts.svg";
import explore_icon from "../../../Assets/explore_icon.svg";
import history_icon from "../../../Assets/history_icon.svg";
import notifications_icon from "../../../Assets/notification.svg";
import konecktome_logo from "../../../Assets/Group 27.svg";
import reco_icon from "../../../Assets/recommendation_icon.svg";
import fav_icon from "../../../Assets/my_favorites_icon.svg";
import email_updates_icon from "../../../Assets/email_updates_icon.svg";
import wishlist_icon from "../../../Assets/wishlist_icon.svg";
import tutorials_icon from "../../../Assets/tutorials_icon.svg";
import survey_icon from "../../../Assets/survey_icon.svg";
import get_free_icon from "../../../Assets/get_free_icon.svg";
import help_center_icon from "../../../Assets/help_center.svg";
import settings_icon from "../../../Assets/settings_icon.svg";
import { Row, Col } from "react-bootstrap";

class Index extends Component {
  state = {};
  render() {
    return (
      <div id="sidebar-wrapper">
        <div id="sidebar-list">
          <ul>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={account_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">My Account</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={details_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">My Details</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={explore_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Explore</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={history_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">History</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={notifications_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Notifications</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={account_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Recommendations</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={fav_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">My Favourites</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={email_updates_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Email Updates</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={wishlist_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Wishlist</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={tutorials_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Tutorials</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={survey_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Survey & Feedback</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={get_free_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Get Free £50</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={help_center_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Help Centre</p>
                  </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg={2}>
                  <div>
                    <img src={settings_icon} />
                  </div>
                </Col>
                <Col lg={10}>
                  <div>
                    <p className="sidebar-item-paragraph">Settings</p>
                  </div>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Index;
