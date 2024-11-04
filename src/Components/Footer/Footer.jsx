import React from "react";
import "./Footer.css";
// import FooterBio from "./FooterBio";
import { Link } from "react-router-dom";
// import FooterContact from "./FooterContact";
// import OnlineMbaSpec from "./OnlineMbaSpec";
const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footerContent1">
        <FooterBio />
        <OnlineMbaSpec />
        <FooterContact />
      </div> */}

      <div className="footerContent3">
        <p>
          Copyright © 2024 R18Education <span> | </span>{" "}
          <Link to={"/"}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
