import React from "react";
import "./HomeCourses.css";
import HomeCoursesHead from "./HomeCoursesHead";
import HomeCoursesMain from "./HomeCoursesMain";
const HomeCourses = () => {
  return (
    <div className="homeCourses" id="homeCoursesNav">
      <HomeCoursesHead />
      <HomeCoursesMain />
    </div>
  );
};

export default HomeCourses;
