import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./Navbar.module.css";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import NavbarMenuMobile from "./NavbarMenuMobile";
import NavBarMenuDesktop from "./NavBarMenuDesktop";

const Navbar = () => {
  const isDesktopVersion = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuBtnClickHandler = () => {
    setIsMenuOpen(true);
  };

  const closeBtnClickHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {!isDesktopVersion && (
        <div className={classes.container}>
          <img src={logo} alt="snap_logo" />
          <img
            className={classes["menu-button"]}
            src={iconMenu}
            alt=""
            onClick={menuBtnClickHandler}
          />
          {isMenuOpen && <NavbarMenuMobile onClick={closeBtnClickHandler} />}
        </div>
      )}
      {isDesktopVersion && (
        <section className={classes.container}>
          <div className={classes['logo-menu-container']}>
            <img src={logo} alt="snap_logo" />
            <NavBarMenuDesktop />
          </div>
          <div className={classes['button-container']}>
            <button className={classes["login-button"]}>Login</button>
            <button className={classes["register-button"]}>Register</button>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
