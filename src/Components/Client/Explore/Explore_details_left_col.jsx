import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import placeholder from "../../../Assets/virginMediaLogo.png";

class Explore_details_left_col extends React.Component {
  state = {
    deals: [1, 2, 3],
    brandDetails: [],
    dealsByBrand: [],
  };

  componentDidMount = async () => {
    this.getBrandDetails();
  };

  getBrandDetails = async () => {
    const response = await fetch(`http://localhost:3002/aff/brand-details/`, {
      method: "POST",
      body: JSON.stringify({
        brandId: this.props.match.params.id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("is", this.props.match.params.id);
    const brandDetails = await response.json();
    // this.setState({ dealsByBrand: brandDetails.message.deals });
    console.log(brandDetails);
  };

  render() {
    return (
      <>
        <p className="desktop-header">All Deals From This Brand</p>
        <div className="cards">
          {this.state.deals.map((item) => {
            return (
              <div className="card">
                <div>
                  <div id="dsk-card-header">
                    <Row>
                      <Col lg={2} md={2}>
                        {/* <img src={placeholder} className="card-image" /> */}
                      </Col>
                      <Col lg={8} md={8}>
                        <div>
                          <p className="desktop-header"> test</p>
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
                      <p className="desktop-header"> test</p>
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
                        test
                        <span className="desktop-text">/month</span>
                      </p>
                    </div>
                    <div id="cb-contract-box">
                      <p className="desktop-header"> test </p>
                    </div>
                  </div>
                  <div id="card-footer">
                    {/* <div id="features">
                      {item.features.map((feature) => {
                        return (
                          <div id="cf-features-holder">
                            <p className="desktop-text">{feature}</p>
                          </div>
                        );
                      })}
                    </div> */}
                    <div id="cf-cta-holder">
                      <div className="desktop-small-button">
                        <p className="desktop-medium-button-text">Visit Now</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="card-footer-2">
                  <p className="desktop-text">See all deals from brand</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details_left_col);
