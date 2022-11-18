import React, { Component } from "react";
import "../../../css/Sidebar/index.css";
// import details_icon from "../../../Assets/my_details_icon.svg";
// import account_icon from "../../../Assets/my_accounts.svg";
// import explore_icon from "../../../Assets/explore_icon.svg";
// import history_icon from "../../../Assets/history_icon.svg";
// import wishlist_icon from "../../../Assets/wishlist_icon.svg";
// import survey_icon from "../../../Assets/survey_icon.svg";
// import dashboard_icon from "../../../Assets/Sidebar assets/dashboard-icon.png";
// import settings_icon from "../../../Assets/settings_icon.svg";
import konecktome_icon from "../../../Assets/konecktome-logo.svg";
import { Row, Col } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import DashboardIcon from "../../SvgIcons/DashboardIcon";
import AvatarIcon from "../../SvgIcons/AvatarIcon";
import ExploreIcon from "../../SvgIcons/ExploreIcon";
import HistoryIcon from "../../SvgIcons/HistoryIcon";
import WishlistIcon from "../../SvgIcons/WishlistIcon";
import SurveyIcon from "../../SvgIcons/SurveyIcon";
import SettingsIcon from "../../SvgIcons/SettingsIcon";

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
        <NavLink
          to={"/dashboard/" + this.state.userId}
          className="links"
          activeClassName="active"
        >
          <div id="logo-wrapper">
            <img src={konecktome_icon} />
          </div>
        </NavLink>
        <div id="sidebar-list">
          <ul>
            <NavLink
              to={"/dashboard/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div>
                  <div className={`d-flex align-item-center`}>
                    <div>
                      <div>
                        {/* <img src={dashboard_icon} /> */}
                        <DashboardIcon size="22" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="sidebar-item-paragraph">Dashboard</p>
                      </div>
                    </div>
                  </div>
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
                  <div className={`d-flex align-item-center`}>
                    <div>
                      <div>
                        <AvatarIcon size="22" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="sidebar-item-paragraph">My Account</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink>
            {/* <li>
              <Link to="/details" className="links">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <img src={details_icon} />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">My Details</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li> */}
            <NavLink
              to={"/dashboard/explore/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <ExploreIcon size="22" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Explore</p>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/history/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <HistoryIcon size="22" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">History</p>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink>
            {/* <NavLink
              to={"/dashboard/notifications/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <img src={notifications_icon} />
                    </div>
                  </div>

                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Notifications</p>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink> */}
            {/* <Link to="/recommendations" className="links">
              <li>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <img src={account_icon} />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Recommendation</p>
                    </div>
                  </div>
                </div>
              </li>
            </Link> */}
            {/* <Link to="favourites" className="links">
              <li>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <img src={fav_icon} />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">My Favorites</p>
                    </div>
                  </div>
                </div>
              </li>
            </Link> */}
            {/* <li>
              <div className={`d-flex align-item-center`}>
                <div>
                  <div>
                    <img src={email_updates_icon} />
                  </div>
                </div>
                <div>
                  <div>
                    <p className="sidebar-item-paragraph">Email Updates</p>
                  </div>
                </div>
              </div>
            </li> */}
            <NavLink
              to={"/dashboard/wishlist/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <WishlistIcon size="22" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Wishlist</p>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink>
            {/* <li>
              <div className={`d-flex align-item-center`}>
                <div>
                  <div>
                    <img src={tutorials_icon} />
                  </div>
                </div>
                <div>
                  <div>
                    <p className="sidebar-item-paragraph">Tutorials</p>
                  </div>
                </div>
              </div>
            </li> */}
            <NavLink
              to={"/dashboard/feedback/" + this.state.userId}
              className="links"
            >
              <li id="nav-items-list">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <SurveyIcon size="22" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">
                        Survey & Feedback
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink>
            {/* <li>
              <div className={`d-flex align-item-center`}>
                <div>
                  <div>
                    <img src={get_free_icon} />
                  </div>
                </div>
                <div>
                  <div>
                    <p className="sidebar-item-paragraph">Get Free £50</p>
                  </div>
                </div>
              </div>
            </li> */}
            {/* <li>
              <div className={`d-flex align-item-center`}>
                <div>
                  <div>
                    <img src={help_center_icon} />
                  </div>
                </div>
                <div>
                  <div>
                    <p className="sidebar-item-paragraph">Help Centre</p>
                  </div>
                </div>
              </div>
            </li> */}
            <NavLink
              to={"/dashboard/settings/" + this.state.userId}
              className="links"
              activeClassName="active"
            >
              <li id="nav-items-list">
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <SettingsIcon size="22" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Settings</p>
                    </div>
                  </div>
                </div>
              </li>
            </NavLink>
            <li>
              <div id="sidebar-footer">
                <p>Privacy Policy</p>
                <p className={`mt-4`}>Legal Douments</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
