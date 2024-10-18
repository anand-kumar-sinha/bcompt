import React, { useEffect, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { drawerSlice } from "../../slices/drawerSlice";

const MiddleNavBar = () => {
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
  const [customDrawer, setCustomDrawer] = useState(false);

  const dispatch = useDispatch();

  const drawerValue = useSelector((state) => state.customDrawer?.drawer);

  const handleSetDrawerValue = (value) => {
    dispatch(drawerSlice.actions.setvalue(value));
  };

  return (
    <>
      <div
        className="select-cont"
        onClick={() => setCustomDrawer(!customDrawer)}
      >
        <div>
          <p>{drawerValue}</p>
          <IoIosArrowDropdownCircle />
        </div>
      </div>
      {customDrawer && (
        <div
          className="custom-drawer"
          onClick={() => setCustomDrawer(!customDrawer)}
        >
          <div>
            {data.map((item, index) => (
              <p
                key={index}
                onClick={() => {
                  handleSetDrawerValue(item);
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MiddleNavBar;
