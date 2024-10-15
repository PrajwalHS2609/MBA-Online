import React from "react";
import "./HomeComparison.css";
const HomeComparisonCard = (props) => {
  return (
    <div className="homeComparisonCard" id={props.id}>
      <h4>{props.no}</h4>
      <h6>{props.txt}</h6>
      <p>{props.para}</p>
    </div>
  );
};

export default HomeComparisonCard;
