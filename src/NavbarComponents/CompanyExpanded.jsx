import React from "react";
import classes from "./FeaturesExpended.module.css";

const companyExpanded = ["History", "Our Team", "Blog"]

const CompanyExpanded = () => {
    return <ul className={`${classes["features-expanded-list"]} ${classes["company-expanded-position"]}`}>
        {companyExpanded.map((el) => <li key={Math.random().toString()}>{el}</li>)}
    </ul>
}

export default CompanyExpanded;
