import React from "react";
import "./HomePage.css";
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomeUniversities from "./HomeUniversities/HomeUniversities";
// import HomeTrainers from "./HomeTrainers/HomeTrainers";
import HomeRating from "./HomeRating/HomeRating";
import HomeCourses from "./HomeCourses/HomeCourses";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeApproved from "./HomeApproved/HomeApproved";
import HomeComparison from "./HomeComparison/HomeComparison";
const HomePage = () => {
  return (
    <div className="homePage">
      <HomePageHeader />
      <HomeApproved />
      <HomeCourses />
      <HomeUniversities />
      <HomeComparison />
      {/* <HomeTrainers /> */}
      <HomeRating />
      <HomeTestimonial />
    </div>
  );
};

export default HomePage;
