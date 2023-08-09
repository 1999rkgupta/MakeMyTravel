import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import Styles from "./_profile.module.css";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../Apis/firebase";
import { toast } from "react-toastify";

const ProfileDefault = () => {
  let { authUser } = useContext(AuthContext);
  let { uid } = authUser === null ? "" : authUser;
  let [userUid, setUserUid] = useState("");
  let [profile, setProfile] = useState("");
  // let userRef = doc(db, "users");
  // let fetchData = async () => {
  //   let data = await getDocs(userCollectionRef);
  //   data.docs.map(user => {
  //     // console.log(user.data().uid);
  //     setUserUid(user.data().uid);
  //     let { uid } = authUser;
  //     // console.log(uid);
  //     if (user.data().uid === uid) {
  //       return setProfile(user.data());
  //     }
  //   });
  // };
  let fetchData = async () => {
    onSnapshot(doc(db, "users", uid), doc => {
      setProfile(doc.data());
    });
  };
  // console.log(userUid);
  useEffect(() => {
    fetchData();
  }, []);

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
                  <img
                    src={authUser.photoURL || profile.photoURL}
                    alt={authUser.displayName || profile.displayName}
                  />
                </figure>
                <main>
                  <span className={Styles.cameraIcon}>
                    <FaCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <footer>
              <h1>{profile.displayName}</h1>
              <h4>{profile.email}</h4>
            </footer>
            <aside className={Styles.profileUser}>
              <Fragment>
                <p>
                  <strong>Firstname : </strong> {profile.firstname}
                </p>
                <p>
                  <strong>Lastname : </strong> {profile.lastname}
                </p>
                <p>
                  <strong>Gender : </strong> {profile.gender}
                </p>
                <p>
                  <strong>City : </strong>
                  {profile.city}
                </p>
                <p>
                  <strong>Address : </strong> {profile.address}
                </p>
              </Fragment>
            </aside>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;
