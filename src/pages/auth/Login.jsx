import React from "react";
import loginImg from "../../assets/login-screen-banner.jpg";
import "./login.scss";
import { GrLinkNext } from "react-icons/gr";

const Login = () => {
  return (
    <div className="container">
      <div className="logincard">
        <div className="login-banner">
          <img src={loginImg} alt="loginImg" />
          <div className="over-lap">
            <p>Welcome to</p>
            <h1>B competition</h1>
            <p>Signup to continue</p>
          </div>
        </div>
        <div className="login-info">
          <p>Login</p>
          <input type="text" name="" id="" placeholder="Phone no" />
          <div className="btn">
            <GrLinkNext color="#fff" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
