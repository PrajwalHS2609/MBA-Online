import React from "react";
import "./Footer.css";
import FooterBio from "./FooterBio";
import FooterUniversity from "./FooterUniversity";
import OnlineMbaSpec from "./OnlineMbaSpec";
import FooterTopPg from "./FooterTopPg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent1">
        <FooterBio />
        <FooterUniversity />
        <FooterTopPg />
        <OnlineMbaSpec />
      </div>
      <div className="footerContent2">
        <img
          src="https://www.learningroutes.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcareerqr.99c2a425.webp&w=640&q=75"
          alt=""
        />
        <p>
          The intend of Learning Routes is to provide unbiased, precise
          information & comparative guidance on Universities and its Programmes
          of Study to the Admission Aspirants. The contents of the Learning
          Routes Site, such as Texts, Graphics, Images, Blogs, Videos University
          Logos, and other materials (collectively, 'Content') are for
          information purpose only. The content is not intended to be a
          substitute for in any form on offerings of its academia partners.
          Infringing on intellectual property or associated rights is not
          intended or deliberately acted upon. The information provided by
          Learning Routes on www.learningroutes.in is for general information
          purposes only. All information on the site is provided in good faith
          with accuracy and to the best of our knowledge, however, we make no
          representation or warranty of any kind, express or implied, regarding
          the accuracy, adequacy, validity, reliability, or completeness of any
          information on the Site. Learning Routes & its fraternity will not be
          liable for any errors, omissions, damages, or losses resultant, if
          any, from the usage of fit information.
        </p>
        <div className="footerContact">
          <h4>Contact Us</h4>
          <div className="footerContactContent1">
            {" "}
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="footerContactIco"
            ></FontAwesomeIcon>
            <a href="/">info@learningroutes.in</a>
          </div>
          <div className="footerContactContent2">
            <span>Get Free Counselling</span>
            <a href="tel:1234567890">+91 1234567890</a>
          </div>
        </div>
      </div>
      <div className="footerContent3">
        <div className="footerLinks">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About us</Link>
          </li>
          <li>
            <Link to={"/"}>LR tag</Link>
          </li>
          <li>
            <Link to={"/"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/"}>Contact Us</Link>
          </li>
        </div>
        <p>
          Copyright 2024@LearningRoutes | <Link to={"/"}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
