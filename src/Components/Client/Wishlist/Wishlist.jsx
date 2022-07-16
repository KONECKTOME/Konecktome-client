import React, { useState, useContext } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { UserDetailsContext } from "../Context/UserDetailsContext";

const Wishlist = () => {
  const [loading, setLoading] = useState(false);
  const { userDetails } = useContext(UserDetailsContext);

  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <div id="favourites_wrapper">
          <p className="desktop-header">My wishlist</p>
          {userDetails.wishlist.length !== 0 ? (
            <div className="cards">
              {userDetails.wishlist.map((item) => {
                return (
                  <div className="card">
                    <div id="image-holder">
                      <img src={image_placeholder} className="card-image" />
                    </div>
                    <div id="account-card-inner-first-div">
                      <p className="desktop-sub-header2">{item.dealName}</p>
                    </div>
                    <div>
                      <p className="desktop-text">{item.description}</p>
                      <div className="desktop-badge1">
                        <p className="desktop-badge-text">Financial</p>
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
                            userDetails._id +
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
                    to={"/dashboard/explore/" + userDetails._id}
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
};

export default Wishlist;
