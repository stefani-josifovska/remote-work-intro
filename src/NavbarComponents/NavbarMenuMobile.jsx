import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./NavbarMenuMobile.module.css";
import closeMenuIcon from "../images/icon-close-menu.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import FeaturesExpanded from "./FeaturesExpanded";
import CompanyExpanded from "./CompanyExpanded";

const MenuContent = ({ onClick }) => {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);

  const featuresClickHandler = () => {
    setIsFeaturesExpanded(!isFeaturesExpanded);
  }

  const companyClickHandler = () => {
    setIsCompanyExpanded(!isCompanyExpanded);
  }

  return (
    <div className={classes.menu}>
      <img
        className={classes["close-button"]}
        src={closeMenuIcon}
        alt=""
        onClick={onClick}
      />
      <ul style={{ listStyleType: "none" }}>
        <li
          key="el1"
          onClick={featuresClickHandler}
        >
          Features <img className={classes.arrow} src={isFeaturesExpanded ? iconArrowUp : iconArrowDown} alt="" />
        </li>
        {isFeaturesExpanded && <FeaturesExpanded />}
        <li key="el2" onClick={companyClickHandler}>
          Company <img className={classes.arrow} src={isCompanyExpanded ? iconArrowUp : iconArrowDown} alt="" />
        </li>
        {isCompanyExpanded && <CompanyExpanded />}
        <li key="el3">Careers</li>
        <li key="el4">About</li>
      </ul>
      <div className={classes["button-container"]}>
        <button className={classes["login-button"]}>Login</button>
        <button className={classes["register-button"]}>Register</button>
      </div>
    </div>
  );
};

const MenuBackdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const NavbarMenu = ({ onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <MenuContent onClick={onClick} />,
        document.getElementById("navbar-menu-root")
      )}
      {ReactDOM.createPortal(
        <MenuBackdrop onClick={onClick} />,
        document.getElementById("menu-backdrop-root")
      )}
    </>
  );
};

export default NavbarMenu;
