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
import konecktome_icon from "../../../Assets/konecktome-logo.svg";
import { Row, Col } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class Index extends Component {
  state = {
    active: false,
    activeCheckBoxClass: false,
    userId: "",
  };

  componentDidMount = () => {
    this.getUserId();
  };

  getUserId = () => {
    let userId = "";
    const idInArray = this.props.location.pathname.split("/");
    if (idInArray.length === 4) {
      userId = this.props.location.pathname.split("/")[3];
    } else if (idInArray.length === 3) {
      userId = this.props.location.pathname.split("/")[2];
    } else if (idInArray.length === 6) {
      userId = this.props.location.pathname.split("/")[4];
    } else if (idInArray.length === 5) {
      userId = this.props.location.pathname.split("/")[3];
    }
    this.setState({ userId: userId });
  };

  activeClass = (e) => {
    e.preventDefault();
    this.setState((previousState) => {
      return {
        active: !previousState.active,
        activeCheckBoxClass: !previousState.activeCheckBoxClass,
      };
    });
  };
  render() {
    return (
      <div id="sidebar-wrapper">
        <div id="logo-wrapper">
          <img src={konecktome_icon} />
        </div>
        <div id="sidebar-list">
          <ul>
            <NavLink
              to={"/dashboard/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div>
                  <Row>
                    <Col lg={2}>
                      <div>
                        <img src={account_icon} />
                      </div>
                    </Col>
                    <Col lg={10}>
                      <div>
                        <p className="sidebar-item-paragraph">Dashboard</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/account/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div>
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
                </div>
              </li>
            </NavLink>
            {/* <li>
              <Link to="/details" className="links">
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
              </Link>
            </li> */}
            <NavLink
              to={"/dashboard/explore/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
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
            </NavLink>
            <NavLink
              to={"/dashboard/history/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
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
            </NavLink>
            <NavLink
              to={"/dashboard/notifications/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
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
            </NavLink>
            {/* <Link to="/recommendations" className="links">
              <li>
                <Row>
                  <Col lg={2}>
                    <div>
                      <img src={account_icon} />
                    </div>
                  </Col>
                  <Col lg={10}>
                    <div>
                      <p className="sidebar-item-paragraph">Recommendation</p>
                    </div>
                  </Col>
                </Row>
              </li>
            </Link> */}
            {/* <Link to="favourites" className="links">
              <li>
                <Row>
                  <Col lg={2}>
                    <div>
                      <img src={fav_icon} />
                    </div>
                  </Col>
                  <Col lg={10}>
                    <div>
                      <p className="sidebar-item-paragraph">My Favorites</p>
                    </div>
                  </Col>
                </Row>
              </li>
            </Link> */}
            {/* <li>
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
            </li> */}
            <NavLink
              to={"/dashboard/wishlist/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
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
            </NavLink>
            {/* <li>
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
            </li> */}
            <NavLink
              to={"/dashboard/feedback/" + this.state.userId}
              className="links"
            >
              <li id="nav-items-list">
                <Row>
                  <Col lg={2}>
                    <div>
                      <img src={survey_icon} />
                    </div>
                  </Col>
                  <Col lg={10}>
                    <div>
                      <p className="sidebar-item-paragraph">
                        Survey & Feedback
                      </p>
                    </div>
                  </Col>
                </Row>
              </li>
            </NavLink>
            {/* <li>
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
            </li> */}
            {/* <li>
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
            </li> */}
            <NavLink
              to={"/dashboard/settings/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
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
            </NavLink>
            <li>
              <div id="sidebar-footer">
                <p>Privacy Policy</p>
                <p>Legal Douments</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
