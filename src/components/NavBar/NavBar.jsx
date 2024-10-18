import React, { useState } from "react";
import AppLogo from "../../assets/app_logo.jpg";
import "./NavBar.scss";
import { CiSearch } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { GoBell } from "react-icons/go";
import SideBar from "./SideBar";
import MiddleNavBar from "./MiddleNavBar";

const NavBar = () => {
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
      <MiddleNavBar />
    </>
  );
};

export default NavBar;
