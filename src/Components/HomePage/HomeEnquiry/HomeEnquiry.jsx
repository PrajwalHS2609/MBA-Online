import React from "react";
import "./HomeEnquiry.css";
import HomeEnquiryContact from "./HomeEnquiryContact";
import HomeEnquiryForm from "./HomeEnquiryForm";
const HomeEnquiry = () => {
  return (
    <div className="homeEnquiry">
      <HomeEnquiryForm />

      <div className="homeEnquiryContent">
        <HomeEnquiryContact />
      </div>
      <div className="homeEnquiryContent">
        <img
          src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-1850.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeEnquiry;
