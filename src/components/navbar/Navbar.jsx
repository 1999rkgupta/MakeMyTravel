import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Styles from "./_navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [day, setDay] = useState(true);

  let handleClick = () => {
    setIsShown(!isShown);
  };

  let handleDay = () => {
    setDay(!day);
    if (day === true) {
      document.body.style.background = "#111";
      document.body.style.color = "#fff";
      document.querySelector("section").style.background = "#111";
      document.querySelector("section").style.boxShadow = "1px 0 5px white";
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#111";
      document.querySelector("section").style.background = "#fff";
    }
  };

  return (
    <section id={Styles.navbarBlock}>
      <article>
        <Logo />
        <button className="day" onClick={handleDay}>
          😎
        </button>
        <Menu />
        <button className={Styles.hamBlock} onClick={handleClick}>
          {isShown === true ? <GoEyeClosed /> : <GiHamburgerMenu />}
        </button>
      </article>
      {isShown && (
        <div className={Styles.hamMenu}>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeclassname="active">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeclassname="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
