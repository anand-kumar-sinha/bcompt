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
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import whatsapp from '../../assets/whatsapp.png'
import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import telegram from '../../assets/telegram.png'
import { useNavigate } from "react-router-dom";

const SideBar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`sidebarcont ${isOpen ? "active" : ""}`}
      onClick={toggleSidebar}
    >
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
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
          <div className="op-tab" onClick={() => navigate('/profile-detail') }>
            <CiUser />
            <p>Profile</p>
          </div>
          <div className="op-tab" onClick={() => navigate('/my-exams')}>
            <TbCheckupList />
            <p>My Exam</p>
          </div>
          <div className="op-tab" onClick={() => navigate('/result')}>
            <TfiCup />
            <p>Result</p>
          </div>
          <div className="op-tab" onClick={() => navigate('/walllet')}>
            <IoWallet />
            <p>Wallet</p>
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
          <div className="social-icon">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={insta} alt="insta" />
            <img src={twitter} alt="twitter" />
            <img src={telegram} alt="telegram" />
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default SideBar;
