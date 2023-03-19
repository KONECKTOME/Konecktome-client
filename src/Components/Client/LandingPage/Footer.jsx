import styles from "../../../css/UpdateLandingPage/Footer.module.css";
import konectomeWhiteLogo from "../../../Assets/Footer-white-logo.svg";
import FacebookIcon from "../../SvgIcons/FacebookIcon";
import LinkedinIcon from "../../SvgIcons/LinkedinIcon";
import InstagramIcon from "../../SvgIcons/InstagramIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.gridWrapper}`}>
        <div className={`row mx-0 gap-5 gap-lg-0`}>
          {/* <div className={`col-12 col-lg-4`}>
            <div className={`text-center text-lg-start`}>
              <div className={`${styles.logoWrapper}`}>
                <img src={konectomeWhiteLogo} width={250} alt="Konectome Logo" />
                <h4>Serve people who deserve the best</h4>
              </div>
            </div>
          </div> */}
          <div className={`col-12 col-lg-8  ${styles.siteMap}`}>
            <div>
              <h4>Terms & Conditions</h4>
              <ul>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Privacy Policy</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.copyRightContainer}`}>
          <p>&#169; 2023 KONECKTOME&#174; - All rights reserved.</p>
          <div className={`${styles.socialLinks}`}>
            <a
              href="https://www.facebook.com/Konecktome-101748959105629"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/konecktome/"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/konecktome/" target="_blank">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
