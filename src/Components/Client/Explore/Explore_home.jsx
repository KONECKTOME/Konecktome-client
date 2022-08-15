import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import { Link } from "react-router-dom";

class Explore_home extends Component {
  state = {
    companies: [],
    deals: [],
    searchDeals: [],
    searchStatus: false,
    searchQuery: "",
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
  render() {
    return (
      <div id="explore-wrapper">
        <p className="desktop-header">Explore</p>
        <div id="form-div">
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
        </div>
        {this.state.searchStatus === false ? (
          <div id="explore-inner-div">
            <div id="explore-cards-pagination-wrapper">
              <div className="cards">
                {this.state.deals.map((deal) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={image_placeholder} className="card-image" />
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
                        {/* <p className="desktop-sub-header2">
                          {deal.dealName} By {deal.companyName}
                        </p> */}
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
        ) : (
          <div id="explore-inner-div">
            <div id="explore-cards-pagination-wrapper">
              <div className="cards">
                {this.state.searchDeals.map((deal) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={image_placeholder} className="card-image" />
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
      </div>
    );
  }
}

export default Explore_home;
