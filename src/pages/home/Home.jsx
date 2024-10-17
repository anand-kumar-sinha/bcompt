import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import TestCard from "../../components/TestCard/TestCard";
import { TbCheckupList } from "react-icons/tb";

const Home = () => {
  return (
    <div className="homepage">
      <NavBar />
      <ImageCarousel />
      <div className="online-exams">
        <TbCheckupList />
        <p>Online Exams</p>
      </div>
      <div className="test-cont">
        <TestCard id={1} />
        <TestCard id={2} />
        <TestCard id={3} />
        <TestCard id={4} />
        <TestCard id={5} />
      </div>
    </div>
  );
};

export default Home;
