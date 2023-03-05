import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import { Row, Col } from "react-bootstrap";
import callIcon from "../../../Assets/USP Assets/phone-call.png";
import vatIcon from "../../../Assets/USP Assets/vat.png";
import { Link } from "react-router-dom";

class Explore_home extends Component {
  state = {
    data: [1, 2, 3],
  };

  render(props) {
    return (
      <>
        <div id="kt-af-deals">
          <div className="cards">
            {this.props.deals.map((item) => {
              return (
                <div className="card">
                  <div>
                    <div id="dsk-card-header">
                      <Row>
                        <Col lg={2} md={2}>
                          <img
                            src="https://res.cloudinary.com/konecktome/image/upload/v1678034301/YouFibreLogo_dhuh3m.png"
                            className="card-image"
                          />
                        </Col>
                        <Col lg={5} md={6}>
                          <div>
                            <p className="desktop-header">
                              Home - {item.title}
                            </p>
                            <p className="desktop-sub-header1">
                              £15 for 6 months then £33 a month
                            </p>
                          </div>
                        </Col>
                        <Col lg={3} md={2}>
                          <div id="cb-package-icon-box">
                            <img src={callIcon} className="cb-icon-box-image" />

                            <p className="desktop-sub-header2">VAT Included</p>
                          </div>
                        </Col>
                        <Col lg={2} md={2}>
                          <div className="desktop-big-button-transparent">
                            <p className="desktop-big-button-transparent-text">
                              Promotion
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div id="mw-card-header">
                      <Row>
                        <Col>
                          {/* <img src={placeholder} className="card-image" /> */}
                        </Col>
                        <Col>
                          <div className="desktop-big-button-transparent">
                            <p className="desktop-big-button-transparent-text">
                              Promotion
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <div>
                        <p className="desktop-header">Home - {item.title}</p>
                      </div>
                    </div>
                    <div id="card-body">
                      <div id="cb-price-box">
                        <p className="desktop-header">
                          £{item.price}{" "}
                          <span className="desktop-text">/month</span>
                        </p>
                        <p className="desktop-header">
                          £{item.price}{" "}
                          <span className="desktop-text">Setup Fee</span>
                        </p>
                      </div>
                      <div id="cb-contract-box">
                        <p className="desktop-header">
                          24{" "}
                          <span className="desktop-text">months contract</span>
                        </p>
                      </div>
                      <div id="cb-contract-box">
                        <p className="desktop-header">
                          110Mbps{" "}
                          <span className="desktop-text">Average Speed</span>
                        </p>
                      </div>
                      <div id="cb-contract-box">
                        <p className="desktop-header">
                          Unlimited{" "}
                          <span className="desktop-text">Downloads</span>
                        </p>
                      </div>
                    </div>
                    <div id="card-footer">
                      <div id="features">
                        <Row>
                          {item.features.map((feature) => {
                            return (
                              <Col lg={6} id="features-col">
                                <p className="desktop-text">{feature}</p>
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                      <div id="cf-cta-holder">
                        <div className="desktop-small-button">
                          <p className="desktop-medium-button-text">
                            Visit Now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={"/explore/brand/" + item._id} className="links">
                    <div id="card-footer-2">
                      <p className="desktop-text">See all deals from brand</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Explore_home;
