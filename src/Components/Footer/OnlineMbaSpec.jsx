import React from "react";
import { Link } from "react-router-dom";

const OnlineMbaSpec = () => {
  return (
    <div className="footerUniversity">
      <h4>Online MBA Specialisations</h4>
      <ul>
        <li>
          <Link to={"/"}>Business Management</Link>
        </li>
        <li>
          <Link to={"/"}>Data Science</Link>
        </li>
        <li>
          <Link to={"/"}>Entrepreneurship</Link>
        </li>
        <li>
          <Link to={"/"}>Financial Management</Link>
        </li>
        <li>
          <Link to={"/"}>Healthcare Management</Link>
        </li>
        <li>
          <Link to={"/"}>Human Resources Management</Link>
        </li>
        <li>
          <Link to={"/"}>International Business</Link>
        </li>
        <li>
          <Link to={"/"}>Marketing</Link>
        </li>
        <li>
          <Link to={"/"}>Operations Management</Link>
        </li>
        <li>
          <Link to={"/"}>Retail Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default OnlineMbaSpec;
