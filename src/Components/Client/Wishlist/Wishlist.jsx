import React, { useState, useContext } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import SmallLoader from "../Loader/SmallLoader";
import { Link } from "react-router-dom";
import { UserDetailsContext } from "../Context/UserDetailsContext";

class Wishlist extends React.Component {
  state = {
    loading: true,
    wishlist: [],
    userId: "",
  };

  componentDidMount = async () => {
    let id = "";
    const idInArray = this.props.location.pathname.split("/");
    if (idInArray.length === 4) {
      id = this.props.location.pathname.split("/")[3];
    } else if (idInArray.length === 3) {
      id = this.props.location.pathname.split("/")[2];
    } else if (idInArray.length === 6) {
      id = this.props.location.pathname.split("/")[4];
    }
    const response = await fetch(
      `https://konecktomebackend.herokuapp.com/users/get-user-by-id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    if (userDetails) {
      this.setState({
        loading: false,
        wishlist: userDetails.wishlist,
        userId: userDetails._id,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.loading === true ? (
          <SmallLoader />
        ) : (
          <div id="favourites_wrapper">
            <p className="desktop-header">My wishlist</p>
            {this.state.wishlist.length !== 0 ? (
              <div className="cards">
                {this.state.wishlist.map((item) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={item.companyImage} className="card-image" />
                      </div>
                      <div id="account-card-inner-first-div">
                        <p className="desktop-sub-header2">{item.dealName}</p>
                      </div>
                      <div>
                        <p className="desktop-text">{item.description}</p>
                        <div className="desktop-badge1">
                          <p className="desktop-badge-text">{item.tag}</p>
                        </div>
                      </div>
                      <div id="account-card-footer">
                        <div>
                          <p className="desktop-price"> Price</p>
                          <p className="desktop-price-number">£ {item.price}</p>
                        </div>
                        <div>
                          <Link
                            className="links"
                            to={
                              "/dashboard/explore/details/" +
                              this.state.userId +
                              "/" +
                              item.dealId
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
            ) : (
              <div className="empty-services-holder">
                <p className="empty-services-text">
                  You Have No Wishlist Just Yet. To Make a Wish, Check Out
                  <span>
                    <Link
                      to={"/dashboard/explore/" + this.state.userId}
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
