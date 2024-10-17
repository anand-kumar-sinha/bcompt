import React from "react";
import { RxCross2 } from "react-icons/rx";
import Avatar from "../../assets/avatar.png";
import { FaRegEdit } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbCheckupList } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import { IoWallet } from "react-icons/io5";
import { BiPackage } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { HiLanguage } from "react-icons/hi2";
import { RiUserShared2Line } from "react-icons/ri";
import { IoIosPower } from "react-icons/io";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <RxCross2 className="close-btn" onClick={toggleSidebar} />
        <div className="profile">
          <div>
            <img src={Avatar} alt="Avatar" />
            <div>
              <p className="name">Anand kumar</p>
              <p className="phone">7368970125</p>
            </div>
          </div>
          <FaRegEdit />
        </div>
        <hr style={{ marginTop: "10px" }} />
        <div className="options">
          <div className="op-tab">
            <CiUser />
            <p>Profile</p>
          </div>
          <div className="op-tab">
            <TbCheckupList />
            <p>My Exam</p>
          </div>
          <div className="op-tab">
            <TfiCup />
            <p>Result</p>
          </div>
          <div className="op-tab">
            <IoWallet />
            <p>Wallet</p>
          </div>
          <div className="op-tab">
            <BiPackage />
            <p>Package</p>
          </div>
          <div className="op-tab">
            <BiPackage />
            <p>Offer Package</p>
          </div>
          <div className="op-tab">
            <IoShareSocialOutline />
            <p>Share</p>
          </div>
          <div className="op-tab">
            <MdSupportAgent />
            <p>Call Now</p>
          </div>
          <div className="op-tab">
            <HiLanguage />
            <p>Language</p>
          </div>
          <div className="op-tab">
            <RiUserShared2Line />
            <p>Refer & Earn</p>
          </div>
          <div className="op-tab">
            <IoIosPower />
            <p>Logout</p>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SideBar;
