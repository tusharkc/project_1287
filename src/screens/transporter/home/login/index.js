import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  return (
    <div className="max-screen">
      <div className="upper-section">
        <div className="img-logo">
          <img src="/images/logo_bilty.png" />
        </div>
        <div className="login-header">Login</div>
        <div className="login-des">
          Please enter your Email ID & Password to access your account{" "}
        </div>
        <div className="flex">
          <img />
          <input type="email" placeholder="ENTER EMAIL" />
          <img />
        </div>
        <div className="flex">
          <img />
          <input type="password" placeholder="ENTER PASSWORD" />
          <img />
        </div>
        <button
          className="login-btn"
          onClick={() => {
            history.push("/transport/home");
          }}
        >
          Login
        </button>
        <div className="proceed">
          By proceeding you agree to our{" "}
          <span>Terms & Conditions & Privacy Policy.</span>{" "}
        </div>
        <div className="or-login">Or Login With</div>
        <div className="flex">
          <button className="google-btn">G</button>
          <button className="fb-btn">F</button>
        </div>
      </div>
      <div className="bottom-border">
        <button className="user-btn">new user? SignUp</button>
        <div className="app-support">
          App Support-<span className="app-support-no">1800-000-1234</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
