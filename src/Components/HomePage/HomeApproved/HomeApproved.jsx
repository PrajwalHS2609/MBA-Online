import React from "react";
import "./HomeApproved.css";
import HomeApprovedCard from "./HomeApprovedCard";
import wes from "./../../../Imgs/Approved/WES.png";
import nirf from "./../../../Imgs/Approved/NIRF.png";
import qaa from "./../../../Imgs/Approved/QAA.png";
import ugc from "./../../../Imgs/Approved/UGC.png";
import naac from "./../../../Imgs/Approved/NAAC.png";
import aicte from "./../../../Imgs/Approved/AICTE.png";

const HomeApproved = () => {
  return (
    <div className="homeApproved">
      <HomeApprovedCard img={ugc} />
      <HomeApprovedCard img={wes} />
      <HomeApprovedCard img={nirf} />
      <HomeApprovedCard img={naac} />
      <HomeApprovedCard img={aicte} />
      <HomeApprovedCard img={qaa} />
    </div>
  );
};

export default HomeApproved;
