import React, { Component } from "react";
import "../../../css/Sidebar/index.css";
import konecktome_icon from "../../../Assets/konecktome-logo.svg";
import { Link, NavLink, withRouter } from "react-router-dom";
import AvatarIcon from "../../SvgIcons/AvatarIcon";

class Index extends Component {
  state = {
    active: false,
    activeCheckBoxClass: false,
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
        <Link to="/">
          <div id="logo-wrapper">
            <img src={konecktome_icon} />
          </div>
        </Link>
        <div id="user-detail">
          <div className="d-flex align-items-center">
            <div className="user-Avatar">
              <AvatarIcon size="30" />
            </div>
            <h3 className="mb-0 ms-3">Customize results</h3>
          </div>
        </div>
        <hr></hr>
        <div id="sidebar-list">
          <ul>
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <h3 className="sidebar-item-paragraph">Speed</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="nav-items-list"
              onClick={() => this.props.setFilter("speed", 150)}
            >
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">150Mbps +</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="nav-items-list"
              onClick={() => this.props.setFilter("speed", 300)}
            >
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">300Mbps +</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="nav-items-list"
              onClick={() => this.props.setFilter("speed", 500)}
            >
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">500Mbps +</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr></hr>
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Contract Length</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="nav-items-list"
              onClick={() => this.props.setFilter("Contract", 12)}
            >
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">12 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="nav-items-list"
              onClick={() => this.props.setFilter("Contract", 24)}
            >
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">24 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr></hr>
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Price per month</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="nav-items-list"
              onClick={() => this.props.setFilter("price", 25)}
            >
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Under £25</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Under £25</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
