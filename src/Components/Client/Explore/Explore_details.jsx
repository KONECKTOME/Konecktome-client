import React from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_details extends React.Component {
  state = {
    arr: [1, 2],
    brand: {},
  };

  componentDidMount = async () => {
    this.getBrand();
  };

  getBrand = async () => {
    const response = await fetch(`http://localhost:3002/aff/brand-details`, {
      method: "POST",
      body: JSON.stringify({
        brandId: this.props.match.params.id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const brand = await response.json();
    this.setState({ brand: brand.message });
    console.log(this.state.brand.deals);
  };

  render(props) {
    return (
      <>
        <div id="explore-details-wrapper">
          <div id="explore-details">
            <Explore_details_right_col brand={this.state.brand} />
            <Explore_details_left_col brand={this.state.brand} />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details);
