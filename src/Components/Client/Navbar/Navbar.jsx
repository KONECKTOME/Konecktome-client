import React, { Component } from "react";
import menu_icon from "../../../Assets/Navbar_menu_icon.svg";
import search_icon from "../../../Assets/navbar_search_icon.svg";
import notifications_icon from "../../../Assets/notification.svg";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import dropdown_icon from "../../../Assets/dropdown-icon.svg";

import "../../../css/Navbar/Navbar.css";
import { Row, Col } from "react-bootstrap";

class Navbar extends Component {
  state = {
    imageUrl: this.props.userImage,
  };
  render() {
    return (
      <div id="nav-wrapper">
        <div id="nav-right-wrapper">
          <div id="nav-right">
            <div className="nav-right-item nav-right-item-text">
              <img src={notifications_icon} />
            </div>
            <div id="nav-image" className="nav-right-item">
              <img
                src={
                  this.state.imageUrl === undefined
                    ? placeholder_image
                    : this.state.imageUrl
                }
              />
            </div>
            <div className="nav-right-item">
              <p className="desktop-text nav-right-item-text">
                {this.props.userName}
              </p>
            </div>
            <div className="nav-right-item-text">
              <img src={dropdown_icon} />
            </div>
          </div>
          {/* <Row>
            <Col>
              <div id="nav-image">
                <img src={placeholder_image} />
              </div>
            </Col>
            <Col>
              <p>Jhn dddddoe</p>
            </Col>
            <Col>
              <div>
                <img src={dropdown_icon} />
              </div>
            </Col>
          </Row> */}
          {/* <div id="nav-image">
            <img src={placeholder_image} />
          </div> */}
        </div>
        {/* <div id="nav-second-wrapper">
          <div id="row-wrapper">
            <Row>
              <Col lg={2}>
                <img src={notifications_icon} />
              </Col>

              <Col lg={5}>
                <div id="nav-right-dropdown">
                  <div id="nav-image">
                    <img src={placeholder_image} />
                  </div>
                  <div>
                    <p>John</p>
                  </div>
                  <div>
                    <img src={dropdown_icon} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Navbar;
