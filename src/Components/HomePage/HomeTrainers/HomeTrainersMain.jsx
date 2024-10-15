import React from "react";
import "./HomeTrainers.css";
import HomeTrainersCard from "./HomeTrainersCard";

const HomeTrainersMain = () => {
  return (
    <div className="homeTrainersMain">
      <HomeTrainersCard />
      <HomeTrainersCard />
      <HomeTrainersCard />
      <HomeTrainersCard />
    </div>
  );
};

export default HomeTrainersMain;
