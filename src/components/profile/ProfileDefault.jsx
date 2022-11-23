import React, { Fragment, useContext } from "react";
import { AuthContext } from "../../Apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import Styles from "./_profile.module.css";
import { toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDefault = () => {
  let { authUser } = useContext(AuthContext);

  return (
    <div className={Styles.mainProfileBlock}>
      {authUser === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Profile</h1>
          <article>
            <aside className={Styles.asideIcon}>
              <Link to="/profile/upload-profile-photo">
                <figure>
                  <img src={authUser.photoURL} alt={authUser.displayName} />
                </figure>
                <main>
                  <span className={Styles.cameraIcon}>
                    <FaCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <footer>
              <h1>{authUser.displayName}</h1>
              <h4>{authUser.email}</h4>
            </footer>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;
