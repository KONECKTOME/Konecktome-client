import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

class Wishlist extends React.Component {
  state = {
    test: [1, 2, 3, 5],
    wishlist: [],
    loading: false,
  };

  componentDidMount = () => {
    this.getUser();
  };

  getUser = async () => {
    const id = this.props.match.params.userid;
    const response = await fetch(
      `http://localhost:3002/users/get-user-by-id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    if (!userDetails.wishlist) {
      this.setState({
        loading: true,
      });
    } else {
      this.setState({
        wishlist: userDetails.wishlist,
        loading: false,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.loading === true ? (
          <Loader />
        ) : (
          <div id="favourites_wrapper">
            <p className="desktop-header">My wishlist</p>
            {this.state.wishlist.length !== 0 ? (
              <div className="cards">
                {this.state.test.map((tt) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={image_placeholder} className="card-image" />
                      </div>
                      <div id="account-card-inner-first-div">
                        <p className="desktop-sub-header2">
                          Some Service Provider Name
                        </p>
                      </div>
                      <div>
                        <p className="desktop-text">
                          Your wish is to purchase dealName from servive
                          provider name soon. We are with you on this.
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
                          <p className="desktop-cta">View details</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-services-holder">
                <p className="empty-services-text">
                  You Have No Wishlist Just Yet. To Make a Wish, Check Out
                  <span>
                    <Link
                      to={
                        "/dashboard/explore/" + this.props.match.params.userid
                      }
                      className="links sign-up-span-link"
                    >
                      Here
                    </Link>
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default Wishlist;
