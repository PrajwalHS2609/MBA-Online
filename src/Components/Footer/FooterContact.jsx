import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
const FooterContact = () => {
  return (
    <div className="footerContact">
      <h4>Address</h4>
      <div className="footerContactContent1">
        {" "}
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          className="footerContactIco"
        ></FontAwesomeIcon>
        <a href="/">info@prizmaacademy.com</a>
      </div>
      <div className="footerContactContent1">
        {" "}
        <FontAwesomeIcon
          icon={faLocationDot}
          className="footerContactIco"
        ></FontAwesomeIcon>
        <a href="/">Kalyan Nagar, Bangalore</a>
      </div>
      <div className="footerContactContent2">
        <span>Get Free Counselling</span>
        <a href="tel:9538608484">+91 9538 608 484</a>
      </div>
    </div>
  );
};

export default FooterContact;
