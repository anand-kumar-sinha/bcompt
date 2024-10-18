import React, { useState } from "react";
import "./TestDetail.scss";
import { FaMedal } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import AppLogo from "../../assets/app_logo.jpg";
import MiddleNavBar from "../../components/NavBar/MiddleNavBar";
import PageNavBar from "../../components/NavBar/PageNavBar";

const TestDetail = () => {
  const [tabs, setTabs] = useState("cashPrize");

  const switcherFun = (data) => {
    setTabs(data);
  };
  return (
    <>
      <div className="test-detail">
        <PageNavBar name={'hi'} date={false}/>
        <MiddleNavBar />

        <div className="prize-pool">
          <div>
            <FaMedal />
            <div>
              <p className="prize-txt">Prize Pool</p>
              <p className="price">₹ 5</p>
            </div>
          </div>
          <div>
            <p className="start-test">Start Test</p>
          </div>
        </div>
        <div className="test-detail-cont">
          <div>
            <p className="data-txt">Total Available Slots</p>
            <p className="txt-red">3 Slots</p>
          </div>
          <div>
            <div>
              <p>Entry Fee</p>
              <div className="cont">
                <BsCashStack /> <span>₹ 5</span>
              </div>
            </div>
            <div>
              <p>Total Questions</p>
              <div className="cont">
                <FaQuestionCircle /> <span>3</span>
              </div>
            </div>
            <div>
              <p>Total Marks</p>
              <div className="cont">
                <FaCircleCheck /> <span>3 Marks</span>
              </div>
            </div>
          </div>
          <div>
            <p className="data-txt">Exam Timing</p>
            <p className="txt-red">8:50:00 - 09:00:00</p>
          </div>
        </div>
        <div className="tabs-switch-cont">
          <div onClick={() => switcherFun("cashPrize")}>
            <p className={tabs === "cashPrize" ? "active" : ""}>Cash Prizes</p>
            <div className={`bar ${tabs === "cashPrize" ? "baractive" : ""}`} />
          </div>
          <hr />
          <div onClick={() => switcherFun("leaderboard")}>
            <p className={tabs === "leaderboard" ? "active" : ""}>
              Leaderboard
            </p>
            <div
              className={`bar ${tabs === "leaderboard" ? "baractive" : ""}`}
            />
          </div>
          <hr />
          <div onClick={() => switcherFun("examDetails")}>
            <p className={tabs === "examDetails" ? "active" : ""}>
              Exam Details
            </p>
            <div
              className={`bar ${tabs === "examDetails" ? "baractive" : ""}`}
            />
          </div>
          <hr />
          <div onClick={() => switcherFun("pointSystem")}>
            <p className={tabs === "pointSystem" ? "active" : ""}>
              Point System
            </p>
            <div
              className={`bar ${tabs === "pointSystem" ? "baractive" : ""}`}
            />
          </div>
        </div>
        {tabs === "cashPrize" ? (
          <div className="tabs-detail">
            <div className="rank">
              <p>RANK</p>
              <p>Prize</p>
            </div>
            <div>
              <p># 1</p>
              <p>6.00</p>
            </div>
            <div>
              <p># 2</p>
              <p>2.00</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {tabs === "leaderboard" ? (
          <div className="tabs-detail">
            <div className="rank">
              <p>RANK</p>
              <p>Marks</p>
            </div>
            <div>
              <p># 1</p>
              <p>3</p>
            </div>
            <div>
              <p># 2</p>
              <p>2</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {tabs === "examDetails" ? <div className="tabs-detail"></div> : ""}
        {tabs === "pointSystem" ? (
          <div className="pointSystem-detail">
            <img src={AppLogo} alt="AppLogo" />
            <p>Total Marks : 3</p>
            <p>Correct 1 & -1 Incorrect</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TestDetail;
