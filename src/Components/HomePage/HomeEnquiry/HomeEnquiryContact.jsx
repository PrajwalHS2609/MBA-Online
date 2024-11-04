import React from "react";
import "./HomeEnquiry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faMobileScreenButton,
  faCommentDots,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
const HomeEnquiryContact = () => {
  let handleForm = (e) => {
    e.preventDefault();
    document.querySelector(".homeEnquiryForm").style.visibility = "visible";
  };

  return (
    <div className="homeEnquiryContact">
      <h5>Have Any Doubts ?</h5>
      <h2>Talk To Our Experts</h2>
      <p>Choose a mode thats suit you best</p>
      <div className="homeEnquiryContact-Content">
        <div className="homeEnquiryContactCard" onClick={handleForm}>
          {" "}
          <FontAwesomeIcon
            icon={faHouseLaptop}
            className="homeEnquiryIcon"
          ></FontAwesomeIcon>
          Schedule Video Call
        </div>
        <div
          className="homeEnquiryContactCard"
          id="homeEnquiryContactCard-whats"
        >
          <a
            href="https://wa.me/916362946008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCommentDots} className="homeEnquiryIcon" />
            Live Chat with Experts
          </a>
        </div>
        <div className="homeEnquiryContactCard" onClick={handleForm}>
          {" "}
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="homeEnquiryIcon"
          ></FontAwesomeIcon>
          Request Call Back
        </div>
        <div className="homeEnquiryContactCard" onClick={handleForm}>
          {" "}
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="homeEnquiryIcon"
          ></FontAwesomeIcon>
          Ask a Query
        </div>
      </div>
    </div>
  );
};

export default HomeEnquiryContact;
