import React from "react";
import classes from "./HeroImage.module.css";
import imageHeroMobile from "./images/image-hero-mobile.png";
import imageHeroDesktop from "./images/image-hero-desktop.png";
import { useMediaQuery } from "react-responsive";

const HeroImage = () => {
  const isDesktopVersion = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <>
      {isDesktopVersion && (
        <img className={classes['desktop-image']} src={imageHeroDesktop} alt="" />
      )}
      {!isDesktopVersion && (
        <img className={classes['mobile-image']} src={imageHeroMobile} alt="" />
      )}
    </>
  );
};

export default HeroImage;
