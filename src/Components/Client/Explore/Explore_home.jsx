import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import { Link } from "react-router-dom";

class Explore_home extends Component {
  state = {
    test: [1, 2, 4, 4, 5, 6],
    companies: [],
    deals: [],
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
              // value={this.state.details.email}
              // onChange={(e) => this.updateDetails(e)}
            />
          </form>
        </div>
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
                      <p className="desktop-sub-header2">{deal.companyName}</p>
                      <div>
                        <p>Stars</p>
                        <p>Trust Pilot ratings</p>
                      </div>
                    </div>
                    <div>
                      <p className="desktop-sub-header2">{deal.dealName}</p>
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
      </div>
    );
  }
}

export default Explore_home;
