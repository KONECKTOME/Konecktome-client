import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import { Row, Col } from "react-bootstrap";
import callIcon from "../../../Assets/USP Assets/phone-call.png";
import vatIcon from "../../../Assets/USP Assets/vat.png";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";

class Explore_home extends Component {
  state = {
    loading: false,
  };

  componentDidMount = async () => {
    this.impression();
  };

  openReferralLink = async (url, brandId) => {
    this.setState({ loading: true });
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/tracking/new-tracking`,
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
      var newTab = window.open("", "_blank");
      if (newTab) {
        newTab.opener = null;
        newTab.location.href = url;
      } else {
        window.location.href = url;
      }
      this.setState({ loading: false });
    }
  };

  impression = async () => {
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/impressions/new-impressions`,
      {
        method: "POST",
        body: JSON.stringify({
          page: "Explore",
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let landing = await response.json();
  };

  render(props) {
    return (
      <>
        <div id="kt-af-deals">
          <BreadCrumbs currentPage="Explore All Deals" />
          <div className="cards">
            {this.props.deals.map((item) => {
              return (
                <div className="card">
                  <div id="card-footer-2">
                    <div>Speed and price may vary based on location.</div>
                  </div>
                  <div>
                    <div id="dsk-card-header">
                      <div>
                        <img src={item.image} className="card-image" />
                        <div id="package-txt">
                          <p className="desktop-header package-title">
                            {item.Type} - {item.Name}
                          </p>
                          {item.Offers !== null ? (
                            <>
                              <p className="desktop-sub-header1 package-details">
                                {item.Offers}
                              </p>
                            </>
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
                        <div id="cb-contract-box">
                          {!item.contractStatus ? (
                            <p className="desktop-header">No Contract</p>
                          ) : (
                            <p className="desktop-header">
                              {item.Contract}{" "}
                              <span className="desktop-text">
                                months contract
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                      <div id="card-div2">
                        <div id="cb-contract-box">
                          {item.Speed !== null ? (
                            <p className="desktop-header">
                              {item.Speed}Mbps{" "}
                              <span className="desktop-text">
                                Average Speed
                              </span>
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
                          {this.state.loading ? (
                            <p className="desktop-medium-button-text">
                              Redirecting...
                            </p>
                          ) : (
                            <p className="desktop-medium-button-text">
                              Visit Now
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="card-footer-2">
                    <div>
                      <Link
                        to={"/explore/brand/" + item.brandId}
                        className="links"
                      >
                        <p className="desktop-text">
                          See all deals from {item.Brand}
                        </p>
                      </Link>
                    </div>
                  </div>
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
