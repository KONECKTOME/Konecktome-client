import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import callIcon from "../../../Assets/USP Assets/phone-call.png";
import vatIcon from "../../../Assets/USP Assets/vat.png";

class Explore_details_left_col extends React.Component {
  state = {};

  openReferralLink = async (url, brandId) => {
    const response = await fetch(
      `http://localhost:3002/tracking/new-tracking`,
      {
        method: "POST",
        body: JSON.stringify({
          brandId: brandId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "Click Added") {
      window.open(url, "_blank");
    }
  };

  render() {
    return (
      <div id="explore-brand-deals">
        <div className="cards">
          {this.props.deals.map((item) => {
            return (
              <div className="card">
                <div>
                  <div id="dsk-card-header">
                    <div>
                      <img src={item.image} className="card-image" />
                      <div id="package-txt">
                        <p className="desktop-header package-title">
                          {item.Type} - {item.Name}
                        </p>
                        {item.Offers !== null ? (
                          <p className="desktop-sub-header1 package-details">
                            {item.Offers}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <div id="cb-package-icon-box">
                        {item.Calls !== "No" ? (
                          <img src={callIcon} className="cb-icon-box-image" />
                        ) : null}
                        {item.VAT === "Included" ? (
                          <img src={vatIcon} className="cb-icon-box-image" />
                        ) : null}
                      </div>
                      {item.Offers !== null ? (
                        <div className="desktop-big-button-transparent promo-btn">
                          <p className="desktop-big-button-transparent-text">
                            Promotion
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div id="card-body">
                    <div id="card-div1">
                      <div id="cb-price-box">
                        <p className="desktop-header">
                          £{item.Price} {""}
                          <span className="desktop-text">/month</span>
                        </p>
                        {item.Setup !== "Free" ? (
                          <p className="desktop-header">
                            £{item.price}
                            <span className="desktop-text">Setup Fee</span>
                          </p>
                        ) : (
                          <p className="desktop-header">
                            £0 {""}
                            <span className="desktop-text">Setup Fee</span>
                          </p>
                        )}
                      </div>
                      <div id="cb-contract-box">
                        {item.Contract !== "No Contract" ? (
                          <p className="desktop-header">
                            {item.Contract}{" "}
                            <span className="desktop-text">
                              months contract
                            </span>
                          </p>
                        ) : (
                          <p className="desktop-header">No Contract</p>
                        )}
                      </div>
                    </div>
                    <div id="card-div2">
                      <div id="cb-contract-box">
                        {item.Speed !== null ? (
                          <p className="desktop-header">
                            {item.Speed}Mbps{" "}
                            <span className="desktop-text">Average Speed</span>
                          </p>
                        ) : (
                          <p className="desktop-header">
                            {" "}
                            <p className="desktop-header">
                              20Mbps{" "}
                              <span className="desktop-text">
                                Average Speed
                              </span>
                            </p>
                          </p>
                        )}
                      </div>
                      <div id="cb-contract-box">
                        {item.Downloads === "Unlimited" ? (
                          <p className="desktop-header">
                            Unlimited{" "}
                            <span className="desktop-text">Downloads</span>
                          </p>
                        ) : (
                          <p className="desktop-header">
                            Limited{" "}
                            <span className="desktop-text">Downloads</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div id="card-footer">
                    <div id="features">
                      <Row>
                        {item.Benefits[0] !== "No Benefits" ? (
                          <>
                            {" "}
                            {item.Benefits.map((feature) => {
                              return (
                                <Col lg={6} id="features-col">
                                  <p className="desktop-text">{feature}</p>
                                </Col>
                              );
                            })}
                          </>
                        ) : null}
                      </Row>
                    </div>
                    <div
                      id="cf-cta-holder"
                      onClick={() =>
                        this.openReferralLink(item.url, item.brandId)
                      }
                    >
                      <div className="desktop-small-button">
                        <p className="desktop-medium-button-text">Visit Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Explore_details_left_col);
