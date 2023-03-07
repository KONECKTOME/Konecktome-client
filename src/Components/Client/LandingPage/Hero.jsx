import styles from "../../../css/UpdateLandingPage/Hero.module.css";
import ExploreIcon from "../../SvgIcons/ExploreIcon";
import SettingsIcon from "../../SvgIcons/SettingsIcon";

const Card = ({title,Icon,color}) => {
  return (
    <div className={`${styles.cardWrapper} col-12 col-md-6 col-xl-3`}>
      <button>
        <div style={{borderColor:`${color}60`,backgroundColor:`${color}30`}}><Icon size="35" color={color} /></div>
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
        <h4 className={`${styles.title}`}>Some of the best services throughout the platform.</h4>
        <div className={`row`}>
          <Card title="Quality Service" Icon={SettingsIcon} color="#54A0E8" />
          <Card title="Best Service" Icon={ExploreIcon} color="#55B78A" />
          <Card title="Best Price" Icon={SettingsIcon} color="#FF9090" />
          <Card title="Pricing" Icon={ExploreIcon} color="#9F6A93" />
          <Card title="Subscription" Icon={SettingsIcon} color="#EFA92E" />
          <Card title="Comparison" Icon={ExploreIcon} color="#54A0E8" />
          <Card title="Today's Pickup" Icon={SettingsIcon} color="#55B78A" />
          <Card title="Reviews" Icon={ExploreIcon} color="#de4e4e" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
