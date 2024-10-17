import React, { useEffect, useState } from "react";
import "./bottomNavbar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { TbCheckupList } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import { BsShop } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BottomNavBar = () => {
  const [tabSwitch, SetTabSwitch] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    SetTabSwitch(location.pathname.toString().split("/")[1]);
  }, []);

  const tabSwitchHandler = (tab) => {
    SetTabSwitch(tab);

    if (tab === "home") {
      navigate("/");
    }
    if (tab === "my-exams") {
      navigate("/my-exams");
    }
    if (tab === "winners") {
      navigate("/winners");
    }
    if (tab === "courses") {
      navigate("/courses");
    }
    if (tab === "class") {
      navigate("/class");
    }
  };

  return (
    <div className="bottomNavbar">
      <div
        className={tabSwitch === "home" ? "active" : ""}
        onClick={() => tabSwitchHandler("home")}
      >
        <AiOutlineHome />
        <p>Home</p>
      </div>
      <div
        className={tabSwitch === "my-exams" ? "active" : ""}
        onClick={() => tabSwitchHandler("my-exams")}
      >
        <TbCheckupList />
        <p>My Exams</p>
      </div>
      <div
        className={tabSwitch === "winners" ? "active" : ""}
        onClick={() => tabSwitchHandler("winners")}
      >
        <TfiCup />
        <p>Winner</p>
      </div>
      <div
        className={tabSwitch === "courses" ? "active" : ""}
        onClick={() => tabSwitchHandler("courses")}
      >
        <BsShop />
        <p>Courses</p>
      </div>
      <div
        className={tabSwitch === "class" ? "active" : ""}
        onClick={() => tabSwitchHandler("class")}
      >
        <CiVideoOn />
        <p>Class</p>
      </div>
    </div>
  );
};

export default BottomNavBar;
