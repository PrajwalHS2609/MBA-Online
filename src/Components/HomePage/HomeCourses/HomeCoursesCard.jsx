import React from "react";
import "./HomeCourses.css";
import { Link } from "react-router-dom";
const HomeCoursesCard = (props) => {
  return (
    <div className="homeCoursesCard">
      <Link to={"/"}>
        <h6>{props.course} <br />{props.course2}</h6>
      </Link>
    </div>
  );
};

export default HomeCoursesCard;
