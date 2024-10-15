import React from "react";
import "./HomeCourses.css";
import { Link } from "react-router-dom";
const HomeCoursesCard = (props) => {
  return (
    <div className="homeCoursesCard">
      <Link to={"/"}>
        <span>{props.duration}</span>
        <img src={props.img} alt={props.alt} />
        <h6>{props.course}</h6>
        <div className="homeCoursesCardRead">Read More</div>
      </Link>
    </div>
  );
};

export default HomeCoursesCard;
