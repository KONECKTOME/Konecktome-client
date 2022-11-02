import React, { Component } from "react";
import "../../../css/LandingPage/USP.css";
import { Row, Col } from "react-bootstrap";
import Exclusive from "../../../Assets/USP Assets/Exclusive.png";
import Cancellation from "../../../Assets/USP Assets/Cancellation.png";
import Security from "../../../Assets/USP Assets/Security.png";
import Management from "../../../Assets/USP Assets/Management.png";
import Reviews from "../../../Assets/USP Assets/Reviews.png";
import Enable from "../../../Assets/USP Assets/Enable.png";

class USP extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="usp-holder">
          <Row>
            <Col lg={7}>
              <div className="usp-image-holder">
                <img src={Exclusive} />
              </div>
            </Col>
            <Col lg={5}>
              <div className="usp-item-holder">
                <p className="usp-item-header">Exclusive</p>
                <p className="usp-item-text">
                  Receive the best and exclusive deals from services rated 4
                  stars or more(out of 5).
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div id="usp-holder">
          <Row>
            <Col lg={7}>
              <div className="usp-item-holder">
                <p className="usp-item-header">Cancellation</p>
                <p className="usp-item-text">
                  No cancellation fee when you switch your services through us.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="usp-image-holder">
                <img src={Cancellation} />
              </div>
            </Col>
          </Row>
        </div>
        <div id="usp-holder">
          <Row>
            <Col lg={7}>
              <div className="usp-image-holder">
                <img src={Security} />
              </div>
            </Col>
            <Col lg={5}>
              <div className="usp-item-holder">
                <p className="usp-item-header">Security</p>
                <p className="usp-item-text">
                  We securely store your personal information so you never have
                  to. Great for purchasing new services and keeping all your
                  details in one place.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div id="usp-holder">
          <Row>
            <Col lg={7}>
              <div className="usp-item-holder">
                <p className="usp-item-header">Management</p>
                <p className="usp-item-text">
                  Manage & split all your bills and access all service accounts
                  in one place
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="usp-image-holder">
                <img src={Management} />
              </div>
            </Col>
          </Row>
        </div>
        <div id="usp-holder">
          <Row>
            <Col lg={7}>
              <div className="usp-image-holder">
                <img src={Reviews} />
              </div>
            </Col>
            <Col lg={5}>
              <div className="usp-item-holder">
                <p className="usp-item-header">User Reviews</p>
                <p className="usp-item-text">
                  We provide user reviews and necessary extra information on all
                  listed services, to give you greater confidence in your buying
                  decisions.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div id="usp-holder">
          <Row>
            <Col lg={7}>
              <div className="usp-item-holder">
                <p className="usp-item-header">Simply Enabled</p>
                <p className="usp-item-text">
                  We keep everything simple by enabling and switching all in one
                  place.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="usp-image-holder">
                <img src={Enable} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default USP;
