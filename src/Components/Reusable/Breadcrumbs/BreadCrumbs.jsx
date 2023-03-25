import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import ArrowIcon from "../../SvgIcons/ArrowIcon";
import HomeIcon from "../../SvgIcons/HomeIcon";
import styles from "./BreadCrumbs.module.css";

const BreadCrumbs = ({
  parentPages = [],
  currentPage = "Your Current Page",
}) => {
  const goHome = () => {
    // window.location.href = "http://localhost:3000/";
    window.location.href = "https://konecktome.com/";
  };
  return (
    <div className={styles.container}>
      <div className={styles.homeLink} onClick={goHome}>
        <HomeIcon color="#000" size="20" />
      </div>
      <ArrowIcon color="#000" position="right" size="12" />
      {parentPages &&
        parentPages.length > 0 &&
        parentPages.map(({ link, title }, index) => (
          <div key={title + index} className={styles.linksContainer}>
            <Link to={link} className={styles.parentLinks}>
              {title}
            </Link>
            <ArrowIcon color="#000" position="right" size="12" />
          </div>
        ))}
      <p className={styles.currentPage}>{currentPage}</p>
    </div>
  );
};

export default withRouter(BreadCrumbs);
