import React, { Component } from "react";
import "../../../css/Dashboard/Recommendations.css";
import life_insurance from "../../../Assets/reco-life-insurance.svg";
import home_icon from "../../../Assets/reco-home-icon.svg";
import mortgage_icon from "../../../Assets/reco-mortgage.svg";
import pet_icon from "../../../Assets/reco-pet-icon.svg";
import health_icon from "../../../Assets/reco-health.svg";
import car_icon from "../../../Assets/reco-car-insurance.svg";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Row, Col } from "react-bootstrap";

class Recommendations extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="recommendations-wrapper">
          <div id="recommendations-second-wrapper">
            <div id="reco-inner">
              <div id="reco-header-wrapper">
                <div>
                  <p id="reco-header">Personal Recommendations</p>
                </div>
                <div>
                  <p id="view-all-link">View All</p>
                </div>
              </div>
              <div>
                <Row>
                  <Col lg={6}>
                    <div className="reco-col">
                      <div className="reco-col-inner">
                        <Row>
                          <Col lg={1}>
                            <div id="icon-wrapper">
                              <img src={life_insurance} />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div>
                              <p className="reco-col-inner-header">
                                Life Insurance
                              </p>
                              <p className="reco-col-inner-sub-text">
                                Lorem ipsum is simply a dummy text of printing
                                and typesetting industry
                              </p>
                              <hr></hr>
                              <div id="dashboard_reco_accordion_wrapper">
                                <div id="dashboard_reco_accordion_inner_wrapper">
                                  <p>Company</p>
                                  <Row>
                                    <Col>
                                      <div id="dashboard-reco-accordion-image-sub-container">
                                        <img
                                          src={profileSettingPlaceholder}
                                          id="dashboard-reco-accordion_profile_image"
                                        />
                                      </div>
                                    </Col>
                                    <Col>
                                      <p id="dashboard-reco-accordion-text">
                                        Service provider name
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                                <div>
                                  <p>Action</p>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="reco-col">
                      <div className="reco-col-inner">
                        <Row>
                          <Col lg={1}>
                            <div id="icon-wrapper">
                              <img src={home_icon} />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div>
                              <p className="reco-col-inner-header">
                                Home Insurance
                              </p>
                              <p className="reco-col-inner-sub-text">
                                Lorem ipsum is simply a dummy text of printing
                                and typesetting industry
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="reco-col">
                      <div className="reco-col-inner">
                        <Row>
                          <Col lg={1}>
                            <div id="icon-wrapper">
                              <img src={mortgage_icon} />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div>
                              <p className="reco-col-inner-header">Mortgages</p>
                              <p className="reco-col-inner-sub-text">
                                Lorem ipsum is simply a dummy text of printing
                                and typesetting industry
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="reco-col">
                      <div className="reco-col-inner">
                        <Row>
                          <Col lg={1}>
                            <div id="icon-wrapper">
                              <img src={pet_icon} />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div>
                              <p className="reco-col-inner-header">
                                Pet Insurance
                              </p>
                              <p className="reco-col-inner-sub-text">
                                Lorem ipsum is simply a dummy text of printing
                                and typesetting industry
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="reco-col">
                      <div className="reco-col-inner">
                        <Row>
                          <Col lg={1}>
                            <div id="icon-wrapper">
                              <img src={health_icon} />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div>
                              <p className="reco-col-inner-header">
                                Health Insurance
                              </p>
                              <p className="reco-col-inner-sub-text">
                                Lorem ipsum is simply a dummy text of printing
                                and typesetting industry
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="reco-col">
                      <div className="reco-col-inner">
                        <Row>
                          <Col lg={1}>
                            <div id="icon-wrapper">
                              <img src={car_icon} />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div>
                              <p className="reco-col-inner-header">
                                Car Insurance
                              </p>
                              <p className="reco-col-inner-sub-text">
                                Lorem ipsum is simply a dummy text of printing
                                and typesetting industry
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
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
