import React, { Fragment, useContext } from "react";
import Styles from "./_navbar.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../../Apis/AuthContextApi";
import { auth } from "firebase/auth";

const Menu = () => {
  let { authUser, isLoading, Logout } = useContext(AuthContext);
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/profile" className={Styles.avatarURL}>
            <img src={authUser.photoURL} alt={authUser.username} />
          </NavLink>
        </li>
        <li>
          <button className={Styles.logoutBtn} onClick={() => Logout()}>
            Logout
          </button>
        </li>
      </Fragment>
    );
  };
  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </Fragment>
    );
  };
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        {isLoading === true ? (
          "Loading..."
        ) : authUser === null ? (
          <AnonymousUser />
        ) : (
          <AuthenticatedUser />
        )}
      </ul>
    </div>
  );
};

export default Menu;
