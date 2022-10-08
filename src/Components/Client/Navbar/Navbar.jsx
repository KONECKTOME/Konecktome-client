import React, { Component, useContext } from "react";
import menu_icon from "../../../Assets/Navbar_menu_icon.svg";
import search_icon from "../../../Assets/navbar_search_icon.svg";
import notifications_icon from "../../../Assets/notification.svg";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import dropdown_icon from "../../../Assets/dropdown-icon.svg";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import "../../../css/Navbar/Navbar.css";
import { useState } from "react";

const Navbar = (props) => {
  const { userDetails } = useContext(UserDetailsContext);

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
        {/* <div id="notification-wrapper">
          <li>
            <img src={notifications_icon} />
            <span id="notifications-badge">1</span>
          </li>
        </div> */}
        <div onClick={() => props.signOut()}>
          <li>
            <div className="sign-out-button">
              <p className="sign-out-button-text">Sign Out</p>
            </div>
          </li>
        </div>
        <div>
          <li>
            <div>
              <p className="desktop-text nav-right-item-text">
                {userDetails.firstName + " " + userDetails.lastName}
              </p>
            </div>
          </li>
        </div>
        <div>
          <li>
            <div id="nav-image">
              <img
                src={
                  userDetails.imageUrl === undefined || !userDetails.imageUrl
                    ? placeholder_image
                    : userDetails.imageUrl
                }
                id="nav-img"
              />
            </div>
          </li>
        </div>
      </ul>
    </div>
    // <div id="nav-wrapper">
    //   <div id="nav-right-wrapper">
    //     <div id="nav-right">
    //       <div id="nav-image" className="nav-right-item">
    //         <img
    //           src={
    //             userDetails.imageUrl === undefined || !userDetails.imageUrl
    //               ? placeholder_image
    //               : userDetails.imageUrl
    //           }
    //           id="nav-img"
    //         />
    //       </div>
    //       <div id="notifcations-holder">
    //         <div
    //           className="nav-right-item nav-right-item-text"
    //           onClick={() => displayNotificationsFn()}
    //         >
    //           <span id="notifications-badge">1</span>
    //           <img src={notifications_icon} />
    //         </div>
    //         <div
    //           id={
    //             displayNotifications === true
    //               ? "display-notification-drop-down-wrapper"
    //               : "notification-drop-down-wrapper"
    //           }
    //         >
    //           <p id="notification-header">Notifications</p>
    //           {test.map((tt) => {
    //             return (
    //               <>
    //                 <div
    //                   id={
    //                     tt.new === true
    //                       ? "new-notofication-holder"
    //                       : "old-notofication-holder"
    //                   }
    //                 >
    //                   <div id="notification-drop-down-inner">
    //                     <img src={placeholder_image} />
    //                     <div id="notification-drop-down-inner-text">
    //                       <p id="nav-notification-header">{tt.title}</p>
    //                       <p id="nav-notification-text">{tt.text}</p>
    //                     </div>
    //                   </div>
    //                   <hr id="hr-selector"></hr>
    //                 </div>
    //               </>
    //             );
    //           })}
    //         </div>
    //       </div>
    //       <div className="nav-right-item">
    //         <p className="desktop-text nav-right-item-text">
    //           {userDetails.firstName + " " + userDetails.lastName}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
