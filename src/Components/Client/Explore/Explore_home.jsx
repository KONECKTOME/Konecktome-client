import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import { Link } from "react-router-dom";

class Explore_home extends Component {
  state = {
    test: [1, 2, 4, 4, 5, 6],
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
          {/* <div id="explore-dropdown-div">dropdown placeholder</div> */}
        </div>
        <div id="explore-inner-div">
          <p className="desktop-header">Top 10 services</p>
          <div id="explore-cards-pagination-wrapper">
            <div className="cards">
              {this.state.test.map((tt) => {
                return (
                  <div className="card">
                    <div id="image-holder">
                      <img src={image_placeholder} className="card-image" />
                    </div>
                    <div className="card-inner-first-div">
                      <p className="desktop-sub-header2">
                        Some Service Provider Name
                      </p>
                      <div>
                        <p>Stars</p>
                        <p>Trust Pilot ratings</p>
                      </div>
                    </div>
                    <div>
                      <p className="desktop-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the…
                      </p>
                      <div className="desktop-badge1">
                        <p className="desktop-badge-text">Financial</p>
                      </div>
                    </div>
                    <div id="account-card-footer">
                      <div>
                        <p className="desktop-price"> Price</p>
                        <p className="desktop-price-number">£500</p>
                      </div>
                      <div>
                        <Link
                          className="links"
                          to="/dashboard/explore/details/:userId"
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
