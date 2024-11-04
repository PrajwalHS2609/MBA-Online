import React from "react";
import "./HomeComparison.css";
import HomeComparisonCard from "./HomeComparisonCard";
const HomeComparison = () => {
  return (
    <div className="homeComparison" id="homeComparisonAbt">
      <div className="homeComparisonContent">
        <h2>About Us</h2>
        <p>
          At R18 Education, we make learning more accessible and convenient with
          a wide range of online and distance education options. Whether you're
          looking for degrees, diplomas, or certification courses, our programs
          are designed to fit your needs and help you upskill at your own pace.
        </p>
        <p>
          We understand the challenges students face in choosing the right
          educational path. That's why we are committed to offering guidance and
          support, bringing together top online institutions in one place to
          help you find the perfect program.
        </p>
        <p>
          With over 8 years of experience in the EdTech industry, our expert
          team has successfully guided more than 30,000 individuals in achieving
          their academic and professional goals. Let us help you find the right
          course tailored to your interests and passions, so you can take the
          next step in your journey toward success.
        </p>
      </div>
      <div className="homeComparisonContent">
        <HomeComparisonCard
          no="8000+"
          txt="Students"
          para=" Trust R18 for Unbiased Counselling"
        />
        <HomeComparisonCard
          id="homeComparisonCard2"
          no="100%"
          txt="Approved"
          para="Online & Distance Education Colleges & Universites Listed on R18"
        />
        <HomeComparisonCard
          id="homeComparisonCard2"
          no="100%"
          txt="Unbiased Experts"
          para="Guidance by our Certified Counsellors"
        />
        <HomeComparisonCard
          no="100%"
          txt="Complete Assistance"
          para="Till you Complete your Degree"
        />
      </div>
    </div>
  );
};

export default HomeComparison;
