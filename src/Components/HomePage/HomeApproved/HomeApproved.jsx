import React from "react";
import "./HomeApproved.css";
import HomeApprovedCard from "./HomeApprovedCard";
const HomeApproved = () => {
  return (
    <div className="homeApproved">
      <HomeApprovedCard
        img="https://distanceeducationschool.com/wp-content/uploads/2023/08/top-mba.webp"
        head="Top 10 MBA Universities in India"
      />
      <HomeApprovedCard
        img="https://distanceeducationschool.com/wp-content/uploads/2024/07/yellow-ugc-logo-60-px-6698b72e002cb-6698b9a49154c.webp"
        head="UGC-DEB Approved Universities 2024"
      />
      <HomeApprovedCard
        img="https://distanceeducationschool.com/wp-content/uploads/2023/08/top-mca.webp"
        head="Top 10 MCA Universities in India"
      />
      <HomeApprovedCard
        img="https://distanceeducationschool.com/wp-content/uploads/2022/08/nirf-universities-e1685967622748.png"
        head="NIRF Ranked Universities 2024"
      />
    </div>
  );
};

export default HomeApproved;
