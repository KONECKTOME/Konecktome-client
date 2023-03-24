import React, { Component, useContext } from "react";

import "../../../css/Navbar/Navbar.css";
import { useState } from "react";
import AvatarIcon from "../../SvgIcons/AvatarIcon";
import HamburgerIcon from "../../SvgIcons/HamburgerIcon";
import NotificationIcon from "../../Reusable/Notification/NotificationIcon";

const Navbar = (props) => {
  const [displayNotifications, setDisplayNotifications] = useState(false);
  const [test, setTest] = useState([
    {
      title: "title",
      text: "test",
      new: true,
    },
    {
      title: "title2",
      text: "test2",
      new: true,
    },
    {
      title: "title3",
      text: "test3",
      new: false,
    },
    {
      title: "title3",
      text: "test3",
      new: false,
    },
  ]);

  const displayNotificationsFn = () => {
    setDisplayNotifications(!displayNotifications);
  };

  return (
    <div id="nav-wrapper">
      <ul>
        <li
          id="Hamburger-Icon"
          onClick={() => {
            props.isSideBarShown(true);
          }}
        >
          <div id="cf-cta-holder">
            <div className="desktop-small-button">
              <p className="desktop-medium-button-text">Show Filters</p>
            </div>
          </div>
          {/* <button
            onClick={() => {
              props.isSideBarShown(true);
            }}
          >
            <p>View Filters</p>
            <HamburgerIcon size="30" color="#000" />
          </button> */}
        </li>
        <li id="nav-image">
          <div></div>
        </li>
        <li id="user-name-text">
          <div></div>
        </li>
        {/* <li id="signout-Btn">
          <button onClick={() => props.signOut()} className="sign-out-button">
            <p className="sign-out-button-text">Sign Out</p>
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
