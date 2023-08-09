import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./_profile.module.css";

const ProfileSidebar = () => {
  return (
    <div className={Styles.sidebarProfile}>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName="active">
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/upload-profile-photo"
              activeClassName="active"
            >
              Update Profile Photo
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/add-profile" activeClassName="active">
              Update Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
