import React, { Component } from "react";
import "../../../css/Dashboard/Recommendations.css";
import life_insurance from "../../../Assets/reco-life-insurance.svg";
import home_icon from "../../../Assets/reco-home-icon.svg";
import mortgage_icon from "../../../Assets/reco-mortgage.svg";
import pet_icon from "../../../Assets/reco-pet-icon.svg";
import health_icon from "../../../Assets/reco-health.svg";
import car_icon from "../../../Assets/reco-car-insurance.svg";
import inFavoriteIcon from "../../../Assets/un-fav-icon.svg";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Recommendations extends Component {
  state = {
    test: [1, 2, 3, 4],
    displayAccordion: false,
    deals: [],
  };

  componentDidMount = async () => {
    const response = await fetch(`http://localhost:3002/companies/all-deals`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deals = await response.json();
    const shuffledDeals = [...deals].sort(() => 0.5 - Math.random());
    this.setState({ deals: shuffledDeals });
  };

  switchAccordion = () => {
    this.setState({
      displayAccordion: !this.state.displayAccordion,
    });
  };
  render() {
    return (
      <>
        <div id="recommendations-wrapper">
          <div id="recommendations-second-wrapper">
            <div id="reco-inner">
              <div id="reco-header-wrapper">
                <div>
                  <p id="reco-header">Recommendations</p>
                </div>
              </div>
              <div>
                <Row>
                  {this.state.deals.slice(0, 4).map((deal) => {
                    return (
                      <Col lg={6} className="reco-col">
                        <div id="dashboard-reco">
                          <Row>
                            <Col lg={2}>
                              <div id="icon-wrapper">
                                <img src={life_insurance} />
                              </div>
                            </Col>
                            <Col lg={10}>
                              <div id="dashboard-reco-deals">
                                <div>
                                  <p className="desktop-sub-header2">
                                    {deal.dealName} by {deal.companyName}
                                  </p>
                                  <p className="desktop-text">{deal.speed}</p>
                                </div>
                              </div>
                              <div id="more-details-holder">
                                <Link
                                  className="links"
                                  to={
                                    "/dashboard/explore/details/" +
                                    this.props.userId +
                                    "/" +
                                    deal._id
                                  }
                                >
                                  <p className="desktop-cta">View Details</p>
                                </Link>
                              </div>
                              {/* {this.state.test.map((tt) => {
                            return (
                              <div
                                className={
                                  this.state.displayAccordion === true
                                    ? "dashboard_reco_accordion_wrapper_show"
                                    : "dashboard_reco_accordion_wrapper_hide"
                                }
                              >
                                <div>
                                  <div id="dashboard_reco_accordion_inner_div_wrapper">
                                    <div>
                                      <div id="dashboard-reco-accordion-image-sub-container">
                                        <img
                                          src={profileSettingPlaceholder}
                                          id="dashboard-reco-accordion_profile_image"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <p id="dashboard-reco-accordion-text">
                                        Service provider name
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <img src={inFavoriteIcon} />
                                </div>
                              </div>
                            );
                          })} */}
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Recommendations;
