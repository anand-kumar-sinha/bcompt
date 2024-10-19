import React, { useState } from "react";
import PageNavBar from "../../../components/NavBar/PageNavBar";
import "./Result.scss";
import AppLogo from "../../../assets/app_logo.jpg";
import idea from "../../../assets/idea.png";
import rupee from "../../../assets/rupee.png";
import percentage from "../../../assets/percentage.png";

const Result = () => {
  const [tabs, setTabs] = useState("examStat");

  const switcherFun = (data) => {
    setTabs(data);
  };
  return (
    <>
      <PageNavBar name="Result" />
      <div className="result-container">
        <div>
          <img src={AppLogo} alt="AppLogo" />
          <div>
            <p className="name">Anand Kumar</p>
            <p className="oth-data">Radha raman institue of technology</p>
            <p className="oth-data">Nalnda</p>
            <p className="oth-data">Wallet Balance: 0</p>
          </div>
        </div>
        <div>
          <div>
            <div className="idea">
              <img src={idea} alt="idea" />
            </div>
            <p>2</p>
            <p>Total Exam</p>
          </div>
          <div>
            <div className="rupee">
              <img src={rupee} alt="rupee" />
            </div>
            <p>2</p>
            <p>Total Won</p>
          </div>
          <div>
            <div className="percentage">
              <img src={percentage} alt="percentage" />
            </div>
            <p>2</p>
            <p>Winning Percent</p>
          </div>
        </div>
        <div className="result-tabs-switch-cont">
          <div onClick={() => switcherFun("examStat")}>
            <p className={tabs === "examStat" ? "active" : ""}>Exam Statics</p>
            <div className={`bar ${tabs === "examStat" ? "baractive" : ""}`} />
          </div>
          <hr />
          <div onClick={() => switcherFun("recentPart")}>
            <p className={tabs === "recentPart" ? "active" : ""}>
              Recent Participated
            </p>
            <div
              className={`bar ${tabs === "recentPart" ? "baractive" : ""}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
