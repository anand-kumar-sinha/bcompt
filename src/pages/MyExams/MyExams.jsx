import React, { useState } from "react";
import PageNavBar from "../../components/NavBar/PageNavBar";
import MiddleNavBar from "../../components/NavBar/MiddleNavBar";
import "./Myexam.scss";
import TestCard from "../../components/TestCard/TestCard";

const MyExams = () => {
  const [tabs, setTabs] = useState("upcoming");

  const switcherFun = (data) => {
    setTabs(data);
  };
  return (
    <>
      <PageNavBar name="My Exams" />
      <MiddleNavBar />
      <div className="my-exam-cont">
        <div className="my-exam-switch-cont ">
          <div onClick={() => switcherFun("upcoming")}>
            <p className={tabs === "upcoming" ? "active" : ""}>Upcoming</p>
            <div className={`bar ${tabs === "upcoming" ? "baractive" : ""}`} />
          </div>
          <hr />
          <div onClick={() => switcherFun("ongoing")}>
            <p className={tabs === "ongoing" ? "active" : ""}>Ongoing</p>
            <div className={`bar ${tabs === "ongoing" ? "baractive" : ""}`} />
          </div>
          <hr />
          <div onClick={() => switcherFun("completed")}>
            <p className={tabs === "completed" ? "active" : ""}>Completed</p>
            <div className={`bar ${tabs === "completed" ? "baractive" : ""}`} />
          </div>
          <hr />
        </div>

        {/* {tabs === "upcoming" ? (
        <div className="test-cont">
          <TestCard id={1} />
        </div>
      ) : (
        ""
      )}
      {tabs === "ongoing" ? (
        <div className="test-cont">
          <TestCard id={1} />
          <TestCard id={1} />
        </div>
      ) : (
        ""
      )}
      {tabs === "completed" ? (
        <div className="test-cont">
          <TestCard id={1} />
          <TestCard id={1} />
          <TestCard id={1} />
          <TestCard id={1} />
        </div>
      ) : (
        ""
      )} */}
      </div>
    </>
  );
};

export default MyExams;
