import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link, withRouter } from "react-router-dom";

import Rating from "../../Reusable/Rating";
class Explore_details_right_col extends React.Component {
  state = {
    reviews: [1, 2, 3],
  };

  render(props) {
    return (
      <div id="right-wrapper">
        <p className="desktop-header"> {this.props.brand.brandName}</p>
        <p className="desktop-text"> {this.props.brand.brandDescription}</p>
        {/* <div id="right-with-compare">
          <div id="explore-details-inner-left">
            <div id="explore-details-inner-left-inner-wrapper">
              <div>
                <p className="desktop-sub-header2"> Price</p>
              </div>
              <div id="explore-details-sub-header-inner-wrapper">
                <Rating rating="4.5" size="20" />
                <p>(28,112)</p>
              </div>
            </div>
            <div id="explore-details-review">
              <p className="desktop-sub-header2 mb-4"> Reviews</p>
              {this.state.reviews.map((rr) => {
                return (
                  <div id="explore-details-reviews-first-inner-div">
                    <div id="explore-details-reviews-inner-div">
                      <div>
                        <img src={placeholder_image} />
                      </div>
                      <div id="explore-details-review-details">
                        <p className="desktop-sub-header2">John Doe</p>
                        <p className="desktop-text">4.5</p>
                      </div>
                    </div>
                    <p className="desktop-text">
                      Lorem Ipsum is simply dummy text of the printing and
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Explore_details_right_col);
