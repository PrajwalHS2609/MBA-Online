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
        course="MBA"
        course2="(General Management)"
        img={man}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA"
        course2="(Finance)"
        img={finance}
        alt=""
      />
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA"
        course2="(Marketing)"
        img={market}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA"
        course2="(HR Management)"
        img={man}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA"
        course2="(Operation)"
        img={it}
        alt=""
      />
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA"
        course2=" (Information Technology)"
        img={it}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA "
        course2="(Supply Chain Management)"
        img={market}
        alt=""
      />
      <HomeCoursesCard
        duration="1-2 years"
        course="MBA "
        course2="(Data Analytics)"
        img={it}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA "
        course2="(Business Analytics)"
        img={market}
        alt=""
      />
      <HomeCoursesCard
        duration="2 years"
        course="MBA"
        course2="(Hospitality Management)"
        img={man}
        alt=""
      />
      <HomeCoursesCard course="MBA" course2="(International Business)" />
      <HomeCoursesCard course="MBA" course2="(Project Management)" />
      <HomeCoursesCard course="MBA" course2="(Logistic and Supply Chain )" />
      <HomeCoursesCard course="MBA" course2="(International Finance)" />
      <HomeCoursesCard course="MBA" course2="(Retail Management)" />
      <HomeCoursesCard course="MBA" course2="(IT and Fintech )" />
      <HomeCoursesCard course="MBA" course2="(Fintech Management)" />
      <HomeCoursesCard course="MBA" course2="(Data Science and Analytics)" />
      <HomeCoursesCard course="MBA" course2="(Healthcare and Hospital)" />
      <HomeCoursesCard course="MBA" course2="(Banking and Finance)" />
      <HomeCoursesCard course="MBA" course2="(Marketing and HRM)" />
    </div>
  );
};

export default HomeCoursesMain;
