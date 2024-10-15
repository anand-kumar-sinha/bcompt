import React, { useState } from "react";
import loginImg from "../../../assets/login-screen-banner.jpg";
import "./login.scss";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [sentOtp, setSentOtp] = useState(false);
  const navigate = useNavigate();

  //sent otp fuction
  const sentOtpFun = () => {
    setSentOtp(true);
  };

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
        {sentOtp ? (
          <div className="login-info">
            <p className="otp-txt">Enter your verification code</p>
            <p className="otp-txt">
              we have just sent you on your mobile number
            </p>
            <input type="tel" className="inp-otp" placeholder="0 0 0 0" maxLength={4} />
            <p className="chng-phn" onClick={()=> setSentOtp(false)}>Change phone no?</p>
            <div className="btn" onClick={sentOtpFun}>
              <GrLinkNext color="#fff" size={25} />
            </div>
          </div>
        ) : (
          <div className="login-info">
            <p className="normal-txt">Login</p>
            <input type="tel" placeholder="Phone no" maxLength={10} />
            <div className="btn" onClick={sentOtpFun}>
              <GrLinkNext color="#fff" size={25} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
