import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import { Row, Col } from "react-bootstrap";
import callIcon from "../../../Assets/USP Assets/phone-call.png";
import vatIcon from "../../../Assets/USP Assets/vat.png";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";

let breadCrumbData = [
  { title: "Your HomePage", link: "/" },
  { title: "Your HomePage", link: "/" },
];

class Explore_home extends Component {
  state = {
    data: [1, 2, 3],
    deals: [
      {
        Brand: "YouFibre",
        brandId: "640e0aef570a1e1362a03d1c",
        Type: "Home",
        Name: "YouFibre 150 Broadband",
        Speed: 150,
        Contract: "24",
        Downloads: "Unlimited",
        Calls: "No",
        VAT: "Included",
        Setup: "Free",
        Price: 21.99,
        Offers: null,
        OfferPrice: null,
        Benefits: ["No in-contract price rises guaranteed"],
        url: "https://www.awin1.com/cread.php?awinmid=20520&awinaffid=1256727&ued=https%3A%2F%2Fwww.youfibre.com%2F",
        image:
          "https://res.cloudinary.com/konecktome/image/upload/c_scale,w_150/v1678034301/YouFibreLogo_dhuh3m.png",
      },
      {
        Brand: "YouFibre",
        brandId: "640e0aef570a1e1362a03d1c",
        Type: "Home",
        Name: "YouFibre 190 Broadband",
        Speed: 150,
        Contract: "24",
        Downloads: "Unlimited",
        Calls: "No",
        VAT: "Included",
        Setup: "Free",
        Price: 21.99,
        Offers: null,
        OfferPrice: null,
        Benefits: ["No in-contract price rises guaranteed"],
        url: "https://www.awin1.com/cread.php?awinmid=20520&awinaffid=1256727&ued=https%3A%2F%2Fwww.youfibre.com%2F",
        image:
          "https://res.cloudinary.com/konecktome/image/upload/c_scale,w_150/v1678034301/YouFibreLogo_dhuh3m.png",
      },
      {
        Brand: "YouFibre",
        brandId: "640e0aef570a1e1362a03d1c",
        Type: "Home",
        Name: "YouPhone Plus (cannot be bought seperately)",
        Speed: 150,
        Contract: "24",
        Downloads: "Unlimited",
        Calls: "No",
        VAT: "Included",
        Setup: "Free",
        Price: 21.99,
        Offers: "£1 for the first 3 months, £29.99 thereafter",
        OfferPrice: null,
        Benefits: ["No Benefits"],
        url: "https://www.awin1.com/cread.php?awinmid=20520&awinaffid=1256727&ued=https%3A%2F%2Fwww.youfibre.com%2F",
        image:
          "https://res.cloudinary.com/konecktome/image/upload/c_scale,w_150/v1678034301/YouFibreLogo_dhuh3m.png",
      },
    ],
  };

  render(props) {
    return (
      <>
        <BreadCrumbs currentPage="Explore deals" />
        <div id="kt-af-deals">
          <div className="cards">
            {this.state.deals.map((item) => {
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
                              <p className="desktop-sub-header1">
                                {item.Offers}
                              </p>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg={3} md={2}>
                          <div id="cb-package-icon-box">
                            {item.Calls !== "No" ? (
                              <img
                                src={callIcon}
                                className="cb-icon-box-image"
                              />
                            ) : (
                              <p className="desktop-sub-header2">
                                No Calls Included
                              </p>
                            )}
                            {item.VAT !== "Included" ? (
                              <img
                                src={vatIcon}
                                className="cb-icon-box-image"
                              />
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
                        <img
                          src="https://res.cloudinary.com/konecktome/image/upload/v1678034301/YouFibreLogo_dhuh3m.png"
                          className="card-image"
                        />
                        <div id="package-txt">
                          <p className="desktop-header package-title">
                            Home - {item.title}
                          </p>
                          <p className="desktop-sub-header1 package-details">
                            £15 for 6 months then £33 a month
                          </p>
                        </div>
                      </div>
                      <div>
                        <div id="cb-package-icon-box">
                          <img src={callIcon} className="cb-icon-box-image" />
                          <p className="desktop-sub-header2 vat-included">
                            VAT Included
                          </p>
                        </div>
                        <div className="desktop-big-button-transparent promo-btn">
                          <p className="desktop-big-button-transparent-text">
                            Promotion
                          </p>
                        </div>
                      </div>
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

                      <div id="card-div1">
                        <div id="cb-price-box">
                          <p className="desktop-header">
                            £{item.price}
                            <span className="desktop-text">/month</span>
                          </p>
                          <p className="desktop-header">
                            £{item.price}
                            <span className="desktop-text">Setup Fee</span>
                          </p>
                        </div>
                        <div id="cb-contract-box">
                          <p className="desktop-header">
                            24{" "}

                            <span className="desktop-text">
                              months contract
                            </span>
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
                      <div id="card-div2">
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
                          <p className="desktop-medium-button-text">
                            Visit Now
                          </p>
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
        </div>
      </>
    );
  }
}

export default Explore_home;
