import React from "react";
import "./HomeEnquiry.css";
import HomeEnquiryContact from "./HomeEnquiryContact";
import HomeEnquiryForm from "./HomeEnquiryForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import enquiryImg from "./../../../Imgs/Contact.png";
import {
  faPhoneVolume,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const HomeEnquiry = () => {
  return (
    <div className="homeEnquiry" id="contactUsNav">
      <HomeEnquiryForm />

      <div className="homeEnquiryContent">
        <HomeEnquiryContact />
        <div className="footerContactContent">
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="enquiryContactIco"
            ></FontAwesomeIcon>
            <a href="tel:6362946008">+91 6362946008</a>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              className="enquiryContactIco"
            ></FontAwesomeIcon>
            <a href="/">India</a>
          </li>
        </div>
        <div className="enquirySocial">
          <h4>Follow Us At </h4>
          <div className="footerSocialContent">
            <li>
              {" "}
              <a href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footerSocialIco"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="footerSocialIco"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="footerSocialIco"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="footerSocialIco"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="footerSocialIco"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://wa.me/916362946008"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="footerSocialIco"
                ></FontAwesomeIcon>
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="homeEnquiryContent">
        <img src={enquiryImg} alt="enquiryImg" />
      </div>
    </div>
  );
};

export default HomeEnquiry;
