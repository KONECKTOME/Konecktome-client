import React, { Component } from "react";
import "../../../css/Dashboard/Recommendations.css";
import life_insurance from "../../../Assets/reco-life-insurance.svg";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Recommendations extends Component {
  state = {
    test: [1, 2, 3, 4],
    displayAccordion: false,
    deals: [],
    loading: false,
  };

  componentDidMount = async () => {
    const deals = this.props.deals;
    const shuffledDeals = [...deals].sort(() => 0.5 - Math.random());
    this.setState({ deals: shuffledDeals });
  };

  directToExploreAll = () => {
    this.props.history.push(
      "/dashboard/explore/" + this.props.match.params.userid
    );
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
                <div className="d-flex flex-wrap gap-4 justify-content-sm-center justify-content-md-start mt-3">
                  {this.state.deals.slice(0, 4).map((deal) => {
                    return (
                      <div id="dashboard-reco">
                        <div className="d-flex align-items-start">
                          <div id="icon-wrapper">
                            <img src={life_insurance} />
                          </div>
                          <div>
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
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="desktop-small-button"
                  id="dashboard-reco-explore-all"
                  onClick={() => this.directToExploreAll()}
                >
                  <p className="desktop-big-button-text">Explore All Deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Recommendations;
