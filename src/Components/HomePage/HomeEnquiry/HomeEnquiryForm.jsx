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
      <div className="formExit">
        {" "}
        <FontAwesomeIcon
          icon={faX}
          className="homeEnquiryFormIcon"
          onClick={handleExit}
        ></FontAwesomeIcon>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder="Your Name" required />
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Email Address"
          required
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Phone Number"
          required
        />
        <select name="" id="">
          <option value="">Select Course</option>
          <option value="">MBA (General Management)</option>
          <option value="">MBA (Finance)</option>
          <option value="">MBA (Marketing)</option>
          <option value="">MBA (HR Management)</option>
          <option value="">MBA (Information Technology)</option>
          <option value="">MBA (Supply Chain Management)</option>
          <option value="">MBA (Data Analytics)</option>
          <option value="">MBA (Business Analytics)</option>
        </select>
        <div className="privacy">
          {" "}
          <input type="checkbox" name="check" id="check" required checked />I
          authorise R18 Education - Online MBA and its associates to contact me
          with updates & notifications via Email, SMS, WhatsApp, and Voice call
          as per the Privacy Policy. This consent will override any registration
          for DNC / NDNC
        </div>
        <div className="homeEnquiryFormBtn">
          <button>I'm Interested</button>
        </div>
      </form>
    </div>
  );
};

export default HomeEnquiryForm;
