import React from "react";
import { FaMedal } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { TbCoinRupee } from "react-icons/tb";
import "./testcard.scss";
import { useNavigate } from "react-router-dom";

const TestCard = ({id}) => {
    const navigate = useNavigate();
  return (
    <div className="test-card" onClick={() => navigate(`/test/${id}`)}>
      <div>
        <FaMedal />
      </div>
      <div>
        <div>
          <div>
            <p>Hi</p>
            <p className="time">Exam Date: 2024-10-7</p>
          </div>
          <div>
            <p className="purchased">Purchased</p>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <div>
              <MdOutlineCalendarMonth />
              <p>Date</p>
            </div>
            <div>2024-10-17</div>
          </div>
          <div>
            <div>
              <IoMdClock />
              <p>Time</p>
            </div>
            <div>08:50:00</div>
          </div>
          <div>
            <div>
              <CiUser />
              <p>Slots Left</p>
            </div>
            <div>2024-10-17</div>
          </div>
          <div>
            <div>
              <TbCoinRupee />
              <p>Prizepool</p>
            </div>
            <div>₹ 1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
