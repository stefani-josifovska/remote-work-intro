import React from "react";
import classes from "./FooterLogos.module.css";
import logo1 from "./images/client-databiz.svg";
import logo2 from "./images/client-audiophile.svg";
import logo3 from "./images/client-meet.svg";
import logo4 from "./images/client-maker.svg";

const logoArray = [logo1, logo2, logo3, logo4];

const FooterLogos = () => {
  return (
    <div className={classes.container}>
      {logoArray.map((image) => {
          return <img src={image} alt="" key={Math.random().toString()} />
      })}
    </div>
  );
};

export default FooterLogos;
