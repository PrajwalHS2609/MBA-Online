import React from "react";
import "./NavBar.css";
import logo from "./../../Imgs/r18logo.png";
const Logo = () => {
  return (
    <div className="logoContainer">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
