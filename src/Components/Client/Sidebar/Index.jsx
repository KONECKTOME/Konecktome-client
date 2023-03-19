import React, { Component } from "react";
import "../../../css/Sidebar/index.css";
import konecktome_icon from "../../../Assets/konecktome-logo.svg";
import { Link, NavLink, withRouter } from "react-router-dom";
import AvatarIcon from "../../SvgIcons/AvatarIcon";

class Index extends Component {
  state = {
    active: false,
    activeCheckBoxClass: false,
    isChecked: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
    },
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

  clearFilters = () => {
    this.setState({
      isChecked: {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
      },
    });
    this.props.clearFilters();
  };

  compareCheckBoxes = (key, value, e) => {
    this.setState({
      isChecked: { ...this.state.isChecked, [e.target.name]: e.target.checked },
    });
    this.props.setFilter(key, value);
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

            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox1"
                        checked={this.state.isChecked.checkbox1}
                        onChange={(e) =>
                          this.compareCheckBoxes("speed", 150, e)
                        }
                      />
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
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox2"
                        checked={this.state.isChecked.checkbox2}
                        onChange={(e) =>
                          this.compareCheckBoxes("speed", 300, e)
                        }
                      />
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
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox3"
                        checked={this.state.isChecked.checkbox3}
                        onChange={(e) =>
                          this.compareCheckBoxes("speed", 500, e)
                        }
                      />
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
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox4"
                        checked={this.state.isChecked.checkbox4}
                        onChange={(e) =>
                          this.compareCheckBoxes("contract", 12, e)
                        }
                      />
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
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox5"
                        checked={this.state.isChecked.checkbox5}
                        onChange={(e) =>
                          this.compareCheckBoxes("contract", 24, e)
                        }
                      />
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
            <li id="nav-items-list">
              <div>
                <div className={`d-flex align-item-center`}>
                  <div>
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox6"
                        checked={this.state.isChecked.checkbox6}
                        onChange={(e) => this.compareCheckBoxes("price", 25, e)}
                      />
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
                      <input
                        type="checkbox"
                        name="checkbox7"
                        checked={this.state.isChecked.checkbox7}
                        onChange={(e) => this.compareCheckBoxes("price", 50, e)}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="sidebar-item-paragraph">Under £50</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li onClick={() => this.clearFilters()}>
              <div id="cf-cta-holder">
                <div className="desktop-small-button">
                  <p className="desktop-medium-button-text">Clear Filters</p>
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
