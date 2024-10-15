import React from "react";
import "./HomeUniversities.css";
import HomeUniversitiesCard from "./HomeUniversitiesCard";
import amity from "./../../../Imgs/UniversityLogo/au-logo.png";
import lpu from "./../../../Imgs/UniversityLogo/lpu.png";
import jain from "./../../../Imgs/UniversityLogo/jain-online.png";
import manipal from "./../../../Imgs/UniversityLogo/online-manipal.png";
import nmims from "./../../../Imgs/UniversityLogo/nmims-university-logo.png";

const HomeUniversities = () => {
  return (
    <div className="homeUniversitiesContainer">
      <div className="homeUniversitiesContent">
        {" "}
        <HomeUniversitiesCard img={amity} alt="amity" head="AMITY UNIVERSITY" />
        <HomeUniversitiesCard img={lpu} alt="lpu" head="LPU ONLINE" />
        <HomeUniversitiesCard img={jain} alt="jain" head="JAIN UNIVERSITY" />
        <HomeUniversitiesCard
          img={manipal}
          alt="manipal"
          head="ONLINE MANIPAL"
        />
        <HomeUniversitiesCard img={nmims} alt="nmims" head="NMIMS UNIVERSITY" />
      </div>
      <div className="homeUniversitiesBtn">
        <button>View All</button>
      </div>
    </div>
  );
};

export default HomeUniversities;
