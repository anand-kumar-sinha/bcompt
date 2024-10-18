import React from "react";
import "./NavBar.scss";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PageNavBar = ({ name, date }) => {
  const navigate = useNavigate();
  return (
    <div className="test-nav">
      <span onClick={() => navigate("/")}>
        <IoMdArrowBack />
      </span>

      <div>
        <p>{name}</p>
        {date && <p>Test Date: 2024-10-17</p>}
      </div>
    </div>
  );
};

export default PageNavBar;
