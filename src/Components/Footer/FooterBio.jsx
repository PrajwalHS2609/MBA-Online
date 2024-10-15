import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const FooterBio = () => {
  return (
    <div className="footerBio">
      <img
        src="https://www.learningroutes.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLR_logo.23fe17c1.webp&w=640&q=75"
        alt=""
      />
      <li>
        Embrace the convenience of learning and upskill with our extensive
        selection of online/distance degrees, diplomas, and certification
        courses, specially tailored for you.
      </li>
      <li>
        Learning Routes tries to address the academic issues that students face.
        Learning Routes is India's first online platform that aims to bring
        together all of the online institutions on a single platform.
      </li>
      <div className="footerSocial">
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
        </div>
      </div>
    </div>
  );
};

export default FooterBio;
