import React from "react";
import "./HomeWhy.css";
import HomeWhyCard from "./HomeWhyCard";
import faculty from "./../../../Imgs/WhyImg/graduation.png";
import placement from "./../../../Imgs/WhyImg/hiring.png";
import read from "./../../../Imgs/WhyImg/reading-book.png";
import career from "./../../../Imgs/WhyImg/career-path.png";

const HomeWhyMain = () => {
  return (
    <div className="homeWhyMain">
      <HomeWhyCard
        img={faculty}
        head="Top Indian & Global Faculty"
        para="Get a world-class education form the faculty with rich academic and industry experience"
      />
      <HomeWhyCard
        img={career}
        head="Career Services For Job Readiness"
        para="Take masters classes from for interview preparation & resume building sessions while pursuing your degree"
      />
      <HomeWhyCard
        img={read}
        head="Choose The Way You Want To Learn"
        para="Enhance your learning potential through your choice of printed books ,audio books ,e-books,videos and campus library resources"
      />
      <HomeWhyCard
        img={placement}
        head="Placement Assistance"
        para="Ensure a smooth job transition with placement opportunities from over 500+ hiring partners across domains"
      />
    </div>
  );
};

export default HomeWhyMain;
