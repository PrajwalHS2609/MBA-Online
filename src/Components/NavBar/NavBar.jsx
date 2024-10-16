import React from "react";
import "./NavBar.css";
// import UpperNav from "./UpperNav/UpperNav";
import Menu from "./Menu";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      {/* <div className="navBarWrapper">
        <UpperNav/>
      </div> */}
      <div className="navBarWrapper">
        <Logo/>
        <Menu/>
      </div>
    </div>
  );
};

export default NavBar;
