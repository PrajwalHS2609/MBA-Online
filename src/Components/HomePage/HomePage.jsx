import React from "react";
import "./HomePage.css";
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomeUniversities from "./HomeUniversities/HomeUniversities";
// import HomeRating from "./HomeRating/HomeRating";
import HomeCourses from "./HomeCourses/HomeCourses";
// import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeApproved from "./HomeApproved/HomeApproved";
import HomeComparison from "./HomeComparison/HomeComparison";
import HomeEnquiry from "./HomeEnquiry/HomeEnquiry";
// import HomeCompanies from "./HomeCompanies/HomeCompanies";
import HomeWhy from "./HomeWhy/HomeWhy";
// import HomeMap from "./HomeMap/HomeMap";
const HomePage = () => {
  return (
    <div className="homePage">
      <HomePageHeader />
      <HomeApproved />
      <HomeCourses />
      <HomeUniversities />
      <HomeWhy />
      {/* <HomeRating /> */}
      <HomeComparison />
      {/* <HomeTestimonial /> */}
      {/* <HomeCompanies /> */}
      <HomeEnquiry />
      {/* <HomeMap/> */}
    </div>
  );
};

export default HomePage;
