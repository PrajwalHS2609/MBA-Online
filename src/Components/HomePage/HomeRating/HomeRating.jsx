import React from "react";
import "./HomeRating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeadphonesSimple,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
const HomeRating = () => {
  return (
    <div className="homeRating">
      <div className="homeRatingContent">
        <div className="homeRatingItem">
          <FontAwesomeIcon
            icon={faUserGraduate}
            className="homeRateIcon"
          ></FontAwesomeIcon>
        </div>
        <h3>89000+</h3>
        <p>Trusted by Students</p>
      </div>
      <div className="homeRatingContent">
        <div className="homeRatingItem">
          <FontAwesomeIcon
            icon={faHeadphonesSimple}
            className="homeRateIcon"
          ></FontAwesomeIcon>
        </div>
        <h3>500+</h3>
        <p>Experts Mentors</p>
      </div>
      <div className="homeRatingContent">
        <div className="homeRatingItem">
          <FontAwesomeIcon
            icon={faStar}
            className="homeRateIcon"
          ></FontAwesomeIcon>
        </div>
        <h3>4.9/5(539)</h3>
        <p>Google Rating</p>
      </div>
    </div>
  );
};

export default HomeRating;
