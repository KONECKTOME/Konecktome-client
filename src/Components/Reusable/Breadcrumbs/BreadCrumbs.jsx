import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import ArrowIcon from "../../SvgIcons/ArrowIcon";
import HomeIcon from "../../SvgIcons/HomeIcon";
import styles from "./BreadCrumbs.module.css";

const BreadCrumbs = ({
  parentPages = [],
  currentPage = "Your Current Page",
}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.homeLink} to="/">
        <HomeIcon color="#000" size="20" />
      </Link>
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
      <p id="currentPage">{currentPage}</p>
    </div>
  );
};

export default withRouter(BreadCrumbs);
