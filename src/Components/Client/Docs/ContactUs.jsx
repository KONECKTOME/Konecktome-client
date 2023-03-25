import React, { Component } from "react";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

import styles from "../../../css/UpdateLandingPage/Navbar.module.css";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className={`${styles.navContainer}`}>
          <BreadCrumbs
            // parentPages={breadCrumbData}
            currentPage="Contact Us"
          />
        </div>
        <div id="terms-header">
          <p className="desktop-header">Contact Us</p>
        </div>
        <div id="terms">
          <div>
            <p className="desktop-header">How to contact us</p>
            <p>
              Thank you for visiting Konecktome.com. If you need to get in touch
              with us for any reason we’ll do everything we can to help. If you
              have any questions and would like to contact us, please email
              hello@konecktome.com and we will get back to you as soon as
              possible.
            </p>
          </div>
          <div>
            <p className="desktop-header">Site issues and technical support</p>
            <p>
              If you come across any problems with our site or if you have any
              difficulty at all using our comparison pages then please don’t
              hesitate to contact us at hello@konecktome.com.
            </p>
          </div>
          <div>
            <p className="desktop-header">
              How to lodge a complaint with Konecktome.com
            </p>
            <p>
              We take any complaint you may have about the site, your
              difficulties in using it or any other type of negative experience
              you had during your brief time with us very seriously. If you do
              wish to complain to us, we will always attempt to resolve any
              issues you raise as quickly as possible. We promise to make
              helping you a priority. Before making your complaint, however,
              please ensure it is us you wish to complain to and not your
              provider. Konectome.com is not a communications provider. It is a
              comparison service.
            </p>
          </div>
          <div>
            <p className="desktop-header">How to complain by email</p>
            <p>
              Just send an email to hello@konecktome.com with the details of
              your query. We aim to reply to all complaint emails within three
              business days.
            </p>
          </div>
          <div>
            <p className="desktop-header">How to complain by written letter</p>
            <p>All you need to do is write to us at:</p>
            <span>75 Crown Street, </span>
            <span>Brentwood, </span>
            <span>CM14 4BD</span>
          </div>
          <div>
            <p className="desktop-header">Partnerships and business</p>
            <p>
              If you’re interested in working in partnership with Konecktome.com
              or if you’d like to discuss any business ideas with our team then
              please feel free to contact us at hello@konecktome.com
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
