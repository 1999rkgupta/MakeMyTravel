import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Apis/firebase";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  linkWithCredential,
} from "@firebase/auth";
const PhoneAuth = () => {
  let navigate = useNavigate();
  let [phone, setPhone] = useState("");
  let [otp, setOTP] = useState("");
  let [email, setEmail] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleOTP = e => {};

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let reCaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: response => {
            console.log(response);
          },
        },
        auth
      );
      let userDataPhone = await signInWithPhoneNumber(
        auth,
        phone,
        reCaptchaVerifier
      )
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;
          const code = prompt("enter otp");
          confirmationResult
            .confirm(code)
            .then(result => {
              const user = result.user;
              console.log(user);
              if (result.user.email === null) {
                const updateEmail = prompt("Enter Email");
                // console.log(updateEmail);
                setEmail(updateEmail);
                console.log(user);
                console.log(email);
              }
              // window.location.assign("/");
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      toast.error(error.code);
    }
    setPhone("");
    setIsLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Login with Phone Number</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                placeholder="enter valid phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>
            <p onClick={handleOTP}>Send OTP</p>
            <div id="captcha-container"></div>
            <div className="form-group">
              <label htmlFor="phone">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={e => setOTP(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <aside>
                <span>Already have account </span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "loading..." : "send Otp"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
