import React, { Component } from "react";
import "../../../css/Explore/Explore_home.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";

class Explore_home extends Component {
  state = {
    test: [1, 2, 4],
  };
  render() {
    return (
      <div id="explore-wrapper">
        <p id="explore-header">Explore</p>
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
          <p id="explore-inner-header">Top 10 services</p>
          <div id="explore-cards-pagination-wrapper">
            {/* <div className="pagination-button">dhdh</div> */}
            <div className="explore-cards">
              {this.state.test.map((tt) => {
                return (
                  <div className="explore-card">
                    <div id="image-holder">
                      <img src={image_placeholder} id="card-image" />
                    </div>
                    <div id="account-card-inner-first-div">
                      <p id="account-inner-header">
                        Some Service Provider Name
                      </p>
                      <div>
                        <img src={wishlist_icon} />
                        <img src={wishlist_icon} />
                      </div>
                    </div>
                    <div>
                      <p id="acc-inner-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the…
                      </p>
                      <div id="account-badge">
                        <p id="badge-text">Financial</p>
                      </div>
                    </div>
                    <div id="account-card-footer">
                      <div>
                        <p id="account-price-text"> Price</p>
                        <p id="account-price-in-number">£500</p>
                      </div>
                      <div id="explore-view-button">
                        <p id="view-button-text">View</p>
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
