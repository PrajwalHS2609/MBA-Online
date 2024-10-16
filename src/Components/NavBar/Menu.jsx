import React, { useRef, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faX,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import menuBar from "./../../Imgs/menu.png";
import { Link } from "react-router-dom";
const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRefHome = useRef();
  let dropRef = useRef();
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
  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      dropRefHome.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      dropRefHome.current.style.display = "none";
      console.log("up");
    }
  };
  return (
    <div className="menuContainer">

      <div className="menuContainerWrapper">
      <li>
          <Link>Home</Link>
        </li>
      <li>
          Explore Courses
          <FontAwesomeIcon
            icon={faChevronDown}
            className="menuNavIcon1"
          ></FontAwesomeIcon>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Careers</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
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
              <a id="menuLink" href="tel:1234567890" onClick={hideSideBar}>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
                +91 1234567890
              </a>{" "}
            </li>
            <li className="">
              {" "}
              <span>
                ExploreCourses{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="menuNavDropIcon"
                  onClick={handleDropDown}
                ></FontAwesomeIcon>
              </span>{" "}
            </li>
            <li className="">
              {" "}
              <span>
                Top Universities{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="menuNavDropIcon"
                  onClick={handleDropDown}
                ></FontAwesomeIcon>
              </span>{" "}
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                LR Tag{" "}
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Blogs
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/contact-us"}>
                Contact Us
              </Link>
            </li>
            <div className="menuLine"></div>

            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Top Universities and College{" "}
              </Link>
            </li>

            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Trending Courses
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Study Abroad
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Entrance Exam{" "}
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Web Stories{" "}
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
