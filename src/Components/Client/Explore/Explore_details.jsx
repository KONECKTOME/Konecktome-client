import React from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";
let breadCrumbData = [{ title: "Explore All Deals", link: "/explore/deals" }];

class Explore_details extends React.Component {
  state = {
    brand: {},
    dealsByBrand: [],
  };

  componentDidMount = async () => {
    this.props.getBrandDetails();
  };

  getBrandDetails = async () => {
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/aff/brand-details/`,
      {
        method: "POST",
        body: JSON.stringify({
          brandId: this.props.match.params.id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
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
          <BreadCrumbs
            parentPages={breadCrumbData}
            currentPage={`Explore Deals From ${this.state.brand.brandName}`}
          />
          <div id="explore-details">
            <Explore_details_right_col brand={this.props.brand} />
            <Explore_details_left_col deals={this.props.dealsByBrand} />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details);
