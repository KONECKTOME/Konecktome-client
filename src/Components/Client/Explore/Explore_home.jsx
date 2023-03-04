import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import { Row, Col } from "react-bootstrap";
import placeholder from "../../../Assets/virginMediaLogo.png";
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
                          <img src={placeholder} className="card-image" />
                        </Col>
                        <Col lg={8} md={8}>
                          <div>
                            <p className="desktop-header">{item.title}</p>
                            {/* {item.promotions.length != 0 ? (
                              <Row id="ch-promotions">
                                <Col id="ch-promotions-col">
                                  <p className="desktop-text">
                                    This is a promotion text
                                  </p>
                                </Col>
                                <Col id="ch-promotions-col">
                                  <p className="desktop-text">
                                    This is a promotion text
                                  </p>
                                </Col>
                                <Col id="ch-promotions-col">
                                  <p className="desktop-text">
                                    This is a promotion text
                                  </p>
                                </Col>
                              </Row>
                            ) : null} */}
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
                          <img src={placeholder} className="card-image" />
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
                        <p className="desktop-header">{item.title}</p>
                        <Row id="ch-promotions">
                          <Col id="ch-promotions-col">
                            <p className="desktop-text">
                              This is a promotion text
                            </p>
                          </Col>
                          <Col id="ch-promotions-col">
                            <p className="desktop-text">
                              This is a promotion text
                            </p>
                          </Col>
                          <Col id="ch-promotions-col">
                            <p className="desktop-text">
                              This is a promotion text
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div id="card-body">
                      <div id="cb-price-box">
                        <p className="desktop-header">
                          £{item.price}{" "}
                          <span className="desktop-text">/month</span>
                        </p>
                      </div>
                      <div id="cb-contract-box">
                        <p className="desktop-header">
                          {item.duration}{" "}
                          {/* <span className="desktop-text">months contract</span> */}
                        </p>
                      </div>
                    </div>
                    <div id="card-footer">
                      <div id="features">
                        {item.features.map((feature) => {
                          return (
                            <div id="cf-features-holder">
                              <p className="desktop-text">{feature}</p>
                            </div>
                          );
                        })}
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
