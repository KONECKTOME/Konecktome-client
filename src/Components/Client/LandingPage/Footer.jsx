import styles from "../../../css/UpdateLandingPage/Footer.module.css";
import konectomeWhiteLogo from "../../../Assets/Footer-white-logo.svg";
import FacebookIcon from "../../SvgIcons/FacebookIcon";
import LinkedinIcon from "../../SvgIcons/LinkedinIcon";
import InstagramIcon from "../../SvgIcons/InstagramIcon";

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
          <div className={`col-12 col-lg-12  ${styles.siteMap}`}>
            <div>
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#!">Diamond Package</a>
                </li>
                <li>
                  <a href="#!">Platinum Package</a>
                </li>
                <li>
                  <a href="#!">Gold Package</a>
                </li>
                <li>
                  <a href="#!">Silver Package</a>
                </li>
                <li>
                  <a href="#!">Bronze Package</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#!">Diamond Package</a>
                </li>
                <li>
                  <a href="#!">Platinum Package</a>
                </li>
                <li>
                  <a href="#!">Gold Package</a>
                </li>
                <li>
                  <a href="#!">Silver Package</a>
                </li>
                <li>
                  <a href="#!">Bronze Package</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#!">Diamond Package</a>
                </li>
                <li>
                  <a href="#!">Platinum Package</a>
                </li>
                <li>
                  <a href="#!">Gold Package</a>
                </li>
                <li>
                  <a href="#!">Silver Package</a>
                </li>
                <li>
                  <a href="#!">Bronze Package</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.copyRightContainer}`}>
          <p>&#169; 2023 KONECKTOME&#174; - All rights reserved.</p>
          <div className={`${styles.socialLinks}`}>
            <a href="#!">
              <FacebookIcon />
            </a>
            <a href="#!">
              <LinkedinIcon />
            </a>
            <a href="#!">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
