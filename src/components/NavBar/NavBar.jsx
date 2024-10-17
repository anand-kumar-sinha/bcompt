import React, { useState } from "react";
import AppLogo from "../../assets/app_logo.jpg";
import "./NavBar.scss";
import { CiSearch } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { GoBell } from "react-icons/go";
import SideBar from "./SideBar";

const NavBar = () => {
  const data = [
    "upsc",
    "bank",
    "ssc",
    "jee",
    "neet",
    "current affairs",
    "computer",
    "10th",
    "12th",
    "mba",
    "ca",
    "iit jee",
    "defence",
    "commerece",
    "gate",
    "ae/je",
    "cuet ug",
    "spoken enlgish",
    "airforce",
    "sainik",
    "navy",
    "kvs tgt",
    "kvs pgt",
    "afcat",
    "cds",
    "clat",
    "cuet arts",
    "cuet commerce",
    "cuet science",
    "indian army",
    "railway",
    "nda",
    "navoday",
    "9th",
    "8th",
    "7th",
    "6th",
    "5th",
    "4th",
    "3rd",
    "2nd",
    "1st",
    "bihar exams",
    "up exams",
    "delhi exams",
    "punjab exams",
    "gujrat exams",
    "jharkhand exams",
    "all india exams",
    "other exams",
    "hinid",
    "english",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="NavBar">
        <div>
          <img src={AppLogo} alt="AppLogo" onClick={toggleSidebar} />
          <p>B competition</p>
          <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div>
          <div>
            <CiSearch size={25} />
            <MdSupportAgent size={25} />
            <GoBell size={25} />
          </div>
        </div>
      </div>

      {/* tab options */}
      <div className="select-cont">
        <select className="custom-select">
          <option value="">{data[0]}</option>
          {data.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default NavBar;
