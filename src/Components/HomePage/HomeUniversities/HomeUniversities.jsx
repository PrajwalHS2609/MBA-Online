import React from "react";
import "./HomeUniversities.css";
import HomeUniversitiesCard from "./HomeUniversitiesCard";
import amity from "./../../../Imgs/UniversityLogo/au-logo.png";
import lpu from "./../../../Imgs/UniversityLogo/lpu.png";
import jain from "./../../../Imgs/UniversityLogo/jain-online.png";
import manipal from "./../../../Imgs/UniversityLogo/online-manipal.png";
import nmims from "./../../../Imgs/UniversityLogo/nmims-university-logo.png";
import HomeUniversitiesHead from "./HomeUniversitiesHead";

const HomeUniversities = () => {
  return (
    <div className="homeUniversitiesContainer" id="homeUniversities">
      <HomeUniversitiesHead />
      <div className="homeUniversitiesContent">
        {" "}
        <HomeUniversitiesCard
          img="https://www.amity.edu/backoffice/uploads/HomeBanner/1fblg_noida-cam-img.jpg"
          logo={amity}
          head="AMITY UNIVERSITY"
        />
        <HomeUniversitiesCard
          img="https://www.lpudistancelearning.com/img/slider-002.jpg"
          logo={lpu}
          head="LPU"
        />
        <HomeUniversitiesCard
          img="https://www.jainuniversity.ac.in/assets/images/top-university-of-india.jpg"
          logo={jain}
          head="JAIN UNIVERSITY"
        />
        <HomeUniversitiesCard
          img="https://jaipur.manipal.edu/img/Untitled-1.jpg"
          logo={manipal}
          head="MANIPAL UNIVERSITY"
        />
        <HomeUniversitiesCard
          img="https://www.nmims.edu/images/school-2.jpg"
          logo={nmims}
          head="NMIMS UNIVERSITY"
        />
      </div>
    </div>
  );
};

export default HomeUniversities;
