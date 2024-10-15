import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UpperNav = () => {
  return (
    <div className="upperNavContainer">
      <div className="uppernavContent">
        <li>
          <Link>Top Universities & Colleges</Link>
        </li>
        <li>
          <Link>Trending Courses</Link>
        </li>
        <li>
          <Link>Study Abroad</Link>
        </li>
        <li>
          <Link>Entrance Exams</Link>
        </li>
        <li>
          <Link>Web Stories</Link>
        </li>
      </div>
      <div className="uppernavContent">
        <li>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="upperNavIcon"
          ></FontAwesomeIcon>
          <a href="tel:1234567890">+91 1234567890</a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faUser}
            className="upperNavIcon"
          ></FontAwesomeIcon>{" "}
          Login
        </li>
        <li>
          <Link>Free Courses</Link>
        </li>{" "}
      </div>
    </div>
  );
};

export default UpperNav;
