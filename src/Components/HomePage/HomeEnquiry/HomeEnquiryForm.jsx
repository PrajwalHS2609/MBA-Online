import React from "react";
import "./HomeEnquiry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const HomeEnquiryForm = () => {
  let handleExit = () => {
    document.querySelector(".homeEnquiryForm").style.visibility = "hidden";
  };
  return (
    <div className="homeEnquiryForm">
      <div>
        {" "}
        <FontAwesomeIcon
          icon={faX}
          className="homeEnquiryFormIcon"
          onClick={handleExit}
        ></FontAwesomeIcon>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder="Name" />
        <input type="text" name="" id="" placeholder="Email" />
        <input type="text" name="" id="" placeholder="Phone" />

        <select name="" id="">
          <option value="">Select Your Option</option>
          <option value="">KA</option>
          <option value="">TN</option>
          <option value="">AP</option>
          <option value="">ND</option>
          <option value="">PU</option>
        </select>
        <textarea name="" id="" placeholder="Message"></textarea>
        <div className="homeEnquiryFormBtn">
          <button>Book Free Counselling</button>
        </div>
      </form>
    </div>
  );
};

export default HomeEnquiryForm;
