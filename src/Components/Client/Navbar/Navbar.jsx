import React, { Component, useContext } from "react";
import menu_icon from "../../../Assets/Navbar_menu_icon.svg";
import search_icon from "../../../Assets/navbar_search_icon.svg";
import notifications_icon from "../../../Assets/notification.svg";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import dropdown_icon from "../../../Assets/dropdown-icon.svg";
import { UserDetailsContext } from "../Context/UserDetailsContext";
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
        <li id="Hamburger-Icon">
          <button
            onClick={() => {
              props.isSideBarShown(true);
            }}
          >
            <HamburgerIcon size="30" color="#19233A" />
          </button>
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
