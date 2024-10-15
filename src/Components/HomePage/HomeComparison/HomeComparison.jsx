import React from "react";
import "./HomeComparison.css";
import HomeComparisonCard from "./HomeComparisonCard";
const HomeComparison = () => {
  return (
    <div className="homeComparison">
      <div className="homeComparisonContent">
        <h2>BEYOND COMPARISON</h2>
        <p>
          Having over 8 years of experience in the EdTech industry, our seasoned
          professionals have helped over 30,000 individuals to realise their
          dreams. We help professionals find the right course based upon their
          interests and passions.
        </p>
      </div>
      <div className="homeComparisonContent">
        <HomeComparisonCard
          no="5"
          txt="Million +"
          para="Students Trust Learning Routes for Unbiased Counselling"
        />
        <HomeComparisonCard
          id="homeComparisonCard2"
          no="100%"
          txt="Approved"
          para="Online & Distance Education Colleges & Universites Listed on Learning Routes"
        />
        <HomeComparisonCard
          id=""
          no="100%"
          txt="Unbiased Experts"
          para="Guidance by our Certified Counsellors"
        />
        <HomeComparisonCard
          id="homeComparisonCard2"
          no="100%"
          txt="Complete Assistance"
          para="Till you Complete your Degree"
        />
      </div>
    </div>
  );
};

export default HomeComparison;
