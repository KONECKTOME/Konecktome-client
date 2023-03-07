import styles from "../../../css/UpdateLandingPage/Hero.module.css";
import ExploreIcon from "../../SvgIcons/ExploreIcon";
import SettingsIcon from "../../SvgIcons/SettingsIcon";
import { Link } from "react-router-dom";

const Card = ({ title, Icon, color }) => {
  return (
    <div className={`${styles.cardWrapper} col-12 col-md-6 col-xl-3`}>
      <button>
        <div
          style={{ borderColor: `${color}60`, backgroundColor: `${color}30` }}
        >
          <Icon size="35" color={color} />
        </div>
        <h4>{title}</h4>
      </button>
    </div>
  );
};

const Hero = () => {
  return (
    <section className={`${styles.heroSection}`}>
      <h2>Serve People who deserve the best.</h2>
      <p className={`${styles.tagline}`}>
        The Online Realtime Comparison Platform For Highly-Rated Services.
      </p>
      <div className={`${styles.cardContainer}`}>
        <h4 className={`${styles.title}`}>
          Some of the best services throughout the platform.
        </h4>
        <div className={`row`}>
          <Link to={"/explore/deals/"} className={`${styles.heroLinks}`}>
            <Card title="Broadband" Icon={SettingsIcon} color="#54A0E8" />
          </Link>
          <Card title="Life insurance" Icon={ExploreIcon} color="#55B78A" />
          <Card title="Motor Insurance" Icon={SettingsIcon} color="#FF9090" />
          <Card title="Car Finance" Icon={ExploreIcon} color="#9F6A93" />
          <Card title="Personal Loans" Icon={SettingsIcon} color="#EFA92E" />
          <Card title="Mortgage" Icon={ExploreIcon} color="#54A0E8" />
          <Card title="Health Insurance" Icon={SettingsIcon} color="#55B78A" />
          <Card title="Home Insurance" Icon={ExploreIcon} color="#de4e4e" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
