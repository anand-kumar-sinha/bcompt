import React from "react";
import "./NavBar.scss";
import { TbCoinRupee } from "react-icons/tb";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PageNavBar = ({ name, date, rightIcon = false }) => {
  const navigate = useNavigate();
  return (
    <div className="test-nav">
      <div>
        <span onClick={() => navigate("/")}>
          <IoMdArrowBack />
        </span>
        <div>
          <p>{name}</p>
          {date && <p>Test Date: 2024-10-17</p>}
        </div>
      </div>
      {rightIcon && (
        <span onClick={() => navigate("/")}>
          <TbCoinRupee />
        </span>
      )}
    </div>
  );
};

export default PageNavBar;
