import styles from "../../../css/UpdateLandingPage/Hero.module.css";
import konectomeWhiteLogo from "../../../Assets/Footer-white-logo.svg";
import { Link } from "react-router-dom";
import {
  BroadBandIcon,
  LifeInsuranceIcon,
  MotorInsuranceIcon,
  CarFinanceIcon,
  PersonalLoansIcon,
  MortgageIcon,
  HealthInsuranceIcon,
  HomeInsuranceIcon,
} from "../../SvgIcons/HeroSection";

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
    <>
      <section className={`${styles.heroSection}`}>
        <h2>Customer Approved Utilities.</h2>
        <p className={`${styles.tagline}`}>
          Find The Best Services Based On Real Reviews.
        </p>
        <div className={`${styles.cardContainer}`}>
          {/* <h4 className={`${styles.title}`}>
            Some of the best services throughout the platform.
          </h4> */}
          <div className={`row`}>
            <Link to={"/explore/deals/"} className={`${styles.heroLinks}`}>
              <Card title="Broadband" Icon={BroadBandIcon} color="#54A0E8" />
            </Link>
            <Card
              title="Life insurance"
              Icon={LifeInsuranceIcon}
              color="#55B78A"
            />
            <Card
              title="Motor Insurance"
              Icon={MotorInsuranceIcon}
              color="#FF9090"
            />
            <Card title="Car Finance" Icon={CarFinanceIcon} color="#9F6A93" />
            <Card
              title="Personal Loans"
              Icon={PersonalLoansIcon}
              color="#EFA92E"
            />
            <Card title="Mortgage" Icon={MortgageIcon} color="#54A0E8" />
            <Card
              title="Health Insurance"
              Icon={HealthInsuranceIcon}
              color="#55B78A"
            />
            <Card
              title="Home Insurance"
              Icon={HomeInsuranceIcon}
              color="#de4e4e"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
