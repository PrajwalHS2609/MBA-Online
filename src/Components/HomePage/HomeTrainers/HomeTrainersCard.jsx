import React from "react";
import "./HomeTrainers.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const HomeTrainersCard = (props) => {
  return (
    <div className="homeTrainersCard">
      <div className="homeTrainersCardImg">
        <img
          src="https://collegevidya.com/_next/image/?url=https%3A%2F%2Fcollegevidyanew.s3.ap-south-1.amazonaws.com%2Fcounsellors%2Fsarthak.webp&w=1920&q=100"
          alt={props.alt}
        />
      </div>
      <div className="homeTrainersRating">
          <FontAwesomeIcon
            icon={faStar}
            className="rateIcon"
          ></FontAwesomeIcon>
          4.5
      </div>
      <div className="wrapper">
        {" "}
        <h5>John</h5>
        <p>Sr. Mentor for MBA</p>
        <span>3 Years Experience</span>
        <div className="homeTrainersCardConsult">
          <button>
            <Link to={"/"}>Consult Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTrainersCard;
