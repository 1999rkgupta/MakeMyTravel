import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Apis/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  let navigate = useNavigate();
  let [toggle, setToggle] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLoading, setLoading] = useState(false);
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      let userData = await signInWithEmailAndPassword(auth, email, password);
      // console.log(userData);
      if (userData.user.emailVerified === true) {
        // navigate("/");
        window.location.assign("/");
        toast.success(`successfully logged in as ${email}`);
      } else {
        toast.error("Email not yet verified");
      }
    } catch (error) {
      toast.error(error.code);
    }
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  let togglePassword = () => {
    setToggle(!toggle);
    setShowPassword(!showPassword);
  };
  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Login</h1>
          <Link to="/phone-auth" className={Styles.phoneAuth}>
            Login with Phone Number
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter your Email"
              />
              <span className={Styles.userIcon}>
                <FaUserAlt />
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type={showPassword === true ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
              />
              <span className={Styles.userIcon}>
                <RiLockPasswordFill />
              </span>

              <span className={Styles.eyeIcon} onClick={togglePassword}>
                {toggle === true ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="form-group">
              <aside>
                <span>Don't have an account</span>
                <span>
                  <Link to="/register">Register</Link>
                </span>
              </aside>
              <p>
                <Link to="/reset-password">Reset Password</Link>
              </p>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "Loading..." : "Login"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
