import React from "react";
import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faChevronDown,
  faX,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import menuBar from "./../../Imgs/menu.png";
import { Link } from "react-router-dom";
const Menu = () => {
  // let [drop, setDrop] = useState(false);
  // let dropRefHome = useRef();
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  // let handleDropDown = () => {
  //   if (!drop) {
  //     setDrop(true);
  //     dropRefHome.current.style.display = "flex";
  //     console.log("down");
  //   } else {
  //     setDrop(false);
  //     dropRefHome.current.style.display = "none";
  //     console.log("up");
  //   }
  // };
  return (
    <div className="menuContainer">
      <div className="menuContainerWrapper">
        <li>
          <Link to={"/"} smooth>
            Home
          </Link>
        </li>
        <li>
          <NavHashLink to={"#homeCoursesNav"} smooth>
            {" "}
            Explore Courses
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to={"#homeUniversities"} smooth>
            {" "}
            Universities
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to={"#homeComparisonAbt"} smooth>
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to={"#contactUsNav"} smooth>
            Contact Us
          </NavHashLink>
        </li>
      </div>
      <div className="respMenuBar">
        <img src={menuBar} alt="menuBar" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FontAwesomeIcon
            icon={faX}
            className="closeX"
            onClick={hideSideBar}
          ></FontAwesomeIcon>
          <div className="innerMenu">
            <li className="">
              <a id="menuLink" href="tel:6362946008" onClick={hideSideBar}>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
                +91 6362946008{" "}
              </a>{" "}
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Home{" "}
              </Link>
            </li>
            <li className="respDropDown">
              {" "}
              <NavHashLink to={"#homeCoursesNav"} smooth onClick={hideSideBar}>
                ExploreCourses{" "}
              </NavHashLink>{" "}
            </li>
            <li className="">
              {" "}
              <NavHashLink
                id="menuLink"
                onClick={hideSideBar}
                to={"#homeUniversities"}
              >
                Universities
              </NavHashLink>
            </li>
            <li className="">
              {" "}
              <NavHashLink
                id="menuLink"
                onClick={hideSideBar}
                to={"#homeComparisonAbt"}
              >
                About{" "}
              </NavHashLink>
            </li>
            <li className="">
              {" "}
              <NavHashLink
                id="menuLink"
                onClick={hideSideBar}
                to={"#contactUsNav"}
              >
                Contact Us
              </NavHashLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
