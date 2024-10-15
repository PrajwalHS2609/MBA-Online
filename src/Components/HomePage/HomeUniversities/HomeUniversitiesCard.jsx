import React from "react";
import "./HomeUniversities.css";
const HomeUniversitiesCard = (props) => {
  return (
    <div className="homeUniversitiesCard">
      <img src={props.img} alt={props.alt} />
      <h6>{props.head}</h6>
    </div>
  );
};

export default HomeUniversitiesCard;
