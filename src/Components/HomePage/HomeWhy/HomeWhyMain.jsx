import React from "react";
import "./HomeWhy.css";
import check from "./../../../Imgs/check.png";
import HomeWhyHead from "./HomeWhyHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import whyBanner from "./../../../Imgs/WhyImg/WhyBanner.png";
const HomeWhyMain = () => {
  return (
    <div className="homeWhyMain">
      <div className="homeWhyMainContainer">
        <div className="homeWhyWrapper">
          <HomeWhyHead />

          <ul>
            <li>
              <img src={check} alt="" />
              Flexible schedule & timings
            </li>
            <li>
              <img src={check} alt="" />
              Affordable, premium options
            </li>
            <li>
              <img src={check} alt="" />
              Wide range of courses
            </li>
            <li>
              <img src={check} alt="" />
              Easy access to materials
            </li>
            <li>
              <img src={check} alt="" />
              Job placements & career opportunities
            </li>
            <li>
              <img src={check} alt="" />
              Advanced learning ecosystem
            </li>
            <li>
              <img src={check} alt="" />
              Personalized learning approach
            </li>
            <li>
              <img src={check} alt="" />
              Free career counseling
            </li>
            <li>
              <img src={check} alt="" />
              Post-course career assistance
            </li>
          </ul>
          <div className="homeWhyMainBtn">
            <button>
              Lets get started{" "}
              <FontAwesomeIcon
                icon={faBell}
                className="whyIcon"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="homeWhyWrapper">
          <img src={whyBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeWhyMain;
