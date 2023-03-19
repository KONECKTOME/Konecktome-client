import React, { Component } from "react";
import Navbar from "../LandingPage/Navbar";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";
import Footer from "../LandingPage/Footer";
import styles from "../../../css/UpdateLandingPage/Navbar.module.css";

class PrivacyPolicy extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className={`${styles.navContainer}`}>
          <BreadCrumbs
            // parentPages={breadCrumbData}
            currentPage="Privacy policy"
          />
        </div>
        <div id="terms-header">
          <p className="desktop-header">Privacy policy</p>
        </div>
        <div id="terms">
          <p>
            Konecktome.com only retains personal information which relates to
            subscriptions to email notifications and/or newsletters. We are
            committed to safeguarding the privacy of our subscribers; this
            policy sets out how we will treat your personal information.
          </p>
          <div>
            <p className="desktop-header">What information do we collect?</p>
            <p>
              When you visit and use this website we may collect, temporarily
              store and use the following kinds of data:
            </p>
            <p>
              Anonymised information about visits to and use of this website
              (including browser type, referral source, length of visit and
              number of page views);
            </p>
            <p>
              Anonymised information relating to any transactions carried out
              between visitors and us on or in relation to this website,
              including anonymous information relating to any purchases
              subsequently made;
            </p>
            <p>Any other information that you choose to send to us;</p>
          </div>
          <div>
            <p className="desktop-header">Cookies</p>
            <p>
              A cookie consists of information sent by a web server to a web
              browser, and stored by the browser. The information is then sent
              back to the server each time the browser requests a page from the
              server. This enables the web server to identify and track the web
              browser.
            </p>
            <p>
              We may use both “session” cookies and “persistent” cookies on the
              website. We will use the session cookies to: keep track of you
              whilst you navigate the website; and other uses. We will use the
              persistent cookies to: enable our website to recognise you when
              you visit; and other uses.
            </p>
            <p>
              Session cookies will be deleted from your computer when you close
              your browser. Persistent cookies will remain stored on your
              computer until deleted, or until they reach a specified expiry
              date.
            </p>
            <p>
              We use Google Analytics to analyse the use of this website. Google
              Analytics generates statistical and other information about
              website use by means of cookies, which are stored on users'
              computers. The information generated relating to our website is
              used to create reports about the use of the website. Google will
              store this information. Google's privacy policy is available at:
              http://www.google.com/privacypolicy.html.
            </p>
            <p>
              Most browsers allow you to refuse to accept cookies. (For example,
              in Internet Explorer you can refuse all cookies by clicking
              “Tools”, “Internet Options”, “Privacy”, and selecting “Block all
              cookies” using the sliding selector.) This will, however, have a
              negative impact upon the usability of many websites, including
              this one.
            </p>
          </div>
          <div>
            <p className="desktop-header">Third party websites</p>
            <p>
              The website contains links to other websites. We are not
              responsible for the privacy policies or practices of third party
              websites.
            </p>
          </div>
          <div>
            <p className="desktop-header">Using your personal data</p>
            <p>
              The website contains links to other websites. We are not
              responsible for the privacy policies or practices of third party
              websites.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default PrivacyPolicy;
