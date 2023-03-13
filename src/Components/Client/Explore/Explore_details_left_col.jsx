import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import callIcon from "../../../Assets/USP Assets/phone-call.png";
import vatIcon from "../../../Assets/USP Assets/vat.png";

class Explore_details_left_col extends React.Component {
  state = {
    deals: [1, 2, 3],
  };

  render(props) {
    return (
      <>
        <div className="cards">
          {this.props.brand.deals.map((item) => {
            return (
              <div className="card">
                <div>
                  <div id="dsk-card-header">
                    <Row>
                      <Col lg={2} md={2}>
                        <img src={item.image} className="card-image" />
                      </Col>
                      <Col lg={5} md={6}>
                        <div>
                          <p className="desktop-header">
                            {item.Type} - {item.Name}
                          </p>
                          {item.Offers !== null ? (
                            <p className="desktop-sub-header1">{item.Offers}</p>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg={3} md={2}>
                        <div id="cb-package-icon-box">
                          {item.Calls !== "No" ? (
                            <img src={callIcon} className="cb-icon-box-image" />
                          ) : (
                            <p className="desktop-sub-header2">
                              No Calls Included
                            </p>
                          )}
                          {item.VAT !== "Included" ? (
                            <img src={vatIcon} className="cb-icon-box-image" />
                          ) : (
                            <p className="desktop-sub-header2">
                              No VAT Included
                            </p>
                          )}
                        </div>
                      </Col>
                      {item.Offers !== null ? (
                        <Col lg={2} md={2}>
                          <div className="desktop-big-button-transparent">
                            <p className="desktop-big-button-transparent-text">
                              Promotion
                            </p>
                          </div>
                        </Col>
                      ) : null}
                    </Row>
                  </div>

                  <div id="card-body">
                    <div id="cb-price-box">
                      <p className="desktop-header">
                        £{item.Price} {""}
                        <span className="desktop-text">/month</span>
                      </p>
                      {item.Setup === "Free" ? (
                        <p className="desktop-header">
                          £0 {""}
                          <span className="desktop-text">Setup Fee</span>
                        </p>
                      ) : (
                        <p className="desktop-header">
                          £{item.Setup} {""}
                          <span className="desktop-text">Setup Fee</span>
                        </p>
                      )}
                    </div>
                    {item.Contract !== "No Contract" ? (
                      <div id="cb-contract-box">
                        <p className="desktop-header">
                          {item.Contract} {""}
                          <span className="desktop-text">months contract</span>
                        </p>
                      </div>
                    ) : (
                      <div id="cb-contract-box">
                        <p className="desktop-header">No Contract</p>
                      </div>
                    )}

                    <div id="cb-contract-box">
                      <p className="desktop-header">
                        110Mbps
                        <span className="desktop-text">Average Speed</span>
                      </p>
                    </div>
                    <div id="cb-contract-box">
                      <p className="desktop-header">
                        {item.Downloads} {""}
                        <span className="desktop-text">Downloads</span>
                      </p>
                    </div>
                  </div>
                  <div id="card-footer">
                    {item.Benefits[0] !== "No Benefits" ? (
                      <div id="features">
                        <Row>
                          {item.Benefits.map((feature) => {
                            return (
                              <Col lg={6} id="features-col">
                                <p className="desktop-text">{feature}</p>
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    ) : null}

                    <div id="cf-cta-holder">
                      <div className="desktop-small-button">
                        <p className="desktop-medium-button-text">Visit Now</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to={"/explore/brand/" + item.brandId} className="links">
                  <div id="card-footer-2">
                    <p className="desktop-text">See all deals from brand</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details_left_col);
