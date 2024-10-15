import React from "react";
import "./HomeCourses.css";
import HomeCoursesCard from "./HomeCoursesCard";
import man from "./../../../Imgs/Courses/man.png";
import finance from "./../../../Imgs/Courses/salary.png";
import market from "./../../../Imgs/Courses/analytics.png";
import it from "./../../../Imgs/Courses/technical-support.png";

const HomeCoursesMain = () => {
  return (
    <div className="homeCoursesMain">
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA (General Management)"
        img={man}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA (Finance)"
        img={finance}
        alt=""
      />
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA (Marketing)"
        img={market}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA (HR Management)"
        img={man}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA (Operation)"
        img={it}
        alt=""
      />
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA (Information Technology)"
        img={it}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA (Supply Chain Management)"
        img={market}
        alt=""
      />
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA (Data Analytics)"
        img={it}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA (Business Analytics)"
        img={market}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA (Hospitality Management)"
        img={man}
        alt=""
      />
    </div>
  );
};

export default HomeCoursesMain;
