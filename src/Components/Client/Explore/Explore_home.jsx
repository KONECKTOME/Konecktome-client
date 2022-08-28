import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Explore_comparison from "./Explore_comparison";

class Explore_home extends Component {
  state = {
    companies: [],
    deals: [],
    searchDeals: [],
    searchStatus: false,
    searchQuery: "",
    showCompare: false,
    compareItems: [],
    compareMoreThanOne: false,
    compareLength: null,
    showComparePage: false,
    checkedItems: [],
    checked: false,
  };

  componentDidMount = async () => {
    const dealArr = [];
    const response = await fetch(`http://localhost:3002/companies/all-deals`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deals = await response.json();
    this.setState({ deals });
  };

  getDealById = async () => {
    const response = await fetch(
      `http://localhost:3002/companies/get-deal-by-id/${this.props.match.params.dealId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const deal = await response.json();
    this.setState({ deal: deal.message });
    console.log(this.state.deal);
  };

  searchDeals = (e) => {
    e.preventDefault();
    let searchResult = [];
    let searchQuery = e.currentTarget.value
      .split(" ")
      .join("")
      .trim()
      .toLowerCase();
    const deals = this.state.deals;

    for (let deal in deals) {
      if (
        deals[deal].dealName
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .includes(searchQuery) === true
      ) {
        searchResult.push(deals[deal]);
        this.setState({ searchDeals: searchResult, searchStatus: true });
      }
      if (this.state.searchQuery === "") {
        this.setState({ searchDeals: [], searchStatus: false });
      }
    }
  };

  showCompare = (dealName, dealPrice, features, dealContractPlans, e) => {
    if (e.target.checked === false && this.state.compareLength === 1) {
      this.setState({
        checkedItems: [],
        showCompare: false,
        compareItems: [],
        compareMoreThanOne: false,
        compareLength: "",
      });
    } else if (e.target.checked === false && this.state.compareLength > 1) {
      const filter = this.state.compareItems.filter(
        (item) => item.dealName !== dealName
      );
      this.setState({
        compareItems: filter,
        compareLength: filter.length,
      });
    } else if (this.state.compareLength === 4) {
      alert("too much");
    } else if (e.target.checked === true && this.state.compareLength !== 4) {
      let compareItem = { dealName, dealPrice, features, dealContractPlans };
      this.setState((state) => ({
        showCompare: true,
        compareItems: state.compareItems.concat([compareItem]),
        compareLength: this.state.compareItems.length + 1,
      }));
      console.log(this.state.compareLength);
      console.log(this.state.compareItems);
      if (this.state.compareLength > 1) {
        this.setState({
          compareMoreThanOne: true,
        });
      } else {
        this.setState({
          compareMoreThanOne: false,
        });
      }
    }
  };

  deleteCompareItem = (dealName) => {
    if (this.state.compareLength === 1) {
      const filter = this.state.compareItems.filter(
        (item) => item.dealName !== dealName
      );
      this.setState({
        compareItems: filter,
        compareLength: filter.length,
        showCompare: false,
      });
    } else {
      const filter = this.state.compareItems.filter(
        (item) => item.dealName !== dealName
      );
      this.setState({
        compareItems: filter,
        compareLength: filter.length,
      });
    }
  };

  showComparePage = () => {
    if (this.state.showComparePage === true) {
      this.setState({
        showComparePage: false,
        showCompare: false,
        compareItems: [],
        compareMoreThanOne: false,
        compareLength: "",
        showComparePage: false,
      });
    } else {
      this.setState({
        showComparePage: true,
      });
    }
  };

  test = () => {
    this.props.history.push("/dashboard/pay-success/62fd07bef7ac7d79b80afcdd");
  };
  render(props) {
    return (
      <div id="explore-wrapper">
        <p className="desktop-header">Explore</p>
        {this.state.showComparePage === true ? (
          <div>
            <Explore_comparison
              compareItems={this.state.compareItems}
              showComparePage={() => this.showComparePage()}
              {...props}
            />
          </div>
        ) : (
          <>
            {/* <div id="form-div">
              <form>
                <input
                  id="searchQuery"
                  type="text"
                  placeholder="Search by name, category"
                  className="explore-search-form"
                  onKeyUp={(e) => this.searchDeals(e)}
                  // value={this.state.details.email}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.currentTarget.value })
                  }
                />
              </form>
            </div> */}
            {this.state.searchStatus === false ? (
              <div id="explore-inner-div">
                <div id="explore-cards-pagination-wrapper">
                  <div
                    className="cards"
                    id={
                      this.state.showCompare === true
                        ? "explore-cards-shown"
                        : null
                    }
                  >
                    {this.state.deals.map((deal) => {
                      return (
                        <div className="card">
                          <div onClick={() => this.test()}>test</div>
                          <div id="image-holder">
                            <img
                              src={image_placeholder}
                              className="card-image"
                            />
                          </div>
                          <div className="card-inner-first-div">
                            <p className="desktop-sub-header2">
                              {deal.dealName} By {deal.companyName}
                            </p>
                            <div>
                              <p>Stars</p>
                              <p>{deal.trustPilotRating}</p>
                            </div>
                          </div>
                          <div>
                            <div className="desktop-badge1">
                              <p className="desktop-badge-text">{deal.tag}</p>
                            </div>
                          </div>
                          <div id="account-card-footer">
                            <div id="explore-compare-holder">
                              <label
                                for="compare"
                                className="desktop-price"
                                id="compare-label"
                              >
                                <input
                                  value={deal.dealName}
                                  id={deal.dealName}
                                  type="checkbox"
                                  onChange={(e) =>
                                    this.showCompare(
                                      deal.dealName,
                                      deal.dealPrice,
                                      deal.features,
                                      deal.dealContractPlans,
                                      e
                                    )
                                  }
                                />

                                <span>Compare</span>
                              </label>
                            </div>
                            <div>
                              <p className="desktop-price"> Price</p>
                              <p className="desktop-price-number">
                                £{deal.dealPrice}
                              </p>
                            </div>
                            <div>
                              <Link
                                className="links"
                                to={
                                  "/dashboard/explore/details/" +
                                  this.props.match.params.userid +
                                  "/" +
                                  deal._id
                                }
                              >
                                <p className="desktop-cta">View details</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div id="explore-inner-div">
                <div id="explore-cards-pagination-wrapper">
                  <div className="cards">
                    {this.state.searchDeals.map((deal) => {
                      return (
                        <div className="card">
                          <div id="image-holder">
                            <img
                              src={image_placeholder}
                              className="card-image"
                            />
                          </div>
                          <div className="card-inner-first-div">
                            <p className="desktop-sub-header2">
                              {deal.dealName} By {deal.companyName}
                            </p>
                            <div>
                              <p>Stars</p>
                              <p>Trust Pilot ratings</p>
                            </div>
                          </div>
                          <div>
                            {/* <p className="desktop-sub-header2">{deal.dealName}</p> */}
                            <div className="desktop-badge1">
                              <p className="desktop-badge-text">{deal.tag}</p>
                            </div>
                          </div>
                          <div id="account-card-footer">
                            <div>
                              <p className="desktop-price"> Price</p>
                              <p className="desktop-price-number">
                                £{deal.dealPrice}
                              </p>
                            </div>
                            <div>
                              <Link
                                className="links"
                                to={
                                  "/dashboard/explore/details/" +
                                  this.props.match.params.userid +
                                  "/" +
                                  deal._id
                                }
                              >
                                <p className="desktop-cta">View details</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className="pagination-button">dhdh</div> */}
                </div>
              </div>
            )}
            {this.state.showCompare === true ? (
              <div id="explore-compare-items-wrapper">
                <Row>
                  {this.state.compareItems.map((item) => {
                    return (
                      <Col lg={3} md={4} sm={12}>
                        <div id="explore-compare-items-inner">
                          <div id="explore-compare-item">
                            <p className="desktop-text">{item.dealName}</p>
                            <p className="desktop-price-number">
                              £{item.dealPrice}
                            </p>
                          </div>
                          <div
                            id="explore-compare-delete-btn"
                            onClick={() =>
                              this.deleteCompareItem(item.dealName)
                            }
                          >
                            <p>X</p>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
                {this.state.compareMoreThanOne === false ? (
                  <p>Add Another Deal to Begin Comparing</p>
                ) : (
                  <div
                    id="explore-compare-btn"
                    onClick={() => this.showComparePage()}
                  >
                    <div className="desktop-small-button">
                      <p className="desktop-big-button-text">
                        Compare {this.state.compareLength} Of 4
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </>
        )}
      </div>
    );
  }
}

export default Explore_home;
