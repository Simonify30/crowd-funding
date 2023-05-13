import { useState } from "react";

import classes from "./Header.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import headImg from "../../images/image-hero-desktop.jpg";
import mobileImg from "../../images/image-hero-mobile.jpg";
import menuCloseicon from "../../images/icon-close-menu.svg";
import menuIcon from "../../images/icon-hamburger.svg";
import crowd from "../../images/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(open => !open);
  };

  return (
    <header>
      <main className={`${classes["main-image"]} `}>
        <img src={headImg} alt="headImg" className={classes.desktop} />
        <img src={mobileImg} alt="headImg" className={classes.mobile} />

        <div className={classes.link}>
          <div className={classes.crowdImg}>
            <img src={crowd} alt="headImg" className={classes.crowd}/>
            <div>
              {isOpen ? (
                <img
                  src={menuCloseicon}
                  alt="headImg"
                  className={classes.menuCloseIcon}
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <img
                  src={menuIcon}
                  alt="headImg"
                  className={classes.menuIcon}
                  onClick={showMenu}
                />
              )}
            </div>
          </div>

          <ul className={`${classes.hideMenu} ${isOpen && classes.show}`}>
            <li className={classes["flex-link"]}>
              <NavLink
                to="about"
                style={({ isActive }) => {
                  return { color: isActive ? "blue" : "" };
                }}
              >
                About
              </NavLink>
              <NavLink
                to="discover"
                style={({ isActive }) => {
                  return { color: isActive ? "blue" : "" };
                }}
              >
                Discover
              </NavLink>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? "blue" : "" };
                }}
              >
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      </main>

      <div className={classes.item}>
        <Outlet />
      </div>
    </header>
  );
};

export default Header;
