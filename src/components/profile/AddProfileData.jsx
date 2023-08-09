import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import Styles from "./_profile.module.css";
import { db, auth } from "../../Apis/firebase";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Apis/AuthContextApi";

const AddProfileData = () => {
  let { authUser } = useContext(AuthContext);
  let { uid } = authUser === null ? "" : authUser;

  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    city: "",
    address: "",
    isLoading: false,
  });
  let { firstname, lastname, gender, city, address, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    // console.log(state);

    try {
      let payload = { firstname, lastname, gender, city, address };
      //collection path (database location)
      let { displayName, photoURL, email } = authUser;
      let userCollectionRef = doc(db, "users", uid);

      //insert document into the collection
      await setDoc(userCollectionRef, {
        uid,
        displayName,
        photoURL,
        email,
        ...payload,
      });
      toast.success("User information is updated");
      window.location.assign("/profile");
      //   console.log(authUser?.uid);
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <div className={Styles.mainProfileBlock}>
      <h1>Add Profile</h1>
      <form className={Styles.profileForm} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            placeholder="Enter First Name"
            value={firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            placeholder="Enter Last Name"
            onChange={handleChange}
            value={lastname}
          />
        </div>
        <div className="form-group" onChange={handleChange} value={gender}>
          <label htmlFor="">Gender</label>
          <span>
            <input type="radio" name="gender" id="" value="Male" />
            Male
          </span>
          <span>
            <input type="radio" name="gender" id="" value="Female" />
            Female
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
            placeholder="Enter City Name"
            onChange={handleChange}
            value={city}
          />
        </div>
        <div className="form-group" id={Styles.textArea}>
          <label htmlFor="">Address</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="2"
            onChange={handleChange}
            value={address}
          ></textarea>
        </div>
        <div className="form-group">
          <button>{isLoading === true ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default AddProfileData;
