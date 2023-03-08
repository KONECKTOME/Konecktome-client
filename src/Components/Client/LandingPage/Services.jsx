import styles from "../../../css/UpdateLandingPage/Services.module.css";
import GlobeImage from "../../../Assets/globe.svg"
const Services = () => {
  return (
    <div className={`${styles.servicesContainer}`}>
      <div className={`${styles.contentWrapper}`}>
        <div className={`${styles.textContent}`}>
          <p className="">YOU GOT THIS</p>
          <h4 className="">Everything you need about Konectome</h4>

          <div>
            <h4>User Experience</h4>
            <p>
              We provide user reviews and necessary extra information on all
              listed services, to give you greater confidence in your buying
              decisions.
            </p>
          </div>
          <div>
            <h4>Security</h4>
            <p>
              We securely store your personal information so you never have to.
              Great for purchasing new services and keeping all your details in
              one place.
            </p>
          </div>
          <div>
            <h4>Simply Enabled</h4>
            <p>
              We keep everything simple by enabling and switching all in one
              place.
            </p>
          </div>
        </div>
        <div className={`${styles.imageWrapper}`}>
            <img src={GlobeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
