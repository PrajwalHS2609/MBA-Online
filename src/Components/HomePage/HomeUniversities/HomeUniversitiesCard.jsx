import React from "react";
import "./HomeUniversities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faSchool,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
const HomeUniversitiesCard = (props) => {
  let handleForm = (e) => {
    e.preventDefault();
    document.querySelector(".homeEnquiryForm").style.visibility = "visible";
  };
  return (
    <div className="homeUniversitiesCard">
      <div className="homeUniversitiesCard-content1">
        <img src={props.img} alt={props.imgAlt} loading="lazy" />
        <span>
          {" "}
          <img src={props.logo} alt={props.logoAlt} loading="lazy" />
        </span>
      </div>
      <div className="homeUniversitiesCard-content2">
        <h3>{props.head}</h3>
      </div>
      <div className="homeUniversitiesCard-content3">
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faUserGraduate}
            className="uniIcon"
          ></FontAwesomeIcon>
          Master's Degree
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faBookOpenReader}
            className="uniIcon"
          ></FontAwesomeIcon>
          UGC entitled degree course
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faSchool}
            className="uniIcon"
          ></FontAwesomeIcon>
          NAAC A+ accredited university
        </li>
      </div>
      <div className="homeUniversitiesCard-content4">
        <div className="homeUniversitiesBtn">
          <button onClick={handleForm}>Enquire Now</button>
        </div>
        <div className="homeUniversitiesBtn">
          <button>Download Brochure</button>
        </div>
      </div>
    </div>
  );
};

export default HomeUniversitiesCard;
