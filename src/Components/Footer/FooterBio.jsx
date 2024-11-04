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
import logo from "./../../Imgs/Edu Logo.png";
const FooterBio = () => {
  return (
    <div className="footerBio">
      <img src={logo} alt="" />
      <li>
        At Prizma Academy, we make learning more accessible and convenient with
        a wide range of online and distance education options. Whether you're
        looking for degrees, diplomas, or certification courses, our programs
        are designed to fit your needs and help you upskill at your own pace.
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
