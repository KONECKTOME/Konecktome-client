import React, { Component, useContext } from "react";
import menu_icon from "../../../Assets/Navbar_menu_icon.svg";
import search_icon from "../../../Assets/navbar_search_icon.svg";
import notifications_icon from "../../../Assets/notification.svg";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import dropdown_icon from "../../../Assets/dropdown-icon.svg";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import "../../../css/Navbar/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const { userDetails } = useContext(UserDetailsContext);

  const { displayNotifications, setdisplayNotifications } = useState(false);

  const displayNotificationsFn = () => {
    alert("here");
    setdisplayNotifications(true);
  };

  return (
    <div id="nav-wrapper">
      <div id="nav-right-wrapper">
        <div id="nav-right">
          <div id="notifcations-holder">
            <div
              className="nav-right-item nav-right-item-text"
              onClick={() => displayNotificationsFn()}
            >
              <img src={notifications_icon} />
            </div>
            <div
              id={
                displayNotifications === true
                  ? "display-notification-drop-down-wrapper"
                  : "notification-drop-down-wrapper"
              }
            >
              <div id="notification-drop-down-inner">
                <img src={placeholder_image} />
                <div>
                  <p>Notifications title</p>
                  <p>Notifications title</p>
                </div>
              </div>
              <div id="notification-drop-down-inner">
                <img src={placeholder_image} />
                <div>
                  <p>Notifications title</p>
                  <p>Notifications title</p>
                </div>
              </div>
              <div id="notification-drop-down-inner">
                <img src={placeholder_image} />
                <div>
                  <p>Notifications title</p>
                  <p>Notifications title</p>
                </div>
              </div>
              <div id="notification-drop-down-inner">
                <img src={placeholder_image} />
                <div>
                  <p>Notifications title</p>
                  <p>Notifications title</p>
                </div>
              </div>
              <div id="notification-drop-down-inner">
                <img src={placeholder_image} />
                <div>
                  <p>Notifications title</p>
                  <p>Notifications title</p>
                </div>
              </div>
              <div id="notification-drop-down-inner">
                <img src={placeholder_image} />
                <div>
                  <p>Notifications title</p>
                  <p>Notifications title</p>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-image" className="nav-right-item">
            <img
              src={
                userDetails.imageUrl === undefined || !userDetails.imageUrl
                  ? placeholder_image
                  : userDetails.imageUrl
              }
              id="nav-img"
            />
          </div>
          <div className="nav-right-item">
            <p className="desktop-text nav-right-item-text">
              {userDetails.firstName + " " + userDetails.lastName}
            </p>
          </div>
          {/* <div className="nav-right-item-text">
            <img src={dropdown_icon} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
