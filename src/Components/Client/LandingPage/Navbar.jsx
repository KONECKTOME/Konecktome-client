import React, { useState } from "react";
import konectomeLogo from "../../../Assets//konecktome-logo.svg";
import styles from "../../../css/UpdateLandingPage/Navbar.module.css";
import ArrowIcon from "../../SvgIcons/ArrowIcon";
import HamburgerIcon from "../../SvgIcons/HamburgerIcon";

const FilterButton = ({
  title = "",
  desc = "",
  open = false,
  clickHandler = undefined,
}) => {
  return (
    <button
      onClick={clickHandler}
      className={`${
        open ? styles.filterButtonActive : styles.filterButtonDefault
      } ${styles.filterButton}`}
    >
      <div className={`${styles.iconWrapper} rounded-pill`}>
        <ArrowIcon size="10" />
      </div>
      <div className={`${styles.details}`}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </button>
  );
};

const Navbar = () => {
  let [activeLink, setActiveLink] = useState("");
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        <div>
          <img src={konectomeLogo} alt="Konectome Logo" />
        </div>
        {/* <div className={`${styles.linksContainer}`}>
          <FilterButton
            clickHandler={() =>
              setActiveLink((val) => (val === "first" ? "" : "first"))
            }
            title="lorem ipsum"
            desc="lorem ipsum dolor sit amature"
            open={activeLink === "first" ? true : false}
          />
          <FilterButton
            clickHandler={() =>
              setActiveLink((val) => (val === "second" ? "" : "second"))
            }
            title="lorem ipsum"
            desc="lorem ipsum dolor sit amature"
            open={activeLink === "second" ? true : false}
          />
          <FilterButton
            clickHandler={() =>
              setActiveLink((val) => (val === "third" ? "" : "third"))
            }
            title="lorem ipsum"
            desc="lorem ipsum dolor sit amature"
            open={activeLink === "third" ? true : false}
          />
        </div> */}
        {/* <div>
          <button className={`${styles.hamBurgerBtn}`}>
            <HamburgerIcon size="30" color="#000" />
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
