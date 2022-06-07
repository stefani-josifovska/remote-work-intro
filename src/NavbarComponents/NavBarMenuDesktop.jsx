import React, {useState} from "react";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import CompanyExpanded from "./CompanyExpanded";
import FeaturesExpanded from "./FeaturesExpanded";
import classes from "./NavBarMenuDesktop.module.css";

const NavBarMenuDesktop = () => {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);

  const featuresClickHandler = () => {
    setIsFeaturesExpanded(!isFeaturesExpanded);
    console.log(!isFeaturesExpanded)
    if(!isFeaturesExpanded) {
        setIsCompanyExpanded(false)
    }
  };

  const companyClickHandler = () => {
    setIsCompanyExpanded(!isCompanyExpanded);
    if(!isCompanyExpanded) {
        setIsFeaturesExpanded(false)
    }
  };

  return (
    <>
      <ul style={{ listStyleType: "none" }} className={classes['navbar-desktop']} >
        <li key="el1" onClick={featuresClickHandler}>
          Features{" "}
          <img
            className={classes.arrow}
            src={isFeaturesExpanded ? iconArrowUp : iconArrowDown}
            alt=""
          />
        </li>
        <li key="el2" onClick={companyClickHandler}>
          Company{" "}
          <img
            className={classes.arrow}
            src={isCompanyExpanded ? iconArrowUp : iconArrowDown}
            alt=""
          />
        </li>
        <li key="el3">Careers</li>
        <li key="el4">About</li>
      </ul>
      {isFeaturesExpanded && <FeaturesExpanded />}
      {isCompanyExpanded && <CompanyExpanded />}
    </>
  );
};

export default NavBarMenuDesktop;
