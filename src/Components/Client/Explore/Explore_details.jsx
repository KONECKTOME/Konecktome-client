import React from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_details extends React.Component {
  state = {
    brand: {},
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
    const brandDetails = await response.json();
    this.setState({
      brand: brandDetails.message,
      dealsByBrand: brandDetails.message.deals,
    });
  };

  render(props) {
    return (
      <>
        <div id="explore-details-wrapper">
          <div id="explore-details">
            <Explore_details_right_col brand={this.state.brand} />
            <Explore_details_left_col deals={this.state.dealsByBrand} />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details);
