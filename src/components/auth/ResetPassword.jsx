import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Apis/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { FaUserAlt } from "react-icons/fa";

const ResetPassword = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [isLoading, setLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      sendPasswordResetEmail(auth, email);
      toast.info(
        `Password reset link sent to ${email} address please reset new password`
      );
      navigate("/login");
    } catch (error) {
      toast.error(error.code);
    }
    setEmail("");
    setLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Reset Password</h1>
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
              <aside>
                <span>Already have account</span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>
            <div className="form-group">
              <button>
                {isLoading === true ? "Loading..." : "Reset Password"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ResetPassword;
