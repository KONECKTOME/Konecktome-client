import styles from "../../../css/UpdateLandingPage/Services.module.css";
import GlobeImage from "../../../Assets/globe.svg";
const Services = () => {
  return (
    <div className={`${styles.servicesContainer}`}>
      <div className={`${styles.contentWrapper}`}>
        <div className={`${styles.textContent}`}>
          <p className="">YOU GOT THIS</p>
          {/* <h4 className="">Everything you need about Konectome</h4> */}
          <div>
            <h4>Make Informed Decisions</h4>
            <p>
              We provide user reviews and necessary extra information on all
              listed services, to give you greater confidence in your buying
              decisions.
            </p>
          </div>
          <div>
            <h4>Empower Yourself With The Best</h4>
            <p>
              With us, you have the power to choose from the best-rated
              providers in the industry, all in one place.
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
